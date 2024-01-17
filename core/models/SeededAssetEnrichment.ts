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
import {
    EmbeddedModelSchema,
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './';

/**
 * This is a specific Model for the SeededAsset that will enable the developer to modify the enrichment levels of persons, tags, websites.
 * 
 * These enrichment levels will guarentee that the # of people/tags/websites do not eceeed the provided value, but will not guarentee a minimum.
 * @export
 * @interface SeededAssetEnrichment
 */
export interface SeededAssetEnrichment {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededAssetEnrichment
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    tags?: number;
    /**
     * 
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    websites?: number;
    /**
     * 
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    persons?: number;
    /**
     * 
     * @type {number}
     * @memberof SeededAssetEnrichment
     */
    hints?: number;
}

export function SeededAssetEnrichmentFromJSON(json: any): SeededAssetEnrichment {
    return SeededAssetEnrichmentFromJSONTyped(json, false);
}

export function SeededAssetEnrichmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetEnrichment {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tags': !exists(json, 'tags') ? undefined : json['tags'],
        'websites': !exists(json, 'websites') ? undefined : json['websites'],
        'persons': !exists(json, 'persons') ? undefined : json['persons'],
        'hints': !exists(json, 'hints') ? undefined : json['hints'],
    };
}

export function SeededAssetEnrichmentToJSON(value?: SeededAssetEnrichment | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'tags': value.tags,
        'websites': value.websites,
        'persons': value.persons,
        'hints': value.hints,
    };
}


