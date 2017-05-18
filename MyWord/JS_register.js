/**
 * Created by 懿懿 on 2017/5/16.
 */

window.onload = function () {
    var inputs = document.getElementsByClassName("green");
    for(var i = 0; i < inputs.length;i++){
        inputs[i].addEventListener("focus",function () {
            this.style.border= "1px solid #00b38a";
        });
        inputs[i].addEventListener("blur",function () {
            this.style.border = "none";
        });
    }
    
    var tabPhone = document.getElementById("tab1");
    var tabEmail = document.getElementById("tab2");
    var li_phone = document.getElementById("li_phone");
    var li_email = document.getElementById("li_email")
    tabPhone.addEventListener("click",function () {
        li_phone.style.display = "block";
        li_email.style.display = "none";
        tabEmail.style.color = "#666666";
        tabPhone.style.color = "#00b38a";
    });
    tabEmail.addEventListener("click",function () {
        li_phone.style.display = "none";
        li_email.style.display = "block";
        tabEmail.style.color = "#00b38a";
        tabPhone.style.color = "#666666";
    });
    
    function changeTab_Phone() {
        document.getElementById("tab1").style.display="block";
        document.getElementById("tab2").style.display="none";
    }
    function changeTab_Email() {
        document.getElementById("tab1").style.display="none";
        document.getElementById("tab2").style.display="block";
    }

    var changeBorder_phone1 = document.getElementById("btn_border_1");
    var changeBorder_phone2 = document.getElementById("btn_border_2");
    var changeBorder_email1 = document.getElementById("btn_border_3");
    var changeBorder_email2 = document.getElementById("btn_border_4");
    changeBorder_phone1.addEventListener("click",function () {
        changeBorder_phone1.style.border="1px solid #00b38a";
        changeBorder_phone2.style.border="1px solid #cccccc";
    });
    changeBorder_phone2.addEventListener("click",function () {
        changeBorder_phone1.style.border="1px solid #cccccc";
        changeBorder_phone2.style.border="1px solid #00b38a";
    });
    changeBorder_email1.addEventListener("click",function () {
        changeBorder_email1.style.border="1px solid #00b38a";
        changeBorder_email2.style.border="1px solid #cccccc";
    });
    changeBorder_email2.addEventListener("click",function () {
        changeBorder_email1.style.border="1px solid #cccccc";
        changeBorder_email2.style.border="1px solid #00b38a";
    });
};

function changeBorder_1() {
    document.getElementById("btn_border_1").style.border="1px solid #00b38a";
    document.getElementById("btn_border_2").style.border="1px solid #cccccc";
}
function changeBorder_2() {
    document.getElementById("btn_border_1").style.border="1px solid #cccccc";
    document.getElementById("btn_border_2").style.border="1px solid #00b38a";
}
function changeBorder_3() {
    document.getElementById("btn_border_3").style.border="1px solid #00b38a";
    document.getElementById("btn_border_4").style.border="1px solid #cccccc";
}
function changeBorder_4() {
    document.getElementById("btn_border_3").style.border="1px solid #cccccc";
    document.getElementById("btn_border_4").style.border="1px solid #00b38a";
}



