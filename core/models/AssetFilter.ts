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
import type { AssetFilterTimestamp } from './AssetFilterTimestamp';
import {
    AssetFilterTimestampFromJSON,
    AssetFilterTimestampFromJSONTyped,
    AssetFilterTimestampToJSON,
} from './AssetFilterTimestamp';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { AssetFilterPhrase } from './AssetFilterPhrase';
import {
    AssetFilterPhraseFromJSON,
    AssetFilterPhraseFromJSONTyped,
    AssetFilterPhraseToJSON,
} from './AssetFilterPhrase';
import type { ClassificationSpecificEnum } from './ClassificationSpecificEnum';
import {
    ClassificationSpecificEnumFromJSON,
    ClassificationSpecificEnumFromJSONTyped,
    ClassificationSpecificEnumToJSON,
} from './ClassificationSpecificEnum';
import type { AssetFilters } from './AssetFilters';
import {
    AssetFiltersFromJSON,
    AssetFiltersFromJSONTyped,
    AssetFiltersToJSON,
} from './AssetFilters';

/**
 * ** in the future, consider adding an optional bool's called nextAnd, nextOr which will say that the next filter will be  AND behavor or OR behavior.
 * 
 * "operations": here is is an optional property to allow or behavior,(we will only allow 1 level deep of or's), if or is not passed in then it is just simply ignored. If or is passed in then we will be or'd together with the top level filter and considered extras. default behavior for operations is and, however yoour can specifiy OR operations as well.
 * @export
 * @interface AssetFilter
 */
export interface AssetFilter {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof AssetFilter
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ClassificationSpecificEnum}
     * @memberof AssetFilter
     */
    classification?: ClassificationSpecificEnum;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    tags?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    websites?: Array<string>;
    /**
     * 
     * @type {Array<string>}
     * @memberof AssetFilter
     */
    persons?: Array<string>;
    /**
     * 
     * @type {AssetFilterPhrase}
     * @memberof AssetFilter
     */
    phrase?: AssetFilterPhrase;
    /**
     * 
     * @type {AssetFilterTimestamp}
     * @memberof AssetFilter
     */
    created?: AssetFilterTimestamp;
    /**
     * 
     * @type {AssetFilterTimestamp}
     * @memberof AssetFilter
     */
    updated?: AssetFilterTimestamp;
    /**
     * 
     * @type {AssetFilters}
     * @memberof AssetFilter
     */
    operations?: AssetFilters;
}

/**
 * Check if a given object implements the AssetFilter interface.
 */
export function instanceOfAssetFilter(value: object): value is AssetFilter {
    return true;
}

export function AssetFilterFromJSON(json: any): AssetFilter {
    return AssetFilterFromJSONTyped(json, false);
}

export function AssetFilterFromJSONTyped(json: any, ignoreDiscriminator: boolean): AssetFilter {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'classification': json['classification'] == null ? undefined : ClassificationSpecificEnumFromJSON(json['classification']),
        'tags': json['tags'] == null ? undefined : json['tags'],
        'websites': json['websites'] == null ? undefined : json['websites'],
        'persons': json['persons'] == null ? undefined : json['persons'],
        'phrase': json['phrase'] == null ? undefined : AssetFilterPhraseFromJSON(json['phrase']),
        'created': json['created'] == null ? undefined : AssetFilterTimestampFromJSON(json['created']),
        'updated': json['updated'] == null ? undefined : AssetFilterTimestampFromJSON(json['updated']),
        'operations': json['operations'] == null ? undefined : AssetFiltersFromJSON(json['operations']),
    };
}

export function AssetFilterToJSON(value?: AssetFilter | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'classification': ClassificationSpecificEnumToJSON(value['classification']),
        'tags': value['tags'],
        'websites': value['websites'],
        'persons': value['persons'],
        'phrase': AssetFilterPhraseToJSON(value['phrase']),
        'created': AssetFilterTimestampToJSON(value['created']),
        'updated': AssetFilterTimestampToJSON(value['updated']),
        'operations': AssetFiltersToJSON(value['operations']),
    };
}

