import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { requestMovies } from '../../store/actions/moviesActions';
import MovieList from './MovieList';
import { getAllMovies } from '../../store/selectors';

export const mapStateToProps = state => ({
    movies: getAllMovies(state),
});

const mapDispatchToProps = dispatch => bindActionCreators({
    requestMovies,
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MovieList);
