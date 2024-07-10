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


/**
 * This is used to describe a specific type of annotation. NOTE** This is linked to the annotation_type_filter in the parameters folder(if you change an enum here, please adjust the enum there.)
 * @export
 */
export const AnnotationTypeEnum = {
    Description: 'DESCRIPTION',
    Comment: 'COMMENT',
    Documentation: 'DOCUMENTATION',
    Summary: 'SUMMARY',
    Explanation: 'EXPLANATION',
    GitCommit: 'GIT_COMMIT'
} as const;
export type AnnotationTypeEnum = typeof AnnotationTypeEnum[keyof typeof AnnotationTypeEnum];


export function instanceOfAnnotationTypeEnum(value: any): boolean {
    for (const key in AnnotationTypeEnum) {
        if (Object.prototype.hasOwnProperty.call(AnnotationTypeEnum, key)) {
            if (AnnotationTypeEnum[key] === value) {
                return true;
            }
        }
    }
    return false;
}

export function AnnotationTypeEnumFromJSON(json: any): AnnotationTypeEnum {
    return AnnotationTypeEnumFromJSONTyped(json, false);
}

export function AnnotationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AnnotationTypeEnum {
    return json as AnnotationTypeEnum;
}

export function AnnotationTypeEnumToJSON(value?: AnnotationTypeEnum | null): any {
    return value as any;
}

