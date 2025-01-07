import { StyledCryptoChart, StyledCryptoChartContainer, StyledCryptoChartHeading } from "./cryptoChart.styled";

const CryptoChart = ({ coin }: { coin: string }) => {
    return (
        <StyledCryptoChart>
            <StyledCryptoChartHeading>{coin} Price Chart</StyledCryptoChartHeading>
            <StyledCryptoChartContainer>[Chart Placeholder]</StyledCryptoChartContainer>
        </StyledCryptoChart>
    );
};

export default CryptoChart;
