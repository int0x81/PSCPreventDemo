import { Ship } from '../models/ship';
import { Subject } from 'rxjs';

export interface ShipServiceDefinition {

    /**
     * This subject gets fed whenever the ships-indexedDb 
     * gets updated
     */
    shipsCacheUpdate: Subject<void>;

    /**
     * Loads all active managed ships from the api and stores
     * them in the indexedDb
     */
    loadShips(): Promise<void>;

    /**
     * Gets all ships from indexedDb
     */
    getShips(): Promise<Ship[]>;
}