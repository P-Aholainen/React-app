import React from 'react';

//Luodaan Navbar 
const Navbar = () => {
    return(
        /*Annetaan lisäksi Bootstrap CSS -määritykset */
       <nav className="navbar sticky-top navbar-light bg-dark text-light">
            {/*Navbar tekstit */}
        <span className="navbar">EaaS | Earworm as a Service</span>
       
       </nav>
    );
};
/*Exportataan Navbar */
export default Navbar;
