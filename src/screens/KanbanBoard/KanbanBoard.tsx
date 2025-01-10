import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { isTouchDevice } from "@utils/isTouchDevice";
import DropArea from "@components/DropArea/DropArea";
import { useCryptoStore } from "@store/store";
import { BoardContainer, ChartGrid } from "./kanbanBoard.styled";
import Chart from "@screens/Chart/Chart";
const KanbanBoard = () => {
  const { watched } = useCryptoStore();

  return (
    <>
      <BoardContainer>
        <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
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
