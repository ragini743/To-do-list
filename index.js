let add=document.querySelector("button")

let input=document.querySelector("input")
let ul=document.querySelector("ul")
console.log(ul)
let box=document.querySelector(".box")
add.addEventListener("click",function(){
    console.log("hello", input.value)

ul.insertAdjacentHTML("afterbegin",`<li>${input.value}</li>`)
  input.value=""  
})



ul.addEventListener("click",function(e) {
    console.log(e.target)
    console.log("LI clicked: ", e.target);
    console.log('e.target.tagName:', e.target.tagName);

    if (e.target.tagName !== 'LI') {
        return;
    }

    li=e.target
    


    const crossSpan = document.createElement('span');
    crossSpan.textContent = "✕" ;
    crossSpan.className = 'cross-span';
 
    const checkSpan = document.createElement('span');
    checkSpan.textContent = '✓';
    checkSpan.className = 'check-span';
    

    console.log(crossSpan);
    console.log(checkSpan);
    li.append(crossSpan,checkSpan)

    crossSpan.addEventListener("click",function()
    {
      console.log("child removed");
      console.log(ul.removeChild(li))
    });

    checkSpan.addEventListener("click",function(){
      console.log("check clicked")

      li.style.backgroundColor="#caf3ef"
      
      checkSpan.textContent=""
      crossSpan.textContent=""
      
    

    }
    )
    
  
    
})