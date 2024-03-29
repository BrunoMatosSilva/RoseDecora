import Prismic from '@prismicio/client';
import { RichText } from 'prismic-dom';
import BannerProjeto from '../../../components/BannerProjeto';
import { HeaderBack } from '../../../components/HeaderBack';
import { getPrismicClient } from '../../api/prismic';
import { Container } from '../../../styles/pages/post/styles';
import Head from 'next/head';

export default function Post({post}) {

  return(
    <Container>

      <Head>
        <title>{post?.title} | Publicações </title>

        <meta
          name="description"
          content="Aqui é nossa postagem sobre decoração de festa."
        />
        <meta property="og:image" content={post?.image} />
        <meta property="og:image:secure_url" content={post?.image} />
        <meta name="twitter:image" content={post?.image} />
        <meta name="twitter:image:src" content={post?.image} />
        <meta
          property="og:description"
          content="Aqui é nossa postagem sobre decoração de festa."
        />
      </Head>

      <HeaderBack path="/posts" />
      <BannerProjeto
        title={post?.title}
        imgUrl={post?.image}
      />
      <section>
        <div className="header">
          <h1>{post?.title}</h1>
          <span>
            <b>Data:</b><date>{post?.createdAt}</date>
          </span>
        </div>
        <div dangerouslySetInnerHTML={{ __html: post?.text}} />
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
