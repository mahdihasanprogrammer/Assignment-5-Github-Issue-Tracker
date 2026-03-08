
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
            <img src="./assets/Sparkle.png" alt="Sparkle.png"> ${element.toUpperCase()}         
            </button>`
       }
       else if(element=='good first issue'){
             return `<button class="flex items-center gap-1 text-xs py-1.5 px-3 rounded-full    font-medium text-[#647aa1] bg-[#eaeffc] border-2 border-[#dde2f2]">
                 ${element.toUpperCase()}         
            </button>`
       }

       else if(element=='documentation'){
             return `<button class="flex items-center gap-1 text-xs py-1.5 px-3 rounded-full    font-medium text-[#D97706] bg-[#FFF8DB] border-2 border-[#FDE68A]">
              ${element.toUpperCase()}         
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

// set spinner for all cards;
const manageSpinner = (status)=>{
    if(status===true){
        document.getElementById('card-container').classList.add('hidden');
        document.getElementById('spinner-container').classList.remove('hidden');
    }
    else{
         document.getElementById('spinner-container').classList.add('hidden');
          document.getElementById('card-container').classList.remove('hidden');
    }
}


// set spinner for modal;
const modalSpinner = (status)=>{
     if(status===true){
        document.getElementById('modal-card-container').classList.add('hidden');
        document.getElementById('modal-spinner').classList.remove('hidden');
    }
    else{
         document.getElementById('modal-spinner').classList.add('hidden');
          document.getElementById('modal-card-container').classList.remove('hidden');
    }
}




//1. load all card and show all tab;
const  loadCard = async()=>{

    manageSpinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    displayCard(json.data)
}

// 2. load open status card:
const loadOpenCard= async()=>{
    manageSpinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    
    const data = json.data;
    
    const filterOpenData = data.filter(openData => openData.status=='open');
    displayCard(filterOpenData)
}


// 3.load closed status data;
const loadClosedCard = async()=>{
    manageSpinner(true)
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";

    const res = await fetch(url);
    const json = await res.json();
    
    const data = json.data;
    
    const filterClosedData = data.filter(closedData => closedData.status=='closed');
    displayCard(filterClosedData)
}


//4. show card detail in modal;
const loadCardDetail= async(id)=>{
   modalSpinner(true)
    const url =`https://phi-lab-server.vercel.app/api/v1/lab/issue/${id}`;

    const res = await fetch(url);

    const json =await res.json()
    console.log(json.data)

    displayCardDetail(json.data)

   
}



//1 show card in display;
const displayCard = (cards)=>{
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML="";

    // if cards length will zero , show this message;
     if(cards.length == 0){
        updateCount()
            cardContainer.innerHTML=`
                <h2 class="text-center col-span-4 my-5 text-2xl sm:text-3xl font-semibold text-red-600">
                    No Card Found
                </h2>
            `  
            return
        }

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
        manageSpinner(false)
        
    });
}


// 2. show modal ;
const displayCardDetail = (modalCard)=>{
     
    // 1. get container ;
    const modalCardContainer = document.getElementById('modal-card-container');
    modalCardContainer.innerHTML=`
         <!-- modal card -->
                <div class="space-y-6">
                         <!--card  heading -->
                 <div class="space-y-2">
                  <h2 class="text-2xl font-bold text-[#1F2937]">${modalCard.title}</h2>

                    <div class="flex gap-3 items-center text-[#64748B]">
                    ${modalCard.status=='open'?
                        `<button class="text-sm py-1.5 px-4 bg-green-600 text-white rounded-full font-medium">${modalCard.status}</button>`
                        : `<button class="text-sm py-1.5 px-4 bg-purple-600 text-white    rounded-full font-medium">${modalCard.status}</button>`
                    }
                       
                        <div class="size-3 rounded-full bg-[#64748B]"></div>
                        <h2 class="text-xs mr-2">Opened by ${modalCard.author}</h2>
                        <div class="size-3 rounded-full bg-[#64748B]"></div>
                        <h2 class="text-xs">${new Date(modalCard.createdAt).toLocaleDateString('en-GB')}</h2>
                    </div>
                 </div>

                 <!-- card labels -->
                  <div class="flex gap-2">${convertedToStr(modalCard.labels)}</div>

                  <!-- description -->
                  <p class="text-[#64748B]"> ${modalCard.description}</p>

                  <!-- card Assignee and priority -->
                   <div class="text-[#64748B] bg-base-200 p-4 flex gap-20">
                      <!-- left content -->
                      <div class="space-y-1">
                       <p >Assignee:</p>
                        <h2 class="font-bold text-[#1F2937]">${modalCard.assignee ? modalCard.assignee : 'Not Found'}</h2>
                      </div>
                      <!-- right content -->
                      <div class="space-y-1">
                        <p>Priority:</p>
                         <button class="text-sm py-1 px-4 bg-red-600 text-white rounded-full font-medium">${modalCard.priority.toUpperCase()}</button>
                      </div>
                   </div>
                </div>
    `
        card_modal.showModal();
        modalSpinner(false)
        
};

loadCard()


// search card by title and show in display;
const searchBtn = document.getElementById('btn-search');
searchBtn.addEventListener('click', async ()=>{
    const inputValue = document.getElementById('input-search').value;
     
    manageSpinner(true)
    // get data from api
    const url = "https://phi-lab-server.vercel.app/api/v1/lab/issues";
    const res =  await fetch(url);
    const json = await res.json();
    // console.log(json.data)

    const filterData = json.data.filter(output => {
       return output.title.toLowerCase().includes(inputValue.toLowerCase())
    });
    displayCard(filterData)
})