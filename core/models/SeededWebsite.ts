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
import type { MechanismEnum } from './MechanismEnum';
import {
    MechanismEnumFromJSON,
    MechanismEnumFromJSONTyped,
    MechanismEnumToJSON,
} from './MechanismEnum';

/**
 * This is the minimum information required to create a website for a specific asset.
 * 
 * you can optionally add an asset, or person id to attach this website directly to it
 * 
 * TODO consider updating these asset,format to referenced Models
 * @export
 * @interface SeededWebsite
 */
export interface SeededWebsite {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof SeededWebsite
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is the specific asset that this website is going to get attached to!!
     * @type {string}
     * @memberof SeededWebsite
     */
    asset?: string;
    /**
     * This is the specific conversation that this website is going to get attached to!!
     * @type {string}
     * @memberof SeededWebsite
     */
    conversation?: string;
    /**
     * this is the url of the website.
     * @type {string}
     * @memberof SeededWebsite
     */
    url: string;
    /**
     * name of the website.(customizable and updateable as well.)
     * @type {string}
     * @memberof SeededWebsite
     */
    name: string;
    /**
     * 
     * @type {MechanismEnum}
     * @memberof SeededWebsite
     */
    mechanism?: MechanismEnum;
    /**
     * this is a uuid of a person that we are going to add the website too.
     * @type {string}
     * @memberof SeededWebsite
     */
    person?: string;
}

/**
 * Check if a given object implements the SeededWebsite interface.
 */
export function instanceOfSeededWebsite(value: object): value is SeededWebsite {
    if (!('url' in value) || value['url'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    return true;
}

export function SeededWebsiteFromJSON(json: any): SeededWebsite {
    return SeededWebsiteFromJSONTyped(json, false);
}

export function SeededWebsiteFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededWebsite {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'asset': json['asset'] == null ? undefined : json['asset'],
        'conversation': json['conversation'] == null ? undefined : json['conversation'],
        'url': json['url'],
        'name': json['name'],
        'mechanism': json['mechanism'] == null ? undefined : MechanismEnumFromJSON(json['mechanism']),
        'person': json['person'] == null ? undefined : json['person'],
    };
}

export function SeededWebsiteToJSON(value?: SeededWebsite | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'asset': value['asset'],
        'conversation': value['conversation'],
        'url': value['url'],
        'name': value['name'],
        'mechanism': MechanismEnumToJSON(value['mechanism']),
        'person': value['person'],
    };
}

