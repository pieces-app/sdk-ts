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
import type { BrowserTabValue } from './BrowserTabValue';
import {
    BrowserTabValueFromJSON,
    BrowserTabValueFromJSONTyped,
    BrowserTabValueToJSON,
} from './BrowserTabValue';

/**
 * Plural model that represent many tabs
 * @export
 * @interface BrowserTabValues
 */
export interface BrowserTabValues {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof BrowserTabValues
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<BrowserTabValue>}
     * @memberof BrowserTabValues
     */
    iterable: Array<BrowserTabValue>;
}

/**
 * Check if a given object implements the BrowserTabValues interface.
 */
export function instanceOfBrowserTabValues(value: object): value is BrowserTabValues {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function BrowserTabValuesFromJSON(json: any): BrowserTabValues {
    return BrowserTabValuesFromJSONTyped(json, false);
}

export function BrowserTabValuesFromJSONTyped(json: any, ignoreDiscriminator: boolean): BrowserTabValues {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(BrowserTabValueFromJSON)),
    };
}

export function BrowserTabValuesToJSON(value?: BrowserTabValues | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(BrowserTabValueToJSON)),
    };
}

