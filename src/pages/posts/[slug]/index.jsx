import Prismic from '@prismicio/client';
import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { RichText } from 'prismic-dom';
import { getPrismicClient } from '../../api/prismic';
import { Container } from './styles';

export default function Post({post}) {

  return(
    <Container>
      <header>
        <span>
          <Link href="/"><ArrowLeft size={50} /></Link>
        </span>
      </header>
      <section>
        <img src={post.image} alt={post.title}/>
        <h1>{post.title}</h1>
        <b>Data:</b><date>{post.createdAt}</date>
        <div dangerouslySetInnerHTML={{ __html: post.text}} />
      </section>
    </Container>
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
    createdAt: new Date(response.last_publication_date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: '2-digit',
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
