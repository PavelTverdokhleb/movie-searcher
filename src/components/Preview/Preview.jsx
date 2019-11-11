import React from "react";
import { Grid } from '@material-ui/core';
import MovieIcon from '@material-ui/icons/Movie';

import './Preview.scss';

const Preview = ({Title, Poster, Year, ...rest}) => {
    console.log(rest);
    return (
        <Grid item sm={12} xs={12} md={3} lg={3}>
            <div className="item_wrapper">
                <div className="item_panel">
                    <MovieIcon/>
                    <span>{Year}</span>
                </div>
                <img src={Poster} alt="poster"/>
                <h4>{Title}</h4>
            </div>
        </Grid>
    );
};

export default Preview;
