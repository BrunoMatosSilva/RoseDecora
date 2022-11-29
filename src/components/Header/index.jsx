import { Container, Content } from './styles';
import Image from 'next/image';

import logo from '../../assets/images/logo.svg';


export function Header() {
  return (
    <Container>
      <Content>
        <span>
          <Image src={logo} alt="Rose Decorações" />
        </span>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Decorações</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contato</a></li>
        </ul>
      </Content>
    </Container>
  );
}
