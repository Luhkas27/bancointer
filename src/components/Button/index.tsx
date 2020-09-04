import React from 'react';

import * as S from './styles';
import { ButtonProps } from './Button';

const Button: React.FC<ButtonProps> = ({
  children,
  variant,
  type,
  ...rest
}) => {
  return (
    <S.Container type={type || 'button'} variant={variant} {...rest}>
      {children}
    </S.Container>
  );
};

export default Button;
