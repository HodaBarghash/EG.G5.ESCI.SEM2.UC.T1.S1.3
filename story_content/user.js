function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5oTifJm5Ii0":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycby3F4qsYl6Cvb0AttqbPZFnAqYVo_3IzIeC8qg_0e0xfQAB2aLLgxNuxjO9GHqaq3T9UA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect"),q2attempts:player.GetVar("q2attempts"),q2answeredcorrect:player.GetVar("q2answeredcorrect")})
	}
	)
}

