import { ContainerTitle } from './styles';

type TopBlockSectionTitleProps = {
  title: string;
};

export function TopBlockSectionTitle({ title }: TopBlockSectionTitleProps) {
  return (
    <ContainerTitle lg={5} xs={12}>
      <h2>{title}</h2>
    </ContainerTitle>
  );
}
