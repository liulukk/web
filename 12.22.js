var ta1=document.getElementById('ta1');
var ta2=document.getElementById('ta2');
var ta3=document.getElementById('ta3');
var ta4=document.getElementById('ta4');
var ta5=document.getElementById('ta5');
var ta6=document.getElementById('ta6');
var ta7=document.getElementById('ta7');
var ta8=document.getElementById('ta8');
var ta9=document.getElementById('ta9');
var ta10=document.getElementById('ta10');
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
	setInterval(function(){
	var now=parseInt(getStyle(ta1,"left"));
	if(now==-400){
		ta1.style.left="1000px";
	}
	else{
		ta1.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta2,"left"));
	if(now==-400){
		ta2.style.left="1000px";
	}
	else{
		ta2.style.left=now-5+"px";
	}
},100)
		setInterval(function(){
	var now=parseInt(getStyle(ta7,"left"));
	if(now==-400){
		ta7.style.left="1000px";
	}
	else{
		ta7.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta8,"left"));
	if(now==-400){
		ta8.style.left="1000px";
	}
	else{
		ta8.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta3,"left"));
	if(now==-400){
		ta3.style.left="1000px";
	}
	else{
		ta3.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta4,"left"));
	if(now==-400){
		ta4.style.left="1000px";
	}
	else{
		ta4.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta5,"left"));
	if(now==-400){
		ta5.style.left="1000px";
	}
	else{
		ta5.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta6,"left"));
	if(now==-400){
		ta6.style.left="1000px";
	}
	else{
		ta6.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta9,"left"));
	if(now==-400){
		ta9.style.left="1000px";
	}
	else{
		ta9.style.left=now-5+"px";
	}
},100)
	setInterval(function(){
	var now=parseInt(getStyle(ta10,"left"));
	if(now==-400){
		ta10.style.left="1000px";
	}
	else{
		ta10.style.left=now-5+"px";
	}
},100)

function openDialog1(){
    document.getElementById('light1').style.display='block';
    document.getElementById('fade1').style.display='block'
}

function closeDialog1(){
    document.getElementById('light1').style.display='none';
    document.getElementById('fade1').style.display='none';
}

function openDialog2(){
    document.getElementById('light2').style.display='block';
    document.getElementById('fade2').style.display='block'
}

function closeDialog2(){
    document.getElementById('light2').style.display='none';
    document.getElementById('fade2').style.display='none';
}

function openDialog3(){
    document.getElementById('light3').style.display='block';
    document.getElementById('fade3').style.display='block'
}

function closeDialog3(){
    document.getElementById('light3').style.display='none';
    document.getElementById('fade3').style.display='none';
}

function openDialog4(){
    document.getElementById('light4').style.display='block';
    document.getElementById('fade4').style.display='block'
}

function closeDialog4(){
    document.getElementById('light4').style.display='none';
    document.getElementById('fade4').style.display='none';
}

function openDialog5(){
    document.getElementById('light5').style.display='block';
    document.getElementById('fade5').style.display='block'
}

function closeDialog5(){
    document.getElementById('light5').style.display='none';
    document.getElementById('fade5').style.display='none';
}

function openDialog6(){
    document.getElementById('light6').style.display='block';
    document.getElementById('fade6').style.display='block'
}

function closeDialog6(){
    document.getElementById('light6').style.display='none';
    document.getElementById('fade6').style.display='none';
}

function openDialog7(){
    document.getElementById('light7').style.display='block';
    document.getElementById('fade7').style.display='block'
}

function closeDialog7(){
    document.getElementById('light7').style.display='none';
    document.getElementById('fade7').style.display='none';
}

function openDialog8(){
    document.getElementById('light8').style.display='block';
    document.getElementById('fade8').style.display='block'
}

function closeDialog8(){
    document.getElementById('light8').style.display='none';
    document.getElementById('fade8').style.display='none';
}

function openDialog9(){
    document.getElementById('light9').style.display='block';
    document.getElementById('fade9').style.display='block'
}

function closeDialog9(){
    document.getElementById('light9').style.display='none';
    document.getElementById('fade9').style.display='none';
}

function openDialog10(){
    document.getElementById('light10').style.display='block';
    document.getElementById('fade10').style.display='block'
}

function closeDialog10(){
    document.getElementById('light10').style.display='none';
    document.getElementById('fade10').style.display='none';
}