import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropArea from "../../components/DropArea/DropArea";
import { StyledKanbanBoard } from "./kanbanBoard.styled";

const KanbanBoard = () => {
    return (
        <StyledKanbanBoard>
            <DndProvider backend={HTML5Backend}>
                <DropArea id="unwatched" title="Unwatched Coins" />
                <DropArea id="watched" title="Watched Coins" />
            </DndProvider>
        </StyledKanbanBoard>
    );
};

export default KanbanBoard;
