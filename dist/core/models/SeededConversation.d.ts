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
import { Application, ConversationTypeEnum, EmbeddedModelSchema, FlattenedAssets, FlattenedWebsites, QGPTPromptPipeline, ReferencedModel, SeededAnchor, SeededAnnotation, SeededConversationMessage } from './';
/**
 * This is a pre-Conversation object.
 *
 * This will hold together a conversation. Ie allthe message within a conversation.
 *
 * All the additional properties on here used on here like(anchors/assets) are used for context that will seed the conversation.
 *
 * model is a calculated property, and will be the model of the last message sent if applicable.
 * @export
 * @interface SeededConversation
 */
export interface SeededConversation {
    /**
     *
     * @type {EmbeddedModelSchema}
     * @memberof SeededConversation
     */
    schema?: EmbeddedModelSchema;
    /**
     * This is a name that is customized.
     * @type {string}
     * @memberof SeededConversation
     */
    name?: string;
    /**
     *
     * @type {boolean}
     * @memberof SeededConversation
     */
    favorited?: boolean;
    /**
     *
     * @type {Application}
     * @memberof SeededConversation
     */
    application?: Application;
    /**
     *
     * @type {Array<SeededAnnotation>}
     * @memberof SeededConversation
     */
    annotations?: Array<SeededAnnotation>;
    /**
     *
     * @type {Array<SeededConversationMessage>}
     * @memberof SeededConversation
     */
    messages?: Array<SeededConversationMessage>;
    /**
     *
     * @type {ReferencedModel}
     * @memberof SeededConversation
     */
    model?: ReferencedModel;
    /**
     *
     * @type {FlattenedAssets}
     * @memberof SeededConversation
     */
    assets?: FlattenedAssets;
    /**
     *
     * @type {FlattenedWebsites}
     * @memberof SeededConversation
     */
    websites?: FlattenedWebsites;
    /**
     *
     * @type {Array<SeededAnchor>}
     * @memberof SeededConversation
     */
    anchors?: Array<SeededAnchor>;
    /**
     *
     * @type {ConversationTypeEnum}
     * @memberof SeededConversation
     */
    type: ConversationTypeEnum;
    /**
     *
     * @type {QGPTPromptPipeline}
     * @memberof SeededConversation
     */
    pipeline?: QGPTPromptPipeline;
}
export declare function SeededConversationFromJSON(json: any): SeededConversation;
export declare function SeededConversationFromJSONTyped(json: any, ignoreDiscriminator: boolean): SeededConversation;
export declare function SeededConversationToJSON(value?: SeededConversation | null): any;