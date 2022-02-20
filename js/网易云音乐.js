// 轮播图  
// 1.获取元素
let timer = setInterval(next, 3000);
let lis = document.querySelectorAll('.lbt li');
let btns = new Array();
let aft = document.getElementById('aft');
let pre = document.getElementById('pre');
// console.log(lis)
for (let i = 0; i < lis.length; i++) {
    lis[i].addEventListener('mouseenter', function () {
        clearInterval(timer);
        pre.style.display = 'block';
        aft.style.display = 'block';
    })

    lis[i].addEventListener('mouseleave', function () {
        timer = setInterval(next, 3000);
        pre.style.display = 'none';
        aft.style.display = 'none';
    })
}
let i1 = document.getElementById('i1');
let i2 = document.getElementById('i2');
let i3 = document.getElementById('i3');
let i4 = document.getElementById('i4');
let i5 = document.getElementById('i5');
let i6 = document.getElementById('i6');
let i7 = document.getElementById('i7');
let i8 = document.getElementById('i8');
let imgs = new Array();
imgs.push(i1, i2, i3, i4, i5, i6, i7, i8);
// console.log(imgs)
let lst = imgs.length - 1;
// console.log(imgs)
// 2.构图
imgs[lst].style.transform = 'translateX(250px) translateZ(40px) scale(0.8)';
imgs[lst - 1].style.zIndex = 100;
imgs[lst - 2].style.transform = 'translateX(-250px) translateZ(40px) scale(0.8)';
// 3.下一页函数
function next() {
    let num1 = imgs[lst];
    imgs.pop();
    imgs.unshift(num1);
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.zIndex = 1;
        imgs[i].style.transform = 'scale(0.8)';

    }
    imgs[lst - 1].style.zIndex = 100;
    imgs[lst - 1].style.transform = 'scale(1)';
    imgs[lst].style.transform = 'scale(0.8)';
    imgs[lst - 2].style.transform = 'translateX(-250px) translateZ(40px) scale(0.8)';
    imgs[lst].style.transform = 'translateX(250px) translateZ(40px) scale(0.8)';
    cag();
}
//4.上一页函数
function prev() {
    let num2 = imgs[0];
    imgs.shift();
    imgs.push(num2);
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].style.zIndex = 1;
        imgs[i].style.transform = 'scale(0.8)';
    }
    imgs[lst - 1].style.zIndex = 100;
    imgs[lst - 1].style.transform = 'scale(1)';
    imgs[0].style.transform = 'scale(0.8)';
    imgs[lst - 2].style.transform = 'translateX(-250px) translateZ(40px) scale(0.8)';
    imgs[lst].style.transform = 'translateX(250px) translateZ(40px) scale(0.8)';
    cag();
}

// 5.上一页下一页点击事件
aft.addEventListener('mouseover', function () {
    pre.style.display = 'block';
    aft.style.display = 'block';
})
pre.addEventListener('mouseover', function () {
    pre.style.display = 'block';
    aft.style.display = 'block';
})
aft.addEventListener('mouseout', function () {
    pre.style.display = 'none';
    aft.style.display = 'none';
})
pre.addEventListener('mouseout', function () {
    pre.style.display = 'none';
    aft.style.display = 'none';
})
aft.addEventListener('click', function () {
    clearInterval(timer);
    next();
    timer = setInterval(next, 3000);
})
pre.addEventListener('click', function () {
    clearInterval(timer);
    prev();
    timer = setInterval(next, 3000);
})
// 6.动态生成下排按钮
for (let i = 0; i < imgs.length; i++) {
    let an = document.createElement('button');
    let div = document.getElementById('btn');
    div.appendChild(an);
    an.id = "button1"
    an.name = 'i' + [8 - i];
    btns.push(an);
    // console.log(btns);
}

// 7.按钮颜色变化函数
btns[1].style.backgroundColor = 'red';
function cag() {
    for (let i = 7; i >= 0; i--) {
        if (btns[i].name == imgs[lst - 1].id) {
            btns[i].style.backgroundColor = 'red'
        }
        else {
            btns[i].style.backgroundColor = 'gray'
        }
    }
}
// 8.按钮与图片链接
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('mouseover', function () {
        clearInterval(timer);
        for (let j = lst - 1; imgs[lst - 1].id != btns[i].name; j++) {
            next();
        }
        timer = setInterval(next, 3000);
    })
}

