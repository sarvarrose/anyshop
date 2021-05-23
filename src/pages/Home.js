import Banner from '../components/Banner';
import Carousal from '../components/Carousal';
function Home() {
  return (
    <>
      <Banner />
      <Carousal title="Deals of the Day" />
      <Carousal title="Top Selling Products" />
      <Carousal title="Top Selling Categories" />
      <Carousal title="New Arrivals" />
    </>
  );
}

export default Home;
