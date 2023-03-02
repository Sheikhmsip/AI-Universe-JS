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
                        <!-- The button to open modal -->
                        <label for="my-modal-3"
                            class="bg-[#FEFF81] h-[40px] w-[40px] rounded-full px-3 py-2 cursor-pointer"><i
                                class="fa-solid fa-arrow-right text-[#EB5757]"></i>
                        </label>

                        <!-- Modal body -->
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                            <div class="modal-box relative">
                                <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                                <h1></h1>
                                <h2></h2>
                                <h3></h3>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        `
        aiContainer.appendChild(aisDiv);
    })

}

loadAi();