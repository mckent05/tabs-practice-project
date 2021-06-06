let about=document.querySelector('.about-container')
let btns=document.querySelectorAll('.btn')
let contents=document.querySelectorAll('.contents')

about.addEventListener('click',function(e){
    let id=e.target.dataset.id

    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active')
            e.target.classList.add('active')
        })
        contents.forEach(function(cont){
            cont.classList.remove('active')
        })
        let element=document.getElementById(id)
        element.classList.add('active')
    }
})