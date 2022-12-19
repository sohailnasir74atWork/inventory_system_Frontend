import React, { useState } from 'react'
import  {useDispatch, useSelector}  from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ProductForm from '../../components/productForm/productForm'
import { createNewProduct } from '../../Redux/feature/auth/services/productService'
import { selectIsLoading } from '../../Redux/feature/PRODUCTS/productSlice'



const initialState = {
    name:"", catagory: "", quantity: "", price:""
}

const AdingProduct = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [product, setProduct]= useState(initialState)
    const [image, setImage]= useState(null)
    const [showImage, setShowImage]= useState("")
    const [description, setDescription]= useState("")
    const isLoading = useSelector(selectIsLoading)
    const {name, catagory, quantity, price} = product
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
const generateSKU = async(catagory)=>{
    const words = catagory.slice(0,3).toUpperCase()
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
    formData.append("catagory", catagory)  
    formData.append("quantity", quantity)  
    formData.append("image", image)  
    formData.append("description", description)  
    formData.append("sku", generateSKU(catagory)) 
    console.log(...formData);
    await dispatch(createNewProduct)  
    navigate("/dashboard")   
}
  return (
    <div>
        <h3>Add i New Product</h3>
        <ProductForm
        product={product}
        hanleInputChange={hanleInputChange}
        image={image}
        showImage={showImage}
        description={description}
        hanleInputImageChange={hanleInputImageChange}
        generateSKU={generateSKU}
        saveProduct={saveProduct}

        />
    </div>
  )
}

export default AdingProduct