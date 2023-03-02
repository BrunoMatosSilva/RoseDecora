import { mapImageResources, search } from '../../lib/cloudinary';
import { Modal } from '../../components/Modal';
import { Button } from '../../components/Button';
import imgNotFound from '../../assets/images/imagenotfound.svg';
import { Container, Content, ContentGalery, ContentImagesNotFound } from '../../styles/pages/decorações/styles';
import { useState } from 'react';
import { Title } from '../../components/Title';
import { HeaderBack } from '../../components/HeaderBack';
import Image from 'next/image';
import Head from 'next/head';

export default function Decoracoes({
  images: defaultImages,
  nextCursor: defaultNextCursor,
}) {

  const [showModal, setShowModal] = useState(false);
  const [imageVisible, setImageVisible] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const [images, setImages] = useState(defaultImages);
  const [nextCursor, setNextCursor] = useState(defaultNextCursor);

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
      <Head>
        <title>Rose Francis | Decorações </title>
        <meta name="title" content="Rose Francis | Decorações" />
        <meta name="description" content="Aqui mostramos os nossas decoração de festas já realizados por nossa equipe." />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://rosefranciseventos.vercel.app/" />
        <meta property="og:title" content="Rose Francis | Decorações" />
        <meta property="og:description" content="Aqui mostramos os nossas decoração de festas já realizados por nossa equipe." />
        <meta property="og:image" content="/ogimage.png" />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://rosefranciseventos.vercel.app/" />
        <meta property="twitter:title" content="Rose Francis | Decorações" />
        <meta property="twitter:description" content="Aqui mostramos os nossas decoração de festas já realizados por nossa equipe." />
        <meta property="twitter:image" content="/ogimage.png" />
      </Head>

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
        {nextCursor !== undefined && images.length > 1 && (
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
    },
    revalidate: 3600
  };
}
