import { ShipServiceDefinition } from '../ship.service.def';
import { Ship } from 'src/app/models/ship';
import * as localForage from 'localforage';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable()
export class ShipService implements ShipServiceDefinition {

    private readonly ships: LocalForage;

    shipsCacheUpdate: Subject<void> = new Subject<void>();

    constructor(private http: HttpClient) {

        this.ships = localForage.createInstance({
            name: "Ships"
        });
    }

    loadShips(): Promise<void> {

        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': environment.API,
                'Accept': 'application/json'
            })
        }

        return this.http.get<Ship[]>(environment.API + '/ships/get', httpOptions).toPromise().then(async (loadedShips) => {

            let dbTasks: Promise<Ship>[] = new Array<Promise<Ship>>();

            for(let loadedShip of loadedShips)
              dbTasks.push(this.ships.setItem(loadedShip.id.toString(), loadedShip));

            await Promise.all(dbTasks);

        this.shipsCacheUpdate.next();
        }, () => {
            console.error("Unable to load new ships from Api");
        }); 
    }    
    
    async getShips(): Promise<Ship[]> {
        
        let allShips = new Array<Ship>();

        await this.ships.iterate<Ship, any>((value) => {
            allShips.push(value);
        });

        return allShips;
    }
}