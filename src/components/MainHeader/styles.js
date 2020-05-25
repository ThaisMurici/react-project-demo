import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-content: center;
  height: 56px;
  width: 100%;
  background-color: ${(props) => props.theme.primary};
  border-bottom: 1px solid ${(props) => props.theme.separator};
  padding: 0 12px;
`;

export const HeaderTitle = styled.header`
  font-size: 24px;
  align-self: center;
  color: ${(props) => props.theme.sectionHeaderText};
`;
