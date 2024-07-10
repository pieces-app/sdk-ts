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
import type { SearchedAnnotation } from './SearchedAnnotation';
import {
    SearchedAnnotationFromJSON,
    SearchedAnnotationFromJSONTyped,
    SearchedAnnotationToJSON,
} from './SearchedAnnotation';

/**
 * This is the plural Model used to return many SearchedAnnotation.
 * @export
 * @interface SearchedAnnotations
 */
export interface SearchedAnnotations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedAnnotations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedAnnotation>}
     * @memberof SearchedAnnotations
     */
    iterable: Array<SearchedAnnotation>;
}

/**
 * Check if a given object implements the SearchedAnnotations interface.
 */
export function instanceOfSearchedAnnotations(value: object): value is SearchedAnnotations {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SearchedAnnotationsFromJSON(json: any): SearchedAnnotations {
    return SearchedAnnotationsFromJSONTyped(json, false);
}

export function SearchedAnnotationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedAnnotations {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedAnnotationFromJSON)),
    };
}

export function SearchedAnnotationsToJSON(value?: SearchedAnnotations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SearchedAnnotationToJSON)),
    };
}

