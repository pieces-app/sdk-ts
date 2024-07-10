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
import type { EmbeddedModelSchemaSemanticVersionEnum } from './EmbeddedModelSchemaSemanticVersionEnum';
import {
    EmbeddedModelSchemaSemanticVersionEnumFromJSON,
    EmbeddedModelSchemaSemanticVersionEnumFromJSONTyped,
    EmbeddedModelSchemaSemanticVersionEnumToJSON,
} from './EmbeddedModelSchemaSemanticVersionEnum';

/**
 * This is a model that will keep track of all of our version related to our models. ie (1) the database migration and (2) the global semantic version of the api.
 * @export
 * @interface EmbeddedModelSchema
 */
export interface EmbeddedModelSchema {
    /**
     * this is the current database version that this model was used for.
     * @type {number}
     * @memberof EmbeddedModelSchema
     */
    migration: number;
    /**
     * 
     * @type {EmbeddedModelSchemaSemanticVersionEnum}
     * @memberof EmbeddedModelSchema
     */
    semantic: EmbeddedModelSchemaSemanticVersionEnum;
}

/**
 * Check if a given object implements the EmbeddedModelSchema interface.
 */
export function instanceOfEmbeddedModelSchema(value: object): value is EmbeddedModelSchema {
    if (!('migration' in value) || value['migration'] === undefined) return false;
    if (!('semantic' in value) || value['semantic'] === undefined) return false;
    return true;
}

export function EmbeddedModelSchemaFromJSON(json: any): EmbeddedModelSchema {
    return EmbeddedModelSchemaFromJSONTyped(json, false);
}

export function EmbeddedModelSchemaFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedModelSchema {
    if (json == null) {
        return json;
    }
    return {
        
        'migration': json['migration'],
        'semantic': EmbeddedModelSchemaSemanticVersionEnumFromJSON(json['semantic']),
    };
}

export function EmbeddedModelSchemaToJSON(value?: EmbeddedModelSchema | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'migration': value['migration'],
        'semantic': EmbeddedModelSchemaSemanticVersionEnumToJSON(value['semantic']),
    };
}

