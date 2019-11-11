import React, { Component } from 'react';
import { connect } from 'react-redux';

import { getMovies } from "../../actions/movieActions";


class Movies extends Component {
    
    componentDidMount() {
        const { getMovies } = this.props;
        getMovies();
    }
    
    render() {
        console.log(this.props);
        return (
            <section>
                movies
            </section>
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
