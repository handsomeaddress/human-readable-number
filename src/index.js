module.exports = function toReadable (number){
    //от 0 до 20 - числа почти без логики
	const dictionary0 = {
		'0'  : 'zero',
		'1'  : 'one',
		'2'  : 'two',
		'3'  : 'three',
		'4'  : 'four',
		'5'  : 'five',
		'6'  : 'six',
		'7'  : 'seven',
		'8'  : 'eight',
		'9'  : 'nine',
		'10' : 'ten',
		'11' : 'eleven',
		'12' : 'twelve',
		'13' : 'thirteen',
		'14' : 'fourteen',
		'15' : 'fifteen',
		'16' : 'sixteen',
		'17' : 'seventeen',
		'18' : 'eighteen',
		'19' : 'nineteen',
		'20' : 'twenty'
	};
	//от 20 до 99
	const dictionary1 = {
		'2'  : 'twenty',
		'3'  : 'thirty',
		'4'  : 'forty',
		'5'  : 'fifty',
		'6'  : 'sixty',
		'7'  : 'seventy',
		'8'  : 'eighty',
		'9'  : 'ninety'
	};
	// массив с объектами
	let arr = [
		dictionary1,
		dictionary0
	];
    let road = 0,
		result = '';
	if(number > 20 && number < 100){
		number = String(number).split('');
		road = number.length - 1;
	}else if(number >= 100){
		number = number / 100;
		number = String(number.toFixed(2)).split('');
	
		const index = number.indexOf('.');
		if (index > -1){
			number.splice(index, 1);
		}
		
		road = 2;
	}else{
		road = 0;
	}
	switch(road){
		case 0:
			return String(dictionary0[number]);
			break;
		case 1:
			for(let i = 0; i <= number.length - 1; i++){
				result += arr[i][number[i]] == 'zero' ? '' : arr[i][number[i]]  + ' ';
			}
			return result.replace(/\s$/,'');
			break;
		case 2:
			result += String(dictionary0[number[0]]) + ' hundred ';
			number.splice(0, 1);
			if(number[0] < 2 && number[1] <= 9){
				number = number[0] + number[1];
				result += String(dictionary0[number.replace(/^0/g,'')]) == 'zero' ? '' : String(dictionary0[number.replace(/^0/g,'')]);
			}else{
				for(let i = 0; i <= number.length - 1; i++){
					result += arr[i][number[i]] == 'zero' ? '' : arr[i][number[i]]  + ' ';
				}
			}
			return result.replace(/\s$/,'');
			break;
		default:
			break;
	};
};
