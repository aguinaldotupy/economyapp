// import React, { Component } from 'react'
// import LabelAndInput from '../../common/form/labelAndInput';
// import { reduxForm, Field, formValueSelector } from 'redux-form'

// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
// import { initDebit } from '../../store'

// class DebitForm extends Component {

//     render() {
//         const { handleSubmit, readOnly, credits } = this.props
//         return (
//             <form role='form' onSubmit={ handleSubmit }>
//                 <div className='box-body'>
//                     <Field name='name' component={LabelAndInput} readOnly={readOnly}
//                         label='Nome' cols='12 4' placeholder='Informe o nome do mês (Ex. Janeiro)'/>
//                     <Field name='month' component={LabelAndInput} readOnly={readOnly}
//                         label='Mês' cols='12 4' placeholder='Informe o número referente ao mês' type='number' />
//                     <Field name='year' component={LabelAndInput} readOnly={readOnly}
//                         label='Ano' cols='12 4' placeholder='Informe o ano' type='number'/>
//                     {/* <CreditList cols='12 6' list={credits} readOnly={readOnly} /> */}
//                 </div>
//                 <div className='box-footer'>
//                     <button type='submit' className={`btn btn-${this.props.submitClass}`}>
//                         {this.props.submitLabel} </button>
//                     <button type='button' className='btn btn-secondary' onClick={this.props.init}>Cancelar</button>
//                 </div>
//             </form>
//         )
//     }
// }

// DebitForm = reduxForm({form: 'FormDebit', destroyOnUnmount: false})(DebitForm)
// const selector = formValueSelector('FormDebit')
// const mapStateToProps = state => ({credits: selector(state, 'credits')})
// const mapDispachToProps = dispatch => bindActionCreators({initDebit}, dispatch)
// export default connect(mapStateToProps, mapDispachToProps)(DebitForm)
