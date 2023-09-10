import { ContainerLinks } from './styles';

interface LinkBlockSectionLinkProps {
  content: string;
  href: string;
}

export function LinkBlockSectionLink({
  content,
  href,
}: LinkBlockSectionLinkProps) {
  return (
    <ContainerLinks className="text-wrapper">
      <a href={href} target="_blank" rel="noreferrer">
        {content}
      </a>{' '}
    </ContainerLinks>
  );
}
