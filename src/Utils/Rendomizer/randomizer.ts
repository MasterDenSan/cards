const getRandom = (lo: number, hi: number, n: number) => {
    const res = new Set();
    while (res.size < n) res.add(Math.floor(Math.random() * (hi - lo + 1)) + lo);
    return [...res];
}

export default getRandom;