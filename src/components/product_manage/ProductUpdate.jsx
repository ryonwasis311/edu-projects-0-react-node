import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ImageUploading from "react-images-uploading";

const ProductUpdate = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    price: "",
  });

  const { title, description, price } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
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
      <div className="log_container">
        <h1 className="large text-primary">Add Product</h1>
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
                      <button  onClick={() => onImageRemove(index)}>
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </ImageUploading>
        <form className="form" onSubmit={(e) => onSubmit(e)}>
          <div className="form-group">
            Enter title
            <input
              type="text"
              placeholder="Enter Title"
              name="title"
              value={title}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          <div className="form-group">
            Enter price
            <input
              type="text"
              placeholder="Enter Price"
              name="price"
              value={price}
              onChange={(e) => onChange(e)}
              required
            />
          </div>
          Write Product Description...
          <textarea
            id="description"
            name="description"
            placeholder="Write Product Details.."
            value={description}
            onChange={(e) => onChange(e)}
            required
          />
          <input
            type="submit"
            className="btn btn-primary p-lg-20"
            value="Update"
          />
           <Link to="/productlist">Cancel</Link>
        </form>
        
      </div>
    </Fragment>
  );
};

export default ProductUpdate;
