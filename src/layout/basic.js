import { StrictMode } from "react";
import { Outlet } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";



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

export default Basic;