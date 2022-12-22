var $=(id)=>{
    return document.getElementById(id)

}
var Ct=(cls,i)=>{
    return document.getElementsByClassName(cls)[i].textContent

}
var Q=(qs)=>{
    return document.querySelector(qs)
}
var cEvent=(dom,func)=>{
   return dom.addEventListener("click",func)
}

