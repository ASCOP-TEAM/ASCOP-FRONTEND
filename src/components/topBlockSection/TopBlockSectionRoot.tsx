import Image from 'next/image';
import { ContainerRoot, LabelRoot } from './styles';

type TopBlockSectionRootProps = {
  imageUrl: string;
  children: React.ReactNode;
};

export function TopBlockSectionRoot({
  imageUrl,
  children,
}: TopBlockSectionRootProps) {
  return (
    <ContainerRoot className="my-3">
      <Image
        src={imageUrl}
        alt="Imagem de fundo"
        layout="fill"
        objectFit="cover"
      />
      <div className="gradient-overlay"></div>
      <LabelRoot>{children}</LabelRoot>
    </ContainerRoot>
  );
}
