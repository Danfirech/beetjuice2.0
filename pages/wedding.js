import Header from '../components/header';
import Weddingpricing from '../components/WeddingCorporatePage/weddingpricing';
import Footer from '../components/footer';
import MobileFooter from '../components/mobileFooter';
import Video from '../components/video';
import Songs from '../components/WeddingCorporatePage/weddingSongs';
import FAQ from '../components/WeddingCorporatePage/faq';

export default function Home() {
  return (
    <>
      <Header />
      <Weddingpricing />
      <Songs />
      <FAQ />
      <Footer />
      <MobileFooter />
    </>
  );
}
