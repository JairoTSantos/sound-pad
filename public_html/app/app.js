

var kit = 0;
var type = 'mp3';

jQuery(document).ready(function ($) {

    btn_sets();

    btn_pads();

    $("#btn-reset").click(function () {
        $("#contador").empty().text('Parado');
        $("#text_duracao").text('Duração: 00:00');
        carregarKit(0);
        $("#text_tom").html('');
        $('#player')[0].pause();
    });

    $("#btn-stop").click(function () {


        $('#player')[0].pause();

        audio.addEventListener("pause", function (_event) {
            $("#contador").text('Pauesa');
        });


    });








});



function iniciar(key, text) {
    $('#player')[0].pause();
    if (kit === 0) {
        alert('Escolha um set');
    } else {
        $('#player').attr('src', 'audio/' + kit + '/' + key + '.' + type);
        $('#player')[0].play();
        $("#text_tom").html('<strong>' + text + '</strong>');
        audio = $('#player')[0];
        audio.addEventListener("loadedmetadata", function (_event) {
            duration = audio.duration;
            $("#text_duracao").text('Duração: ' + formatSecondsAsTime(duration));
        });
        audio.addEventListener('timeupdate', (event) => {
            $("#contador").text('Reproduzindo: | ' + formatSecondsAsTime(audio.currentTime));
        }, false);

    }
}




function carregarKit(pasta) {
    $("#contador").text('Parado');
    $("#text_tom").text('');
    kit = pasta;
    if (kit === 0) {
        $("#text_kit").text('');
    } else {
        $("#text_kit").text(' | Set 0' + kit + ' carregado');
    }
}


function btn_sets() {
    $("#list_set1").click(function () {
        carregarKit(1);
    });

    $("#list_set2").click(function () {
        carregarKit(2);
    });

    $("#list_set3").click(function () {
        carregarKit(3);
    });

    $("#list_set4").click(function () {
        carregarKit(4);
    });
}


function btn_pads() {
    $("#c").click(function () {
        iniciar('c', 'C');
    });

    $("#c_plus").click(function () {
        iniciar('c_plus', 'C#');
    });

    $("#d").click(function () {
        iniciar('d', 'D');
    });

    $("#d_plus").click(function () {
        iniciar('d_plus', 'D#');
    });

    $("#e").click(function () {
        iniciar('e', 'E');
    });

    $("#f").click(function () {
        iniciar('f', 'F');
    });

    $("#f_plus").click(function () {
        iniciar('f_plus', 'F#');
    });

    $("#g").click(function () {
        iniciar('g', 'G');
    });

    $("#g_plus").click(function () {
        iniciar('g_plus', 'G#');
    });

    $("#a").click(function () {
        iniciar('a', 'A');
    });

    $("#a_plus").click(function () {
        iniciar('a_plus', 'A#');
    });


    $("#b").click(function () {
        iniciar('b', 'B#');
    });
}

function formatSecondsAsTime(secs, format) {
    var hr = Math.floor(secs / 3600);
    var min = Math.floor((secs - (hr * 3600)) / 60);
    var sec = Math.floor(secs - (hr * 3600) - (min * 60));

    if (min < 10) {
        min = "0" + min;
    }
    if (sec < 10) {
        sec = "0" + sec;
    }

    return min + ':' + sec;
}