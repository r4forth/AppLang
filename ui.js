function Button(text,id) {
var b = document.createElement("BUTTON");
b.setAttribute("id",id);
b.setAttribute("type","button");
b.innerHTML=text;
document.body.appendChild(b);
}

function Paragraph(text,id) {
var b = document.createElement("P");
b.setAttribute("id",id);
b.innerHTML=text;
document.body.appendChild(b);
}

function Heading(text,id,size) {
var b = document.createElement("H"+style);
b.setAttribute("id",id);
b.innerHTML=text;
document.body.appendChild(b);
}

function addHTML(code) {
document.body.innerHTML+=code;
}
