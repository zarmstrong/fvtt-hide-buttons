Hooks.on('renderSettings', async () => {
		console.log(`%c Hide Buttons %c| Loading: user role == ${game.users.current.role}`,'color: #aa0000','color: #ffffff')
		if (game.users.current.role < 3)
		{
			console.log(`%c Hide Buttons %c| Hiding view modules button`,'color: #aa0000','color: #ffffff');
		    $("button[data-action=modules]").hide();
		    $("li.modules").hide();
		}
	});