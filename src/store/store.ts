import { create } from "zustand";

type Coin = string;

type CryptoState = {
  unwatched: Coin[];
  watched: Coin[];
  moveCoin: (coin: Coin, toWatched: boolean) => void;
};

export const useCryptoStore = create<CryptoState>((set) => ({
  unwatched: [
    "Bitcoin",
    "Ethereum",
    "XRP",
    "Cardano",
    "Polkadot",
    "Dogecoin",
    "Litecoin",
    "Chainlink",
    "Avalanche",
    "Stellar",
    "Uniswap",
    "Aave",
    "Monero",
    "Algorand",
  ],
  watched: ["Solana"],
  moveCoin: async (coin, toWatched) => {
    set((state) => ({
      unwatched: toWatched
        ? state.unwatched.filter((c) => c !== coin)
        : [...state.unwatched, coin],
      watched: toWatched
        ? [...state.watched, coin]
        : state.watched.filter((c) => c !== coin),
    }));

    try {
      if (toWatched) {
        const response = await fetch(
          `https://api.coincap.io/v2/assets/${coin.toLowerCase()}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch coin data");
        }
        const data = await response.json();
        if (!data || !data.data) {
          throw new Error("Invalid coin data received");
        }
      }
    } catch (error) {
      let errorMessage = "An unknown error occurred";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      alert(`Error moving ${coin}: ${errorMessage}`);

      set((state) => ({
        unwatched: toWatched
          ? [...state.unwatched, coin]
          : state.unwatched.filter((c) => c !== coin),
        watched: toWatched
          ? state.watched.filter((c) => c !== coin)
          : [...state.watched, coin],
      }));
    }
  },
}));
