//? show cart view
//! show cart view
//? show cart view
let popop_cart = document.querySelector(".pop-cart");
let cart_view = document.querySelector(".cart-view");
let result_item=[]
popop_cart.children[0].addEventListener("click", (pr) => {
    cart_view.classList.toggle("d-none");
    pr.preventDefault();
});
//? show preview
//! show preview
//? show preview
let preview = document.querySelector(".preview");
let img_big = document.querySelector(".imgs .img-big");
img_big.addEventListener("click", (pr) => {
    preview.classList.remove("d-n-preveiw");
    pr.preventDefault();
});
//? hide preview
//! hide preview
//? hide preview
let close_preview = document.querySelector(".preview .close");
close_preview.addEventListener("click", (pr) => {
    preview.classList.add("d-n-preveiw");
    pr.preventDefault();
});

//? show sub_img
//! show sub_img
//? show sub_img
let sub_img = document.querySelectorAll(".imgs .sub-img img");
sub_img.forEach((e, i) => {
    e.addEventListener("click", (pr) => {
        let sub_img_active = document.querySelector(".imgs .sub-img img.active");
        img_big.setAttribute("src", `./images/image-product-${i + 1}.jpg`);
        sub_img_active.classList.remove("active");
        e.classList.add("active");
        pr.preventDefault();
    });
});
//? button decrease - and increase +
//! button decrease - and increase +
//? button decrease - and increase +
let decrease = document.querySelector(".qty .min");
let increase = document.querySelector(".qty .plas");
let quntety = document.querySelector(".qty h6");
decrease.addEventListener('click',pr=>{
    if (quntety.textContent>1) {
        
        quntety.textContent=+quntety.textContent-1
    }
    pr.preventDefault()
})
increase.addEventListener('click',pr=>{
    quntety.textContent=+quntety.textContent+1
    pr.preventDefault()
});
//? create cart item 🛒
//! create cart item 🛒
//? create cart item 🛒
let cart_items = document.querySelector(".cart-view .container-fluid");
let fun_cart_item=(img,price,qty)=>{
    let cart_item=`<div class="row justify-content-evenly cart-item mb-2" >
    <div class="col-3" >
    <img src="${img}" alt="" class="img-fluid w-100 " style="border-radius: 7px !important; align-content: flex-start;"></div>
    <p class="col-8" style=" font-weight: bold;"><sub style="font-size: 12px !important;"> Fall Limited Edition Sneakers </sub><sub style="font-size: 14px; margin-right: .2rem;" >$${price} x ${qty}</sub><sub style="font-size: 14px; color: var( --Very-dark-blue);">$${+price * +qty}</sub></p>
    <div class="col-1" style="padding: 0 !important; text-align: center;"><img class="btn-delete" src="./images/icon-delete.svg" alt="" style="cursor: pointer; transform: scale(1.4) ; margin-top: 1rem;"></div>
    </div>`
    result_item.push(cart_item);
}


//? update cart view 🛒
//! update cart view 🛒
//? update cart view 🛒
let update_cart_view=()=>{

    cart_view.innerHTML=`
    <div class="row justify-content-evenly"><h5 class="mb-3">Cart</h5>
      <hr class="col-11">
      <p class="col-10 text-center d-none pt-5 pb-5">Your cart is empty.</p>
    </div>
    ${result_item.join('')}
    <div class="row Checkout justify-content-evenly">
        <div class="col-11 btn text-white" style="background-color: var(--Orange); border-radius: 10px !important;">Checkout</div>
    </div>
  `
  let cart_item = document.querySelectorAll(".cart-item");
  cart_item.forEach((e,i)=>{
    e.children[2].children[0].addEventListener('click',()=>{
        e.remove();
        result_item.pop(i);
        if (result_item.length==0) {
            console.log("qqqq")
            popop_cart.classList.remove('popop');
            cart_view.children[cart_view.children.length-1].remove();
            cart_view.children[0].children[2].classList.remove('d-none');
        }else{
            popop_cart.classList.add('popop');
            popop_cart.setAttribute('data-bs-target',result_item.length)
        }
    })
})


}
//? button add to cart 🛒
//! button add to cart 🛒
//? button add to cart 🛒
let add_to_cart = document.querySelector(".btn-add");
add_to_cart.addEventListener('click',pr=>{
    //!Your cart is empty.
    let numProduct=+quntety.textContent;
    let sub_img_active = document.querySelector(".imgs .sub-img img.active");
    popop_cart.classList.add('popop');
    popop_cart.setAttribute('data-bs-target',result_item.length+1)
    fun_cart_item(sub_img_active.getAttribute('src'),125,numProduct);
    update_cart_view();
    quntety.textContent='1';
    pr.preventDefault();
})
//? button close_menu ❌
//! button close_menu ❌
//? button close_menu ❌
let close_menu = document.querySelector(".x-menu img");
let navShow = document.querySelector(".n-a-v");
close_menu.addEventListener('click',()=>navShow.classList.toggle('show'))






