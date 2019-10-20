import { ShipServiceDefinition } from '../ship.service.def';
import { Ship } from 'src/app/models/ship';
import * as localForage from 'localforage';
import { Subject } from 'rxjs';

export class ShipMock implements ShipServiceDefinition {

    private readonly ships: LocalForage;

    shipsCacheUpdate: Subject<void> = new Subject<void>();

    newShips: Subject<Ship[]> = new Subject<Ship[]>();
    deletedShips: Subject<number[]> = new Subject<number[]>();

    constructor() {
        this.ships = localForage.createInstance({
            name: "MockedShips"
        });
    }

    async loadShips(): Promise<void> {

        let ships: Ship[] = new Array<Ship>();

        let ship_01: Ship = {
            id: 1,
            name: "MS Ulrike",
            image: ""
        }

        let ship_02: Ship = {
            id: 2,
            name: "CCC Findus",
            image: ""
        }

        let ship_03: Ship = {
            id: 3,
            name: "Isana 2",
            image: ""
        }

        let ship_04: Ship = {
            id: 4,
            name: "AIDA Aura",
            image: ""
        }

        let ship_05: Ship = {
            id: 5,
            name: "AIDA Amar",
            image: ""
        }

        let ship_06: Ship = {
            id: 6,
            name: "MEARSC Harrington",
            image: ""
        }

        let ship_07: Ship = {
            id: 7,
            name: "MEARSC Luna",
            image: ""
        }

        let ship_08: Ship = {
            id: 8,
            name: "CruiseShip Galactica",
            image: ""
        }

        await this.ships.setItem(ship_01.id.toString(), ship_01);
        await this.ships.setItem(ship_02.id.toString(), ship_02);
        await this.ships.setItem(ship_03.id.toString(), ship_03);
        await this.ships.setItem(ship_04.id.toString(), ship_04);
        await this.ships.setItem(ship_05.id.toString(), ship_05);
        await this.ships.setItem(ship_06.id.toString(), ship_06);
        await this.ships.setItem(ship_07.id.toString(), ship_07);
        await this.ships.setItem(ship_08.id.toString(), ship_08);
        
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve();
            }, 1000); //wait 1000ms to simulate the api call
        });
    }    
    
    async getShips(): Promise<Ship[]> {

        let allShips = new Array<Ship>();

        await this.ships.iterate<Ship, any>((value) => {
            allShips.push(value);
        });

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(allShips);
            }, 500);
        });
    }  
}