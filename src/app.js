/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

//declaration of all arrays and their elements
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let domain = [".com", ".net", ".us"];

window.onload = () => {
  let domainNames = []; //empty array to push generated domain names
  for (let i = 0; i < pronoun.length; i++) {
    for (let k = 0; k < adj.length; k++) {
      for (let j = 0; j < noun.length; j++) {
        for (let b = 0; b < domain.length; b++) {
          let generatedDomains =
            " " + pronoun[i] + adj[k] + noun[j] + domain[b]; //generated domain names is equal to all pronouns + all adj + all nouns = all domains
          domainNames.push(generatedDomains); //push the results of generated domains to empty domainNames array.
        }
      }
    }
  }
  console.log(domainNames);
  document.getElementById("allDomainNames").innerHTML = domainNames;
};
add.pronoun = () => {
  let input = document.querySelector("input");
  if (input == null) {
    return;
  } else {
    pronoun.push(input.value);
    input.value = "  ";
    window.onload();
  }
};
