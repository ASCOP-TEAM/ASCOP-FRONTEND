import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

type ActiveLinkProps = {
  children: React.ReactNode;
  href: string;
  query?: string;
};

export function ActiveLink({ children, href, query }: ActiveLinkProps) {
  const router = useRouter();

  const isActive = query
    ? router.asPath.startsWith(href)
    : router.asPath === href;

  return (
    <Link href={href} passHref>
      <a className={isActive ? 'active' : ''}>{children}</a>
    </Link>
  );
}
