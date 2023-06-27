window.promises = [];

// Do not change the code above this
// add your promises to the array `promises`
let a=new Promise((resolve)=>{
	setTimeOut(()=>{
		resolve();
	},1000);
})
let e=new Promise((resolve)=>{
	setTimeOut(()=>{
		resolve();
	},2000);
})
let b=new Promise((resolve)=>{
	setTimeOut(()=>{
		resolve();
	},3000);
})
let c=new Promise((resolve)=>{
	setTimeOut(()=>{
		resolve();
	},4000);
})
let d=new Promise((resolve)=>{
	setTimeOut(()=>{
		resolve();
	},5000);
})
let x=Promise.any([a,b,c,d,e]);
x.then((data)=>{
	let p=document.getElementById("output");
	p.innerText=data;
})

