import Link from 'next/link';
import { ArrowLeft } from 'phosphor-react';
import { HeaderContainer } from './styles';

export function HeaderBack({path}){
  return (
    <HeaderContainer>
      <span>
        <Link href={path}><ArrowLeft size={50} /></Link>
      </span>
    </HeaderContainer>
  );
}
