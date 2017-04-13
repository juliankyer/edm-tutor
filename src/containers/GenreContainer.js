import { connect } from 'react-redux';
import Genre from '../components/Genre';
import { genreClicked } from '../actions/actions';

const mapStateToProps = (state) => {
  console.log(state);
  return state;
}

const mapDispatchToProps = (dispatch) => {
  return {
    genreClicked: (genre) => {
      dispatch(genreClicked(genre));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Genre);