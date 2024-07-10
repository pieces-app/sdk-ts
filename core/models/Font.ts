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
 * This will describe the font that the user sees.
 * @export
 * @interface Font
 */
export interface Font {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Font
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof Font
     */
    size: number;
}

/**
 * Check if a given object implements the Font interface.
 */
export function instanceOfFont(value: object): value is Font {
    if (!('size' in value) || value['size'] === undefined) return false;
    return true;
}

export function FontFromJSON(json: any): Font {
    return FontFromJSONTyped(json, false);
}

export function FontFromJSONTyped(json: any, ignoreDiscriminator: boolean): Font {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'size': json['size'],
    };
}

export function FontToJSON(value?: Font | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'size': value['size'],
    };
}

