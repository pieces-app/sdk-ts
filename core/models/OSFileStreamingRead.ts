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
import type { OSFileStreamingReadProgress } from './OSFileStreamingReadProgress';
import {
    OSFileStreamingReadProgressFromJSON,
    OSFileStreamingReadProgressFromJSONTyped,
    OSFileStreamingReadProgressToJSON,
} from './OSFileStreamingReadProgress';
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
import type { TransferableBytes } from './TransferableBytes';
import {
    TransferableBytesFromJSON,
    TransferableBytesFromJSONTyped,
    TransferableBytesToJSON,
} from './TransferableBytes';

/**
 * This is a model to return stream progress for a file read.
 * @export
 * @interface OSFileStreamingRead
 */
export interface OSFileStreamingRead {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof OSFileStreamingRead
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ModelDownloadProgressStatusEnum}
     * @memberof OSFileStreamingRead
     */
    status: ModelDownloadProgressStatusEnum;
    /**
     * Optionally if the download is in progress you will receive a download percent(from 0-100).
     * @type {number}
     * @memberof OSFileStreamingRead
     */
    percentage?: number;
    /**
     * 
     * @type {string}
     * @memberof OSFileStreamingRead
     */
    path: string;
    /**
     * This is a generated UUID that represents this current stream in progress(can be used to cancel this in the future)
     * @type {string}
     * @memberof OSFileStreamingRead
     */
    id: string;
    /**
     * 
     * @type {TransferableBytes}
     * @memberof OSFileStreamingRead
     */
    bytes?: TransferableBytes;
    /**
     * 
     * @type {OSFileStreamingReadProgress}
     * @memberof OSFileStreamingRead
     */
    progress?: OSFileStreamingReadProgress;
}

/**
 * Check if a given object implements the OSFileStreamingRead interface.
 */
export function instanceOfOSFileStreamingRead(value: object): value is OSFileStreamingRead {
    if (!('status' in value) || value['status'] === undefined) return false;
    if (!('path' in value) || value['path'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function OSFileStreamingReadFromJSON(json: any): OSFileStreamingRead {
    return OSFileStreamingReadFromJSONTyped(json, false);
}

export function OSFileStreamingReadFromJSONTyped(json: any, ignoreDiscriminator: boolean): OSFileStreamingRead {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'status': ModelDownloadProgressStatusEnumFromJSON(json['status']),
        'percentage': json['percentage'] == null ? undefined : json['percentage'],
        'path': json['path'],
        'id': json['id'],
        'bytes': json['bytes'] == null ? undefined : TransferableBytesFromJSON(json['bytes']),
        'progress': json['progress'] == null ? undefined : OSFileStreamingReadProgressFromJSON(json['progress']),
    };
}

export function OSFileStreamingReadToJSON(value?: OSFileStreamingRead | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'status': ModelDownloadProgressStatusEnumToJSON(value['status']),
        'percentage': value['percentage'],
        'path': value['path'],
        'id': value['id'],
        'bytes': TransferableBytesToJSON(value['bytes']),
        'progress': OSFileStreamingReadProgressToJSON(value['progress']),
    };
}

