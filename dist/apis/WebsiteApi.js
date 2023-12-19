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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebsiteApi = void 0;
const runtime = __importStar(require("../runtime"));
const models_1 = require("../models");
/**
 *
 */
class WebsiteApi extends runtime.BaseAPI {
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    async websiteAssociateAssetRaw(requestParameters) {
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling websiteAssociateAsset.');
        }
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websiteAssociateAsset.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/website/{website}/assets/associate/{asset}`.replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))).replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will associate a website with a asset.
     * /website/{website}/assets/associate/{asset} [POST]
     */
    async websiteAssociateAsset(requestParameters) {
        await this.websiteAssociateAssetRaw(requestParameters);
    }
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    async websiteAssociatePersonRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websiteAssociatePerson.');
        }
        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person', 'Required parameter requestParameters.person was null or undefined when calling websiteAssociatePerson.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/website/{website}/persons/associate/{person}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"person"}}`, encodeURIComponent(String(requestParameters.person))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will associate a website with a person.
     * /website/{website}/persons/associate/{person} [POST]
     */
    async websiteAssociatePerson(requestParameters) {
        await this.websiteAssociatePersonRaw(requestParameters);
    }
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    async websiteDisassociateAssetRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websiteDisassociateAsset.');
        }
        if (requestParameters.asset === null || requestParameters.asset === undefined) {
            throw new runtime.RequiredError('asset', 'Required parameter requestParameters.asset was null or undefined when calling websiteDisassociateAsset.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/website/{website}/assets/disassociate/{asset}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"asset"}}`, encodeURIComponent(String(requestParameters.asset))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will enable us to dissassociate a website from a asset.
     * /website/{website}/assets/disassociate/{asset} [POST]
     */
    async websiteDisassociateAsset(requestParameters) {
        await this.websiteDisassociateAssetRaw(requestParameters);
    }
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    async websiteDisassociatePersonRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websiteDisassociatePerson.');
        }
        if (requestParameters.person === null || requestParameters.person === undefined) {
            throw new runtime.RequiredError('person', 'Required parameter requestParameters.person was null or undefined when calling websiteDisassociatePerson.');
        }
        const queryParameters = {};
        const headerParameters = {};
        const response = await this.request({
            path: `/website/{website}/persons/disassociate/{person}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))).replace(`{${"person"}}`, encodeURIComponent(String(requestParameters.person))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will enable us to dissassociate a website from a person.
     * /website/{website}/persons/disassociate/{person} [POST]
     */
    async websiteDisassociatePerson(requestParameters) {
        await this.websiteDisassociatePersonRaw(requestParameters);
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    async websiteScoresIncrementRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websiteScoresIncrement.');
        }
        const queryParameters = {};
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/website/{website}/scores/increment`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.SeededScoreIncrementToJSON)(requestParameters.seededScoreIncrement),
        });
        return new runtime.VoidApiResponse(response);
    }
    /**
     * This will take in a SeededScoreIncrement and will increment the material relative to the incoming body.
     * \'/website/{website}/scores/increment\' [POST]
     */
    async websiteScoresIncrement(requestParameters) {
        await this.websiteScoresIncrementRaw(requestParameters);
    }
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    async websiteUpdateRaw(requestParameters) {
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        headerParameters['Content-Type'] = 'application/json';
        const response = await this.request({
            path: `/website/update`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: (0, models_1.WebsiteToJSON)(requestParameters.website),
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.WebsiteFromJSON)(jsonValue));
    }
    /**
     * This will update a specific website.
     * /website/update [POST]
     */
    async websiteUpdate(requestParameters) {
        const response = await this.websiteUpdateRaw(requestParameters);
        return await response.value();
    }
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    async websitesSpecificWebsiteSnapshotRaw(requestParameters) {
        if (requestParameters.website === null || requestParameters.website === undefined) {
            throw new runtime.RequiredError('website', 'Required parameter requestParameters.website was null or undefined when calling websitesSpecificWebsiteSnapshot.');
        }
        const queryParameters = {};
        if (requestParameters.transferables !== undefined) {
            queryParameters['transferables'] = requestParameters.transferables;
        }
        const headerParameters = {};
        const response = await this.request({
            path: `/website/{website}`.replace(`{${"website"}}`, encodeURIComponent(String(requestParameters.website))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        });
        return new runtime.JSONApiResponse(response, (jsonValue) => (0, models_1.WebsiteFromJSON)(jsonValue));
    }
    /**
     * This will get a snapshot of a single website.
     * /website/{website} [GET]
     */
    async websitesSpecificWebsiteSnapshot(requestParameters) {
        const response = await this.websitesSpecificWebsiteSnapshotRaw(requestParameters);
        return await response.value();
    }
}
exports.WebsiteApi = WebsiteApi;