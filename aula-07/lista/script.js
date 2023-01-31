const li = [...document.querySelectorAll('#lista li')] 
li.forEach((lista, index)=>{
    lista.addEventListener('click',()=>{
        lista.classList.toggle('concluido');
    })
})


// li.forEach((item) =>{
//     item.onclick = concluir
// })

// function concluir(evento){
//     console.log(evento);
//     evento.target.classList.toggle('concluido')
// }
