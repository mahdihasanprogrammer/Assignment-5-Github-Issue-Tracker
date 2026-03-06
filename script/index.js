
const btnSign = document.getElementById('btn-sign');
btnSign.addEventListener('click',()=>{
    
    const userName = document.getElementById('username');
    if(userName.value !== 'admin'){
        return alert('provide username is admin')
    }

    const pin = document.getElementById('pin');
    if(pin.value === "admin123"){
        window.location.href="./homePage.html";
    }else{
        alert('Invalid Pin')
    }
})