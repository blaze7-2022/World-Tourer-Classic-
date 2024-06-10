document.getElementById("btn").onclick = function() {
    let txt = document.getElementById("txt").value;
    if (txt.toLowerCase() === "tokyo") { // Case-insensitive comparison
      window.location.href = "reveal.html";
    } else {
      window.location.href = "revealii.html";
    }
  };