import { Row } from 'react-bootstrap';

type ContainerProps = {
  children: React.ReactNode;
  justify?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  align?: 'start' | 'end' | 'center' | 'between' | 'around' | 'evenly';
  direction?: 'row' | 'row-reverse' | 'column' | 'column-reverse';
};

export function ContainerRow({
  children,
  justify,
  align,
  direction,
}: ContainerProps) {
  return (
    <Row
      className={`w-100 justify-content-${justify} align-items-${align} flex-${direction}`}
    >
      {children}
    </Row>
  );
}
