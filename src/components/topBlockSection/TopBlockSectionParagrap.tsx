import { ContainerParagrap } from './styles';

type TopBlockSectionParagrapPorps = {
  paragrap: string;
};

export function TopBlockSectionParagrap({
  paragrap,
}: TopBlockSectionParagrapPorps) {
  return (
    <ContainerParagrap>
      <p>{paragrap}</p>
    </ContainerParagrap>
  );
}
