import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Preview from '../Preview/Preview';

import { getMovies } from "../../actions/movieActions";

import './Movies.scss';

class Movies extends Component {

    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }

    render() {
        const { movie: {movies_list} } = this.props;
        console.log(movies_list);
        return (
            <div className="movies_wrapper">
                <Grid container spacing={2}>
                    {movies_list && movies_list.Search && movies_list.Search.map((movie, i) => (
                        <Preview key={i} {...movie}/>
                    ))}
                </Grid>
            </div>
        );
    }
}

const mapStateToProps = ({movie}) => {
    return {
        movie
    };
};

const mapDispatchToProps = {
    getMovies
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Movies);
