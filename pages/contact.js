import Header from "../components/header";
import Footer from "../components/footer";
import MobileFooter from "../components/mobileFooter";
import ContactForm from "../components/ContactPage/ContactContainer";

export default function Home() {
  return (
    <>
      <Header />
      <ContactForm />
      <Footer />
      <MobileFooter />
    </>
  );
}
