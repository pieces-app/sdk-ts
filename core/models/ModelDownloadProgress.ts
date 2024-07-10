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
import type { ModelDownloadProgressStatusEnum } from './ModelDownloadProgressStatusEnum';
import {
    ModelDownloadProgressStatusEnumFromJSON,
    ModelDownloadProgressStatusEnumFromJSONTyped,
    ModelDownloadProgressStatusEnumToJSON,
} from './ModelDownloadProgressStatusEnum';

/**
 * This is the model that is sent over our ws for streaming the progress of a model that is being downloaded.
 * 
 * can eventually add a number that display the percent downloaded an so on.(this is called percent 0-100)
 * @export
 * @interface ModelDownloadProgress
 */
export interface ModelDownloadProgress {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ModelDownloadProgress
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ModelDownloadProgressStatusEnum}
     * @memberof ModelDownloadProgress
     */
    status?: ModelDownloadProgressStatusEnum;
    /**
     * Optionally if the download is in progress you will recieve a download percent(from 0-100).
     * @type {number}
     * @memberof ModelDownloadProgress
     */
    percentage?: number;
}

/**
 * Check if a given object implements the ModelDownloadProgress interface.
 */
export function instanceOfModelDownloadProgress(value: object): value is ModelDownloadProgress {
    return true;
}

export function ModelDownloadProgressFromJSON(json: any): ModelDownloadProgress {
    return ModelDownloadProgressFromJSONTyped(json, false);
}

export function ModelDownloadProgressFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelDownloadProgress {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'status': json['status'] == null ? undefined : ModelDownloadProgressStatusEnumFromJSON(json['status']),
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
    };
}

export function ModelDownloadProgressToJSON(value?: ModelDownloadProgress | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'status': ModelDownloadProgressStatusEnumToJSON(value['status']),
        'percentage': value['percentage'],
    };
}

