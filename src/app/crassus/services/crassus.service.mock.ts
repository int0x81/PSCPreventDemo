import { CrassusServiceDefinition } from './crassus.service.def';
import { Injectable } from '@angular/core';
import { CrassusResult } from '../models/crassusresult';
import { Subject } from 'rxjs';
import { Ship } from 'src/app/models/ship';

@Injectable()
export class CrassusMock implements CrassusServiceDefinition {

    private currentPrediction: CrassusResult | null = null;
    private showOngoingStays: boolean;
    private selectedShip: Ship;

    nextPredictionSubject: Subject<CrassusResult> = new Subject<CrassusResult>();

    newShipSelectedSubject: Subject<Ship> = new Subject<Ship>();

    ongoingStaysSubject: Subject<void> = new Subject<void>();

    constructor() {
        this.nextPredictionSubject.subscribe((res) => this.currentPrediction = res);
        this.newShipSelectedSubject.subscribe((newShip) => this.selectedShip = newShip);
        this.ongoingStaysSubject.subscribe(() => this.showOngoingStays = !this.showOngoingStays);
        this.showOngoingStays = false;
    }
    
    getPrediction(scheduleId: number): Promise<CrassusResult> {
        
        return new Promise((resolve) => {
            setTimeout(() => {

                let mockedPrediction = Math.random() < 0.15; //Represents the real world average of performed pscs
                let mockedProbability = Math.random() / 2;
                let mockedDeficiencies: number = 0;

                if(mockedPrediction) {
                    mockedDeficiencies = Math.round(Math.random());
                    mockedProbability += 0.5;
                    if(mockedDeficiencies == 1)
                        mockedDeficiencies = Math.round(Math.random() * 10);
                }

                let mockedResult: CrassusResult = {

                    pscPrediction: mockedPrediction,
                    probability: mockedProbability * 100,
                    predictedNumberOfDeficiencies: mockedDeficiencies

                } 

                resolve(mockedResult); //generate random prediction value
            }, Math.random() * 1900); //wait arbitrary amount of time to simulate the api loading process
        });
    }

    getCurrentCrassultResult(): CrassusResult {
        return this.currentPrediction;
    }


    getSelectedShip(): Ship {
        return this.selectedShip;
    }
    
    getOngoingStayState() {
        return this.showOngoingStays;
    }
}