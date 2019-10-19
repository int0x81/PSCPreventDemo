import { CrassusServiceDefinition } from './crassus.service.def';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CrassusResult } from '../models/crassusresult';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';
import { Ship } from 'src/app/models/ship';

@Injectable()
export class CrassusService implements CrassusServiceDefinition {

    private currentCrassusResult: CrassusResult | null;
    private showOngoingStays: boolean;
    private selectedShip: Ship;

    nextPredictionSubject: Subject<CrassusResult> = new Subject<CrassusResult>();

    newShipSelectedSubject: Subject<Ship> = new Subject<Ship>();

    ongoingStaysSubject: Subject<void> = new Subject<void>();

    constructor(private http: HttpClient) {
        this.nextPredictionSubject.subscribe((res) => this.currentCrassusResult = res);
        this.ongoingStaysSubject.subscribe(() => this.showOngoingStays = !this.showOngoingStays);
        this.showOngoingStays = false;
    }
    
    getPrediction(scheduleId: number): Promise<CrassusResult> {
        
        const httpOptions = {
            headers: new HttpHeaders({
                'Access-Control-Allow-Origin': environment.API,
                'Accept': 'application/json'
            })
        }

        return this.http.get<CrassusResult>(environment.API + '/predictions/crassus?scheduleid=' + scheduleId, httpOptions).toPromise();
    }

    getCurrentCrassultResult(): CrassusResult {
        return this.currentCrassusResult;
    }

    getSelectedShip(): Ship {
        return this.selectedShip;
    }

    getOngoingStayState() {
        return this.showOngoingStays;
    }
}