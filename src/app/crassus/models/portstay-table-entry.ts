import { PortStay } from 'src/app/models/portstay';
import { CrassusResult } from './crassusresult';

export class PortStayTableEntry {

    public readonly ps: PortStay;
    public prediction: CrassusResult;
    public selected: boolean;

    constructor(portstay: PortStay) {
        this.ps = portstay;
        this.prediction = null; //null states that the value has not been loaded yet
        this.selected = false;
    }
}