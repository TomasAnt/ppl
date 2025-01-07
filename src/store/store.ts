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
        "Shiba Inu",
        "Aave",
        "Monero",
        "Algorand",
    ],
    watched: ["Solana"],
    moveCoin: (coin, toWatched) =>
        set((state) => ({
            unwatched: toWatched ? state.unwatched.filter((c) => c !== coin) : [...state.unwatched, coin],
            watched: toWatched ? [...state.watched, coin] : state.watched.filter((c) => c !== coin),
        })),
}));
