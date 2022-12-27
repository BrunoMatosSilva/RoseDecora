import { mapImageResources, search } from '../lib/cloudinary';
import { BannerHero } from '../components/BannerHero';
import { Blog } from '../components/Blog';
import { Contato } from '../components/Contato';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';

export default function Home({images, nextCursor}) {

  return (
    <>
      <Header />
      <BannerHero />
      <Galeria images={images} nextCursor={nextCursor} />
      <Blog />
      <Contato />
    </>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
      nextCursor
    }
  };
}
