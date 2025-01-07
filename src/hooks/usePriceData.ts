import axios from "axios";
import { useEffect, useState } from "react";

type DataPoint = {
    time: string;
    price: number;
};

const getTimestampRange = (range: string): { start: number; end: number } => {
    const now = Date.now();
    const end = Math.floor(now / 1000);
    const ranges: { [key: string]: number } = {
        "Past Month": 30 * 24 * 60 * 60,
        "Past Week": 7 * 24 * 60 * 60,
        Today: 24 * 60 * 60,
    };
    const start = end - ranges[range];
    return { start, end };
};

export const usePriceData = (coinId: string, range: string) => {
    const [data, setData] = useState<DataPoint[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { start, end } = getTimestampRange(range);
                const response = await axios.get(
                    `https://api.coincap.io/v2/assets/${coinId}/history?interval=h1&start=${start * 1000}&end=${
                        end * 1000
                    }`
                );

                const priceData = response.data.data;
                if (!priceData || priceData.length === 0) {
                    throw new Error("Price data not available");
                }

                const formattedData = priceData.map((point: { priceUsd: string; time: number }) => ({
                    time: new Date(point.time).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
                    price: parseFloat(point.priceUsd).toFixed(2),
                }));

                setData(formattedData);
                setError(null);
            } catch (err: any) {
                setError(err.message || "Error fetching price data");
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [coinId, range]);

    return { data, loading, error };
};
