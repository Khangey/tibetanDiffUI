import React, {Component} from 'react';
import PageSelector from './PageSelector.js';
import ThemeSelector from './ThemeSelector.js';
import DataImport from './DataImport.js';
import {connect} from 'react-redux';
import Diff from './Diff.js';
import i18n from '../i18n.js';

class AppContainer extends Component {
  render() {
    return (
      <div id="theme" className={this.props.themeStyle}>
        <header id="logoArea">
          <span>
            <div id="logoTitle">{i18n.appTitle}</div>
          </span>
          <div id="titleRight">
            <PageSelector />
            <ThemeSelector />
            <DataImport />
          </div>
        </header>
        <Diff />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeStyle: state.pager.themeStyle
  };
};

const App = connect(mapStateToProps)(AppContainer);

export default App;
