
const form = document.querySelector('form');
const btnEl = document.querySelector("button");
const haveCurrency = document.querySelector('#haveCurrency')
const wantCurrency = document.querySelector('#wantCurrency');
const amount = document.querySelector('#amount');
const output = document.querySelector('#output');
const currencySymbol = document.querySelector('#currencySymbol');
const basicRate = document.querySelector('#basicRate');
const alertMsg = document.querySelector('#alertMsg');



const API_KEY='OW8VaQY/Vx8rv7cGI5d82w==qhKdtqaY9YzZGpvZ'

const option ={
    method:'GET',
    'X-Api-Key':API_KEY
}

window.addEventListener('load',async()=>{
    await fetch('./country-by-currency-code.json').then(res=>res.json()).then(data=>{
        for(let i=0;i<data.length;i++)
        {
            const option = document.createElement("option");
            const option2 = document.createElement("option");

            option.setAttribute('value',`${data[i].currency_code}`);
            option.textContent=`${data[i].country}`;
            haveCurrency.appendChild(option);

            option2.setAttribute('value',`${data[i].currency_code}`);
            option2.textContent=`${data[i].country}`;
            wantCurrency.appendChild(option2);
        }
    });
})

form.addEventListener('submit',async(e)=>{
    e.preventDefault();
   
    const wantCurValue = wantCurrency.value;
    const haveCurValue=haveCurrency.value;
    
    const amountValue =amount.value;
    if(amountValue==="" || wantCurValue===0 || haveCurValue===0)
    {
        alertMsg.classList.add('active');
        alertMsg.classList.remove('inactive')
        alertMsg.childNodes[1].addEventListener('click',()=>{
            alertMsg.classList.add('inactive');
            alertMsg.classList.remove('active');
        })

    }
    else{
    
    const url = `https://api.api-ninjas.com/v1/convertcurrency?want=${wantCurValue}&have=${haveCurValue}&amount=${amountValue}`;
    btnEl.classList.add('buttonAnime');
    btnEl.innerText='converting...'
    await fetch(url,option).then(res=>res.json()).then(data=>{
        output.textContent=data.new_amount;
    });
    btnEl.innerText='Change';
    btnEl.classList.remove('buttonAnime');
    await fetch('./Common-Currency.json').then(res=>res.json()).then(data=>{
        currencySymbol.textContent=`
        ${data[wantCurValue].symbol}`;
    });
}

});


