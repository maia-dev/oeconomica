import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from 'material-ui/styles';
import Appbar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

import * as actions from '../../../store/actions';

const styles = {
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const toolbar = props => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Appbar position="static">
        <Toolbar>
          <IconButton
            className={classes.menuButton}
            color="contrast"
            aria-label="Menu"
            onClick={props.onToggleSideDrawer}
          >
            <MenuIcon />
          </IconButton>
          <Typography type="title" color="inherit" className={classes.flex}>
            Oeconomica
          </Typography>
          <Button color="contrast" onClick={props.onToggleLoginDialog}>
            Login
          </Button>
        </Toolbar>
      </Appbar>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleLoginDialog: () => dispatch(actions.toggleLoginDialog()),
    onToggleSideDrawer: () => dispatch(actions.toggleSideDrawer()),
  };
};

export default connect(null, mapDispatchToProps)(withStyles(styles)(toolbar));
