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
  Range,
  Ranges,
  SeededRange,
} from '../models/index';
import {
    RangeFromJSON,
    RangeToJSON,
    RangesFromJSON,
    RangesToJSON,
    SeededRangeFromJSON,
    SeededRangeToJSON,
} from '../models/index';

export interface RangesCreateNewRangeRequest {
    seededRange?: SeededRange;
}

export interface RangesDeleteSpecificRangeRequest {
    range: string;
}

/**
 * 
 */
export class RangesApi extends runtime.BaseAPI {

    /**
     * This will create a new Range in the database.
     * /ranges/create [POST]
     */
    async rangesCreateNewRangeRaw(requestParameters: RangesCreateNewRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Range>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/ranges/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: SeededRangeToJSON(requestParameters['seededRange']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RangeFromJSON(jsonValue));
    }

    /**
     * This will create a new Range in the database.
     * /ranges/create [POST]
     */
    async rangesCreateNewRange(requestParameters: RangesCreateNewRangeRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Range> {
        const response = await this.rangesCreateNewRangeRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will delete a specific range from the database!
     * /ranges/{range}/delete [POST]
     */
    async rangesDeleteSpecificRangeRaw(requestParameters: RangesDeleteSpecificRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters['range'] == null) {
            throw new runtime.RequiredError(
                'range',
                'Required parameter "range" was null or undefined when calling rangesDeleteSpecificRange().'
            );
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranges/{range}/delete`.replace(`{${"range"}}`, encodeURIComponent(String(requestParameters['range']))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * This will delete a specific range from the database!
     * /ranges/{range}/delete [POST]
     */
    async rangesDeleteSpecificRange(requestParameters: RangesDeleteSpecificRangeRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.rangesDeleteSpecificRangeRaw(requestParameters, initOverrides);
    }

    /**
     * This will get a snapshot of all your ranges.
     * /ranges [GET]
     */
    async rangesSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Ranges>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/ranges`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => RangesFromJSON(jsonValue));
    }

    /**
     * This will get a snapshot of all your ranges.
     * /ranges [GET]
     */
    async rangesSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Ranges> {
        const response = await this.rangesSnapshotRaw(initOverrides);
        return await response.value();
    }

}
