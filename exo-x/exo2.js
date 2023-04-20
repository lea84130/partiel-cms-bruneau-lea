const bouton = document.getElementById('boutonClic');
const compteur = document.getElementById('compteur');

    if (localStorage.getItem('clics')) {
      compteur.textContent = localStorage.getItem('clics');
    }

    function gererClic() {
      let nbClics = parseInt(compteur.textContent);
      nbClics++;
      compteur.textContent = nbClics;
      localStorage.setItem('clics', nbClics);
    }

    bouton.addEventListener('click', gererClic);