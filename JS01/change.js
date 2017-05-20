
/**
 * 
 * @authors Rock Legend
 * @date    2017-03-27 10:25:57
 * @version $Id$
 */
 //获得九宫格的盒子
var box = document.getElementByClassName("box1");
var total = box.length;
//确定原始背景色值
function  pristineColor() {
	for (i = 0; i < total; i++) {
		box[i].style.backgroundColor = "#f60";
    }
}
//随机生成颜色
function getColor() {
	//方法1
	// var colorNum = Math.random()*16777215;
	// var optionalColor = Math.floor(colorNum).toString(16);
	// while(optionalColor.length<6){
	// 	optionalColor = '0' + optionalColor;
	// }
	// return '#' + optionalColor;
	//方法2
	// var colorNum = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"];
	// var colorVal = "#";
	// for (var i = 0; i < 6; i++) {
	// 	colorVal += colorNum[Math.round(Math.random()*15)];
	// }
	// return colorVal;
	//方法3
	var colorNum = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f";
	var colorNumChoose = colorNum.split(",");
	var colorVal = "#";
	for (var i = 0; i < 6; i++) {
		colorVal += colorNumChoose[Math.round(Math.random()*16)];
	}
	return colorVal;   
}   
//随机选择1个盒子
function chooseBox() {
    var randomNum = Math.random()*9;
    var floorNum = Math.round(randomNum);
    return box[floorNum];
}
//随机选择盒子颜色
function changeBoxColor() {
	pristineColor();
	// var i;
	do{
		var box1 = chooseBox();
		var box2 = chooseBox();
		var box3 = chooseBox(); 	
	} while (box1 == box2 || box2 == box3 || box1 == box3);
    var box1Color  = box1.style.backgroundColor;
    var box2Color = box2.style.backgroundColor;
    var box3Color = box3.style.backgroundColor;
    box1Color = getColor();
    box2Color = getColor();
    box3Color = getColor();
	// body...
}
var run;
function start(){
    
    // changeBoxColor();
    // run = setInterval(changeBoxColor,1000);
    // start.onclick = false;
    // document.getElementById("open").disabled=true;
}
function stop(){
    pristineColor();
    clearInterval(run);
    // stop.onclick = true;
    // document.getElementById("close").disabled=false;
}