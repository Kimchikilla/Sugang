// 주민등록번호 체크에 사용되는 자바스크립트 함수 함수 두가지.
function Check_Num(tocheck_num) {
    var isnum = true;
    if ((tocheck_num == null) || (tocheck_num == "")) {
        isnum = false;
        return isnum;
    }
    for (var j = 0; j < tocheck_num.length; j++) {
        if ((tocheck_num.substring(j, j + 1) != "0") && (tocheck_num.substring(j, j + 1) != "1") && (tocheck_num.substring(j, j + 1) != "2") && (tocheck_num.substring(j, j + 1) != "3") && (tocheck_num.substring(j, j + 1) != "4") && (tocheck_num.substring(j, j + 1) != "5")
                && (tocheck_num.substring(j, j + 1) != "6") && (tocheck_num.substring(j, j + 1) != "7") && (tocheck_num.substring(j, j + 1) != "8") && (tocheck_num.substring(j, j + 1) != "9")) {
            isnum = false;
        }
    }
    return isnum;
}

function check_regnum(regno1, regno2) {

    // 주민등록번호 1 체크
    if (regno1 == "") {
        alert("주민등록번호를 입력하십시오.");
        return false;
    } else {
        if (regno1.length != 6) {
            alert("주민등록번호를 입력하십시오.\n 6자리의 숫자입니다.");
            return false;
        } else {
            thisfilednum = Check_Num(regno1);
            if (!thisfilednum) {
                alert("주민등록번호는 숫자만 가능합니다.");
                return false;
            }
        }
    }

    // 주민등록번호 2 체크
    if (regno2 == "") {
        alert("주민등록번호 7자리(뒷자리)를 입력하십시오.");
        return false;
    } else {
        if (regno2.length != 7) {
            alert("주민등록번호를 입력하십시오.\n 7자리의 숫자입니다.");
            return false;
        } else {
            thisfilednum = Check_Num(regno2);
            if (!thisfilednum) {
                alert("주민등록번호는 숫자만 가능합니다.");
                return false;
            }
        }
    }

    // 주민등록번호 체크
    var regno = regno1 + regno2;
    if (regno1 != "" && regno2 != "") {
        if (regno.charAt(6) == 1 || regno.charAt(6) == 2) {
            if (regno.charAt(12) == ((11 - ((regno.charAt(0) * 2 + regno.charAt(1) * 3 + regno.charAt(2) * 4 + regno.charAt(3) * 5 + regno.charAt(4) * 6 + regno.charAt(5) * 7 + regno.charAt(6) * 8 + regno.charAt(7) * 9 + regno.charAt(8) * 2 + regno.charAt(9) * 3 + regno.charAt(10) * 4 + regno
                    .charAt(11) * 5) % 11))) % 10) {
                return true;
            } else {
                alert("주민등록번호가 잘못되었습니다.");
                return false;
            }
        }
        alert("주민등록번호가 잘못되었습니다.");
        return false;
    }

    return true;
}
// 멀티 페이지 체크
function checkMultiWindow() {
    if (parent.location.search != "") {
        location.replace("about:blank");
        self.close();
    }
}

// 키업력 방지
function CheckKeyPress() {
    //키입력
    ekey = event.keyCode;

    //리턴
    if (ekey == 116) {
        alert("이 특수키는 사용할수 없습니다.");
        event.keyCode = 0;
        return false;
    }
}
// 로그아웃
function Logout() {
    parent.location.href = "/servlet/Fip?action=Logout";
}

window.history.forward(1);

//F5키 입력방지
document.onkeydown = CheckKeyPress;
document.onkeyup = CheckKeyPress;
// 멀티창 방지
checkMultiWindow();