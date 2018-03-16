class SocialShare{
    constructor(obj){
        this.AppIDfb = obj.facebook.appId;
        this.FbInit(this.AppIDfb);
        this.findShareFB();
        this.findShareTW();
    }

    FbInit(appId){
        FB.init({
            appId            : appId,
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v2.12'
        });

        FB.AppEvents.logPageView();
    }

    findShareFB(){
        var btnTw = document.querySelectorAll("[social=facebook]");
        btnTw.forEach(function(item,index){
            item.addEventListener("click", function(e){
                e.preventDefault();
                var arr = ["http://facebook.com/sharer.php?"];

                var url;var width;var height;var text;var via;var hashtag;

                if( item.dataset.text !== "" && item.dataset.text != null && item.dataset.text != undefined){
                    text = "t="+item.dataset.text;
                    arr.push(text);
                }

                if( item.dataset.url === "" ||  item.dataset.url == null ||  item.dataset.url == undefined){
                    url = "u="+window.location.href;
                    arr.push(url);
                } else {
                    url = "u="+item.dataset.url;
                    arr.push(url);
                }

                if( item.dataset.width === "" ||  item.dataset.width == null ||  item.dataset.width == undefined){
                    width = "600";
                } else {
                    width = item.dataset.width;
                }

                if( item.dataset.height === "" ||  item.dataset.height == null ||  item.dataset.height == undefined){
                    height = "400";
                } else {
                    height = item.dataset.heigth;
                }

                var FaceWindow = window.open(arr.join("&"), '', 'height='+ height+',width='+width);
                if(FaceWindow.focus) { FaceWindow.focus(); }
                return false;
            })
        })
    }

    findShareTW(){
        var btnTw = document.querySelectorAll("[social=twitter]");
        btnTw.forEach(function(item,index){
            item.addEventListener("click", function(e){
                e.preventDefault();
                var arr = ["https://twitter.com/intent/tweet?"];//text=

                var url;var width;var height;var text;var via;var hashtag;

                if( item.dataset.text !== "" && item.dataset.text != null && item.dataset.text != undefined){
                    text = "text="+item.dataset.text;
                    arr.push(text);
                }

                if( item.dataset.url === "" ||  item.dataset.url == null ||  item.dataset.url == undefined){
                    url = "url="+window.location.href;
                    arr.push(url);
                } else {
                    url = "url="+item.dataset.url;
                    arr.push(url);
                }

                if( item.dataset.via !== "" && item.dataset.via != null && item.dataset.via != undefined){
                    via = "via="+item.dataset.via;
                    arr.push(via);
                }

                if( item.dataset.hashtag !== "" && item.dataset.hashtag != null && item.dataset.hashtag != undefined){
                    hashtag = "hashtags="+item.dataset.hashtag;
                    arr.push(hashtag);
                }

                if( item.dataset.width === "" ||  item.dataset.width == null ||  item.dataset.width == undefined){
                    width = "600";
                } else {
                    width = item.dataset.width;
                }

                if( item.dataset.height === "" ||  item.dataset.height == null ||  item.dataset.height == undefined){
                    height = "255";
                } else {
                    height = item.dataset.heigth;
                }

                var twitterWindow = window.open(arr.join("&"), '', 'height='+ height+',width='+width);
                if(twitterWindow.focus) { twitterWindow.focus(); }
                return false;
            })
        })
    }

    test(){
        //var arr = ["http://luisvilches.cl?","hashtags=juanito,perez","url=http://google.cl","via=luisvilche"];

        //console.log(arr.join('&'));

        var twitterWindow = window.open('http://facebook.com/sharer.php?u=http://google.cl', '', 'height=600,width=600');
                if(twitterWindow.focus) { twitterWindow.focus(); }
                return false;
    }
}

var social = new SocialShare({
    facebook:{
        appId:'196979100892953'
    }
})


//social.test();