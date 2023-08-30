import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
};

export function ActiveLink({ children, href }: ActiveLinkProps) {
  const router = useRouter();

  return (
    <Link href={href} passHref>
      <a className={router.asPath === href ? 'active' : ''}>{children}</a>
    </Link>
  );
}
