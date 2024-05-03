document.addEventListener("DOMContentLoaded", function () {
  let btnOne = document.getElementById("btnOne");
  let btnTwo = document.getElementById("btnTwo");
  // let startGmae = document.getElementById("startGmae");
  let play = document.getElementById("play");
  let next = document.getElementById("next");

  let inputAi = document.getElementById("inputAi");
  let inputPlayerOne = document.getElementById("inputPlayerOne");
  let inputPlayerTwo = document.getElementById("inputPlayerTwo");

  let player1 = document.getElementById("player1");
  let player2 = document.getElementById("player2");

  btnOne?.addEventListener("click", () => {
    window.location.href = "./playerOne.html";
  });

  btnTwo?.addEventListener("click", () => {
    window.location.href = "./loginAi.html";
  });

  // startGmae?.addEventListener("click", () => {
  //   const inputValue = inputAi.value;

  //   if (inputValue.trim() === "") {
  //     alert("Please enter a valid player name!");
  //   } else {
  //     localStorage.setItem("playerNameAi", inputValue);
  //     window.location.href = "./tic-tac-toe.html";
  //   }
  // });

  play?.addEventListener("click", () => {
    const inputValuef = inputPlayerOne?.value;
    const inputPlayerTwoValue = inputPlayerTwo.value;

    if (inputValuef?.trim() == "") {
      alert("Please enter a valid name.");
    } else if (inputPlayerTwoValue.trim() === "") {
      alert("Please enter a valid name.");
    } else {
      localStorage.setItem("player2Name", inputPlayerTwoValue);
      window.location.href = "./tic-tac-toe.html";
    }
  });

  next?.addEventListener("click", () => {
    const inputValues = inputPlayerOne?.value;

    if (!inputValues || inputValues.trim() === "") {
      alert("Please enter a valid player name!");
    } else {
      localStorage.setItem("playerNameOne", inputValues);
      window.location.href = "./playerTwo.html";
    }
  });

  // Retrieve values from localStorage and display them
  const storedPlayerName = localStorage.getItem("playerNameOne");
  if (storedPlayerName && player1) {
    player1.innerHTML = storedPlayerName;
  }

  const storedPlayer1Name = localStorage.getItem("playerNameOne");
  if (storedPlayer1Name && player1) {
    player1.innerHTML = storedPlayer1Name;
  }

  const storedPlayerAiName = localStorage.getItem("playerNameAi");
  if (storedPlayerAiName && player1) {
    player1.innerHTML = storedPlayer1Name;
  }

  const storedPlayer2Name = localStorage.getItem("player2Name");
  if (storedPlayer2Name && player2) {
    player2.innerHTML = storedPlayer2Name;
  }
});
