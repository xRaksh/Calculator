let string ="";
let buttons = document.querySelectorAll(".bnt");
Array.from(buttons).forEach((bnt) =>{
    bnt.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            document.querySelector('input').value = string;
            string = " "
        }
        else if(e.target.innerHTML == 'AC'){
            string = "";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target);
        // console.log("Done........");
        string = string + e.target.innerHTML;
        document.querySelector('input').value = string;
        }
        
    })

})