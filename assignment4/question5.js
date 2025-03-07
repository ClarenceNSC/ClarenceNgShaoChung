const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];
let index = 0
let result = 0

for (let index = 0; index < disneyData.length; index++) {
	result += parseFloat(disneyData[index]['close']);
}
	  console.log (result/2)
