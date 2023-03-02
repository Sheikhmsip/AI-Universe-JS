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
        <div class="card-body bg-base-100 shadow-xl w-[100%] mx-auto py-3 px-5 rounded-lg"">
            <figure class="px-4 pt-5">
                <img src="${ai.image}" alt=""/ class="w-[700px]">
            </figure>
            <div class="pl-4">
            <h3 class="card-title mb-2">Features</h3>
            <div class="pl-2">
            <p>1. }</p>
            <p>2. }</p>
            <p>3. </p>
            </div>
            </div>
            
            
            
        </div>
        `
       aiContainer.appendChild(aisDiv); 
    })

}

loadAi();