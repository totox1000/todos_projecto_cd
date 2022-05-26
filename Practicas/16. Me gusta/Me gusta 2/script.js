//var count = 1;
//var countElement = document.querySelector("#count");

//console.log(countElement)

function add1(identificador) {   // identificador='count_1'
    identificador ='#'+identificador;  // identificador='#count_1'

    let elemento=document.querySelector(identificador);// elemento=document.querySelector('#count_1') ; elemento='<span id='count_1>5</span>;
    let cantidad = elemento.innerText; // cantidad=5
    cantidad++;   //cantidad=6
    elemento.innerText =cantidad ; //'<span id='count_1>6</span>
   // console.log(count);
}

function add2(clase) {   // identificador='count_1'
    clase ='.'+clase;  // identificador='#count_1'
    //console.log(clase)

    let elementos=document.querySelectorAll(clase);// elemento=document.querySelector('#count_1') ; elemento='<span id='count_1>5</span>;
    //console.log(elementos);
    for (i=0;i<elementos.length ;i++){
        let cantidad = elementos[i].innerText; // cantidad=5
        cantidad++;   //cantidad=6
        elementos[i].innerText =cantidad ; //'<span id='count_1>6</span>

    }
   // console.log(count);
}