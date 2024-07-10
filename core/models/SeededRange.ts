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
import type { ReferencedWorkstreamSummary } from './ReferencedWorkstreamSummary';
import {
    ReferencedWorkstreamSummaryFromJSON,
    ReferencedWorkstreamSummaryFromJSONTyped,
    ReferencedWorkstreamSummaryToJSON,
} from './ReferencedWorkstreamSummary';
import type { SeededRangeConversationAssociation } from './SeededRangeConversationAssociation';
import {
    SeededRangeConversationAssociationFromJSON,
    SeededRangeConversationAssociationFromJSONTyped,
    SeededRangeConversationAssociationToJSON,
} from './SeededRangeConversationAssociation';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * This is a preIdentified version of a Range.
 * 
 * conversation: this is here to specify the relationship that we want to set up with the Range. 
 * IE for this case we want to associate a Range with a Conversation.grounding.temporal.workstream. Otherwise, if this
 * was a conversation we would have no way to know what relationship that we want to set up on the conversation w/ the range.
 * (because this will be set up for many relationShip opportunities that have different functionalities)
 * @export
 * @interface SeededRange
 */
export interface SeededRange {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededRange
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof SeededRange
     */
    to?: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof SeededRange
     */
    from?: GroupedTimestamp;
    /**
     * 
     * @type {boolean}
     * @memberof SeededRange
     */
    between?: boolean;
    /**
     * 
     * @type {ReferencedWorkstreamSummary}
     * @memberof SeededRange
     */
    summary?: ReferencedWorkstreamSummary;
    /**
     * 
     * @type {SeededRangeConversationAssociation}
     * @memberof SeededRange
     */
    conversation?: SeededRangeConversationAssociation;
}

/**
 * Check if a given object implements the SeededRange interface.
 */
export function instanceOfSeededRange(value: object): value is SeededRange {
    return true;
}

export function SeededRangeFromJSON(json: any): SeededRange {
    return SeededRangeFromJSONTyped(json, false);
}

export function SeededRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededRange {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'to': json['to'] == null ? undefined : GroupedTimestampFromJSON(json['to']),
        'from': json['from'] == null ? undefined : GroupedTimestampFromJSON(json['from']),
        'between': json['between'] == null ? undefined : json['between'],
        'summary': json['summary'] == null ? undefined : ReferencedWorkstreamSummaryFromJSON(json['summary']),
        'conversation': json['conversation'] == null ? undefined : SeededRangeConversationAssociationFromJSON(json['conversation']),
    };
}

export function SeededRangeToJSON(value?: SeededRange | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'to': GroupedTimestampToJSON(value['to']),
        'from': GroupedTimestampToJSON(value['from']),
        'between': value['between'],
        'summary': ReferencedWorkstreamSummaryToJSON(value['summary']),
        'conversation': SeededRangeConversationAssociationToJSON(value['conversation']),
    };
}

