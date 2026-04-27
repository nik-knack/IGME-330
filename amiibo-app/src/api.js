const baseurl = "https://www.amiiboapi.org/api/amiibo/?name=";

export const searchAmiibo = (name) => {
  return fetch(`${baseurl}${name}`)
    .then(response => {
      if (!response.ok) throw new Error(`Failed: ${response.status}`);
      return response.json();
    });
};