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
import type { ExportedDatabaseFormats } from './ExportedDatabaseFormats';
import {
    ExportedDatabaseFormatsFromJSON,
    ExportedDatabaseFormatsFromJSONTyped,
    ExportedDatabaseFormatsToJSON,
} from './ExportedDatabaseFormats';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface ExportedDatabase
 */
export interface ExportedDatabase {
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    analyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    applications: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    assets: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    codeAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    files: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formatMetrics: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    formats: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    fragments: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    imageAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    models: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    ocrAnalyses: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    persons: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    sensitives: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    tags: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    websites: Array<number>;
    /**
     * 
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    values: ExportedDatabaseFormats;
    /**
     * This is the version of your os_server or cloud_server that we we exporting from.
     * @type {string}
     * @memberof ExportedDatabase
     */
    version: string;
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ExportedDatabase
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    relationships?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    activities?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    annotations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    hints?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchors?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    anchorPoints?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversations?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    conversationMessages?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    workstreamEvents?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    ranges?: Array<number>;
    /**
     * 
     * @type {Array<number>}
     * @memberof ExportedDatabase
     */
    workstreamSummaries?: Array<number>;
    /**
     * 
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    messageValues?: ExportedDatabaseFormats;
    /**
     * 
     * @type {ExportedDatabaseFormats}
     * @memberof ExportedDatabase
     */
    workstreamEventValues?: ExportedDatabaseFormats;
}

/**
 * Check if a given object implements the ExportedDatabase interface.
 */
export function instanceOfExportedDatabase(value: object): value is ExportedDatabase {
    if (!('analyses' in value) || value['analyses'] === undefined) return false;
    if (!('applications' in value) || value['applications'] === undefined) return false;
    if (!('assets' in value) || value['assets'] === undefined) return false;
    if (!('codeAnalyses' in value) || value['codeAnalyses'] === undefined) return false;
    if (!('files' in value) || value['files'] === undefined) return false;
    if (!('formatMetrics' in value) || value['formatMetrics'] === undefined) return false;
    if (!('formats' in value) || value['formats'] === undefined) return false;
    if (!('fragments' in value) || value['fragments'] === undefined) return false;
    if (!('imageAnalyses' in value) || value['imageAnalyses'] === undefined) return false;
    if (!('models' in value) || value['models'] === undefined) return false;
    if (!('ocrAnalyses' in value) || value['ocrAnalyses'] === undefined) return false;
    if (!('persons' in value) || value['persons'] === undefined) return false;
    if (!('sensitives' in value) || value['sensitives'] === undefined) return false;
    if (!('tags' in value) || value['tags'] === undefined) return false;
    if (!('websites' in value) || value['websites'] === undefined) return false;
    if (!('values' in value) || value['values'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    return true;
}

export function ExportedDatabaseFromJSON(json: any): ExportedDatabase {
    return ExportedDatabaseFromJSONTyped(json, false);
}

export function ExportedDatabaseFromJSONTyped(json: any, ignoreDiscriminator: boolean): ExportedDatabase {
    if (json == null) {
        return json;
    }
    return {
        
        'analyses': json['analyses'],
        'applications': json['applications'],
        'assets': json['assets'],
        'codeAnalyses': json['codeAnalyses'],
        'files': json['files'],
        'formatMetrics': json['formatMetrics'],
        'formats': json['formats'],
        'fragments': json['fragments'],
        'imageAnalyses': json['imageAnalyses'],
        'models': json['models'],
        'ocrAnalyses': json['ocrAnalyses'],
        'persons': json['persons'],
        'sensitives': json['sensitives'],
        'tags': json['tags'],
        'websites': json['websites'],
        'values': ExportedDatabaseFormatsFromJSON(json['values']),
        'version': json['version'],
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'relationships': json['relationships'] == null ? undefined : json['relationships'],
        'activities': json['activities'] == null ? undefined : json['activities'],
        'annotations': json['annotations'] == null ? undefined : json['annotations'],
        'hints': json['hints'] == null ? undefined : json['hints'],
        'anchors': json['anchors'] == null ? undefined : json['anchors'],
        'anchorPoints': json['anchorPoints'] == null ? undefined : json['anchorPoints'],
        'conversations': json['conversations'] == null ? undefined : json['conversations'],
        'conversationMessages': json['conversationMessages'] == null ? undefined : json['conversationMessages'],
        'workstreamEvents': json['workstreamEvents'] == null ? undefined : json['workstreamEvents'],
        'ranges': json['ranges'] == null ? undefined : json['ranges'],
        'workstreamSummaries': json['workstreamSummaries'] == null ? undefined : json['workstreamSummaries'],
        'messageValues': json['messageValues'] == null ? undefined : ExportedDatabaseFormatsFromJSON(json['messageValues']),
        'workstreamEventValues': json['workstreamEventValues'] == null ? undefined : ExportedDatabaseFormatsFromJSON(json['workstreamEventValues']),
    };
}

export function ExportedDatabaseToJSON(value?: ExportedDatabase | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'analyses': value['analyses'],
        'applications': value['applications'],
        'assets': value['assets'],
        'codeAnalyses': value['codeAnalyses'],
        'files': value['files'],
        'formatMetrics': value['formatMetrics'],
        'formats': value['formats'],
        'fragments': value['fragments'],
        'imageAnalyses': value['imageAnalyses'],
        'models': value['models'],
        'ocrAnalyses': value['ocrAnalyses'],
        'persons': value['persons'],
        'sensitives': value['sensitives'],
        'tags': value['tags'],
        'websites': value['websites'],
        'values': ExportedDatabaseFormatsToJSON(value['values']),
        'version': value['version'],
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'relationships': value['relationships'],
        'activities': value['activities'],
        'annotations': value['annotations'],
        'hints': value['hints'],
        'anchors': value['anchors'],
        'anchorPoints': value['anchorPoints'],
        'conversations': value['conversations'],
        'conversationMessages': value['conversationMessages'],
        'workstreamEvents': value['workstreamEvents'],
        'ranges': value['ranges'],
        'workstreamSummaries': value['workstreamSummaries'],
        'messageValues': ExportedDatabaseFormatsToJSON(value['messageValues']),
        'workstreamEventValues': ExportedDatabaseFormatsToJSON(value['workstreamEventValues']),
    };
}

