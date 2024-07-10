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
import type { SeededDiscoverableAsset } from './SeededDiscoverableAsset';
import {
    SeededDiscoverableAssetFromJSON,
    SeededDiscoverableAssetFromJSONTyped,
    SeededDiscoverableAssetToJSON,
} from './SeededDiscoverableAsset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { TLPDirectedDiscoveryFilters } from './TLPDirectedDiscoveryFilters';
import {
    TLPDirectedDiscoveryFiltersFromJSON,
    TLPDirectedDiscoveryFiltersFromJSONTyped,
    TLPDirectedDiscoveryFiltersToJSON,
} from './TLPDirectedDiscoveryFilters';

/**
 * Assumption: filters imposed in this model can be overwritten by passing them in SeededDiscoverableAsset
 * @export
 * @interface SeededDiscoverableAssets
 */
export interface SeededDiscoverableAssets {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededDiscoverableAssets
     */
    schema?: EmbeddedModelSchema;
    /**
     * application id.
     * @type {string}
     * @memberof SeededDiscoverableAssets
     */
    application: string;
    /**
     * This is an iterable of already snippitized snippets that we will compare && cluster.
     * @type {Array<SeededDiscoverableAsset>}
     * @memberof SeededDiscoverableAssets
     */
    iterable: Array<SeededDiscoverableAsset>;
    /**
     * 
     * @type {TLPDirectedDiscoveryFilters}
     * @memberof SeededDiscoverableAssets
     */
    filters?: TLPDirectedDiscoveryFilters;
}

/**
 * Check if a given object implements the SeededDiscoverableAssets interface.
 */
export function instanceOfSeededDiscoverableAssets(value: object): value is SeededDiscoverableAssets {
    if (!('application' in value) || value['application'] === undefined) return false;
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SeededDiscoverableAssetsFromJSON(json: any): SeededDiscoverableAssets {
    return SeededDiscoverableAssetsFromJSONTyped(json, false);
}

export function SeededDiscoverableAssetsFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededDiscoverableAssets {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'application': json['application'],
        'iterable': ((json['iterable'] as Array<any>).map(SeededDiscoverableAssetFromJSON)),
        'filters': json['filters'] == null ? undefined : TLPDirectedDiscoveryFiltersFromJSON(json['filters']),
    };
}

export function SeededDiscoverableAssetsToJSON(value?: SeededDiscoverableAssets | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'application': value['application'],
        'iterable': ((value['iterable'] as Array<any>).map(SeededDiscoverableAssetToJSON)),
        'filters': TLPDirectedDiscoveryFiltersToJSON(value['filters']),
    };
}

