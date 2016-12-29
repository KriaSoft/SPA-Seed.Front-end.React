/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import Layout from '../../components/Layout';
import Contact from './Contact';

const title = '通讯录';

export default {

  path: '/contact',

  action() {
    let friends = [
      {title:'张三',uid:'1',description:'四姓18家'},
      {title:'李四',uid:'2',description:'四姓18家'},
      {title:'王五',uid:'3',description:'四姓18家'},
      {title:'赵六',uid:'4',description:'四姓18家'}];
    return {
      title,
      component: <Layout><Contact friends={friends} title={title} /></Layout>,
    };
  },

};
