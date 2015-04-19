//project 2 js functions

//req 4-A
var isArmstrong = function(n){
	"use strict";
	//convert to string
	var sum = 0
	n = String(n);
	for (var i = 0; i < n.length; ++i){
		sum = sum + Math.pow(n[i], n.length);
	}
	if (sum == n){
		return "true"
	}
	else {
		return "false"
	}
}

//req 4-B
var allArmstrongs = function(){
	"use strict";
	var result = '';
	//generate
	for (var k = 1; k <= 99999; ++k){
		//test
		if (isArmstrong(k) == "true"){ result = result + k + ', ';
		}
	}
	return result
}

//req 4-C
var allSubstrings1 = function(s){
	"use strict";
	var result = "";
	for (var i = 0; i < s.length; ++i){
		for (var k = 1; k < s.length+1; ++k){
			if (i < k){
				result = result + s.substring(i,k) + ',';
			}
		}
	}
	return result;
}

//req 4-D
var allSubstrings2 =  function(s){
	"use strict";
	var result = [];
	var total = '';
	for (var i = 0; i < s.length; ++i){
		for (var k = 1; k < s.length+1; ++k){
			if (i < k){
				total = result.push(s.substring(i,k));
			}
		}
	}
	return result;
}

//req 4-E
var maxWord =  function(s){
	"use strict";
	var result = '';
	var test = '';
	s = ' ' + s + ' ';
	for (var i = 0; i < s.length; ++i){
		if(s[i] == ' '){
			for (var k = 1; k < s.length+1; ++k){
				if (i < k){
					if (s[k] == ' '){
						test = s.substring(i+1,k);
						k = s.length+1;
						if (test.length > result.length){
							result = test;
						}
					}
				}
			}
		}
	}
	return result;
}