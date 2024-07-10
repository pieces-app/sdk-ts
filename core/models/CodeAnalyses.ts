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
import type { CodeAnalysis } from './CodeAnalysis';
import {
    CodeAnalysisFromJSON,
    CodeAnalysisFromJSONTyped,
    CodeAnalysisToJSON,
} from './CodeAnalysis';

/**
 * 
 * @export
 * @interface CodeAnalyses
 */
export interface CodeAnalyses {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof CodeAnalyses
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<CodeAnalysis>}
     * @memberof CodeAnalyses
     */
    iterable: Array<CodeAnalysis>;
}

/**
 * Check if a given object implements the CodeAnalyses interface.
 */
export function instanceOfCodeAnalyses(value: object): value is CodeAnalyses {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function CodeAnalysesFromJSON(json: any): CodeAnalyses {
    return CodeAnalysesFromJSONTyped(json, false);
}

export function CodeAnalysesFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAnalyses {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(CodeAnalysisFromJSON)),
    };
}

export function CodeAnalysesToJSON(value?: CodeAnalyses | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(CodeAnalysisToJSON)),
    };
}

