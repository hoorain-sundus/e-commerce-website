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
        <Link to="/" className='text-primary font-semibold hover:text-primary-hover hover:underline'>Return to Home</Link>
      </div>
    </div>
  }


  return (
    <div className='container mx-auto px-4 py-8'>
      <div>
        <Link to="/" className='mb-8 inline-block bg-primary text-on-primary font-semibold p-2 rounded-md hover:bg-primary-hover active:bg-footer transition-colors'>
        <i className="ri-arrow-left-line text-xl p-2"></i>
        Back to Products</Link>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
          <div className="shadow-card border border-border p-6 rounded bg-surface-tint w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto">
  <img 
    src={product.image} 
    alt={product.title} 
    className="mx-auto w-40 h-40 md:w-60 md:h-60 object-contain"
  />
</div>

          <div>
            <h1 className='text-3xl font-bold text-text mb-4'>{product.title}</h1>
            <p className='text-text-muted mb-6'>{product.description}</p>
            <div className='mb-6'>
              <span className='text-3xl font-bold text-primary'>${product.price}</span>
            </div>
            <div className='mb-6'>
              <h3 className='font-semibold text-text mb-2'>Category</h3>
              <span className='inline-block bg-primary-soft text-primary border border-primary-soft-2 rounded-full text-sm px-3 py-1'>{product.category}</span>
                <button className='w-full md:w-auto mt-4 bg-accent text-text font-semibold cursor-pointer rounded-md px-8 py-3 flex items-center justify-center gap-2
            hover:bg-accent-hover active:brightness-95 transition-colors' onClick={()=> dispatch(addToCart(product))}><ShoppingCart/>
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