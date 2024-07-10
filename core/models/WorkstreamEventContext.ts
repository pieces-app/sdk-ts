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
import type { WorkstreamEventTriggerContextBrowser } from './WorkstreamEventTriggerContextBrowser';
import {
    WorkstreamEventTriggerContextBrowserFromJSON,
    WorkstreamEventTriggerContextBrowserFromJSONTyped,
    WorkstreamEventTriggerContextBrowserToJSON,
} from './WorkstreamEventTriggerContextBrowser';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { WorkstreamEventTriggerContextIDE } from './WorkstreamEventTriggerContextIDE';
import {
    WorkstreamEventTriggerContextIDEFromJSON,
    WorkstreamEventTriggerContextIDEFromJSONTyped,
    WorkstreamEventTriggerContextIDEToJSON,
} from './WorkstreamEventTriggerContextIDE';

/**
 * This is a free form data object that will enable additional data to be passed into SeededWorkstreamEvent, that corresponds to the event on the WorkstreamEvent.
 * 
 * This is a WIP object.
 * 
 * Need to think if we want to do something like raw:string (that is just a jsonObject) that is stringified, or if we add specific bits of data that we want. and specific fields for each event.
 * @export
 * @interface WorkstreamEventContext
 */
export interface WorkstreamEventContext {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof WorkstreamEventContext
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {WorkstreamEventTriggerContextIDE}
     * @memberof WorkstreamEventContext
     */
    ide?: WorkstreamEventTriggerContextIDE;
    /**
     * 
     * @type {WorkstreamEventTriggerContextBrowser}
     * @memberof WorkstreamEventContext
     */
    browser?: WorkstreamEventTriggerContextBrowser;
}

/**
 * Check if a given object implements the WorkstreamEventContext interface.
 */
export function instanceOfWorkstreamEventContext(value: object): value is WorkstreamEventContext {
    return true;
}

export function WorkstreamEventContextFromJSON(json: any): WorkstreamEventContext {
    return WorkstreamEventContextFromJSONTyped(json, false);
}

export function WorkstreamEventContextFromJSONTyped(json: any, ignoreDiscriminator: boolean): WorkstreamEventContext {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'ide': json['ide'] == null ? undefined : WorkstreamEventTriggerContextIDEFromJSON(json['ide']),
        'browser': json['browser'] == null ? undefined : WorkstreamEventTriggerContextBrowserFromJSON(json['browser']),
    };
}

export function WorkstreamEventContextToJSON(value?: WorkstreamEventContext | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'ide': WorkstreamEventTriggerContextIDEToJSON(value['ide']),
        'browser': WorkstreamEventTriggerContextBrowserToJSON(value['browser']),
    };
}

