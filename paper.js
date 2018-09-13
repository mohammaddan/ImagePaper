// dv1=document.getElementById("dv1");
// dv2=document.getElementById("dv2");
// dv3=document.getElementById("dv3");
// dv4=document.getElementById("dv4");
// dv5=document.getElementById("dv5");

function paper(deg1) {
    let d, d1, x, z;
    x = 0;
    z = 0;
    // let ss="";
    for (let i = 1; i < 6; i++) {
        let deg;
        if (i === 1 || i === 6)
            deg = 0;
        else
            // deg = (i/6) * deg1;
            deg = ((i % 2) * 2 - 1) * deg1;
        let radian = deg * Math.PI / 180;
        let s = "dv" + i;
        d = document.getElementById(s);
        d1 = document.getElementById(s + i);
        let st;
        st = "transform: translate3d(" + x + "px,0," + z + "px)" +
            " rotateY(" + deg + "deg) " +
            ";" +
            "transform-origin:" + 0 + "px;";
        d.style = st;
        // d1.style = st;
        if (deg1 === 0) {
            st+="opacity:0;";
        }else{
            st+="opacity:0.65;";
        }
        d1.style=st;
        x += d.offsetWidth * Math.cos(radian);
        z -= d.offsetWidth * Math.sin(radian);
    }
    // document.getElementById("print").innerHTML=ss;
}
