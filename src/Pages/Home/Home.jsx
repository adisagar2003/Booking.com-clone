import React from "react";
import Carousal from "../../Components/carousal/Carousal";
import MailList from "../../Components/email_list/MailList";
import Featured from "../../Components/features/Featured";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PropertyList from "../../Components/propertyLost/PropertyList";
import "./Home.css";
function Home() {
  return (
    <div className="home">
      <Navbar />
      <Header />
      <div className="home--container">
        <Featured />
        <h1 className="home__title">Browse by property type</h1>
        <PropertyList />
      </div>

      <MailList />
      <Footer />
    </div>
  );
}

export default Home;
