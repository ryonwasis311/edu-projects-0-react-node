import React, { Fragment, useState, useRef } from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { createProduct } from "../services/ProductService";
import { add } from "lodash";

const ProductCreate = () => {
  // const [id, setId] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [error, setError] = useState("");
  const iconRef = useRef(null);
  const [preview, setPreview] = useState("");

  // const {
  const [title, setTitle] = useState("");
  const [dragging, setDragging] = useState(false);
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  // const saveProduct = (data) => {
  //   createProduct({ title, description, price, image });
  //   setTitle(data.title);
  //   setImage(data.image);
  //   setDescription(data.description);
  //   setPrice(data.price);
  // };

  const [images, setImages] = useState([]);
  
  const maxNumber = 69;

  const onChange_img = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList);
    console.log(addUpdateIndex);
    setImages(imageList);
    // setPreview(URL.createObjectURL(images));
    // setPreview(URL.createObjectURL(imageList));
    // console(URL.createObjectURL(image));
    // setDragging(false);
    
    // validateFile(imageList);
    
  };

  const handleSubmit =  (event) => {
    event.preventDefault();
   
    console.log(images[0]);

   
    if (images[0]) {
      console.log("asdf");
      console.log(images[0]);
      const formData = new FormData();
      formData.append("image", images[0]);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);

      createProduct(formData);
      //
    }
  };

  // const handleDrop = (event) => {
  //   // event.preventDefault();
  //   setDragging(false);
  //   const file = event.dataTransfer.files[0];
  //   setPreview(URL.createObjectURL(file));
  //   setSelectedFile(file);
  //   validateFile(file);
  // };
  // const validateFile = (file) => {
    
  //       setSelectedFile(file);
  //       setPreview(URL.createObjectURL(file));
  //       setError("");
  // };

  return (
 
    <Fragment>
      {
        <div className="log_container">
          <h1 className="large text-primary">Add Product</h1>
          <p className="lead">
            <i className="fas fa-user"></i>Write your product information
          </p>
          <form className="form" onSubmit={handleSubmit} enctype="multipart/form-data">
            <ImageUploading
              multiple
              value={images}
              onChange={onChange_img}
              maxNumber={maxNumber}
              dataURLKey="data_url"
            >
              {({
                imageList,
                onImageUpload,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                // write your building UI
                <div className="upload__image-wrapper">
                  <button
                    style={isDragging ? { color: "red" } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Select your products
                  </button>
                  &nbsp;
                  {imageList.map((image, index) => (
                    <div key={index} className="image-item">
                      <img src={image["data_url"]} alt="" width="100" />
                      <div className="image-item__btn-wrapper">
                        <button onClick={() => onImageUpdate(index)}>
                          Update
                        </button>
                        <button onClick={() => onImageRemove(index)}>
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>
            <div className="form-group">
              Enter title
              <input
                type="text"
                className="form-control"
                placeholder="Enter Title"
                id="title"
                value={title}
                onChange={onChangeTitle}
                name="title"
                required
              />
            </div>
            <div className="form-group">
              Enter price
              <input
                type="text"
                className="form-control"
                placeholder="Enter Price"
                id="price"
                value={price}
                onChange={onChangePrice}
                name="price"
                required
              />
            </div>
            Write Product Description...
            <textarea
              placeholder="Write Product Details.."
              // id="description"
              value={description}
              className="form-control"
              onChange={onChangeDescription}
              name="description"
              required
            />
            <button type="submit" className="btn btn-success">
              Create
            </button>
            <Link to="/productlist">Cancel</Link>
          </form>
        </div>
      }
    </Fragment>
  );
};

export default ProductCreate;
