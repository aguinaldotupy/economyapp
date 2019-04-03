import React, { Component } from 'react'

import Header from '../../common/template/Header/component';
import Footer from '../../common/template/Footer/footer';
import ContentHeader from '../../common/template/Header/contentHeader';
import Tabs from '../../common/tab/tabs';
import TabsContent from '../../common/tab/tabsContent';
import TabsHeader from '../../common/tab/tabsHeader';
import TabHeader from '../../common/tab/tabHeader';
import TabContent from '../../common/tab/tabContent';
import List from './list'

export default class Credit extends Component {

    // componentDidMount() {
    //     this.props.init()
    // }

    render() {
        return (
            <div>
                <Header />
                <div className='container-fluid'>
                    <ContentHeader title='Receitas' small='Lista' />
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
                                    {/* <Form
                                        submitLabel='Incluir' submitClass='primary' /> */}
                                </TabContent>
                                <TabContent id='tabUpdate'>
                                    {/* <Form onSubmit={this.props.update}
                                        submitLabel='Alterar' submitClass='info' /> */}
                                </TabContent>
                                <TabContent id='tabDelete'>
                                    {/* <Form onSubmit={this.props.remove} readOnly={true}
                                        submitLabel='Excluir' submitClass='danger' /> */}
                                </TabContent>
                            </TabsContent>
                        </Tabs>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
