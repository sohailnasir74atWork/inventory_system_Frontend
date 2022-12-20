import React from 'react'
import { SpiningImg } from '../../loader/Loader'
import "./productList.scss"
import { AiOutlineEye } from "react-icons/ai";
import { FaEdit, FaTrashAlt } from "react-icons/fa";

const ProductList = ({isLoading, products}) => {
    const shortenText = (text, n) => {
        if (text.length > n) {
          const shortenedText = text.substring(0, n).concat("...");
          return shortenedText;
        }
        return text;
      };

  return (
    <div className='product-list'>
        <hr/>
    <div className='table'>
        <div className='--flex-between --flex-dir-column'>
            <span>
                <h3>Inverntory Items</h3>
            </span>
            <span>
                <h3>Search Product</h3>
            </span>
        </div>
        {isLoading && <SpiningImg/>}
        <div  className='table'>
        {!isLoading && products.length===0 ? (<p> --No Product Found</p>) : 
       ( <table>
            <thead>
                <tr>
                    
                <th> s/n</th>
                <th> Name</th>
                <th> Category</th>
                <th> Price</th>
                <th> Quantity</th>
                <th> Value</th>
                <th> Action</th>
                </tr>
            </thead>
            <tbody>
                {products.map((item, index)=>{
                    const {_id, name,category, quantity, value, price } = item
                    return (<tr key={_id}>
                        <td>{index + 1}</td>
                        <td>{shortenText(name, 16)}</td>
                        <td>{category}</td>
                        <td>{quantity}</td>
                        <td>{price}</td>
                        <td>{"$"}{price*quantity}</td>
                        <td className='icons'>
                            <span>
                            <AiOutlineEye size={25} color={"purple"}/>
                            </span>
                            <span>
                            <FaEdit size={20} color={"green"}/>
                            </span>
                            <span>
                            <FaTrashAlt size={20} color={"red"}/>
                            </span>
                    </td>
                        
                    </tr>)
                })}
            </tbody>
        </table>)}
        </div>
    
</div>
</div>

    
  )
}

export default ProductList