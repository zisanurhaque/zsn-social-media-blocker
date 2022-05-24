const errorPage = (page) => {
    return `
        <div class='container'>
            <h1 class='h1text'>Sorry, ${page} is not available at this moment</h1>
        </div>
    `
}

const styles = () => {
    return `
        <style>
            *{
                padding: 0px;
                margin: 0px;
                box-sizing: border-box;
            }
            .container{
                float: left;
                width: 100vw;
                height: 100vh;
                display: flex;
                justify-content: center;
                align-items: center;
            }
            .h1text{
                font-size: 48px;
                font-weight: 400;
                color: darkcyan;
            }
        </style>
    `
}

if(window.location.hostname === "www.youtube.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("YouTube")
}

else if(window.location.hostname === "www.facebook.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Facebook")
}

else if(window.location.hostname === "www.whatsapp.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("WhatsApp")
}

else if(window.location.hostname === "www.qq.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("腾讯网")
}

else if(window.location.hostname === "www.wechat.com/"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("WeChat")
}

else if(window.location.hostname === "https://qzone.qq.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("QZone")
}

else if(window.location.hostname === "www.tumblr.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Tumblr")
}

else if(window.location.hostname === "www.instagram.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Instagram")
}

else if(window.location.hostname === "https://twitter.com/"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Twitter")
}

else if(window.location.hostname === "https://tieba.baidu.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Baidu Tieba")
}

else if(window.location.hostname === "www.viber.com"){
    document.head.innerHTML = styles()
    document.body.innerHTML = errorPage("Viber")
}