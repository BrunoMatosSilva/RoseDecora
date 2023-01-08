import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { mapImageResources, search } from '../lib/cloudinary';
import { BannerHero } from '../components/BannerHero';
import { Blog } from '../components/Blog';
import { Contato } from '../components/Contato';
import { Galeria } from '../components/Galeria';
import { Header } from '../components/Header';
import Rodape from '../components/Rodape';
import { getPrismicClient } from './api/prismic';

export default function Home({images, postsBlog}) {

  return (
    <>
      <Header />
      <BannerHero />
      <Galeria images={images} />
      <Blog postsBlog={postsBlog} />
      <Contato />
      <Rodape />
    </>
  );
}

export async function getStaticProps() {
  const prismic = getPrismicClient();
  const results = await search();

  const pages = await prismic.query(
    [Prismic.Predicates.at('document.type', 'blog')],
    {pageSize: 8,
      orderings: '[document.first_publication_date desc]' }
  );
  const { resources } = results;

  const images = mapImageResources(resources);

  const postsBlog = pages.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      dateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
      }),
      thumbnail: post.data.thumbnail.url
    };
  });

  return {
    props: {
      images,
      postsBlog
    }
  };
}
