input = document.getElementById('optioninput#1')
options = document.getElementById('options#1')

input.onfocus = function () {
    options.style.display = 'block';
};

for (let option of options.options) {
    option.onclick = function () {
        input.value = option.value;
        options.style.display = 'none';
    }
};

input.oninput = function() {
    var text = input.value.toUpperCase();
    for (let option of options.options) {
        if (option.value.toUpperCase().indexOf(text) > -1) {
                option.style.display = "block";
        } else{
            option.style.display = "none";
        }
    };
}
  