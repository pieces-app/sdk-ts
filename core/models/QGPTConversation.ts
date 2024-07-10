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
import type { QGPTConversationMessage } from './QGPTConversationMessage';
import {
    QGPTConversationMessageFromJSON,
    QGPTConversationMessageFromJSONTyped,
    QGPTConversationMessageToJSON,
} from './QGPTConversationMessage';

/**
 * 
 * @export
 * @interface QGPTConversation
 */
export interface QGPTConversation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof QGPTConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<QGPTConversationMessage>}
     * @memberof QGPTConversation
     */
    iterable?: Array<QGPTConversationMessage>;
}

/**
 * Check if a given object implements the QGPTConversation interface.
 */
export function instanceOfQGPTConversation(value: object): value is QGPTConversation {
    return true;
}

export function QGPTConversationFromJSON(json: any): QGPTConversation {
    return QGPTConversationFromJSONTyped(json, false);
}

export function QGPTConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): QGPTConversation {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': json['iterable'] == null ? undefined : ((json['iterable'] as Array<any>).map(QGPTConversationMessageFromJSON)),
    };
}

export function QGPTConversationToJSON(value?: QGPTConversation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': value['iterable'] == null ? undefined : ((value['iterable'] as Array<any>).map(QGPTConversationMessageToJSON)),
    };
}

