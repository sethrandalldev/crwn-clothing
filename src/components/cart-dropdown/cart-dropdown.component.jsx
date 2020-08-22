import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { createStructuredSelector } from 'reselect';

import { CartDropdownContainer, CartItemsContainer, EmptyMessageContainer } from './cart-dropdown.styles';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
        : <EmptyMessageContainer>Your cart is empty</EmptyMessageContainer>
      }
    </CartItemsContainer>
    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

export default withRouter(connect(mapStateToProps)(CartDropdown));