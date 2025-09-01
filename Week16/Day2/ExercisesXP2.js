// Retrieve the form and console.log it.
    let form = document.getElementsByTagName("form")[0];
    console.log(form);
// Retrieve the inputs by their id and console.log them.
    let fname = document.getElementById("fname");
    console.log(fname);
    let lname = document.getElementById("lname");
    console.log(lname);
// Retrieve the inputs by their name attribute and console.log them.
    let firstname = document.getElementsByName("firstname");
    console.log(firstname);
    let lastname = document.getElementsByName("lastname");
    console.log(lastname); 
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
"To prevent form submission in order to perform form validation"
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
    form.addEventListener("submit", getUserComments)
 
    function clearFnameErrors(){
        fname.setCustomValidity("")
    } 

    function clearLnameErrors(){
        lname.setCustomValidity("")
    }

    fname.addEventListener("input", clearFnameErrors)
    lname.addEventListener("input", clearLnameErrors)

    function getUserComments(e) {
        e.preventDefault()
        let ul = document.getElementsByClassName("usersAnswer")[0]
        
        if (!fname.value) {
            fname.setCustomValidity("Field is empty!");
        } else {
            fname.setCustomValidity("");
        }

        if (!lname.value) {
            lname.setCustomValidity("Field is empty!");
        } else {
            lname.setCustomValidity("");
        }

        if (!form.reportValidity()) {
            return; 
        }
        
        ul.innerHTML = "";
        let li1 = document.createElement("li");
        let f = document.createTextNode(fname.value);
        li1.appendChild(f);
        ul.appendChild(li1)
        let li2 = document.createElement("li");
        let l = document.createTextNode(lname.value);
        li2.appendChild(l);
        ul.appendChild(li2)
        console.log(ul)
    }