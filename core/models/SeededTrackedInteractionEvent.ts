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
import type { SeededTrackedInteractionEventIdentifierDescriptionPairs } from './SeededTrackedInteractionEventIdentifierDescriptionPairs';
import {
    SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON,
    SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSONTyped,
    SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON,
} from './SeededTrackedInteractionEventIdentifierDescriptionPairs';

/**
 * This is a model that will hold relavent information in relation to an interaction(ONLY CLICK/TAP) analytics event(usage). If you want to register an event that relates to an interaction with the key then register a Keyboard Event.
 * 
 * @export
 * @interface SeededTrackedInteractionEvent
 */
export interface SeededTrackedInteractionEvent {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedInteractionEvent
     */
    schema?: EmbeddedModelSchema;
    /**
     * These need structure
     * @type {string}
     * @memberof SeededTrackedInteractionEvent
     */
    description: string;
    /**
     * 
     * @type {string}
     * @memberof SeededTrackedInteractionEvent
     */
    element?: string;
    /**
     * 
     * @type {SeededTrackedInteractionEventIdentifierDescriptionPairs}
     * @memberof SeededTrackedInteractionEvent
     */
    identifierDescriptionPair?: SeededTrackedInteractionEventIdentifierDescriptionPairs;
}

/**
 * Check if a given object implements the SeededTrackedInteractionEvent interface.
 */
export function instanceOfSeededTrackedInteractionEvent(value: object): value is SeededTrackedInteractionEvent {
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function SeededTrackedInteractionEventFromJSON(json: any): SeededTrackedInteractionEvent {
    return SeededTrackedInteractionEventFromJSONTyped(json, false);
}

export function SeededTrackedInteractionEventFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedInteractionEvent {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'description': json['description'],
        'element': json['element'] == null ? undefined : json['element'],
        'identifierDescriptionPair': json['identifier_description_pair'] == null ? undefined : SeededTrackedInteractionEventIdentifierDescriptionPairsFromJSON(json['identifier_description_pair']),
    };
}

export function SeededTrackedInteractionEventToJSON(value?: SeededTrackedInteractionEvent | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'description': value['description'],
        'element': value['element'],
        'identifier_description_pair': SeededTrackedInteractionEventIdentifierDescriptionPairsToJSON(value['identifierDescriptionPair']),
    };
}

