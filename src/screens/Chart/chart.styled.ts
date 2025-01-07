import styled from "styled-components";

export const StyledCryptoChart = styled.div`
    margin-top: 20px;
`;

export const StyledDataSelector = styled.div`
    display: flex;
    justify-content: center;
    margin: 10px 0;
    button {
        border: 1px solid #ccc;
        border-radius: 4px;
        cursor: pointer;
    }
`;

export const StyledCryptoChartSuccess = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: green;
`;

export const StyledCryptoChartHeading = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: royalblue;
    text-align: center;
`;

export const StyledCryptoChartError = styled.h4`
    font-size: 1.5rem;
    margin-bottom: 10px;
    color: red;
`;

export const StyledCryptoChartContainer = styled.div`
    width: 100%;
    height: 200px;
    border: 1px solid lightgray;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const StyledSelectorContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
    margin: 10px 0;
`;

export const StyledButton = styled.button<{ active: boolean }>`
    padding: 8px 12px;
    font-size: 0.9rem;
    color: ${({ active }) => (active ? "#fff" : "#333")};
    background-color: ${({ active }) => (active ? "#007bff" : "#f1f1f1")};
    border: 1px solid ${({ active }) => (active ? "#007bff" : "#ccc")};
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.2s, color 0.2s;

    &:hover {
        background-color: ${({ active }) => (active ? "#0056b3" : "#e0e0e0")};
    }
`;

export const StyledError = styled.div`
    color: #d9534f;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;

export const StyledLoading = styled.div`
    color: #007bff;
    text-align: center;
    font-weight: bold;
    padding: 10px;
`;
