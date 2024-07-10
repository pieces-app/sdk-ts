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
import type { SeededConnectorAsset } from './SeededConnectorAsset';
import {
    SeededConnectorAssetFromJSON,
    SeededConnectorAssetFromJSONTyped,
    SeededConnectorAssetToJSON,
} from './SeededConnectorAsset';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * A encompasing creation object that can be utilized to create either an asset or a format.
 * @export
 * @interface SeededConnectorCreation
 */
export interface SeededConnectorCreation {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededConnectorCreation
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {SeededConnectorAsset}
     * @memberof SeededConnectorCreation
     */
    asset?: SeededConnectorAsset;
}

/**
 * Check if a given object implements the SeededConnectorCreation interface.
 */
export function instanceOfSeededConnectorCreation(value: object): value is SeededConnectorCreation {
    return true;
}

export function SeededConnectorCreationFromJSON(json: any): SeededConnectorCreation {
    return SeededConnectorCreationFromJSONTyped(json, false);
}

export function SeededConnectorCreationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConnectorCreation {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'] == null ? undefined : SeededConnectorAssetFromJSON(json['asset']),
    };
}

export function SeededConnectorCreationToJSON(value?: SeededConnectorCreation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': SeededConnectorAssetToJSON(value['asset']),
    };
}

