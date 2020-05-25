import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  flex-direction: column;
  background-color: ${(props) => props.theme.secondary};
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  background-color: ${(props) => props.theme.white};
  margin-top: 32px;
  border: 1px solid ${(props) => props.theme.separator};
  padding: 28px 20px;
`;

export const ContentHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  margin-bottom: 12px;
`;

export const ContentHeaderTitle = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.sectionHeaderText};
`;
