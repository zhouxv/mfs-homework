var contentPanel = document.getElementById("content-panel");
var pagePanel=document.getElementById("page-panel");
var oList = [];
for (var i = 1; i < 34; i++) {
    oList.push({ num: i, focusNum: i * 3, replyNum: i * 9, title: "这是第" + i + "个问题" });
}

function createDom(num, focusNum, replyNum, title) {
    var dom = document.createElement("div");
    dom.setAttribute("class", "item");
    dom.innerHTML = '<div class="circle"><span>' + num + '</span></div>' +
        '<div class="info"><span class="iconfont icon-guanzhu">' + focusNum + '</span><span' +
        '        class="iconfont icon-pinglun">' + replyNum + '</span></div>' +
        '<div class="xiaolian iconfont icon-xiaolian"></div>' +
        '<div class="bottom"><span>' + title + '</span></div>';
    return dom;
}


function getData(page) {
    return oList.slice(page * 12, page * 12 + 12);
}

function fillPanel(page) {
    var data = getData(page);
    while (contentPanel.firstChild) {
        contentPanel.removeChild(contentPanel.firstChild);
    }
    for (var i = 0; i < data.length; i++) {
        contentPanel.appendChild(createDom(data[i].num, data[i].focusNum, data[i].replyNum, data[i].title));
    }
    if (data.length < 12) {
        for (var i = 0; i < 12 - data.length; i++) {
            var dom = document.createElement("div");
            dom.setAttribute("class", "itemPlaceHolder");
            contentPanel.appendChild(dom);
        }
    }
}

function fillPager()
{
    var pageNum=Math.ceil(oList.length/12);
    while (pagePanel.firstChild) {
        pagePanel.removeChild(pagePanel.firstChild);
    }
    for(let i=0;i<3;i++){
        var dom=document.createElement("a");
        dom.appendChild(document.createTextNode(i+1));
        pagePanel.appendChild(dom);
        dom.addEventListener("click",function(){
            fillPanel(i);
        });
    }
}

function load(){
    fillPager();
    fillPanel(0);
}