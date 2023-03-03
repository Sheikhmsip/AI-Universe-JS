const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAis(data.data.tools));
}

const displayAis = ais => {
    // console.log(ais);
    const aiContainer = document.getElementById('ai-container');

    ais.forEach(ai => {
        // console.log(ai);
        const aisDiv = document.createElement('div');
        aisDiv.classList.add('card');
        aisDiv.innerHTML = `
        <div class="card-body bg-base-100 shadow-xl h-[98%] mx-auto py-3 px-5 rounded-lg"">
                <figure class="">
                    <img src=" ${ai.image}" alt="" / class="w-[700px]">
                </figure>
                <div class="pl-4">
                    <h3 class="card-title mb-2">Features</h3>
                    <div class="pl-2">
                        <p>1. ${ai.features[0]}</p>
                        <p>2. ${ai.features[1]}</p>
                        <p>3. ${ai.features[2] ? ai.features[2] : 'No features available'}</p>
                    </div>
                </div>

                <div class="flex justify-between items-center gap-5 ">
                    <div class="pl-4">
                        <h3 class="card-title mb-2">${ai.name}</h3>
                        <p class="pl-1"> <i class="fa-regular fa-calendar-days"></i> ${ai.published_in ? ai.published_in
                : "No published date"}</p>
                    </div>
                    <div class="">
                        
                        <label for="details" onclick="loadAiDetail('${ai.id}')" class="bg-[#FEFF81] h-[40px] w-[40px] rounded-full px-3 py-2 cursor-pointer"><i
                                class="fa-solid fa-arrow-right text-[#EB5757]"></i>
                        </label>

                        
                        <input type="checkbox" id="details" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative w-11/12 max-w-5xl flex justify-between items-center gap-5 ">
                                <label for="details" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <div id="modal-card" class="flex justify-between items-center gap-5 mx-auto py-5 px-5 mt-5" >
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
        aiContainer.appendChild(aisDiv);
    })

}

const loadAiDetail = id => {

    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAiDetais(data.data));
    // console.log(data);

}

const displayAiDetais = ai => {
    console.log(ai);
    document.getElementById('modal-card').innerHTML = `
        <div class="card  bg-base-100 shadow-xl w-[50%] h-[400px]">
    <figure class="px-10 ">
        <h1 class="card-title">${ai.description}</h1>
    </figure>
    <div class="card-body items-center text-center">
        <h2 class="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
        </div>
    </div>
    </div>

    <div class="card  bg-base-100 shadow-xl w-[50%] h-[400px]">
    <figure class="px-10">
    <img src="${ai.image_link[0]}" alt="Shoes" class="rounded-xl h-[200px]" />
    </figure>
    <div class="card-body items-center text-center">
    <h2 class="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div class="card-actions">
        <button class="btn btn-primary">Buy Now</button>
    </div>
    </div>
    </div>
    `
}
// loadAiDetail()
loadAi();