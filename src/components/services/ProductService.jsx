import http from "../../http-common";

const getAll = () => {
  return http.get("/products");
};

const get = id => {
  return http.get(`/products/${id}`);
};

const create = data => {
  return http.post("/products/create", data);
};

const update = (id, data) => {
  return http.put(`/products/${id}`, data);
};

const remove = id => {
  return http.delete(`/products/${id}`);
};

const removeAll = () => {
  return http.delete(`/products`);
};

const findByTitle = title => {
  return http.get(`/tutorials?title=${title}`);
};

const ProductService = {
  getAll,
  get,
  create,
  update,
  remove,
  removeAll,
  findByTitle
};

export default ProductService;