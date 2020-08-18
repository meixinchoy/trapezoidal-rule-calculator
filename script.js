let n, h, a, b, ans = [];
function submit() {
      document.getElementById("d").placeholder="Math.sqrt(1+Math.pow(x,2))";
      console.clear();
    n = parseFloat(document.getElementById("n").value, 10);
    a = parseFloat(document.getElementById("a").value, 10);
    b = parseFloat(document.getElementById("b").value, 10);
    let fx = document.getElementById("d").value;
    h = (b - a) / n; //compute step size

    let j = 0, sum = 0;
    for (let i = a; j <= n; j++, i += h) {
        let x = i; //assign x0, x1, x2 etc
        try {
            if(n==0) fx="xx";
            i=Math.round(i * 10000) / 10000;
            ans[j] = Math.round(parseFloat(eval(fx), 10) * 1000000) / 1000000;  //calculate f(x)
            sum += Math.abs(ans[j]); //add up all of the |f(x)|
            console.log("f(" + i + ") = " + ans[j]);
        }
        catch (e) {
          document.getElementById("d").value="";
          document.getElementById("d").placeholder='Error';
          document.getElementById("n").value="";
          document.getElementById("a").value="";
          document.getElementById("b").value="";
          console.clear();
          document.getElementById("outputContainer").style.display="none";
          console.log("Error");
          return 0
        }
    }
    sum -= Math.abs(ans[0]) * 0.5; //subtract |f(0)|/2 
    sum -= Math.abs(ans[j - 1]) * 0.5; //subtract |f(n)|/2
    sum *= h; //multiply with step size
    sum = Math.abs(sum); //take absolute value

    document.getElementById("outputContainer").style.display="flex";
    document.getElementById('h').innerHTML = Math.round(h * 10000) / 10000;
    document.getElementById('x0').innerHTML = a;
    document.getElementById('f0').innerHTML = ans[0];
    document.getElementById('x1').innerHTML = Math.round((a + h) * 10000) / 10000;
    document.getElementById('f1').innerHTML = ans[1];
    document.getElementById('x2').innerHTML = Math.round((a + 2 * h) * 10000) / 10000;
    document.getElementById('f2').innerHTML = ans[2];
    document.getElementById('xn').innerHTML = b;
    document.getElementById('fn').innerHTML = ans[j - 1];
    document.getElementById("area").innerHTML = Math.round(sum * 1000000) / 1000000;

    document.getElementById("ansTextn").style.display = "inline";
    document.getElementById("fansTextn").style.display = "inline";
    document.getElementById("ansText...").style.display = "inline";
    document.getElementById("fansText...").style.display = "inline";
    document.getElementById("fansText2").style.display = "inline";
    document.getElementById("ansText2").style.display = "inline";
    if (n < 4) {
        document.getElementById("ansText...").style.display = "none";
        document.getElementById("fansText...").style.display = "none";
        if (n < 3) {
            document.getElementById("ansTextn").style.display = "none";
            document.getElementById("fansTextn").style.display = "none";
        }
        if (n == 1) {
            document.getElementById("fansText2").style.display = "none";
            document.getElementById("ansText2").style.display = "none";
        }
    }
}

