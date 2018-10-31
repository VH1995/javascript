

$(".vxax").css("background-image","url('apple.jpg')");



var qanak=25;
var v=0;
while(v!=8){
var vrand=Math.floor(Math.random() * 16)+1;
var a=$("#"+vrand).css("background-image");
if(a.indexOf("apple")>-1){
	$("#"+vrand).css("background-image","url('tandz.jpg')");
	v++;
}

}
var matrix = [];
var va=1;
for(var i=1; i<=4; i++) {
    matrix[i] = [];
    for(var j=1; j<=4; j++) {
        matrix[i][j] = va;
		va++;
    }
}

var k=0;
$(".vxax").click(function(){
	var apple=0;
	qanak--;
	$("#h").text("duq uneq "+qanak+" cliki htaravorutyun");	
	var c=$(this).attr("id");
	var ca=$(this).attr("id");
	if(c<=4){
		k=1;
	}
	else if(c<=8){
		k=2;
	}
	else if(c<=12){
		k=3;
	}
	else{
		k=4;
	}
	
	if(c==1||c==5||c==9||c==13){
		c=1;
	}
	else if(c==2||c==6||c==10||c==14){
		c=2;
	}
	else if(c==3||c==7||c==11||c==15){
		c=3;
	}
	else{
		c=4;
	}
	
	    
		for(var j=1; j<=4; j++) {
			var a=$("#"+matrix[k][j]).css("background-image");
			if(a.indexOf("apple")>-1){
				$("#"+matrix[k][j]).css("background-image","url('tandz.jpg')");			
			}
			else{
				$("#"+matrix[k][j]).css("background-image","url('apple.jpg')");
			}

			var a=$("#"+c).css("background-image");
			if(ca!=c){
				if(a.indexOf("apple")>-1){
				$("#"+c).css("background-image","url('tandz.jpg')");			
			}
			else{
				$("#"+c).css("background-image","url('apple.jpg')");
			}
			}
			c=c+4;			
		}
		if(qanak==0){
			alert("duq partveciq");
			qanak=25;
			$("#h").text("duq uneq "+qanak+" cliki htaravorutyun");
		}

		for (var i = 1; i <= 16; i++) {
			var a=$("#"+i).css("background-image");
			if(a.indexOf("apple")>-1){				
				apple++;
			}			
			
		}

		if(apple==16 || apple==0){
			alert("duq haxteciq");
			location.reload(); 
		}
	
});