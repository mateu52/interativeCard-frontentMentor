const btn = document.getElementsByClassName('onsubmit');
const secondSection = document.getElementsByClassName('secondSect')[0];
const afterSubmit = document.getElementsByClassName('afterSubmit')[0];
const btnCdn = document.getElementsByClassName('btn-continue');
const form = document.querySelector('form');
const formName = document.getElementsByClassName('form-name')[0];
const formNameError = document.getElementsByClassName('form-name-error')[0];
formNameError.style.display = "none";
const formCardNum = document.getElementsByClassName('form-card-num')[0];
const formCardNumError = document.getElementsByClassName('form-card-num-error')[0];
let numOfCard = 0;
formCardNumError.style.display = "none"
formCardNum.addEventListener("input", (e) => {
    const eventNumber = e.target.value;
    //console.log(e.target);
    if(parseInt(eventNumber) >= 0 || parseInt(eventNumber) > 2*53){
        
        if(eventNumber>=1 ){
            //console.log("Podaj poprawne imię", eventNumber );
            formCardNumError.style.display = "none"
            if(numOfCard.length<=16){
                numOfCard.push(eventNumber);
                formCardNumError.style.display = "none"

                //console.log("Podaj poprawne imię", eventNumber );
            }
        }
    }else {
        formCardNumError.style.display = "block"        
        formCardNumError.style.color= "red";
    }
    //console.log(parseInt(e.target.value))
})
formName.addEventListener("input", (e) => {
    
    if(e.target.value.length < 5 ){
        //console.log("Podaj poprawne imię");
        formNameError.style.display = "block";
        formNameError.style.color= "red";
    }
    else{
        formNameError.style.display = "none";
    }
})
const submitButton = (event) => {
    event.preventDefault();
    secondSection.style.display = "none";
    afterSubmit.style.display = "block";

}

btn[0].addEventListener('click', submitButton);
btnCdn[0].addEventListener('click', () => {
    secondSection.style.display = "block";
    afterSubmit.style.display = "none";
})
