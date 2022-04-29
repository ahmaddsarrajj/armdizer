import React from "react";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import CalltoActionSection from "./../components/homeComponents/CalltoActionSection";
import Footer from "./../components/Footer";
import NewHeader from "./../components/newHeader";

const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div style={{margin: "0px"}}>
      
      <NewHeader/>
      <CalltoActionSection />
      <ContactInfo />
      <ShopSection keyword={keyword} pagenumber={pagenumber} />
      <Footer />
    </div>
  );
};

export default HomeScreen;
