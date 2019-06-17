import React, { Component } from 'react';
// import style from './style.scss';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { createc, initCredit, updatec, removec, getListCredit } from '../../store';

import Footer from '../../common/template/Footer/footer';
import Header from '../../common/template/Header/component';
import ContentHeader from '../../common/template/Header/contentHeader'
import Tabs from '../../common/tab/tabs'
import TabsContent from '../../common/tab/tabsContent';
import TabsHeader from '../../common/tab/tabsHeader';
import TabHeader from '../../common/tab/tabHeader';
import TabContent from '../../common/tab/tabContent';
import List from './creditList';
import Form from './creditForm';

class Credit extends Component {

    componentDidMount() {
        this.props.initCredit()
    }
    render() {
        return (
            <div>
                <Header />
                <div className='container-fluid'>
                    <ContentHeader title='Receita' small='1.0' className="title-dashboard" />
                    <div>
                        <Tabs>
                            <TabsHeader>
                                <TabHeader label='Listar' icon='list' target='tabList' controls='tabList' />
                                <TabHeader label='Incluir' icon='plus' target='tabCreate' controls='tabCreate' />
                                <TabHeader label='Alterar' icon='pencil-alt' target='tabUpdate' controls='tabUpdate' />
                                <TabHeader label='Excluir' icon='trash-alt' target='tabDelete' controls='tabDelete' />
                            </TabsHeader>

                            <TabsContent>
                                <TabContent id='tabList'>
                                    <List />
                                </TabContent>
                                <TabContent id='tabCreate'>
                                    <Form onSubmit={this.props.createc}
                                        submitLabel='Incluir' submitClass='primary' />
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    <Form onSubmit={this.props.updatec}
                                        submitLabel='Alterar' submitClass='info' />
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    <Form onSubmit={this.props.removec} readOnly={true}
                                        submitLabel='Excluir' submitClass='danger' />
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

// const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({
    createc,
    initCredit,
    updatec,
    removec,
    getListCredit
}, dispatch)

export default connect(null,
    //     mapStateToProps,
    mapDispatchToProps
)(Credit);

