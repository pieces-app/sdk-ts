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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface GraphicalSVGStatistics
 */
export interface GraphicalSVGStatistics {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GraphicalSVGStatistics
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof GraphicalSVGStatistics
     */
    id?: string;
}

/**
 * Check if a given object implements the GraphicalSVGStatistics interface.
 */
export function instanceOfGraphicalSVGStatistics(value: object): value is GraphicalSVGStatistics {
    return true;
}

export function GraphicalSVGStatisticsFromJSON(json: any): GraphicalSVGStatistics {
    return GraphicalSVGStatisticsFromJSONTyped(json, false);
}

export function GraphicalSVGStatisticsFromJSONTyped(json: any, ignoreDiscriminator: boolean): GraphicalSVGStatistics {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'] == null ? undefined : json['id'],
    };
}

export function GraphicalSVGStatisticsToJSON(value?: GraphicalSVGStatistics | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
    };
}

