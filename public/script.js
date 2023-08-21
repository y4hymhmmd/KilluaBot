document.addEventListener("contextmenu", function (e) {
    e.preventDefault();
    for (let i = 1; i <= Infinity; i++) {
        console.log("Error");
    }
});

document.addEventListener("selectstart", function (e) {
    e.preventDefault();
});
