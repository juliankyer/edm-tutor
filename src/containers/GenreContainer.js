import * as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Genre from '../components/Genre';

const mapStateToProps = (state) => {
  return {...state, favorites: state.loveHandle};
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);