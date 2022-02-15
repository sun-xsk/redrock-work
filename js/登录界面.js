let chacha = document.querySelector("#del");
let jiemian = document.querySelector("#jiemian");
chacha.addEventListener("click", () => {
    jiemian.style.display = "none";
})
let zh = document.querySelector("#name")
let mm = document.querySelector("#password")
let btn = document.querySelector("#dengLu")
function a() {
    fetch(`http://redrock.udday.cn:2022/login/cellphone?phone=${zh.value}&password=${mm.value}`, {
        method: 'POST',
    }).then((response) => {
        return response.json()
    }).then((response) => {
        if (response.code === 200) {
            alert("登录成功")
            console.log(response)
            localStorage.setItem('token', JSON.stringify(response))
            localStorage.setItem('avatarUrl', response.profile.avatarUrl);
            localStorage.setItem('nickname',response.profile.nickname)
        } else {
            alert("账户信息有误")
        }
    })
};

btn.addEventListener('click', function () {
    a();
})
