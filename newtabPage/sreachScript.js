// grabs all links from the shortcuts

let linkArray = [];

document.querySelectorAll("li > a").forEach(getLinks);
function getLinks(item) {
  linkArray.push(item.href); 
}

let nameArray = [];

for (let i = 0; i < document.querySelectorAll("li > a").length; i++) {
  nameArray.push(document.querySelectorAll("li > a")[i].innerHTML);
}

// if the input search has a similar pattern it takes you to that website 
document.querySelector(".search-form").addEventListener( "keydown", function( e ) { 
    let keyCode = e.keyCode || e.which; // runs when user presses "enter" key
    if ( keyCode === 13 ) {
      const userInput = document.querySelector(".search-form").value; // grabs what user typed

      const namematch = nameArray.find(element => {
        if (element.includes(userInput)) { // checks if user input is a substring of any in the "linkArray"
          return true;
        }
      });

      const linkmatch = linkArray.find(element => {
        if (element.includes(namematch)) {
          return true;
        }
      });

      if (linkmatch) {
      window.open(linkmatch, '_self'); // website, replace '_self' with '_blank' if wanting to open a newtab instead
      } else {
      const link = "https://search.brave.com/search?q=".concat(...userInput); // if does match with any shortcut goes to brave to search
      window.open(link, '_self');
      }
    }
}, false);
