// Load Ai card data
const loadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAis(data.data.tools.slice(0, 6)));
};

const showAllLoadAi = () => {
    fetch('https://openapi.programming-hero.com/api/ai/tools')
        .then(res => res.json())
        .then(data => displayAis(data.data.tools));
};

// Display Ai Card
const displayAis = ais => {
    // console.log(ais);
    const aiContainer = document.getElementById('ai-container');
        aiContainer.innerHTML ='';
        const showAll = document.getElementById('see-all');
        if (ais.length <= 6) {
            showAll.classList.remove('hidden');
        } else {
            showAll.classList.add('hidden');
        }
    // Display only the first 6 cards
   


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
                <div class="bg-slate-300 h-[2px]"></div>
                <div class="flex justify-between items-center gap-5 ">
                    <div class="pl-4">
                        <h3 class="card-title mb-2">${ai.name}</h3>
                        <p class="pl-1"> <i class="fa-regular fa-calendar-days"></i> ${ai.published_in ? ai.published_in
                : "No published date"}</p>
                    </div>
                    <div class="mt-2">
                        
                        <label for="details" onclick="loadAiDetail('${ai.id}')" class="bg-[#FEFF81] h-[40px] w-[40px] rounded-full px-3 py-2 cursor-pointer"><i
                                class="fa-solid fa-arrow-right text-[#EB5757]"></i>
                        </label>

                        
                        <input type="checkbox" id="details" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative md:w-11/12 md:max-w-5xl flex justify-between items-center gap-5">
                                <label for="details" class="btn btn-sm btn-circle absolute right-0 top-0">✕</label>
                                <div id="modal-card" class="flex flex-col md:flex-row flex-col-reverse  justify-between items-center gap-5 mx-auto md:px-5 " >
                                
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
        aiContainer.appendChild(aisDiv);
    })
    // showAll.classList.add('hidden');



}

// Load Ai details

const loadAiDetail = id => {

    const url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayAiDetais(data.data));
    // console.log(data);

}
// Display Dynamic Data
const displayAiDetais = ai => {
    console.log(ai);
    document.getElementById('modal-card').innerHTML = `
        <div class="card  bg-base-100 shadow-xl md:mt-1 md:pt-0 max-h-max">
        
    <div class="card-body w-[100%] max-h-max">
       <h1 class="card-title">${ai.description}</h1>
        <div class="grid grid-cols-3 mt-2 gap-5 max-w-max">
            <div class="bg-red-100 py-1  rounded-lg  ">
                <h1 class="text-[#03A30A] font-bold text-center">${ai.pricing ? ai.pricing[0].price : 'No price'} <br> ${ai.pricing ? ai.pricing[0].plan : "No plan"}</h1>
            </div>
            <div class="bg-red-100 py-1  rounded-lg">
                <h1 class="text-[#F28927] font-bold text-center">${ai.pricing ? ai.pricing[1].price : 'No price'} <br> ${ai.pricing ? ai.pricing[1].plan : 'No plan'}</h1>
            </div>
            <div class="bg-red-100 py-1  rounded-lg">
                <h1 class="text-[#EB5757] font-bold text-center">${ai.pricing ? ai.pricing[2].price : 'No price'} <br> ${ai.pricing ? ai.pricing[2].plan : 'No plan'}</h1>
            </div>
        </div>
        <div class="grid grid-cols-2 justify-between gap-3 mt-3">
            <div>
                <h1 class="text-xl font-bold">Features</h1>
                <ul class="list-disc pl-5">
                    <li>${ai.features[1].feature_name}</li>
                    <li>${ai.features[2].feature_name}</li>
                    <li>${ai.features[3].feature_name}</li>
                </ul>
            </div>
            <div>
                <h1 class="text-xl font-bold">Integrations</h1>
                <ul class="list-disc pl-5">
                    <li>${ai.integrations ? ai.integrations[0] : 'No data found'}</li>
                    <li>${ai.integrations ? ai.integrations[1] || 'No data found' : 'No data found'}</li>
                    <li>${ai.integrations ? ai.integrations[2] || 'No data found' : 'No data found'}</li>
                </ul>
            </div>
        </div>
    </div>
    </div>

    

    <div class="card md:mt-0 lg:mt-0 relative mt-[400px] w-[100%] bg-base-100 shadow-xl max-h-max">
    <figure class="px-5">
    <img src="${ai.image_link[0]}" alt="" class="rounded-xl"/>
    <h1 class="absolute top-0 right-6 bg-[#EB5757] text-white px-2 rounded-lg">${ai.accuracy.score ? ai.accuracy.score : 'No'}% Accuracy</h1>
    </figure>
    <div class="card-body items-center ">
    
    <h2 class="card-title">${ai.input_output_examples ? ai.input_output_examples[0].input : ''}</h2>
    <p>${ai.input_output_examples ? ai.input_output_examples[1].output.slice(0, 100) : ' '}</p>
    
    </div>
    </div>
    `
}


// show all card 
//  add click event to see-all button
//  showAll.addEventListener('click', (displayAis) => {

//     ais.forEach(ai => {


//     });
//     showAll.classList.add('hidden');
// });






loadAi();