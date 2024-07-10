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
import type { SystemExecutionCpuInformation } from './SystemExecutionCpuInformation';
import {
    SystemExecutionCpuInformationFromJSON,
    SystemExecutionCpuInformationFromJSONTyped,
    SystemExecutionCpuInformationToJSON,
} from './SystemExecutionCpuInformation';

/**
 * This is system information that we are able to get from the users machine(rust package TBD). TODO potentially pull this out of TLP.
 * @export
 * @interface SystemExecutionInformation
 */
export interface SystemExecutionInformation {
    /**
     * 
     * @type {number}
     * @memberof SystemExecutionInformation
     */
    memory: number;
    /**
     * 
     * @type {string}
     * @memberof SystemExecutionInformation
     */
    os: string;
    /**
     * 
     * @type {string}
     * @memberof SystemExecutionInformation
     */
    kernel: string;
    /**
     * 
     * @type {SystemExecutionCpuInformation}
     * @memberof SystemExecutionInformation
     */
    cpu: SystemExecutionCpuInformation;
}

/**
 * Check if a given object implements the SystemExecutionInformation interface.
 */
export function instanceOfSystemExecutionInformation(value: object): value is SystemExecutionInformation {
    if (!('memory' in value) || value['memory'] === undefined) return false;
    if (!('os' in value) || value['os'] === undefined) return false;
    if (!('kernel' in value) || value['kernel'] === undefined) return false;
    if (!('cpu' in value) || value['cpu'] === undefined) return false;
    return true;
}

export function SystemExecutionInformationFromJSON(json: any): SystemExecutionInformation {
    return SystemExecutionInformationFromJSONTyped(json, false);
}

export function SystemExecutionInformationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemExecutionInformation {
    if (json == null) {
        return json;
    }
    return {
        
        'memory': json['memory'],
        'os': json['os'],
        'kernel': json['kernel'],
        'cpu': SystemExecutionCpuInformationFromJSON(json['cpu']),
    };
}

export function SystemExecutionInformationToJSON(value?: SystemExecutionInformation | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'memory': value['memory'],
        'os': value['os'],
        'kernel': value['kernel'],
        'cpu': SystemExecutionCpuInformationToJSON(value['cpu']),
    };
}

