import Leftsidebar from "./Leftsidebar";
import Footer from "../layout/Footer";
import Products from "./products";


const Productlist = () => {
  return (
    <>
      <div className="Leftsidebar" style={{ display: "flex", height: "100vh" }}>
        <Leftsidebar />
        <Products />
      </div>
      <Footer />
    </>
  );
};
export default Productlist;
