(()=>{
    const $fetch= document.getElementById('fecth'),
     $fragment =document.createDocumentFragment();
    fetch("https://jsonplaceholder.typicode.com/users") 
    .then((res)=>res.ok? res.json(): Promise.reject(res))
    .then((json)=>{
        json.forEach((element)=>{
            const li=document.createElement("li");
            li.innerHTML = `${element.name}-- ${element.phone}`;
            $fragment.appendChild(li);

        });
       $fetch.appendChild($fragment);
    })
    .catch((err)=>console.log("Error"+ err.status))
    .finally(()=>console.log("esto fue consumido por Fecth"));
})();
