function enviar() {
    num1 = document.getElementById("word1").value;
    num2 = document.getElementById("word2").value;
    RespostaOk = parseInt(num1) * parseInt(num2);

    Perg = "<h4>" + num1 + " X " + num2 + "</h4>";
    Resp = "<br> <input type='text' id='CaixaResp'>";
    enviarResp = "<br> <br> <button class='btn btn-info' onclick='checar()'>Checar</button>";
    divFinal = Perg + Resp + enviarResp;

    document.getElementById("output").innerHTML = divFinal

    document.getElementById("word1").value = "";
    document.getElementById("word2").value = "";
}