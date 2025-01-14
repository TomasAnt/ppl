import styled from "styled-components";

export const GraphContainer = styled.div`
  width: 100%;
  max-width: 600px;
  margin: ${(props) => props.theme.spacings.s20} auto;
  padding: ${(props) => props.theme.spacings.s20};
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const ChartTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.h3};
  text-align: center;
  margin-bottom: ${(props) => props.theme.spacings.s20};
  color: ${(props) => props.theme.colors.headingColor};
`;

export const ChartContainer = styled.div`
  width: 100%;
  max-width: 900px;
  margin: ${(props) => props.theme.spacings.s20} auto;
  padding: ${(props) => props.theme.spacings.s20};
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
