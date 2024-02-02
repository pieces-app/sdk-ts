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
Object.defineProperty(exports, "__esModule", { value: true });
exports.SensitiveToJSON = exports.SensitiveFromJSONTyped = exports.SensitiveFromJSON = void 0;
const runtime_1 = require("../runtime");
const _1 = require("./");
function SensitiveFromJSON(json) {
    return SensitiveFromJSONTyped(json, false);
}
exports.SensitiveFromJSON = SensitiveFromJSON;
function SensitiveFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'schema': !(0, runtime_1.exists)(json, 'schema') ? undefined : (0, _1.EmbeddedModelSchemaFromJSON)(json['schema']),
        'id': json['id'],
        'created': (0, _1.GroupedTimestampFromJSON)(json['created']),
        'updated': (0, _1.GroupedTimestampFromJSON)(json['updated']),
        'deleted': !(0, runtime_1.exists)(json, 'deleted') ? undefined : (0, _1.GroupedTimestampFromJSON)(json['deleted']),
        'asset': (0, _1.FlattenedAssetFromJSON)(json['asset']),
        'text': json['text'],
        'mechanism': (0, _1.MechanismEnumFromJSON)(json['mechanism']),
        'category': (0, _1.SensitiveCategoryEnumFromJSON)(json['category']),
        'severity': (0, _1.SensitiveSeverityEnumFromJSON)(json['severity']),
        'name': json['name'],
        'description': json['description'],
        'metadata': !(0, runtime_1.exists)(json, 'metadata') ? undefined : (0, _1.SensitiveMetadataFromJSON)(json['metadata']),
        'interactions': !(0, runtime_1.exists)(json, 'interactions') ? undefined : json['interactions'],
        'score': !(0, runtime_1.exists)(json, 'score') ? undefined : (0, _1.ScoreFromJSON)(json['score']),
    };
}
exports.SensitiveFromJSONTyped = SensitiveFromJSONTyped;
function SensitiveToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'schema': (0, _1.EmbeddedModelSchemaToJSON)(value.schema),
        'id': value.id,
        'created': (0, _1.GroupedTimestampToJSON)(value.created),
        'updated': (0, _1.GroupedTimestampToJSON)(value.updated),
        'deleted': (0, _1.GroupedTimestampToJSON)(value.deleted),
        'asset': (0, _1.FlattenedAssetToJSON)(value.asset),
        'text': value.text,
        'mechanism': (0, _1.MechanismEnumToJSON)(value.mechanism),
        'category': (0, _1.SensitiveCategoryEnumToJSON)(value.category),
        'severity': (0, _1.SensitiveSeverityEnumToJSON)(value.severity),
        'name': value.name,
        'description': value.description,
        'metadata': (0, _1.SensitiveMetadataToJSON)(value.metadata),
        'interactions': value.interactions,
        'score': (0, _1.ScoreToJSON)(value.score),
    };
}
exports.SensitiveToJSON = SensitiveToJSON;