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
 * This is a specific model for the health of our OS Server.
 * @export
 * @interface OSHealth
 */
export interface OSHealth {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSHealth
     */
    schema?: EmbeddedModelSchema;
    /**
     * id of your OS
     * @type {string}
     * @memberof OSHealth
     */
    id: string;
    /**
     * this is the current OS version
     * @type {string}
     * @memberof OSHealth
     */
    version: string;
}

/**
 * Check if a given object implements the OSHealth interface.
 */
export function instanceOfOSHealth(value: object): value is OSHealth {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function OSHealthFromJSON(json: any): OSHealth {
    return OSHealthFromJSONTyped(json, false);
}

export function OSHealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSHealth {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'version': json['version'],
    };
}

export function OSHealthToJSON(value?: OSHealth | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'version': value['version'],
    };
}

