import React from 'react';
import { ActiveLink } from '@components';
import { StyledNav } from './style';
import { MenuMobile } from './menuMobile';

export function Menu() {
  const routers = [
    {
      id: 1,
      path: '/',
      name: 'HOME',
    },
    {
      id: 2,
      path: '/loja/',
      name: 'LOJA',
    },
    {
      id: 3,
      path: '/',
      name: 'CADASTROS',
    },
    {
      id: 4,
      path: '/',
      name: 'DOAÇOES',
    },
    {
      id: 5,
      path: '/',
      name: 'TRANSPARÊNCIA',
    },
    {
      id: 6,
      path: '/',
      name: 'CONTATO',
    },
  ];

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNav>
      <div className="navbar__left label">
        <div className="text-wrapper">ASCOP</div>
      </div>

      <div className="navbar__right ">
        <div className="d-none d-md-block">
          <ul>
            {routers.map((route) => (
              <li key={route.id}>
                <ActiveLink href={route.path}>{route.name}</ActiveLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="d-md-none">
          <MenuMobile.Whapper isOpen={isMenuOpen} onClick={handleMenuToggle} />
          <MenuMobile.Links {...{ routers, isMenuOpen }} />
        </div>
      </div>
    </StyledNav>
  );
}
