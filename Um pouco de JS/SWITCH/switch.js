document.write("<br/><br/>Faça o seu pedido: <br/<br/>")
document.write("<br/><br/>1 - Água  /  2 - Suco <br/<br/>")
document.write("<br/><br/>3 - Bauru  /  4 - CocaCola <br/<br/>")


//SWITCH
function pedir() {
  let item = prompt("Oque deseja pedir ?");

  switch (item) {

    case "1":
      alert("Água");
      break;
    case "2":
      alert("Suco");
      break;
    case "3":
      alert("Bauru");
      break;
    case "4":
      alert("CocaCola");
      break;
    default:
      alert("Não temos essa opção");
      break;
}
}