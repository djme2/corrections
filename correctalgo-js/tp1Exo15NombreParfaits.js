let n;
let s = 0;
for (let i = 1; i < 1000; i++) {
    s = 0;
    n = parseInt(i / 2);
    for (let j = 1; j <= n; j++) {
        if ((i % j) == 0) {
            s += j;
        }
    }
    if (s == i) {
        document.write(i + " est parfait.<br>");
    }
}