import { useEffect, useState } from "react";

import axios from "axios";

const coingeckoUrl = "https://api.coingecko.com/api/v3/coins/markets";
const url = coingeckoUrl;
const currency = "usd";
const order = "market_cap_desc";
const perPage = 10;
const params = `?vs_currency=${currency}&order=${order}&per_page=${perPage}`;

interface TokenList {
    current_price: number;
    id: string;
    image: string;
    name: string;
    price_change_percentage_24h: number;
    symbol: string;
    total_volume: number;
    sparkline_in_7d: { price: [] };
}

const useFetchTokens = (page: number) => {
    const [tokens, setTokens] = useState<TokenList[]>([]);

    useEffect(() => {
        if (tokens.length !== page * perPage) {
            axios
                .get(`${url}${params}&page=${page}&sparkline=true`)
                .then((res) => setTokens((tokens) => [...tokens, ...res.data]))
                .catch((err) => console.error("FETCH ERROR::", err));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [page]);

    return tokens;
};

export default useFetchTokens;
