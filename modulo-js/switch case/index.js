let modo = prompt("Digite um modo: dark, red ou blue:");
switch (modo) {
    case "dark":
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
        document.writeln("<h1>Você escolheu o tema <strong>DARK</strong>!!</h1>")
        break;
    case "red":
        document.body.style.backgroundColor = "red";
        document.body.style.color = "white";
        document.writeln("<h1>Você escolheu o tema <strong>RED</strong>!!</h1>")
        break;
    case "blue":
        document.body.style.backgroundColor = "blue";
        document.body.style.color = "white";
        document.writeln("<h1>Você escolheu o tema <strong>BLUE</strong>!!</h1>")
        break;
    default:
        document.body.style.backgroundColor = "pink";
        document.body.style.color = "black";
        document.writeln("<h1>Você escolheu um tema inválido selecione entre <strong>DARK, RED ou BLUE</strong>!!</h1>")
}