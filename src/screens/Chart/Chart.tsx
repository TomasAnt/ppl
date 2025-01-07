import { useState } from "react";
import { CartesianGrid, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";
import { usePriceData } from "../../hooks/usePriceData";
import {
    StyledButton,
    StyledCryptoChart,
    StyledCryptoChartContainer,
    StyledCryptoChartHeading,
    StyledError,
    StyledLoading,
    StyledSelectorContainer,
} from "./chart.styled";

const Chart = ({ coin }: { coin: string }) => {
    const [range, setRange] = useState("Today");
    const { data, loading, error } = usePriceData(coin.toLowerCase(), range);

    return (
        <StyledCryptoChart>
            <StyledCryptoChartHeading>{coin} Price Chart</StyledCryptoChartHeading>
            <StyledSelectorContainer>
                {["Past Month", "Past Week", "Today"].map((option) => (
                    <StyledButton key={option} onClick={() => setRange(option)} active={range === option}>
                        {option}
                    </StyledButton>
                ))}
            </StyledSelectorContainer>
            {loading && <StyledLoading>Loading {coin} data...</StyledLoading>}
            {error && <StyledError>Error: {error}</StyledError>}
            {!loading && !error && (
                <StyledCryptoChartContainer>
                    <LineChart
                        width={400}
                        height={200}
                        data={data}
                        margin={{ top: 10, right: 20, bottom: 10, left: 20 }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="price" stroke="#8884d8" />
                    </LineChart>
                </StyledCryptoChartContainer>
            )}
        </StyledCryptoChart>
    );
};

export default Chart;
