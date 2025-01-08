import styled from "styled-components";

export const ChartContainer = styled.div`
  margin-top: 20px;
`;

export const SelectorWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin: 15px 0;
`;

export const ChartHeading = styled.h4`
  font-size: 1.5rem;
  color: #333;
  text-align: center;
  font-weight: 600;
  margin-bottom: 15px;
`;

export const ErrorMessage = styled.div`
  color: #d9534f;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #f5c6cb;
  border-radius: 8px;
  background-color: #f8d7da;
`;

export const LoadingMessage = styled.div`
  color: #007bff;
  text-align: center;
  font-weight: bold;
  padding: 10px;
  border: 1px solid #cce5ff;
  border-radius: 8px;
  background-color: #e9f7ff;
`;
