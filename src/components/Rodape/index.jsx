import { FacebookLogo, InstagramLogo, ArrowCircleUp } from 'phosphor-react';
import { Container } from './styles';

function Rodape() {

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <Container>
      <div className="container">
        <section>
          <a href="https://github.com/BrunoMatosSilva" target="_blank" rel="noreferrer"><FacebookLogo/></a>
          <a href="https://www.linkedin.com/in/bmsfrontend" target='_blank' rel="noreferrer"><InstagramLogo /></a>
        </section>

        <p>
          <b>Rose Francis Decorações 2022</b> - Todos os direitos reservados.
        </p>

        <button type="button" onClick={handleScrollTop}>
          <div>
            <ArrowCircleUp />
          </div>
          Voltar ao topo
        </button>
      </div>
    </Container>
  );
}

export default Rodape;
