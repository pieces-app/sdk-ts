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
import type { SensitiveMetadata } from './SensitiveMetadata';
import {
    SensitiveMetadataFromJSON,
    SensitiveMetadataFromJSONTyped,
    SensitiveMetadataToJSON,
} from './SensitiveMetadata';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';
import type { SensitiveSeverityEnum } from './SensitiveSeverityEnum';
import {
    SensitiveSeverityEnumFromJSON,
    SensitiveSeverityEnumFromJSONTyped,
    SensitiveSeverityEnumToJSON,
} from './SensitiveSeverityEnum';
import type { SensitiveCategoryEnum } from './SensitiveCategoryEnum';
import {
    SensitiveCategoryEnumFromJSON,
    SensitiveCategoryEnumFromJSONTyped,
    SensitiveCategoryEnumToJSON,
} from './SensitiveCategoryEnum';

/**
 * This is the seededSensitive, this does not have an id yet as we will add it on the server side.
 * 
 * can optionally pass in our mechanism here, as the default will be manual unless specified.
 * 
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededSensitive
 */
export interface SeededSensitive {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededSensitive
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof SeededSensitive
     */
    asset: string;
    /**
     * this is the string representative of the sensative piece of data.
     * @type {string}
     * @memberof SeededSensitive
     */
    text: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededSensitive
     */
    mechanism?: MechanismEnum;
    /**
     * 
     * @type {SensitiveCategoryEnum}
     * @memberof SeededSensitive
     */
    category: SensitiveCategoryEnum;
    /**
     * 
     * @type {SensitiveSeverityEnum}
     * @memberof SeededSensitive
     */
    severity: SensitiveSeverityEnum;
    /**
     * 
     * @type {string}
     * @memberof SeededSensitive
     */
    name: string;
    /**
     * 
     * @type {string}
     * @memberof SeededSensitive
     */
    description: string;
    /**
     * 
     * @type {SensitiveMetadata}
     * @memberof SeededSensitive
     */
    metadata?: SensitiveMetadata;
}

/**
 * Check if a given object implements the SeededSensitive interface.
 */
export function instanceOfSeededSensitive(value: object): value is SeededSensitive {
    if (!('asset' in value) || value['asset'] === undefined) return false;
    if (!('text' in value) || value['text'] === undefined) return false;
    if (!('category' in value) || value['category'] === undefined) return false;
    if (!('severity' in value) || value['severity'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('description' in value) || value['description'] === undefined) return false;
    return true;
}

export function SeededSensitiveFromJSON(json: any): SeededSensitive {
    return SeededSensitiveFromJSONTyped(json, false);
}

export function SeededSensitiveFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededSensitive {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'],
        'text': json['text'],
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'category': SensitiveCategoryEnumFromJSON(json['category']),
        'severity': SensitiveSeverityEnumFromJSON(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': json['metadata'] == null ? undefined : SensitiveMetadataFromJSON(json['metadata']),
    };
}

export function SeededSensitiveToJSON(value?: SeededSensitive | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': value['asset'],
        'text': value['text'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
        'category': SensitiveCategoryEnumToJSON(value['category']),
        'severity': SensitiveSeverityEnumToJSON(value['severity']),
        'name': value['name'],
        'description': value['description'],
        'metadata': SensitiveMetadataToJSON(value['metadata']),
    };
}

