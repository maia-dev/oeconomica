import React from 'react';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';

import Drawer from 'material-ui/Drawer';

import NavItems from '../NavItems/NavItems';
import * as actions from '../../../store/actions';

const styles = {
  h1: {
    margin: '10%',
  },
  list: {
    width: 300,
  },
  listFull: {
    width: 'auto',
  },
};

const sideDrawer = props => {
  const { classes } = props;
  return (
    <Drawer open={props.show} onClick={props.onToggleSideDrawer}>
      <h1 className={classes.h1}>Oeconomica</h1>
      <div tabIndex={0} role="button">
        <div className={classes.list}>
          <NavItems />
        </div>
      </div>
    </Drawer>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleSideDrawer: () => dispatch(actions.toggleSideDrawer()),
  };
};

export default connect(null, mapDispatchToProps)(
  withStyles(styles)(sideDrawer)
);
