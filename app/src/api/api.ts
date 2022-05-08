import store from "../store/store";

const baseUrl = "https://api.nasa.gov/mars-photos/api/v1";
const apiKey = "api_key=N6CdtxPbBwzFVX5HaY1DR0vcCdUoBSm5cCIYQarI";

interface IResult {
  img_src?: string;
}

export let result: Array<string> = [];

export const getRoversInfo = async (rover: string) => {
  let response = await fetch(`${baseUrl}/manifests/${rover}?${apiKey}`)
    .then((response) => response.json())
    .then((data) => data.photo_manifest.max_sol);

  return store.setMaxSol(response);
};

export const getPhotos = async (rover: string, page: number) => {
  let response = await fetch(
    `${baseUrl}/rovers/${rover}/photos?sol=1000&page=${page}&${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => data.photos);

  return response.map((item: any) => {
    result.push(item.img_src);
    return result;
  });
};

// https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=2&api_key=N6CdtxPbBwzFVX5HaY1DR0vcCdUoBSm5cCIYQarI

// https://api.nasa.gov/mars-photos/api/v1/manifests/curiosity?api_key=N6CdtxPbBwzFVX5HaY1DR0vcCdUoBSm5cCIYQarI
