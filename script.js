//your JS code here. If required.
const outputDiv = document.getElementById("output");
function getArr(){
return new Promise(resolve)=>{
	setTimeout(()=>{
		resolve([1,2,3,4]);
		
	},3000)
}};
getArr().then((arr)=>{
const evens=arr.filter(num=>num%2==0);
return new Promise(reoslve)=>
 outputDiv.textContent = evens.join(",");
        resolve(evens);
      }, 1000);
 });
})
.then((evens)=>{
	const multiplied =evens.map(num=>num*2);

	return new Promise((resolve)=>{
		outputDiv.textContent = multiplied.join(",");
        resolve(multiplied);
      }, 2000);
	})
})