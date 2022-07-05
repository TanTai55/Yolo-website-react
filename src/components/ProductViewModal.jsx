import React, {useState, useEffect} from 'react'

import { useSelector, useDispatch } from 'react-redux'

import ProductView from './ProductView'

import { remove } from '../redux/product-modal/productModalSlice'

import Button from './Button'

import productData from '../assets/fake-data/products'

import { AiOutlineClose } from 'react-icons/ai'



const ProductViewModal = () => {

  const productSlug = useSelector((state) => state.productModal.value)

  const dispatch = useDispatch()

  const [product, setproduct] = useState(undefined);
 
  useEffect(() => {
    setproduct (productData.getProductBySlug(productSlug))
  }, [productSlug])

  return (
    // Khi nhấp vào chọn mua
    <div className={`product-view__modal ${product === undefined ? '' : 'active'}`}>
      <div className="product-view__modal__content">
        <ProductView product={product}/>
        <div className="product-view__modal__content__close">
          <Button size="sm" onClick={() => dispatch(remove())}><AiOutlineClose/></Button>
        </div>
      </div>
    </div>
  )
}

export default ProductViewModal