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
import type { ProjectModule } from './ProjectModule';
import {
    ProjectModuleFromJSON,
    ProjectModuleFromJSONTyped,
    ProjectModuleToJSON,
} from './ProjectModule';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is a plural representation of the ProjectModule
 * @export
 * @interface ProjectModules
 */
export interface ProjectModules {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof ProjectModules
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<ProjectModule>}
     * @memberof ProjectModules
     */
    iterable: Array<ProjectModule>;
}

/**
 * Check if a given object implements the ProjectModules interface.
 */
export function instanceOfProjectModules(value: object): value is ProjectModules {
    if (!('iterable' in value) || value['iterable'] === undefined) return false;
    return true;
}

export function ProjectModulesFromJSON(json: any): ProjectModules {
    return ProjectModulesFromJSONTyped(json, false);
}

export function ProjectModulesFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProjectModules {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'iterable': ((json['iterable'] as Array<any>).map(ProjectModuleFromJSON)),
    };
}

export function ProjectModulesToJSON(value?: ProjectModules | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'iterable': ((value['iterable'] as Array<any>).map(ProjectModuleToJSON)),
    };
}

