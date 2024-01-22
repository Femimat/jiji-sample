import Header from "./Components/Header"
import Banner from "./Components/Banner"
import SideMenu from "./Components/SideMenu"
import MarketingBanner from "./Components/MarketingBanner"
import Table from "./Components/Table"
import Footer from "./Components/Footer"

export function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SideMenu />
      <MarketingBanner />
      <Table />
      <Footer />
    </div>
  );
}
