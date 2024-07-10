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
import type { WorkstreamPatternEngineVisionEvent } from './WorkstreamPatternEngineVisionEvent';
import {
    WorkstreamPatternEngineVisionEventFromJSON,
    WorkstreamPatternEngineVisionEventFromJSONTyped,
    WorkstreamPatternEngineVisionEventToJSON,
} from './WorkstreamPatternEngineVisionEvent';

/**
 * This will return a list of the returned events.
 * @export
 * @interface SearchedWorkstreamPatternEngineVisionEvent
 */
export interface SearchedWorkstreamPatternEngineVisionEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamPatternEngineVisionEvent}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    event?: WorkstreamPatternEngineVisionEvent;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    exact?: boolean;
    /**
     * 
     * @type {number}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    similarity?: number;
    /**
     * 
     * @type {boolean}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    temporal?: boolean;
    /**
     * 
     * @type {string}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    application?: string;
    /**
     * This is the uuid of the event.
     * @type {string}
     * @memberof SearchedWorkstreamPatternEngineVisionEvent
     */
    identifier: string;
}

/**
 * Check if a given object implements the SearchedWorkstreamPatternEngineVisionEvent interface.
 */
export function instanceOfSearchedWorkstreamPatternEngineVisionEvent(value: object): value is SearchedWorkstreamPatternEngineVisionEvent {
    if (!('identifier' in value) || value['identifier'] === undefined) return false;
    return true;
}

export function SearchedWorkstreamPatternEngineVisionEventFromJSON(json: any): SearchedWorkstreamPatternEngineVisionEvent {
    return SearchedWorkstreamPatternEngineVisionEventFromJSONTyped(json, false);
}

export function SearchedWorkstreamPatternEngineVisionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedWorkstreamPatternEngineVisionEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'event': json['event'] == null ? undefined : WorkstreamPatternEngineVisionEventFromJSON(json['event']),
        'exact': json['exact'] == null ? undefined : json['exact'],
        'similarity': json['similarity'] == null ? undefined : json['similarity'],
        'temporal': json['temporal'] == null ? undefined : json['temporal'],
        'application': json['application'] == null ? undefined : json['application'],
        'identifier': json['identifier'],
    };
}

export function SearchedWorkstreamPatternEngineVisionEventToJSON(value?: SearchedWorkstreamPatternEngineVisionEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'event': WorkstreamPatternEngineVisionEventToJSON(value['event']),
        'exact': value['exact'],
        'similarity': value['similarity'],
        'temporal': value['temporal'],
        'application': value['application'],
        'identifier': value['identifier'],
    };
}

