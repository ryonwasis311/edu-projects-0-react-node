import axios from "axios";
// import poducts from "../slices/products";

const API_URL = "http://localhost:8080/api/products";

export const createProduct = async (formData) => {
  const token = localStorage.getItem("auth_token");
  console.log("formdata",formData);
  try{
    
    const res = await axios.post("http://localhost:8080/api/products/create", formData, {
      headers: { "x-access-token": token }
    });
    // return res.data;
    console.log(res.data);
  } catch(err){
    throw err;
  }

};

export const updateProduct = async ({
  name,
  description,
  image,
  price,
  id,
}) => {
  const token = localStorage.getItem("auth_token");
  return await axios.put(
    `${API_URL}/update/${id}`,
    {
      name,
      description,
      image,
      price,
      id,
    },
    {
      headers: {
        "x-access-token": token,
      },
    }
  );
};

export const deleteProduct = async (id) => {

  const token = localStorage.getItem("auth_token");
  try{
    const res = await axios.delete(API_URL + `/${id}`, {
      headers: { "x-access-token": token },
    });
    return res;
  } catch(err){
    throw err;
  }
};

export const getProduct = () => {
  const token = localStorage.getItem("auth_token");
  return axios.get(API_URL + "/", {
    headers: {
      "x-access-token": token,
    },
  });
};
