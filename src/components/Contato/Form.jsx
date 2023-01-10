import Input from '../Input';
import { Form, Textarea } from './styles';
import { Button } from '../Button';

export function FormContato(){
  return (
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
  );
}
