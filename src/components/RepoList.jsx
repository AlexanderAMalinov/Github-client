import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { getRepoList } from '../actions/index.js';
import { ListItem } from './ListItem.jsx';

const actionCreators = { getRepoList };
const mapStateToProps = ({ repoList }) => ({ repoList });

const RepoList = (props) => {
  const { repoList, getRepoList } = props;
  
  useEffect(() => {
    const id = setInterval(() => getRepoList(), 10000);
    return () => clearInterval(id);
  });

  return (
    <ul className='repo-list'>
      {repoList.map(item => <ListItem key={_.uniqueId()} repoName={item.name} stars={item.stargazers_count}/>)}
    </ul>
  );
};

export default connect(mapStateToProps, actionCreators)(RepoList);
