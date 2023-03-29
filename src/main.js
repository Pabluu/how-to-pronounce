// Função responsável por buscar pelo termo
export async function searchPhonetic(term) {
  const query = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
  );
  const response = await query.json();
  const data = response[0]["phonetics"];
  const positionAudio = checkAudio(data);

  return data[positionAudio];
}

// Função responsável por saber qual id do objeto possui um audio
function checkAudio(data) {
  let index = 0;

  for (let indexItem in data) {
    if (data[indexItem].audio) {
      return indexItem;
    }
  }
  return index;
}