//   首页的页面点击效果
// footer部分
const bofang = document.getElementById("boFang")
bofang.addEventListener('click', function () {
    if (bofang.getAttribute('src') == "icon/暂停.png") {
        bofang.setAttribute('src', "icon/播放.png");
    }
    else {
        bofang.setAttribute('src', "icon/暂停.png");
    }
})
const sys = document.getElementById("sys");
sys.addEventListener('mouseover', () => {
    sys.setAttribute('src', 'icon/上一首 (1).png')
})
sys.addEventListener('mouseout', () => {
    sys.setAttribute('src', 'icon/上一首.png')
})
const xys = document.getElementById("xys");
xys.addEventListener('mouseover', () => {
    xys.setAttribute('src', 'icon/下一首 (1).png')
})
xys.addEventListener('mouseout', () => {
    xys.setAttribute('src', 'icon/下一首.png')
})
const xunhuan = document.getElementById("xunhuan")
xunhuan.addEventListener('click', function () {
    if (xunhuan.getAttribute('src') == "icon/顺序播放.png") {
        xunhuan.setAttribute('src', "icon/列表循环.png");
    }
    else if (xunhuan.getAttribute('src') == "icon/列表循环.png") {
        xunhuan.setAttribute('src', "icon/随机播放.png");
    } else {
        xunhuan.setAttribute('src', "icon/顺序播放.png")
    }
})
const ci = document.getElementById("ci");
ci.addEventListener('mouseover', () => {
    ci.style.color = 'red';
})
ci.addEventListener('mouseout', () => {
    ci.style.color = 'black';
})
const bottomimg2 = document.querySelector(".bottomimg2");
const bottomimg = document.querySelector(".bottomimg");
bottomimg.addEventListener('mouseover', () => {
    bottomimg2.style.display = 'inline-block';
})
bottomimg.addEventListener('mouseout', () => {
    bottomimg2.style.display = 'none';
})
// 音量条
const box = document.getElementsByClassName('box')[0];
const bar = document.getElementsByClassName('bar')[0];
const barmove = document.getElementsByClassName('barmove')[0];
const ball = document.getElementsByClassName('ball')[0];
let flag2;
let position2 = {
    oriOffestBottom: 0,//偏移值
    oriY: 0,//移动的X坐标
    maxTop: 0,//向左最大
    maxBottom: 0,//向右最大
}
bar.addEventListener('mousedown', function (event) {
    flag2 = true;
    box.style.display = 'block';
    let y = window.event.offsetY;
    barmove.style.height = y + 'px';
    ball.style.top = y + 'px';
    position2.oriOffestBottom = 80 - window.event.offsetY;
    position2.oriY = event.clientY;
    position2.maxTop = position2.oriOffestBottom;
    position2.maxBottom = 80 - position2.oriOffestBottom;
})
document.addEventListener('mousemove', function (event) {
    if (flag2) {
        let clientY = event.clientY;
        let length = position2.oriY - clientY;
        let a = position2.oriOffestBottom + length;
        let b = 80 - a;
        if (b > 80) {
            b = 80
        } else if (b < 0) {
            b = 0
        }
        barmove.style.height = b + 'px';
        ball.style.top = barmove.style.height;
    }
})
document.addEventListener('mouseup', function () {
    flag2 = false;
}, false);
const yinLiang = document.getElementById('yinLiang');
{
    let now1;
    yinLiang.addEventListener('click', function () {
        if (yinLiang.getAttribute('src') == "icon/laba.png") {
            yinLiang.setAttribute('src', "icon/静音.png");
            now1 = barmove.style.height;
            barmove.style.height = 80 + 'px';
            ball.style.top = 80 + 'px';
        }
        else {
            barmove.style.height = now1;
            ball.style.top = now1;
            yinLiang.setAttribute('src', "icon/laba.png");
        }
    })
}
box.addEventListener('click', () => {
    yinLiang.setAttribute('src', "icon/laba.png");
})
yinLiang.addEventListener('mouseover', () => {
    box.style.display = 'block';
})
yinLiang.addEventListener('mouseout', () => {
    box.style.display = 'none';
})
box.addEventListener('mouseover', () => {
    box.style.display = 'block';
})
box.addEventListener('mouseout', () => {
    box.style.display = 'none';
})
// 侧边栏
let sections = document.querySelectorAll('section a')
let articles = document.querySelectorAll('article')
let num;
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('mouseover', () => {
        if (i != num) {
            sections[i].style.backgroundColor = '#9b9b9b17';
        }
    })
}
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('mouseout', () => {
        if (i != num) {
            sections[i].style.backgroundColor = 'white';
        }
    })
}
for (let i = 0; i < sections.length; i++) {
    sections[i].addEventListener('click', () => {
        for (let i = 0; i < sections.length; i++) {
            sections[i].style.fontWeight = 'normal'
            sections[i].style.backgroundColor = 'white';
        }
        for (let i = 0; i < articles.length; i++) {
            articles[i].style.display = 'none';
        }
        sections[i].style.fontWeight = 'bold';
        if (i == 8) {
            articles[12].style.display = 'inline-block';
        } else {
            articles[i].style.display = 'inline-block';
        }

        sections[i].style.backgroundColor = 'rgb(226, 226, 226)'
        articles[i].style.marginLeft = '0';
        num = i;
    })
}
sections[0].style.backgroundColor = 'rgb(226, 226, 226)'
sections[0].style.fontWeight = 'bold';

// 登录信息
const avatarUrl = localStorage.getItem("avatarUrl");
const nickname = localStorage.getItem("nickname");
const headimage = document.getElementById("headimage");
const dlstatus = document.getElementById("dlstatus");
const token = localStorage.getItem("token");
const personZH = JSON.parse(token);
const cookies = personZH?personZH.cookie:null;
const out =document.querySelector('#zDong');
out.addEventListener('click', function(){
    localStorage.clear();
    alert('你已经退出登录');
    window.location.reload();
})
// console.log(personZH);
// console.log(cookies);
if (avatarUrl) {
    headimage.setAttribute('src', avatarUrl);
    dlstatus.innerText = nickname;
}
const jiemian = document.querySelector('#jiemian');

dlstatus.addEventListener('click', function (){
    if (jiemian.style.display == 'block') {
        jiemian.style.display="none";
    }else{
        jiemian.style.display="block"
    }

})

// 歌单封面+歌单信息+歌曲
const tjgdimg = document.querySelectorAll(".tjflex span")
const GDIMG = document.getElementById('GDIMG');
const GDbt = document.getElementById('GDbt');
const GDname = document.getElementById('GDname');
const GDnameimg = document.getElementById('GDnameimg');
const desc = document.getElementById('desc');
const tbody = document.querySelector('#ALLmusic tbody');
function c() {
    fetch("http://redrock.udday.cn:2022/personalized?limit=10", {
        method: "GET",
    }).then((response) => {
        return response.text()
    }).then((response) => {
        return JSON.parse(response)
    }).then((response) => {
        let x = response.result;
        // console.log(x);
        for (let i = 0; i < tjgdimg.length; i++) {
            let backgroundimage = x[i].picUrl;
            let name = x[i].name;
            let playCount = x[i].playCount;
            let id = x[i].id;
            let a = "";
            a += '<img src="' + backgroundimage + '">'
            a += '<img src="icon/播放-红色.png" class="icon-bf">'
            a += '<div>' + playCount + '</div>'
            a += name;
            tjgdimg[i].innerHTML = a;
            tjgdimg[i].addEventListener('click', function () {
                for (let i = 0; i < articles.length; i++) {
                    articles[i].style.display = "none";
                };
                for (let i = 0; i < sections.length; i++) {
                    sections[i].style.fontWeight = 'normal'
                    sections[i].style.backgroundColor = 'white';
                };
                for (let i = 0; i < dhang2.length; i++) {
                    dhang2[i].className = 'DH';
                    gdPart[i].style.display = "none";
                }
                dhang2[0].className = 'DHed';
                gdPart[0].style.display = "block";
                hotTalk.innerHTML = "";
                tbody.innerHTML = '';
                articles[12].style.display = "inline-block";
                d(id);
                fetch(`http://redrock.udday.cn:2022/playlist/detail?id=${id}`, {
                    method: 'GET',
                }).then((res) => {
                    return res.text();
                }).then((res) => {
                    return JSON.parse(res)
                }).then((res) => {
                    let coverImgUrl = res.playlist.coverImgUrl;
                    let name = res.playlist.name;
                    let nickname = res.playlist.creator.nickname;
                    let backgroundUrl = res.playlist.creator.backgroundUrl;
                    let tags = res.playlist.tags;
                    let trackCount = res.playlist.trackCount;
                    let playCount = res.playlist.playCount;
                    let description = res.playlist.description;
                    let trackIds = res.playlist.trackIds.map(item => { return Number(item.id) }).join(',');
                    GDIMG.setAttribute('src', coverImgUrl)
                    GDbt.innerText = name;
                    GDname.innerText = nickname;
                    GDnameimg.setAttribute('src', backgroundUrl)
                    let b = '';
                    b += '标签:' + tags[0] + '/' + tags[1] + '/' + tags[2] + '<br />';
                    b += '歌曲: ' + trackCount + '&nbsp&nbsp&nbsp 播放:' + playCount + '<br />';
                    b += '简介:<span id="decxxx">' + description + '</span>';
                    desc.innerHTML = b;
                    return trackIds;
                }).then((res) => {
                    e(res);
                })
            })
        }
    })
}
c();

// 判断是否是喜欢的音乐
async function iflike() {
    const res = await fetch(`http://redrock.udday.cn:2022/likelist?uid=${myID}&cookie=${cookies}`);
    const data = await res.json();
    let ids = data.ids;
    sessionStorage.setItem('ids', ids)
}

