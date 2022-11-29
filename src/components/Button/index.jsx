import { StyledButton } from './styles';

export function Button({
  type,
  disabled,
  isLoading,
  children,
  danger,
  onClick,
}){
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      danger={danger}
      onClick={onClick}
    >
      {!isLoading && children}
    </StyledButton>
  );
}
