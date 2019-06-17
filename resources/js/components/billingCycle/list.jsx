import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { FaPencilAlt, FaTrash } from 'react-icons/fa'

import { getListBC, showUpdate, showDelete, getListCredit } from '../../store';

class List extends Component {

    componentWillMount() {
        this.props.getListBC()
    }

    renderRows() {
        const list = this.props.list || []
        return list.map(bc => (
            <tr key={bc.id}>
                <td>{bc.name}</td>
                <td>{bc.month}</td>
                <td>{bc.year}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => this.props.showUpdate(bc)}>
                        <FaPencilAlt />
                    </button>
                    <button className='btn btn-danger' onClick={() => this.props.showDelete(bc)}>
                        <FaTrash />
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
                            <th>Mês</th>
                            <th>Ano</th>
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

const mapStateToProps = (state, ownProps) => ({list: state.billingCycleReduc.list});
const mapDispatchToProps = dispatch => bindActionCreators({getListBC, showUpdate, showDelete, getListCredit}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
