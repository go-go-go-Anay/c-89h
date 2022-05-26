function adduser()
{
    var player1_name = document.getElementById("player1_username").value;
    var player2_name = document.getElementById("player2_username").value;

    localStorage.setItem("player 1 name", player1_name);
    localStorage.setItem("player 2 name", player2_name);

    window.location = "quiz_game_page.html"; 
}