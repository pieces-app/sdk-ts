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
import type { SearchedSensitive } from './SearchedSensitive';
import {
    SearchedSensitiveFromJSON,
    SearchedSensitiveFromJSONTyped,
    SearchedSensitiveToJSON,
} from './SearchedSensitive';

/**
 * This is the plural Model used to return many SearchedSensitive.
 * @export
 * @interface SearchedSensitives
 */
export interface SearchedSensitives {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedSensitives
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedSensitive>}
     * @memberof SearchedSensitives
     */
    iterable: Array<SearchedSensitive>;
}

/**
 * Check if a given object implements the SearchedSensitives interface.
 */
export function instanceOfSearchedSensitives(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function SearchedSensitivesFromJSON(json: any): SearchedSensitives {
    return SearchedSensitivesFromJSONTyped(json, false);
}

export function SearchedSensitivesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedSensitives {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedSensitiveFromJSON)),
    };
}

export function SearchedSensitivesToJSON(value?: SearchedSensitives | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SearchedSensitiveToJSON)),
    };
}
