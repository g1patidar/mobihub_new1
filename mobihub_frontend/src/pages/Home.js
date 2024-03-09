
import Carousel from "./components/Carousel";
import BestSellers from "./components/BestSellers/BestSellers";
import Marquee from "./components/Marquee";
import Services from "./components/Services";
import MoreProduct from "./components/MoreProduct";
import MoreItemsList from "./components/MoreItems/MoreItemsList";
import Onetwo from "./components/Onetwo/Onetwo";


const Home = () => {

    return (
        <>
            <Carousel/>
            <br/>

            <section className="best_seller">
                <>
                <BestSellers/>
                <br/>
                </>
            </section>
            <br/>

            <Marquee/>
            <br/>

            <MoreProduct/>

            <br/>
            <br/>
            <br/>
            <br/>
            
            <MoreItemsList/>
            <br/>
            <br/>
            <br/>
            <br/>
            <Onetwo/>
            
            <Services/>
        </>
    )
}

export default Home;