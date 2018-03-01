/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import ReactTable from 'react-table';
import t from 'react-table/react-table.css';
import s from './Today.css';

class Today extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    const data = [
      {
        name: 'Tanner Linsley',
        age: 26,
        job: 'Ironsmith',
      },
      {
        name: 'Jacob Holier',
        age: 31,
        job: 'Linter',
      },
    ];

    const columns = [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Age',
        accessor: 'age',
        // Cell: props => <span className="number">{props.value}</span>, // Custom cell components!
      },
      {
        Header: 'Job',
        accessor: 'job',
      },
    ];
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <div className={t}>
            <ReactTable data={data} columns={columns} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s, t)(Today);
