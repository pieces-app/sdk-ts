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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { ReferencedHint } from './ReferencedHint';
import {
    ReferencedHintFromJSON,
    ReferencedHintFromJSONTyped,
    ReferencedHintToJSON,
} from './ReferencedHint';

/**
 * This is the flattened Version of plural hints.
 * @export
 * @interface FlattenedHints
 */
export interface FlattenedHints {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedHints
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ReferencedHint>}
     * @memberof FlattenedHints
     */
    iterable: Array<ReferencedHint>;
    /**
     * This is a Map<String, int> where the the key is an hint id.
     * @type {{ [key: string]: number; }}
     * @memberof FlattenedHints
     */
    indices?: { [key: string]: number; };
    /**
     * 
     * @type {Score}
     * @memberof FlattenedHints
     */
    score?: Score;
}

/**
 * Check if a given object implements the FlattenedHints interface.
 */
export function instanceOfFlattenedHints(value: object): value is FlattenedHints {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function FlattenedHintsFromJSON(json: any): FlattenedHints {
    return FlattenedHintsFromJSONTyped(json, false);
}

export function FlattenedHintsFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedHints {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ReferencedHintFromJSON)),
        'indices': json['indices'] == null ? undefined : json['indices'],
        'score': json['score'] == null ? undefined : ScoreFromJSON(json['score']),
    };
}

export function FlattenedHintsToJSON(value?: FlattenedHints | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ReferencedHintToJSON)),
        'indices': value['indices'],
        'score': ScoreToJSON(value['score']),
    };
}

