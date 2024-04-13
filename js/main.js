let formbtns = document.querySelector("form");
let h1 = document.querySelector(".h1")
let h2 = document.querySelector(".h2")
let miniNumber = document.querySelector(".miniNumber");
formbtns.onsubmit = (e) => {
  e.preventDefault();
};

formbtns["one"].onclick = () => {
  h2.innerHTML += formbtns["one"].value;
};
formbtns["two"].onclick = () => {
  h2.innerHTML += formbtns["two"].value;
};
formbtns["three"].onclick = () => {
  h2.innerHTML += formbtns["three"].value;
};
formbtns["four"].onclick = () => {
  h2.innerHTML += formbtns["four"].value;
};
formbtns["five"].onclick = () => {
  h2.innerHTML += formbtns["five"].value;
};
formbtns["six"].onclick = () => {
  h2.innerHTML += formbtns["six"].value;
};
formbtns["seven"].onclick = () => {
  h2.innerHTML += formbtns["seven"].value;
};
formbtns["eight"].onclick = () => {
  h2.innerHTML += formbtns["eight"].value;
};
formbtns["nine"].onclick = () => {
  h2.innerHTML += formbtns["nine"].value;
};
formbtns["zero"].onclick = () => {
  h2.innerHTML += formbtns["zero"].value;
};

formbtns["plus"].onclick = () => {
  h2.innerHTML += `${formbtns["plus"].value}`;
};

formbtns["float"].onclick = () => {
    h2.innerHTML += `${formbtns["float"].value}`;
  };

formbtns["minus"].onclick = () => {
  h2.innerHTML += `${formbtns["minus"].value}`;
};

formbtns["multiply"].onclick = () => {
  h2.innerHTML += `${formbtns["multiply"].value}`;
};

formbtns["devide"].onclick = () => {
  h2.innerHTML += `${formbtns["devide"].value}`;
};

formbtns["absN"].onclick = () => {
  h2.innerHTML *= -1;
};

formbtns["module"].onclick = () => {
  h2.innerHTML += `${formbtns["module"].value}`;
};

formbtns["equal"].onclick = () => {
  h1.innerHTML = eval(h2.innerHTML);
  miniNumber.innerHTML = h1.innerHTML;
};

formbtns["resets"].onclick = () => {
  miniNumber.innerHTML = "";
  h2.innerHTML = ""
  h1.innerHTML = ""
};

let deleteNumber = document.querySelector(".onedelete");
deleteNumber.onclick = () => {
  let newDeleteNumber = h2.innerHTML;
  h2.innerHTML = newDeleteNumber.slice(0, -1);
  if(eval(h1.innerHTML)){
    h2.innerHTML = ""
  }
};


let appImg = document.querySelector(".appImg")
let containerCalc = document.querySelector(".container")
let closeCalc = document.querySelector(".closeCalc")
appImg.onclick=()=>{
    containerCalc.classList.add("showCalc")
    closeCalc.classList.remove("closeCalcContainer")
}

closeCalc.onclick=()=>{
    containerCalc.classList.add("closeCalcContainer")
    containerCalc.classList.remove("showCalc")
}