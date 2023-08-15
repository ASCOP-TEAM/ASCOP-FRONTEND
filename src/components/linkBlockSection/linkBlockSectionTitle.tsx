import { ContainerTitle } from './styles';

type LinkBlockSectionTitleProps = {
  title: string;
};

export function LinkBlockSectionTitle({ title }: LinkBlockSectionTitleProps) {
  return (
    <>
      <ContainerTitle className="label">
        <div className="text-wrapper">{title}</div>
      </ContainerTitle>
    </>
  );
}
