import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemIcon, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import HomeIcon from 'material-ui-icons/Home';
import TimelineIcon from 'material-ui-icons/Timeline';
import ShoppingCartIcon from 'material-ui-icons/ShoppingCart';
import PaymentIcon from 'material-ui-icons/Payment';
import DoneAllIcon from 'material-ui-icons/DoneAll';
import PersonAddIcon from 'material-ui-icons/PersonAdd';
import CachedIcon from 'material-ui-icons/Cached';

import Aux from '../../../hoc/Aux/Aux';
import * as actions from '../../../store/actions';

const navItems = props => {
  const authItems = props.isAuthed ? (
    <Aux>
      <Link to="/balance" style={{ textDecoration: 'none' }}>
        <MenuItem button={true}>
          <ListItemIcon>
            <TimelineIcon />
          </ListItemIcon>
          <ListItemText primary="Balance" />
        </MenuItem>
      </Link>

      <Divider />

      <MenuItem button={true} onClick={props.onToggleNewPurchaseDialog}>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="New Puchase" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <PaymentIcon />
        </ListItemIcon>
        <ListItemText primary="New Payment" />
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <CachedIcon />
        </ListItemIcon>
        <ListItemText primary="Pending Transactions" />
      </MenuItem>

      <MenuItem>
        <ListItemIcon>
          <DoneAllIcon />
        </ListItemIcon>
        <ListItemText primary="Validate Purchases" />
      </MenuItem>

      <Divider />

      <MenuItem>
        <ListItemIcon>
          <PersonAddIcon />
        </ListItemIcon>
        <ListItemText primary="Create Invite" />
      </MenuItem>
    </Aux>
  ) : null;

  return (
    <MenuList>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <MenuItem>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </MenuItem>
      </Link>
      {authItems}
    </MenuList>
  );
};

const mapStateToProps = state => {
  return {
    isAuthed: state.ui.isAuthed,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onToggleNewPurchaseDialog: () =>
      dispatch(actions.toggleNewPurchaseDialog()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(navItems);
