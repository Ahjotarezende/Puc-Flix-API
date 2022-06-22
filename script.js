const API_KEY = 'e79cb7ccca852eaaee3733cffa76706c';

function obterImg1() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.poster_path;
    let titulo = jsonResponse2.title;
    
    let poster = document.getElementById('filme1');
    
    poster.src= (`https://image.tmdb.org/t/p/original/${dadosFilme}`);
    poster.alt = titulo;
}

function obterImg2() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.poster_path;
    let titulo = jsonResponse2.title;
    
    let poster = document.getElementById('filme2');
    
    poster.src= (`https://image.tmdb.org/t/p/original/${dadosFilme}`);
    poster.alt = titulo;
}

function obterImg3() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.poster_path;
    let titulo = jsonResponse2.title;
    
    let poster = document.getElementById('filme3');
    
    poster.src= (`https://image.tmdb.org/t/p/original/${dadosFilme}`);
    poster.alt = titulo;
    
}

function obterImg4() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.poster_path;
    let titulo = jsonResponse2.title;
    
    let poster = document.getElementById('filme4');
    
    poster.src= (`https://image.tmdb.org/t/p/original/${dadosFilme}`);
    poster.alt = titulo;
    
}

function exibeFilmesGen () {
    let jsonResponse = JSON.parse(this.responseText);
    let dadosFilme1 = jsonResponse.results[0].id;
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = obterImg1;
    xhr2.open('GET', `https://api.themoviedb.org/3/movie/${dadosFilme1}?api_key=${API_KEY}&language=pt-BR`)
    xhr2.send();
    let dadosFilme2 = jsonResponse.results[1].id;
    let xhr3 = new XMLHttpRequest();
    xhr3.onload = obterImg2;
    xhr3.open('GET', `https://api.themoviedb.org/3/movie/${dadosFilme2}?api_key=${API_KEY}&language=pt-BR`)
    xhr3.send();
    let dadosFilme3 = jsonResponse.results[2].id;
    let xhr4 = new XMLHttpRequest();
    xhr4.onload = obterImg3;
    xhr4.open('GET', `https://api.themoviedb.org/3/movie/${dadosFilme3}?api_key=${API_KEY}&language=pt-BR`)
    xhr4.send();
    let dadosFilme4 = jsonResponse.results[3].id;
    let xhr5 = new XMLHttpRequest();
    xhr5.onload = obterImg4;
    xhr5.open('GET', `https://api.themoviedb.org/3/movie/${dadosFilme4}?api_key=${API_KEY}&language=pt-BR`)
    xhr5.send();
}

