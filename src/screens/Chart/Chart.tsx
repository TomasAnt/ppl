import { useState } from "react";
import { usePriceData } from "../../hooks/usePriceData";
import {
  ChartContainer,
  ChartHeading,
  ErrorMessage,
  LoadingMessage,
  SelectorWrapper,
} from "./chart.styled";
import Button from "@components/Button/Button";
import Graph from "@components/Graph/Graph";

type RangeOption = "Today" | "Past Week" | "Past Month";

const Chart = ({ coin }: { coin: string }) => {
  const [range, setRange] = useState<RangeOption>("Today");
  const { data, loading, error } = usePriceData(coin.toLowerCase(), range);

  const options: RangeOption[] = ["Past Month", "Past Week", "Today"];

  return (
    <ChartContainer>
      <ChartHeading>{coin} Price Chart</ChartHeading>
      <SelectorWrapper>
        {options.map((option) => (
          <Button
            key={option}
            option={option}
            setRange={setRange}
            range={range}
          />
        ))}
      </SelectorWrapper>
      {loading && <LoadingMessage>Loading {coin} data...</LoadingMessage>}
      {error && <ErrorMessage>Error: {error}</ErrorMessage>}
      {!loading && !error && <Graph data={data} />}
    </ChartContainer>
  );
};

export default Chart;
