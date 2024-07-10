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
 * A helper classs to wrap Date-Time Values with Useful Helper Properties
 * @export
 * @interface GroupedTimestamp
 */
export interface GroupedTimestamp {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GroupedTimestamp
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Date}
     * @memberof GroupedTimestamp
     */
    value: Date;
    /**
     * 
     * @type {string}
     * @memberof GroupedTimestamp
     */
    readable?: string;
}

/**
 * Check if a given object implements the GroupedTimestamp interface.
 */
export function instanceOfGroupedTimestamp(value: object): value is GroupedTimestamp {
    if (!('value' in value) || value['value'] === undefined) return false;
    return true;
}

export function GroupedTimestampFromJSON(json: any): GroupedTimestamp {
    return GroupedTimestampFromJSONTyped(json, false);
}

export function GroupedTimestampFromJSONTyped(json: any, ignoreDiscriminator: boolean): GroupedTimestamp {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'value': (new Date(json['value'])),
        'readable': json['readable'] == null ? undefined : json['readable'],
    };
}

export function GroupedTimestampToJSON(value?: GroupedTimestamp | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'value': ((value['value']).toISOString()),
        'readable': value['readable'],
    };
}

