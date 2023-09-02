import React from 'react';
import { ActiveLink } from '@components';
import { Container } from './style';
import { MenuMobile } from './menuMobile';

interface MenuProps {
  bgColor?: string;
  txColor?: string;
  staticmenu?: boolean;
}

export function Menu({ bgColor, txColor, staticmenu = false }: MenuProps) {
  const routers = [
    {
      id: 1,
      path: '/home',
      name: 'HOME',
    },
    {
      id: 2,
      path: '/loja/',
      name: 'LOJA',
    },
    {
      id: 3,
      path: '/cadastros',
      name: 'CADASTROS',
    },
    {
      id: 4,
      path: '/doar',
      name: 'DOAÇÃO',
    },
    {
      id: 5,
      path: '/transparencia',
      name: 'TRANSPARÊNCIA',
    },
    {
      id: 6,
      path: '/contato',
      name: 'CONTATO',
    },
  ];

  const [isMenuOpen, setMenuOpen] = React.useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
    setMenuOpen(!isMenuOpen);
  };

  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100 || staticmenu) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Container
      bgColor={bgColor}
      txColor={txColor}
      scrolled={scrolled || isMenuOpen || staticmenu}
    >
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
          <MenuMobile.Whapper
            isOpen={isMenuOpen}
            onClick={handleMenuToggle}
            txColor={txColor}
          />
          <MenuMobile.Links
            {...{ routers, isMenuOpen }}
            bgColor={bgColor}
            txColor={txColor}
          />
        </div>
      </div>
    </Container>
  );
}
