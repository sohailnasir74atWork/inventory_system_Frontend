import React, { useState } from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Loader from '../../components/loader/Loader'
import ProductForm from '../../components/productForm/ProductForm'
import { createProduct, selectIsError, selectIsLoading, selectIsSuccess } from '../../Redux/feature/PRODUCTS/productSlice'



const initialState = {
    name:"", category: "", quantity: "", price:""
}

const AdingProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [product, setProduct]= useState(initialState)
    const [image, setImage]= useState("")
    const [showImage, setShowImage]= useState(null)
    const [description, setDescription]= useState("")
    const isLoading = useSelector(selectIsLoading)
    // const isError = useSelector(selectIsError)
    // const isSuccess = useSelector(selectIsSuccess)
    const {name, category, quantity, price} = product
///////////////////////////////////input changes //////////////////////////////////////////////////
const hanleInputChange = async(e)=>{
    const {name, value} = e.target
    setProduct({...product, [name]: value })
}
///////////////////////////////////input changes //////////////////////////////////////////////////
const hanleInputImageChange = async(e)=>{
    
    setImage(e.target.files[0])
    setShowImage(URL.createObjectURL(e.target.files[0]))}
///////////////////////////////////sku gen //////////////////////////////////////////////////
const generateSKU = (category)=>{
    const words = category.slice(0,3).toUpperCase()
    const number = new Date()
    const SKU = words + - + number
    return SKU
}
///////////////////////////////////SAVE PRODUCT //////////////////////////////////////////////////
const saveProduct= async(e)=>{
    e.preventDefault()
    const formData = new FormData()
    formData.append("name", name)
    formData.append("price", price)  
    formData.append("category", category)  
    formData.append("quantity", quantity)  
    formData.append("image", image)  
    formData.append("description", description)  
    formData.append("sku", generateSKU(category)) 
    console.log(...formData);
    await dispatch(createProduct(formData)) 
    
    navigate("/dashboard")
}
  return (

    <div>
        {isLoading && <Loader/>}
        <h3 className='--mt'>Add a New Product</h3>
        <ProductForm
        // setShowImage={setShowImage}
        product={product}
        hanleInputChange={hanleInputChange}
        image={image}
        showImage={showImage}
        description={description}
        hanleInputImageChange={hanleInputImageChange}
        // generateSKU={generateSKU}
        saveProduct={saveProduct}
        setDescription={setDescription}

        />
    </div>
  )
}

export default AdingProduct