
const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];
let result = 0;
let index = 0;
for (let index = 0; index < msftData.length; index++ ) {
	result += msftData[index]['3'];
}
console.log(result/2);
