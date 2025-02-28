const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};
const open = parseFloat(disneyData.open);
const high = parseFloat(disneyData.high);
const low = parseFloat(disneyData.low);
const close = parseFloat(disneyData.close);
const result = open - high + low - close
console.log (result)
const resultTofixed = result.toFixed(2)
console.log (resultTofixed)

const disneyData = {
    open: "120.54",
    high: "122.56",
    low: "120.54",
    close: "121.09",
    volume: "1512311"
}
console.log (disneyData)

