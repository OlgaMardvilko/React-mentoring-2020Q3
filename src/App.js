import 'isomorphic-fetch';
import 'babel-polyfill';
import React from 'react';
import { hot } from 'react-hot-loader';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';

import Footer from './components/Footer';
import ErrorBoundary from './containers/ErrorBounding';
import Page404 from './pages/Page404';
import SearchMoviesPage from './pages/SearchMoviesPage';
import MovieDetailsPage from './pages/MovieDetailsPage';
import About from './pages/About';
import MovieList from './pages/MovieList';

const App = ({ Router, location, context, store }) => {
    return (
        <Provider store={store}>
            <ErrorBoundary>
                <Router location={location} context={context}>
                    <Switch>
                        {/* <Route exact path="/" component={MovieList} /> */}
                        {/* <Route exact path="/" component={SearchMoviesPage} /> */}
                        <Route exact path="/" component={About} />
                        <Route exact path="/search" component={SearchMoviesPage} />
                        <Route exact path="/movie/:id" component={MovieDetailsPage} />
                        <Route path="*" component={Page404} />
                        <Redirect to="/" />
                    </Switch>
                </Router>
            </ErrorBoundary>
            <Footer/>
        </Provider>
    );
};

App.propTypes = {
    Router: PropTypes.func.isRequired,
    location: PropTypes.string,
    context: PropTypes.shape({
        url: PropTypes.string,
    }),
    store: PropTypes.shape({
        dispatch: PropTypes.func.isRequired,
        getState: PropTypes.func.isRequired,
    }).isRequired,
};

App.defaultProps = {
    location: null,
    context: null,
};

export default hot(module)(App);
