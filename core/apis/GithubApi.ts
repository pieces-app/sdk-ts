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


import * as runtime from '../runtime';
import type {
  SeededGithubGistsImport,
  Seeds,
} from '../models/index';
import {
    SeededGithubGistsImportFromJSON,
    SeededGithubGistsImportToJSON,
    SeedsFromJSON,
    SeedsToJSON,
} from '../models/index';

export interface ImportGithubGistsRequest {
    automatic?: boolean;
    seededGithubGistsImport?: SeededGithubGistsImport;
}

/**
 * 
 */
export class GithubApi extends runtime.BaseAPI {

    /**
     * This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users\' gists. implemented. v2. can get specific a public gist.
     * /github/gists/import [POST]
     */
    async importGithubGistsRaw(requestParameters: ImportGithubGistsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Seeds>> {
        const queryParameters: any = {};

        if (requestParameters['automatic'] != null) {
            queryParameters['automatic'] = requestParameters['automatic'];
        }

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/github/gists/import`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededGithubGistsImportToJSON(requestParameters['seededGithubGistsImport']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => SeedsFromJSON(jsonValue));
    }

    /**
     * This will attempt to get all the gist availble and return them to the user as a DiscoveredAssets.  if automatic is true we will automatically create the asset.  v1. will just get all the users\' gists. implemented. v2. can get specific a public gist.
     * /github/gists/import [POST]
     */
    async importGithubGists(requestParameters: ImportGithubGistsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Seeds> {
        const response = await this.importGithubGistsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