let playlists;
let idsNow;

//歌单详情
function e(res) {
    geturl(res);
    fetch(`http://redrock.udday.cn:2022/song/detail?ids=${res}`, {
        method: 'GET',
    }).then((response) => {
        return response.json();
    }).then((response) => {
        geturl(res);
        iflike();
        return response;
    }).then((response) => {
        let a = response.songs;
        tbody.innerHTML = "";
        let musics = sessionStorage.getItem('music').split(',');
        let musics2 = JSON.parse(musics);
        for (let i = 0; i < a.length; i++) {
            let tr = document.createElement("tr")
            tbody.appendChild(tr);
            (function (i) {
                let ZJ = a[i].al.name;
                let MUSICER = a[i].ar[0].name;
                let NAME = a[i].name;
                let id = a[i].id;
                let bg = '';
                let y = i + 1;
                let music;
                for (let i = 0; i < musics2.length; i++) {
                    if (musics2[i].id == id) {
                        music = musics2[i].url;
                    }
                }
                let ids = sessionStorage.getItem('ids');
                let src = '';
                if (ids.includes(id)) {
                    src = 'icon/爱心.png'
                } else {
                    src = 'icon/xihuan.png'
                }
                bg += '<td align="center">' + y + '</td>';
                bg += '<td><img src="' + src + '" id="musicimage2" >&nbsp<img src="icon/下载.png" id="localxz"></td>';
                bg += '<td >' + NAME + '</td>';
                bg += '<td >' + MUSICER + '</td>';
                bg += '<td >' + ZJ + '</td>';
                bg += '<td style="display:none">' + id + '</td>';
                bg += '<td style="display:none">' + music + '</td>';
                tr.innerHTML = bg;

            })(i);
        }
        let xihuans = document.querySelectorAll('#musicimage2')
        for (let i = 0; i < xihuans.length; i++) {
            xihuans[i].addEventListener('click', function () {
                let id = this.parentNode.parentNode.lastChild.previousSibling.innerText;
                if (xihuans[i].getAttribute('src') == "icon/xihuan.png") {
                    xihuans[i].setAttribute('src', "icon/爱心.png");
                    fetch(`http://redrock.udday.cn:2022/like?id=${id}&cookie=${cookies}`, {
                        method: "GET",
                    }).then((response) => {
                        return response.json()
                    }).then((res) => {
                        console.log('ture');
                    })
                }
                else {
                    xihuans[i].setAttribute('src', "icon/xihuan.png");
                    fetch(`http://redrock.udday.cn:2022/like?id=${id}&like=false&cookie=${cookies}`, {
                        method: "GET",
                    }).then((response) => {
                        return response.json()
                    }).then((res) => {
                        console.log('false');
                    })
                }
            })
        }
        let trs = document.querySelectorAll('#ALLmusic tbody tr');
        let num2;
        for (let i = 0; i < trs.length; i++) {
            trs[i].addEventListener('click', () => {
                for (let i = 0; i < trs.length; i++) {
                    if (i % 2 != 0) {
                        trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                    } else {
                        trs[i].style.backgroundColor = 'white';
                    }
                }
                trs[i].style.backgroundColor = 'rgb(226, 226, 226)';
                num2 = i;
            })
            let url = trs[i].lastChild.innerText;
            let id = trs[i].lastChild.previousSibling.innerText;
            trs[i].addEventListener('dblclick', () => {
                playlists = [];
                idsNow = [];
                for (let i = 0; i < trs.length; i++) {
                    playlists.push(trs[i].lastChild.innerText)
                    idsNow.push(trs[i].lastChild.previousSibling.innerText)
                }
                setplay(playlists, url, idsNow, id);
            })

        }
        for (let i = 0; i < trs.length; i++) {
            trs[i].addEventListener('mouseover', () => {
                if (i != num2) {
                    trs[i].style.backgroundColor = 'rgba(228, 224, 224)';
                }
            })
        }
        for (let i = 0; i < trs.length; i++) {
            trs[i].addEventListener('mouseout', () => {
                if (i != num2) {
                    if (i % 2 != 0) {
                        trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                    } else {
                        trs[i].style.backgroundColor = 'white';
                    }
                }
            })
        }
    })
}

// 打开导航下的内容
const dhang2 = document.querySelectorAll('.dhang2 a');
const gdPart = document.querySelectorAll('#ALLmusic,#GD-Talk,#GD-Lover');
// console.log(gdPart);
for (let i = 0; i < dhang2.length; i++) {
    dhang2[i].addEventListener('click', function () {
        for (let i = 0; i < dhang2.length; i++) {
            dhang2[i].className = 'DH';
            gdPart[i].style.display = "none";
        }
        dhang2[i].className = 'DHed';
        gdPart[i].style.display = "block";
    })
}

// 展示评论
const hotTalk = document.querySelector('#Hot-Talk');
function d(id) {
    fetch(`http://redrock.udday.cn:2022/comment/playlist?id=${id}`, {
        method: 'GET',
    }).then((res) => {
        return res.text();
    }).then((res) => {
        return JSON.parse(res)
    }).then((res) => {
        // console.log(res);
        let total = res.total;
        let comments = res.comments;
        for (let i = 0; i < comments.length; i++) {
            let content = comments[i].content;
            let timeStr = comments[i].timeStr;
            let nickname = comments[i].user.nickname;
            let avatarUrl = comments[i].user.avatarUrl;
            let li = document.createElement('li');
            hotTalk.appendChild(li);
            let a = '';
            a += `
            <img src="${avatarUrl}">
            <div>
                <span>
                <span class='skyblue'>${nickname}</span>:${content}<br />
                    ${timeStr}
                </span>
                <img src="icon/评论.png" id="talk-Talk">
                <img src="icon/转发.png">
                <img src="./icon/点赞.png">
            </div>`
            li.innerHTML = a;
            // 回复评论
            let talkTalk = document.querySelectorAll('#talk-Talk');
            talkTalk[i].addEventListener('click', function () {
                myTalk.value = '回复' + nickname + ':';
            });
        }
    })
}

// 自己评论
const sendTalk = document.querySelector('#Send-Talk');
const myTalk = document.querySelector('#My-Talk');
sendTalk.addEventListener('click', function () {
    let cont = myTalk.value;
    let li = document.createElement('li');
    let nowTime = getNowtime();
    hotTalk.insertBefore(li, hotTalk.children[0]);
    let a = '';
    a += `
    <img src="${avatarUrl}">
    <div>
        <span>
        <span class='skyblue'>${nickname}</span>:${cont}<br />
        ${nowTime}
        </span>
        <img src="icon/评论.png" id="talk-Talk">
        <img src="icon/转发.png">
        <img src="./icon/点赞.png">
    </div>`
    li.innerHTML = a;


    // 发送评论到服务器
    fetch(`http://redrock.udday.cn:2022/comment?t=1&type=2&id=${id}&content=${cont}&cookie=${cookies}`, {
        method: 'POST',
    }).then((response) => {
        return response.json();
    }).then((res) => {
        console.log(res);
    })
    myTalk.value = '';
})

