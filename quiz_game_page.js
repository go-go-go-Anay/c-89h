function send()
{
    number_1 = document.getElementById("number_1").value;
    number_2 = document.getElementById("number_2").value;
    actual_answer = parseInt(number_1) * parseInt(number_2);

    question = "<h4>" + number_1 + "X" + number_2 + "</h4>";
    answer_input = "<br>Your Answer Here : <input type = 'number' id = 'answer_check_box'>";
    check_button = "<br><br><button class = 'btn btn-info' onclick = 'check()'> Check Your Answer</button>"
    row = question + answer_input + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number_1").value = "";
    document.getElementById("number_2").value = "";
}