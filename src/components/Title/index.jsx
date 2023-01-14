import Image from 'next/image';
import separador from '../../assets/images/separador.svg';
import { Container } from './styles';

export function Title({titleFirst, titleLast}) {
  return (
    <Container >
      <h1 data-aos="fade-up-right"> {titleFirst} <strong>{titleLast}</strong></h1>
      <Image src={separador} alt="separador" />
    </Container>
  );
}
