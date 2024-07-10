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
import type { Score } from './Score';
import {
    ScoreFromJSON,
    ScoreFromJSONTyped,
    ScoreToJSON,
} from './Score';
import type { ReferencedAnchorPoint } from './ReferencedAnchorPoint';
import {
    ReferencedAnchorPointFromJSON,
    ReferencedAnchorPointFromJSONTyped,
    ReferencedAnchorPointToJSON,
} from './ReferencedAnchorPoint';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface FlattenedAnchorPoints
 */
export interface FlattenedAnchorPoints {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedAnchorPoints
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedAnchorPoint>}
     * @memberof FlattenedAnchorPoints
     */
    iterable: Array<ReferencedAnchorPoint>;
    /**
     * This is a Map<String, int> where the the key is an AnchorPoint id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedAnchorPoints
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedAnchorPoints
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedAnchorPoints interface.
 */
export function instanceOfFlattenedAnchorPoints(value: object): value is FlattenedAnchorPoints {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedAnchorPointsFromJSON(json: any): FlattenedAnchorPoints {
    return FlattenedAnchorPointsFromJSONTyped(json, false);
}

export function FlattenedAnchorPointsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedAnchorPoints {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedAnchorPointFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedAnchorPointsToJSON(value?: FlattenedAnchorPoints | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedAnchorPointToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

