import Link from 'next/link';
import Prismic from '@prismicio/client';

import { Title } from '../../components/Title';
import { CardPost, Container, ContainerPosts, Content, ContentPostNotFound, Footer } from '../../styles/pages/posts/styles';
import imgPostNotFound from '../../assets/images/postnotfound.svg';
import { getPrismicClient } from '../api/prismic';
import { RichText } from 'prismic-dom';
import Image from 'next/image';
import { HeaderBack } from '../../components/HeaderBack';
import { Button } from '../../components/Button';
import { useState } from 'react';

export default function Posts({postsPagination}){

  const [posts, setPosts] = useState(postsPagination.postsBlog);
  const [nextPage, setNextPage] = useState(postsPagination.next_page);
  const [currentPage, setCurrentPage] = useState(1);

  async function handleNextPage(){
    if (currentPage !== 1 && nextPage === null) {
      return;
    }

    const postsResults = await fetch(`${nextPage}`).then(response =>
      response.json()
    );

    setNextPage(postsResults.next_page);
    setCurrentPage(postsResults.page);

    const newPosts = postsResults.results.map(post => {
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

    setPosts([...posts, ...newPosts]);
  }

  return(
    <Container>
      <HeaderBack path="/" />

      <Content>
        <Title titleFirst="Blog: Tudo Sobre" titleLast="Decoração!" />
        <p>Aqui você pode ver algumas matérias ou dicas sobre esse universo da decoração que transforma sonhos em realidade.</p>


        <ContainerPosts>
          {posts.map((post) => (
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
                      <date>{post.dateAt}</date>
                    </span>
                  </footer>
                </section>
              </CardPost>
            </Link>
          ))}
        </ContainerPosts>
        {posts.length < 1 && (
          <ContentPostNotFound>
            <section>
              <Image src={imgPostNotFound} alt="Nenhum Post Encontrado" />
              <span>Nenhum post foi encontrado!</span>
            </section>
          </ContentPostNotFound>
        )}
      </Content>
      <Footer>
        {nextPage && (
          <Button secondary="secondary" onClick={handleNextPage}>Carregar Mais</Button>
        )}
      </Footer>
    </Container>
  );
}

export async function getStaticProps() {
  const prismic = getPrismicClient();

  const pages = await prismic.query(
    [Prismic.Predicates.at('document.type', 'blog')],
    {pageSize: 8,
      orderings: '[document.first_publication_date desc]' }
  );

  const postsBlog = pages.results.map(post => {
    return {
      slug: post.uid,
      title: RichText.asText(post.data.title),
      dateAt: new Date(post.last_publication_date).toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
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
