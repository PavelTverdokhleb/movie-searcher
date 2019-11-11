import React, { Component } from "react";
import { connect } from 'react-redux';
import { TextField, IconButton } from '@material-ui/core';
import {Spring} from 'react-spring/renderprops';
import MenuIcon from '@material-ui/icons/Menu';

import { setMenuState } from "../../actions/userActions";

import './Sidebar.scss';

class Sidebar extends Component {

    setMenuState = (status) => {
        const { setMenuState } = this.props;
        setMenuState(status);
    };

    render() {
        const { user: { menuOpen } } = this.props;
        return (
            <Spring
                from={{
                    width: 0,
                    title: ''
                }}
                to={{
                    width: menuOpen ? 250 : 80,
                    title: menuOpen ? 'MovieSearcher' : 'MS',
                }}
            >
                {props => (
                    <aside style={{width: props.width}}>
                        <IconButton onClick={() => this.setMenuState(!menuOpen)}>
                            <MenuIcon/>
                        </IconButton>
                        <h1>{props.title}</h1>
                        <div className="sidebar_content">
                            {menuOpen && (
                                <TextField
                                    label="Search"
                                    variant="outlined"
                                />
                            )}
                        </div>
                    </aside>
                )}
            </Spring>

        );
    }
}

const mapStateToProps = ({user}) => ({
    user
});

const mapDispatchToProps = {
    setMenuState,
};

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);
