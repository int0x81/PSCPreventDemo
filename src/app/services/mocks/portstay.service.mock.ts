import { PortStayServiceDefinition } from '../portstay.service.def';
import { PortStay } from 'src/app/models/portstay';
import * as localForage from 'localforage';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PortStayMock implements PortStayServiceDefinition {

    private readonly portStays: LocalForage;

    portStaysCacheUpdate: Subject<void> = new Subject<void>();

    constructor() {
        this.portStays = localForage.createInstance({
            name: "MockedPortStays"
        });
    }

    loadPortStays(): Promise<void> {

        let today = new Date();

        let dateFrom_01: Date = new Date();
        dateFrom_01.setDate(today.getDate() + 1);
        let dateUntil_01: Date = new Date();
        dateUntil_01.setDate(today.getDate() + 2);

        let dateFrom_02: Date = new Date();
        dateFrom_02.setDate(today.getDate() + 3);
        let dateUntil_02: Date = new Date();
        dateUntil_02.setDate(today.getDate() + 5);

        let dateFrom_03: Date = new Date();
        dateFrom_03.setDate(today.getDate() + 4);
        let dateUntil_03: Date = new Date();
        dateUntil_03.setDate(today.getDate() + 6);

        let dateFrom_04: Date = new Date();
        dateFrom_04.setDate(today.getDate() + 4);
        let dateUntil_04: Date = new Date();
        dateUntil_04.setDate(today.getDate() + 6);

        let dateFrom_05: Date = new Date();
        dateFrom_05.setDate(today.getDate() + 5);
        let dateUntil_05: Date = new Date();
        dateUntil_05.setDate(today.getDate() + 6);

        let dateFrom_06: Date = new Date();
        dateFrom_06.setDate(today.getDate() + 8);
        let dateUntil_06: Date = new Date();
        dateUntil_06.setDate(today.getDate() + 9);

        let dateFrom_07: Date = new Date();
        dateFrom_07.setDate(today.getDate() + 10);
        let dateUntil_07: Date = new Date();
        dateUntil_07.setDate(today.getDate() + 12);

        let dateFrom_08: Date = new Date();
        dateFrom_08.setDate(today.getDate() + 12);
        let dateUntil_08: Date = new Date();
        dateUntil_08.setDate(today.getDate() + 18);

        let dateFrom_09: Date = new Date();
        dateFrom_09.setDate(today.getDate() + 13);
        let dateUntil_09: Date = new Date();
        dateUntil_09.setDate(today.getDate() + 14);

        let dateFrom_10: Date = new Date();
        dateFrom_10.setDate(today.getDate() + 15);
        let dateUntil_10: Date = new Date();
        dateUntil_10.setDate(today.getDate() + 16);

        let dateFrom_11: Date = new Date();
        dateFrom_11.setDate(today.getDate() + 15);
        let dateUntil_11: Date = new Date();
        dateUntil_11.setDate(today.getDate() + 16);

        let dateFrom_12: Date = new Date();
        dateFrom_12.setDate(today.getDate() + 18);
        let dateUntil_12: Date = new Date();
        dateUntil_12.setDate(today.getDate() + 19);

        let dateFrom_13: Date = new Date();
        dateFrom_13.setDate(today.getDate() + 20);
        let dateUntil_13: Date = new Date();
        dateUntil_13.setDate(today.getDate() + 20);

        let dateFrom_14: Date = new Date();
        dateFrom_14.setDate(today.getDate() + 20);
        let dateUntil_14: Date = new Date();
        dateUntil_14.setDate(today.getDate() + 22);

        let dateFrom_15: Date = new Date();
        dateFrom_15.setDate(today.getDate() + 22);
        let dateUntil_15: Date = new Date();
        dateUntil_15.setDate(today.getDate() + 23);

        let dateFrom_16: Date = new Date();
        dateFrom_16.setDate(today.getDate() + 24);
        let dateUntil_16: Date = new Date();
        dateUntil_16.setDate(today.getDate() + 27);

        let psc_01: PortStay = {

            scheduleId: 17539287,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: dateFrom_01,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_01,//.toLocaleDateString(),
            portName: "Dubai"
        }

        let psc_02: PortStay = {

            scheduleId: 17539288,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: dateFrom_02,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_02,//.toLocaleDateString(),
            portName: "Shanghai"
        }

        let psc_03: PortStay = {

            scheduleId: 17522287,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: dateFrom_03,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_03,//.toLocaleDateString(),
            portName: "Tokyo"
        }

        let psc_04: PortStay = {

            scheduleId: 12739287,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: dateFrom_04,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_04,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_05: PortStay = {

            scheduleId: 67539287,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: dateFrom_05,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_05,//.toLocaleDateString(),
            portName: "Miami"
        }

        let psc_06: PortStay = {

            scheduleId: 17539587,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: dateFrom_06,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_06,//.toLocaleDateString(),
            portName: "Dubai"
        }

        let psc_07: PortStay = {

            scheduleId: 17539688,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: dateFrom_07,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_07,//.toLocaleDateString(),
            portName: "Shanghai"
        }

        let psc_08: PortStay = {

            scheduleId: 17522787,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: dateFrom_08,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_08,//.toLocaleDateString(),
            portName: "New York"
        }

        let psc_09: PortStay = {

            scheduleId: 12039287,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: dateFrom_09,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_09,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_10: PortStay = {

            scheduleId: 67539280,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: dateFrom_10,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_10,//.toLocaleDateString(),
            portName: "Lissabon"
        }

        let psc_11: PortStay = {

            scheduleId: 12739207,
            shipId: 8,
            shipName: "CruiseShip Galactica",
            timeOfArrival: dateFrom_11,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_11,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_12: PortStay = {

            scheduleId: 74242287,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: dateFrom_12,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_12,//.toLocaleDateString(),
            portName: "Port Victoria"
        }

        let psc_13: PortStay = {

            scheduleId: 12739207,
            shipId: 8,
            shipName: "CruiseShip Galactica",
            timeOfArrival: dateFrom_13,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_13,//.toLocaleDateString(),
            portName: "Vancouver"
        }

        let psc_14: PortStay = {

            scheduleId: 74244587,
            shipId: 5,
            shipName: "AIDA  Amar",
            timeOfArrival: dateFrom_14,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_14,//.toLocaleDateString(),
            portName: "Jebel Ali"
        }

        let psc_15: PortStay = {

            scheduleId: 12747207,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: dateFrom_16,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_16,//.toLocaleDateString(),
            portName: "Christchurch"
        }

        let psc_16: PortStay = {

            scheduleId: 74248787,
            shipId: 5,
            shipName: "AIDA  Amar",
            timeOfArrival: dateFrom_16,//.toLocaleDateString(),
            timeOfDeparture: dateUntil_16,//.toLocaleDateString(),
            portName: "Dubai"
        }

        return this.portStays.clear().then(async () => {

            await this.portStays.setItem(psc_01.scheduleId.toString(), psc_01);
            await this.portStays.setItem(psc_02.scheduleId.toString(), psc_02);
            await this.portStays.setItem(psc_03.scheduleId.toString(), psc_03);
            await this.portStays.setItem(psc_04.scheduleId.toString(), psc_04);
            await this.portStays.setItem(psc_05.scheduleId.toString(), psc_05);
            await this.portStays.setItem(psc_06.scheduleId.toString(), psc_06);
            await this.portStays.setItem(psc_07.scheduleId.toString(), psc_07);
            await this.portStays.setItem(psc_08.scheduleId.toString(), psc_08);
            await this.portStays.setItem(psc_09.scheduleId.toString(), psc_09);
            await this.portStays.setItem(psc_10.scheduleId.toString(), psc_10);
            await this.portStays.setItem(psc_11.scheduleId.toString(), psc_11);
            await this.portStays.setItem(psc_12.scheduleId.toString(), psc_12);
            await this.portStays.setItem(psc_13.scheduleId.toString(), psc_13);
            await this.portStays.setItem(psc_14.scheduleId.toString(), psc_14);
            await this.portStays.setItem(psc_15.scheduleId.toString(), psc_15);
            await this.portStays.setItem(psc_16.scheduleId.toString(), psc_16);
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