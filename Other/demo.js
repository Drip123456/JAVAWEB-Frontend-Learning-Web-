var i = 1;
while (i <= 9) {
    var j = 1;
    while (j <= i) {
        document.write(i + "*" + j + " = " + i * j + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;")
        j++;
    }
    document.write("<hr />");
    i++;
}
document.write("<br/>")
document.write("<br/>")
document.write("<br/>")


for (var i = 1; i <= 9; i++) {
    for (var j = 1; j <= i; j++) {
        document.write(i + "*" + j + " = " + i * j + "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
    }
    document.write("<hr />");

}