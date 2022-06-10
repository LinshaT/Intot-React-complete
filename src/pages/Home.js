import React from "react";
import Header from "./Header";
import Company from "./Company";
import Portfoliyo from "./Portfoliyo";
import Team from "./Team";
import Footer from "./Footer";

function Home(){
    return(
        <div>
           <Header/>
           <Company/>
           <Portfoliyo/>
           <Team/>
           <Footer/>
        </div>
    )
}
export default Home;