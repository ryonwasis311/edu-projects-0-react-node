import axios from "axios";

const API_URL = "http://localhost:8080/api/products";

export const createProduct = (formData) => {
  const token = localStorage.getItem("auth_token");
  return axios({
    method: "post",
    url: API_URL + "create",
    data: formData,
    headers: { "x-access-token": token },
  })
    .then(function (reposnse) {})
    .catch(function (response) {});
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
  return await axios.delete(`${API_URL}/${id}`, {
    headers: {
      "x-access-token": token,
    },
  });
};

export const getProduct = () => {
  const token = localStorage.getItem("auth_token");
  return axios.get(API_URL + "/", {
    headers: {
      "x-access-token": token,
    },
  });
};
