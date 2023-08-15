import { ContainerTitle } from './styles';

type TopBlockSectionTitleProps = {
  title: string;
};

export function TopBlockSectionTitle({ title }: TopBlockSectionTitleProps) {
  return <ContainerTitle className=" mb-3">{title}</ContainerTitle>;
}
