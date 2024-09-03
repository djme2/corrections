let d;
let c;
let u;
for (let i = 1; i < 1000; i++) {
    c = parseInt(i / 100);
    d = parseInt((i % 100) / 10);
    u = parseInt(i % 10);
    if (((c*c*c) + (d*d*d) + (u*u*u)) == i) {
        document.write(i + " est cubique.<br>");
    }
}