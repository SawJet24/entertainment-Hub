import { createTheme, ThemeProvider } from "@material-ui/core";
import Pagination from "@material-ui/lab/Pagination";
import "./CustomPagination.css";

const darkTheme = createTheme({
    palette:{
        primary: {
            
          main: '#f72585',
          },
          
         type: 'dark',
    },
});
const CustomPagination = ({setPage, numOfPages = 10}) => {
    // Scroll to top when page changes
    const handlePageChange = (page) => {
       setPage(page);
        window.scroll(0,0);
    };

    return (
        
        <div className="pagination">
            <ThemeProvider theme={darkTheme}>
            <Pagination 
            count = {numOfPages}
            onChange={(e) => handlePageChange(e.target.textContent)} 
            hideNextButton
            hidePrevButton
            color="primary"
            />
            </ThemeProvider>
            </div>
        
        
        
    );
};

export default CustomPagination;
