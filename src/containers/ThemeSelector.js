import React from 'react';
import {DropdownButton, MenuItem} from 'react-bootstrap';
import store from '../store/store.js';
import {themeSwitch} from '../reducers/pager.js';
import i18n from '../i18n.js';

const onThemeSwitch = (style) => {
  store.dispatch(themeSwitch(style));
};

const render = () => {
  return (
    <div id="themeSelector">
      <DropdownButton title={i18n.theme} id="themeDropdown">
        <MenuItem id="themeDefault" onClick={() => {onThemeSwitch('Default');}}>{i18n.themeDefault}</MenuItem>
        <MenuItem id="themeGreen" onClick={() => {onThemeSwitch('Green');}}>{i18n.themeGreen}</MenuItem>
        <MenuItem id="themeBlack" onClick={() => {onThemeSwitch('Black');}}>{i18n.themeBlack}</MenuItem>
      </DropdownButton>
    </div>
  );
};

export default render;
