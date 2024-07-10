/* tslint:disable */
/* eslint-disable */
/**
 * Pieces Isomorphic OpenAPI
 * Endpoints for Assets, Formats, Users, Asset, Format, User.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: tsavo@pieces.app
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { mapValues } from '../runtime';
import type { GraphicalOCRStatistics } from './GraphicalOCRStatistics';
import {
    GraphicalOCRStatisticsFromJSON,
    GraphicalOCRStatisticsFromJSONTyped,
    GraphicalOCRStatisticsToJSON,
} from './GraphicalOCRStatistics';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface GraphicalOCRProcessing
 */
export interface GraphicalOCRProcessing {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalOCRProcessing
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {GraphicalOCRStatistics}
     * @memberof GraphicalOCRProcessing
     */
    statistics?: GraphicalOCRStatistics;
}

/**
 * Check if a given object implements the GraphicalOCRProcessing interface.
 */
export function instanceOfGraphicalOCRProcessing(value: object): value is GraphicalOCRProcessing {
    return true;
}

export function GraphicalOCRProcessingFromJSON(json: any): GraphicalOCRProcessing {
    return GraphicalOCRProcessingFromJSONTyped(json, false);
}

export function GraphicalOCRProcessingFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalOCRProcessing {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'statistics': json['statistics'] == null ? undefined : GraphicalOCRStatisticsFromJSON(json['statistics']),
    };
}

export function GraphicalOCRProcessingToJSON(value?: GraphicalOCRProcessing | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'statistics': GraphicalOCRStatisticsToJSON(value['statistics']),
    };
}

