import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { Title } from '../Title';
import { Button } from '../Button';

import { CardGalery, Container, ContentGalery, Footer} from './styles';
import { useEffect, useState } from 'react';
import { Modal } from '../Modal';

export function Galeria({ images, nextCursor}) {
  const [showModal, setShowModal] = useState(false);
  const [imageVisible, setImageVisible] = useState(null);

  useEffect(() => {
    (async function run() {
      const results = await fetch('api/search', {
        method: 'POST',
        body: JSON.stringify({
          nextCursor
        })
      }).then(response => response.json());
      return results;
    })();
  },[]);

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 4,
    },
  });

  function handleOpenModal(id){
    setShowModal(true);
    setImageVisible(id);
  }

  return (
    <Container>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        image={imageVisible}
      />
      <ContentGalery>
        <Title titleFirst="Decorações" titleLast="Realizadas!" />
        <p>Aqui você pode ver alguns dos nossos trabalhos.</p>

        <div ref={sliderRef} className="keen-slider containerSlaide">
          {images.map((image) => (
            <CardGalery imgUrl={image.url} key={image.id} className="keen-slider__slide">
              <button onClick={handleOpenModal}>
                <img src={image.url}
                  alt={image.title}
                />
              </button>
              <div>
                <strong>{image.title}</strong>
                <p>Clique na imagem para ver tamanho original.</p>
              </div>
            </CardGalery>
          ))}
        </div>

        <Footer>
          <Button secondary="secondary" type="button">Ver Decorações</Button>
        </Footer>

      </ContentGalery>
    </Container>
  );
}
