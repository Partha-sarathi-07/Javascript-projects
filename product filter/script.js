function filter(){
  var valu = document.getElementById('searchInput').value.toLowerCase();
  const gaali = document.getElementById("searchInput");
  gaali.value="";
  var products = document.querySelectorAll('.product');

  for(var i = 0; i < products.length; i++)
  {
    var product = products[i];
    var proNameElement = product.querySelector('p');

    var proName = proNameElement.innerText.toLowerCase();

    if(proName.includes(valu))
    {
      product.style.display = 'block';
    }
    else{
      product.style.display = 'none';
    }
  }
}

function displayCategory(genre){
  
  var products = document.querySelectorAll('.product');

  for(var i = 0; i < products.length; i++)
  {
    product = products[i];
    productNameElement = product.querySelector('p');
    productName = productNameElement.innerText.toLowerCase();
    if(genre === 'All' || productName.includes(genre))
      product.style.display = 'block';
    else  
      product.style.display = 'none';
  }
}

var colorChange = document.querySelector('.row2');

