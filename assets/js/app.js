let buttons=document.querySelectorAll('.btn')

if(localStorage.getItem('basket')===null)
{
localStorage.setItem('basket',JSON.stringify([]))
}
for(let btn of buttons){
    btn.onclick=function(e){
        e.preventDefault()
        let PrId=e.target.parentElement.parentElement.id
        let PrName=e.target.parentElement.children[0].innerHTML
       let PrPrice=e.target.parentElement.children[1].innerHTML
       let PrImage=e.target.parentElement.parentElement.children[0].src
      let basket=JSON.parse(localStorage.getItem('basket'));
     
      let exist=basket.find(pr=>pr.Id===PrId)
     if(exist==undefined){
        basket.push({
            Id: PrId,
            Name: PrName,
            Price: PrPrice,
            Image: PrImage,
            Count: 1
          })
     }
     else{
        exist.Count +=1
     }
      localStorage.setItem('basket',JSON.stringify(basket));
      CountProduct();
      document.getElementById('toaster').style.opacity='1'
      setTimeout(() => {
        document.getElementById('toaster').style.opacity='0'
      }, 1000);
    }
   
}
function CountProduct(){
    let basket=JSON.parse(localStorage.getItem('basket'));
    document.getElementById('count').innerHTML=basket.length;
}
CountProduct();