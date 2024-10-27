

function receber(num){
    let numeros =document.getElementById("dados").innerHTML;
    document.getElementById("dados").innerHTML=numeros + num;

}

function limpar(){
 document.getElementById('dados').innerHTML="";
}
function apagar(){
    let dado = document.getElementById('dados').innerHTML;
    document.getElementById('dados').innerHTML=dado.substring(0, dado.length -1);
}

function resultado(){
    let dado = document.getElementById('dados').innerHTML;
    if(dado){
        
        document.getElementById('dados').innerHTML=eval(dado);
    }else{
        let msg = "Sem dados para calcular!"
        document.getElementById('dados'). innerHTML= msg;
    }

}
function quadrado(){
    let qdr = document.getElementById('dados').innerHTML;
    document.getElementById('dados').innerHTML= qdr * qdr;
}




