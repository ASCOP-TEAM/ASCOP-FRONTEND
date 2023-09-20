import React from 'react';
import { Container } from './style';
import { MenuMobile } from './menuMobile';
import Link from 'next/link';
import { routeMappingsMenu } from '@utils';

interface MenuProps {
  bgColor?: string;
  txColor?: string;
  staticmenu?: boolean;
}

export function Menu({ bgColor, txColor, staticmenu = false }: MenuProps) {
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
  }, [staticmenu]);

  return (
    <>
      <Container
        bgColor={bgColor}
        txColor={txColor}
        scrolled={scrolled || isMenuOpen || staticmenu}
      >
        <div className="navbar__left label">
          <Link href={'/'}>
            <div className="text-wrapper-logo"> ASCOP</div>
          </Link>
        </div>

        <div className="navbar__right ">
          <div className="d-none d-md-block">
            <ul>
              {routeMappingsMenu.map((route) => (
                <li key={route.id}>
                  <Link href={route.path}>{route.name}</Link>
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
              {...{ routeMappingsMenu, isMenuOpen }}
              bgColor={bgColor}
              txColor={txColor}
              handleMenuToggle={handleMenuToggle}
            />
          </div>
        </div>
      </Container>
    </>
  );
}
