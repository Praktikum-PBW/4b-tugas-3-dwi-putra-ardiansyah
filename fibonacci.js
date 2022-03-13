var var1 = 0;
var var2 = 1;
var var3 = 0;

var num = prompt ("Enter the limit untuk melanjutkan angka Fibonnacci", 0);

document.write (`Fibobonacci Series : <br/>`);
document.write (var1+"<br/>");
document.write (var2+"<br/>");

for(var i = 0; i< num; i++)

{ 
    var1 = var2;
    var2 = var3;
    var3 = var1 + var2;

    document.write(var3+"<br/>");
}


