


var signs = ["pierre", "papier", "ciseaux"],
    chosenSign = "",
    randomSign = "",
    answer = "",
    userScore = 0,
    aiScore = 0,
    $react = $("#react"),
    $chosen = $("#chosen"),
    $random = $("#random"),
    $signChosen = $("#signChosen"),
    $signRandom = $("#signRandom"),
    $answer = $("#answer"),
    $score = $("#score");


function getRandomSign() {
  var random = Math.floor(Math.random()*signs.length);
  randomSign = signs[random];
}


function getAnswer(randomSign, chosenSign) {
  // tie
  if (randomSign === chosenSign) {
    answer = "<span class='btn btn-warning'>Egalité!</span>";
    $react.css("color", "#f0ad4e");
  }
  // win
  else if ((chosenSign === "ciseaux" && randomSign === "papier") || 
           (chosenSign === "pierre" && randomSign === "ciseaux") || 
           (chosenSign === "papier" && randomSign === "pierre")) {
    answer = "<span class='btn btn-success'>Vous avez gagné!</span>";
    $react.css("color", "#5cb85c");
    userScore++;
  }
  // lose
  else if ((chosenSign === "ciseaux" && randomSign === "pierre") || 
           (chosenSign === "papier" && randomSign === "ciseaux") || 
           (chosenSign === "pierre" && randomSign === "papier")) {
    answer = "<span class='btn btn-danger'>Vous avez perdu!</span>";
    $react.css("color", "#d9534f");
    aiScore++;
  }
  else {
    answer = "";
  }
}

// get reaction texts and signs
function getReact() {
  // player action
  $chosen.html("Vous <b>" + chosenSign + "</b> !");
  $signChosen.removeClass("fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $signChosen.addClass("fa-hand-" + chosenSign + "-o");
  // computer action
  $random.html("Adversaire <b>" + randomSign + "</b> !");
  $signRandom.removeClass("fa-hand-rock-o fa-hand-paper-o fa-hand-scissors-o");
  $signRandom.addClass("fa-hand-" + randomSign + "-o");
  // results
  $answer.html(answer);
  $score.html(userScore + " vs " + aiScore);
  // display the box
  $react.fadeIn();
}

// run shifumi :D
$(".gooo").on("click", function() {
  $react.hide();
  var $current = $(this);
  chosenSign = $current.attr("id");
  getRandomSign();
  getAnswer(randomSign, chosenSign);
  getReact();
});