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
import type { AnonymousTemporalRange } from './AnonymousTemporalRange';
import {
    AnonymousTemporalRangeFromJSON,
    AnonymousTemporalRangeFromJSONTyped,
    AnonymousTemporalRangeToJSON,
} from './AnonymousTemporalRange';

/**
 * NOTE: if we want to remove all the data the from would be unset, the to will be right now.
 * 
 * from: is always in the past
 * to: is always at least before from in our time.
 * @export
 * @interface WorkstreamPatternEngineDataCleanupRequest
 */
export interface WorkstreamPatternEngineDataCleanupRequest {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamPatternEngineDataCleanupRequest
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<AnonymousTemporalRange>}
     * @memberof WorkstreamPatternEngineDataCleanupRequest
     */
    ranges?: Array<AnonymousTemporalRange>;
}

/**
 * Check if a given object implements the WorkstreamPatternEngineDataCleanupRequest interface.
 */
export function instanceOfWorkstreamPatternEngineDataCleanupRequest(value: object): value is WorkstreamPatternEngineDataCleanupRequest {
    return true;
}

export function WorkstreamPatternEngineDataCleanupRequestFromJSON(json: any): WorkstreamPatternEngineDataCleanupRequest {
    return WorkstreamPatternEngineDataCleanupRequestFromJSONTyped(json, false);
}

export function WorkstreamPatternEngineDataCleanupRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamPatternEngineDataCleanupRequest {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ranges': json['ranges'] == null ? undefined : ((json['ranges'] as Array<any>).map(AnonymousTemporalRangeFromJSON)),
    };
}

export function WorkstreamPatternEngineDataCleanupRequestToJSON(value?: WorkstreamPatternEngineDataCleanupRequest | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'ranges': value['ranges'] == null ? undefined : ((value['ranges'] as Array<any>).map(AnonymousTemporalRangeToJSON)),
    };
}

