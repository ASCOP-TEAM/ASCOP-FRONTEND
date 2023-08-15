import { Title } from './styles';

type TextBlockSectionTitleProps = {
  title: string;
};

export function TextBlockSectionkTitle({ title }: TextBlockSectionTitleProps) {
  return (
    <Title>
      <div className="text-wrapper ">{title}</div>
    </Title>
  );
}
