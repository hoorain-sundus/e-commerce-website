import { Link } from 'react-router-dom';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Minus, Plus, Trash2 } from 'lucide-react';
import { removeFromCart, updateQuantity } from '../Features/cart/cartSlice';

function CartPage() {

  const dispatch = useDispatch();
  const cartItems = useSelector((state)=> state.cart.items);

  const total = cartItems.reduce((sum, item)=> sum + item.price * item.quantity, 0);

  if(cartItems.length === 0){
    return  <div className='container mx-auto px-4 py-8'>
       <div className='text-center'>
        <h2 className='text-xl md:text-2xl font-bold mb-4'>Your Cart is Empty</h2>
        <p className='text-gray-600 mb-4'>Add some products to your Cart to see them here.</p>
        <Link to="/" className='inline-block bg-zinc-200 px-6 py-2 rounded-lg hover:bg-zinc-300'>Continue Shopping</Link>
       </div>
  </div>
  }

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2 className='text-2xl font-bold mb-8 text-center md:text-left'>Shopping Cart</h2>
      
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
        
        {/* Cart Items */}
        <div className='lg:col-span-2 shadow-md p-4 rounded-md bg-white space-y-4'>
          {cartItems.map((item)=>(
            <div 
              key={item.id} 
              className='flex flex-col sm:flex-row items-center sm:items-start gap-4 py-4 border-b'
            >
              {/* Product Image */}
              <Link to={`/product/${item.id}`} className='flex-shrink-0'>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded mx-auto sm:mx-0'
                />
              </Link>

              {/* Product Info */}
              <div className='flex-1 text-center sm:text-left'>
                <Link to={`/product/${item.id}`} className='font-semibold hover:text-lime-600 block'>
                  {item.title}
                </Link>
                <p className='text-gray-600'>${item.price}</p>

                {/* Quantity & Remove */}
                <div className='flex justify-center sm:justify-start items-center gap-2 mt-2 flex-wrap'>
                  <button 
                    className='p-1 rounded-full hover:bg-gray-200'
                    onClick={()=> dispatch(updateQuantity({
                      id: item.id, 
                      quantity: Math.max(0, item.quantity -1)
                    }))}
                  >
                    <Minus size={16}/>
                  </button>

                  <span className='min-w-[20px] text-center'>{item.quantity}</span>

                  <button 
                    className='p-1 rounded-full hover:bg-gray-200'
                    onClick={()=> dispatch(updateQuantity({
                      id: item.id, 
                      quantity: item.quantity + 1
                    }))}
                  >
                    <Plus size={16}/>
                  </button>

                  <button 
                    className='ml-2 text-red-500 hover:text-red-700'
                    onClick={()=> dispatch(removeFromCart(item.id))}
                  >
                    <Trash2 size={20}/>
                  </button>
                </div>
              </div>

              {/* Price (on right in desktop, below in mobile) */}
              <div className='text-center sm:text-right mt-2 sm:mt-0'>
                <p className='text-gray-500 text-sm'>Price</p>
                <p className='font-bold'>
                  ${(item.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className='lg:col-span-1'>
          <div className='shadow-md p-6 rounded-md bg-white'>
            <h3 className='text-xl font-bold mb-4 text-center md:text-left'>Order Summary</h3>
            <div className='space-y-2 mb-4'>
              <div className='flex justify-between'>
                <span>Sub Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className='flex justify-between'>
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <div className='border-t pt-2 font-bold flex justify-between'>
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            <button className='w-full bg-zinc-200 px-6 py-3 cursor-pointer rounded-lg hover:bg-lime-300 transition'>
              Proceed To Checkout
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default CartPage
