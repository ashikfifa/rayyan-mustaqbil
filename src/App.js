import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {
  Navigation,
  Navigationfr,
  Home,
  Contact,
  Blog,
  Postphotography,
  Footer,
} from "./components";
import Typesofphoto from "./components/typesofphoto";
import Wintermarketing from "./components/Wintermarketing";
import Easyproductphoto from "./components/Easyproductphoto";
import Topshopify from "./components/Topshopify";
import Videoediting from "./components/Videoediting";
import Softbox from "./components/Softbox";
import Minimizebounce from "./components/Minimizebounce";
import Termsconditions from "./components/Termsconditions";
import Privacypolicy from "./components/Privacypolicy";
import ClothingPhoto from "./components/ClothingPhoto";
import CarPhoto from "./components/CarPhoto";
import ProductReselling from "./components/ProductReselling";
import FoodPhoto from "./components/FoodPhoto";
import InfluenceMarketing from "./components/InfluenceMarketing";
import ScrollToTop from "./components/ScrollToTop";
import Newyear from "./components/Newyear";
import Productphotography from "./components/Productphotography";
import Thankyou from "./components/Thankyou";
import NotFound from "./components/NotFound";
import AllBlogs from "./components/AllBlogs";
import EcomToBrand from "./components/EcomToBrand";
import ArtInteli from "./components/ArtInteli";
import AmazonImage from "./components/AmazonImage";
import PhotoStyle from "./components/PhotoStyle";
import PhotoStyle2 from "./components/PhotoStyle2";
import GraphicsDesign from "./components/GraphicsDesign";
import ReducingBounce from "./components/ReducingBounce";
import CreativeImageEdit from "./components/CreativeImageEdit";
import PhotoFact from "./components/PhotoFact";
import SrgbColorspace from "./components/SrgbColorspace";
import OutsourcePhoto from "./components/OutsourcePhoto";
import PostProduction from "./components/PostProduction";
import OurIntegration from "./components/OurIntegration";

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        {/* <Navigation /> */}
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/contact-us" exact component={() => <Contact />} />
          <Route path="/blog" exact component={() => <Blog />} />
          <Route path="/footer" exact component={() => <Footer />} />
          <Route
            path="/5-important-photography-tips-for-beginners"
            exact
            component={() => <Postphotography />}
          />
          <Route
            path="/types-of-photography-which-one-drive-your-inner-passion-most"
            exact
            component={() => <Typesofphoto />}
          />
          <Route
            path="/7-creative-winter-marketing-ideas-for-e-commerce-businesses"
            exact
            component={() => <Wintermarketing />}
          />
          <Route
            path="/our-integration"
            exact
            component={() => <OurIntegration />}
          />
          <Route
            path="/easy-product-photography-solutions-for-small-business"
            exact
            component={() => <Easyproductphoto />}
          />
          <Route
            path="/top-shopify-marketing-strategy-for-sellers"
            exact
            component={() => <Topshopify />}
          />
          <Route
            path="/5-interesting-video-editing-facts"
            exact
            component={() => <Videoediting />}
          />
          <Route
            path="/minimize-your-bounce-rate"
            exact
            component={() => <Minimizebounce />}
          />
          <Route
            path="/how-to-make-a-softbox-for-product-photography"
            exact
            component={() => <Softbox />}
          />
          <Route
            path="/terms-and-conditions"
            exact
            component={() => <Termsconditions />}
          />
          <Route
            path="/privacy-policy"
            exact
            component={() => <Privacypolicy />}
          />
          <Route
            path="/top-new-year-resolution-for-your-online-store"
            exact
            component={() => <Newyear />}
          />
          <Route
            path="/product-photography-how-to-take-photos-for-your-e-commerce-business"
            exact
            component={() => <Productphotography />}
          />
          <Route
            path="/a-beginners-how-to-guide-for-clothing-photography"
            exact
            component={() => <ClothingPhoto />}
          />
          <Route
            path="/car-photography-a-beginners-how-to-guide-and-tips"
            exact
            component={() => <CarPhoto />}
          />
          <Route
            path="/product-reselling-photography-why-and-how-to-do-it"
            exact
            component={() => <ProductReselling />}
          />
          <Route
            path="/top-8-food-photography-tips-for-beginners"
            exact
            component={() => <FoodPhoto />}
          />
          <Route
            path="/influencer-marketing-how-to-find-the-right-one"
            exact
            component={() => <InfluenceMarketing />}
          />
          <Route path="/thank-you/*" exact component={() => <Thankyou />} />
          <Route path="/all-blogs" exact component={() => <AllBlogs />} />
          <Route
            path="/how-to-turn-your-e-commerce-business-into-a-brand"
            exact
            component={() => <EcomToBrand />}
          />
          <Route
            path="/artificial-intelligence-is-used-in-image-editing"
            exact
            component={() => <ArtInteli />}
          />
          <Route
            path="/an-introduction-to-amazon-image-guidelines"
            exact
            component={() => <AmazonImage />}
          />
          <Route
            path="/photography-style-guide"
            exact
            component={() => <PhotoStyle />}
          />
          <Route
            path="/photography-style-guide2"
            exact
            component={() => <PhotoStyle2 />}
          />
          <Route
            path="/why-post-production-services-are-important-for-e-commerce-businesses"
            exact
            component={() => <PostProduction />}
          />
          <Route
            path="/why-you-should-outsource-your-image-editing"
            exact
            component={() => <OutsourcePhoto />}
          />
          <Route
            path="/srgb-colorspace-the-journey-from-introduction-to-importance"
            exact
            component={() => <SrgbColorspace />}
          />
          <Route
            path="/tips-for-reducing-bounce-rate-and-increasing-conversion"
            exact
            component={() => <ReducingBounce />}
          />
          <Route
            path="/why-is-graphic-design-important-for-e-commerce-business"
            exact
            component={() => <GraphicsDesign />}
          />
          <Route
            path="/importance-of-creative-image-editing-for-product-photos"
            exact
            component={() => <CreativeImageEdit />}
          />
          <Route
            path="/5-interesting-photo-editing-facts"
            exact
            component={() => <PhotoFact />}
          />
          <Route path="" exact component={NotFound} />
        </Switch>
        {/* <Footer/> */}
      </div>
    </Router>
  );
}

export default App;
