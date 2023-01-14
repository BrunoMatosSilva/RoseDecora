import { mapImageResources, search } from '../../lib/cloudinary';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import imgNotFound from '../../assets/images/imagenotfound.svg';
import { Container, Content, ContentGalery, ContentImagesNotFound } from '../../styles/pages/decorações/styles';
import { useState } from 'react';
import { Title } from '../../components/Title';
import { HeaderBack } from '../../components/HeaderBack';
import Image from 'next/image';

export default function Decoracoes({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {

  const [showModal, setShowModal] = useState(false);
  const [imageVisible, setImageVisible] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);


  console.log(images.length);
  async function handleLoadMore(e) {
    e.preventDefault();

    const results = await fetch('/api/search', {
      method: 'POST',
      body: JSON.stringify({
        nextCursor
      })
    }).then(r => r.json());

    const { resources, next_cursor: nextPageCursor} = results;

    const images = mapImageResources(resources);

    setImages(prev => {
      return [
        ...prev,
        ...images
      ];
    });
    setNextCursor(nextPageCursor);
  }

  function handleOpenModal(image){
    setShowModal(true);
    setImageVisible(image.url);
    setCurrentIndex(image.id);
  }

  return(
    <Container>
      <Modal
        onClose={() => setShowModal(false)}
        show={showModal}
        imageVisible={imageVisible}
        currentIndex={currentIndex}
      />
      <HeaderBack path="/" />

      <Content>
        <Title titleFirst="Nossos trabalhos" titleLast="Realizados!" />
        <p>Aqui você pode ver todos os nossos trabalhos postados no site. Clique na imagem para ampliar.</p>

        {images.length < 1 && (
          <ContentImagesNotFound>
            <Image src={imgNotFound} alt="Nenhuma Imagem Encontrado" />
            <span>Nenhuma imagem foi encontrado!</span>
          </ContentImagesNotFound>

        )}

        <section>
          {images.map((image) => (
            <ContentGalery imgUrl={image.url} key={image.id} className="keen-slider__slide">
              <button onClick={() => handleOpenModal(image)}>
                <img src={image.url}
                  alt={image.title}
                />
              </button>
            </ContentGalery>
          ))}
        </section>
        {nextCursor !== undefined || images.length < 1 && (
          <div className="buttonLoadMore">
            <Button secondary="secondary" onClick={handleLoadMore}>
            Carregar Mais
            </Button>
          </div>
        )}
      </Content>
    </Container>
  );
}

export async function getStaticProps() {
  const results = await search();

  const { resources, next_cursor: nextCursor } = results;

  const images = mapImageResources(resources);
  return {
    props: {
      images,
      nextCursor: nextCursor || false,
    }
  };
}
