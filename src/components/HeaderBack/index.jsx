import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { HeaderContainer } from './styles';

export function HeaderBack(){
  return (
    <HeaderContainer>
      <span>
        <Link href="/"><ArrowLeft size={50} /></Link>
      </span>
    </HeaderContainer>
  );
}
