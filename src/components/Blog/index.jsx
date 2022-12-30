import { CardPost, Container, ContainerPosts, Content, ContentPostNotFound, Footer } from './styles';
import { Title } from '../Title';
import { Button } from '../Button';

import imgPostNotFound from '../../assets/images/postnotfound.svg';
import Image from 'next/image';

export function Blog({postsBlog}) {

  return (
    <Container>
      <Content>
        <Title titleFirst="Curisosidades sobre" titleLast="Decoração!" />
        <p>Aqui você pode ver algumas matérias ou dicas sobre esse universo da
        decoração que transforma sonhos em realidade.</p>

        <ContainerPosts>
          {postsBlog.length < 1 && (
            <ContentPostNotFound>
              <Image src={imgPostNotFound} alt="Nenhum Post Encontrado" />
              <span>Nenhum post foi encontrado!</span>
            </ContentPostNotFound>

          )}

          {postsBlog.slice(0, 8).map((post) => (
            <CardPost key={post.slug}>
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
          ))}
        </ContainerPosts>

        <Footer>
          <Button secondary="secondary" type="button" >Ver Publicações</Button>
        </Footer>
      </Content>
    </Container>
  );
}
