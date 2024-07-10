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
import type { FlattenedPerson } from './FlattenedPerson';
import {
    FlattenedPersonFromJSON,
    FlattenedPersonFromJSONTyped,
    FlattenedPersonToJSON,
} from './FlattenedPerson';

/**
 * [DAG Safe] version of a Person Model. 
 * @export
 * @interface ReferencedPerson
 */
export interface ReferencedPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ReferencedPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof ReferencedPerson
     */
    id: string;
    /**
     * 
     * @type {FlattenedPerson}
     * @memberof ReferencedPerson
     */
    reference?: FlattenedPerson;
}

/**
 * Check if a given object implements the ReferencedPerson interface.
 */
export function instanceOfReferencedPerson(value: object): value is ReferencedPerson {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function ReferencedPersonFromJSON(json: any): ReferencedPerson {
    return ReferencedPersonFromJSONTyped(json, false);
}

export function ReferencedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): ReferencedPerson {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'reference': json['reference'] == null ? undefined : FlattenedPersonFromJSON(json['reference']),
    };
}

export function ReferencedPersonToJSON(value?: ReferencedPerson | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'reference': FlattenedPersonToJSON(value['reference']),
    };
}

