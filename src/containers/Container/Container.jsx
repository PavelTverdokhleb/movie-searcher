import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Main from '../../components/Main/Main';

import { getData } from '../../actions/userActions';

class Container extends Component {
    componentDidMount() {
        // const { getData } = this.props;
        // getData().then(res => {
        //     console.log('res', res);
        // }).catch((err) => {
        //     console.log('error', err);
        // });
    }

    render() {
        if (!localStorage.token) return <Redirect to="/auth" />;
        return <Main/>;
    }
}

const mapStateToProps = state => {
    return {
        // user: state.user
    };
};

const mapDispatchToProps = {
    getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
