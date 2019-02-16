var url_string = window.location.href;
console.log(url_string);
var url = new URL(url_string);
var team = url.searchParams.get("t");
var place = url.searchParams.get("p");
console.log(team);
console.log(place);

var title_team = document.getElementById("team_id_welcome");
var teams = ["matraca","carranga","voliadores","limas","gurrupletos"];
var nTeam = parseInt(team);
var teamName = teams[nTeam];
console.log(teamName);
title_team.innerText = ""+teamName;


