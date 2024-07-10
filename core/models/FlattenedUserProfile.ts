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

/**
 * This is a FlattenedUserProfile that includes information that is not sensative in relation to a user.
 * @export
 * @interface FlattenedUserProfile
 */
export interface FlattenedUserProfile {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof FlattenedUserProfile
     */
    schema?: EmbeddedModelSchema;
    /**
     * this is the uuid that identifies a user.
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    email?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    name?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    username?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    picture?: string;
    /**
     * 
     * @type {string}
     * @memberof FlattenedUserProfile
     */
    vanityname?: string;
}

/**
 * Check if a given object implements the FlattenedUserProfile interface.
 */
export function instanceOfFlattenedUserProfile(value: object): value is FlattenedUserProfile {
    if (!('id' in value) || value['id'] === undefined) return false;
    return true;
}

export function FlattenedUserProfileFromJSON(json: any): FlattenedUserProfile {
    return FlattenedUserProfileFromJSONTyped(json, false);
}

export function FlattenedUserProfileFromJSONTyped(json: any, ignoreDiscriminator: boolean): FlattenedUserProfile {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'id': json['id'],
        'email': json['email'] == null ? undefined : json['email'],
        'name': json['name'] == null ? undefined : json['name'],
        'username': json['username'] == null ? undefined : json['username'],
        'picture': json['picture'] == null ? undefined : json['picture'],
        'vanityname': json['vanityname'] == null ? undefined : json['vanityname'],
    };
}

export function FlattenedUserProfileToJSON(value?: FlattenedUserProfile | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'id': value['id'],
        'email': value['email'],
        'name': value['name'],
        'username': value['username'],
        'picture': value['picture'],
        'vanityname': value['vanityname'],
    };
}

