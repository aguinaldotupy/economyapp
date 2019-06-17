import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { showUpdate, showDelete, getListDebit } from '../../store'

class List extends Component {

    componentWillMount() {
        this.props.getListDebit()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc.id}>
                <td>{bc.name}</td>
                <td>{bc.value}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <i className='fas fa-pencil-alt'></i>
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
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

const mapStateToProps = (state, ownProps) => ({list: state.debitReduc.list});
const mapDispatchToProps = dispatch => bindActionCreators({
    showUpdate,
    showDelete,
    getListDebit
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
