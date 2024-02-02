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
import { EmbeddedModelSchema, OSHealth } from './';
/**
 * This is a health model used to determine the "health" of the os server and cloud server(Coming Soon). READONLY Model.
 * @export
 * @interface Health
 */
export interface Health {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof Health
     */
    schema?: EmbeddedModelSchema;
    /**
     *
     * @type {OSHealth}
     * @memberof Health
     */
    os: OSHealth;
}
export declare function HealthFromJSON(json: any): Health;
export declare function HealthFromJSONTyped(json: any, ignoreDiscriminator: boolean): Health;
export declare function HealthToJSON(value?: Health | null): any;