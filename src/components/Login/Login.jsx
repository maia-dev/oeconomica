import React, { Component } from 'react';
import { connect } from 'react-redux';

import Dialog, {
  DialogTitle,
  DialogActions,
  DialogContent,
} from 'material-ui/Dialog';
import Button from 'material-ui/Button';
import { CircularProgress } from 'material-ui/Progress';
import Typography from 'material-ui/Typography';

import Aux from '../../hoc/Aux/Aux';
import { updateObject, checkValidity } from '../../shared/utility';
import * as actions from '../../store/actions';
import Input from '../UI/Input/Input';

class Login extends Component {
  state = {
    controls: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Name',
        },
        label: 'Name',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      password: {
        elementType: 'input',
        elementConfig: {
          type: 'password',
          placeholder: 'Password',
        },
        label: 'Password',
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
    },
  };

  inputChangedHandler = (event, controlName) => {
    const updatedControls = updateObject(this.state.controls, {
      [controlName]: updateObject(this.state.controls[controlName], {
        value: event.target.value,
        valid: checkValidity(
          event.target.value,
          this.state.controls[controlName].validation
        ),
        touched: true,
      }),
    });
    this.setState({ controls: updatedControls });
  };

  submitHandler = event => {
    event.preventDefault();
    this.props.onLoginUser(
      this.state.controls.name.value,
      this.state.controls.password.value
    );
  };

  render() {
    const formElementsArray = Object.entries(this.state.controls).map(
      control => {
        return {
          id: control[0],
          config: control[1],
        };
      }
    );
    let form = formElementsArray.map(formElement => (
      <Input
        key={formElement.id}
        elementType={formElement.config.elementType}
        elementConfig={formElement.config.elementConfig}
        label={formElement.config.label}
        value={formElement.config.value}
        invalid={!formElement.config.valid}
        shouldValidate={formElement.config.validation}
        touched={formElement.config.touched}
        changed={event => this.inputChangedHandler(event, formElement.id)}
      />
    ));

    const contents = this.props.loading ? (
      <CircularProgress />
    ) : (
      <Aux>
        <DialogContent>
          {this.props.errorMsg ? (
            <Typography color="error" type="headline">
              {this.props.errorMsg}
            </Typography>
          ) : null}
          {form}
        </DialogContent>
        <DialogActions>
          <Button raised color="primary" onClick={this.props.onClose}>
            Close
          </Button>
          <Button raised color="primary" onClick={this.submitHandler}>
            Login
          </Button>
        </DialogActions>
      </Aux>
    );
    return (
      <Dialog
        onClose={this.props.onToggleLoginDialog}
        open={true}
        fullWidth={true}
        aria-labelledby="login-dialog-title"
      >
        <DialogTitle id="login-dialog-title">Login</DialogTitle>
        {contents}
      </Dialog>
    );
  }
}

const mapStateToProps = state => {
  return {
    loading: state.ui.authLoading,
    errorMsg: state.ui.authErrorMessage,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClose: () => dispatch(actions.toggleLoginDialog()),
    onLoginUser: (name, password) =>
      dispatch(actions.loginStart(name, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
