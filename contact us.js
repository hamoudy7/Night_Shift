const form = document.querySelector("form"),
  statusTxt = form.querySelector(".button-area span");

form.onsubmit = (e) => {
  e.preventDefault();
  statusTxt.style.color = "#0D6EFD";
  statusTxt.computedStyleMap.display = "block";

  let xhr = new XMLHttpRequest();
  xhr.open("POST", "contact.php", true);
  xhr.onload = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      let response = xhr.response;
      if (
        response.indexOf(" Enter a valid Email address!") != -1 ||
        response.indexOf("Sorry, failed to send your message!")
      ) {
        statusTxt.style.color = "red";
      } else {
        form.reset();
        setTimeout(() => {
          statusTxt.computedStyleMap.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
    }
  };
  let formData = new FormData(form);
  xhr.send(formData);
};
