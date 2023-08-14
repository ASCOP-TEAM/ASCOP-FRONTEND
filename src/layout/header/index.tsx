import { Placeholder, StyleHeader } from './styles';

type HeaderProps = {
  children: React.ReactNode;
};

export function Header({ children }: HeaderProps) {
  return (
    <>
      <StyleHeader>{children}</StyleHeader>
      <Placeholder />
    </>
  );
}
