import UserPage from "./UserPage";
import { HelmetProvider } from "react-helmet-async";
import ThemeProvider from "../../theme";
import {TableCell, Stack, TableRow} from '@mui/material';

const Productlist = () => {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider>
        <TableRow >  
          <TableCell component="th" scope="row" padding="5">
            <Stack direction="row" alignItems="center" spacing={2}>
              <UserPage />
            </Stack>
          </TableCell>
          </TableRow>
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
};
export default Productlist;
