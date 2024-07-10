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
import type { GitHubGistDistribution } from './GitHubGistDistribution';
import {
    GitHubGistDistributionFromJSON,
    GitHubGistDistributionFromJSONTyped,
    GitHubGistDistributionToJSON,
} from './GitHubGistDistribution';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * 
 * @export
 * @interface GitHubDistribution
 */
export interface GitHubDistribution {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof GitHubDistribution
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {GitHubGistDistribution}
     * @memberof GitHubDistribution
     */
    gist?: GitHubGistDistribution;
}

/**
 * Check if a given object implements the GitHubDistribution interface.
 */
export function instanceOfGitHubDistribution(value: object): value is GitHubDistribution {
    return true;
}

export function GitHubDistributionFromJSON(json: any): GitHubDistribution {
    return GitHubDistributionFromJSONTyped(json, false);
}

export function GitHubDistributionFromJSONTyped(json: any, ignoreDiscriminator: boolean): GitHubDistribution {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'gist': json['gist'] == null ? undefined : GitHubGistDistributionFromJSON(json['gist']),
    };
}

export function GitHubDistributionToJSON(value?: GitHubDistribution | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'gist': GitHubGistDistributionToJSON(value['gist']),
    };
}

