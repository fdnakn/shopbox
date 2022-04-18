const card = document.getElementsByClassName("card");
const btnadd= document.getElementsByClassName("btnadd");
const btncart= document.getElementById("btn-cart");
const shoplistbox= document.getElementById("shoplistbox");

class Shopping{
    constructor(tittle,price,image){

        this.tittle=tittle;
        this.price=price;
        this.image=image;
    
   
    }
}

class UI{
    addtocart(shopping){
        const listitem = document.createElement("div");
        listitem.classList="shoplist";
        listitem.innerHTML=
        `
        <div class="shoplist-img">
              <img src="${shopping.image}" alt="">
            </div>
            <div class="shoplist-tittle">
              <h3 >${shopping.tittle}</h3>
            </div>
            <div class="shoplist-price">
              <h3>${shopping.price}</h3>
            </div>
            <div class="shoplist-trash">
              <i class="fa fa-trash" aria-hidden="true"></i>
            </div>


        `
        shoplistbox.appendChild(listitem);
    }
    removecart(){
        let btnremove = document.getElementsByClassName("fa fa-trash");
        let self = this;
        for (let i = 0; i < btnremove.length; i++) {
            btnremove[i].addEventListener("click",function(){
               this.parentElement.parentElement.remove(); 
            })
            
        }
    }
    cardcount(){
        let cardlistitem =document.getElementsByClassName("shoplist");
        let itemcount =document.getElementById("item-count");
        itemcount.innerHTML=cardlistitem.length;
    }
}


for (let i = 0; i < card.length; i++) {
    btnadd[i].addEventListener("click",function(e){
        
        let tittle = card[i].getElementsByClassName("card-tittle")[0].textContent;
        let price = card[i].getElementsByClassName("card-price")[0].textContent;
        let image = card[i].getElementsByClassName("card-imgg")[0].src;

        btnadd[i].classList.add('disabled');
        btnadd[i].textContent="in card";

        let shopping = new Shopping(tittle,price,image);
        let ui =new UI();

        ui.addtocart(shopping);
        ui.removecart();
        ui.cardcount();

        e.preventDefault();
    })
    
}


// btncart.addEventListener("click",function(e){
//     shoplistbox.style.display='block';
//     e.preventDefault();
// })
var listboxStatus = false;

function carttoggle(){
    if(listboxStatus==false){
        shoplistbox.style.display="block";
        listboxStatus=true;
    }else{
        shoplistbox.style.display="none";
        listboxStatus=false;
    }
}