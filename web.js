/*
* @Author: 87046
* @Date:   2019-12-22 14:49:21
* @Last Modified by:   87046
* @Last Modified time: 2019-12-25 15:57:47
*/
var nav = document.getElementById("slide");
var slider = document.getElementById('slider');
var pic0 = document.getElementById("pic0");
var pic1 = document.getElementById("pic1");
var pic2 = document.getElementById("pic2");
var pic3 = document.getElementById("pic3");
var pic4 = document.getElementById("pic4");
var pic5 = document.getElementById("pic5");
var aa = document.getElementById("aa");
var head = document.getElementsByClassName("head");
var head1 = document.getElementsByClassName("head1");
var head2 = document.getElementsByClassName("head2");

var Head = document.getElementsByClassName("Head");
var Head1 = document.getElementsByClassName("Head1");
var Head2 = document.getElementsByClassName("Head2");
var left = document.getElementById("id");
var big = document.getElementById("big");
var big1 = document.getElementById("big1");
var big2 = document.getElementById("big2");
var li = document.getElementsByClassName("li");

	


//console.log(smallHead0);
pic0.onmouseover = function(){
	
	change();
	pic0.src = "imge/1.png";
}

pic1.onmouseover = function(){
	change();
	pic1.src = "imge/2.png";
	

}
pic2.onmouseover = function(){
	change();
	pic2.src = "imge/3.png";
}
pic3.onmouseover = function(){
	change();
	pic3.src = "imge/4.png";
	
}
pic4.onmouseover = function(){
	change();
	pic4.src = "imge/5.png";
	
}
pic5.onmouseover = function(){
	
	change();
	pic5.src = "imge/6.png";

}
function change(){
	pic5.src = "imge/66.png";
	pic0.src = "imge/11.png";
	pic1.src = "imge/22.png";
	pic2.src = "imge/33.png";
	pic3.src = "imge/44.png";
	pic4.src = "imge/55.png";
}
function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
setInterval(function(){
		var now = new Date();
		var h = now.getHours();
		var m = now.getMinutes();
		var s = now.getSeconds();
		
		var _date = [
			h<10?0:Math.floor(h/10), h%10,
			m<10?0:Math.floor(m/10), m%10,
			s<10?0:Math.floor(s/10), s%10
			]
		
		var imgs = document.getElementsByClassName("img");
		for(var i=0; i<imgs.length; i++){
			imgs[i].src = "imgs/"+_date[i]+".png";
		}
	}, 1000);
console.log(li[0]);

Head[0].onmouseover = function(){
	head[0].style.backgroundColor="#f3c258";
	big.src = "imge/甄姬"+0+".png";
}
Head[0].onmouseout = function(){
	head[0].style.backgroundColor="";
}
Head[1].onmouseover = function(){
	head[1].style.backgroundColor="#f3c258";
	big.src = "imge/甄姬"+1+".jpg";
}
Head[1].onmouseout = function(){
	head[1].style.backgroundColor="";
}
Head[2].onmouseover = function(){
	head[2].style.backgroundColor="#f3c258";
	big.src = "imge/甄姬"+2+".jpg";
	
}
Head[2].onmouseout = function(){
	head[2].style.backgroundColor="";
	
}
Head1[0].onmouseover = function(){
	head1[0].style.backgroundColor="#f3c258";
	big1.src = "imge/程咬金0.jpg";
}
Head1[0].onmouseout = function(){
	head1[0].style.backgroundColor="";
}
Head1[1].onmouseover = function(){
	head1[1].style.backgroundColor="#f3c258";
	big1.src = "imge/程咬金1.jpg";
}
Head1[1].onmouseout = function(){
	head1[1].style.backgroundColor="";
}
Head1[2].onmouseover = function(){
	head1[2].style.backgroundColor="#f3c258";
	big1.src = "imge/程咬金2.jpeg";
	
}
Head1[2].onmouseout = function(){
	head1[2].style.backgroundColor="";
	
}
function oldT(i){
	li[i].style.color="#f3c258";
	li[i].style.backgroundColor="#211f34";
	}
function newT(i){
	li[i].style.color = "#211f34";
	li[i].style.backgroundColor="#f3c258";
		}

	li[0].onmouseover = function(){newT(0);}
	li[0].onmouseout = function(){oldT(0);}
	li[1].onmouseover = function(){newT(1);}
	li[1].onmouseout = function(){oldT(1);}
	li[2].onmouseover = function(){newT(2);}
	li[2].onmouseout = function(){oldT(2);}
	li[3].onmouseover = function(){newT(3);}
	li[3].onmouseout = function(){oldT(3);}
	li[4].onmouseover = function(){newT(4);}
	li[4].onmouseout = function(){oldT(4);}
	li[5].onmouseover = function(){newT(5);}
	li[5].onmouseout = function(){oldT(5);}
Head2[0].onmouseover = function(){
	head2[0].style.backgroundColor="#f3c258";
	big2.src = "imge/姜子牙1.jpeg";
}
Head2[0].onmouseout = function(){
	head2[0].style.backgroundColor="";
}
Head2[1].onmouseover = function(){
	head2[1].style.backgroundColor="#f3c258";
	big2.src = "imge/姜子牙1.jpg";
}
Head2[1].onmouseout = function(){
	head2[1].style.backgroundColor="";
}
Head2[2].onmouseover = function(){
	head2[2].style.backgroundColor="#f3c258";
	big2.src = "imge/姜子牙2.jpg";
	
}
Head2[2].onmouseout = function(){
	head2[2].style.backgroundColor="";
	
}
	
function onTopClick(m){
	window.location.hash = ""+m;
}


