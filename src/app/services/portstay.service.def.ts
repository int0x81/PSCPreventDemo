import { PortStay } from '../models/portstay';
import { Subject } from 'rxjs';

export interface PortStayServiceDefinition {

    /**
     * This subject gets fed whenever the indexedDb 
     * gets updated
     */
    portStaysCacheUpdate: Subject<void>;

    /**
     * Loads the next upcoming port stays from the api
     * and stores them in the indexedDb. this step also removes
     * all past port stays from indexedDb
     */
    loadPortStays(): Promise<void>;

    /**
     * Gets the next port stays from indexedDb
     */
    getPortStays(showOngoingPortstays: boolean): Promise<PortStay[]>;

    /**
     * Gets the next port stays for a given ship from indexedDb
     */
    getPortStaysByShipId(shipId: number, showOngoingPortstays: boolean): Promise<PortStay[]>;
}