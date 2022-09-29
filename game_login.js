function AddPlayer() {
    nomeP1 = document.getElementById("NomeP1").value;
    nomeP2 = document.getElementById("NomeP2").value;
    localStorage.setItem("NomeP1", nomeP1);
    localStorage.setItem("NomeP2", nomeP2);
    window.location = "game_page.html";
}
