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
import type { SearchEngines } from './SearchEngines';
import {
    SearchEnginesFromJSON,
    SearchEnginesFromJSONTyped,
    SearchEnginesToJSON,
} from './SearchEngines';

/**
 * generic endpoint body for the searching endpoints
 * 
 * query: this is optional, but the query string you will use to find your material
 * 
 * mode: this is the searching method/type that we will use to search your materials
 * 
 * TODO: consider passing in a score here ie only return things that match references/reuse/updates/...etc > x
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials,
 * this would be an input property of suggestions?:boolean that will say if they want suggested materials returned as well
 * @export
 * @interface SearchInput
 */
export interface SearchInput {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchInput
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SearchEngines}
     * @memberof SearchInput
     */
    engines: SearchEngines;
}

/**
 * Check if a given object implements the SearchInput interface.
 */
export function instanceOfSearchInput(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "engines" in value;

    return isInstance;
}

export function SearchInputFromJSON(json: any): SearchInput {
    return SearchInputFromJSONTyped(json, false);
}

export function SearchInputFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchInput {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'engines': SearchEnginesFromJSON(json['engines']),
    };
}

export function SearchInputToJSON(value?: SearchInput | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'engines': SearchEnginesToJSON(value.engines),
    };
}
