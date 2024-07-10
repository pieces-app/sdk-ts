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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
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

/**
 * This is a specific model for related websites to an asset.[DAG SAFE]
 * @export
 * @interface FlattenedWebsite
 */
export interface FlattenedWebsite {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is aspecific uuid that represents
     * @type {string}
     * @memberof FlattenedWebsite
     */
    id: string;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedWebsite
     */
    assets?: FlattenedAssets;
    /**
     * A customizable name.
     * @type {string}
     * @memberof FlattenedWebsite
     */
    name: string;
    /**
     * The true url or the website.
     * @type {string}
     * @memberof FlattenedWebsite
     */
    url: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWebsite
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWebsite
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedWebsite
     */
    deleted?: GroupedTimestamp;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof FlattenedWebsite
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof FlattenedWebsite
     */
    interactions?: number;
    /**
     * 
     * @type {FlattenedPersons}
     * @memberof FlattenedWebsite
     */
    persons?: FlattenedPersons;
    /**
     * 
     * @type {FlattenedConversations}
     * @memberof FlattenedWebsite
     */
    conversations?: FlattenedConversations;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedWebsite
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedWebsite
     */
    summaries?: FlattenedWorkstreamSummaries;
}

/**
 * Check if a given object implements the FlattenedWebsite interface.
 */
export function instanceOfFlattenedWebsite(value: object): value is FlattenedWebsite {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    return true;
}

export function FlattenedWebsiteFromJSON(json: any): FlattenedWebsite {
    return FlattenedWebsiteFromJSONTyped(json, false);
}

export function FlattenedWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedWebsite {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'name': json['name'],
        'url': json['url'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'mechanisms': json['mechanisms'] == null ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'interactions': json['interactions'] == null ? undefined : json['interactions'],
        'persons': json['persons'] == null ? undefined : FlattenedPersonsFromJSON(json['persons']),
        'conversations': json['conversations'] == null ? undefined : FlattenedConversationsFromJSON(json['conversations']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
    };
}

export function FlattenedWebsiteToJSON(value?: FlattenedWebsite | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'assets': FlattenedAssetsToJSON(value['assets']),
        'name': value['name'],
        'url': value['url'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'mechanisms': value['mechanisms'] == null ? undefined : (mapValues(value['mechanisms'], MechanismEnumToJSON)),
        'interactions': value['interactions'],
        'persons': FlattenedPersonsToJSON(value['persons']),
        'conversations': FlattenedConversationsToJSON(value['conversations']),
        'score': ScoreToJSON(value['score']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
    };
}