function execPesGen () {
    let query = document.getElementById('dropdownMenuLink').value;
    if(query == 0) {
        let xhr = new XMLHttpRequest();
        xhr.onload = exibeFilmesGen;
        xhr.open ('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
        xhr.send ();
    } else {
        let xhr = new XMLHttpRequest();
        xhr.onload = exibeFilmesGen;
        xhr.open ('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${query}&with_watch_monetization_types=flatrate`)
        xhr.send ();
    }    
}

function carregaPesGen() {
    let xhr = new XMLHttpRequest();
    xhr.onload = exibeFilmesGen;
    xhr.open ('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`)
    xhr.send ();
}

window.addEventListener("load", carregaPesGen);
window.addEventListener("load", attCar);

function alteraVideo1() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.results[0].key;
    let video2 = document.getElementById('video1');
    video2.src= (`https://www.youtube.com/embed/${dadosFilme}`);  
}

function alteraVideo2() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.results[0].key;
    let video1 = document.getElementById('video2');
    video1.src= (`https://www.youtube.com/embed/${dadosFilme}`);   
}

function alteraVideo3() {
    let jsonResponse2 = JSON.parse(this.responseText);
    let dadosFilme = jsonResponse2.results[0].key;
    let video3 = document.getElementById('video3');
    video3.src= (`https://www.youtube.com/embed/${dadosFilme}`);   
}

function alteraEscrita1() {
    let jsonResponse = JSON.parse(this.responseText);
    let tituloFilme = jsonResponse.title;
    let sinopseFilme = jsonResponse.overview;
    let avalFilme = jsonResponse.vote_average;
    var dataFilmeErrada = jsonResponse.release_date;
    var dataFormatada = dataFilmeErrada.split('');
    let temp = dataFormatada[8];
    dataFormatada[8] = dataFormatada[9];
    dataFormatada[9] = temp;

    temp = dataFormatada[5];
    dataFormatada[5] = dataFormatada[6];
    dataFormatada[6] = temp;

    temp = dataFormatada[0];
    dataFormatada[0] = dataFormatada[3];
    dataFormatada[3] = temp;

    temp = dataFormatada[1];
    dataFormatada[1] = dataFormatada[2];
    dataFormatada[2] = temp;

    dataFormatada[7] = '/';
    dataFormatada[4] = '/';

    console.log(dataFormatada);

    
    let invertida = dataFormatada.reverse().join("");

    let titulo = document.getElementById('title1');
    let sinopse = document.getElementById('sino1');
    let estreia = document.getElementById('date1');
    let estrela = document.getElementById('aval1');

    avalFilme = avalFilme/2;

    if(avalFilme >= 1) {
        estrela.textContent = "★☆☆☆☆";
        if(avalFilme >= 2) {
           estrela.textContent = "★★☆☆☆";
            if(avalFilme >= 3) {
                estrela.textContent = "★★★☆☆";
                if(avalFilme >= 4) {
                    estrela.textContent = "★★★★☆";
                    if(avalFilme == 5) {
                        estrela.textContent = "★★★★★";
                    }
                }
            }
        }
    } else {
        estrela.textContent = "☆☆☆☆☆";
    }

    titulo.innerHTML = tituloFilme;
    sinopse.innerHTML = sinopseFilme;
    estreia.innerHTML = invertida;
}

function alteraEscrita2() {
    let jsonResponse = JSON.parse(this.responseText);
    let tituloFilme = jsonResponse.title;
    let sinopseFilme = jsonResponse.overview;
    let avalFilme = jsonResponse.vote_average;
    var dataFilmeErrada = jsonResponse.release_date;
    var dataFormatada = dataFilmeErrada.split('');
    let temp = dataFormatada[8];
    dataFormatada[8] = dataFormatada[9];
    dataFormatada[9] = temp;

    temp = dataFormatada[5];
    dataFormatada[5] = dataFormatada[6];
    dataFormatada[6] = temp;

    temp = dataFormatada[0];
    dataFormatada[0] = dataFormatada[3];
    dataFormatada[3] = temp;

    temp = dataFormatada[1];
    dataFormatada[1] = dataFormatada[2];
    dataFormatada[2] = temp;

    dataFormatada[7] = '/';
    dataFormatada[4] = '/';

    console.log(dataFormatada);

    
    let invertida = dataFormatada.reverse().join("");

    let titulo = document.getElementById('title2');
    let sinopse = document.getElementById('sino2');
    let estreia = document.getElementById('date2');
    let estrela = document.getElementById('aval2');

    avalFilme = avalFilme/2;

    if(avalFilme >= 1) {
        estrela.textContent = "★☆☆☆☆";
        if(avalFilme >= 2) {
           estrela.textContent = "★★☆☆☆";
            if(avalFilme >= 3) {
                estrela.textContent = "★★★☆☆";
                if(avalFilme >= 4) {
                    estrela.textContent = "★★★★☆";
                    if(avalFilme == 5) {
                        estrela.textContent = "★★★★★";
                    }
                }
            }
        }
    } else {
        estrela.textContent = "☆☆☆☆☆";
    }

    titulo.innerHTML = tituloFilme;
    sinopse.innerHTML = sinopseFilme;
    estreia.innerHTML = invertida;
}

function alteraEscrita3() {
    let jsonResponse = JSON.parse(this.responseText);
    let tituloFilme = jsonResponse.title;
    let sinopseFilme = jsonResponse.overview;
    let avalFilme = jsonResponse.vote_average;
    var dataFilmeErrada = jsonResponse.release_date;
    var dataFormatada = dataFilmeErrada.split('');
    let temp = dataFormatada[8];
    dataFormatada[8] = dataFormatada[9];
    dataFormatada[9] = temp;

    temp = dataFormatada[5];
    dataFormatada[5] = dataFormatada[6];
    dataFormatada[6] = temp;

    temp = dataFormatada[0];
    dataFormatada[0] = dataFormatada[3];
    dataFormatada[3] = temp;

    temp = dataFormatada[1];
    dataFormatada[1] = dataFormatada[2];
    dataFormatada[2] = temp;

    dataFormatada[7] = '/';
    dataFormatada[4] = '/';

    console.log(dataFormatada);

    
    let invertida = dataFormatada.reverse().join("");

    let titulo = document.getElementById('title3');
    let sinopse = document.getElementById('sino3');
    let estreia = document.getElementById('date3');
    let estrela = document.getElementById('aval3');

    avalFilme = avalFilme/2;

    if(avalFilme >= 1) {
        estrela.textContent = "★☆☆☆☆";
        if(avalFilme >= 2) {
           estrela.textContent = "★★☆☆☆";
            if(avalFilme >= 3) {
                estrela.textContent = "★★★☆☆";
                if(avalFilme >= 4) {
                    estrela.textContent = "★★★★☆";
                    if(avalFilme == 5) {
                        estrela.textContent = "★★★★★";
                    }
                }
            }
        }
    } else {
        estrela.textContent = "☆☆☆☆☆";
    }

    titulo.innerHTML = tituloFilme;
    sinopse.innerHTML = sinopseFilme;
    estreia.innerHTML = invertida;
}

function recebeListaNovos() {
    let jsonResponse = JSON.parse(this.responseText);
    let filme1 = jsonResponse.results[0].id;
    let filme2 = jsonResponse.results[1].id;
    let filme3 = jsonResponse.results[2].id;
    let filme4 = jsonResponse.results[3].id;

    let xhrVideo1 = new XMLHttpRequest();
    xhrVideo1.onload = alteraVideo1;
    xhrVideo1.open ('GET', `https://api.themoviedb.org/3/movie/${filme1}/videos?api_key=${API_KEY}&language=en-US`);
    xhrVideo1.send();

    let xhrDadosFilme1 = new XMLHttpRequest();
    xhrDadosFilme1.onload = alteraEscrita1;
    xhrDadosFilme1.open ('GET', `https://api.themoviedb.org/3/movie/${filme1}?api_key=${API_KEY}&language=pt-BR`);
    xhrDadosFilme1.send();

    let xhrVideo2 = new XMLHttpRequest();
    xhrVideo2.onload = alteraVideo2;
    xhrVideo2.open ('GET', `https://api.themoviedb.org/3/movie/${filme2}/videos?api_key=${API_KEY}&language=en-US`);
    xhrVideo2.send();

    let xhrDadosFilme2 = new XMLHttpRequest();
    xhrDadosFilme2.onload = alteraEscrita2;
    xhrDadosFilme2.open ('GET', `https://api.themoviedb.org/3/movie/${filme2}?api_key=${API_KEY}&language=pt-BR`);
    xhrDadosFilme2.send();

    let xhrVideo3 = new XMLHttpRequest();
    xhrVideo3.onload = alteraVideo3;
    xhrVideo3.open ('GET', `https://api.themoviedb.org/3/movie/${filme3}/videos?api_key=${API_KEY}&language=en-US`);
    xhrVideo3.send();

    let xhrDadosFilme3 = new XMLHttpRequest();
    xhrDadosFilme3.onload = alteraEscrita3;
    xhrDadosFilme3.open ('GET', `https://api.themoviedb.org/3/movie/${filme3}?api_key=${API_KEY}&language=pt-BR`);
    xhrDadosFilme3.send();

    let xhrVideo4 = new XMLHttpRequest();
    xhrVideo4.onload = alteraVideo4;
    xhrVideo4.open ('GET', `https://api.themoviedb.org/3/movie/${filme4}/videos?api_key=${API_KEY}&language=en-US`);
    xhrVideo4.send();

    let xhrDadosFilme4 = new XMLHttpRequest();
    xhrDadosFilme4.onload = alteraEscrita4;
    xhrDadosFilme4.open ('GET', `https://api.themoviedb.org/3/movie/${filme4}?api_key=${API_KEY}&language=pt-BR`);
    xhrDadosFilme4.send();

}

function attCar() {
    let xhrNew = new XMLHttpRequest();
    xhrNew.onload = recebeListaNovos;
    xhrNew.open ('GET', `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    xhrNew.send();
}