import { Root } from './styles';

type TextBlockSectionRootProps = {
  children: React.ReactNode;
};

export function TextBlockSectionkRoot({ children }: TextBlockSectionRootProps) {
  return <Root>{children}</Root>;
}
