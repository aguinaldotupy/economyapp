import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import style from './style.scss';

import Footer from '../../common/template/Footer/footer';
import Header from '../../common/template/Header/component';
import Content from '../../common/template/Header/content';
import ContentHeader from '../../common/template//Header/contentHeader';
import ValueBox from '../../common/widget/valueBox';

class Dashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {}
    }

    componentWillMount() {
        this.props.getSummary()
    }
    render() {
        const { credit, debt } = this.props.summary
        return (
            <div className={`${style.dashboard}`}>
                <Header />
                <ContentHeader title='Dashboard' small='Versão 1.0' className="title-dashboard"/>
                <Content>
                    <Container className="py-4">
                        <Row className="dashboard">
                            <ValueBox cols='12 4' color='success' icon='university' value={`€ ${credit}`} text='Total Créditos' />
                            <ValueBox cols='12 4' color='danger' icon='money-check' value={`€ ${debt}`} text='Total Débitos' />
                            <ValueBox cols='12 4' color='primary' icon='money-bill' value={`€ ${credit - debt}`} text='Valor Consolidado' />
                        </Row>
                    </Container>
                </Content>
                <Footer />
            </div>
        );
    }
}

export default Dashboard;
