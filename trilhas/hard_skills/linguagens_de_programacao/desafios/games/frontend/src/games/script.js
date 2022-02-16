const HOST_API = 'http://localhost:3002'

$(document).ready(function() {

	function clearTable() {
		$('#table-games').html(
			`
			
				<tr>
					<th>Id</th>
					<th>Game</th>
					<th>Ano</th>
					<th>Gênero</th>
					<th>Multiplayer</th>
					<th>Offline</th>
					<th>Crossplataform</th>
				</tr>
			`
		)
	}

	function makeLineTableGames(game) {
		return (
			`
				<tr>
					<td>${game.id}</td>
					<td>${game.game}</td>
					<td>${game.year}</td>
					<td>${game.genre}</td>
					<td>${game.multiplayer ? 'Sim' : 'Não'}</td>
					<td>${game.offline  ? 'Sim' : 'Não'}</td>
					<td>${game.crossplataform  ? 'Sim' : 'Não'}</td>
				</tr>
			`
		)
	}

	function renderTableGames(games) {
		clearTable()
		let contentTable = $('#table-games').html()
		games.forEach(game => {
			contentTable += makeLineTableGames(game)
		})
		$('#table-games').html(contentTable)
	}

	function getGames() {
		$.get(`${HOST_API}/games`, function (games) {
			renderTableGames(games)
		})
	}

	function sendNotificationBrowser(message) {
		alert(message)
	}

	function createGame({
		game,
		year,
		genre,
		multiplayer,
		offline,
		crossplataform
	}) {
		$.post(
			`${HOST_API}/games`, 
			{
				game,
				year,
				genre,
				multiplayer,
				offline,
				crossplataform
			},
			function (game) {
				sendNotificationBrowser(
					`
						Game ${game.game} registrado com sucesso (id = ${game.id})
					`
				)
				getGames()
			}
		)
	}

	function getInputs() {
		let messageError = ''
		const game = $('#input-game-dialog-create-game').val()
		if(game.length === 0) messageError += '\nÉ necessário especificar o game!' 
		const year = parseInt($('#input-year-dialog-create-game').val(), 10)
		if(Number.isInteger(year)) {
			if(year < 1970 || year > 2022) messageError += '\nO ano deve ser um valor de 1970 a 2022!' 
		} else messageError += '\nÉ necessário especificar o ano!' 
		const genre = $('#input-genre-dialog-create-game').val()
		if(genre.length === 0) messageError += '\nÉ necessário especificar o gênero!' 
		const multiplayer = Boolean($('#input-multiplayer-dialog-create-game').prop('checked'))
		const offline = Boolean($('#input-offline-dialog-create-game').prop('checked'))
		const crossplataform = Boolean($('#input-crossplataform-dialog-create-game').prop('checked'))
		return {
			statusForm: messageError === '',
			messageError,
			game,
			year,
			genre,
			multiplayer,
			offline,
			crossplataform
		}
	}

	$('#btn-close-dialog-create-game').on('click', function() {
		$('#container-dialog-create-game').hide()
	})

	$('#btn-submit-dialog-create-game').on('click', function() {
		const {
			statusForm,
			messageError,
			game,
			year,
			genre,
			multiplayer,
			offline,
			crossplataform
		} = getInputs()
		console.log(multiplayer)
		console.log(offline)
		console.log(crossplataform)
		if(statusForm) {
			$('#container-dialog-create-game').hide()
			createGame({
				game,
				year,
				genre,
				multiplayer,
				offline,
				crossplataform
			})
		} else {
			sendNotificationBrowser(messageError)
		}
	})

	$('#btn-create-game').on('click', function() {
		$('#container-dialog-create-game').show()
	})

	getGames()
	$('#container-dialog-create-game').hide()
})
