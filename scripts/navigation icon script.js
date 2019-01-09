function clickIcon() {
	// Get the sidebar navigation element by its id
  var nav = document.getElementById("navigation-id");
  // If the navigation is closed, open it
  if (nav.className === "sidebar-navigation") {
    nav.className += " responsive";
  // Otherwise, close it
  } else {
    nav.className = "sidebar-navigation";
  }
}