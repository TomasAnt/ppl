import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  gap: ${(props) => props.theme.spacings.s20};
  padding: ${(props) => props.theme.spacings.s20};
`;

export const BoardHeading = styled.h3`
  margin: 0 20px;
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  color: ${(props) => props.theme.colors.headingColor};
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: ${(props) => props.theme.spacings.s40};
  margin: 0 20px;
  justify-content: center;

  @media (max-width: 768px) {
    gap: ${(props) => props.theme.spacings.s20};
    margin-bottom: 100px;
  }
`;
