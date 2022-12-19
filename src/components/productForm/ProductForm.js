import React from 'react'
import "./productForm.scss"
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import Cards from '../cards/Cards';

const ProductForm = ({
    product,
    hanleInputChange,
    
    showImage,
    description,
    setDescription,
    hanleInputImageChange,
    saveProduct

    
}) => {
  return (
    <div className="add-product">
    <Cards classCard={"card"}>
      <form onSubmit={saveProduct}>
        <Cards classCard={"group"}>
          <label>Product Image</label>
          <code className="--color-dark">
            Supported Formats: jpg, jpeg, png
          </code>
          <input
            type="file"
            name="image"
            onChange={(e) => hanleInputImageChange(e)}
          />

          {showImage != null ? (
            <div className="image-preview">
              <img src={showImage} alt="product" />
            </div>
          ) : (
            <p>No image set for this poduct.</p>
          )}
        </Cards>
        <label>Product Name:</label>
        <input
          type="text"
          placeholder="Product name"
          name="name"
          value={product?.name}
          onChange={hanleInputChange}
        />

        <label>Product Category:</label>
        <input
          type="text"
          placeholder="Product Category"
          name="category"
          value={product?.category}
          onChange={hanleInputChange}
        />

        <label>Product Price:</label>
        <input
          type="text"
          placeholder="Product Price"
          name="price"
          value={product?.price}
          onChange={hanleInputChange}
        />

        <label>Product Quantity:</label>
        <input
          type="text"
          placeholder="Product Quantity"
          name="quantity"
          value={product?.quantity}
          onChange={hanleInputChange}
        />

        <label>Product Description:</label>
        <ReactQuill
          theme="snow"
          value={description}
          onChange={setDescription}
          modules={ProductForm.modules}
          formats={ProductForm.formats}
        />

        <div className="--my">
          <button type="submit" className="--btn --btn-primary">
            Save Product
          </button>
        </div>
      </form>
    </Cards>
  </div>
);

}
ProductForm.modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }, { font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ align: [] }],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["clean"],
    ],
  };
  ProductForm.formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "color",
    "background",
    "list",
    "bullet",
    "indent",
    "link",
    "video",
    "image",
    "code-block",
    "align",
  ];
  
export default ProductForm