var serverData = [["SilverAsh", "银灰"], ["Pramanix", "初雪"], ["Matterhorn", "角峰"], ["Cliffheart", "崖心"], ["Courier", "讯使"]];
var lsData = localStorage.data;
var data = [];

function getData() {
    if (!!lsData) {
        lsData=lsData.split(",");
        for (var i = 0; i < serverData.length; i++) {
            data[i] = new item(serverData[i][0], serverData[i][1], lsData[i]);
        }
    } else {
        lsData=[];
        for (var i = 0; i < serverData.length; i++) {
            data[i] = new item(serverData[i][0], serverData[i][1], 0);
            lsData[i] = 0;
        }
        localStorage.data = lsData;
    }
}

function item(imgsrc, name, num) {
    this.imgsrc = imgsrc;
    this.name = name;
    this.num = num;
}



function createDom(imgsrc, name, num) {
    var dom = document.createElement("div");
    dom.setAttribute("class", "item");
    dom.innerHTML = '<div class="item">' +
        '<div class="img">' +
        '<img src="./img/' + imgsrc + '.png" alt="' + name + '">' +
        '</div>' +
        '<div class="item-title">' +
        '<h3>' + name + '</h3>' +
        '</div>' +
        '<div class="button-panel">' +
        '<span class="iconfont icon-jianhao"></span>' +
        '<span class="num">' + num + '</span>' +
        '<span class="iconfont icon-jiahao"></span>' +
        '</div>' +
        '</div>';
    return dom;
}

function createItem() {
    getData();
    var containerDom = document.getElementById("container");
    while (containerDom.firstChild) {
        containerDom.removeChild(containerDom.firstChild);
    }
    for (let i = 0; i < data.length; i++) {
        var itemDom = createDom(data[i].imgsrc, data[i].name, data[i].num);
        (itemDom.querySelector(".icon-jianhao")).addEventListener("click", function () {
            if (lsData[i] > 0) {
                lsData[i] = +lsData[i] - 1;
                localStorage.data = lsData;
                document.querySelectorAll(".num")[i].innerHTML=lsData[i];
            }

        });
        (itemDom.querySelector(".icon-jiahao")).addEventListener("click", function () {

                lsData[i] = +lsData[i] + 1;
                localStorage.data = lsData;
                document.querySelectorAll(".num")[i].innerHTML=lsData[i];
        });
        containerDom.appendChild(itemDom);
    }
}

