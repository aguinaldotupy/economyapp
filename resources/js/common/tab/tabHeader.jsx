import React, { Component } from 'react'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import If from '../operator/if';
import { selectTab } from '../../store';

class TabHeader extends Component {
  render() {
      const selected = this.props.tab.selected === this.props.target
      const visible = this.props.tab.visible[this.props.target]
    return (
      <div className='flex-sm-fill text-sm-center nav-item'>
        <If test={visible}>
            <li className={selected ? 'active' : ''}>
                <a href='javascript:;'
                    role='tab'
                    onClick={() => this.props.selectTab(this.props.target)}
                    aria-controls={this.props.controls}
                    aria-selected={this.props.selected}
                    data-togle='tab'
                    data-target={this.props.target}>
                    <i className={`fas fa-${this.props.icon}`}></i> {this.props.label}
                </a>
            </li>
        </If>
      </div>
    )
  }
}

const mapStateToProps = state => ({tab : state.tab})

const mapDispatchToProps = dispatch => bindActionCreators({selectTab}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TabHeader);
