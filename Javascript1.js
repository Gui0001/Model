// Récupérer le formulaire
const form = document.getElementById('contact-form');

// Écouter l'événement de soumission du formulaire
form.addEventListener('submit', (e) => {
  // Empêcher le comportement par défaut du formulaire
  e.preventDefault();

  // Récupérer les valeurs des champs
  const name = form.elements['name'].value;
  const email = form.elements['email'].value;
  const subject = form.elements['subject'].value;
  const message = form.elements['message'].value;

  // Valider les champs (vous pouvez ajouter des validations supplémentaires ici)
  if (name === '' || email === '' || subject === '' || message === '') {
    alert('Veuillez remplir tous les champs du formulaire.');
    return;
  }

  // Envoyer les données à votre serveur (vous devrez implémenter cette partie)
  // Utilisez la méthode fetch() ou une bibliothèque AJAX pour envoyer les données
  // à votre serveur de traitement de formulaires
  // Exemple avec fetch() :
  fetch('https://votre-serveur.com/votre-endpoint', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name,
      email,
      subject,
      message,
    }),
  })
    .then((response) => {
      if (response.ok) {
        alert('Votre message a été envoyé avec succès.');
        form.reset();
      } else {
        throw new Error('Une erreur s\'est produite lors de l\'envoi du message.');
      }
    })
    .catch((error) => {
      alert(error.message);
    });
});
