import { MLModelServiceDefinition } from '../mlmodel.service.def';
import { MLModel } from 'src/app/models/mlmodel';

export class MLModelService implements MLModelServiceDefinition {

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
            status: "development",
            description: "K means for Port State Controls. Requires basic knowledge in Data Science!",
            class: "Clustering",
            technology: "K means",
            selected: false
        },
        {
            created: new Date('2019-10-27'),
            name: 'Atratinus',
            status: "",
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