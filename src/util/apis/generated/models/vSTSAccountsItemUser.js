/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

'use strict';

/**
 * VSTS user profile
 *
 */
class VSTSAccountsItemUser {
  /**
   * Create a VSTSAccountsItemUser.
   * @property {string} [id] Profile id
   * @property {string} [displayName] Profile display name
   * @property {string} [publicAlias] Profile alias
   * @property {string} [emailAddress] Profile email
   */
  constructor() {
  }

  /**
   * Defines the metadata of VSTSAccountsItemUser
   *
   * @returns {object} metadata of VSTSAccountsItemUser
   *
   */
  mapper() {
    return {
      required: false,
      serializedName: 'VSTSAccountsItem_user',
      type: {
        name: 'Composite',
        className: 'VSTSAccountsItemUser',
        modelProperties: {
          id: {
            required: false,
            serializedName: 'id',
            type: {
              name: 'String'
            }
          },
          displayName: {
            required: false,
            serializedName: 'displayName',
            type: {
              name: 'String'
            }
          },
          publicAlias: {
            required: false,
            serializedName: 'publicAlias',
            type: {
              name: 'String'
            }
          },
          emailAddress: {
            required: false,
            serializedName: 'emailAddress',
            type: {
              name: 'String'
            }
          }
        }
      }
    };
  }
}

module.exports = VSTSAccountsItemUser;