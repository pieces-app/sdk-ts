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
import type { FlattenedConversations } from './FlattenedConversations';
import {
    FlattenedConversationsFromJSON,
    FlattenedConversationsFromJSONTyped,
    FlattenedConversationsToJSON,
} from './FlattenedConversations';
import type { FlattenedWorkstreamSummaries } from './FlattenedWorkstreamSummaries';
import {
    FlattenedWorkstreamSummariesFromJSON,
    FlattenedWorkstreamSummariesFromJSONTyped,
    FlattenedWorkstreamSummariesToJSON,
} from './FlattenedWorkstreamSummaries';
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { FlattenedAssets } from './FlattenedAssets';
import {
    FlattenedAssetsFromJSON,
    FlattenedAssetsFromJSONTyped,
    FlattenedAssetsToJSON,
} from './FlattenedAssets';
import type { FlattenedAnnotations } from './FlattenedAnnotations';
import {
    FlattenedAnnotationsFromJSON,
    FlattenedAnnotationsFromJSONTyped,
    FlattenedAnnotationsToJSON,
} from './FlattenedAnnotations';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { FlattenedAnchorPoints } from './FlattenedAnchorPoints';
import {
    FlattenedAnchorPointsFromJSON,
    FlattenedAnchorPointsFromJSONTyped,
    FlattenedAnchorPointsToJSON,
} from './FlattenedAnchorPoints';
import type { FlattenedPersons } from './FlattenedPersons';
import {
    FlattenedPersonsFromJSON,
    FlattenedPersonsFromJSONTyped,
    FlattenedPersonsToJSON,
} from './FlattenedPersons';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { AnchorTypeEnum } from './AnchorTypeEnum';
import {
    AnchorTypeEnumFromJSON,
    AnchorTypeEnumFromJSONTyped,
    AnchorTypeEnumToJSON,
} from './AnchorTypeEnum';

/**
 * 
 * @export
 * @interface FlattenedAnchor
 */
export interface FlattenedAnchor {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchor
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchor
     */
    id: string;
    /**
     * 
     * @type {AnchorTypeEnum}
     * @memberof FlattenedAnchor
     */
    type: AnchorTypeEnum;
    /**
     * 
     * @type {boolean}
     * @memberof FlattenedAnchor
     */
    watch?: boolean;
    /**
     * 
     * @type {FlattenedAnchorPoints}
     * @memberof FlattenedAnchor
     */
    points: FlattenedAnchorPoints;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedAnchor
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedAnchor
     */
    assets?: FlattenedAssets;
    /**
     * 
     * @type {string}
     * @memberof FlattenedAnchor
     */
    name?: string;
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedAnchor
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedAnchor
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnchor
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedAnchor
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof FlattenedAnchor
     */
    persons?: FlattenedPersons;
}

/**
 * Check if a given object implements the FlattenedAnchor interface.
 */
export function instanceOfFlattenedAnchor(value: object): value is FlattenedAnchor {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('points' in value) || value['points'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    return true;
}

export function FlattenedAnchorFromJSON(json: any): FlattenedAnchor {
    return FlattenedAnchorFromJSONTyped(json, false);
}

export function FlattenedAnchorFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchor {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'type': AnchorTypeEnumFromJSON(json['type']),
        'watch': json['watch'] == null ? undefined : json['watch'],
        'points': FlattenedAnchorPointsFromJSON(json['points']),
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'name': json['name'] == null ? undefined : json['name'],
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'conversations': json['conversations'] == null ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
    };
}

export function FlattenedAnchorToJSON(value?: FlattenedAnchor | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'type': AnchorTypeEnumToJSON(value['type']),
        'watch': value['watch'],
        'points': FlattenedAnchorPointsToJSON(value['points']),
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'name': value['name'],
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'conversations': FlattenedConversationsToJSON(value['conversations']),
        'score': ScoreToJSON(value['score']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
        'persons': FlattenedPersonsToJSON(value['persons']),
    };
}

