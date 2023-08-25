import { Fragment } from "react";
import React, { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { getProduct } from "../services/ProductService";
const UserPage = () => {
  const initalState = {
    title: "",
    description: "",
    image: "",
    price: "",
    owner: "",
    _id: "",
  };

  const [products, setProducts] = useState([]);
  const [reload, setReload] = useState(true);

  useEffect(() => {
    if (reload) {
      getProduct().then((res) => {
        setProducts(res.data);
        setReload(false);
      });
    }
  }, [reload]);

  return (
    <>
      <Fragment>{
        products.map((product,key)=>(
        <div className="container"  >
          <div className="productslist" key={key}>
            <Card horizontal  style={{ width: "300px" }}>
            <img src={`http://localhost:8080/images/users/${product.image}`} alt="noImg" />
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
                <button className="btn btn-success ">Update</button>
                <button className="btn btn-primary ">Delete</button>
              </div>
            </Card>
          </div>
        </div>))}
      </Fragment>
      {/* <ProductCreate
        setReload={setReload}
        newmodal={newmodal}
        setNewModal={setNewModal}
        inputs={inputs}
        selectedProduct={selectedProduct}
        handleChange={handleChange}
      />
      <ProductUpdate
        setReload={setReload}
        modal={modal}
        setModal={setModal}
        selectedProduct={selectedProduct}
        handleChange={handleChange}
      /> */}
    </>
  );
};
export default UserPage;
