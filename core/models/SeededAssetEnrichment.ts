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

/**
 * Check if a given object implements the SeededAssetEnrichment interface.
 */
export function instanceOfSeededAssetEnrichment(value: object): value is SeededAssetEnrichment {
    return true;
}

export function SeededAssetEnrichmentFromJSON(json: any): SeededAssetEnrichment {
    return SeededAssetEnrichmentFromJSONTyped(json, false);
}

export function SeededAssetEnrichmentFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededAssetEnrichment {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'websites': json['websites'] == null ? undefined : json['websites'],
        'persons': json['persons'] == null ? undefined : json['persons'],
        'hints': json['hints'] == null ? undefined : json['hints'],
    };
}

export function SeededAssetEnrichmentToJSON(value?: SeededAssetEnrichment | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'tags': value['tags'],
        'websites': value['websites'],
        'persons': value['persons'],
        'hints': value['hints'],
    };
}

