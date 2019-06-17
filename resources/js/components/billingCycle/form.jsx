import React, { Component } from 'react'
import LabelAndInput from '../../common/form/labelAndInput';
import { reduxForm, Field, formValueSelector } from 'redux-form'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { init } from '../../store'
import ItemList from './itemList';
import Summary from './summary'
import { Row, CardBody } from 'reactstrap'

class BCForm extends Component {

    calculateSummary() {
        const sum = (t, v) => t + v
        return {
            sumOfCredits: this.props.credits.map(c => +c.value || 0).reduce(sum),
            sumOfDebts: this.props.debts.map(d => +d.value || 0).reduce(sum)
        }
    }

    render() {
        const { handleSubmit, readOnly, credits, debts } = this.props
        const { sumOfCredits, sumOfDebts } = this.calculateSummary()
        return (
            <form role="form" onSubmit={handleSubmit /* eslint-disable-line */} >
                <CardBody>
                    <Row>
                        <Field name='name' component={LabelAndInput} readOnly={readOnly}
                            label='Nome' cols='12 4' placeholder='Informe o nome do mês (Ex. Janeiro)' />
                        <Field name='month' component={LabelAndInput} readOnly={readOnly}
                            label='Mês' cols='12 4' placeholder='Informe o número referente ao mês' type='number' />
                        <Field name='year' component={LabelAndInput} readOnly={readOnly}
                            label='Ano' cols='12 4' placeholder='Informe o ano' type='number' />
                    </Row>
                    <Summary credit={sumOfCredits} debt={sumOfDebts} />
                    <ItemList list={debts} readOnly={readOnly} field='debts' legend='Débitos' showStatus={true} />
                    <ItemList list={credits} readOnly={readOnly} field='credits' legend='Créditos' />
                    <div className='box-footer'>
                        <button type='submit' className={`btn btn-${this.props.submitClass}`}>
                            {this.props.submitLabel} </button>
                        <button type='button' className='btn btn-secondary' onClick={this.props.init}>Cancelar</button>
                    </div>
                </CardBody>
            </form>
        )
    }
}

BCForm = reduxForm({ form: 'billingCycleForm', destroyOnUnmount: false })(BCForm)
const selector = formValueSelector('billingCycleForm')
const mapStateToProps = state => ({
    credits: selector(state, 'credits'),
    debts: selector(state, 'debts')
})
const mapDispatchToProps = dispatch => bindActionCreators({ init }, dispatch)
export default connect(mapStateToProps, mapDispatchToProps)(BCForm)
