import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
} from "chart.js";
import "chartjs-adapter-date-fns";

ChartJS.register(
  LineElement,
  LinearScale,
  CategoryScale,
  PointElement,
  Tooltip,
  Legend,
  TimeScale
);

type ChartData = {
  time: string;
  price: number;
};

const Graph = ({ data }: { data: ChartData[] }) => {
  if (!data || data.length === 0) {
    return <div>No data available</div>;
  }

  const chartData = {
    labels: data.map((point) => point.time),
    datasets: [
      {
        label: "Price (USD)",
        data: data.map((point) => point.price),
        borderColor: "#4a90e2",
        backgroundColor: "rgba(74, 144, 226, 0.2)",
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
    ],
  };

  const chartOptions: ChartOptions<"line"> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      tooltip: {
        callbacks: {
          label: (tooltipItem) => {
            const value = tooltipItem.raw as number;
            return `$${value.toFixed(2)}`;
          },
        },
      },
      legend: {
        display: true,
        position: "top",
      },
    },
    scales: {
      x: {
        type: "time",
        time: {
          tooltipFormat: "MMM dd, yyyy HH:mm",
          displayFormats: {
            hour: "MMM dd, HH:mm",
          },
        },
        title: {
          display: true,
          text: "Date & Time",
        },
      },
      y: {
        title: {
          display: true,
          text: "Price (USD)",
        },
        ticks: {
          callback: (value) => `$${value}`,
        },
      },
    },
  };

  return (
    <div style={{ height: "400px", width: "100%" }}>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default Graph;
