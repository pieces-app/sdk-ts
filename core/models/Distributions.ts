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
import type { Distribution } from './Distribution';
import {
    DistributionFromJSON,
    DistributionFromJSONTyped,
    DistributionToJSON,
} from './Distribution';

/**
 * This is the plural Model of a Distribution.
 * @export
 * @interface Distributions
 */
export interface Distributions {
    /**
     * 
     * @type {Array<Distribution>}
     * @memberof Distributions
     */
    iterable: Array<Distribution>;
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Distributions
     */
    schema?: EmbeddedModelSchema;
}

/**
 * Check if a given object implements the Distributions interface.
 */
export function instanceOfDistributions(value: object): value is Distributions {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function DistributionsFromJSON(json: any): Distributions {
    return DistributionsFromJSONTyped(json, false);
}

export function DistributionsFromJSONTyped(json: any, ignoreDiscriminator: boolean): Distributions {
    if (json == null) {
        return json;
    }
    return {
        
        'iterable': ((json['iterable'] as Array<any>).map(DistributionFromJSON)),
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
    };
}

export function DistributionsToJSON(value?: Distributions | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'iterable': ((value['iterable'] as Array<any>).map(DistributionToJSON)),
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
    };
}

