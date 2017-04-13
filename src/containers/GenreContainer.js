import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { genreClicked } from '../actions/actions';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return {
    genreClicked: () => dispatch(genreClicked())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);