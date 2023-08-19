import UserPage from "./UserPage";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "../../theme";
const Productlist = () => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
              <UserPage />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
};
export default Productlist;
