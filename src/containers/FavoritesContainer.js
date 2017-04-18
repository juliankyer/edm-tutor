import { connect } from 'react-redux';
import Favorites from '../components/Favorites';
import *as actionCreators from '../actions/actions';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
  return { favorites: state.loveHandle }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
