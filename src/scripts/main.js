AOS.init();

const dataEvento = new Date("Sep 12, 2023 19:00:00");
const timeStampDoEvento = dataEvento.getTime();

const contaHoras = setInterval(function(){
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distancia = timeStampDoEvento - timeStampAtual;

    const diasEmMS = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;

    const diasAteOEvento = Math.floor(distancia / diasEmMS );
    const horasAteOEvento = Math.floor((distancia % diasEmMS) / horaEmMs);
    const minutosAteOEvento = Math.floor((distancia % horaEmMs) / minutoEmMs);
    const segundosAteOEvento = Math.floor((distancia % minutoEmMs) / 1000)


    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${horasAteOEvento}h ${minutosAteOEvento}m ${segundosAteOEvento}s`

    if(distancia < 0) {
        clearInterval(contaHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }
}, 1000);

