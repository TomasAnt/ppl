import { StyledCoin } from "./coin.styled";

const Coin = ({ name }: { name: string }) => {
    return <StyledCoin>{name}</StyledCoin>;
};

export default Coin;
