import { Injectable } from '@angular/core';
import { PortStayServiceDefinition } from '../portstay.service.def';
import { PortStay } from 'src/app/models/portstay';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs';
import * as localForage from 'localforage';
import { collectExternalReferences } from '@angular/compiler';
import { environment } from 'src/environments/environment';

@Injectable()
export class PortStayService implements PortStayServiceDefinition {

    private readonly portStays: LocalForage;
    portStaysCacheUpdate: Subject<void> = new Subject<void>();

    constructor(private http: HttpClient) {
        this.portStays = localForage.createInstance({
            name: "PortStays"
        });
    }
    
    async loadPortStays(): Promise<void> {

        let toDelete = new Array<string>();

        let now = new Date();

        await this.portStays.iterate<PortStay, any>((value, key, iterationNumber) => {

            //LEAVE THIS!! This is a work-around related to an external bug. 'value.timeOfDeparture < now' wont work!
            if(new Date(value.timeOfDeparture.toString()) < now) 
              toDelete.push(value.scheduleId.toString());
        });

        for(let entry of toDelete)
          await this.portStays.removeItem(entry);

        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': environment.API,
                'Accept': 'application/json'
            })
        }

        return this.http.get<PortStay[]>(environment.API + '/portstays/get', httpOptions).toPromise().then(async (loadedPortStays) => {

            let dbTasks: Promise<PortStay>[] = new Array<Promise<PortStay>>();

            for(let loadedPortstay of loadedPortStays)
              dbTasks.push(this.portStays.setItem(loadedPortstay.scheduleId.toString(), loadedPortstay));

            await Promise.all(dbTasks);

            this.portStaysCacheUpdate.next();
        }, () => {
            console.error("Unable to load new portstays from Api");
        }); 
    } 

    async getPortStays(showOngoingPortstays: boolean): Promise<PortStay[]> {

        let allPortStays: PortStay[] = new Array<PortStay>();

        await this.portStays.iterate<PortStay, any>((value, key, iterationNumber) => {
          
          if(!showOngoingPortstays) {
            if(new Date(value.timeOfArrival) > new Date())
              allPortStays.push(value)
          } else
            allPortStays.push(value)     

        });

        allPortStays.sort((a, b) => {
            if(a.timeOfArrival < b.timeOfArrival)
              return -1;
            else if(a.timeOfArrival > b.timeOfArrival)
              return 1;
            else
              return 0;
        });
        return allPortStays.slice(0, 16);
    }

    async getPortStaysByShipId(shipId: number, showOngoingPortstays: boolean): Promise<PortStay[]> {
        
        let portStaysByShip: PortStay[] = new Array<PortStay>();
        
        await this.portStays.iterate<PortStay, any>((value) => {

            if(value.shipId == shipId) {
              if(!showOngoingPortstays) {
                if(new Date(value.timeOfArrival) > new Date())
                portStaysByShip.push(value)
              } else
              portStaysByShip.push(value)
            }
        });

        portStaysByShip.sort((a, b) => {
            if(a.timeOfArrival < b.timeOfArrival)
              return -1;
            else if(a.timeOfArrival > b.timeOfArrival)
              return 1;
            else
              return 0;
        });

        return portStaysByShip.slice(0, 12);
    }
}