function previewFile(){
    const reader = new FileReader();
    const file = document.querySelector('input[type=file]').files[0];
    const preview = document.querySelector('img');
        

    reader.onloadend = function(){
        preview.src = reader.result;
    }
    if(file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}
const form = document.getElementsByTagName('form');
   
function valid(form){
    const name = form.name.value;
    const surname = form.surname.value;
    const phone = form.phone.value;

    if (name == '' || name == ' '  || surname == ' ' || surname == '' || phone == '' || phone == ' '){
        alert('Вы заполнили не все поля');
        return false;
    }
    const nameTest = /^[а-яa-z ,.'-]+$/i;
    const phoneTest = /^\+\d{3}\(\d{2}\)\d{3}-\d{2}-\d{2}$/;
    if(nameTest.test(name) == false){
        alert('Name is incorrect');
        return false;
    }
    if(nameTest.test(surname) == false){
        alert('Surname is incorrect');
        return false;
    }
    if(phoneTest.test(phone) == false){
        alert('Phone is incorrect');
        return false;
    }
}

