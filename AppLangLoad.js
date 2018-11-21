function getCode(file) {
compile(readFile(file));
}

function init() {
getCode("lib/text.applang");
getCode("lib/batch.applang");
getCode("lib/files.applang");
getCode("lib/node.applang");
}
