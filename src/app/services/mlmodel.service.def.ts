import { MLModel } from '../models/mlmodel';

export interface MLModelServiceDefinition {

    /**
     * Gets all machine learning models
     */
    getModels(): MLModel[];
}