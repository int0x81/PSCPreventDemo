import { MerendaServiceDef } from './merenda.service.def';
import { ChartValue } from '../models/chartValue';

export class MerendaMock implements MerendaServiceDef {

    getValuePairs(xValue: string, yValue: string, k: number): ChartValue[] {
        throw new Error("Method not implemented.");
    }    
    
    getPossibleAxisValues(): string[] {
        
        return [
            "Amount Deficiencies",
            "AverageDeficiencyRate (Company)",
            "AverageDeficiencyRate (Global)"
        ]
    }
}