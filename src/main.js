// Função responsável por buscar a fonetica do termo
export async function searchPhonetic(term) {
  const index = 0;
  if (term) {
    const query = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${term}`
    );

    if (query.status === 404) {
      return "";
    }

    const response = await query.json();
    const data = response[0]["phonetics"];
    const positionAudio = checkAudio(data);
  }

  return data[positionAudio];
}

// Função responsável por saber qual id do objeto possui um audio
function checkAudio(data) {
  let index = 0;
  let audio;

  for (let indexItem in data) {
    audio = data[indexItem].audio;
    if (audio) {
      index = indexItem;

      if (audio.includes("-us.mp3")) {
        return indexItem;
      }
    }
  }
  return index;
}
