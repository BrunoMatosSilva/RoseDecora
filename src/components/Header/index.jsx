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

  return (
    <Container>
      <Content>
        <span>
          <Image src={logo} alt="Rose Decorações" />
        </span>
        <ul>
          <li><button onClick={handleScrollTop}>Home</button></li>
          <li><a href="#galeria">Decorações</a></li>
          <li><a href="#blog">Blog</a></li>
          <li><a href='#contato'>Contato</a></li>
        </ul>
      </Content>
    </Container>
  );
}
