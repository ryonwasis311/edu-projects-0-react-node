import UserPage from "./UserPage";
import Leftsidebar from "./Leftsidebar";
const Productlist = () => {
  return (
    <>
      <div className="d-flex">
        <Leftsidebar/>
        <UserPage />
      </div>
    </>
  );
};
export default Productlist;
