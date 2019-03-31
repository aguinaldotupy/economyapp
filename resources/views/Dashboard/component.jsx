import React, { Component } from 'react';
import Header from '../../js/components/Header';
import Footer from '../../js/components/Footer/footer';
import style from './style.scss';
import { Container, Row, Col, Card, CardHeader, CardBody, FormGroup, Label, Input, Table, CardTitle, CardText, Button } from 'reactstrap';

class Dashboard extends Component {
    render() {
        return (
            <div className={`${style.dashboard}`}>
                <Header />
                <Container className="py-4">
                    <Row className="dashboard">
                        <Col sm="4">
                            <Card body inverse color="success">
                                <CardTitle><b>R$ 100,00</b></CardTitle>
                                <CardText>Total créditos</CardText>
                            </Card>
                        </Col>

                        <Col sm="4">
                            <Card body inverse color="danger">
                                <CardTitle><b>R$ 100,00</b></CardTitle>
                                <CardText>Total débitos</CardText>
                            </Card>
                        </Col>

                        <Col sm="4">
                            <Card body inverse color="primary">
                                <CardTitle><b>R$ 100,00</b></CardTitle>
                                <CardText>Valor consolidado</CardText>
                            </Card>
                        </Col>
                    </Row>
                </Container>

                <Footer />
            </div>
        );
    }
}

export default Dashboard;
