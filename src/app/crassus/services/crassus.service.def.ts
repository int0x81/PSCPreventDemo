import { Guid } from 'guid-typescript';
import { CrassusResult } from '../models/crassusresult';
import { Subject } from 'rxjs';
import { Ship } from 'src/app/models/ship';

export interface CrassusServiceDefinition {

    /**
     * This subject is getting fed if the prediction shall be displayed. this can either happen
     * when a new table entry is selected or a api call finished loading
     */
    nextPredictionSubject: Subject<CrassusResult>;

    /**
     * This subject is getting fed if a new ship is selected
     */
    newShipSelectedSubject: Subject<Ship>;

    /**
     * This subject is getting ged when the user toggles the related switch
     */
    ongoingStaysSubject: Subject<void>;

    
    /**
     * Predicts the chance of vessel detaintion for a given port stay
     * @param scheduleId The id of the port stay
     */
    getPrediction(scheduleId: number): Promise<CrassusResult>;

    /**
     * Gets the result of the object that is currently beeing selected
     */
    getCurrentCrassultResult(): CrassusResult;

    /**
     * Gets the currently selected ship
     */
    getSelectedShip(): Ship;

    /**
     * Gets the current state whether or not the user wants to see ongoing port stays
     */
    getOngoingStayState();
}