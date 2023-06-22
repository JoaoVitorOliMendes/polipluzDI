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

function nextPage1() {
    document.getElementById("profile_img1").onclick = location.href = "./info_profiles/info_profile1.html"
}


function nextPage2() {
    document.getElementById("profile_img2").onclick = location.href = "./info_profiles/info_profile2.html"
}


function nextPage3() {
    document.getElementById("profile_img3").onclick = location.href = "./info_profiles/info_profile3.html"
}