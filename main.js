function isNumber(event) {
    if (event.keyCode < 48 || event.keyCode > 57) {
        return false;
    }
    return true;
}

function isNumber_(event) {
    if ((event.keyCode >= 48 && event.keyCode <= 57) || event.keyCode == 47) {
        return true;
    }
    return false;
}

function yearcheck (date) {
    var check = /13[1|9]0\/[0-1][1-9]\/[0-1][1-9]/;
    if (!check.test(date)) {
        return false;
    }
    return true;
}

function isall(event) {
    if (event.keyCode < 32 || event.keyCode > 126) {
        return false;
    }
    return true;
}

function isPassword(event) {
    if (/^[a-zA-Z0-9_+!#$*=]*$/.test(event))
  {
    return true;
  }
    return false;
}

function isPersian(event){
    var p = /^[\u0600-\u06FF\s]*$/;

    if (!p.test(event)) {
        return false;
    }
    return true;
}

function isEnglish(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90 || event.keyCode >= 97 && event.keyCode <= 122) {
        return true;
    }
    return false;
}

function ValidateEmail(mail) {
 if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(mail))
  {
    return true;
  }
    return false;
}


function validation() {
    var p = document.getElementsByName("uiPronoun")[0]
    var pro_noun = p.options[p.selectedIndex].value;

    var esm = document.getElementsByName("uiName")[0].value;
    var esm_khan = document.getElementsByName("uiSurname")[0].value;

    var name = document.getElementsByName("uiName_EN")[0].value;
    var surname = document.getElementsByName("uiSurname_EN")[0].value;

    var phone = document.getElementsByName("uiPhone")[0].value;
    var email = document.getElementsByName("uiEmail")[0].value;
    var selectedstatus= null;
    for (var i=0; i < document.getElementsByName("uiM_status").length; i++) {
        if (document.getElementsByName("uiM_status")[i].checked) {
            selectedstatus = document.getElementsByName("uiM_status")[i].value;
        }
    }
    var ID_num = document.getElementsByName("uiID")[0].value;
    var B_date = document.getElementsByName("uiB_date")[0].value;
    var password = document.getElementsByName("uiPassword")[0].value;
    var rep_password = document.getElementsByName("uiRep_password")[0].value;
    var address = document.getElementsByName("uiAddress")[0].value;

    var selectedHobbies= [];
    for (var i=0; i < document.getElementsByName("uiFav").length; i++) {
        if (document.getElementsByName("uiFav")[i].checked) {
            selectedHobbies.push(document.getElementsByName("uiFav")[i].value);
        }
    }

    var submit = document.getElementsByName("uiSubmit")[0].checked;


    var errorMessage = "";
    if (pro_noun == -1)
        errorMessage += " عنوان خود را انتخاب نمایید <br />"

    if (esm.length <3 || esm.length >50)
        errorMessage += "نام کاربر:تعداد کاراکتر ها باید بین 3 تا 50 باشد <br/>"
    else if (!isPersian(esm)) {
        errorMessage += "نام کاربر: فقط از کاراکتر های فارسی استفاده نمایید <br />"
    }
    
    if (esm_khan.length <3 || esm_khan.length >100)
        errorMessage += "نام خانوادگی کاربر:تعداد کاراکتر ها باید بین 3 تا 100 باشد <br/>"
    else if (!isPersian(esm_khan)) {
        errorMessage += "نام خانوادگی کاربر: فقط از کاراکتر های فارسی استفاده نمایید <br />"
    }

    if (name.length >150)
        errorMessage += "name: تعداد کاراکتر ها باید کمتر از 150 باشد <br/>"
    if (surname.length >150)
        errorMessage += "surname: تعداد کاراکتر ها باید کمتر از 150 باشد <br/>"

    if (email == "") {
        errorMessage += "ایمیل خود را وارد نمایید<br />"
    }
    else if (email.length >64){
        errorMessage += "ایمیل نا معتبر<br />"
    }
    else if (!ValidateEmail(email)){
        errorMessage += "ایمیل نا معتبر<br />"
    }

    if (phone == "") {
        errorMessage += "شماره موبایل خود را وارد نمایید<br />"
    }
    else if (phone.length != 11) {
        errorMessage += "تلفن: تعداد رقم نا معتبر<br />"
    }

    if (ID_num.length != 10) {
        errorMessage += "شماره ملی  : تعداد رقم نا معتبر<br />"
    }
    if (!isPersian(address)) {
        errorMessage += "آدرس: فقط از کاراکتر های فارسی استفاده نمایید <br />"
    }
    else if (address.length >250) {
        errorMessage += "آدرس طولانی می باشد<br />"
    }

    if (selectedstatus == null) {
        errorMessage += "وضعیت تاهل خود را مشخص نمایید<br />"
    }
    if (password.length <8 || password.length >24){
        errorMessage += "تعداد کاراکتر نامعتبر <br />"
    }
    else if (!isPassword(password)) {
        errorMessage += "پسورد نامعتبر <br />"
    }
    if (rep_password != password) {
        errorMessage += "تکرار پسورد نا معتبر<br />"
    }
    if (B_date != "") {
        if (!yearcheck(B_date)) {
            errorMessage += "تاریخ نامعتبر<br />"
        }
    }

    if (errorMessage != "") {
        document.getElementById("uiMessage").innerHTML = errorMessage;
        return false;
    }
    return true;
}