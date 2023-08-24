import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";
import { connect } from "react-redux";
import { updateProduct } from "../slices/products";

const ProductUpdate = () => {
  // const [id, setId] = useState(null);
  const [title, setTitle] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [submitted, setSubmitted] = useState(false);

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDescription = (e) => {
    setDescription(e.target.value);
  };
  const onChangePrice = (e) => {
    setPrice(e.target.value);
  };

  const saveProduct = (data) => {
    updateProduct({ title, description, price });
    // setId(data.id);
    setTitle(data.title);
    setDescription(data.description);
    setPrice(data.price);
    setSubmitted(true);
  };
  const newProduct = () => {
    // setId(null);
    setTitle("");
    setDescription("");
    setPrice("");
    setSubmitted(true);
  };

 
  const [images, setImages] = React.useState([]);
  const maxNumber = 69;

  const onChange_img = (imageList, addUpdateIndex) => {
    // data for submit
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
  };

  return (
    <Fragment>
      {
        <div className="log_container">
          <h1 className="large text-primary">Update Product</h1>
          <p className="lead">
            <i className="fas fa-user"></i>Write your product information
          </p>
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
              onImageRemoveAll,
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
                  Update your avatar
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
          <form className="form">
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
                value={price }
                onChange={onChangePrice}
                name="price"
                required
              />
            </div>
            Write Product Description...
            <textarea
              placeholder="Write Product Details.."
              // id="description"
              value={description }
              className="form-control"
              onChange={onChangeDescription}
              name="description"
              required
            />
            <button onClick={updateProduct} className="btn btn-success">
              Update
            </button>
            <Link to="/productlist">Cancel</Link>
          </form>
        </div>
      }
    </Fragment>
  );
};

export default connect(null, { updateProduct })(ProductUpdate);
