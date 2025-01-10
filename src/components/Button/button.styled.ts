import styled from "styled-components";

interface StyledButtonProps {
  $active: boolean;
}

export const StyledButton = styled.button<StyledButtonProps>`
  padding: 10px 16px;
  font-size: ${(props) => props.theme.fontSizes.paragraph};
  font-weight: ${(props) => props.theme.fontWeights.medium};
  color: ${({ $active }) => ($active ? "#fff" : "#333")};
  background: ${({ $active }) =>
    $active
      ? "linear-gradient(145deg, #007bff, #0056b3)"
      : "linear-gradient(145deg, #f1f1f1, #e0e0e0)"};
  border: 1px solid ${({ $active }) => ($active ? "#0056b3" : "#ccc")};
  border-radius: 8px;
  cursor: pointer;
  box-shadow: ${({ $active }) =>
    $active ? "0 4px 8px rgba(0, 0, 0, 0.2)" : "0 2px 4px rgba(0, 0, 0, 0.1)"};
  transition: all 0.3s ease;

  &:hover {
    background: ${({ $active }) =>
      $active
        ? "linear-gradient(145deg, #0056b3, #00408d)"
        : "linear-gradient(145deg, #e9e9e9, #dcdcdc)"};
    box-shadow: ${({ $active }) =>
      $active
        ? "0 6px 12px rgba(0, 0, 0, 0.25)"
        : "0 3px 6px rgba(0, 0, 0, 0.15)"};
  }

  &:active {
    transform: scale(0.95);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  }

  &:disabled {
    background: #f9f9f9;
    color: #999;
    cursor: not-allowed;
    box-shadow: none;
  }
`;
