import { useSetRecoilState } from "recoil";

import styled from "styled-components";
import { cursorVariantAtom } from "../atom";

interface Props {
  children: React.ReactNode;
}

const MouseChanger: React.FC<Props> = ({ children }) => {
  const setCursorVariant = useSetRecoilState(cursorVariantAtom);
  const handleMouseOver = () => setCursorVariant("expanded");
  const handleMouseLeave = () => setCursorVariant("default");
  return (
    <StyledMouseChanger
      onMouseOver={handleMouseOver}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </StyledMouseChanger>
  );
};

const StyledMouseChanger = styled.div`
  display: flex;
`;

export default MouseChanger;
