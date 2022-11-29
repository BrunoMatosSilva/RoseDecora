import Image from 'next/image';
import { CardBanner, Container, ContentBanner, ContentSocial, ImageBanner, Rodape } from './styles';
import banner from '../../assets/images/happyparty.svg';
import arrow from '../../assets/images/arrow.svg';
import { FacebookLogo, InstagramLogo } from 'phosphor-react';
import { Button } from '../Button';
import { Title } from '../Title';

export function BannerHero() {
  return (
    <Container>
      <ContentBanner>
        <CardBanner>
          <Title titleFirst="Sua Festa" titleLast="da cor do seu sonho!" />

          <div className="text">
            <p>
          A decoração de uma festa não apenas deixa o evento mais especial, como revela os sonhos do aniversariante.
          Nos dá <strong>RoseFrancis</strong> buscamos sempre atender ao pedido de nossos clientes.
            </p>
            <p>
          Fazendo com que o sonhos deles possam ser realizados em decorações especiais.
            </p>
            <p>
          Não deixe de ver nossas decorações aqui no site e em nossas redes sociais.
            </p>
          </div>

          <ContentSocial>

            <a href="#">
              <FacebookLogo />
            </a>
            <a href="#">
              <InstagramLogo />
            </a>

          </ContentSocial>

          <Rodape>

            <Button
            >
              Decorações
            </Button>

            <div>
              <strong>
                <a href="#">Fale Conosco</a>
              </strong>
              <span>
                <Image src={arrow} alt="seta para esquerda" />
              </span>
            </div>
          </Rodape>

        </CardBanner>

        <ImageBanner>
          <Image src={banner} alt="party" />
        </ImageBanner>
      </ContentBanner>
    </Container>
  );
}
