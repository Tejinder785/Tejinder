function loadXMLDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
     {
      if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);

        jsonData = JSON.parse(this.responseText);
        jsonButtons = jsonData.buttons;
        console.log(jsonButtons);

        jsonBars = jsonData.bars;
        console.log(jsonBars);

        jsonLimit = jsonData.limit;
        console.log(jsonLimit);
        createButtons();
        createBars();
      }
    };
    xhttp.open("GET", "http://pb-api.herokuapp.com/bars", true);
    xhttp.send();


    
}

  loadXMLDoc();

  function createButtons(){
   
    for(var i = 0; i < jsonButtons.length; i++){
        console.log(jsonButtons[i]);
        var btn = document.createElement("button");
        var t = document.createTextNode(jsonButtons[i]);
        btn.appendChild(t);
        document.body.appendChild(btn);


    }

  }


function createBars() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (j = 0; i < jsonBars.length; i++) {
        var openDropdown = jsonBars[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }


   
