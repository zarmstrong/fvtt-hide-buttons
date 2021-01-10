$(document).ready(function(){
	if (game.users.current.role < 3)
	     $("button[data-action=modules]").hide();
});