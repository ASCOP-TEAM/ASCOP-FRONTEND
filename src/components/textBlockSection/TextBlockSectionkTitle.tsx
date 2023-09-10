import { Title } from './styles';

type TextBlockSectionTitleProps = {
  children: React.ReactNode;
};

export function TextBlockSectionkTitle({
  children,
}: TextBlockSectionTitleProps) {
  return (
    <Title>
      <div className="text-wrapper ">{children}</div>
    </Title>
  );
}
