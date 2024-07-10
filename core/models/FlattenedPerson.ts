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
import type { FlattenedTags } from './FlattenedTags';
import {
    FlattenedTagsFromJSON,
    FlattenedTagsFromJSONTyped,
    FlattenedTagsToJSON,
} from './FlattenedTags';
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
import type { PersonType } from './PersonType';
import {
    PersonTypeFromJSON,
    PersonTypeFromJSONTyped,
    PersonTypeToJSON,
} from './PersonType';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';
import type { FlattenedWebsites } from './FlattenedWebsites';
import {
    FlattenedWebsitesFromJSON,
    FlattenedWebsitesFromJSONTyped,
    FlattenedWebsitesToJSON,
} from './FlattenedWebsites';
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
import type { PersonAccess } from './PersonAccess';
import {
    PersonAccessFromJSON,
    PersonAccessFromJSONTyped,
    PersonAccessToJSON,
} from './PersonAccess';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { FlattenedAnchors } from './FlattenedAnchors';
import {
    FlattenedAnchorsFromJSON,
    FlattenedAnchorsFromJSONTyped,
    FlattenedAnchorsToJSON,
} from './FlattenedAnchors';
import type { PersonModel } from './PersonModel';
import {
    PersonModelFromJSON,
    PersonModelFromJSONTyped,
    PersonModelToJSON,
} from './PersonModel';

/**
 * if expiration is add then, after the alloted expiration date the user will only have view && comment only permissions. Only present in the case there is a scope such as a defined collection/asset...
 * 
 * if asset is passed then that means this person belongs to a scoped asset.
 * @export
 * @interface FlattenedPerson
 */
export interface FlattenedPerson {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedPerson
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof FlattenedPerson
     */
    id: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof FlattenedPerson
     */
    deleted?: GroupedTimestamp;
    /**
     * 
     * @type {PersonType}
     * @memberof FlattenedPerson
     */
    type: PersonType;
    /**
     * 
     * @type {FlattenedAssets}
     * @memberof FlattenedPerson
     */
    assets?: FlattenedAssets;
    /**
     * This is a Map<String, MechanismEnum> where the the key is an asset id.
     * @type {{ [key: string]: MechanismEnum; }}
     * @memberof FlattenedPerson
     */
    mechanisms?: { [key: string]: MechanismEnum; };
    /**
     * This is an optional value that will keep track of the number of times this has been interacted with.
     * @type {number}
     * @memberof FlattenedPerson
     */
    interactions?: number;
    /**
     * This is a Map<String, PersonAccess> where the the key is an asset id.
     * @type {{ [key: string]: PersonAccess; }}
     * @memberof FlattenedPerson
     */
    access?: { [key: string]: PersonAccess; };
    /**
     * 
     * @type {FlattenedTags}
     * @memberof FlattenedPerson
     */
    tags?: FlattenedTags;
    /**
     * 
     * @type {FlattenedWebsites}
     * @memberof FlattenedPerson
     */
    websites?: FlattenedWebsites;
    /**
     * This is a Map<String, PersonModel>, where the the key is an asset id.
     * @type {{ [key: string]: PersonModel; }}
     * @memberof FlattenedPerson
     */
    models?: { [key: string]: PersonModel; };
    /**
     * 
     * @type {FlattenedAnnotations}
     * @memberof FlattenedPerson
     */
    annotations?: FlattenedAnnotations;
    /**
     * 
     * @type {Score}
     * @memberof FlattenedPerson
     */
    score?: Score;
    /**
     * 
     * @type {FlattenedWorkstreamSummaries}
     * @memberof FlattenedPerson
     */
    summaries?: FlattenedWorkstreamSummaries;
    /**
     * 
     * @type {FlattenedAnchors}
     * @memberof FlattenedPerson
     */
    anchors?: FlattenedAnchors;
}

/**
 * Check if a given object implements the FlattenedPerson interface.
 */
export function instanceOfFlattenedPerson(value: object): value is FlattenedPerson {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    return true;
}

export function FlattenedPersonFromJSON(json: any): FlattenedPerson {
    return FlattenedPersonFromJSONTyped(json, false);
}

export function FlattenedPersonFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedPerson {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'type': PersonTypeFromJSON(json['type']),
        'assets': json['assets'] == null ? undefined : FlattenedAssetsFromJSON(json['assets']),
        'mechanisms': json['mechanisms'] == null ? undefined : (mapValues(json['mechanisms'], MechanismEnumFromJSON)),
        'interactions': json['interactions'] == null ? undefined : json['interactions'],
        'access': json['access'] == null ? undefined : (mapValues(json['access'], PersonAccessFromJSON)),
        'tags': json['tags'] == null ? undefined : FlattenedTagsFromJSON(json['tags']),
        'websites': json['websites'] == null ? undefined : FlattenedWebsitesFromJSON(json['websites']),
        'models': json['models'] == null ? undefined : (mapValues(json['models'], PersonModelFromJSON)),
        'annotations': json['annotations'] == null ? undefined : FlattenedAnnotationsFromJSON(json['annotations']),
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
        'summaries': json['summaries'] == null ? undefined : FlattenedWorkstreamSummariesFromJSON(json['summaries']),
        'anchors': json['anchors'] == null ? undefined : FlattenedAnchorsFromJSON(json['anchors']),
    };
}

export function FlattenedPersonToJSON(value?: FlattenedPerson | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'type': PersonTypeToJSON(value['type']),
        'assets': FlattenedAssetsToJSON(value['assets']),
        'mechanisms': value['mechanisms'] == null ? undefined : (mapValues(value['mechanisms'], MechanismEnumToJSON)),
        'interactions': value['interactions'],
        'access': value['access'] == null ? undefined : (mapValues(value['access'], PersonAccessToJSON)),
        'tags': FlattenedTagsToJSON(value['tags']),
        'websites': FlattenedWebsitesToJSON(value['websites']),
        'models': value['models'] == null ? undefined : (mapValues(value['models'], PersonModelToJSON)),
        'annotations': FlattenedAnnotationsToJSON(value['annotations']),
        'score': ScoreToJSON(value['score']),
        'summaries': FlattenedWorkstreamSummariesToJSON(value['summaries']),
        'anchors': FlattenedAnchorsToJSON(value['anchors']),
    };
}

