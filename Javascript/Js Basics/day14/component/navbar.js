

const navbar = () => {

    //if user not logged in => no need to show
    let token = JSON.parse(localStorage.getItem("token"));

    //user not logged in
    if(!token){
        length = null;
    }
    else{
        //user logged in
        
        // let cart = JSON.parse(localStorage.getItem("cart"));
        // if(cart.length === 0 || !cart){
        //     length = null;
        // }
        // length=cart.length
    }

    console.log(length);
    return `<div class="navbar_div">
    <div>
        <h1><a href="/day14/html/index.html">Todo App</a></h1>
    </div>
    <div id="nav_btn">
        <ul>
            <li>
                <a href="/day14/html/quotes.html">Quotes</a>
            </li>
            <li>
                <a href="/day14/html/product.html">Products</a>
            </li>
            <li>
                <a href="/day14/html/Login.html">Login</a>
            </li>
            <li>
                <a href="/day14/html/cart.html">Cart: ${length ? length : ``}</a>
            </li>
        </ul>
    </div>
</div>`;
}


export default navbar;