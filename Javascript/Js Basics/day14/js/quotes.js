

//1get the data from API
//2append the data on ui


async function getData(){
    try{
        const res = await fetch(`https://dummyjson.com/quotes`);
        const data = await res.json();
        console.log(data.quotes);
        appendData(data.quotes);
    }
    catch(err){ 
        console.log(err);
    }
}
getData();


function appendData(data){
    let container = document.querySelector("#quotes_div");
    container.innerHTML=null;
    data.map((el) => {
        let div = document.createElement("div");
        let h3 = document.createElement("h3");
        let p = document.createElement("p");
        
        h3.innerText=el.quote;
        p.innerText=el.author;

        div.addEventListener("click", ()=>{

            localStorage.setItem("Id", JSON.stringify(el.id));
            window.location.href = "singleQuotes.html"

        })
        

        div.append(h3,p);
        container.append(div);
    })
}