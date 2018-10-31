
var rand=0,i1=0,kyanq=10,progres=0,shahum=10,k=1,shahum2=10,op=10;
$(document).ready(function(){	
	ran();
})
function ran(){
	$(".div1").css("color","#C22900")//
	rand2();
}
function rand2(){
	while(i1!=shahum2){	
	rand=Math.floor(Math.random() * 30)+1;
	var arjeq=$("#"+rand).text();	
	if(arjeq==""){
		$("#"+rand).text("shahum");		
		i1++;
	}	
}
}


$(".div1").click(function(){		   
	var text=$(this).text();
	$(this).css("transition","2s");
	$(this).css("transform","rotateY(360deg)");
	$(this).prop('disabled', true);
	if(text==""){
		$(this).css("backgroundColor","blue");
		$(this).css("color","white").text("puch");
		kyanq--;				
		$("#kyanq").text("kyanq "+kyanq);		
	}
	else {
		$(this).css("backgroundColor","green");
		$(this).css("color","white");
		kyanq++;
		progres+=(100/shahum2);
		shahum--;
		$("#kyanq").text("kyanq "+kyanq);
		$("#shahum").text(shahum+" shahum");
		$("#progres").val(progres);
		
	}
	if(progres>99.9){
		prog();	
	}
	if(kyanq==0){
		shahum=10,k=1,shahum2=10,op=10;		
		$("#ashxarh").text(k+"-in ashxarh");
		alert("duq partveciq");		
		norxax();		
	}
	
})


function norxax(){
	rand=0,i1=0,kyanq=10,progres=0,
	$("#ognutyun").text("duq uneq 1 ognutyun");	
		$(".div1").prop('disabled', false);
		$("#ognutyun").prop('disabled', false);
		$("#kyanq").text("kyanq "+kyanq);
		$("#shahum").text(shahum+" shahum");		
		$(".div1").text("");
		$("#progres").val(0);
		$(".div1").css("transition","0s");
		$(".div1").css("transform","rotateY(0deg)");
		$(".div1").css("backgroundColor","#C22900");
		ran();
}
function prog(){		
		k++;		
		$("#ashxarh").text(k+"-rd ashxarh");				
		alert("shnorhavorum enq duq ancaq "+k+" rd ashxarh");
		shahum=(10-k+1),shahum2-=1;		
		op--;
		norxax();
}
$("#xarnel").click(function(){
	for(var i=1;i<=30;i++){
		var d=document.getElementById(i);
		var s=d.style.color;
		var a=$("#"+i).text();		
		if(s=="rgb(194, 41, 0)" && a=="shahum" ){
			$("#"+i).text("");
		}
	}	
	i1=op-shahum;	
	rand2();	
	
})

$("#ognutyun").click(function(){	
	for(var i=1;i<=30;i++){
		var d=document.getElementById(i);
		var s=d.style.color;
		var a=$("#"+i).text();		
		if(a=="shahum" && s=="rgb(194, 41, 0)"){
			$("#"+i).css("color","white");		
			progres+=(100/shahum2);
			shahum--;
			$("#"+i).css("backgroundColor","green");
			$("#"+i).css("transition","2s");
			$("#"+i).css("transform","rotateY(360deg)");
			
			$("#shahum").text(shahum+" shahum");
			$("#progres").val(progres);			
			$("#ognutyun").text("duq chuneq ognutyun");	
			$("#ognutyun").prop('disabled', true);
			$("#"+i).prop('disabled', true);
			if(progres>99.9){
				prog();	
			}
			break;
		}
	}	
})





