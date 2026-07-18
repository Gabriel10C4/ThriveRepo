document.addEventListener("DOMContentLoaded", function(){
/*------------------------- general-------------------------*/
    const btnBack = document.querySelectorAll(".btn-Back");

    btnBack.forEach(function(boton){

            boton.addEventListener("click", function(){
                window.history.back();
            });
        });
    /*------------------------- index.html-------------------------*/
    /*botones de navegación*/
    const btnC = document.getElementById("btnC");
    if(btnC){
        btnC.onclick = function(){
            window.location.href = "views/auth.html";
        };
    }

    
/*-------------------------login.html-------------------------*/
    /*botones de navegación*/
    const btnRC = document.getElementById("btnRC");
    if(btnRC){
        btnRC.onclick = function(){
            window.location.href = "clientReg.html";
        };
    }
    const btnRE = document.getElementById("btnRE");
    if(btnRE){
        btnRE.onclick = function (){
            window.location.href = "empReg.html";
        };
    }
/*-------------------------empReg.html-------------------------*/
    const crEmp = document.getElementById("crEmp");
    if(crEmp){
        crEmp.onclick = function(){
            window.location.href = "empExtra.html";
        };
    }

});
