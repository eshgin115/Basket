function GetProducts() {
    let basket=JSON.parse(localStorage.getItem('basket'))
    let item=''
    basket.forEach(x=>{
      
        let total=parseFloat(x.Price)*parseFloat(x.Count);
        item+=`
        <tr>
          <th scope="row">${x.Id}</th>
           <td>
            <img src="${x.Image}" alt="">
            </td>
            <td>${x.Name}</td>
            <td><input class="input" min='1'  id="input" type="number" Value=${x.Count}> </td>
            <td>${x.Price}</td>
            <td>${total}</td>
      </tr>
        `;
    })
    document.getElementById('tbody').innerHTML=item
}
GetProducts();
let inputs=document.querySelectorAll('.input');
let basket=JSON.parse(localStorage.getItem('basket'))
inputs.forEach(inp=>{
    this.addEventListener('change',function(e){
      let value=e.target.value
      var price=e.target.parentElement.parentElement.children[4].innerHTML
      let substr = price.slice(-7,-3)
      console.log(substr);
      e.target.parentElement.parentElement.children[5].innerHTML=substr*value;
        console.log(parent);
    })
      
})