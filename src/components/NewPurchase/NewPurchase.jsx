import React from 'react';
import { connect } from 'react-redux';

import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import * as actions from '../../store/actions';

const newPurchase = props => {
  return (
    <Dialog onClose={props.onToggleNewPurchaseDialog} open={true}>
      <DialogTitle>Register new purchase</DialogTitle>
      <TextField id="name" label="Name" margin="normal" />
      <TextField id="value" label="Value" margin="normal" />
      <Button raised color="primary" onClick={props.onToggleNewPurchaseDialog}>
        Close
      </Button>
      <Button raised color="primary">
        Submit
      </Button>
    </Dialog>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNewPurchaseDialog: () =>
      dispatch(actions.toggleNewPurchaseDialog()),
  };
};

export default connect(null, mapDispatchToProps)(newPurchase);
