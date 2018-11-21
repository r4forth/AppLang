function readFile(file) {
var fso = new AcitveXObject("Scripting.FileSystemObject");
var txtFile = fso.OpenTextFile(file, 1, false, 0);
var fText = txtFile.ReadAll();
txtFile.Close();
return fText;
}
