import { mapImageResources, search } from '../lib/cloudinary';
import { BannerHero } from '../components/BannerHero';
import { Blog } from '../components/Blog';
import { Contato } from '../components/Contato';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';
import Rodape from '../components/Rodape';

export default function Home({images}) {

  return (
    <>
      <Header />
      <BannerHero />
      <Galeria images={images} />
      <Blog />
      <Contato />
      <Rodape />
    </>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
    }
  };
}
