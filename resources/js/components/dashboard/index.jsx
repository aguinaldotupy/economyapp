import Dashboard from './component';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSummary } from '../../store'

const mapStateToProps = state => ({summary: state.dashboard.summary});

const mapDispatchToProps = dispatch => bindActionCreators({ getSummary }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
