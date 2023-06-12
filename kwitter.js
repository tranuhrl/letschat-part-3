user_name = document.getElementById("user_name").value;

function addUser() {
  localStorage.setItem("user_name", user_name);

  window.location = "kwitter_room.html";
}
