import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import queryString from 'query-string';
import PropTypes from 'prop-types';

import MoviesList from '../../components/MoviesList';
import NotFound from '../../components/NotFound';

const UsersPage = ({ movies, requestMovies }) => {
    const location = useLocation();

    const [searchParams, setSearchParams] = useState({
        search: '',
        searchBy: 'title',
        sortBy: 'release_date',
        sortOrder:'desc',
        filter: []
    });
    /**
   * The effect hook runs when the component mounts but also when the component updates.
   *
   * We only want to fetch data when the component mounts
   * That’s why you can provide an empty array as second argument
   * to the effect hook to avoid activating it on component updates
   * but only for the mounting of the component
   */
    useEffect(() => {
        const search = queryString.parse(location.search);

        if (!!search && search.search && search.search.length > 1) {
            setSearchParams({
                ...searchParams,
                ...search
            });
            requestMovies(searchParams);
        }
    }, [location]);

    return movies.length > 0 ? <MoviesList movies={movies} /> : <NotFound />;
};

UsersPage.propTypes = {
    requestMovies: PropTypes.func.isRequired,
    movies: PropTypes.arrayOf(PropTypes.shape({})),
};
UsersPage.defaultProps = {
    movies: [],
};

export default UsersPage;
