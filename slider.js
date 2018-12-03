var imgMass = document.querySelectorAll('.image');
var step = 200;
var width = 0;
var count = 0;
var index= 0;


for(var i=0;i<imgMass.length;i++){
		imgMass[i].style.left = width +'px';
		width = width + step;

	}


setInterval(function(){
	for(var i=0;i<imgMass.length;i++){
		imgMass[i].style.left = (imgMass[i].offsetLeft - step) +'px';
		}


	setTimeout(function(){

		if (count==1){
	 		imgMass[index].style.bottom = -107 + 'px';
	 		count++;
    		setTimeout(function(){
    			if (count==2){
					imgMass[index].style.left = (imgMass[index].offsetLeft)+(step*imgMass.length-1)+1+'px';
					count++;
					setTimeout(function(){
						if (count==3){
							imgMass[index].style.bottom = 0 + 'px';
							if (index != imgMass.length-1){
									index++;	
							}else{
								index=0;
							}
						
							count=0;
						}
					}, 500);
				}	
    		}, 500);
		}

	}, 500);	
	count++;
},4000);


