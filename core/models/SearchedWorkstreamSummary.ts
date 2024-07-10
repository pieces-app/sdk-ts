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
import type { SearchedAnnotations } from './SearchedAnnotations';
import {
    SearchedAnnotationsFromJSON,
    SearchedAnnotationsFromJSONTyped,
    SearchedAnnotationsToJSON,
} from './SearchedAnnotations';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { WorkstreamSummary } from './WorkstreamSummary';
import {
    WorkstreamSummaryFromJSON,
    WorkstreamSummaryFromJSONTyped,
    WorkstreamSummaryToJSON,
} from './WorkstreamSummary';

/**
 * This is used for the WorkstreamSummaries searching endpoint
 * 
 * WorkstreamSummary here is only provided if transferables are set to true.
 * 
 * temporal: if this is provided this means that their material matched the input via a timestamp.
 * 
 * TODO will want to consider returning related materials to this material potentially both associated/ and not associated materials
 * ie suggestion: WorkstreamSuggestions
 * 
 * annotations: this is provided if we match a specific annotation on a WorkstreamSummary
 * @export
 * @interface SearchedWorkstreamSummary
 */
export interface SearchedWorkstreamSummary {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedWorkstreamSummary
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamSummary}
     * @memberof SearchedWorkstreamSummary
     */
    summary?: WorkstreamSummary;
    /**
     * 
     * @type {SearchedAnnotations}
     * @memberof SearchedWorkstreamSummary
     */
    annotations?: SearchedAnnotations;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamSummary
     */
    exact: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedWorkstreamSummary
     */
    similarity: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamSummary
     */
    temporal?: boolean;
    /**
     * This is the uuid of the WorkstreamSummary.
     * @type {string}
     * @memberof SearchedWorkstreamSummary
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedWorkstreamSummary interface.
 */
export function instanceOfSearchedWorkstreamSummary(value: object): value is SearchedWorkstreamSummary {
    if (!('exact' in value) || value['exact'] === undefined) return false;
    if (!('similarity' in value) || value['similarity'] === undefined) return false;
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function SearchedWorkstreamSummaryFromJSON(json: any): SearchedWorkstreamSummary {
    return SearchedWorkstreamSummaryFromJSONTyped(json, false);
}

export function SearchedWorkstreamSummaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedWorkstreamSummary {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'summary': json['summary'] == null ? undefined : WorkstreamSummaryFromJSON(json['summary']),
        'annotations': json['annotations'] == null ? undefined : SearchedAnnotationsFromJSON(json['annotations']),
        'exact': json['exact'],
        'similarity': json['similarity'],
        'temporal': json['temporal'] == null ? undefined : json['temporal'],
        'identifier': json['identifier'],
    };
}

export function SearchedWorkstreamSummaryToJSON(value?: SearchedWorkstreamSummary | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'summary': WorkstreamSummaryToJSON(value['summary']),
        'annotations': SearchedAnnotationsToJSON(value['annotations']),
        'exact': value['exact'],
        'similarity': value['similarity'],
        'temporal': value['temporal'],
        'identifier': value['identifier'],
    };
}

