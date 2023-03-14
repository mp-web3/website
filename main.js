  // toggle navbar display on small screens
  const nav = document.getElementById("navbar");
  const toggleBtn = document.querySelector(".navbar-toggle")
  
  function toggleNav() {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  }

toggleBtn.onclick = toggleNav;