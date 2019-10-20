import { MLModelServiceDefinition } from '../mlmodel.service.def';
import { MLModel } from 'src/app/models/mlmodel';
import { Guid } from "guid-typescript";
import { Injectable } from '@angular/core';

@Injectable()
export class MlModelMock implements MLModelServiceDefinition {  
        
    models: Array<MLModel> = [
        {
            created: new Date("2019-09-27"),
            name: "Crassus",
            status: "",
            description: "Predicts the chance of a PSC beeing performed using machine learning for all upcoming portstays of our fleet.",
            class: "Binary classification",
            technology: "SdcaLogisticRegression",
            selected: false
        },
        {
            created: new Date("2019-10-05"),
            name: 'Merenda',
            status: "testphase",
            description: "Provides you with a set of machine-learning-based clustering operations",
            class: "Clustering",
            technology: "Not set yet", //TODO
            selected: false
        },
        {
            created: new Date('2019-10-27'),
            name: 'Atratinus',
            status: "development",
            description: "States a risk factor for each port. Higher bars means higher risk of a PSC beeing performed.",
            class: "Data Visualization",
            technology: "Googles WebGL Globe",
            selected: false
        }
    ];
        
    getModels(): MLModel[] {
        return this.models;
    } 
          
}