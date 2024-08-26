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
import type { SearchedTag } from './SearchedTag';
import {
    SearchedTagFromJSON,
    SearchedTagFromJSONTyped,
    SearchedTagToJSON,
} from './SearchedTag';

/**
 * This is the plural Model used to return many searchedTags.
 * @export
 * @interface SearchedTags
 */
export interface SearchedTags {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedTags
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedTag>}
     * @memberof SearchedTags
     */
    iterable: Array<SearchedTag>;
}

/**
 * Check if a given object implements the SearchedTags interface.
 */
export function instanceOfSearchedTags(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "iterable" in value;

    return isInstance;
}

export function SearchedTagsFromJSON(json: any): SearchedTags {
    return SearchedTagsFromJSONTyped(json, false);
}

export function SearchedTagsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedTags {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedTagFromJSON)),
    };
}

export function SearchedTagsToJSON(value?: SearchedTags | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'iterable': ((value.iterable as Array<any>).map(SearchedTagToJSON)),
    };
}
