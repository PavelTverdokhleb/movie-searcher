import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Header.scss';


class Header extends Component {
    render() {
        return (
            <header>
                header
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        // user: state.user
    };
};

const mapDispatchToProps = {
    // getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
