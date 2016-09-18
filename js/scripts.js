
/* When user presses the hamburger icon, add "open" tag to the topnav*/
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " open";
    } else {
        x.className = "topnav";
    }
}

function closeMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className != "topnav") {
        x.className = "topnav";
    }
}

function setTeamSelected(selectedTeam) {
    var x = document.getElementById("team-content-container");
    let children = x.childNodes;
    
    for (i = 0; i < children.length; i++) {
        let child = children[i];
        if (child.nodeType === 1) {
            if (child.className.indexOf("hidden") === -1) {
                child.className += " hidden"
            }
        }
    }
    
    var y = document.getElementById(selectedTeam);
    if (y.className.indexOf("hidden") !== -1) {
        y.className = selectedTeam
    }
}