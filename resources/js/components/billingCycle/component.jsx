import React, { Component } from 'react';
import style from './style.scss';

import Footer from '../../common/template/Footer/footer';
import Header from '../../common/template/Header/component';
import Tabs from '../../common/tab/tabs';
import TabsContent from '../../common/tab/tabsContent';
import TabsHeader from '../../common/tab/tabsHeader';
import TabHeader from '../../common/tab/tabHeader';
import ContentHeader from '../../common/template/Header/contentHeader';
import TabContent from '../../common/tab/tabContent';
import List from './list';
import Form from './form';

class billingCycle extends Component {

    componentDidMount() {
        this.props.selectTab('tabList')
        this.props.showTabs('tabList', 'tabCreate')
    }
    render() {
        return (
            <div className={`${style.billingCycle}`}>
                <Header />
                <div className='container-fluid'>
                    <ContentHeader title='Ciclos de pagamentos' small='Cadastro' className="title-dashboard" />
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
                                <Form onSubmit={this.props.create}/>
                                </TabContent>
                                <TabContent id='tabUpdate'><h1>Alterar</h1></TabContent>
                                <TabContent id='tabDelete'><h1>Excluir</h1></TabContent>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default billingCycle;
