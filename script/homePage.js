
// converted arr to str and show in card;
const convertedToStr = (array)=>{
    const elements = array.map(element =>{
       if(element=='bug'){
            return ` <button class="flex items-center gap-1 text-xs py-1.5 px-3 rounded-full font-medium text-[#EF4444] bg-[#FEECEC] border-2 border-[#FECACA]">
                <i class="fa-solid fa-bug"></i>${element.toUpperCase()}     
            </button>`
       }
       else if(element=='help wanted'){
             return `<button class="flex items-center gap-1 text-xs py-1.5 px-3 rounded-full    font-medium text-[#D97706] bg-[#FFF8DB] border-2 border-[#FDE68A]">
                <i class="fa-solid fa-life-ring"></i> ${element.toUpperCase()}         
            </button>`
       }
       else if(element=='enhancement'){
            return `<button class="flex items-center gap-1 text-xs py-1.5 px-3 rounded-full     font-medium text-[#00A96E] bg-[#DEFCE8] border-2 border-[#BBF7D0]">
                <i class="fa-solid fa-life-ring"></i> ${element.toUpperCase()}         
            </button>`
       }
    })
    return elements.join(" ")
}

// update all tab, open tab, closed tab count;
const updateCount = ()=>{
    const cardContainer = document.getElementById('card-container');

    const totalCount = cardContainer.children.length;
    const countCard = document.getElementById('count-card');
    countCard.innerText=`${totalCount} Issues`

}


//1. load all card and show all tab;
const  loadCard = async()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    displayCard(json.data)
}

// 2. load open status card:
const loadOpenCard= async()=>{
      const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    
    const data = json.data;
    
    const filterOpenData = data.filter(openData => openData.status=='open');
    displayCard(filterOpenData)
}


// 3.load closed status data;
const loadClosedCard = async()=>{
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    
    const data = json.data;
    
    const filterClosedData = data.filter(closedData => closedData.status=='closed');
    displayCard(filterClosedData)
}


//4. show card detail in modal;
const loadCardDetail = async(id)=>{
    const url = `https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    const res = await fetch(url);
    const json = res.json();
    console.log(json)
}



// show in display;
const displayCard = (cards)=>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML="";

    cards.forEach(card => {
        
        


        const createCard = document.createElement('div');
         createCard.className='bg-base-100 shadow  rounded-lg flex items-end';

        if(card.status=='open'){
            createCard.classList.add('border-t-4','border-green-600')
        }else{
            createCard.classList.add('border-t-4','border-purple-600')
        }
       
    
        createCard.innerHTML=`
        <div onclick="loadCardDetail(${card.id})">
            <div class="p-4 space-y-3">

                <div class="flex justify-between items-center gap-1">

                    ${card.status=='open'?
                        `<img class="size-6" src="./assets/Open-Status.png" alt="">`
                        : `<img class="size-6" src="./assets/Closed-Status.png" alt="">`}
                    
                    ${card.priority=='high'?
                        `<button class="text-sm py-1.5 px-4 bg-[#FEECEC] text-red-500 rounded-full font-medium">${card.priority.toUpperCase()}</button>`:
                         `${card.priority=='medium' ? 
                            `<button class="text-sm py-1.5 px-4 text-[#D97706] bg-[#FFF8DB] rounded-full font-medium">${card.priority.toUpperCase()}</button>`
                             : `<button class="text-sm py-1.5 px-4 text-[#9CA3AF] bg-[#EEEFF2] rounded-full font-medium">${card.priority.toUpperCase()}</button>`
                        }`}
                </div>

                <div>
                    <h2 class="text-sm font-semibold mb-2">${card.title}</h2>
                    <p class="text-xs font-normal text-[#64748B]">${card.description}</p>
                </div>

                <div class="flex gap-1 sm:gap-2 xl:gap-1 flex-wrap">
                 ${convertedToStr(card.labels)}
                </div>
            </div>

            <hr class="border border-gray-300">

            <div class="p-4 space-y-2 text-[#64748B] text-xs">
                <p>${card.author}</p>
                <p>${new Date(card.createdAt).toLocaleDateString("en-GB")}</p>
            </div>
            
        </div>
        `

        cardContainer.appendChild(createCard)
        updateCount()
        
    });
}

loadCard()