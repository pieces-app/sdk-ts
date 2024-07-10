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
import type { SearchedConversationMessage } from './SearchedConversationMessage';
import {
    SearchedConversationMessageFromJSON,
    SearchedConversationMessageFromJSONTyped,
    SearchedConversationMessageToJSON,
} from './SearchedConversationMessage';

/**
 * This is the plural Model used to return many SearchedConversationMessage.
 * @export
 * @interface SearchedConversationMessages
 */
export interface SearchedConversationMessages {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SearchedConversationMessages
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<SearchedConversationMessage>}
     * @memberof SearchedConversationMessages
     */
    iterable: Array<SearchedConversationMessage>;
}

/**
 * Check if a given object implements the SearchedConversationMessages interface.
 */
export function instanceOfSearchedConversationMessages(value: object): value is SearchedConversationMessages {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function SearchedConversationMessagesFromJSON(json: any): SearchedConversationMessages {
    return SearchedConversationMessagesFromJSONTyped(json, false);
}

export function SearchedConversationMessagesFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchedConversationMessages {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(SearchedConversationMessageFromJSON)),
    };
}

export function SearchedConversationMessagesToJSON(value?: SearchedConversationMessages | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(SearchedConversationMessageToJSON)),
    };
}

