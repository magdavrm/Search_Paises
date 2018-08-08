const button = document.querySelector('button'); 
const campo = document.querySelector('#campo'); 
const tabela = document.querySelector("#tabela"); 
let pattern = /([a-zA-Z]+)?\s?[a-zA-Z]+/

$('#campo').focus(); 



button.addEventListener('click', function(){
  let countryName = campo.value; 

  if(pattern.test(countryName)) {
    
    getPosts(countryName);
    $('#paisErro').hide(); 
  
  }else {
    showError(); 
  }
});


function getPosts(name){
    let url = `https://restcountries.eu/rest/v2/name/${name}`

    fetch(url)
    .then(res => res.json()) 
    .then(data => insertTable(data)) 
    .catch(data => showError()); 

    campo.value = ''; 
    campo.focus(); 
}


function insertTable(json){
  let output;     
    json.forEach(post => {
      output =
               `<h2>${post.name}</h2>
                <img src="${post.flag}" id="flag">
                <tr id="menu1">
                  <th> Continente</th>
                  <th> Capital</th>
                  <th> População</th>
                  <th> Código Área</th>
                  <th> Idioma</th>
                  <th> Território</th>
                  <th> Moeda</th>
                </tr>

                <tr id="menu2">
                  <td> <img src="img/plan.png"></td>
                  <td> <img src="img/fron.png"></td>
                  <td> <img src="img/pessoas.png"></td>
                  <td> <img src="img/cod2.png"></td>
                  <td> <img src="img/voz.png"></td>
                  <td> <img src="img/tam.png"></td>
                  <td> <img src="img/din2.png"></td>

                <tr id="menu3">
                  <td>${post.region} (${post.subregion})</td>
                  <td>${post.capital}</td>
                  <td>${post.population} hab.</td>
                  <td>${post.callingCodes}</td>
                  <td>${post.languages[0].nativeName}</td>
                  <td>${post.area} Km²</td>
                  <td>${post.currencies[0].name} (${post.currencies[0].symbol})</td>
                </tr>
                </tr>`;
      });

    tabela.innerHTML = output; 
    $('#info').fadeIn('slow'); 
}


function showError(){
    $('#paisErro').show(); 
}
