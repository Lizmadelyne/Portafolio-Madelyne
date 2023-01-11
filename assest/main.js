const API ='https://youtube-v31.p.rapidapi.com/search?channelId=UCS7dfokaYTjV6M-cLJEW5RA&part=snippet%2Cid&order=date&maxResults=8';
const content = null || document.getElementById('content');

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '17c6b1552cmshd409b52297037e1p11818djsn7a1a16f21600',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
};

async function fetchData(urlApi) {
    const response = await fetch(urlApi, options);
    const data = await response.json();
    return data;
}
(async () => {
    try {
        const videos = await fetchData(API);
        let view = `
        ${videos.items.map(video => `
            <div class="group relative">
                <div
                    class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${video.snippet.thumbnails.high.url}" alt="${video.snippet.description}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700" style="color:gray;">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                        ${video.snippet.title}
                    </h3>
                </div>
            </div>
        `).slice(0, 4).join('')}
        `;
        content.innerHTML = view; //innerHTML es igual a la vista que se ha creado e itera con el metodo map y devuelve un nuevo arreglo con los elementos que queremos obtener como el título, la descripción, la imagen miniatura de la API
    } catch (error){
        console.log(error); //en caso que de que haya un error el catch lo captura e imprime qué tipo de error
    }
})();




    