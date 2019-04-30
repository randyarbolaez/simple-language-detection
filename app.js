function detectLanguage(e) {
  e.preventDefault();
  let language = document.getElementById('language');
  let input = document.getElementById('input').value;

  fetch(
    `http://apilayer.net/api/detect?access_key=8375e3e0f508672ba6223b485bf27757&query=${input}`
  )
    .then(res => res.json())
    .then(res => {
      language.innerHTML = `Langauge detected - ${
        res.results[0].language_name
      }`;
    });
}
