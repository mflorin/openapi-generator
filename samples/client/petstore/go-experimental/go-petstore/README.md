# Go API client for petstore

This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\

## Overview
This API client was generated by the [OpenAPI Generator](https://openapi-generator.tech) project.  By using the [OpenAPI-spec](https://www.openapis.org/) from a remote server, you can easily generate an API client.

- API version: 1.0.0
- Package version: 1.0.0
- Build package: org.openapitools.codegen.languages.GoClientExperimentalCodegen

## Installation

Install the following dependencies:

```shell
go get github.com/stretchr/testify/assert
go get golang.org/x/oauth2
go get golang.org/x/net/context
go get github.com/antihax/optional
```

Put the package under your project folder and add the following in import:

```golang
import sw "./petstore"
```

## Configuration of Server URL

Default configuration comes with `Servers` field that contains server objects as defined in the OpenAPI specification.

### Select Server Configuration

For using other server than the one defined on index 0 set context value `sw.ContextServerIndex` of type `int`.

```golang
ctx := context.WithValue(context.Background(), sw.ContextServerIndex, 1)
```

### Templated Server URL

Templated server URL is formatted using default variables from configuration or from context value `sw.ContextServerVariables` of type `map[string]string`.

```golang
ctx := context.WithValue(context.Background(), sw.ContextServerVariables, map[string]string{
	"basePath": "v2",
})
```

Note, enum values are always validated and all unused variables are silently ignored.

### URLs Configuration per Operation

Each operation can use different server URL defined using `OperationServers` map in the `Configuration`.
An operation is uniquely identifield by `"{classname}Service.{nickname}"` string.
Similar rules for overriding default operation server index and variables applies by using `sw.ContextOperationServerIndices` and `sw.ContextOperationServerVariables` context maps.

```
ctx := context.WithValue(context.Background(), sw.ContextOperationServerIndices, map[string]int{
	"{classname}Service.{nickname}": 2,
})
ctx = context.WithValue(context.Background(), sw.ContextOperationServerVariables, map[string]map[string]string{
	"{classname}Service.{nickname}": {
		"port": "8443",
	},
})
```

## Documentation for API Endpoints

All URIs are relative to *http://petstore.swagger.io:80/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*AnotherFakeApi* | [**Call123TestSpecialTags**](docs/AnotherFakeApi.md#call123testspecialtags) | **Patch** /another-fake/dummy | To test special tags
*FakeApi* | [**CreateXmlItem**](docs/FakeApi.md#createxmlitem) | **Post** /fake/create_xml_item | creates an XmlItem
*FakeApi* | [**FakeOuterBooleanSerialize**](docs/FakeApi.md#fakeouterbooleanserialize) | **Post** /fake/outer/boolean | 
*FakeApi* | [**FakeOuterCompositeSerialize**](docs/FakeApi.md#fakeoutercompositeserialize) | **Post** /fake/outer/composite | 
*FakeApi* | [**FakeOuterNumberSerialize**](docs/FakeApi.md#fakeouternumberserialize) | **Post** /fake/outer/number | 
*FakeApi* | [**FakeOuterStringSerialize**](docs/FakeApi.md#fakeouterstringserialize) | **Post** /fake/outer/string | 
*FakeApi* | [**TestBodyWithFileSchema**](docs/FakeApi.md#testbodywithfileschema) | **Put** /fake/body-with-file-schema | 
*FakeApi* | [**TestBodyWithQueryParams**](docs/FakeApi.md#testbodywithqueryparams) | **Put** /fake/body-with-query-params | 
*FakeApi* | [**TestClientModel**](docs/FakeApi.md#testclientmodel) | **Patch** /fake | To test \&quot;client\&quot; model
*FakeApi* | [**TestEndpointParameters**](docs/FakeApi.md#testendpointparameters) | **Post** /fake | Fake endpoint for testing various parameters 假端點 偽のエンドポイント 가짜 엔드 포인트 
*FakeApi* | [**TestEnumParameters**](docs/FakeApi.md#testenumparameters) | **Get** /fake | To test enum parameters
*FakeApi* | [**TestGroupParameters**](docs/FakeApi.md#testgroupparameters) | **Delete** /fake | Fake endpoint to test group parameters (optional)
*FakeApi* | [**TestInlineAdditionalProperties**](docs/FakeApi.md#testinlineadditionalproperties) | **Post** /fake/inline-additionalProperties | test inline additionalProperties
*FakeApi* | [**TestJsonFormData**](docs/FakeApi.md#testjsonformdata) | **Get** /fake/jsonFormData | test json serialization of form data
*FakeApi* | [**TestQueryParameterCollectionFormat**](docs/FakeApi.md#testqueryparametercollectionformat) | **Put** /fake/test-query-paramters | 
*FakeClassnameTags123Api* | [**TestClassname**](docs/FakeClassnameTags123Api.md#testclassname) | **Patch** /fake_classname_test | To test class name in snake case
*PetApi* | [**AddPet**](docs/PetApi.md#addpet) | **Post** /pet | Add a new pet to the store
*PetApi* | [**DeletePet**](docs/PetApi.md#deletepet) | **Delete** /pet/{petId} | Deletes a pet
*PetApi* | [**FindPetsByStatus**](docs/PetApi.md#findpetsbystatus) | **Get** /pet/findByStatus | Finds Pets by status
*PetApi* | [**FindPetsByTags**](docs/PetApi.md#findpetsbytags) | **Get** /pet/findByTags | Finds Pets by tags
*PetApi* | [**GetPetById**](docs/PetApi.md#getpetbyid) | **Get** /pet/{petId} | Find pet by ID
*PetApi* | [**UpdatePet**](docs/PetApi.md#updatepet) | **Put** /pet | Update an existing pet
*PetApi* | [**UpdatePetWithForm**](docs/PetApi.md#updatepetwithform) | **Post** /pet/{petId} | Updates a pet in the store with form data
*PetApi* | [**UploadFile**](docs/PetApi.md#uploadfile) | **Post** /pet/{petId}/uploadImage | uploads an image
*PetApi* | [**UploadFileWithRequiredFile**](docs/PetApi.md#uploadfilewithrequiredfile) | **Post** /fake/{petId}/uploadImageWithRequiredFile | uploads an image (required)
*StoreApi* | [**DeleteOrder**](docs/StoreApi.md#deleteorder) | **Delete** /store/order/{order_id} | Delete purchase order by ID
*StoreApi* | [**GetInventory**](docs/StoreApi.md#getinventory) | **Get** /store/inventory | Returns pet inventories by status
*StoreApi* | [**GetOrderById**](docs/StoreApi.md#getorderbyid) | **Get** /store/order/{order_id} | Find purchase order by ID
*StoreApi* | [**PlaceOrder**](docs/StoreApi.md#placeorder) | **Post** /store/order | Place an order for a pet
*UserApi* | [**CreateUser**](docs/UserApi.md#createuser) | **Post** /user | Create user
*UserApi* | [**CreateUsersWithArrayInput**](docs/UserApi.md#createuserswitharrayinput) | **Post** /user/createWithArray | Creates list of users with given input array
*UserApi* | [**CreateUsersWithListInput**](docs/UserApi.md#createuserswithlistinput) | **Post** /user/createWithList | Creates list of users with given input array
*UserApi* | [**DeleteUser**](docs/UserApi.md#deleteuser) | **Delete** /user/{username} | Delete user
*UserApi* | [**GetUserByName**](docs/UserApi.md#getuserbyname) | **Get** /user/{username} | Get user by user name
*UserApi* | [**LoginUser**](docs/UserApi.md#loginuser) | **Get** /user/login | Logs user into the system
*UserApi* | [**LogoutUser**](docs/UserApi.md#logoutuser) | **Get** /user/logout | Logs out current logged in user session
*UserApi* | [**UpdateUser**](docs/UserApi.md#updateuser) | **Put** /user/{username} | Updated user


## Documentation For Models

 - [AdditionalPropertiesAnyType](docs/AdditionalPropertiesAnyType.md)
 - [AdditionalPropertiesArray](docs/AdditionalPropertiesArray.md)
 - [AdditionalPropertiesBoolean](docs/AdditionalPropertiesBoolean.md)
 - [AdditionalPropertiesClass](docs/AdditionalPropertiesClass.md)
 - [AdditionalPropertiesInteger](docs/AdditionalPropertiesInteger.md)
 - [AdditionalPropertiesNumber](docs/AdditionalPropertiesNumber.md)
 - [AdditionalPropertiesObject](docs/AdditionalPropertiesObject.md)
 - [AdditionalPropertiesString](docs/AdditionalPropertiesString.md)
 - [Animal](docs/Animal.md)
 - [ApiResponse](docs/ApiResponse.md)
 - [ArrayOfArrayOfNumberOnly](docs/ArrayOfArrayOfNumberOnly.md)
 - [ArrayOfNumberOnly](docs/ArrayOfNumberOnly.md)
 - [ArrayTest](docs/ArrayTest.md)
 - [Capitalization](docs/Capitalization.md)
 - [Cat](docs/Cat.md)
 - [CatAllOf](docs/CatAllOf.md)
 - [Category](docs/Category.md)
 - [ClassModel](docs/ClassModel.md)
 - [Client](docs/Client.md)
 - [Dog](docs/Dog.md)
 - [DogAllOf](docs/DogAllOf.md)
 - [EnumArrays](docs/EnumArrays.md)
 - [EnumClass](docs/EnumClass.md)
 - [EnumTest](docs/EnumTest.md)
 - [File](docs/File.md)
 - [FileSchemaTestClass](docs/FileSchemaTestClass.md)
 - [FormatTest](docs/FormatTest.md)
 - [HasOnlyReadOnly](docs/HasOnlyReadOnly.md)
 - [List](docs/List.md)
 - [MapTest](docs/MapTest.md)
 - [MixedPropertiesAndAdditionalPropertiesClass](docs/MixedPropertiesAndAdditionalPropertiesClass.md)
 - [Model200Response](docs/Model200Response.md)
 - [Name](docs/Name.md)
 - [NumberOnly](docs/NumberOnly.md)
 - [Order](docs/Order.md)
 - [OuterComposite](docs/OuterComposite.md)
 - [OuterEnum](docs/OuterEnum.md)
 - [Pet](docs/Pet.md)
 - [ReadOnlyFirst](docs/ReadOnlyFirst.md)
 - [Return](docs/Return.md)
 - [SpecialModelName](docs/SpecialModelName.md)
 - [Tag](docs/Tag.md)
 - [TypeHolderDefault](docs/TypeHolderDefault.md)
 - [TypeHolderExample](docs/TypeHolderExample.md)
 - [User](docs/User.md)
 - [XmlItem](docs/XmlItem.md)


## Documentation For Authorization



### api_key

- **Type**: API key
- **API key parameter name**: api_key
- **Location**: HTTP header

Note, each API key must be added to a map of `map[string]APIKey` where the key is: api_key and passed in as the auth context for each request.


### api_key_query

- **Type**: API key
- **API key parameter name**: api_key_query
- **Location**: URL query string

Note, each API key must be added to a map of `map[string]APIKey` where the key is: api_key_query and passed in as the auth context for each request.


### http_basic_test

- **Type**: HTTP basic authentication

Example

```golang
auth := context.WithValue(context.Background(), sw.ContextBasicAuth, sw.BasicAuth{
    UserName: "username",
    Password: "password",
})
r, err := client.Service.Operation(auth, args)
```


### petstore_auth


- **Type**: OAuth
- **Flow**: implicit
- **Authorization URL**: http://petstore.swagger.io/api/oauth/dialog
- **Scopes**: 
 - **write:pets**: modify pets in your account
 - **read:pets**: read your pets

Example

```golang
auth := context.WithValue(context.Background(), sw.ContextAccessToken, "ACCESSTOKENSTRING")
r, err := client.Service.Operation(auth, args)
```

Or via OAuth2 module to automatically refresh tokens and perform user authentication.

```golang
import "golang.org/x/oauth2"

/* Perform OAuth2 round trip request and obtain a token */

tokenSource := oauth2cfg.TokenSource(createContext(httpClient), &token)
auth := context.WithValue(oauth2.NoContext, sw.ContextOAuth2, tokenSource)
r, err := client.Service.Operation(auth, args)
```


## Documentation for Utility Methods

Due to the fact that model structure members are all pointers, this package contains
a number of utility functions to easily obtain pointers to values of basic types.
Each of these functions takes a value of the given basic type and returns a pointer to it:

* `PtrBool`
* `PtrInt`
* `PtrInt32`
* `PtrInt64`
* `PtrFloat`
* `PtrFloat32`
* `PtrFloat64`
* `PtrString`
* `PtrTime`

## Author


