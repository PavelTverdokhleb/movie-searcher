import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';
import Main from '../../components/Main/Main';
import {Spring} from 'react-spring/renderprops';

class Container extends Component {
    render() {
        const { user:{ menuOpen }} = this.props;
        return (
            <>
                <Header/>
                <Sidebar/>
                <Spring
                    from={{
                        paddingLeft: 0,
                    }}
                    to={{
                        paddingLeft: menuOpen ? 250 : 80,
                    }}
                >
                    {style => (
                        <main style={style}>
                            <Main/>
                        </main>
                    )}
                </Spring>
            </>
        );
    }
}

const mapStateToProps = ({user}) => ({user});

const mapDispatchToProps = {
    // getData
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Container);
