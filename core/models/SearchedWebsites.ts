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
import type { SearchedWebsite } from './SearchedWebsite';
import {
    SearchedWebsiteFromJSON,
    SearchedWebsiteFromJSONTyped,
    SearchedWebsiteToJSON,
} from './SearchedWebsite';

/**
 * This is the plural Model used to return many SearchedWebsite.
 * @export
 * @interface SearchedWebsites
 */
export interface SearchedWebsites {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedWebsites
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedWebsite>}
     * @memberof SearchedWebsites
     */
    iterable: Array<SearchedWebsite>;
}

/**
 * Check if a given object implements the SearchedWebsites interface.
 */
export function instanceOfSearchedWebsites(value: object): value is SearchedWebsites {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SearchedWebsitesFromJSON(json: any): SearchedWebsites {
    return SearchedWebsitesFromJSONTyped(json, false);
}

export function SearchedWebsitesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedWebsites {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedWebsiteFromJSON)),
    };
}

export function SearchedWebsitesToJSON(value?: SearchedWebsites | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SearchedWebsiteToJSON)),
    };
}

