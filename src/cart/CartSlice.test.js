import cartReducer, { addToCart, decreaseCart, removeFromCart, getTotals, clearCart } from './cartSlice';

describe('cart reducer', () => {
  const initialState = {
    cartItems: [],
    cartTotalQuantity: 0,
    cartTotalAmount: 0,
  };

  beforeEach(() => {
    localStorage.clear();
  });

  it('should handle initial state', () => {
    expect(cartReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle adding a product to the cart', () => {
    const product = { id: 1, name: 'Test Product', price: 10 };
    const nextState = cartReducer(initialState, addToCart(product));
    expect(nextState.cartItems.length).toEqual(1);
    expect(nextState.cartItems[0]).toEqual({ ...product, cartQuantity: 1 });
  });

  it('should handle decreasing a product quantity in the cart', () => {
    const product = { id: 1, name: 'Test Product', price: 10, cartQuantity: 2 };
    const state = { ...initialState, cartItems: [product] };
    const nextState = cartReducer(state, decreaseCart(product));
    expect(nextState.cartItems.length).toEqual(1);
    expect(nextState.cartItems[0]).toEqual({ ...product, cartQuantity: 1 });
  });

  it('should handle removing a product from the cart', () => {
    const product = { id: 1, name: 'Test Product', price: 10, cartQuantity: 1 };
    const state = { ...initialState, cartItems: [product] };
    const nextState = cartReducer(state, removeFromCart(product));
    expect(nextState.cartItems.length).toEqual(0);
  });

  it('should handle getting the cart totals', () => {
    const product1 = { id: 1, name: 'Test Product 1', price: 10, cartQuantity: 2 };
    const product2 = { id: 2, name: 'Test Product 2', price: 20, cartQuantity: 3 };
    const state = { ...initialState, cartItems: [product1, product2] };
    const nextState = cartReducer(state, getTotals());
    console.log(nextState.cartTotalQuantity);
    expect(nextState.cartTotalQuantity).toEqual(5);
    expect(nextState.cartTotalAmount).toEqual(80);
  });

  it('should handle clearing the cart', () => {
    const product = { id: 1, name: 'Test Product', price: 10, cartQuantity: 1 };
    const state = { ...initialState, cartItems: [product] };
    const nextState = cartReducer(state, clearCart());
    expect(nextState.cartItems.length).toEqual(0);
  });
});

it('should handle getting the cart totals', () => {
    const state = {
      cartItems: [
        {
          id: 1,
          name: 'Product 1',
          price: 10,
          cartQuantity: 1,
        },
        {
          id: 2,
          name: 'Product 2',
          price: 20,
          cartQuantity: 2,
        },
      ],
      cartTotalQuantity: 3,
      cartTotalAmount: 50,
    };
  
    console.log('Initial state:', state);
  
    const nextState = cartReducer(state, getTotals());
  
    console.log('Next state:', nextState);
  
    expect(nextState.cartTotalQuantity).toEqual(3);
    expect(nextState.cartTotalAmount).toEqual(50);
  });