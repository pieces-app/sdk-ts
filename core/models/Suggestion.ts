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
import type { ReuseSuggestion } from './ReuseSuggestion';
import {
    ReuseSuggestionFromJSON,
    ReuseSuggestionFromJSONTyped,
    ReuseSuggestionToJSON,
} from './ReuseSuggestion';
import type { SaveSuggestion } from './SaveSuggestion';
import {
    SaveSuggestionFromJSON,
    SaveSuggestionFromJSONTyped,
    SaveSuggestionToJSON,
} from './SaveSuggestion';
import type { SuggestionTarget } from './SuggestionTarget';
import {
    SuggestionTargetFromJSON,
    SuggestionTargetFromJSONTyped,
    SuggestionTargetToJSON,
} from './SuggestionTarget';
import type { Assets } from './Assets';
import {
    AssetsFromJSON,
    AssetsFromJSONTyped,
    AssetsToJSON,
} from './Assets';
import type { EmbeddedModelSchema } from './EmbeddedModelSchema';
import {
    EmbeddedModelSchemaFromJSON,
    EmbeddedModelSchemaFromJSONTyped,
    EmbeddedModelSchemaToJSON,
} from './EmbeddedModelSchema';

/**
 * This is the model return by the connector's suggest endpoint.
 * 
 * Note:
 * assets are the assets that this target was ran against.
 * 
 * distribution is the distribution that we generated from comparing the target to the asset's vectors.(currently uuid(assetid) : value that is the difference between the asset and the target) **could potentially make an additional model here that is an array from most to least relevent.
 * 
 * *** distribution is required but we are currently unable to reflect that with our current dart generation.
 * @export
 * @interface Suggestion
 */
export interface Suggestion {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof Suggestion
     */
    schema?: EmbeddedModelSchema;
    /**
     * 
     * @type {ReuseSuggestion}
     * @memberof Suggestion
     */
    reuse: ReuseSuggestion;
    /**
     * 
     * @type {SaveSuggestion}
     * @memberof Suggestion
     */
    save: SaveSuggestion;
    /**
     * 
     * @type {SuggestionTarget}
     * @memberof Suggestion
     */
    target: SuggestionTarget;
    /**
     * 
     * @type {Assets}
     * @memberof Suggestion
     */
    assets: Assets;
    /**
     * 
     * @type {{ [key: string]: number; }}
     * @memberof Suggestion
     */
    distribution?: { [key: string]: number; };
}

/**
 * Check if a given object implements the Suggestion interface.
 */
export function instanceOfSuggestion(value: object): value is Suggestion {
    if (!('reuse' in value) || value['reuse'] === undefined) return false;
    if (!('save' in value) || value['save'] === undefined) return false;
    if (!('target' in value) || value['target'] === undefined) return false;
    if (!('assets' in value) || value['assets'] === undefined) return false;
    return true;
}

export function SuggestionFromJSON(json: any): Suggestion {
    return SuggestionFromJSONTyped(json, false);
}

export function SuggestionFromJSONTyped(json: any, ignoreDiscriminator: boolean): Suggestion {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'reuse': ReuseSuggestionFromJSON(json['reuse']),
        'save': SaveSuggestionFromJSON(json['save']),
        'target': SuggestionTargetFromJSON(json['target']),
        'assets': AssetsFromJSON(json['assets']),
        'distribution': json['distribution'] == null ? undefined : json['distribution'],
    };
}

export function SuggestionToJSON(value?: Suggestion | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'reuse': ReuseSuggestionToJSON(value['reuse']),
        'save': SaveSuggestionToJSON(value['save']),
        'target': SuggestionTargetToJSON(value['target']),
        'assets': AssetsToJSON(value['assets']),
        'distribution': value['distribution'],
    };
}

