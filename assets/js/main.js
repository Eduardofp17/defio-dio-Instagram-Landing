let imagem = document.querySelector('.imagem');
let contador = 0;

function avancaImage(){
    imagem.setAttribute('src', `./assets/images/imagem${contador}.png`);
    console.log('avancei')
};

function voltaImage(num){
    imagem.setAttribute('src', `./assets/images/imagem${num}.png`);
    console.log('retrocedi')
};
function starT(){
   if(contador <= 3){
    contador++;
    avancaImage();
    
   }else if(contador >3){
    voltaImage(3);
    voltaImage(2);
    voltaImage(1);
    contador=1
   
   }
};

setInterval(starT,2000)