import styled from "styled-components";

export const StyledDropArea = styled.div`
  border: 1px solid #d6d6d6;
  border-radius: 8px;
  padding: 16px;
  width: 50%;
  min-height: 200px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const StyledDropAreaTitle = styled.h3`
  font-size: 1rem;
  color: #333;
  font-weight: 600;
  text-align: center;
  margin-bottom: 10px;
`;
