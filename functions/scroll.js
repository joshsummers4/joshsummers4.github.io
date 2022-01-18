function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.padding = "3px";
        document.getElementById("navbar").style.fontSize = "16px";
    } else {
        document.getElementById("navbar").style.padding= "15px 0px";
        document.getElementById("navbar").style.fontSize = "22px";
    }
}