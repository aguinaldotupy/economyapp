import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showUpdatec, showDeletec, getListCredit } from '../../store'

class List extends Component {

    componentWillMount() {
        this.props.getListCredit()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc.id}>
                <td>{bc.name}</td>
                <td>{bc.value}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdatec(bc)}>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDeletec(bc)}>
                        <i className='fas fa-trash'></i>
                    </button>
                </td>
            </tr>
        ))
    }
    render() {
        return (
            <div>
                <table className='table'>
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th className='table-actions'>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderRows()}
                    </tbody>
                </table>

            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({list: state.creditReduc.list});
const mapDispatchToProps = dispatch => bindActionCreators({
    showUpdatec,
    showDeletec,
    getListCredit
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
