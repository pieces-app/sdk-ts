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

import { exists, mapValues } from '../runtime';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is the model for the PiecesOS specific settings.
 * 
 * autoboot: refers to both the bootup of POS on the system login, default is false
 * @export
 * @interface OSServerSettings
 */
export interface OSServerSettings {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSServerSettings
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {boolean}
     * @memberof OSServerSettings
     */
    autoboot?: boolean;
}

/**
 * Check if a given object implements the OSServerSettings interface.
 */
export function instanceOfOSServerSettings(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function OSServerSettingsFromJSON(json: any): OSServerSettings {
    return OSServerSettingsFromJSONTyped(json, false);
}

export function OSServerSettingsFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSServerSettings {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'autoboot': !exists(json, 'autoboot') ? undefined : json['autoboot'],
    };
}

export function OSServerSettingsToJSON(value?: OSServerSettings | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'autoboot': value.autoboot,
    };
}
