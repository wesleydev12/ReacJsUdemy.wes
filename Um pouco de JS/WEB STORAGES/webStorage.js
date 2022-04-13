let nome = '';

if(typeof localStorage.nome == 'undefined'){
  localStorage.nome = prompt("Qual seu nome ?");
}

nome = localStorage.nome;

document.getElementById('nome').innerHTML = nome;












/*
localStorage.setItem("nome", "Wesley");
localStorage.setItem("sobreNome", "Sousa");
localStorage.setItem("idade", "30");

localStorage.getItem("nome");
localStorage.getItem("sobreNome");
localStorage.getItem("idade");

localStorage.removeItem("nome");
localStorage.removeItem("sobreNome");


        # # #   FORMA MAIS FÁCIL DE SE FAZER   # # # 


localStorage.nome = "Wesley"
localStorage.sobreNome = "Sousa"

localStorage.removeItem("nome")
localStorage.nome;
*/