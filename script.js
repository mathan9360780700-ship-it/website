const html = document.getElementById('html');

html.scrollTo({
    behavior: "smooth",
    top: 0,
    opacity: 0,

});

html.addEventListener("click", function(event){
    event.preventDefault();
});

const phone = document.getElementById('phone');

// the exactly phone number size 10
const phoneRegex = /^\d{10}$/;

phone.addEventListener('input', () => {
    // the test the number of count is 10 then will be process
    // value( the user input in html will process valid or not)
    if(phoneRegex.test(phone.value)){
        phone.style.color = "green";
    }
    else {
        phone.style.color = "red";
    }
})
exports.phone = phone;