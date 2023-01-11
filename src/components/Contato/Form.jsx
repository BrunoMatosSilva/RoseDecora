import toast from 'react-hot-toast';
import emailjs from '@emailjs/browser';
import Input from '../Input';
import { Form, Textarea } from './styles';
import { Button } from '../Button';
import { useState } from 'react';

export function FormContato(){
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    if (loading) return;

    if (!nome.trim() || !email.trim() || !mensagem.trim()) {
      toast('Preencha todos os campos para enviar sua mensagem!', {
      });
      return;
    }

    try {
      setLoading(true);
      emailjs.sendForm(
        'service_gb796wk',
        'template_d15u6cq',
        event.target,
        'NSGC9cW6FF2EABsCs'
      );
      setNome('');
      setEmail('');
      setMensagem('');

      toast('Mensagem enviada com sucesso!', {
      });
    } catch (err) {
      toast('Ocorreu um erro ao tentar enviar sua mensagem. Tente novamente!', {
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form data-aos="fade-up" onSubmit={handleSubmit}>
      <Input
        placeholder="NOME"
        value={nome}
        onChange={({ target }) => setNome(target.value)}
        name="nome"
      />
      <Input
        placeholder="E-MAIL"
        value={email}
        onChange={({ target }) => setEmail(target.value)}
        type="email"
        name="email"
      />
      <Textarea
        placeholder="MENSAGEM"
        value={mensagem}
        name="mensagem"
        onChange={({ target }) => setMensagem(target.value)}
      />
      <div>
        <Button type="submit">Enviar</Button>
      </div>
    </Form>
  );
}
