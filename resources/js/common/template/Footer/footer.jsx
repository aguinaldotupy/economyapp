import React, { Component } from 'react';
import style from './style.scss';

export default class Footer extends Component {
    render() {
        return (
            <div className={`${style.footer}`}>
                <footer className="main-footer">
                    <strong>
                        Copyright &copy; 2019
                        <a href='https://instagram.com/aguinaldo.tupy' target='javascript:;'/* eslint-disable-line */> Tupy</a>.
                        </strong>
                </footer>
            </div>
        );
    }

}
