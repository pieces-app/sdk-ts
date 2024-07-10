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

/**
 * This is a model that allows us to send send over super specific format related events such as copied, deleted, downloaded, etc
 * @export
 * @interface TrackedFormatEventIdentifierDescriptionPairs
 */
export interface TrackedFormatEventIdentifierDescriptionPairs {
    /**
     * 
     * @type {EmbeddedModelSchema}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    schema?: EmbeddedModelSchema;
    /**
     * The key value pair for an asset being created.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCreated?: TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum;
    /**
     * If a format was copied entirely
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum;
    /**
     * If a format was copied partially
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatPartiallyCopied?: TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum;
    /**
     * If a format was downloaded
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDownloaded?: TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum;
    /**
     * If an format was deleted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatDeleted?: TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum;
    /**
     * If a generic classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatGenericClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum;
    /**
     * If a specific classification was changed on a format
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatSpecificClassificationUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum;
    /**
     * a format was updated, generic update.
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatUpdated?: TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum;
    /**
     * a format was inserted
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatInserted?: TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum;
    /**
     * a format's value was update ie, the text, etc...
     * @type {string}
     * @memberof TrackedFormatEventIdentifierDescriptionPairs
     */
    formatValueEdited?: TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum;
}


/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum = {
    AFormatWasCreated: 'a_format_was_created'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatCreatedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum = {
    IfAFormatWasEntirelyCopied: 'if_a_format_was_entirely_copied'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatCopiedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum = {
    IfAFormatWasPartiallyCopied: 'if_a_format_was_partially_copied'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatPartiallyCopiedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum = {
    IfAFormatWasDownloaded: 'if_a_format_was_downloaded'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatDownloadedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum = {
    IfAFormatWasDeleted: 'if_a_format_was_deleted'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatDeletedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum = {
    IfAGenericClassificationWasChangedOnAFormat: 'if_a_generic_classification_was_changed_on_a_format'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatGenericClassificationUpdatedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum = {
    IfASpecificClassificationWasChangedOnAFormat: 'if_a_specific_classification_was_changed_on_a_format'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatSpecificClassificationUpdatedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum = {
    AFormatWasUpdated: 'a_format_was_updated'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatUpdatedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum = {
    AFormatWasInserted: 'a_format_was_inserted'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatInsertedEnum];

/**
 * @export
 */
export const TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum = {
    AFormatValueWasEdited: 'a_format_value_was_edited'
} as const;
export type TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum = typeof TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum[keyof typeof TrackedFormatEventIdentifierDescriptionPairsFormatValueEditedEnum];


/**
 * Check if a given object implements the TrackedFormatEventIdentifierDescriptionPairs interface.
 */
export function instanceOfTrackedFormatEventIdentifierDescriptionPairs(value: object): value is TrackedFormatEventIdentifierDescriptionPairs {
    return true;
}

export function TrackedFormatEventIdentifierDescriptionPairsFromJSON(json: any): TrackedFormatEventIdentifierDescriptionPairs {
    return TrackedFormatEventIdentifierDescriptionPairsFromJSONTyped(json, false);
}

export function TrackedFormatEventIdentifierDescriptionPairsFromJSONTyped(json: any, ignoreDiscriminator: boolean): TrackedFormatEventIdentifierDescriptionPairs {
    if (json == null) {
        return json;
    }
    return {
        
        'schema': json['schema'] == null ? undefined : EmbeddedModelSchemaFromJSON(json['schema']),
        'formatCreated': json['format_created'] == null ? undefined : json['format_created'],
        'formatCopied': json['format_copied'] == null ? undefined : json['format_copied'],
        'formatPartiallyCopied': json['format_partially_copied'] == null ? undefined : json['format_partially_copied'],
        'formatDownloaded': json['format_downloaded'] == null ? undefined : json['format_downloaded'],
        'formatDeleted': json['format_deleted'] == null ? undefined : json['format_deleted'],
        'formatGenericClassificationUpdated': json['format_generic_classification_updated'] == null ? undefined : json['format_generic_classification_updated'],
        'formatSpecificClassificationUpdated': json['format_specific_classification_updated'] == null ? undefined : json['format_specific_classification_updated'],
        'formatUpdated': json['format_updated'] == null ? undefined : json['format_updated'],
        'formatInserted': json['format_inserted'] == null ? undefined : json['format_inserted'],
        'formatValueEdited': json['format_value_edited'] == null ? undefined : json['format_value_edited'],
    };
}

export function TrackedFormatEventIdentifierDescriptionPairsToJSON(value?: TrackedFormatEventIdentifierDescriptionPairs | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'schema': EmbeddedModelSchemaToJSON(value['schema']),
        'format_created': value['formatCreated'],
        'format_copied': value['formatCopied'],
        'format_partially_copied': value['formatPartiallyCopied'],
        'format_downloaded': value['formatDownloaded'],
        'format_deleted': value['formatDeleted'],
        'format_generic_classification_updated': value['formatGenericClassificationUpdated'],
        'format_specific_classification_updated': value['formatSpecificClassificationUpdated'],
        'format_updated': value['formatUpdated'],
        'format_inserted': value['formatInserted'],
        'format_value_edited': value['formatValueEdited'],
    };
}

