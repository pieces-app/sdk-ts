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
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';
import type { ClassificationGenericEnum } from './ClassificationGenericEnum';
import {
    ClassificationGenericEnumFromJSON,
    ClassificationGenericEnumFromJSONTyped,
    ClassificationGenericEnumToJSON,
} from './ClassificationGenericEnum';
import type { Model } from './Model';
import {
    ModelFromJSON,
    ModelFromJSONTyped,
    ModelToJSON,
} from './Model';

/**
 * This is the ML Analysis object Specific to code.
 * 
 * prediction and similarity are custom types. ** please dont not modify **
 * @export
 * @interface CodeAnalysis
 */
export interface CodeAnalysis {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof CodeAnalysis
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    tokenized?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CodeAnalysis
     */
    language?: string;
    /**
     * 
     * @type {ClassificationGenericEnum}
     * @memberof CodeAnalysis
     */
    type: ClassificationGenericEnum;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    prediction?: { [key: string]: number; };
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof CodeAnalysis
     */
    similarity?: { [key: string]: number; };
    /**
     * 
     * @type {Array<number>}
     * @memberof CodeAnalysis
     */
    top5Colors?: Array<number>;
    /**
     * 
     * @type {Array<string>}
     * @memberof CodeAnalysis
     */
    top5Sorted?: Array<string>;
    /**
     * 
     * @type {string}
     * @memberof CodeAnalysis
     */
    id: string;
    /**
     * this is just a reference to the analysis parent object.
     * @type {string}
     * @memberof CodeAnalysis
     */
    analysis: string;
    /**
     * 
     * @type {Model}
     * @memberof CodeAnalysis
     */
    model: Model;
}

/**
 * Check if a given object implements the CodeAnalysis interface.
 */
export function instanceOfCodeAnalysis(value: object): value is CodeAnalysis {
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('analysis' in value) || value['analysis'] === undefined) return false;
    if (!('model' in value) || value['model'] === undefined) return false;
    return true;
}

export function CodeAnalysisFromJSON(json: any): CodeAnalysis {
    return CodeAnalysisFromJSONTyped(json, false);
}

export function CodeAnalysisFromJSONTyped(json: any, ignoreDiscriminator: boolean): CodeAnalysis {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'tokenized': json['tokenized'] == null ? undefined : json['tokenized'],
        'language': json['language'] == null ? undefined : json['language'],
        'type': ClassificationGenericEnumFromJSON(json['type']),
        'prediction': json['prediction'] == null ? undefined : json['prediction'],
        'similarity': json['similarity'] == null ? undefined : json['similarity'],
        'top5Colors': json['top5Colors'] == null ? undefined : json['top5Colors'],
        'top5Sorted': json['top5Sorted'] == null ? undefined : json['top5Sorted'],
        'id': json['id'],
        'analysis': json['analysis'],
        'model': ModelFromJSON(json['model']),
    };
}

export function CodeAnalysisToJSON(value?: CodeAnalysis | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'tokenized': value['tokenized'],
        'language': value['language'],
        'type': ClassificationGenericEnumToJSON(value['type']),
        'prediction': value['prediction'],
        'similarity': value['similarity'],
        'top5Colors': value['top5Colors'],
        'top5Sorted': value['top5Sorted'],
        'id': value['id'],
        'analysis': value['analysis'],
        'model': ModelToJSON(value['model']),
    };
}

