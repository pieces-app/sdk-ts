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
import type { Auth0OpenAIUserMetadata } from './Auth0OpenAIUserMetadata';
import {
    Auth0OpenAIUserMetadataFromJSON,
    Auth0OpenAIUserMetadataFromJSONTyped,
    Auth0OpenAIUserMetadataToJSON,
} from './Auth0OpenAIUserMetadata';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { Auth0UserAllocationMetadata } from './Auth0UserAllocationMetadata';
import {
    Auth0UserAllocationMetadataFromJSON,
    Auth0UserAllocationMetadataFromJSONTyped,
    Auth0UserAllocationMetadataToJSON,
} from './Auth0UserAllocationMetadata';
import type { AnonymousTemporalRange } from './AnonymousTemporalRange';
import {
    AnonymousTemporalRangeFromJSON,
    AnonymousTemporalRangeFromJSONTyped,
    AnonymousTemporalRangeToJSON,
} from './AnonymousTemporalRange';

/**
 * User Metadata from Auth0
 * @export
 * @interface Auth0UserMetadata
 */
export interface Auth0UserMetadata {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Auth0UserMetadata
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {string}
     * @memberof Auth0UserMetadata
     */
    globalId: string;
    /**
     * 
     * @type {string}
     * @memberof Auth0UserMetadata
     */
    cloudKey?: string;
    /**
     * A customer ID that is added to the user in the case of payments
     * @type {string}
     * @memberof Auth0UserMetadata
     */
    stripeCustomerId?: string;
    /**
     * this is the vanityname of the user.(set from their custom CNAME dns record.) ie mark.pieces.cloud where "mark" is the vanityname.
     * @type {string}
     * @memberof Auth0UserMetadata
     */
    vanityname?: string;
    /**
     * 
     * @type {Auth0UserAllocationMetadata}
     * @memberof Auth0UserMetadata
     */
    allocation?: Auth0UserAllocationMetadata;
    /**
     * 
     * @type {Auth0OpenAIUserMetadata}
     * @memberof Auth0UserMetadata
     */
    openAI?: Auth0OpenAIUserMetadata;
    /**
     * 
     * @type {AnonymousTemporalRange}
     * @memberof Auth0UserMetadata
     */
    beta?: AnonymousTemporalRange;
}

/**
 * Check if a given object implements the Auth0UserMetadata interface.
 */
export function instanceOfAuth0UserMetadata(value: object): value is Auth0UserMetadata {
    if (!('globalId' in value) || value['globalId'] === undefined) return false;
    return true;
}

export function Auth0UserMetadataFromJSON(json: any): Auth0UserMetadata {
    return Auth0UserMetadataFromJSONTyped(json, false);
}

export function Auth0UserMetadataFromJSONTyped(json: any, ignoreDiscriminator: boolean): Auth0UserMetadata {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'globalId': json['global_id'],
        'cloudKey': json['cloud_key'] == null ? undefined : json['cloud_key'],
        'stripeCustomerId': json['stripe_customer_id'] == null ? undefined : json['stripe_customer_id'],
        'vanityname': json['vanityname'] == null ? undefined : json['vanityname'],
        'allocation': json['allocation'] == null ? undefined : Auth0UserAllocationMetadataFromJSON(json['allocation']),
        'openAI': json['open_AI'] == null ? undefined : Auth0OpenAIUserMetadataFromJSON(json['open_AI']),
        'beta': json['beta'] == null ? undefined : AnonymousTemporalRangeFromJSON(json['beta']),
    };
}

export function Auth0UserMetadataToJSON(value?: Auth0UserMetadata | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'global_id': value['globalId'],
        'cloud_key': value['cloudKey'],
        'stripe_customer_id': value['stripeCustomerId'],
        'vanityname': value['vanityname'],
        'allocation': Auth0UserAllocationMetadataToJSON(value['allocation']),
        'open_AI': Auth0OpenAIUserMetadataToJSON(value['openAI']),
        'beta': AnonymousTemporalRangeToJSON(value['beta']),
    };
}

