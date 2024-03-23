// Delay your script until the modal is shown
$("#walletconnectmodal").on("show.bs.modal", function () {
  function switchContent() {
    var content1 = document.getElementById("loading");
    var content2 = document.getElementById("error");

    content2.style.display = "none";
    content1.style.display = "block";

    setTimeout(() => {
      content1.style.display = "none";
      content2.style.display = "block";
    }, 5000); // 5000 milliseconds = 5 seconds
  }

  switchContent();
});

// Open the modal programmatically (if needed)
// $('#myModal').modal('show');

const anchorElements = document.querySelectorAll("a.app-grid-item");

anchorElements.forEach((anchor) => {
  anchor.addEventListener("click", function (event) {
    event.preventDefault();
    const paragraphText = this.querySelector("p").textContent;
    Cookies.set("walletType", paragraphText);
  });
});
