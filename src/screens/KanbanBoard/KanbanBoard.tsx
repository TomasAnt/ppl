import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropArea from "../../components/DropArea/DropArea";
import { useCryptoStore } from "../../store/store";
import Chart from "../Chart/Chart";
import { StyledChartBoard, StyledKanbanBoard, StyledKanbanBoardHeading } from "./kanbanBoard.styled";

const KanbanBoard = () => {
    const { watched } = useCryptoStore();

    return (
        <>
            <StyledKanbanBoard>
                <DndProvider backend={HTML5Backend}>
                    <DropArea id="unwatched" title="Unwatched Coins" />
                    <DropArea id="watched" title="Watched Coins" />
                </DndProvider>
            </StyledKanbanBoard>
            <StyledKanbanBoardHeading>Live Price Charts</StyledKanbanBoardHeading>
            <StyledChartBoard>
                {watched.map((coin) => (
                    <Chart key={coin} coin={coin} />
                ))}
            </StyledChartBoard>
        </>
    );
};

export default KanbanBoard;
