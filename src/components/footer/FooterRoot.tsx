import { StyledFooter } from './styles';

type FooterProps = {
  children: React.ReactNode;
};

export function FooterRoot({ children }: FooterProps) {
  return <StyledFooter>{children}</StyledFooter>;
}
