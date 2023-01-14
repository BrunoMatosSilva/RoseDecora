import { CardPost, Container, ContainerPosts, Content, ContentPostNotFound, Footer } from './styles';
import { Title } from '../Title';

import imgPostNotFound from '../../assets/images/postnotfound.svg';
import Image from 'next/image';
import Link from 'next/link';

export function Blog({postsBlog}) {

  return (
    <Container>
      <Content>
        <Title titleFirst="Curisosidades sobre" titleLast="Decoração!" />
        <p>Aqui você pode ver algumas matérias ou dicas sobre esse universo da
        decoração que transforma sonhos em realidade.</p>

        {postsBlog.length < 1 && (
          <ContentPostNotFound data-aos="fade-up-left">
            <Image src={imgPostNotFound} alt="Nenhum Post Encontrado" />
            <span>Nenhum post foi encontrado!</span>
          </ContentPostNotFound>

        )}
        <ContainerPosts data-aos="fade-up-left">
          {postsBlog.map((post) => (
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

        <Footer>
          <Link href="/posts">Ver Publicações</Link>
        </Footer>
      </Content>
    </Container>
  );
}
