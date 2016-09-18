/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
  GraphQLObjectType as ObjectType,
} from 'graphql';

import me from './queries/me';
import content from './queries/content';
import news from './queries/news';
import userLogin from './mutations/user.login';
import userLogout from './mutations/user.logout';
import userRegister from './mutations/user.register';

const schema = new Schema({
  query: new ObjectType({
    name: 'Query',
    fields: {
      me,
      content,
      news,
    },
  }),
  mutation: new ObjectType({
    name: 'Mutation',
    fields: {
      userLogin,
      userLogout,
      userRegister,
    },
  }),
});

export default schema;
