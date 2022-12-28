import { mapImageResources, search } from '../lib/cloudinary';
import { BannerHero } from '../components/BannerHero';
import { Blog } from '../components/Blog';
import { Contato } from '../components/Contato';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';

export default function Home({images}) {

  return (
    <>
      <Header />
      <BannerHero />
      <Galeria images={images} />
      <Blog />
      <Contato />
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
