import { Fragment } from "react";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { getProduct } from "../services/ProductService";
import ProductUpdate from "./ProductUpdate";
import { connect } from "react-redux";
import { useStepContext } from "@mui/material";
// import {deleteProduct } from "../slices/products";
import { deleteProduct } from "../services/ProductService";

const UserPage = (props) => {
  const initalState = {
    title: "",
    description: "",
    image: "",
    price: "",
    owner: "",
    _id: "",
  };
  const [selectedProduct, setSelectedProduct] = useState(initalState);
  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);
  const [modal, setModal] = useState(false);
  const [inputs, setInputs]= useState(initalState);
  const [show, setShow]=useState(false);
  
  useEffect(() => {
    if (reload) { 
      getProduct().then((res) => {
        setProducts(res.data);
        setReload(false);
      });
    }
  }, [reload]);

  const handleDelete =  (e,id) => {
    e.preventDefault();
    const __id = products[id].id;
    deleteProduct(__id);
    console.log(__id);

    setReload(true);
    e.preventDefault();

}

const showModal=(e)=>{
  console.log(show);
  setShow(true);
}

  const handleChange = (event) => {
    const title= event.currentTarget.title;
    const value = event.currentTarget.value;
    setInputs(values => ({ ...values, [title]: value }));
    setSelectedProduct(values => ({ ...values, [title]: value }))
}

  const handleUpdate = (product) => {
    setSelectedProduct(product);
    setModal(true);
    setReload(true);
  };

  
  return (
    <>
      <div className="productlist">
        <Fragment>
          {products.map((product, id) => (
            <div className="container">
              <div className="productslist" key={id}>
                <Card horizontal style={{ width: "300px" }}>
                  <img
                    src={`http://localhost:8080/images/users/${product.image}`}
                    alt="noImg"
                  />
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    <p>Title:</p>
                  </h2>
                  <h3 className="text-center">{product.title}</h3>
                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    <p>Description:</p>
                  </h2>
                  <h3 className="text-center">{product.description}</h3>

                  <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center">
                    <p>Price:</p>
                  </h2>
                  <h3 className="text-center">{product.price}</h3>

                  <div className="button-group">
                    <button className="btn btn-primary " onClick={e=>showModal()}>Update_{product.id}</button>
                    < ProductUpdate show={setShow} />
                    <button className="btn btn-primary " onClick={(e) =>handleDelete(e,id)}>Delete_{product.id}</button>
                  </div>
                </Card>
              </div>
            </div>
          ))}
        </Fragment>
      </div>
    </>
  );
   

};

export default connect(null, { deleteProduct })(UserPage);
