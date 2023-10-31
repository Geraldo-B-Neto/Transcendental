var select = document.getElementById('areas');
var content1 = document.getElementById('C_filosofos');
var content2 = document.getElementById('C_musicos');
var content3 = document.getElementById('C_escritores');

var box_gregos = document.getElementsByClassName('gregos_box');
var box_alemaes = document.getElementsByClassName('alemaes_box');
var box_franceses = document.getElementsByClassName('franceses_box');

select.addEventListener('change', function(){   if(select.value == "todos")
{
    content1.style.display = 'block';
    content2.style.display = 'block';
    content3.style.display = 'block';
    content4.style.display = 'block';
}
if(select.value == "filosofos"){
    content1.style.display = 'block';
    content2.style.display = 'none';
    content3.style.display = 'none';
    content4.style.display = 'none';}
if(select.value == "musicos")
{
    content1.style.display = 'none';
    content2.style.display = 'block';
    content3.style.display = 'none';
    content4.style.display = 'none';
}
if(select.value == "escritores")
{
    content1.style.display = 'none';
    content2.style.display = 'none';
    content3.style.display = 'block';
    content4.style.display = 'none';
}
        });
var inputBusca = document.getElementById('text_search');
var cards = document.querySelectorAll('.box_pensadores');
    
inputBusca.addEventListener('input', filtra)
    
function filtra()
{
    if(inputBusca.value != ''){
        for(let card of cards)
        {
            let nome = card.querySelector('h3');

            nome = nome.textContent.toLowerCase();
            
            let textoFiltrado = inputBusca.value.toLowerCase();

             if(!nome.includes(textoFiltrado))
            {   console.log('O texto nao inclui ' + nome)
                card.style.backgroundColor = 'red'
                card.style.display = 'none'
            }
             else
             {
                consloe.log('O texto inclui ' + nome)
                card.style.backgroundColor = 'green'
                card.style.display = 'grid'
            }
        }
            }else
            {for(let card of cards)
                {   card.style.backgroundColor = 'blue'
                    card.style.display = 'grid'
                }
            }
}


