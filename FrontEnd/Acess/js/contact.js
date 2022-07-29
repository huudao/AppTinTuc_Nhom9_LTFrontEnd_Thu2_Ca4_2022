function validateform() {
    var name = document.form1.name.value;
    var email = document.form1.email.value;
    var phone = document.form1.phone.value;
    var subject = document.form1.subject.value;
    var mess= document.form1.mess.value;
    
    var atposition = email.indexOf("@");
    var dotposition = email.lastIndexOf(".");
    
    if (name == null || name == ""||email==""||phone==""||subject==""||mess=="") {
    alert("Không được để trống thông tin");
    return false;
    }
    else if (atposition < 1 || dotposition < (atposition + 2)
                || (dotposition + 2) >= x.length) {
            alert("Please enter a valid e-mail address.");
            return false;
        }
    }
    