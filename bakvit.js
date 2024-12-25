let a = document.querySelector("#btn");
let b = document.querySelector("body");
let d = document.createElement("img");
let g = document.querySelector("#send");
let h = document.querySelector(".iki");
let m = document.querySelector("ol");


console.log(a);
console.log(b);
console.log(d);


a.addEventListener("click", function () {
  b.classList.toggle("yigirma");
  let q = document.querySelector("body li")
  q.classList.toggle("onbir")
});


g.addEventListener("click", function () {
  let hValue = h.value.trim(); 

  if (hValue === "") {
    alert("Nimadir yozing!"); 
    return;
  }

  let j1 = document.createElement("li");
  j1.style.marginLeft = '750px';
  j1.innerHTML = hValue;
  m.appendChild(j1); 

  if (hValue === "salom") {
    let j2 = document.createElement("li");
    j2.style.marginLeft = '750px';
    j2.innerHTML = "salom hurmatli o'yinchi";
    m.appendChild(j2); 
  }else if (hValue === "o'yinda nima qilish kerak") {
    let j2 = document.createElement("li");
    j2.style.marginLeft = '750px';
    j2.innerHTML = "oyinda level kotarip morgrtni yutish kerak";
    m.appendChild(j2); 
  }else if (hValue === "level qanday ko'tariladi") {
    let j2 = document.createElement("li");
    j2.style.marginLeft = '750px';
    j2.innerHTML = "level ko'tarish uchun siz bosqichlarda o'tshingiz kerak";
    m.appendChild(j2); 
  }else if (hValue === "agar biz olip qolsak nima boladi") {
    let j2 = document.createElement("li");
    j2.style.marginLeft = '750px';
    j2.innerHTML = "siz o'lip qolsangiz 0'yindan chiqarilasiz va o'rningizga boshqa odam qo'shamiz";
    m.appendChild(j2); 
  }

  h.value = "";
});
