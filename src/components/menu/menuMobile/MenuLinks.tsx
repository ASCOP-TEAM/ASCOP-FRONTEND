/* eslint-disable react-hooks/exhaustive-deps */
import { IRouters } from '@interfaces';
import { ContainerMenuLinks } from './styles';
import { Offcanvas } from 'react-bootstrap';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type MenuLinksProps = {
  routeMappingsMenu: IRouters[];
  isMenuOpen: boolean;
  bgColor?: string;
  txColor?: string;
  handleMenuToggle: () => void;
};

export function MenuLinks({
  routeMappingsMenu,
  isMenuOpen,
  bgColor,
  txColor,
  handleMenuToggle,
}: MenuLinksProps) {
  const router = useRouter();

  React.useEffect(() => {
    if (isMenuOpen) {
      handleMenuToggle();
    }
  }, [router.pathname]);

  return (
    <>
      <ContainerMenuLinks
        bgColor={bgColor}
        txColor={txColor}
        show={isMenuOpen}
        onHide={!isMenuOpen}
        placement={'top'}
        scroll={false}
        backdrop={false}
      >
        <Offcanvas.Body>
          <ul className={isMenuOpen ? 'is-Active' : ''}>
            {routeMappingsMenu.map((route) => (
              <li key={route.id}>
                <Link href={route.path}>{route.name}</Link>
              </li>
            ))}
          </ul>
        </Offcanvas.Body>
      </ContainerMenuLinks>
    </>
  );
}
