import { CardPost, Container, ContainerPosts, Content, ContentPostNotFound, Footer } from './styles';
import { Title } from '../Title';
import { posts } from '../../mocks/blog';
import { Button } from '../Button';

import imgPostNotFound from '../../assets/images/postnotfound.svg';
import Image from 'next/image';

export function Blog() {

  return (
    <Container>
      <Content>
        <Title titleFirst="Curisosidades sobre" titleLast="Decoração!" />
        <p>Aqui você pode ver algumas matérias ou dicas sobre esse universo da
        decoração que transforma sonhos em realidade.</p>

        <ContainerPosts>
          {posts.length < 1 && (
            <ContentPostNotFound>
              <Image src={imgPostNotFound} alt="Nenhum Post Encontrado" />
              <span>Nenhum post foi encontrado!</span>
            </ContentPostNotFound>

          )}

          {posts.map((post) => (
            <CardPost key={post.id}>
              <section>
                <header>
                  <img src={`/blog/${post.imgUrl}`} alt={post.title} />
                </header>
                <div>
                  <p>{post.title}</p>
                </div>
                <footer>
                  <span>
                    {post.dateAt}
                  </span>
                </footer>
              </section>
            </CardPost>
          ))}
        </ContainerPosts>

        {posts.length > 0 && (<Footer>
          <Button secondary="secondary" type="button" >Ver Publicações</Button>
        </Footer>)}
      </Content>
    </Container>
  );
}
