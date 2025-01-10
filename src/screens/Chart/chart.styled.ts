import styled from "styled-components";

export const ChartContainer = styled.div`
  margin-top: ${(props) => props.theme.spacings.s20};
`;

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: ${(props) => props.theme.spacings.s12};
  margin: 15px 0;
`;

export const ChartHeading = styled.h4`
  font-size: ${(props) => props.theme.fontSizes.h3};
  color: ${(props) => props.theme.colors.headingColor};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  margin-bottom: ${(props) => props.theme.spacings.s16};
`;

export const ErrorMessage = styled.div`
  color: ${(props) => props.theme.colors.errorMessageColor};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.bold};
  padding: ${(props) => props.theme.spacings.s10};
  border: 1px solid ${(props) => props.theme.colors.errorMessageBorder};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.errorMessageBackground};
`;

export const LoadingMessage = styled.div`
  color: ${(props) => props.theme.colors.loadingMessageColor};
  text-align: center;
  font-weight: ${(props) => props.theme.fontWeights.semibold};
  padding: ${(props) => props.theme.spacings.s10};
  border: 1px solid ${(props) => props.theme.colors.loadingMessageBorder};
  border-radius: 8px;
  background-color: ${(props) => props.theme.colors.loadingMessageBackground};
`;
