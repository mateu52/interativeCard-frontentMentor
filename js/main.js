const btn = document.getElementsByClassName('onsubmit');
const secondSection = document.getElementsByClassName('secondSect');
const afterSubmit = document.getElementsByClassName('afterSubmit');

const submitButton = (event) => {
    event.preventDefault();
    console.log("hello")
    secondSection.style = "display:block";
    secondSection.style.backgroundColor = "red"

}

btn[0].addEventListener('click', submitButton);