import axios from "axios";
import { useEffect, useState } from "react";

type DataPoint = {
  time: string;
  price: number;
};

type UsePriceDataReturn = {
  data: DataPoint[];
  loading: boolean;
  error: string | null;
};

const getTimestampRange = (range: string): { start: number; end: number } => {
  const now = Date.now();
  const end = Math.floor(now / 1000);
  const ranges: { [key: string]: number } = {
    "Past Month": 30 * 24 * 60 * 60,
    "Past Week": 7 * 24 * 60 * 60,
    Today: 24 * 60 * 60,
  };

  return {
    start: end - ranges[range],
    end,
  };
};

export const usePriceData = (
  coinId: string,
  range: string
): UsePriceDataReturn => {
  const [data, setData] = useState<DataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;
    const intervalTime = 30000; // Fetch every 30 seconds
    let interval: NodeJS.Timeout;

    const fetchData = async () => {
      if (!isMounted) return;

      setLoading(true);
      setError(null);

      try {
        const { start, end } = getTimestampRange(range);
        const response = await axios.get(
          `https://api.coincap.io/v2/assets/${coinId}/history`,
          {
            params: {
              interval: "h1",
              start: start * 1000, // Convert to milliseconds
              end: end * 1000, // Convert to milliseconds
            },
          }
        );

        const priceData = response.data.data;
        if (!priceData || priceData.length === 0) {
          throw new Error("No price data available");
        }

        const formattedData = priceData.map(
          (point: { priceUsd: string; time: number }) => ({
            time: new Date(point.time).toISOString(),
            price: parseFloat(point.priceUsd),
          })
        );

        if (isMounted) {
          setData(formattedData);
        }
      } catch (err: unknown) {
        let errorMessage = "An error occurred while fetching data";

        if (err instanceof Error) {
          errorMessage = err.message;
        }

        if (isMounted) {
          setError(errorMessage);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchData();

    interval = setInterval(fetchData, intervalTime);

    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [coinId, range]);

  return { data, loading, error };
};
