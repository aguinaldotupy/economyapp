import React, { Component } from 'react';
import style from './style.scss';
import { Link } from 'react-router-dom';

class Welcome extends Component {
    render() {
        return (
            <div className={style.welcome}>
                <div className="content">
                    <div className="title">Economy .App</div>
                    <div className='links'>
                        <Link to="/dashboard" className="link">Dashboard</Link>
                        <Link to="/billingCycle" className="link">Ciclo de pagamento</Link>
                    </div>

                </div>
            </div>
        );
    }
}

export default Welcome;
