
// converted arr to str and show in card;
const convertedToStr = (array)=>{
    const elements = array.map(element =>{
       return ` <button class=" text-xs py-1.5 px-6 rounded-full font-medium text-[#D97706] bg-[#FFF8DB] border-2 border-[#FDE68A]"> ${element}     
         </button>`
    })
    return elements.join(" ")
}

const totalCount = 


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
    const res = await fetch(url);
    const json = await res.json();
    
    const data = json.data;
    
    const filterClosedData = data.filter(openData => openData.status=='closed');
    displayCard(filterClosedData)
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
        <div>
            <div class="p-4 space-y-3">

                <div class="flex justify-between items-center gap-1">

                    ${card.status=='open'?
                        `<img class="size-6" src="./assets/Open-Status.png" alt="">`
                        : `<img class="size-6" src="./assets/Closed- Status .png" alt="">`}

                    <button class="text-xs py-1.5 px-6 bg-[#FEECEC] text-red-500 rounded-full font-medium">${card.priority}</button>
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
        
    });
}

loadCard()