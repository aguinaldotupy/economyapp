import React from 'react';
import Grid from '../layout/grid/grid';
import style from './style.scss';

export default props => (
    <Grid cols={props.cols}>
        <div className={`${style.widget}`}>
            <div className={`card text-white bg-${props.color}`}>
                <div className="card-body">
                    <h3 className="card-title">{props.value}</h3>
                    <p className="card-text">{props.text}</p>
                </div>
                <div className='icon-dashboard'>
                    <i className={`fas fa-${props.icon}`}></i>
                </div>
            </div>
        </div>
    </Grid>
)
