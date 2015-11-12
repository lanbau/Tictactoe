var currentPlayer = 'one'
var body = document.querySelector('body')
body.addEventListener('click', event => {
  var tile = event.target
  // fix click outside grid bug
  if (tile.className !== 'tile') return
  // fix stealing grids
  if (tile.textContent) return
  if (currentPlayer === 'one') {
    tile.textContent = 'x'
    currentPlayer = 'two'
  } else {
    tile.textContent = 'o'
    currentPlayer = 'one'
  }
  var tile11 = document.querySelector('.row:nth-of-type(1) .tile:nth-of-type(1)').textContent
  var tile12 = document.querySelector('.row:nth-of-type(1) .tile:nth-of-type(2)').textContent
  var tile13 = document.querySelector('.row:nth-of-type(1) .tile:nth-of-type(3)').textContent

  var tile21 = document.querySelector('.row:nth-of-type(2) .tile:nth-of-type(1)').textContent
  var tile22 = document.querySelector('.row:nth-of-type(2) .tile:nth-of-type(2)').textContent
  var tile23 = document.querySelector('.row:nth-of-type(2) .tile:nth-of-type(3)').textContent

  var tile31 = document.querySelector('.row:nth-of-type(3) .tile:nth-of-type(1)').textContent
  var tile32 = document.querySelector('.row:nth-of-type(3) .tile:nth-of-type(2)').textContent
  var tile33 = document.querySelector('.row:nth-of-type(3) .tile:nth-of-type(3)').textContent

  var rowx1 = (tile11 === 'x' && tile12 === 'x' && tile13 === 'x')
  var rowx2 = (tile21 === 'x' && tile22 === 'x' && tile23 === 'x')
  var rowx3 = (tile31 === 'x' && tile32 === 'x' && tile33 === 'x')
  if (rowx1 || rowx2 || rowx3) {
    console.log('Player X Wins!')
    document.getElementById('score').innerHTML = 'Player X Wins!'
    var ans = window.prompt('Type yes To Play Again')
    if (ans === 'yes') { window.location.reload() }
  }

  var rowo1 = (tile11 === 'o' && tile12 === 'o' && tile13 === 'o')
  var rowo2 = (tile11 === 'o' && tile12 === 'o' && tile13 === 'o')
  var rowo3 = (tile11 === 'o' && tile12 === 'o' && tile13 === 'o')
  if (rowo1 || rowo2 || rowo3) {
    console.log('Player O Wins!')
    document.getElementById('score').innerHTML = 'Player O Wins!'
    if (ans === 'yes') { window.location.reload() }
  }

  var vertx1 = (tile11 === 'x' && tile21 === 'x' && tile31 === 'x')
  var vertx2 = (tile12 === 'x' && tile22 === 'x' && tile32 === 'x')
  var vertx3 = (tile13 === 'x' && tile23 === 'x' && tile33 === 'x')
  if (vertx1 || vertx2 || vertx3) {
    console.log('Player X Wins!')
    document.getElementById('score').innerHTML = 'Player X Wins!'
    if (ans === 'yes') { window.location.reload() }
  }

  var verto1 = (tile11 === 'o' && tile21 === 'o' && tile31 === 'o')
  var verto2 = (tile12 === 'o' && tile22 === 'o' && tile32 === 'o')
  var verto3 = (tile13 === 'o' && tile23 === 'o' && tile33 === 'o')
  if (verto1 || verto2 || verto3) {
    console.log('Player O Wins!')
    document.getElementById('score').innerHTML = 'Player O Wins!'
    if (ans === 'yes') { window.location.reload() }
  }

  var diax1 = (tile11 === 'x' && tile22 === 'x' && tile33 === 'x')
  var diax2 = (tile13 === 'x' && tile22 === 'x' && tile31 === 'x')
  if (diax1 || diax2) {
    console.log('Player X Wins!')
    document.getElementById('score').innerHTML = 'Player X Wins!'
    if (ans === 'yes') { window.location.reload() }
  }

  var diao1 = (tile11 === 'o' && tile22 === 'o' && tile33 === 'o')
  var diao2 = (tile13 === 'o' && tile22 === 'o' && tile31 === 'o')
  if (diao1 || diao2) {
    console.log('Player O Wins!')
    document.getElementById('score').innerHTML = 'Player O Wins!'
    if (ans === 'yes') { window.location.reload() }
  }
})
