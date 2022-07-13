let btnShow = document.getElementById('button');
let input = document.getElementById('namee');
input.addEventListener('keyup',(e)=> {
    if(e.target.value == '') {
        btnShow.classList.add('disable');
}
else{
    btnShow.classList.remove('disable');
}
});
let formm = document.getElementById('button');
formm.onclick = () =>{
    localStorage.setItem('NEV',input.value);
};
