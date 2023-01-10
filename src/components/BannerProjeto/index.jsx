import { Container } from './styles';

function BannerProjeto({ imgUrl }) {
  return (
    <Container imgUrl={imgUrl}>
      <div className="overlay" />
    </Container>
  );
}

export default BannerProjeto;
