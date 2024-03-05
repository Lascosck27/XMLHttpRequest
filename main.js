var xmlhttp = getXmlHttpRequest();

function getXmlHttpRequest() { //construtor padrão para o objeto XMLHttpRequest
    if (window.XMLHttpRequest) {
        return new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
    }
}


function alteraURL(url) { //essa função recebe uma URL como parâmetro e faz a requisição assíncrona para essa URL. É chamada pelo evento onclick.
    document.getElementById("carregando").innerHTML = "<img src='carregando.gif'>"; //insere um gif de loading
    xmlhttp.open("POST", url, true); //configura a requisição com o método POST, a URL e define que é uma requisição assíncrona
    xmlhttp.onreadystatechange = function(){ //Define uma função de retorno de chamada que será invocada sempre que o estado da requisição mudar.
        if (xmlhttp.readyState == 4) { //Se o estado for 4, ou seja, completa...
            document.getElementById("urlContent").innerHTML = xmlhttp.responseText; //Insere o conteúdo retornado pela requisição é inserido no urlContent.
            document.getElementById("carregando").innerHTML = ""; //remove o gif de loading
        }
    }
    setTimeout(() => {xmlhttp.send(null);}, 1000); //envia a requisição
}
