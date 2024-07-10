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
/**
 * 
 * @export
 * @interface SystemExecutionCpuInformation
 */
export interface SystemExecutionCpuInformation {
    /**
     * this is the number of cpus
     * @type {number}
     * @memberof SystemExecutionCpuInformation
     */
    count: number;
    /**
     * this is the brand of cpu
     * @type {string}
     * @memberof SystemExecutionCpuInformation
     */
    brand: string;
    /**
     * 
     * @type {number}
     * @memberof SystemExecutionCpuInformation
     */
    frequency: number;
}

/**
 * Check if a given object implements the SystemExecutionCpuInformation interface.
 */
export function instanceOfSystemExecutionCpuInformation(value: object): value is SystemExecutionCpuInformation {
    if (!('count' in value) || value['count'] === undefined) return false;
    if (!('brand' in value) || value['brand'] === undefined) return false;
    if (!('frequency' in value) || value['frequency'] === undefined) return false;
    return true;
}

export function SystemExecutionCpuInformationFromJSON(json: any): SystemExecutionCpuInformation {
    return SystemExecutionCpuInformationFromJSONTyped(json, false);
}

export function SystemExecutionCpuInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemExecutionCpuInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'count': json['count'],
        'brand': json['brand'],
        'frequency': json['frequency'],
    };
}

export function SystemExecutionCpuInformationToJSON(value?: SystemExecutionCpuInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'count': value['count'],
        'brand': value['brand'],
        'frequency': value['frequency'],
    };
}

