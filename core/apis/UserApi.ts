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
  Auth0User,
  ReturnedUserProfile,
  UserBetaStatus,
  UserProfile,
} from '../models/index';
import {
    Auth0UserFromJSON,
    Auth0UserToJSON,
    ReturnedUserProfileFromJSON,
    ReturnedUserProfileToJSON,
    UserBetaStatusFromJSON,
    UserBetaStatusToJSON,
    UserProfileFromJSON,
    UserProfileToJSON,
} from '../models/index';

export interface SelectUserRequest {
    auth0User?: Auth0User;
}

export interface UpdateUserRequest {
    userProfile?: UserProfile;
}

export interface UserBetaStatusRequest {
    userBetaStatus?: UserBetaStatus;
}

export interface UserUpdateVanityRequest {
    userProfile?: UserProfile;
}

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     * An endpoint to clear the current user. 
     * /user/clear
     */
    async clearUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/clear`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     * An endpoint to clear the current user. 
     * /user/clear
     */
    async clearUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.clearUserRaw(initOverrides);
    }

    /**
     * This will refresh a user.
     * /user/refresh [GET]
     */
    async refreshUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/refresh`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will refresh a user.
     * /user/refresh [GET]
     */
    async refreshUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.refreshUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will select the current user.
     * /user/select [POST]
     */
    async selectUserRaw(requestParameters: SelectUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        if (this.configuration && this.configuration.accessToken) {
            // oauth required
            headerParameters["Authorization"] = await this.configuration.accessToken("auth0", []);
        }

        const response = await this.request({
            path: `/user/select`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: Auth0UserToJSON(requestParameters['auth0User']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will select the current user.
     * /user/select [POST]
     */
    async selectUser(requestParameters: SelectUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.selectUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Provides a WebSocket connection that streams user data.
     * /user/stream [WS]
     */
    async streamUserRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/stream`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * Provides a WebSocket connection that streams user data.
     * /user/stream [WS]
     */
    async streamUser(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.streamUserRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    async updateUserRaw(requestParameters: UpdateUserRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileToJSON(requestParameters['userProfile']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This will update a specific user in the database.
     * /user/update [POST]
     */
    async updateUser(requestParameters: UpdateUserRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.updateUserRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)
     * /user/beta/status [POST]
     */
    async userBetaStatusRaw(requestParameters: UserBetaStatusRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserBetaStatus>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/beta/status`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserBetaStatusToJSON(requestParameters['userBetaStatus']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserBetaStatusFromJSON(jsonValue));
    }

    /**
     * This will be an endpoint to give access or remove access immediately from a given user.(isomorphic from the given provider)
     * /user/beta/status [POST]
     */
    async userBetaStatus(requestParameters: UserBetaStatusRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserBetaStatus> {
        const response = await this.userBetaStatusRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    async userProvidersRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReturnedUserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user/providers`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReturnedUserProfileFromJSON(jsonValue));
    }

    /**
     * This will retrieve all the users Providers that are connected to this account.  If called locally. we will 501 - because it is not implemented locally yet.  If called in the cloud, we will refresh && get your access tokens to access these providers.
     * Your GET endpoint
     */
    async userProviders(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReturnedUserProfile> {
        const response = await this.userProvidersRaw(initOverrides);
        return await response.value();
    }

    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    async userSnapshotRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<ReturnedUserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/user`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => ReturnedUserProfileFromJSON(jsonValue));
    }

    /**
     * This will return a snapshot of the current user. This will return our ReturnUserProfile and the user on that object is just a UserProfile and can potentially be null.
     * /user [GET]
     */
    async userSnapshot(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<ReturnedUserProfile> {
        const response = await this.userSnapshotRaw(initOverrides);
        return await response.value();
    }

    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    async userUpdateVanityRaw(requestParameters: UserUpdateVanityRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<UserProfile>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/user/update/vanity`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: UserProfileToJSON(requestParameters['userProfile']),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => UserProfileFromJSON(jsonValue));
    }

    /**
     * This is a local route to update your vanityname. ie mark.pieces.cloud, where \"mark\" is the vanityname.
     * /user/update/vanity [POST]
     */
    async userUpdateVanity(requestParameters: UserUpdateVanityRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<UserProfile> {
        const response = await this.userUpdateVanityRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