// 时间
function getNowtime() {
    let date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const time = year + '-' + month + '-' + day + '  ' + hour + ':' + addZero(minute);
    return time;
}

function addZero(x) {
    return x < 10 ? ('0' + x) : x;
}

// 播放图标
const iconBf = document.getElementsByClassName("icon-bf");
for (let i = 0; i < tjgdimg.length; i++) {
    tjgdimg[i].addEventListener("mouseover", () => {
        iconBf[i].style.display = "block";
    })
    tjgdimg[i].addEventListener("mouseout", () => {
        iconBf[i].style.display = "none";
    })
}

// 搜索
const findMusics = document.querySelector('#findMusic');
const ss = document.querySelector('#ss');
const tbody2 = document.querySelector('#ALLmusic2 tbody');
ss.addEventListener('click', function () {
    // 获取搜索内容
    for (let i = 0; i < articles.length; i++) {
        articles[i].style.display = "none";
    };
    for (let i = 0; i < sections.length; i++) {
        sections[i].style.fontWeight = 'normal'
        sections[i].style.backgroundColor = 'white';
    };
    articles[13].style.display = "inline-block";
    hotSSdiv.style.display = "none";
    let x = findMusics.value;
    fetch(`http://redrock.udday.cn:2022/cloudsearch?keywords=${x}`, {
        method: 'GET',
    }).then(res => res.text())
        .then((res) => {
            return JSON.parse(res)
        })
        .then((res) => {
            // console.log(res);
            let x1 = [];
            let a1 = res.result.songs;
            for (let i = 0; i < a1.length; i++) {
                x1.push(a1[i].id)
            }
            let x2 = x1.join(',')
            geturl(x2);
            iflike();
            return res;
        })
        .then((res) => {
            tbody2.innerHTML = '';
            let a = res.result.songs;
            let musics = sessionStorage.getItem('music').split(',');
            let musics2 = JSON.parse(musics);
            for (let i = 0; i < a.length; i++) {
                let tr = document.createElement("tr");
                tbody2.appendChild(tr);
                let ZJ = a[i].al.name;
                let MUSICER = a[i].ar[0].name;
                let NAME = a[i].name;
                let id = a[i].id;
                let bg = '';
                let y = i + 1;
                let music;
                for (let i = 0; i < musics2.length; i++) {
                    if (musics2[i].id == id) {
                        music = musics2[i].url;
                    }
                }
                let ids = sessionStorage.getItem('ids');
                let src = '';
                if (ids.includes(id)) {
                    src = 'icon/爱心.png'
                } else {
                    src = 'icon/xihuan.png'
                }
                bg += '<td align="center">' + y + '</td>';
                bg += '<td><img src="' + src + '" id="musicimage2" >&nbsp<img src="icon/下载.png" id="localxz"></td>';
                bg += '<td >' + NAME + '</td>';
                bg += '<td >' + MUSICER + '</td>';
                bg += '<td >' + ZJ + '</td>';
                bg += '<td style="display:none">' + id + '</td>';
                bg += '<td style="display:none">' + music + '</td>';
                tr.innerHTML = bg;
            }
            let xihuans = document.querySelectorAll('#musicimage2');
            for (let i = 0; i < xihuans.length; i++) {
                xihuans[i].addEventListener('click', function () {
                    let id = this.parentNode.parentNode.lastChild.previousSibling.innerText;
                    if (xihuans[i].getAttribute('src') == "icon/xihuan.png") {
                        xihuans[i].setAttribute('src', "icon/爱心.png");
                        fetch(`http://redrock.udday.cn:2022/like?id=${id}&cookie=${cookies}`, {
                            method: "GET",
                        }).then((response) => {
                            return response.json()
                        }).then((res) => {
                            console.log('ture');
                        })
                    }
                    else {
                        xihuans[i].setAttribute('src', "icon/xihuan.png");
                        fetch(`http://redrock.udday.cn:2022/like?id=${id}&like=false&cookie=${cookies}`, {
                            method: "GET",
                        }).then((response) => {
                            return response.json()
                        }).then((res) => {
                            console.log('false');
                        })
                    }
                })
            }
            let trs = document.querySelectorAll('#ALLmusic2 tbody tr');
            let num2;
            for (let i = 0; i < trs.length; i++) {
                trs[i].addEventListener('click', () => {
                    for (let i = 0; i < trs.length; i++) {
                        if (i % 2 != 0) {
                            trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                        } else {
                            trs[i].style.backgroundColor = 'white';
                        }
                    }
                    trs[i].style.backgroundColor = 'rgb(226, 226, 226)';
                    num2 = i;
                })
                let url = trs[i].lastChild.innerText;
                let id = trs[i].lastChild.previousSibling.innerText;
                trs[i].addEventListener('dblclick', () => {
                    playlists = [];
                    idsNow = [];
                    for (let i = 0; i < trs.length; i++) {
                        playlists.push(trs[i].lastChild.innerText)
                        idsNow.push(trs[i].lastChild.previousSibling.innerText)
                    }
                    setplay(playlists, url, idsNow, id);
                })
            }
            for (let i = 0; i < trs.length; i++) {
                trs[i].addEventListener('mouseover', () => {
                    if (i != num2) {
                        trs[i].style.backgroundColor = 'rgba(228, 224, 224)';
                    }
                })
            }
            for (let i = 0; i < trs.length; i++) {
                trs[i].addEventListener('mouseout', () => {
                    if (i != num2) {
                        if (i % 2 != 0) {
                            trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                        } else {
                            trs[i].style.backgroundColor = 'white';
                        }
                    }
                })
            }
        })

})


// 默认搜索关键词
fetch('http://redrock.udday.cn:2022/search/default', {
    method: 'GET',
}).then(res => res.text())
    .then((res) => JSON.parse(res))
    .then((res) => {
        let showkeywords = res.data.showKeyword;
        findMusics.setAttribute('placeholder', showkeywords);
    })

