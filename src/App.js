import Header from './shared/Header';
import Footer from './shared/Footer';
import Banner from './components/Banner';
import Carousal from './components/Carousal';

function App() {
  return (
    <>
      <Header />
      <Banner />
      <Carousal title="Deals of the Day" />
      <Carousal title="Top Selling Products" />
      <Carousal title="Top Selling Categories" />
      <Carousal title="New Arrivals" />
      <Footer />
    </>
  );
}

export default App;
