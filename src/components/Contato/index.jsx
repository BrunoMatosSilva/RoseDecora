import Image from 'next/image';
import { ContactDetails, Container} from './styles';
import separador from '../../assets/images/separador.svg';
import { WhatsappLogo } from 'phosphor-react';
import { FormContato } from './Form';

export function Contato() {
  return (
    <Container id="contato">
      <header>
        <h1>Interessado em nossos <strong>serviços ?</strong></h1>
        <Image src={separador} alt="separador" />
      </header>
      <p>Preencha o formulário abaixo que nossa equipe entrara em contato o mais breve possível.</p>
      <FormContato />

      <h2>Caso prefira <strong>temos</strong> o whatsapp</h2>

      <ContactDetails>
        <div>
          <a target="_blank" rel="noopener noreferrer" href="https://api.whatsapp.com/send?phone=5511996153912&text=Estou%20interessado%20no%20seus%20servi%C3%A7os%20de%20decora%C3%A7%C3%A3o%20de%20evento.%20Consegui%20o%20seu%20contato%20pelo%20seu%20website."><WhatsappLogo size={48} /></a>
          <span><p>(11) 9 9615-3912</p></span>
        </div>
      </ContactDetails>
    </Container>
  );
}
