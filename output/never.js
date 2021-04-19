"use strict";
function showError(msg) {
    throw new Error(msg);
}
'Algo deu errado';
//showError('Algo deu errado')
let n = 0;
function loopInfinito() {
    while (true) {
        console.log(n++);
    }
}
loopInfinito();
//# sourceMappingURL=never.js.map