

const id=JSON.parse(localStorage.getItem("Id"));
console.log(id);


async function getData(){
    try{
        const response = await fetch(`https://dummyjson.com/quotes/${id}`);
        const data = await response.json();
        console.log(data);
        appendData(data);
    }
    catch(err){ 
        console.log(err);
    }
}
getData();


function appendData(data){
    let container = document.querySelector("#quotes_div");
    

    let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        
        h3.innerText=data.quote;
        p.innerText=data.author;

        div.append(h3,p);
        container.append(div);
}