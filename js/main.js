// JavaScript Document
function change(img)
{
	var changePic = img.getAttribute("href");
	var img1 = document.getElementById("img1");
	img1.setAttribute("src",changePic);
	var changeTxt = img.firstChild.firstChild.nodeValue;
	var txt = document.getElementById("txt");
	txt.firstChild.nodeValue = changeTxt;
}
//
//function changed(comment)
//{
//	var txt1 = document.getElementById("comment");
//	var changed = document.getElementById("txt");
//	changed.firstChild.nodeValue = txt1.firstChild.nodeValue
//}

var int=setInterval(clock, 100)
function clock()
{
    var mydate=new Date(); 
    var myHours=mydate.getHours() ;
    var Minutes=mydate.getMinutes() ;
    var Seconds=mydate.getSeconds() ;
	if(Minutes<10)Minutes="0"+Minutes;
	if(myHours<10)myHours="0"+myHours;
	if(Seconds<10)Seconds="0"+Seconds;
    var time1 = myHours+":"+Minutes+":"+Seconds;
    document.getElementById("time").firstChild.nodeValue = time1;
}