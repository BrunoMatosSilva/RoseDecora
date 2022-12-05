import { BannerHero } from '../components/BannerHero';
import { Blog } from '../components/Blog';
import { Contato } from '../components/Contato';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <BannerHero />
      <Galeria />
      <Blog />
      <Contato />
    </>
  );
}
