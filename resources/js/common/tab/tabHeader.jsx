import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import style from './tabHeaderStyles.css';
// import { FaClipboardList, FaPlus, FaPencilAlt,  } from 'react-icons/fa'

import If from '../operator/if';
import { selectTab } from '../../store';

class TabHeader extends Component {
  render() {
    const selected = this.props.tab.selected === this.props.target
    const visible = this.props.tab.visible[this.props.target]
    return (
      <div className={`flex-sm-fill text-sm-center nav-item ${style.tabHeader}`}>
        <If test={visible}>
          <li className={selected ? 'active' : ' '}>
            <span href={`javascript:;`}
              role='tab'
              onClick={() => this.props.selectTab(this.props.target)}
              aria-controls={this.props.controls}
              aria-selected={this.props.selected}
              data-togle='tab'
              data-target={this.props.target}>
              {this.props.label}
            </span>
          </li>
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => ({ tab: state.tab })

const mapDispatchToProps = dispatch => bindActionCreators({ selectTab }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TabHeader);
