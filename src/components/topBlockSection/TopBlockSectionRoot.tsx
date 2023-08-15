import { ContainerRoot, LabelRoot } from './styles';

type TopBlockSectionRootProps = {
  backgroud: string;
  children: React.ReactNode;
};

export function TopBlockSectionRoot({
  backgroud,
  children,
}: TopBlockSectionRootProps) {
  return (
    <ContainerRoot backgroud={backgroud} className="my-3">
      <LabelRoot>{children}</LabelRoot>
    </ContainerRoot>
  );
}
