import Notiflix from 'notiflix';

export function fetchBreeds(errorEl) {
  let urlBreeds = 'https://api.thecatapi.com/v1/breeds';
  return fetch(urlBreeds)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
   
}

function urlConstructor(breedId) {
  const urlApi = 'https://api.thecatapi.com/v1/images/search?';
  const apiKey ='live_jaWfzmOm4MFvCNwaeuAw8DN12zXImxoE2SxyWdXy4UCORPRRMmKppbnfZrGxueYZ';
  const searchParams = new URLSearchParams({
    breed_ids: breedId,
    api_key: apiKey,
  });
  return urlApi + searchParams.toString();
}

export function fetchCatByBreed(breedId, errorEl, loaderEl, loaderS, selectEl) {
  const urlBreed = urlConstructor(breedId);
  return fetch(urlBreed)
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    
}
