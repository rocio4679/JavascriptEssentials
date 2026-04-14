var xhr = new XMLHttpRequest();
var url = './practice_task.json';

xhr.open('GET', url, true);

xhr.responseType = 'json';

xhr.onload = function() {
var individuals = xhr.response.individuals;
var individualsDiv = document.getElementById('individuals');

  individuals.forEach(function(individual) {
      var individualsDiv = document.createElement('div');
      inidivualsDiv.classList.add('individual');

      var name = document.createElement('h2');
      name.textContent = individual.name;

      var language = document.createElement('p');
      language.textContent = individual.language;

      var id = document.createElement('p');
      id.textContext = individual.id; 

      var bio = document.createElement('p');
      bio.textContent = individual.bio; 

      var version = document.createElement('p');
      version.textContent = individual.version; 

      individualsDiv.appendChild(name);
      individualsDiv.appendChild(language);
      individualsDiv.appendChild(id);
      individualsDiv.appendChild(bio);
      individualsDiv.appendChild(version);
    
    });
}

xhr.send();