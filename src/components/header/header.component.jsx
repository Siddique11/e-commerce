import React from "react";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import "./header.style.scss";
import { connect } from "react-redux";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropDown from "../cart-dropdown/cart-dropdown.component";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "../redux/user/user.selector";
import { selectCartHidden } from "../redux/cart/cart.selector";
import {
  HeaderContainder,
  LogoContainer,
  OptionLink,
  OptionsCOntainer,
} from "./header.style";

const Header = ({ currentUser, hidden }) => (
  <HeaderContainder>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsCOntainer className="options">
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/shop">CONTACT</OptionLink>

      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          Sign Out
        </OptionLink>
      ) : (
        <OptionLink to="/signin">Sign In</OptionLink>
      )}

      <CartIcon />
    </OptionsCOntainer>
    {hidden ? null : <CartDropDown />}
  </HeaderContainder>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
