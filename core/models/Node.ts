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
import type { NodeTypeEnum } from './NodeTypeEnum';
import {
    NodeTypeEnumFromJSON,
    NodeTypeEnumFromJSONTyped,
    NodeTypeEnumToJSON,
} from './NodeTypeEnum';
import type { GroupedTimestamp } from './GroupedTimestamp';
import {
    GroupedTimestampFromJSON,
    GroupedTimestampFromJSONTyped,
    GroupedTimestampToJSON,
} from './GroupedTimestamp';

/**
 * This describes a node within a relationship graph used to related like types. ie asset to asset, tag to tag, ...etc
 * 
 * created: is here to let us know when the node was attached.
 * 
 * id: this is the the id of the type ie, if the type is Asset the id here points to the asset that this node represents.
 * @export
 * @interface Node
 */
export interface Node {
    /**
     * 
     * @type {string}
     * @memberof Node
     */
    id: string;
    /**
     * 
     * @type {NodeTypeEnum}
     * @memberof Node
     */
    type: NodeTypeEnum;
    /**
     * This is a boolean to let us know if this node is the root or origin of the relationship graph.
     * @type {boolean}
     * @memberof Node
     */
    root: boolean;
    /**
     * 
     * @type {GroupedTimestamp}
     * @memberof Node
     */
    created: GroupedTimestamp;
}

/**
 * Check if a given object implements the Node interface.
 */
export function instanceOfNode(value: object): value is Node {
    if (!('id' in value) || value['id'] === undefined) return false;
    if (!('type' in value) || value['type'] === undefined) return false;
    if (!('root' in value) || value['root'] === undefined) return false;
    if (!('created' in value) || value['created'] === undefined) return false;
    return true;
}

export function NodeFromJSON(json: any): Node {
    return NodeFromJSONTyped(json, false);
}

export function NodeFromJSONTyped(json: any, ignoreDiscriminator: boolean): Node {
    if (json == null) {
        return json;
    }
    return {
        
        'id': json['id'],
        'type': NodeTypeEnumFromJSON(json['type']),
        'root': json['root'],
        'created': GroupedTimestampFromJSON(json['created']),
    };
}

export function NodeToJSON(value?: Node | null): any {
    if (value == null) {
        return value;
    }
    return {
        
        'id': value['id'],
        'type': NodeTypeEnumToJSON(value['type']),
        'root': value['root'],
        'created': GroupedTimestampToJSON(value['created']),
    };
}

