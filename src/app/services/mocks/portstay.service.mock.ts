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

        let date_01: Date = new Date();
        date_01.setDate(today.getDate() - 4);
        let date_02: Date = new Date();
        date_02.setDate(today.getDate() - 3);
        let date_03: Date = new Date();
        date_03.setDate(today.getDate() - 1);
        let date_04: Date = new Date();
        date_04.setDate(today.getDate());
        let date_05: Date = new Date();
        date_05.setDate(today.getDate() + 2);
        let date_06: Date = new Date();
        date_06.setDate(today.getDate() + 3);
        let date_07: Date = new Date();
        date_07.setDate(today.getDate() + 5);
        let date_08: Date = new Date();
        date_08.setDate(today.getDate() + 6);
        let date_09: Date = new Date();
        date_09.setDate(today.getDate() + 8);
        let date_10: Date = new Date();
        date_10.setDate(today.getDate() + 11);
        let date_11: Date = new Date();
        date_11.setDate(today.getDate() + 12);
        let date_12: Date = new Date();
        date_12.setDate(today.getDate() + 13);
        let date_13: Date = new Date();
        date_13.setDate(today.getDate() + 15);
        let date_14: Date = new Date();
        date_14.setDate(today.getDate() + 17);
        let date_15: Date = new Date();
        date_15.setDate(today.getDate() + 18);
        let date_16: Date = new Date();
        date_16.setDate(today.getDate() + 21);
        let date_17: Date = new Date();
        date_17.setDate(today.getDate() + 23);
        let date_18: Date = new Date();
        date_18.setDate(today.getDate() + 25);
        let date_19: Date = new Date();
        date_19.setDate(today.getDate() + 27);
        let date_20: Date = new Date();
        date_20.setDate(today.getDate() + 31);
        let date_21: Date = new Date();
        date_21.setDate(today.getDate() + 33);
        let date_22: Date = new Date();
        date_22.setDate(today.getDate() + 33);
        let date_23: Date = new Date();
        date_23.setDate(today.getDate() + 35);
        let date_24: Date = new Date();
        date_24.setDate(today.getDate() + 36);
        let date_25: Date = new Date();
        date_25.setDate(today.getDate() + 40);
        let date_26: Date = new Date();
        date_26.setDate(today.getDate() + 43);
        let date_27: Date = new Date();
        date_27.setDate(today.getDate() + 45);
        let date_28: Date = new Date();
        date_28.setDate(today.getDate() + 48);
        let date_29: Date = new Date();
        date_29.setDate(today.getDate() + 51);
        let date_30: Date = new Date();
        date_30.setDate(today.getDate() + 56);
        let date_31: Date = new Date();
        date_31.setDate(today.getDate() + 58);
        let date_32: Date = new Date();
        date_32.setDate(today.getDate() + 61);

        let psc_01: PortStay = {

            scheduleId: 17539287,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: date_02,//.toLocaleDateString(),
            timeOfDeparture: date_06,//.toLocaleDateString(),
            portName: "Dubai"
        }

        let psc_02: PortStay = {

            scheduleId: 17539288,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: date_07,//.toLocaleDateString(),
            timeOfDeparture: date_10,//.toLocaleDateString(),
            portName: "Shanghai"
        }

        let psc_03: PortStay = {

            scheduleId: 17522287,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: date_11,//.toLocaleDateString(),
            timeOfDeparture: date_14,//.toLocaleDateString(),
            portName: "Christchurch"
        }

        let psc_04: PortStay = {

            scheduleId: 12739287,
            shipId: 1,
            shipName: "MS Ulrike",
            timeOfArrival: date_18,//.toLocaleDateString(),
            timeOfDeparture: date_21,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_05: PortStay = {

            scheduleId: 67539287,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: date_02,//.toLocaleDateString(),
            timeOfDeparture: date_05,//.toLocaleDateString(),
            portName: "Miami"
        }

        let psc_06: PortStay = {

            scheduleId: 17539587,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: date_06,//.toLocaleDateString(),
            timeOfDeparture: date_08,//.toLocaleDateString(),
            portName: "Dubai"
        }

        let psc_07: PortStay = {

            scheduleId: 17539688,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: date_10,//.toLocaleDateString(),
            timeOfDeparture: date_12,//.toLocaleDateString(),
            portName: "Shanghai"
        }

        let psc_08: PortStay = {

            scheduleId: 17522787,
            shipId: 2,
            shipName: "CCC Findus",
            timeOfArrival: date_13,//.toLocaleDateString(),
            timeOfDeparture: date_15,//.toLocaleDateString(),
            portName: "New York"
        }

        let psc_09: PortStay = {

            scheduleId: 12039287,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: date_03,//.toLocaleDateString(),
            timeOfDeparture: date_04,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_10: PortStay = {

            scheduleId: 67539280,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: date_05,//.toLocaleDateString(),
            timeOfDeparture: date_07,//.toLocaleDateString(),
            portName: "Lissabon"
        }

        let psc_11: PortStay = {

            scheduleId: 12739207,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: date_13,//.toLocaleDateString(),
            timeOfDeparture: date_21,//.toLocaleDateString(),
            portName: "Hamburg"
        }

        let psc_12: PortStay = {

            scheduleId: 74242287,
            shipId: 4,
            shipName: "AIDA Aura",
            timeOfArrival: date_25,//.toLocaleDateString(),
            timeOfDeparture: date_26,//.toLocaleDateString(),
            portName: "Port Victoria"
        }

        let psc_13: PortStay = {

            scheduleId: 12739207,
            shipId: 8,
            shipName: "CruiseShip Galactica",
            timeOfArrival: date_06,//.toLocaleDateString(),
            timeOfDeparture: date_08,//.toLocaleDateString(),
            portName: "Vancouver"
        }

        let psc_14: PortStay = {

            scheduleId: 74244587,
            shipId: 8,
            shipName: "CruiseShip Galactica",
            timeOfArrival: date_09,//.toLocaleDateString(),
            timeOfDeparture: date_11,//.toLocaleDateString(),
            portName: "Jebel Ali"
        }

        let psc_15: PortStay = {

            scheduleId: 12747207,
            shipId: 5,
            shipName: "AIDA  Amar",
            timeOfArrival: date_03,//.toLocaleDateString(),
            timeOfDeparture: date_07,//.toLocaleDateString(),
            portName: "Capetown"
        }

        let psc_16: PortStay = {

            scheduleId: 74248787,
            shipId: 5,
            shipName: "AIDA  Amar",
            timeOfArrival: date_13,//.toLocaleDateString(),
            timeOfDeparture: date_19,//.toLocaleDateString(),
            portName: "Dubai"
        }

        let psc_17: PortStay = {

            scheduleId: 74248713,
            shipId: 3,
            shipName: "Isana 2",
            timeOfArrival: date_20,//.toLocaleDateString(),
            timeOfDeparture: date_23,//.toLocaleDateString(),
            portName: "Tokyo"
        }

        let psc_18: PortStay = {

            scheduleId: 74248714,
            shipId: 6,
            shipName: "MEARSC Harrington",
            timeOfArrival: date_20,//.toLocaleDateString(),
            timeOfDeparture: date_23,//.toLocaleDateString(),
            portName: "Capetown"
        }

        let psc_19: PortStay = {

            scheduleId: 74248715,
            shipId: 7,
            shipName: "MEARSC Luna",
            timeOfArrival: date_20,//.toLocaleDateString(),
            timeOfDeparture: date_23,//.toLocaleDateString(),
            portName: "Stockholm"
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
            await this.portStays.setItem(psc_17.scheduleId.toString(), psc_17);
            await this.portStays.setItem(psc_18.scheduleId.toString(), psc_18);
            await this.portStays.setItem(psc_19.scheduleId.toString(), psc_19);
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