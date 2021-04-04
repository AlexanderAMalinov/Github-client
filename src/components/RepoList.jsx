import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getRepoList } from '../actions/index.js';
import { ListItem } from './ListItem.jsx';

const actionCreators = { getRepoList };
const mapStateToProps = ({ repoList }) => ({ repoList });

const RepoList = (props) => {
  const { repoList } = props;
  return (
    <ul className='repo-list'>
      {repoList.map(item => <ListItem key={_.uniqueId()} repoName={item.name}/>)}
    </ul>
  );
};

export default connect(mapStateToProps, actionCreators)(RepoList);
