// Profile menu
let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
  profileMenu.classList.toggle("open-menu");
}

// Sidebar activity first
let sideActivity = document.getElementById("sidebarActivity");
let moreLink = document.getElementById("showMoreLink");

function toggleActivity() {
  sideActivity.classList.toggle("open-activity");

  // Sidebar activity second
  if (sideActivity.classList.contains("open-activity")) {
    moreLink.innerHTML = "Less <b>-</b>";
  } else {
    moreLink.innerHTML = "More <b>+</b>";
  }
}
