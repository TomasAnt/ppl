import { StyledButton } from "./button.styled";

type RangeOption = "Today" | "Past Week" | "Past Month";

interface ButtonProps {
  option: RangeOption;
  range: RangeOption;
  setRange: (option: RangeOption) => void;
}

const Button = ({ option, range, setRange }: ButtonProps) => {
  return (
    <StyledButton
      key={option}
      active={range === option}
      onClick={() => setRange(option)}
    >
      {option}
    </StyledButton>
  );
};

export default Button;
