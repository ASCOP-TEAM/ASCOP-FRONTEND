import { ContainerLinks } from './styles';

type LinkBlockSectionLinkProps = {
  content: string;
  href: string;
};

export function linkBlockSectionLink({
  content,
  href,
}: LinkBlockSectionLinkProps) {
  return (
    <ContainerLinks className="text-wrapper">
      <a href={href}>{content}</a>
    </ContainerLinks>
  );
}
