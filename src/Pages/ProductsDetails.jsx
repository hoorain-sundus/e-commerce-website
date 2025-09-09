import { ShoppingCart } from 'lucide-react'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom'
import { addToCart } from '../Features/cart/cartSlice';

function ProductsDetails() {
  const {id} = useParams();

  const dispatch = useDispatch();
  const product =  useSelector((state)=> state.product.items.find((p)=> p.id === parseInt(id)))

  if(!product){
    return  <div className='container mx-auto px-4 py-8'>
      <div className='text-center'>
        <h2 className='text-2xl font-bold mb-4'>Product Not Found</h2>
        <Link to="/" className='text-blue-500 hover:text-blue-600'>Return to Home</Link>
      </div>
    </div>
  }


  return (
    <div className='container mx-auto px-4 py-8'>
      <div>
        <Link to="/" className='mb-8 inline-block bg-lime-400 p-2 rounded-md hover:bg-lime-500'>
        <i className="ri-arrow-left-line text-xl p-2"></i>
        Back to Products</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className="shadow-md p-6 rounded bg-zinc-100 w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
  <img 
    src={product.image} 
    alt={product.title} 
    className="mx-auto w-40 h-40 md:w-60 md:h-60 object-contain"
  />
</div>

          <div>
            <h1 className='text-3xl font-bold mb-4'>{product.title}</h1>
            <p className='text-gray-600 mb-6'>{product.description}</p>
            <div className='mb-6'>
              <span className='text-3xl font-bold'>${product.price}</span>
            </div>
            <div className='mb-6'>
              <h3 className='font-semibold mb-2'>Category</h3>
              <span className='inline-block bg-lime-300 text-zinc-600 rounded-full text-sm px-3 py-1'>{product.category}</span>
                <button className='w-full md:w-auto mt-4 bg-lime-400 cursor-pointer rounded-md px-8 py-3 flex items-center justify-center gap-2
            hover:bg-lime-500' onClick={()=> dispatch(addToCart(product))}><ShoppingCart/>
              Add to Cart</button>
            </div>
            </div>
          
        </div>
      </div>
    </div>
  )
}
// console.log(addToCart())
export default ProductsDetails