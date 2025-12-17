async function convert(){
    const from_data=document.getElementById('From').value;
    const to_data=document.getElementById('To').value;
    const amount=document.getElementById('display').value;
    const res=document.getElementById('res')


    let response=await fetch(`https://api.exchangerate-api.com/v4/latest/${from_data}`);
    let data=await response.json();

    const rate=data.rates[to_data];
    const new_amount=(rate * amount).toFixed(2);
    res.textContent=`  ${amount} ${from_data}  =  ${new_amount} ${to_data}` ;





}