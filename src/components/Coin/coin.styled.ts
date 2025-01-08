import styled from "styled-components";

export const StyledCoin = styled.div`
  margin: 10px;
  padding: 12px 16px;
  border: 1px solid #dcdcdc;
  border-radius: 12px;
  background: linear-gradient(145deg, #f0f0f0, #ffffff);
  box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.1),
    -4px -4px 8px rgba(255, 255, 255, 0.6);
  font-size: 1rem;
  font-weight: 500;
  color: #333;
  text-align: center;
  cursor: grab;
  user-select: none;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.15),
      -6px -6px 12px rgba(255, 255, 255, 0.7);
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.2),
      -2px -2px 6px rgba(255, 255, 255, 0.5);
  }
`;
