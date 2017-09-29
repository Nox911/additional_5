module.exports = function check(str, bracketsConfig) {
// Check for odd:
if (str.length%2) {
	return false;
}
// Find similar brackets and delete them:
var temp = str.split('');
for ( var i=1;i<temp.length;i++) {
	for (var j=0;j<bracketsConfig.length;j++){
		if ((temp[i] === bracketsConfig[j][1]) && (temp[i-1] === bracketsConfig[j][0])) {
			temp.splice(i-1,2);
			i-=2;
		}		
	}
}
// Check our new array(temp):
return (temp.length>0)?false:true;
}
