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

import * as actions from '../../../store/actions';

const navItems = props => (
  <MenuList>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <MenuItem>
        <ListItemIcon>
          <HomeIcon />
        </ListItemIcon>
        <ListItemText primary="Home" />
      </MenuItem>
    </Link>

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
  </MenuList>
);

const mapDispatchToProps = dispatch => {
  return {
    onToggleNewPurchaseDialog: () =>
      dispatch(actions.toggleNewPurchaseDialog()),
  };
};

export default connect(null, mapDispatchToProps)(navItems);
