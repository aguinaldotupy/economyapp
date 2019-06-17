import billingCycle from './component';
// import list from './list';
// import form from './form'

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { getListBC, create, init, update, remove, getListCredit } from '../../store';

// const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({
    getListBC,
    create,
    init,
    update,
    remove,
    getListCredit
}, dispatch)

export default connect( null,
//     mapStateToProps,
     mapDispatchToProps
 )(billingCycle);
