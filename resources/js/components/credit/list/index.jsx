import List from './component'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getListBC, showUpdate, showDelete, getListCredit } from '../../../store'

const mapStateToProps = (state, ownProps) => ({list: state.billingCycle.list});
const mapDispatchToProps = dispatch => bindActionCreators({
    getListBC,
    showUpdate,
    showDelete,
    getListCredit
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
