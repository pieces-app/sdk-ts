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
import type { ApplicationNameEnum } from './ApplicationNameEnum';
import {
    ApplicationNameEnumFromJSON,
    ApplicationNameEnumFromJSONTyped,
    ApplicationNameEnumToJSON,
} from './ApplicationNameEnum';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { PrivacyEnum } from './PrivacyEnum';
import {
    PrivacyEnumFromJSON,
    PrivacyEnumFromJSONTyped,
    PrivacyEnumToJSON,
} from './PrivacyEnum';
import type { CapabilitiesEnum } from './CapabilitiesEnum';
import {
    CapabilitiesEnumFromJSON,
    CapabilitiesEnumFromJSONTyped,
    CapabilitiesEnumToJSON,
} from './CapabilitiesEnum';
import type { PlatformEnum } from './PlatformEnum';
import {
    PlatformEnumFromJSON,
    PlatformEnumFromJSONTyped,
    PlatformEnumToJSON,
} from './PlatformEnum';

/**
 * A Model to describe what application a format/analytics event originated - Specifically NOT requiring an ID
 * @export
 * @interface SeededTrackedApplication
 */
export interface SeededTrackedApplication {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededTrackedApplication
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ApplicationNameEnum}
     * @memberof SeededTrackedApplication
     */
    name: ApplicationNameEnum;
    /**
     * This is the specific version number 0.0.0
     * @type {string}
     * @memberof SeededTrackedApplication
     */
    version: string;
    /**
     * 
     * @type {PlatformEnum}
     * @memberof SeededTrackedApplication
     */
    platform: PlatformEnum;
    /**
     * 
     * @type {CapabilitiesEnum}
     * @memberof SeededTrackedApplication
     */
    capabilities?: CapabilitiesEnum;
    /**
     * 
     * @type {PrivacyEnum}
     * @memberof SeededTrackedApplication
     */
    privacy?: PrivacyEnum;
    /**
     * This is a proper that will let us know if we will proactivity unload all of your machine learning models.by default this is false.
     * @type {boolean}
     * @memberof SeededTrackedApplication
     */
    automaticUnload?: boolean;
}

/**
 * Check if a given object implements the SeededTrackedApplication interface.
 */
export function instanceOfSeededTrackedApplication(value: object): value is SeededTrackedApplication {
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('version' in value) || value['version'] === undefined) return false;
    if (!('platform' in value) || value['platform'] === undefined) return false;
    return true;
}

export function SeededTrackedApplicationFromJSON(json: any): SeededTrackedApplication {
    return SeededTrackedApplicationFromJSONTyped(json, false);
}

export function SeededTrackedApplicationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededTrackedApplication {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'name': ApplicationNameEnumFromJSON(json['name']),
        'version': json['version'],
        'platform': PlatformEnumFromJSON(json['platform']),
        'capabilities': json['capabilities'] == null ? undefined : CapabilitiesEnumFromJSON(json['capabilities']),
        'privacy': json['privacy'] == null ? undefined : PrivacyEnumFromJSON(json['privacy']),
        'automaticUnload': json['automaticUnload'] == null ? undefined : json['automaticUnload'],
    };
}

export function SeededTrackedApplicationToJSON(value?: SeededTrackedApplication | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'name': ApplicationNameEnumToJSON(value['name']),
        'version': value['version'],
        'platform': PlatformEnumToJSON(value['platform']),
        'capabilities': CapabilitiesEnumToJSON(value['capabilities']),
        'privacy': PrivacyEnumToJSON(value['privacy']),
        'automaticUnload': value['automaticUnload'],
    };
}

