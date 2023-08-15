import { Paragrap } from './styles';

type TextBlockSectionParagrapProps = {
  content: string;
};

export function TextBlockSectionkParagrap({
  content,
}: TextBlockSectionParagrapProps) {
  return (
    <Paragrap>
      <div className="text-wrapper ">
        <p>{content}</p>
      </div>
    </Paragrap>
  );
}
