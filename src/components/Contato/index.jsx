import Image from 'next/image';
import { ContactDetails, Container, Form, Textarea } from './styles';
import separador from '../../assets/images/separador.svg';
import Input from '../Input';
import { Button } from '../Button';
import { WhatsappLogo } from 'phosphor-react';

export function Contato() {
  return (
    <Container>
      <header>
        <h1>Interessado em nossos <strong>serviços ?</strong></h1>
        <Image src={separador} alt="separador" />
      </header>
      <p>Preencha o formulário abaixo que nossa equipe entrara em contato o mais breve possível.</p>
      <Form>
        <Input
          placeholder="NOME"
        />
        <Input
          placeholder="E-MAIL"
        />
        <Textarea placeholder="MENSAGEM" />
        <div>
          <Button type="submit">Enviar</Button>
        </div>
      </Form>

      <h2>Caso prefira <strong>temos</strong> o whatsapp</h2>

      <ContactDetails>
        <div>
          <a href="#"><WhatsappLogo size={48} /></a>
          <span><p>(11) 9 9615-3912</p></span>
        </div>
      </ContactDetails>
    </Container>
  );
}
