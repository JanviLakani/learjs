

function handlesubmit() {
    
    event.preventDefault();
    
    // console.log("sjkdhsfj");

    let name=document.getElementById("fname").value;
    let fage = document.getElementById('age').value;

    console.log('name');
    console.log(fage);

    if (name === '') {
        document.getElementById('spanfname').innerHTML = "please enter youfname";
    } else {
        var regex = /^[a-zA-Z ]{2,30}$/;

       if ( regex.test(name)) {
        document.getElementById('spanfname').innerHTML = "please enter valid name";
       }

        document.getElementById('spanfname').innerHTML = "";
    }


    if (fage !== '') {
        if (isNaN(fage)) {
             document.getElementById('spanage').innerHTML="please enter age in number"
        } else if (fage >= 0) {
            document.getElementById('spanage').innerHTML=""
        } else {
             document.getElementById('spanage').innerHTML="please enter valid age "
        }
    } else {
        document.getElementById('spanage').innerHTML="please enter your age "
    }

    // document.getElementById('spanfname').innerHTML = "jhjhjhjhjh";
    // document.getElementById('spanage').innerHTML;

    

    


    


    
    
}