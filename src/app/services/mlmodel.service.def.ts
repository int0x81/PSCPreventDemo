import { MLModel } from '../models/MLmodel';

export interface MLModelServiceDefinition {

    /**
     * Gets all machine learning models
     */
    getModels(): MLModel[];
}