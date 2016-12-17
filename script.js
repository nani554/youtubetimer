$(function(){
	//$("#buzzer")[0].play();imes up sound
	$("#reset").hide();
	
	var count = +($("#num").html());
	var breakcount = +($("#breaknum").html());/* num and breaknum are stored in variables so that they can be compared t.i count > 5 */

	console.log(count);


	$("#minus5Clock").on("click",function(){
		if(count>5){
				count -=5;
				$("#num").html(count);
				console.log(count);
		}

	})
	$("#add5Clock").on("click",function(){
		if(count < 25){
			count += 5 ;
			$("#num").html(count);
			console.log(count);
		}
	})

	$("#add5Break").on("click",function(){
		if(breakcount < 10){
			breakcount +=5 ;
			$("#breaknum").html(breakcount);
			console.log(breakcount);
		}
	})

	$("#minus5Break").on("click",function(){
		if(breakcount > 5){
			breakcount -= 5;
			$("#breaknum").html(breakcount);
			console.log(breakcount);
		}
	})

	$("#start").on("click",function(){
		$("#start,#title1,#title2,#minus5Clock,#add5Clock,#minus5Break,#add5Break,#num,#breaknum").hide();

		var counter = setInterval(timer,1000);
		count *= 60;
		breakcount *=60;
		function timer(){
			$("#timeType").show();
			$("#timeType").html("Session Time: ");
			$("#num").show();
			count -= 1 ;
			if(count === 0){
				var buzzer = $("#buzzer")[0].play();
				clearInterval(counter);//to break the count we use this
				var startBreak = setInterval(breakTimer,1000);
				$("#num").hide();
			}
			if(count%60>=10){
				$("#num").html(Math.floor(count/60)+":"+count%60);
			}
			else{
				$("#num").html(Math.floor(count/60)+":"+count%60);
			}
		/*$("#num").html(count);
			console.log(count);*/

		function breakTimer(){
			$("#timeType").show();
			$("#timeType").html("Break Time: ");
			$("#breaknum").show();
			breakcount -= 1;
			if(breakcount === 0){
					$("#breakbuzzer")[0].play();
					clearInterval(startBreak);
					$("#timeType,#breaknum").hide();
					$("#reset").show();

			}
			if(breakcount%60>=10){
				$("#breaknum").html(Math.floor(breakcount/60)+":"+breakcount%60);
			}
			else{
				$("#breaknum").html(Math.floor(breakcount/60)+":"+breakcount%60);
			}
			/*$("#breaknum").html(breakcount);
			console.log(breakcount);*/


		}
		}
		$("#reset").on("click",function(){
			$("#title1,#title2,#num,#breaknum,#add5Clock,#add5Break,#minus5Break,#minus5Clock,#start").show();
			$("#reset").hide();
			count = 1;
			breakcount = 5;
			$("#num").html(count);
			$("#breaknum").html(breakcount);
		})
		
		

	})
})

/* (or)
 $(function(){
	var buzzer = $("#buzzer")[0];
	buzzer.play();
})*/

