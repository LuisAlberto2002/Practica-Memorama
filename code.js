const tarjetas=document.querySelectorAll('.tarjeta');
var par1=0,par2=0,par3=0,par4=0,par5=0,par6=0,par7=0,par8=0,par9=0,par10=0;
var flip=0;
var match=0;
console.log(tarjetas);
var numero=0;
var i;
tarjetas.forEach(imagen => {
    numero=parseInt(Math.random()*10+1);
    if(numero === 1 && par1 !== 2){
        par1++;
        i=i-1;
        imagen.classList.add('DragonRojo');
        imagen.classList.add('noFlipped');
    }if(numero === 2 && par2 !== 2){
        par2++;
        i=i-1;
        imagen.classList.add('DragonVerde');
        imagen.classList.add('noFlipped');
    }
    if(numero === 3 && par3 !== 2){
        par3++;
        i=i-1;
        imagen.classList.add('DragonBlanco');
        imagen.classList.add('noFlipped');
    }
    if(numero === 4 && par4 !== 2){
        par4++;
        i=i-1;
        imagen.classList.add('Fenix');
        imagen.classList.add('noFlipped');
    }
    if(numero === 5 && par5 !== 2){
        par5++;
        i=i-1;
        imagen.classList.add('Ninfa');
        imagen.classList.add('noFlipped');
    }
    if(numero === 6 && par6 !== 2){
        par6++;
        i=i-1;
        imagen.classList.add('Hada');
        imagen.classList.add('noFlipped');
    }
    if(numero === 7 && par7 !== 2){
        par7++;
        i=i-1;
        imagen.classList.add('Kitsune');
        imagen.classList.add('noFlipped');
    }
    if(numero === 8 && par8 !== 2){
        par8++;
        i=i-1;
        imagen.classList.add('Demonio');
        imagen.classList.add('noFlipped');
    }
    if(numero === 9 && par9 !== 2){
        par9++;
        i=i-1;
        imagen.classList.add('Hipocampo');
        imagen.classList.add('noFlipped');
    }
    if(numero === 10 && par10 !== 2){
        par10++;
        i=i-1;
        imagen.classList.add('AveMitica');
        imagen.classList.add('noFlipped');
    }
});
tarjetas.forEach(element => {
    element.addEventListener('click',function(){
        element.classList.toggle('noFlipped');
        console.log(element.classList);
    })
});
//Falta crear la asignacion aleatoria de clases a las tarjetas, sera necesario emplear otro forheach y contadores para cada una de las 
//tarjetas disponibles debido a que se requiere estipular que no se repitan mas de dos veces.