import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";



const Basic = () => {
    return (
        
            <StrictMode>
                <Header />
                <div >
                    <div >
                        <Outlet></Outlet>
                     </div>
                </div>
                
                <div> <Footer /> </div>
            </StrictMode>
    
    );
}

export default Basic;
