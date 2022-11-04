function createGame(player1, hour, player2) {
  return `
                      <li>
                        <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
                        <strong>${hour}</strong>
                        <img src="./assets/icon-${player2}.svg" alt="Berdeira da ${player2}">
                    </li>
  `
}

let delay = -0.5
function createcard(date, day, games) {
  delay = delay + 0.5
  return `
               <div class="card" style="animation-delay: ${delay}s">
                <h2>${date} <span>${day}</span></h2>
                <ul>
                    ${games}
                </ul>
            </div>
  `
}

document.querySelector("#cards").innerHTML =
  createcard(
    "24/11",
    "quinta",
    createGame("switzerland", "07:00", "camerron") +
      createGame("uruguay", "10:00", "southkorea") +
      createGame("portugal", "13:00", "camerron") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createcard(
    "28/11",
    "segunda",
    createGame("camerron", "07:00", "serbia") +
      createGame("southkorea", "10:00", "ghana") +
      createGame("switzerland", "13:00", "brazil") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createcard(
    "02/12",
    "sexta",
    createGame("southkorea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay") +
      createGame("serbia", "16:00", "switzerland") +
      createGame("brazil", "16:00", "camerron")
  )
