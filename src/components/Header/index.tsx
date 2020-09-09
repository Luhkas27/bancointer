import React, { memo } from 'react';

import * as S from './styles';
import { BancoInter } from '../../assets/images';
import Button from '../Button';
import AccountDropdown from './AccountDropdown';
import { User } from './Header';
import Gradient from './Gradient';

const Header: React.FC = () => {
  const user: User = { name: 'Lucas Cardoso' };
  return (
    <S.Container>
      <S.Wrapper>
        <S.LeftNav>
          <BancoInter />
          Internet Banking
        </S.LeftNav>
        <S.RightNav>
          <Button variant="secondary">Simulador de renda fixa</Button>
          <AccountDropdown user={user} />
        </S.RightNav>
      </S.Wrapper>
      <Gradient />
    </S.Container>
  );
};

export default memo(Header);
