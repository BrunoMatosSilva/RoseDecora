import { BannerHero } from '../components/BannerHero';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <BannerHero />
      <Galeria />
    </>
  );
}
