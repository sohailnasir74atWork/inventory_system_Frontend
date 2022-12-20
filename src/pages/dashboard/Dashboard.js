import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ProductList from '../../components/product/productList/ProductList'
import useRecirectOnLogOut from '../../customHook/useRecirectOnLogOut'
import { selectLogIn } from '../../Redux/feature/auth/authSlice'
import { getProduct } from '../../Redux/feature/PRODUCTS/productSlice'



const Dashboard = () => {
  const dispatch = useDispatch()
  const isLogedin = useSelector(selectLogIn)
  const {products, isLoading, isError, message} = useSelector((state)=> state.product)
  useRecirectOnLogOut("/login")
  useEffect(()=>{
    if(isLogedin===true) {dispatch(getProduct())}
    if(isError) console.log(message);
  }, [isLogedin])
  return (
    
    <div>
      
      
      <ProductList products={products} isLoading={isLoading}/>
    </div>
  )
}

export default Dashboard