import { useDrop } from "react-dnd";
import { useCryptoStore } from "../../store/store";
import Coin from "../Coin/Coin";
import { StyledDropArea, StyledDropAreaTitle } from "./dropArea.styled";

const ItemType = {
    COIN: "coin",
};

const DropArea = ({ id, title }: { id: string; title: string }) => {
    const { unwatched, watched, moveCoin } = useCryptoStore();

    const coins = id === "unwatched" ? unwatched : watched;

    const [, dropRef] = useDrop(() => ({
        accept: ItemType.COIN,
        drop: (item: { name: string }) => {
            moveCoin(item.name, id === "watched");
        },
    }));

    return (
        <StyledDropArea ref={dropRef}>
            <StyledDropAreaTitle>{title}</StyledDropAreaTitle>
            {coins.map((coin) => (
                <Coin key={coin} name={coin} />
            ))}
        </StyledDropArea>
    );
};

export default DropArea;
