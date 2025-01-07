import Coin from "../Coin/Coin";
import { StyledDropArea, StyledDropAreaTitle } from "./dropArea.styled";

const DropArea = ({ id, title }: { id: string; title: string }) => {
    const coins = id === "unwatched" ? ["Bitcoin", "Ethereum"] : ["Dogecoin"];

    return (
        <StyledDropArea>
            <StyledDropAreaTitle>{title}</StyledDropAreaTitle>
            {coins.map((coin, index) => (
                <Coin key={index} name={coin} />
            ))}
        </StyledDropArea>
    );
};

export default DropArea;
