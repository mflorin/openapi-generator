/* tslint:disable */
/* eslint-disable */
/**
 * OpenAPI Petstore
 * This is a sample server Petstore server. For this sample, you can use the api key `special-key` to test the authorization filters.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

/**
 * Type of pet part
 * @export
 * @enum {string}
 */
export enum PetPartType {
    Curved = 'Curved',
    Smooth = 'Smooth',
    Long = 'Long'
}

export function PetPartTypeFromJSON(json: any): PetPartType {
    return PetPartTypeFromJSONTyped(json, false);
}

export function PetPartTypeFromJSONTyped(json: any, ignoreDiscriminator: boolean): PetPartType {
    return json as PetPartType;
}

export function PetPartTypeToJSON(value?: PetPartType | null): any {
    return value as any;
}

