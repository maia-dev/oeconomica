import React from 'react';
import { connect } from 'react-redux';

import Dialog, { DialogTitle } from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';

import * as actions from '../../store/actions';

const login = props => {
  return (
    <Dialog onClose={props.onToggleLoginDialog} open={true} fullWidth={true}>
      <DialogTitle>Login</DialogTitle>
      <TextField id="name" label="Name" margin="normal" />
      <TextField id="password" label="Password" margin="normal" />
      <Button raised color="primary" onClick={props.onToggleLoginDialog}>
        Close
      </Button>
      <Button raised color="primary" onClick={props.onLoginUser}>
        Login
      </Button>
    </Dialog>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleLoginDialog: () => dispatch(actions.toggleLoginDialog()),
    onLoginUser: () => dispatch(actions.loginStart()),
  };
};

export default connect(null, mapDispatchToProps)(login);
