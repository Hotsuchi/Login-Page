let logIn = ()=>{
    let form = document.querySelector('form');          
    form.addEventListener('submit',(e)=>{
        e.preventDefault();
        let inpName = e.target.uname.value;
        let inpPass = e.target.upass.value;
        
        let ls = JSON.parse(localStorage.getItem('loginData')) ?? []; 
        ls.forEach((v)=>{
            if(v.uname == inpName && v.pass == inpPass){
                alert ('succsess');
               // break;
            }
        })
        e.target.reset();
    })
}
logIn();
