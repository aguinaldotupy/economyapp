import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import billingCycle from './component';
import { selectTab, showTabs, getList, create } from '../../store';

// const mapStateToProps = (state, ownProps) => ({ });

const mapDispatchToProps = dispatch => bindActionCreators({
    selectTab,
    showTabs,
    getList,
    create
}, dispatch)

export default connect( null,
//     mapStateToProps,
     mapDispatchToProps
 )(billingCycle);