// 热搜列表
const hotSSdiv = document.querySelector('#hotSSdiv');
findMusics.addEventListener('click', function () {
    if (hotSSdiv.style.display == 'none') {
        hotSSdiv.style.display = 'block';
        fetch('http://redrock.udday.cn:2022/search/hot/detail', {
            method: 'GET'
        }).then(res => res.text())
            .then((res) => JSON.parse(res))
            .then((res) => {
                // console.log(res);
                let ol = hotSSdiv.querySelector('ol');
                let a = res.data;
                let b = '';
                for (let i = 0; i < a.length; i++) {
                    let searchWord = a[i].searchWord;
                    b += '<li>' + searchWord + '</li>'
                }
                ol.innerHTML = b;
                let hotSSdiva = document.querySelectorAll('#hotSSdiv li');
                for (let i = 0; i < hotSSdiva.length; i++) {
                    hotSSdiva[i].addEventListener('click', () => {
                        for (let i = 0; i < articles.length; i++) {
                            articles[i].style.display = "none";
                        };
                        for (let i = 0; i < sections.length; i++) {
                            sections[i].style.fontWeight = 'normal'
                            sections[i].style.backgroundColor = 'white';
                        };
                        articles[13].style.display = "inline-block";
                        hotSSdiv.style.display = "none";
                        let x = hotSSdiva[i].innerText;
                        console.log(x);
                        fetch(`http://redrock.udday.cn:2022/cloudsearch?keywords=${x}`, {
                            method: 'GET',
                        }).then(res => res.text())
                            .then((res) => {
                                return JSON.parse(res)
                            })
                            .then((res) => {
                                let x1 = [];
                                let a1 = res.result.songs;
                                for (let i = 0; i < a1.length; i++) {
                                    x1.push(a1[i].id)
                                }
                                let x2 = x1.join(',')
                                geturl(x2);
                                iflike();
                                return res;
                            })
                            .then((res) => {
                                tbody2.innerHTML = '';
                                let a = res.result.songs;
                                let musics = sessionStorage.getItem('music').split(',');
                                let musics2 = JSON.parse(musics);
                                for (let i = 0; i < a.length; i++) {
                                    let tr = document.createElement("tr");
                                    tbody2.appendChild(tr);
                                    let ZJ = a[i].al.name;
                                    let MUSICER = a[i].ar[0].name;
                                    let NAME = a[i].name;
                                    let id = a[i].id;
                                    let bg = '';
                                    let y = i + 1;
                                    let music;
                                    for (let i = 0; i < musics2.length; i++) {
                                        if (musics2[i].id == id) {
                                            music = musics2[i].url;
                                        }
                                    }
                                    let ids = sessionStorage.getItem('ids');
                                    let src = '';
                                    if (ids.includes(id)) {
                                        src = 'icon/爱心.png'
                                    } else {
                                        src = 'icon/xihuan.png'
                                    }
                                    bg += '<td align="center">' + y + '</td>';
                                    bg += '<td><img src="' + src + '" id="musicimage2" >&nbsp<img src="icon/下载.png" id="localxz"></td>';
                                    bg += '<td >' + NAME + '</td>';
                                    bg += '<td >' + MUSICER + '</td>';
                                    bg += '<td >' + ZJ + '</td>';
                                    bg += '<td style="display:none">' + id + '</td>';
                                    bg += '<td style="display:none">' + music + '</td>';
                                    tr.innerHTML = bg;
                                }
                                let xihuans = document.querySelectorAll('#musicimage2');
                                for (let i = 0; i < xihuans.length; i++) {
                                    xihuans[i].addEventListener('click', function () {
                                        let id = this.parentNode.parentNode.lastChild.previousSibling.innerText;
                                        if (xihuans[i].getAttribute('src') == "icon/xihuan.png") {
                                            xihuans[i].setAttribute('src', "icon/爱心.png");
                                            fetch(`http://redrock.udday.cn:2022/like?id=${id}&cookie=${cookies}`, {
                                                method: "GET",
                                            }).then((response) => {
                                                return response.json()
                                            }).then((res) => {
                                                console.log('ture');
                                            })
                                        }
                                        else {
                                            xihuans[i].setAttribute('src', "icon/xihuan.png");
                                            fetch(`http://redrock.udday.cn:2022/like?id=${id}&like=false&cookie=${cookies}`, {
                                                method: "GET",
                                            }).then((response) => {
                                                return response.json()
                                            }).then((res) => {
                                                console.log('false');
                                            })
                                        }
                                    })
                                }
                                let trs = document.querySelectorAll('#ALLmusic2 tbody tr');
                                let num2;
                                for (let i = 0; i < trs.length; i++) {
                                    trs[i].addEventListener('click', () => {
                                        for (let i = 0; i < trs.length; i++) {
                                            if (i % 2 != 0) {
                                                trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                                            } else {
                                                trs[i].style.backgroundColor = 'white';
                                            }
                                        }
                                        trs[i].style.backgroundColor = 'rgb(226, 226, 226)';
                                        num2 = i;
                                    })
                                    let url = trs[i].lastChild.innerText;
                                    let id = trs[i].lastChild.previousSibling.innerText;
                                    trs[i].addEventListener('dblclick', () => {
                                        playlists = [];
                                        idsNow = [];
                                        for (let i = 0; i < trs.length; i++) {
                                            playlists.push(trs[i].lastChild.innerText)
                                            idsNow.push(trs[i].lastChild.previousSibling.innerText)
                                        }
                                        setplay(playlists, url, idsNow, id);
                                    })
                                }
                                for (let i = 0; i < trs.length; i++) {
                                    trs[i].addEventListener('mouseover', () => {
                                        if (i != num2) {
                                            trs[i].style.backgroundColor = 'rgba(228, 224, 224)';
                                        }
                                    })
                                }
                                for (let i = 0; i < trs.length; i++) {
                                    trs[i].addEventListener('mouseout', () => {
                                        if (i != num2) {
                                            if (i % 2 != 0) {
                                                trs[i].style.backgroundColor = 'rgba(228, 224, 224, 0.308)';
                                            } else {
                                                trs[i].style.backgroundColor = 'white';
                                            }
                                        }
                                    })
                                }
                            })
                    })
                }
            })
    }
    else {
        hotSSdiv.style.display = 'none';
    }

})

// 我喜欢的歌曲列表
const myID = personZH?personZH.profile.userId:null;
sections[8].addEventListener('click', () => {
    fetch(`http://redrock.udday.cn:2022/likelist?uid=${myID}&cookie=${cookies}`, {
        method: 'GET',
    }).then(res => res.text())
        .then((res) => JSON.parse(res))
        .then((res) => {
            // console.log(res);
            let ids = res.ids;
            for (let i = 0; i < dhang2.length; i++) {
                dhang2[i].className = 'DH';
                gdPart[i].style.display = "none";
            }
            dhang2[0].className = 'DHed';
            gdPart[0].style.display = "block";
            hotTalk.innerHTML = "";
            tbody.innerHTML = '';
            articles[12].style.display = "inline-block";
            fetch(`http://redrock.udday.cn:2022/user/playlist?uid=${myID}&cookie=${cookies}`, {
                method: "GET",
            }).then((response) => {
                return response.json();
            }).then((res) => {
                // console.log(res);
                let coverImgUrl = res.playlist[0].coverImgUrl;
                let name = res.playlist[0].name;
                let nickname = res.playlist[0].creator.nickname;
                let backgroundUrl = res.playlist[0].creator.avatarUrl;
                // let tags = res.playlist[0].tags;
                let trackCount = res.playlist[0].trackCount;
                let playCount = res.playlist[0].playCount;
                let description = res.playlist[0].description;
                let trackIds = ids.join(',');
                GDIMG.setAttribute('src', coverImgUrl)
                GDbt.innerText = name;
                GDname.innerText = nickname;
                GDnameimg.setAttribute('src', backgroundUrl)
                let b = '';
                // b += '标签:' + tags[0] + '/' + tags[1] + '/' + tags[2] + '<br />';
                b += '歌曲: ' + trackCount + '&nbsp&nbsp&nbsp 播放:' + playCount + '<br />';
                b += '简介:<span id="decxxx">' + description + '</span>';
                desc.innerHTML = b;
                // console.log(trackIds);
                let wed = trackIds.slice(0, 9000);
                e(wed);
            })

        })

})

