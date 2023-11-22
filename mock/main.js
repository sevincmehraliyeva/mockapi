const nameInput = document.getElementById("exampleInputName")
const surnameInput = document.getElementById("exampleInputSurname")
const ageInput = document.getElementById("exampleInputAge")
const studentIdInput = document.getElementById("exampleInputStudent")
const myForm = document.getElementById("myForm")

function fetchPost(event) {
    event.preventDefault();

    axios.post("https://655c30f2ab37729791aa0509.mockapi.io/studends", {
        name: nameInput.value,
        surname: surnameInput.value,
        age: ageInput.value,
        studentId: studentIdInput.value


    }).then(res => {
        console.log(res);
    })
}

myForm.addEventListener('submit', fetchPost)
