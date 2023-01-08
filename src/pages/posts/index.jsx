import Link from 'next/link';
import Prismic from '@prismicio/client';

import { Title } from '../../components/Title';
import { CardPost, Container, ContainerPosts, Content, ContentPostNotFound, Footer } from './styles';
import imgPostNotFound from '../../assets/images/postnotfound.svg';
import { getPrismicClient } from '../api/prismic';
import { RichText } from 'prismic-dom';
import Image from 'next/image';
import { HeaderBack } from '../../components/HeaderBack';
import { Button } from '../../components/Button';

export default function Posts({postsPagination}){

  return(
    <Container>
      <HeaderBack />
      <Title titleFirst="Nossos trabalhos" titleLast="Realizados!" />
      <p>Aqui você pode ver todos os nossos trabalhos postados no site. Clique na imagem para ampliar.</p>

      <Content>
        <ContainerPosts>
          {postsPagination.postsBlog.length < 1 && (
            <ContentPostNotFound>
              <Image src={imgPostNotFound} alt="Nenhum Post Encontrado" />
              <span>Nenhum post foi encontrado!</span>
            </ContentPostNotFound>

          )}

          {postsPagination.postsBlog.map((post) => (
            <Link href={`/posts/${post.slug}`} key={post.slug}>
              <CardPost >
                <section>
                  <header>
                    <img src={post.thumbnail} alt={post.title} />
                  </header>
                  <div className='titlePost'>
                    <p>{post.title}</p>
                  </div>
                  <footer>
                    <span>
                      {post.dateAt}
                    </span>
                  </footer>
                </section>
              </CardPost>
            </Link>
          ))}
        </ContainerPosts>
      </Content>
      <Footer>
        <Button secondary="secondary">Carregar Mais</Button>
      </Footer>
    </Container>
  );
}

export async function getStaticProps() {
  const prismic = getPrismicClient();

  const pages = await prismic.query(
    [Prismic.Predicates.at('document.type', 'blog')],
    {pageSize: 1,
      orderings: '[document.first_publication_date desc]' }
  );

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

  const postsPagination = {
    next_page: pages.next_page,
    postsBlog
  };

  return {
    props: {
      postsPagination
    }
  };
}