// 获取用户歌单
const myMusciGd = document.querySelector('#myMusciGd');
function getUsermc() {
    fetch(`http://redrock.udday.cn:2022/user/playlist?uid=${myID}&cookie=${cookies}`, {
    method: 'GET',
}).then(res => res.text())
    .then((res) => JSON.parse(res))
    .then((res) => {
        let x = res.playlist;
        for (let i = 0; i < x.length; i++) {
            let li = document.createElement('li')
            myMusciGd.appendChild(li);
            li.innerText = x[i].name
        }
        let lis = document.querySelectorAll('#myMusciGd li')
        lis[0].style.display = 'none';
        for (let i = 0; i < x.length; i++) {
            let id = x[i].id;
            lis[i].addEventListener('click', function () {
                for (let i = 0; i < articles.length; i++) {
                    articles[i].style.display = "none";
                };
                for (let i = 0; i < sections.length; i++) {
                    sections[i].style.fontWeight = 'normal'
                    sections[i].style.backgroundColor = 'white';
                };
                for (let i = 0; i < dhang2.length; i++) {
                    dhang2[i].className = 'DH';
                    gdPart[i].style.display = "none";
                }
                dhang2[0].className = 'DHed';
                gdPart[0].style.display = "block";
                hotTalk.innerHTML = "";
                tbody.innerHTML = '';
                articles[12].style.display = "inline-block";
                d(id);
                fetch(`http://redrock.udday.cn:2022/playlist/detail?id=${id}&cookie=${cookies}`, {
                    method: 'GET',
                }).then((res) => {
                    return res.text();
                }).then((res) => {
                    return JSON.parse(res)
                }).then((res) => {
                    // console.log(res);
                    let coverImgUrl = res.playlist.coverImgUrl;
                    let name = res.playlist.name;
                    let nickname = res.playlist.creator.nickname;
                    let backgroundUrl = res.playlist.creator.backgroundUrl;
                    let tags = res.playlist.tags;
                    let trackCount = res.playlist.trackCount;
                    let playCount = res.playlist.playCount;
                    let description = res.playlist.description;
                    let trackIds = res.playlist.trackIds.map(item => { return Number(item.id) }).join(',');
                    GDIMG.setAttribute('src', coverImgUrl)
                    GDbt.innerText = name;
                    GDname.innerText = nickname;
                    GDnameimg.setAttribute('src', backgroundUrl)
                    let b = '';
                    // b += '标签:' + tags[0] + '/' + tags[1] + '/' + tags[2] + '<br />';
                    b += '歌曲: ' + trackCount + '&nbsp&nbsp&nbsp 播放:' + playCount + '<br />';
                    b += '简介:<span id="decxxx">' + description + '</span>';
                    desc.innerHTML = b;
                    return trackIds;
                }).then((res) => {
                    e(res);
                })
            })
        }
    })
}

// 获取音乐url
function geturl(ids) {
    fetch(`http://redrock.udday.cn:2022/song/url?id=${ids}&cookie=${cookies}`)
        .then((response) => {
            return response.json();
        }).then((res) => {
            let a = res.data;
            let musics = JSON.stringify(a)
            // for (let i = 0; i < a.length; i++) {
            //     musics.push(a[i].url)
            // }
            sessionStorage.setItem('music', musics);
        })
}

// 音乐播放
const bfway = document.querySelector('#xunhuan');
const beforemusic = document.querySelector('#sys');
const aftermusic = document.querySelector('#xys');
const startT = document.querySelector('#startT');
const endT = document.querySelector('#endT');
const jdt2 = document.querySelector('.jdt2');
const jdt = document.querySelector('.jdt');
const ball2 = document.querySelector('.ball2');
let linenow = 0;
let offset = -40;


jdt.addEventListener('mouseover', function () {
    ball2.style.display = "block";
    jdt2.style.height = "5px";
    jdt.style.height = "5px";
})
jdt.addEventListener('mouseout', function () {
    ball2.style.display = "none";
    jdt2.style.height = "3px";
    jdt.style.height = "3px";
})


let audio = document.createElement('audio');
function setplay(urls, url, ids, id) {
    audio.src = url;
    footshow(id, url);
    // 音乐准备
    audio.addEventListener('canplaythrough', function () {
        let time = change(audio.duration);
        endT.innerText = time;
        audio.play();
        bigimg3.setAttribute('class', 'donghua')
        bigimg3.setAttribute('style', ' animation-play-state: running');
        bofang.setAttribute('src', "icon/暂停.png");
        gettime(id);
    })
    bofang.addEventListener('click', function () {
        if (bofang.getAttribute('src') == "icon/暂停.png") {
            audio.play();
            bigimg3.setAttribute('style', ' animation-play-state: running')
        } else {
            audio.pause();
            bigimg3.setAttribute('style', ' animation-play-state: paused')
        }
    })
    // 监听音频播放时间并更新进度条

    audio.addEventListener('timeupdate', function () {
        update(audio);
        let objs = sessionStorage.getItem('time')
        let times = JSON.parse(objs);
        let wordlis = document.querySelectorAll('#musicword2 li');
        if (audio.currentTime >= times[linenow].t) {
            if (linenow > 0) {
                wordlis[linenow - 1].removeAttribute('class');
                musicword2.style.transform = `translateY(${linenow * offset}px)`;
            }
            wordlis[linenow].setAttribute('class', 'lineHigh');
            linenow++;
        } else if (linenow > 0) {
            if (audio.currentTime <= times[linenow - 1].t) {
                wordlis[linenow].removeAttribute('class');
                musicword2.style.transform = `translateY(${linenow * offset}px)`;
                linenow--;
                wordlis[linenow].setAttribute('class', 'lineHigh');
            }
        }

    }, false);
    // 点击进度条跳到指定点播放
    jdt.addEventListener('mousedown', function (e) {
        if (!audio.paused || audio.currentTime != 0) {
            let a = e.offsetX / 350;
            audio.currentTime = audio.duration * a;
            update(audio)
        }
    })
    // 拖拽进度条
    dragDot(audio);
    // 音量大小
    setVolume(audio);
    return false;
}
// 播放结束
audio.addEventListener('ended', function () {
    audioEnded();
    let url = audio.src;
    let playindex = playlists.indexOf(url);
    let r = playindex == playlists.length - 1 ? 0 : playindex + 1;
    setplay(playlists, playlists[r], idsNow, idsNow[r]);
    linenow = 0;
}, false);
// 上一首
function next2() {
    audioEnded();
    let url = audio.src;
    let playindex = playlists.indexOf(url);
    let r = playindex == playlists.length - 1 ? 0 : playindex + 1;
    setplay(playlists, playlists[r], idsNow, idsNow[r]);
    // console.log(playlists, idsNow);
    linenow = 0;
}
// 下一首
function prev2() {
    audioEnded();
    let url = audio.src;
    let playindex = playlists.indexOf(url);
    let r = playindex == 0 ? playlists.length - 1 : playindex - 1;
    setplay(playlists, playlists[r], idsNow, idsNow[r]);
    linenow = 0;
}
aftermusic.addEventListener('click', next2, false);
beforemusic.addEventListener('click', prev2, false);

