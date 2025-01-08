import styled from "styled-components";

export const BoardContainer = styled.div`
  display: flex;
  gap: 20px;
  padding: 20px;
`;

export const BoardHeading = styled.h3`
  margin: 0 20px;
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
`;

export const ChartGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 40px;
  margin: 0 20px;
  justify-content: center;
`;
