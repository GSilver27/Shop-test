let currencys = ['$ USD', '€ EUR', '¥ JPY']
let currencysSight = ['$', '€', '¥']
var select = document.getElementById("currency");

select.innerHTML = "";

for (let i = 0; i < currencys.length; i++) {
    let opt = currencys[i];
    select.innerHTML += "<option value=\"" + opt + "\">" + opt + "</option>";
}

