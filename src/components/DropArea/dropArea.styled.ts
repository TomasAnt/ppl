import styled from "styled-components";

export const StyledDropArea = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding: ${(props) => props.theme.spacings.s16};
  width: 50%;
  min-height: 200px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledDropAreaTitle = styled.p`
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  color: ${(props) => props.theme.colors.headingColor};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  text-align: center;
  margin-bottom: 10px;
`;
