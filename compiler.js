function codeSplit(txt,split) {
var parens = 0;
var s = new Array();
s.push("");
for(var i=0; i<txt.length; i++) {
if(txt[i]=="\`") {
i++;
s[s.length-1] += txt[i];
}else if(parens == 0) {
if(txt[i] == split) {
s.push("");
} else {
s[s.length-1] += txt[i];
}
}

}
return s;
}

var classes = new Object();
var params = new Array();
var f = new Object();
function read(code) {
var l = codeSplit(code," ");
for(var z=0; z<l.length; z++) {
if(l[z][0]=="$") {
l[z] = l[z].slice(1);
}

}
if(l[0] == "Class") {
var one = l[1];
l.shift();
l.shift();
classes[one] = Function(l.join(" "));
return "undefined";
}

if(l[0] == "Function") {
var one = l[1];
l.shift();
l.shift();
f[one] = l.join(" ");
return "undefined";
}
if(l[0] in f) {
var one = l[0];
l.shift();
params = l;
return read(f[one]);
}

if(l[0] in classes) {
var one = l[0];
l.shift();
params = l;
return classes[one]();
}

return "undefined";
}

function compile(code) {
var lines = codeSplit(code,";");
for(var ii=0; ii<lines.length; ii++) {
var l = codeSplit(lines[ii],"<");
if(l.length>1) {
window[l[0]] = read(l[1]);
} else {
read(lines[ii]);
}
}
}
