const bouton = document.getElementById('ajouterImg');
const container = document.getElementById('container');

    function ajouterImage() {
   
      const img = document.createElement('img');
      img.src = 'chaton.jpg';
      img.classList.add('image');
      container.appendChild(img);
    }

    bouton.addEventListener('click', ajouterImage);