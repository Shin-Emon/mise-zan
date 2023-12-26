document.getElementById("calcBtn").onclick = "calculate()";

function calculate() {
    var a = parseInt(document.getElementById("a").value);
    var b = parseInt(document.getElementById("b").value);

    if (a >= 10 || b >= 10) {
        document.getElementById("answer").innerHTML = "エラー：一桁以外は計算できません";
        return;
    }

    if (a < 0 || b < 0) {
        document.getElementById("answer").innerHTML = "エラー：負の整数の見せ算は定義されていません";
        return;
    }

    var answer;
    var process = document.getElementById("process");

    if (a == b) {
        process.innerHTML = "自分と同じ格好の人と鉢合わせて<strong>恥ずかしくなった</strong>。<br>気まずくなりどっちも逃げて何も残らないから眼は0。";
        answer = 0;
    } else if (a > b) {
        process.innerHTML = b + "が自分より大きい" + a + "を見たら<br><strong>「怖い！！」</strong>ってなって逃げたから、そこに残った" + a + "が眼。";
        answer = a;
    } else if (a < b) {
        process.innerHTML = a + "が自分より大きい" + b + "を見たら<br><strong>「怖い！！」</strong>ってなって逃げたから、そこに残った" + b + "が眼。";
        answer = b;
    }

    if ((a == 2 && b == 5) || (a == 5 && b == 2)) {
        process.innerHTML = "生き別れの兄弟と勘違いして近寄るが<br><strong>全然違う！！</strong><br>驚いてひとりが携帯を落とし、それが小数点となる。<br>2と5は1になり、携帯はその間に落ちるため、眼は1.1。";
        answer = 1.1;
    } else if ((a == 6 && b == 9) || (a == 9 && b == 6)) {
        process.innerHTML = "生き別れの兄弟と勘違いして近寄ってしまうため、6と9が1になって眼は11。";
        answer = 11;
    }

    document.getElementById("answer").innerHTML = answer;
}

calculate();