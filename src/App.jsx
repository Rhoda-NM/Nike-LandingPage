import { CustomerReviews, Hero, Services, SpecialOffer, Subscribe, SuperQuality
, Footer, PopularProducts
 } from "./sections";
import Nav from "./components/Nav";

const App = ()=> {
    return (
      <main className="relative">
        <Nav></Nav> 
        <section className="xl:padding-1 wide:padding-r padding:b" >
          <Hero></Hero>
        </section>
        <section className="padding">
          <PopularProducts></PopularProducts>
        </section>
        <section className="padding">
          <SuperQuality></SuperQuality>
        </section>
        <section className="padding-x">
          <Services></Services>
        </section>
        <section className="padding">
          <SpecialOffer></SpecialOffer>
        </section>
        <section className="bg-pale-blue padding">
          <CustomerReviews></CustomerReviews>
        </section>
        <section className="padding-x sm:py-32 py-16 w-full">
          <Subscribe></Subscribe> 
        </section>
        <section className="bg-black padding-x padding-t pb-8">
          <Footer></Footer> 
        </section>
      </main>
    );
}

export default App;
