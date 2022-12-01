import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { images } from '../../mocks/galeria';

import { Title } from '../Title';
import { Button } from '../Button';

import { CardGalery, Container, ContentGalery, Footer } from './styles';

export function Galeria() {

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 4,
    },
  });

  return (
    <Container>
      <ContentGalery>
        <Title titleFirst="Decorações" titleLast="Realizadas!" />
        <p>Aqui você pode ver alguns dos nossos trabalhos.</p>

        <div ref={sliderRef} className="keen-slider containerSlaide">
          {images.map((image) => (
            <CardGalery imgUrl={image.url} key={image.id} className="keen-slider__slide">
              <a href="#">
                <img src={`/galery/${image.url}`}
                  alt={image.name}
                />
              </a>
              <div>
                <strong>{image.name}</strong>
                <p>Clique na imagem para ver mais fotos</p>
              </div>
            </CardGalery>
          ))}
        </div>

        <Footer>
          <Button secondary="secondary" type="button" >Ver Decorações</Button>
        </Footer>

      </ContentGalery>
    </Container>
  );
}
