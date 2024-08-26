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

import { exists, mapValues } from '../runtime';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { LanguageServerProtocolLocationRangePosition } from './LanguageServerProtocolLocationRangePosition';
import {
    LanguageServerProtocolLocationRangePositionFromJSON,
    LanguageServerProtocolLocationRangePositionFromJSONTyped,
    LanguageServerProtocolLocationRangePositionToJSON,
} from './LanguageServerProtocolLocationRangePosition';

/**
 * modeled after this (https://microsoft.github.io/language-server-protocol/specifications/lsp/3.17/specification/#range)
 * @export
 * @interface LanguageServerProtocolLocationRange
 */
export interface LanguageServerProtocolLocationRange {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof LanguageServerProtocolLocationRange
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {LanguageServerProtocolLocationRangePosition}
     * @memberof LanguageServerProtocolLocationRange
     */
    start: LanguageServerProtocolLocationRangePosition;
    /**
     * 
     * @type {LanguageServerProtocolLocationRangePosition}
     * @memberof LanguageServerProtocolLocationRange
     */
    end: LanguageServerProtocolLocationRangePosition;
}

/**
 * Check if a given object implements the LanguageServerProtocolLocationRange interface.
 */
export function instanceOfLanguageServerProtocolLocationRange(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "start" in value;
    isInstance = isInstance && "end" in value;

    return isInstance;
}

export function LanguageServerProtocolLocationRangeFromJSON(json: any): LanguageServerProtocolLocationRange {
    return LanguageServerProtocolLocationRangeFromJSONTyped(json, false);
}

export function LanguageServerProtocolLocationRangeFromJSONTyped(json: any, ignoreDiscriminator: boolean): LanguageServerProtocolLocationRange {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'schema': !exists(json, 'schema') ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'start': LanguageServerProtocolLocationRangePositionFromJSON(json['start']),
        'end': LanguageServerProtocolLocationRangePositionFromJSON(json['end']),
    };
}

export function LanguageServerProtocolLocationRangeToJSON(value?: LanguageServerProtocolLocationRange | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value.schema),
        'start': LanguageServerProtocolLocationRangePositionToJSON(value.start),
        'end': LanguageServerProtocolLocationRangePositionToJSON(value.end),
    };
}
