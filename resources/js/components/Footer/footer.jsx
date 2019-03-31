import React, { Component } from 'react';
import style from './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className={`${style.footer}`}>
                <footer className="main-footer">
                    <strong>
                        Copyright &copy; 2019
                        <a href='/' target='_blank' className="teste"> Tupy</a>.
                        </strong>
                </footer>
            </div>
        );
    }

}
