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
 * This will give specific metadata need to determine what the rename was to/from.
 * @export
 * @interface TrackedConversationEventRenameMetadata
 */
export interface TrackedConversationEventRenameMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedConversationEventRenameMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof TrackedConversationEventRenameMetadata
     */
    previous: string;
    /**
     * 
     * @type {string}
     * @memberof TrackedConversationEventRenameMetadata
     */
    current: string;
}

/**
 * Check if a given object implements the TrackedConversationEventRenameMetadata interface.
 */
export function instanceOfTrackedConversationEventRenameMetadata(value: object): value is TrackedConversationEventRenameMetadata {
    if (!('previous' in value) || value['previous'] === undefined) return false;
    if (!('current' in value) || value['current'] === undefined) return false;
    return true;
}

export function TrackedConversationEventRenameMetadataFromJSON(json: any): TrackedConversationEventRenameMetadata {
    return TrackedConversationEventRenameMetadataFromJSONTyped(json, false);
}

export function TrackedConversationEventRenameMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedConversationEventRenameMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'previous': json['previous'],
        'current': json['current'],
    };
}

export function TrackedConversationEventRenameMetadataToJSON(value?: TrackedConversationEventRenameMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'previous': value['previous'],
        'current': value['current'],
    };
}

