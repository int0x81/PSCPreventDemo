import { MLModelServiceDefinition } from '../mlmodel.service.def';
import { MLModel } from 'src/app/models/mlmodel';

export class MLModelService implements MLModelServiceDefinition {

    models: Array<MLModel> = [
        {
            created: new Date("2019-09-27"),
            name: "Crassus",
            status: "",
            description: "Predicts the chance of a PSC beeing performed using machine learning",
            class: "Binary classification",
            technology: "SdcaLogisticRegression",
            selected: false
        },
        {
            created: new Date("2019-10-05"),
            name: 'Merenda',
            status: "development",
            description: "Provides you with a set of machine-learning-based clustering operations",
            class: "Clustering",
            technology: "Not set yet", //TODO
            selected: false
        },
        {
            created: new Date('2019-10-27'),
            name: 'Atratinus',
            status: "",
            description: "Provides you with a heatmap of PSCs worldwide",
            class: "Data Visualization",
            technology: "Googles WebGL Globe",
            selected: false
        }
    ];
    
    getModels(): MLModel[] {
        return this.models;
    }  
}