(function updateYear() {
    var now = new Date();
    var year = now.getFullYear();
    if (year < 2029) {
        document.getElementById('year').innerHTML = year;
    } 
})();