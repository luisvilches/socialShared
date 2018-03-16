class SocialShare{
    constructor(obj){
        this.ogImage = obj.image;
        this.facebook();
        this.twitter();
        this.linkedin();
        this.setOG(this.ogImage)
    }

    facebook(){
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

    twitter(){
        var btnTw = document.querySelectorAll("[social=twitter]");
        btnTw.forEach(function(item,index){
            item.addEventListener("click", function(e){
                e.preventDefault();
                var arr = ["https://twitter.com/intent/tweet?"];

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


    linkedin(){
        var btnTw = document.querySelectorAll("[social=linkedin]");
        btnTw.forEach(function(item,index){
            item.addEventListener("click", function(e){
                e.preventDefault();
                var arr = ["https://www.linkedin.com/shareArticle?mini=true"];

                var url;var width;var height;var text;var via;var hashtag;var title;

                if( item.dataset.text !== "" && item.dataset.text != null && item.dataset.text != undefined){
                    text = "text="+item.dataset.text;
                    arr.push(text);
                }

                if( item.dataset.title !== "" && item.dataset.title != null && item.dataset.title != undefined){
                    title = "title="+item.dataset.title;
                    arr.push(title);
                }

                if( item.dataset.url === "" ||  item.dataset.url == null ||  item.dataset.url == undefined){
                    url = "url="+window.location.href;
                    arr.push(url);
                } else {
                    url = "url="+item.dataset.url;
                    arr.push(url);
                }

                if( item.dataset.summary !== "" && item.dataset.summary != null && item.dataset.summary != undefined){
                    via = "summary="+item.dataset.summary;
                    arr.push(via);
                }

                if( item.dataset.source !== "" && item.dataset.source != null && item.dataset.source != undefined){
                    hashtag = "source="+item.dataset.source;
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

    setOG(image){
        var a = document.querySelectorAll("meta");
        a.forEach(function(i){
            if(i.getAttribute("property") === "og:image"){
                i.setAttribute("content",image)
            }
        })

        
    }
}

var social = new SocialShare({
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa4d6XTp4NwEQ_-bqulBasEAUb9rhjjD1i4le9JgZNRXMdbG9u"
});