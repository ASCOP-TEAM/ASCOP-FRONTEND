import { Container, ContainerContact } from './styles';

type LinkBlockSectionRootProps = {
  children: React.ReactNode;
  contectMode?: boolean;
};

export function LinkBlockSectionRoot({
  children,
  contectMode = false,
}: LinkBlockSectionRootProps) {
  return (
    <>
      {contectMode ? (
        <ContainerContact>{children}</ContainerContact>
      ) : (
        <Container>
          <ul>{children}</ul>
        </Container>
      )}
    </>
  );
}
