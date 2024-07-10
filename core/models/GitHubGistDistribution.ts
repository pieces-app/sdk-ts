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
import type { Recipients } from './Recipients';
import {
    RecipientsFromJSON,
    RecipientsFromJSONTyped,
    RecipientsToJSON,
} from './Recipients';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * This is a published Github Gist.
 * @export
 * @interface GitHubGistDistribution
 */
export interface GitHubGistDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GitHubGistDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Recipients}
     * @memberof GitHubGistDistribution
     */
    recipients: Recipients;
    /**
     * This will let us know if the gist is public or private.
     * @type {boolean}
     * @memberof GitHubGistDistribution
     */
    _public: boolean;
    /**
     * This is the description of the Gist Distribution
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    description?: string;
    /**
     * This is the name of the gist you will add.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    name: string;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    created: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    updated: GroupedTimestamp;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof GitHubGistDistribution
     */
    deleted?: GroupedTimestamp;
    /**
     * This is the id that github uses to represent the gist.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    githubId: string;
    /**
     * This is the url where the gist is.
     * @type {string}
     * @memberof GitHubGistDistribution
     */
    url: string;
}

/**
 * Check if a given object implements the GitHubGistDistribution interface.
 */
export function instanceOfGitHubGistDistribution(value: object): value is GitHubGistDistribution {
    if (!('recipients' in value) || value['recipients'] === undefined) return false;
    if (!('_public' in value) || value['_public'] === undefined) return false;
    if (!('name' in value) || value['name'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    if (!('updated' in value) || value['updated'] === undefined) return false;
    if (!('githubId' in value) || value['githubId'] === undefined) return false;
    if (!('url' in value) || value['url'] === undefined) return false;
    return true;
}

export function GitHubGistDistributionFromJSON(json: any): GitHubGistDistribution {
    return GitHubGistDistributionFromJSONTyped(json, false);
}

export function GitHubGistDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitHubGistDistribution {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'recipients': RecipientsFromJSON(json['recipients']),
        '_public': json['public'],
        'description': json['description'] == null ? undefined : json['description'],
        'name': json['name'],
        'created': GroupedTimestampFromJSON(json['created']),
        'updated': GroupedTimestampFromJSON(json['updated']),
        'deleted': json['deleted'] == null ? undefined : GroupedTimestampFromJSON(json['deleted']),
        'githubId': json['github_id'],
        'url': json['url'],
    };
}

export function GitHubGistDistributionToJSON(value?: GitHubGistDistribution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'recipients': RecipientsToJSON(value['recipients']),
        'public': value['_public'],
        'description': value['description'],
        'name': value['name'],
        'created': GroupedTimestampToJSON(value['created']),
        'updated': GroupedTimestampToJSON(value['updated']),
        'deleted': GroupedTimestampToJSON(value['deleted']),
        'github_id': value['githubId'],
        'url': value['url'],
    };
}

