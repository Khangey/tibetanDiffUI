import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ButtonToolbar, Button, Modal} from 'react-bootstrap';
import store from '../store/store.js';
import {importModalControl, fileImport} from '../reducers/pager.js';
import splitPb from '../processor/splitPb.js';
import i18n from '../i18n.js';

class DataImportContainer extends Component {
  doImportModalControl(mode) {
    store.dispatch(importModalControl(mode));
  }

  dataImport(e) {
    let fileState = e.target.id;
    let fileName = e.target.value.split(/(\\|\/)/g).pop().split('.')[0];
    let r = new FileReader();
    let file = e.target.files[0];
    r.onload = () => {
      let text = r.result;
      let splited = splitPb.splitLjPb(text);
      let fileObj = {};
      fileObj[fileName] = splited;
      if ('oldFileImport' === fileState) {
        store.dispatch(fileImport(fileObj, 0));
      } else if ('newFileImport' === fileState) {
        store.dispatch(fileImport(fileObj, 1));
      } else {
        return {};
      }
    };
    r.readAsText(file);
  }

  render() {
    let modalDisplay = 'modalClose';
    if (true === this.props.pager.importModalControl) {
      modalDisplay = 'modalOpen';
    }
    return (
      <div id="importer">
        <ButtonToolbar>
          <Button id="importButton" onClick={() => {this.doImportModalControl('open');}}>{i18n.import}</Button>
        </ButtonToolbar>
        <div id="importModal" className={modalDisplay}>
          <Modal.Dialog>
            <Modal.Header>
              <Modal.Title>{i18n.importModalTitle}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>{i18n.oldText}:</h5>
              <input type="file" id="oldFileImport" onChange={this.dataImport} />
              <h5>{i18n.newText}:</h5>
              <input type="file" id="newFileImport" onChange={this.dataImport} />
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={() => {this.doImportModalControl('remove');}}>{i18n.removeImport}</Button>
              <Button onClick={() => {this.doImportModalControl('cancel');}}>{i18n.cancel}</Button>
              <Button bsStyle="primary" onClick={() => {this.doImportModalControl('import');}}>{i18n.import}</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    pager: state.pager
  };
};

const DataImport = connect(mapStateToProps)(DataImportContainer);

export default DataImport;
