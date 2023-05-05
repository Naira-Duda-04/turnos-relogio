function relogio(){
    const elementoRelogio = document.querySelector('.relogio');
    const horaAtual = new Date();
    const horas = horaAtual.getHours();
    const minutos = horaAtual.getMinutes();
    const segundos = horaAtual.getSeconds();

    const formatoHoras = horas.toString().padStart(2, '0')
    const formatoMinutos = minutos.toString().padStart(2, '0')
    const formatoSegundos = segundos.toString().padStart(2,'0')

    elementoRelogio.textContent = `${formatoHoras}: ${formatoMinutos}: ${formatoSegundos}`;
    const frase = document.querySelector('.frase')

    var img = document.getElementById('img1')

    dia = new  Array('Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sabado')

    hoje = new Date

    mes = new  Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Desembro' )
    hoje = new Date

    frase.innerHTML = `${dia[hoje.getDay()]}, ${hoje.getDate().toString().padStart(2, '0')} de ${mes[hoje.getMonth()]} de ${hoje.getFullYear()}` 


    if(formatoHoras >= 5 && formatoHoras <6 ){
        document.body.style.backgroundImage = "url(img/01-Early-Morning.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/FRQCRvC-e1487952606120.png"
        document.getElementById('turno').backgroundSize = "100% 820%"  
    }

    else if(formatoHoras >= 6 && formatoHoras <7){
        document.body.style.backgroundImage = "url(img/02-Mid-Morning.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/aI01Yo4-e1487952530131.png"
        document.getElementById('turno').backgroundSize = "0%"

    }

    else if(formatoHoras >= 7 && formatoHoras <9){
        document.body.style.backgroundImage = "url(img/03-Late-Morning.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/fFFhbzn-e1487952592576.png"
        document.getElementById('turno').backgroundSize = "100% 820%"

    }

    else if(formatoHoras >= 9 && formatoHoras <11){
        document.body.style.backgroundImage = "url(img/04-Early-Afternoon.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/dopMHAn-e1487952574827.png"
        document.getElementById('turno').backgroundSize = "100% 820%"

    }

    else if(formatoHoras >= 11 && formatoHoras <13){
        document.body.style.backgroundImage = "url(img/05-Mid-Afternoon.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/xYd8QuO-e1487952716384.png"
        document.getElementById('turno').backgroundSize = "100% 820%"

    }

    else if(formatoHoras >= 13 && formatoHoras <15){
        document.body.style.backgroundImage = "url(img/06-Late-Afternoon.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/VG8ZlrH-e1487952705685.png"
        document.getElementById('turno').backgroundSize = "100% 820%"

    }


    else if(formatoHoras >= 15 && formatoHoras <16){
        document.body.style.backgroundImage = "url(img/07-Early-Evening.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/jKA4Jiz-e1487952672997.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }

    else if(formatoHoras >= 16 && formatoHoras <17){
        document.body.style.backgroundImage = "url(img/08-Mid-Evening.png)";
       

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/IHO2QO2-e1487952642671.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }

    else if(formatoHoras >= 17 && formatoHoras <20){
        document.body.style.backgroundImage = "url(img/09-Late-Evening.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/DBHONQC-e1487952554419.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }

    else if(formatoHoras >= 20 && formatoHoras <23){
        document.body.style.backgroundImage = "url(img/10-Early-Night.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/9NWnVvH-e1487952497178.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }

    else if(formatoHoras >= 23 && formatoHoras <2){
        document.body.style.backgroundImage = "url(img/11-Mid-Night.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/9NWnVvH-e1487952497178.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }


    else{
        document.body.style.backgroundImage = "url(img/12-Late-Night.png)";
        

        img.src ="http://8bitters.com/wp-content/uploads/2017/02/JeZ1rj8-e1487952661199.png"
        document.getElementById('turno').backgroundSize = "100% 820%"
    }


    
}

setInterval(relogio, 1000);