// 将秒转为分
function change(time) {
    let a = '';
    let m = parseInt(time / 60);
    let s = parseInt(time % 60);
    a += m / 10 < 1 == 1 ? ('0' + m) : m;
    a += ":"
    a += s / 10 < 1 == 1 ? ('0' + s) : s;
    return a;
}

// 更新进度条与时间
function update(audio) {
    let startTime = change(audio.currentTime);
    startT.innerText = startTime;
    let length = audio.currentTime / audio.duration;
    let a = length * 100;
    jdt2.style.width = a + '%';
    ball2.style.left = jdt2.style.width;
}

// 结束状态
function audioEnded() {
    jdt2.style.width = 0;
    startT.innerText = '00:00';
    // bofang.setAttribute('src', "icon/播放.png");
}
// 拖拽进度条
function dragDot(audio) {
    let position = {
        oriOffestLeft: 0,//偏移值
        oriX: 0,//移动的X坐标
        maxLeft: 0,//向左最大
        maxRight: 0,//向右最大
    }
    let flag = false; //是否开始

    jdt.addEventListener('mousedown', down, false);
    document.addEventListener('mousemove', move, false);
    document.addEventListener('mouseup', end, false);
    function down(event) {
        if (!audio.paused || audio.currentTime != 0) {
            flag = true;
            position.oriOffestLeft = window.event.offsetX;
            position.oriX = event.clientX;
            position.maxLeft = position.oriOffestLeft;
            position.maxRight = jdt.style.width - position.oriOffestLeft;
            // 禁止默认事件
            if (event && event.preventDefault) {
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
            // 禁止事件冒泡
            if (event && event.stopPropagation) {
                event.stopPropagation();
            } else {
                window.event.cancelBubble = true;
            }
        }
    }
    function move(event) {
        if (flag) {
            let clientX = event.clientX;
            let length = clientX - position.oriX;
            if (length > position.maxRight) {
                length = position.maxRight
            } else if (length < -position.maxLeft) {
                length = -position.maxLeft
            }
            let b = 350;
            let a = (position.oriOffestLeft + length) / b;
            audio.currentTime = audio.duration * a;
            update(audio)
        }
    }
    function end() {
        flag = false;
    }
}

// 音量控制
function setVolume(audio) {
    document.addEventListener('mouseup', function (event) {
        let x = parseInt(barmove.style.height);
        let y = 80 - x;
        let z = y / 80;
        audio.volume = z;
    })
    document.addEventListener('mousemove', function (event) {
        let x = parseInt(barmove.style.height);
        let y = 80 - x;
        let z = y / 80;
        audio.volume = z;
    })
}

const aaimg = document.querySelector('#aaimg');
const bbgm = document.querySelector('#bbgm');
const ccgs = document.querySelector('#ccgs');
const xihuan = document.querySelector('#musicimage');
const bfdetail = document.querySelector('#bfdetail');
const bigimg3 = document.querySelector('#bigimg3');
const musicword = document.querySelector('#musicword');
const musicword2 = document.querySelector('#musicword2')
const namename = document.querySelector('#namename');
const playername = document.querySelector('#playername');
let idl;
function footshow(id, url) {
    // console.log(id, url)
    // 左下角信息
    fetch(`http://redrock.udday.cn:2022/song/detail?ids=${id}`)
        .then((res) => {
            return res.json();
        }).then((res) => {
            // console.log(res);
            let name = res.songs[0].name;
            let musicer = res.songs[0].ar[0].name;
            let img = res.songs[0].al.picUrl;
            aaimg.setAttribute('src', img);
            bigimg3.setAttribute('src', img);
            bbgm.innerText = name;
            ccgs.innerText = musicer;
            namename.innerText = name;
            playername.innerText = musicer;
        })
    fetch(`http://redrock.udday.cn:2022/lyric?id=${id}`)
        .then((res) => {
            return res.json();
        }).then((res) => {
            // console.log(res);
            let text = res.lrc.lyric;
            // musicword.innerText = text;
            // 拆解歌词
            wordmove(text);
        })
    // 喜欢
    iflike();
    let ids = sessionStorage.getItem('ids');
    if (ids.includes(id)) {
        xihuan.setAttribute('src', 'icon/爱心.png')
    } else {
        xihuan.setAttribute('src', 'icon/xihuan.png')
    }
    idl=id;
}
xihuan.addEventListener('click', function () {
    if (xihuan.getAttribute('src') == "icon/xihuan.png") {
        xihuan.setAttribute('src', "icon/爱心.png");
        fetch(`http://redrock.udday.cn:2022/like?id=${idl}&cookie=${cookies}`, {
            method: "GET",
        }).then((response) => {
            return response.json()
        }).then((res) => {
            console.log('ture');
            console.log(res);
        })
    }
    else {
        xihuan.setAttribute('src', "icon/xihuan.png");
        fetch(`http://redrock.udday.cn:2022/like?id=${idl}&like=false&cookie=${cookies}`, {
            method: "GET",
        }).then((response) => {
            return response.json()
        }).then((res) => {
            console.log('false');
            console.log(res);
        })
    }
})

// 播放详情页
bottomimg.addEventListener('click', function () {
    if (bfdetail.style.display == 'none') {
        bfdetail.style.display = 'block';
    } else {
        bfdetail.style.display = 'none';
    }
})

function wordmove(text) {
    let textarr = text.split("\n");
    let objs = [];
    musicword2.innerHTML = ''
    for (let i = 0; i < textarr.length; i++) {
        let li = document.createElement("li");
        let t = textarr[i].substring(textarr[i].indexOf("[") + 1, textarr[i].indexOf("]"));
        objs.push({
            time: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
            c: textarr[i].substring(textarr[i].indexOf("]") + 1, textarr[i].length)
        });
        let a = '';
        a += objs[i].c
        // console.log(a);
        li.innerText = a;
        musicword2.appendChild(li);
    }
    // console.log(objs);
}

function gettime(id) {
    fetch(`http://redrock.udday.cn:2022/lyric?id=${id}`)
        .then((res) => {
            return res.json();
        }).then((res) => {
            // console.log(res);
            let text = res.lrc.lyric;
            let textarr = text.split("\n");
            let time = [];
            for (let i = 0; i < textarr.length; i++) {
                let t = textarr[i].substring(textarr[i].indexOf("[") + 1, textarr[i].indexOf("]"));
                time.push({
                    t: (t.split(":")[0] * 60 + parseFloat(t.split(":")[1])).toFixed(3),
                    c: textarr[i].substring(textarr[i].indexOf("]") + 1, textarr[i].length)
                });
            }
            let time2 = JSON.stringify(time)
            sessionStorage.setItem('time', time2);
        })
}
// 歌单大全
const move1 = document.querySelector('#move1');
move1.addEventListener('click', function () {
    articles[0].style.display = 'none';
    articles[14].style.display = 'inline-block';
})
const move2 = document.querySelector('#move2');
move2.addEventListener('click', function () {
    articles[14].style.display = 'none';
    articles[0].style.display = 'inline-block';
})

// 歌单类型按钮
const yuzhong = document.querySelector('#yuzhong');
const qwe2 = document.querySelectorAll('.qwe2');
const classcontent = document.querySelector('#classcontent');
const allgds = document.querySelector('#allgds')
yuzhong.addEventListener('click', function () {
    if (classcontent.style.display == 'none') {
        classcontent.setAttribute('style', 'display:block');
    } else {
        classcontent.setAttribute('style', 'display:none');
    }
})
fetch(`http://redrock.udday.cn:2022/playlist/catlist`)
    .then(res => res.json())
    .then((res) => {
        // console.log(res);
        let a = res.sub;
        for (let i = 0; i < a.length; i++) {
            let span = document.createElement('span')
            if (a[i].category == 0) {
                if (a[i].hot) {
                    qwe2[0].appendChild(span);
                    span.innerHTML = a[i].name + '<img src="./icon/hot.png" class="hoticon">';
                } else {
                    qwe2[0].appendChild(span);
                    span.innerText = a[i].name;
                }
            } else if (a[i].category == 1) {
                if (a[i].hot) {
                    qwe2[1].appendChild(span);
                    span.innerHTML = a[i].name + '<img src="./icon/hot.png" class="hoticon">';
                } else {
                    qwe2[1].appendChild(span);
                    span.innerText = a[i].name;
                }
            } else if (a[i].category == 2) {
                if (a[i].hot) {
                    qwe2[2].appendChild(span);
                    span.innerHTML = a[i].name + '<img src="./icon/hot.png" class="hoticon">';
                } else {
                    qwe2[2].appendChild(span);
                    span.innerText = a[i].name;
                }
            } else if (a[i].category == 3) {
                if (a[i].hot) {
                    qwe2[3].appendChild(span);
                    span.innerHTML = a[i].name + '<img src="./icon/hot.png" class="hoticon">';
                } else {
                    qwe2[3].appendChild(span);
                    span.innerText = a[i].name;
                }
            } else if (a[i].category == 4) {
                if (a[i].hot) {
                    qwe2[4].appendChild(span);
                    span.innerHTML = a[i].name + '<img src="./icon/hot.png" class="hoticon">';
                } else {
                    qwe2[4].appendChild(span);
                    span.innerText = a[i].name;
                }
            }
        }
        return a;
    })
    .then((res) => {
        let sspan = document.querySelectorAll('#qwe2 span');
        for (let i = 0; i < sspan.length; i++) {
            sspan[i].addEventListener('click', function () {
                let cat = sspan[i].innerText;
                yuzhong.innerText = sspan[i].innerText + ' >';
                for (let i = 0; i < sspan.length; i++) {
                    sspan[i].removeAttribute('class');
                }
                sspan[i].setAttribute('class', 'backred');
                classcontent.setAttribute('style', 'display:none');
                dd(cat);
            })
        }
        dd('华语')
    })

function dd(cat) {
    fetch(`http://redrock.udday.cn:2022/top/playlist?cat=${cat}&order=hot&limit=100`)
        .then(res => res.json())
        .then((res) => {
            let a = res.playlists;
            // console.log(a);
            allgds.innerHTML = '';
            for (let i = 0; i < a.length; i++) {
                let span = document.createElement('span');
                allgds.appendChild(span);
                let backgroundimage = a[i].coverImgUrl;
                let name = a[i].name;
                let playCount = a[i].playCount;
                let id = a[i].id;
                let b = "";
                b += '<img src="' + backgroundimage + '">'
                b += '<img src="icon/播放-红色.png" class="icon-bf">'
                b += '<div>' + playCount + '</div>'
                b += name;
                span.innerHTML = b;
                span.addEventListener('click', () => {
                    for (let i = 0; i < articles.length; i++) {
                        articles[i].style.display = "none";
                    };
                    hotTalk.innerHTML = "";
                    tbody.innerHTML = '';
                    articles[12].style.display = "inline-block";
                    d(id);
                    fetch(`http://redrock.udday.cn:2022/playlist/detail?id=${id}`, {
                        method: 'GET',
                    }).then((res) => {
                        return res.text();
                    }).then((res) => {
                        return JSON.parse(res)
                    }).then((res) => {
                        let coverImgUrl = res.playlist.coverImgUrl;
                        let name = res.playlist.name;
                        let nickname = res.playlist.creator.nickname;
                        let backgroundUrl = res.playlist.creator.backgroundUrl;
                        let tags = res.playlist.tags;
                        let trackCount = res.playlist.trackCount;
                        let playCount = res.playlist.playCount;
                        let description = res.playlist.description;
                        let trackIds = res.playlist.trackIds.map(item => { return Number(item.id) }).join(',');
                        GDIMG.setAttribute('src', coverImgUrl)
                        GDbt.innerText = name;
                        GDname.innerText = nickname;
                        GDnameimg.setAttribute('src', backgroundUrl)
                        let b = '';
                        b += '标签:' + tags[0] + '/' + tags[1] + '/' + tags[2] + '<br />';
                        b += '歌曲: ' + trackCount + '&nbsp&nbsp&nbsp 播放:' + playCount + '<br />';
                        b += '简介:<span id="decxxx">' + description + '</span>';
                        desc.innerHTML = b;
                        return trackIds;
                    }).then((res) => {
                        e(res);
                    })
                })
            }
            let iconBF = allgds.querySelectorAll('.icon-bf');
            let ssspan = document.querySelectorAll('#allgds span')
            for (let i = 0; i < iconBF.length; i++) {
                ssspan[i].addEventListener("mouseover", () => {
                    iconBF[i].style.display = "block";
                })
                ssspan[i].addEventListener("mouseout", () => {
                    iconBF[i].style.display = "none";
                })
            }

        })
}

let chacha = document.querySelector("#del");
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
            localStorage.setItem('token', JSON.stringify(response))
            localStorage.setItem('avatarUrl', response.profile.avatarUrl);
            localStorage.setItem('nickname',response.profile.nickname);
            window.location.reload();
        } else {
            alert("账户信息有误")
        }
    })
};

btn.addEventListener('click', function () {
    a();
})

if (cookies) {
    getUsermc();
}

const goBack = document.querySelector('#goBack');
const goNext = document.querySelector('#goNext');
goBack.addEventListener('click', function () {
    history.back();
})
goNext.addEventListener('click', function () {
    history.forward();
})
