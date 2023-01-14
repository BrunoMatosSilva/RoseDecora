import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';

import { Title } from '../Title';
import imgNotFound from '../../assets/images/imagenotfound.svg';

import { CardGalery, Container, ContentGalery, ContentImagesNotFound, Footer} from './styles';
import {useState } from 'react';
import { Modal } from '../Modal';
import Link from 'next/link';
import Image from 'next/image';

export function Galeria({ images }) {
  const [showModal, setShowModal] = useState(false);
  const [imageVisible, setImageVisible] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [sliderRef] = useKeenSlider({
    mode: 'free-snap',
    slides: {
      origin: 'center',
      perView: 3,
      spacing: 4,
    },
  });

  function handleOpenModal(image){
    setShowModal(true);
    setImageVisible(image.url);
    setCurrentIndex(image.id);
  }

  return (
    <>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        imageVisible={imageVisible}
        currentIndex={currentIndex}
      />
      <Container>
        <ContentGalery>
          <Title titleFirst="Decorações" titleLast="Realizadas!"/>
          <p>Aqui você pode ver alguns dos nossos trabalhos.</p>

          {images.length < 1 && (
            <ContentImagesNotFound >
              <Image src={imgNotFound} alt="Nenhuma Imagem Encontrado" />
              <span>Nenhuma imagem foi encontrado!</span>
            </ContentImagesNotFound>

          )}

          <div ref={sliderRef} className="keen-slider containerSlaide">
            {images.map((image) => (
              <CardGalery  imgUrl={image.url} key={image.id} className="keen-slider__slide">
                <button onClick={() => handleOpenModal(image)}>
                  <img src={image.url}
                    alt={image.title}
                  />
                </button>
                <div>
                  <p>Clique na imagem para ver tamanho original.</p>
                </div>
              </CardGalery>
            ))}
          </div>

          <Footer>
            <Link href="/decoracoes">Ver Decorações</Link>
          </Footer>

        </ContentGalery>
      </Container>
    </>
  );
}
