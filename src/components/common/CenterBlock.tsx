import styled from 'styled-components';
import { DetailedHTMLProps, HTMLAttributes } from 'react';

interface CenterBlockProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  className?: string;
  width?: number | string;
  padding?: number;
}
export default function CenterBlock({
  className,
  width = 1200,
  children,
  padding = 40,
}: CenterBlockProps): JSX.Element {
  return (
    <Wrapper
      className={`center_block ${className ? className : ''}`}
      width={typeof width === 'number' ? `${width}px` : width}
      padding={padding * 2}
    >
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div<CenterBlockProps>`
  max-width: ${(p) => p.width};
  width: calc(100% - ${(p) => p.padding}px);
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 820px) {
    width: calc(100% - 40px);
  }
`;
