send.addEventListener("click",calc);
function calc(){
    let val_summa = summa.value;
    let val_stavka = stavka.value;
    let val_term = term.value;
    let val_result;
    val_stavka=val_stavka/12/100;
    val_result = val_summa/val_term+val_summa*val_stavka;
    result.innerHTML = val_result.toFixed(2);

}