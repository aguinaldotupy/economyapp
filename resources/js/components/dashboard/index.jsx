import Dashboard from './component';
import { connect } from 'react-redux';

// import { getSummary } from '../../store/actions/dashboard'

const mapStateToProps = state => ({summary: state.dashboard.summary});

// const mapDispatchToProps = (dispatch, ownProps) => ({
//     getSummary: () => dispatch(getSummary())
// });

export default connect(
    mapStateToProps,
    // mapDispatchToProps
)(Dashboard);
