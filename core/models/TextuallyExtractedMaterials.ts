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
import type { TextuallyExtractedMaterial } from './TextuallyExtractedMaterial';
import {
    TextuallyExtractedMaterialFromJSON,
    TextuallyExtractedMaterialFromJSONTyped,
    TextuallyExtractedMaterialToJSON,
} from './TextuallyExtractedMaterial';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is a plural of an Extraction
 * @export
 * @interface TextuallyExtractedMaterials
 */
export interface TextuallyExtractedMaterials {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TextuallyExtractedMaterials
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<TextuallyExtractedMaterial>}
     * @memberof TextuallyExtractedMaterials
     */
    iterable: Array<TextuallyExtractedMaterial>;
}

/**
 * Check if a given object implements the TextuallyExtractedMaterials interface.
 */
export function instanceOfTextuallyExtractedMaterials(value: object): value is TextuallyExtractedMaterials {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function TextuallyExtractedMaterialsFromJSON(json: any): TextuallyExtractedMaterials {
    return TextuallyExtractedMaterialsFromJSONTyped(json, false);
}

export function TextuallyExtractedMaterialsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TextuallyExtractedMaterials {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(TextuallyExtractedMaterialFromJSON)),
    };
}

export function TextuallyExtractedMaterialsToJSON(value?: TextuallyExtractedMaterials | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(TextuallyExtractedMaterialToJSON)),
    };
}

