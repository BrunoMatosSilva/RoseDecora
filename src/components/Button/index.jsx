import { StyledButton } from './styles';

export function Button({
  type,
  disabled,
  isLoading,
  children,
  secondary,
  onClick,
}){
  return (
    <StyledButton
      type={type}
      disabled={disabled || isLoading}
      secondary={secondary}
      onClick={onClick}
    >
      {!isLoading && children}
    </StyledButton>
  );
}
