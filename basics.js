function batch(code) {
WshShell = new ActiveXObject("WScript.Shell");
WshShell.Run("c:/windows/system32/cmd.exe /c "+code, 1, false);
}

function node(code) {
batch("node "+code);
}

function chrome(code) {
batch('start "C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" '+code);
}

function ie(code) {
batch('start "C:\Program Files\Internet Explorer\iexplore.exe" '+code);
}

function openFile(code) {
WshShell = new ActiveXObject("WScript.Shell");
WshShell.Run(code, 1, false);
}

