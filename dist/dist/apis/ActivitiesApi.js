"use strict";
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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActivitiesApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class ActivitiesApi extends runtime.BaseAPI {
    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    async activitiesCreateNewActivityRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/activities/create`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededActivityToJSON)(requestParameters.seededActivity),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ActivityFromJSON)(jsonValue));
    }
    /**
     * This will create a new Activity.
     * /activities/create [POST]
     */
    async activitiesCreateNewActivity(requestParameters) {
        const response = await this.activitiesCreateNewActivityRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    async activitiesDeleteSpecificActivityRaw(requestParameters) {
        if (requestParameters.activity === null || requestParameters.activity === undefined) {
            throw new runtime.RequiredError('activity', 'Required parameter requestParameters.activity was null or undefined when calling activitiesDeleteSpecificActivity.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/activities/{activity}/delete`.replace(`{${"activity"}}`, encodeURIComponent(String(requestParameters.activity))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will delete a specific activity.  important note: if we delete an activity: that is going to be a generic or a specific/ we will also delete its counter part i.e the specific. and vise versa, this ensures that the references are always cleaned.
     * /activities/{activity}/delete [POST]
     */
    async activitiesDeleteSpecificActivity(requestParameters) {
        await this.activitiesDeleteSpecificActivityRaw(requestParameters);
    }
    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    async activitiesSnapshotRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        if (requestParameters.pseudo !== undefined) {
            queryParameters['pseudo'] = requestParameters.pseudo;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/activities`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.ActivitiesFromJSON)(jsonValue));
    }
    /**
     * This will get a snapshot of all of the activities
     * /activities [GET]
     */
    async activitiesSnapshot(requestParameters) {
        const response = await this.activitiesSnapshotRaw(requestParameters);
        return await response.value();
    }
}
exports.ActivitiesApi = ActivitiesApi;