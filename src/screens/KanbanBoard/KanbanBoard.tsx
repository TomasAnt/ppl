import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DropArea from "../../components/DropArea/DropArea";
import { useCryptoStore } from "../../store/store";
import Chart from "../Chart/Chart";
import { BoardContainer, ChartGrid } from "./kanbanBoard.styled";

const KanbanBoard = () => {
  const { watched } = useCryptoStore();

  return (
    <>
      <BoardContainer>
        <DndProvider backend={HTML5Backend}>
          <DropArea id="unwatched" title="Trending Market" />
          <DropArea id="watched" title="Watched Coins" />
        </DndProvider>
      </BoardContainer>
      <ChartGrid>
        {watched.map((coin) => (
          <Chart key={coin} coin={coin} />
        ))}
      </ChartGrid>
    </>
  );
};

export default KanbanBoard;
