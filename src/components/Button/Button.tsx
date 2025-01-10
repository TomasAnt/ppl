import { StyledButton } from "./button.styled";

type RangeOption = "Today" | "Past Week" | "Past Month";

interface ButtonProps {
  option: RangeOption;
  range: RangeOption;
  setRange: (option: RangeOption) => void;
}

const Button = ({ option, range, setRange }: ButtonProps) => {
  const isActive = range === option;

  return (
    <StyledButton onClick={() => setRange(option)} $active={isActive}>
      {option}
    </StyledButton>
  );
};

export default Button;
