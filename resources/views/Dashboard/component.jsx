import React, { Component } from 'react';
import Header from '../../js/components/Header';
import Footer from '../../js/components/Footer/footer';
import ContentHeader from '../../js/components/Header/contentHeader';

class Dashboard extends Component {
    render() {
        return(
            <div>
                <Header />

                <Footer />
            </div>
        );
    }
}

export default Dashboard;
