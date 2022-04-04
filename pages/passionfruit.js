import Header from "../components/header";
import MobileFooter from "../components/mobileFooter";
import Footer from "../components/footer";
import PassionfruitContainer from "../components/PassionFruitePage/passionfruitcontainer";

export default function Home() {
  return (
    <>
      <Header />
      <PassionfruitContainer />
      <Footer />
      <MobileFooter />
    </>
  );
}
