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
import type { Classification } from './Classification';
import {
    ClassificationFromJSON,
    ClassificationFromJSONTyped,
    ClassificationToJSON,
} from './Classification';

/**
 * 
 * @export
 * @interface TLPCodeFragmentReclassificationUpdates
 */
export interface TLPCodeFragmentReclassificationUpdates {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    previous: Classification;
    /**
     * 
     * @type {Classification}
     * @memberof TLPCodeFragmentReclassificationUpdates
     */
    current: Classification;
}

/**
 * Check if a given object implements the TLPCodeFragmentReclassificationUpdates interface.
 */
export function instanceOfTLPCodeFragmentReclassificationUpdates(value: object): value is TLPCodeFragmentReclassificationUpdates {
    if (!('previous' in value) || value['previous'] === undefined) return false;
    if (!('current' in value) || value['current'] === undefined) return false;
    return true;
}

export function TLPCodeFragmentReclassificationUpdatesFromJSON(json: any): TLPCodeFragmentReclassificationUpdates {
    return TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json, false);
}

export function TLPCodeFragmentReclassificationUpdatesFromJSONTyped(json: any, ignoreDiscriminator: boolean): TLPCodeFragmentReclassificationUpdates {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'previous': ClassificationFromJSON(json['previous']),
        'current': ClassificationFromJSON(json['current']),
    };
}

export function TLPCodeFragmentReclassificationUpdatesToJSON(value?: TLPCodeFragmentReclassificationUpdates | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'previous': ClassificationToJSON(value['previous']),
        'current': ClassificationToJSON(value['current']),
    };
}

