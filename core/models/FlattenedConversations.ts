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
import type { ReferencedConversation } from './ReferencedConversation';
import {
    ReferencedConversationFromJSON,
    ReferencedConversationFromJSONTyped,
    ReferencedConversationToJSON,
} from './ReferencedConversation';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * Flattened version of conversations.
 * @export
 * @interface FlattenedConversations
 */
export interface FlattenedConversations {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedConversations
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedConversation>}
     * @memberof FlattenedConversations
     */
    iterable: Array<ReferencedConversation>;
    /**
     * This is a Map<String, int> where the the key is an Conversation id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedConversations
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedConversations
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedConversations interface.
 */
export function instanceOfFlattenedConversations(value: object): value is FlattenedConversations {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedConversationsFromJSON(json: any): FlattenedConversations {
    return FlattenedConversationsFromJSONTyped(json, false);
}

export function FlattenedConversationsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedConversations {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedConversationFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedConversationsToJSON(value?: FlattenedConversations | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedConversationToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

