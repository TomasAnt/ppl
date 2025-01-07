import { useDrag } from "react-dnd";
import { StyledCoin } from "./coin.styled";

const ItemType = {
    COIN: "coin",
};

const Coin = ({ name }: { name: string }) => {
    const [, dragRef] = useDrag(() => ({
        type: ItemType.COIN,
        item: { name },
    }));
    return <StyledCoin ref={dragRef}>{name}</StyledCoin>;
};

export default Coin;
