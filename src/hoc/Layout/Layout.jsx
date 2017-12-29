import React from 'react';
import { connect } from 'react-redux';

import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';
import Login from '../../components/Login/Login';
import NewPurchase from '../../components/NewPurchase/NewPurchase';

const layout = props => (
  <div>
    <Toolbar />
    <SideDrawer show={props.showSideDrawer} />
    {props.showLoginDialog ? <Login /> : null}
    {props.showNewPurchaseDialog ? <NewPurchase /> : null}
    <main>{props.children}</main>
  </div>
);

const mapStateToProps = state => {
  return {
    showSideDrawer: state.ui.showSideDrawer,
    showLoginDialog: state.ui.showLoginDialog,
    showNewPurchaseDialog: state.ui.showNewPurchaseDialog,
  };
};

export default connect(mapStateToProps)(layout);
