'use client'
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OrderForm from "./components/OrderForm";
import ProductCatalog from "./components/ProductCAtalog";
import Testimonials from "./components/Testimonials";


export default function Home() {
  return (
    <div >
      <main >
       <Header/>
       <Hero/>
       <ProductCatalog/>
       <OrderForm/>
       <Testimonials/>
       <Footer/>
      </main>
     
    </div>
  );
}
