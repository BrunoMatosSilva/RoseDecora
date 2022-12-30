import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../api/prismic';

export default function Post({post}) {

  console.log({post});

  return(
    <div>
      <h1>Post</h1>
    </div>
  );
}

export const getStaticPaths = async () => {
  const prismic = getPrismicClient();
  const projetos = await prismic.query([
    Prismic.predicates.at('document.type', 'blog')
  ]);

  const paths = projetos.results.map(projeto => ({
    params: {
      slug: projeto.uid
    }
  }));

  return {
    paths,
    fallback: true
  };
};

export const getStaticProps = async context => {
  const prismic = getPrismicClient();
  const { slug } = context.params;

  const response = await prismic.getByUID('blog', String(slug), {});

  const post = {
    slug,
    title: RichText.asText(response.data.title),
    text: RichText.asHtml(response.data.text),
    image: response.data.thumbnail.url,
    updatedAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    })
  };

  return {
    props: {
      post
    },
    revalidate: 3600
  };
};
