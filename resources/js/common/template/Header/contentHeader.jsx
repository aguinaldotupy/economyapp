import React, { Component } from 'react';

export default props => (
            <div className="container-fluid py-2">
                <section className="text-left">
                    <h5>{props.title} <small className="text-muted text-small">{props.small}</small></h5>
                </section>
            </div>
        )
