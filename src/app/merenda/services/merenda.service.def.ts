import { ChartValue } from '../models/chartValue';

export interface MerendaServiceDef {

    getValuePairs(xValue: string, yValue: string, k: number): Array<ChartValue>;

    getPossibleAxisValues(): Array<string>;
}