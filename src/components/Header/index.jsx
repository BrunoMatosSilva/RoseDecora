import { Container, Content } from './styles';
import Image from 'next/image';

import logo from '../../assets/images/logo.svg';

export function Header() {

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  function handleScrollDecoration() {
    window.scroll({
      top: 850,
      behavior: 'smooth'
    });
  }

  function handleScrollBlog() {
    window.scroll({
      top: 1700,
      behavior: 'smooth'
    });
  }

  function handleScrollContato() {
    window.scroll({
      top: 2680,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <Content>
        <span>
          <Image src={logo} alt="Rose Decorações" />
        </span>
        <ul>
          <li><button onClick={handleScrollTop}>Home</button></li>
          <li><button onClick={handleScrollDecoration}>Decorações</button></li>
          <li><button onClick={handleScrollBlog}>Blog</button></li>
          <li><button onClick={handleScrollContato}>Contato</button></li>
        </ul>
      </Content>
    </Container>
  );
}
