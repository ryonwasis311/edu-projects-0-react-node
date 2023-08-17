import Leftsidebar from "./Leftsidebar";
import Footer from "../layout/Footer";

const Productlist = () => {
  return (
    <>
      <div className="Leftsidebar" style={{ display: "flex", height: "100vh" }}>
        <Leftsidebar />
        <h1>WELCOME TO QUICKPAY</h1>
      </div>
      <Footer />
    </>
  );
};
export default Productlist;
