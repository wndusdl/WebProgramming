function proc(){
	//지역변수
	let sum = 0;
	
	var a = 10;
	
	//5보다 작을 때까지 반복
	for(var i=0; i<5; i++){
		//10, 20, 30, 40, 50 
		sum += 10;
	}
	
	let vres = document.getElementById('result');
	vres.innerText = i + " " + sum;
}

function calc() {
		//입력한 값 가져오기
   		var vqty = document.getElementById('qty').value;
     	var vprice = document.getElementById('price').value;

     	var res = vqty * vprice;

		var str = `수량 :  ${vqty} <br>`;
     	str += `가격 :  ${vprice} <br>`;
     	str += `총 금액 : ${res} <br>`;
		
     	console.log(str);
      	
     	var vresult = document.getElementById('result');
     	
     	vresult.innerHTML = str;
}