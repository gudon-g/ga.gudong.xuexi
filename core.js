console.time('代码加载用时');//代码加载计时
auto.setMode("fast");

//初始化配置文件
var home;
var articleSwitch;
var shareSwitch;
var listen
var listenNumber;
var fixedSwitch;
var fixedtext;
var logx;
var checked;
var oneChecked;
var twoChecked;
var threeChecked;
var localchecked;
var timings;
var passw;
var storagea = storages.create("GOvalue");
for(value of storagea.get("Upload")) {
   switch (value.name) {
       case "其他":
           value.sound?device.setMusicVolume(0):device.setMusicVolume(30);
           if(value.bright){
               if (device.getBrightnessMode()) {
                    device.setBrightnessMode(0)
                }
                device.setBrightness(0)
           }
           logx=value.log
           home=value.shut
           break;
        case "定时":
            timings=value.checked
            passw=value.passw
            break;
        case "选读文章":
            articleSwitch=value.checked
            break;
        case "分享/发表观点":
            shareSwitch=value.checked
            break;
        case "视听学习":
            listen=value.checked
            listenNumber=value.number
            break;
        case "订阅":
            fixedSwitch=value.checked
            fixedtext=value.tetx
            break;
        case "答题":
            checked=value.checked
            oneChecked=value.oneChecked
            twoChecked=value.twoChecked
            threeChecked=value.threeChecked  
            break;
        case "本地频道":
            localchecked=value.checked   
            break; 
       default:
           break;
   }
}
//解锁手机
if(!device.isScreenOn()){
    device.wakeUpIfNeeded()
    sleep(2000)
    swipe(device.width/2,device.height-1,device.width/2,0,1000);
    sleep(2000)
    var regString = /[a-zA-Z]+/;
    if(device.product.indexOf("meizu") != -1&&!regString.test(passw)){
        var dd=textContains("密码").findOne().parent().children()
        var pas=dd.get(2).bounds()
        var pasWidth=pas.top+(pas.height()/4)-pas.top
        var half=pasWidth/2
        for(key of passw){
            switch (key) {
                case "0":
                    press(pas.centerX(),pas.top+pasWidth*3+half,200)
                    break;
                case "1":
                    press(pas.centerX()-pasWidth,pas.top+half,200)
                    break; 
                case "2":
                    press(pas.centerX(),pas.top+half,200)
                    break;
                case "3":
                    press(pas.centerX()+pasWidth,pas.top+half,200)
                    break;
                case "4":
                    press(pas.centerX()-pasWidth,pas.top+pasWidth+half,200)
                    break;
                case "5":
                    press(pas.centerX(),pas.top+pasWidth+half,200)
                    break;
                case "6":
                    press(pas.centerX()+pasWidth,pas.top+pasWidth+half,200)
                    break;
                case "7":
                    press(pas.centerX()-pasWidth,pas.top+pasWidth*2+half,200)
                    break;
                case "8":
                    press(pas.centerX(),pas.top+pasWidth*2+half,200)
                    break;
                case "9":
                    press(pas.centerX()+pasWidth,pas.top+pasWidth*2+half,200)
                    break;
                case "0":
                    press(pas.centerX(),pas.top+pasWidth*3+half,200)
                    break;
                default:
                    break;
            }
        }
    }else if(device.product.indexOf("meizu") != -1){
        setText(passw)
    }else{
        var d2tetx
        if(textContains("取消").exists()){
            d2tetx="取消";
        }else if(textContains("返回").exists()){
            d2tetx="返回";
        }else if(textContains("紧急").exists()){
            d2tetx="紧急";
        }
        textContains(d2tetx).waitFor()
        var d2=textContains(d2tetx).findOne()
        setText(passw)
        const en=d2.bounds()
        var arr=[[],[]];
        var h=0
        if(en.top<device.height-en.height()*5){
            //gesture(2000,[device.width,device.height-en.height()],[en.left,device.height-en.height()*2])
            for(var i=(device.height-en.height());i>(device.height-en.height()*3);i-=(device.height-(device.height-en.height()*2))/10){
                arr[0][h]=parseInt(i)
                h++
            }
            h=0
            for(var i=device.width;i>en.left;i-=(device.width-en.left)/10){
                arr[1][h]=parseInt(i)
                h++
            }
            for(var h=0;h<10;h++){
                press(arr[1][h],arr[0][h],200)
                if(!textContains(d2tetx).exists()){
                    break;
                }
            }
        }else{
            //swipe(device.width,en.top,en.left,en.top-en.height()*6,2000)
            for(var i=en.top;i>(en.top-en.height()*6);i-=(en.top-(en.top-en.height()*6))/10){
                arr[0][h]=parseInt(i)
                h++
            }
            h=0
            for(var i=device.width;i>en.left;i-=(device.width-en.left)/10){
                arr[1][h]=parseInt(i)
                h++
            }
            for(var h=0;h<10;h++){
                press(arr[1][h],arr[0][h],200)
                if(!textContains(d2tetx).exists()){
                    break;
                }
            }
        }
    }
}


//本地储存初始化
setScreenMetrics(device.width,device.height)
var storage = storages.create("Phonestorage");
var NOnotfound
var num=1;
var count=0;
var count2=0;
var count3=0;
var count4=1;
var count5=0;
var Reboot=0;
var Audi=0;

//获取系统时间
var da=new Date();
if(da.getMonth()+1<10){
    var yue="0"+(da.getMonth()+1);
}else{
    var yue=da.getMonth()+1;
}
if (da.getDate()<10) {
    var re="0"+da.getDate();
}else{
    var re=da.getDate();
}
var dates=da.getYear()+1900+"-"+yue+"-"+re;


//取消授权
var thread10
function cancelRoot(){
    if(thread10){
        thread10.interrupt()
    }
    thread10= threads.start(function(){
        if(!text("权限申请").waitFor()){
            console.log("取消授权")
            text("取消").findOne(2000).click();
        }else{
            console.log("没有授权提示")
        }
    });
    if(!text("推荐").waitFor()){
        thread10.interrupt()
    }
}

//取消取消
var thread11
function Cancelupgrade(){
    if(thread11){
        thread11.interrupt()
    }
    thread11= threads.start(function(){
        var count6=0;
        var off98 = setInterval(function(){
            if(id("parentPanel").exists()||id("dialog_cancel").exists()){
                console.log("取消升级")
                var qx=text("取消").findOne(2000)
                if(qx){
                    qx.click();
                }
                var offs=text("关闭").findOne(2000)
                if(offs){
                    offs.click();
                }
                count6++
            }
        }, 2000);
    });
}

//位置获取
function map(){
    var ding=className("android.widget.TextView").text("要闻").findOne().parent().parent();
    for(var i=0;i<ding.childCount();i++){
        let fu=ding.children().get(i).child(0);
        if(fu.text()=="推荐"){
            let index=fu.drawingOrder()
            return ding.children().get(index+2).child(0).text();
        }
    }
}

//登录任务
function Logintask(num){
    if(num){
        cancelRoot()
        console.log("进入主页");
        console.info("1：登录任务完成！！！")
    }else{
        OutHome()
        console.log("进入主页");
    }
}

// 随机广播
function Randomwide(){
    for(var i=0;i<random(1,4);i++){
        sleep(1000)
        console.warn("9：随机广播中！！！")
        var sji=className("android.support.v7.widget.RecyclerView").scrollable(true).findOne().children().get(1).bounds() 
        var tj4=className("android.widget.FrameLayout").indexInParent(3).findOnce().bounds()
        swipe(tj4.centerX(),tj4.centerY(),sji.left+sji.height()/2,sji.top+sji.height()/2,1000)
    }
    console.info("9：随机广播成功！！！")
}

//本地频道任务
function Localchannel(count){
    className("android.widget.TextView").text(map()).findOne().parent().click()
    sleep(2000)
    if(map()!="天津"){
        click("切换地区")
        sleep(2000)
        text("天津").findOne().parent().parent().click()
        sleep(2000)
    }
    console.info("2：本地频道任务完成！！！")
    if(listen){Audiovisual(1)}
                 
}


//视听学习*6
function Audiovisual(i){
        sleep(1000)
        if(count){
            className("android.widget.TextView").text(map()).findOne().parent().click();
            sleep(2000)
            if(map()!="天津"){
                click("切换地区")
                sleep(2000)
                text("天津").findOne().parent().parent().click()
                sleep(2000)
            }
        }
        className("android.widget.TextView").textContains("广播").findOne().parent().click();
        notfound("加载失败，点击重试","新闻广播加载失败！！！");
        text("听广播").waitFor();
        NOnotfound.interrupt()
        Reboot=0
        sleep(2000)
        if(count){
            Randomwide()
        }
        let off3=setInterval(function(){
            if(id("play_title").findOne().text().substring(0,2)=="最近"){
                id("lay_state_icon").findOne().child(0).click();
            }else{
                clearTimeout(off3)
            }
        },1000);
        sleep(1000)
        console.warn("3：视听学习正在运行中！！！");
        back();
}

//获取订阅号
function GetUiObject(){
    console.verbose("获取订阅号")
    var a=className("android.view.View").findOne().children().find(depth(16))
    var b=className("android.view.View").findOne().children().find(depth(12))
    if(!a.size()){
        a=b;
    }
    return {
            uname:a,
            age:a.size()%3?a.size()-(a.size()%3):a.size(),
            size:(a.size()%3?a.size()-(a.size()%3):a.size())/3
        }
}
    
//刷新订阅号
function RefreshUiObject(uname){
    if(storage.get("ArrSubdesc")/(uname.age+2)){
        for(var i=0;i<storage.get("ArrSubdesc")/(uname.age+2);i++){
            var Tindex=desc("推荐").findOne().bounds();
            var Hindex=uname.age-2
            var tj2=uname.uname.get(Hindex).bounds()
            var hhtp=uname.uname.get(Hindex).desc();
            swipe(device.width/2,tj2.centerY(),device.width/2,Tindex.top-2,1000)
            sleep(3000)
            if(hhtp==GetUiObject().uname.get(GetUiObject().age-2).desc()){
                console.warn("正在刷新订阅号!!!");
                i--;
            }else{
                
            }
        }
        console.info("刷新订阅号成功！");
    }
}

//点击订阅号
function ClickUiObject(b){
    var chq=b;
    var hqdc
    if(!storage.get("ArrSubdd")){
        storage.put("ArrSubdd",2);
        hqdc=2;
    }else{
        hqdc=storage.get("ArrSubdd")
    }
    for(var i = hqdc; i <(storage.get("ArrSubdd")+6);i+=3){
            sleep(1500)
            if(chq.get(i).click()){
                hqdc+=3
                console.verbose("订阅成功")
            }else{
                hqdc-=3
                console.error("订阅失败")
            }
    }
    //储存关注订阅号
    storage.put("ArrSubdd",hqdc);
}

//订阅*2
function subscription(){
    if(!text("积分").waitFor()){
        id("ll_comm_head_score").findOne().child(1).click();
        notfound("网络不给力","学习积分加载失败！！！")
        if(!text("已完成").waitFor()){   
            NOnotfound.interrupt()
            Reboot=0
            console.log("进入学习积分")
            if(text("订阅").findOne().parent().childCount()>1){
                text("订阅").findOne().parent().child(3).click();
            }else{
                text("订阅").findOne().parent().parent().child(3).click();
            }
            descContains("强国号").waitFor();
            console.warn("4：订阅正在运行中！！！")
            sleep(1000)
            desc(fixedtext).findOne().click()
            sleep(1000)
            //本地储存初始化
            if(!storage.contains("ArrSubdd")&&!storage.contains("ArrSubdesc")){
                storage.put("ArrSubdd",0);
                storage.put("ArrSubdesc",0);
                console.log("初始化本地储存Storages");
                storage.put("fixedtext","地方媒体");
            }
            if(fixedtext==storage.get("fixedtext")){

            }else{
                storage.put("ArrSubdd",0);
                storage.put("ArrSubdesc",0);
                console.log("初始化本地储存Storages");
                storage.put("fixedtext",fixedtext);
            }
          
            if(GetUiObject().uname.size()-storage.get("ArrSubdd")>=6){
                if(storage.get("ArrSubdesc")>=(GetUiObject().age+2)){
                    RefreshUiObject(GetUiObject())
                }
                var B=GetUiObject().uname
                ClickUiObject(B)
            }else{
                storage.put("ArrSubdesc",storage.get("ArrSubdesc")+(GetUiObject().age+2));
                RefreshUiObject(GetUiObject())
                storage.put("ArrSubdd",0);
                sleep(2000)
                ClickUiObject(GetUiObject().uname)
            }
        }
        
    }
    console.info("4：订阅任务完成！！！");
    sleep(1000);
    back();
    console.log("返回1")
    sleep(1000);
    back();
    console.log("返回2")
}    


//选读文章*12
function Optionalarticle(articleClick){
    if (!count) {
        app.startActivity({ 
            action:"android.intent.action.VIEW", 
            data:"dtxuexi://appclient/page/study_feeds?url=https%3A%2F%2Farticle.xuexi.cn%2Farticles%2Findex.html%3Fart_id%3D819213183151417447%26item_id%3D819213183151417447%26study_style_id%3Dfeeds_default%26ref_read_id%3D360c0ec5-2013-4280-aa00-d8e62da3930b%26pid%3D16907830515211140%26ptype%3D100%26reco_id%3D11397731440745886696_1621178952%26study_comment_disable%3D0%26study_video_continue%3Dundefined%26source%3Dshare%26share_to%3Dcopylinkc0ec5-2013-4280-aa00-d8e62da3930b%26pid%3D16907830515211140%26ptype%3D100%26reco_id%3D11397731440745886696_1621178952%26study_comment_disable%3D0%26study_video_continue%3Dundefined%26source%3Dshare%26share_to%3Dbrowser&xuexi_source=share",
            packageName:"cn.xuexi.android"
        });
    }else{
        articleClick.click();
    }
    notfound("网络不给力","文章加载失败！！！")
    if(!count){
        text("2021 年 03 月 15 日").waitFor()
    }else{
        textContains(da.getYear()+1900).waitFor()
    }
    NOnotfound.interrupt()
    Reboot=0
    sleep(2000);
    if (!count) {
        if(shareSwitch){
            //分享1
            console.warn("5：分享正在运行中！！！")
            var fen=id("TOP_LAYER_VIEW_ID").findOne().child(2)
            fen.click();
            sleep(2000)
            scrollForward()
            sleep(2000)
            text("复制链接").findOne().parent().click();
            console.info("5：分享完成！！！")
            //分享2
            sleep(2000)
            console.warn("5：分享正在运行中！！！")
            fen.click();
            sleep(2000);
            text("分享到短信").findOne().parent().click();
            sleep(2000)
            if(!getPackageName("信息")){
                recents()
                sleep(3000);
                app.launchApp("学习强国");
            }  
            console.info("5：分享完成！！！")
        }
    } 
    sleep(2000);
    var thread2 = threads.start(function(){
        var sun=articleSwitch?70:10;
        var off1=setInterval(function(){
            if(random(0,1)){
                scrollDown()
            }else{   
                scrollUp()
            }
            if(shareSwitch){
                if(currentPackage()!="cn.xuexi.android"&&getPackageName("信息")){
                    back();
                    sleep(1000);
                    if(text("确定").exists()){
                        click("确定")
                    }
                } 
            }
            console.warn("7：文章正在运行中！！！")
        }, 1000);
        setTimeout(function(){
            console.info("3：视听学习完成！！！\n7：选读文章完成！！！")
            clearInterval(off1);
            //发表观点
            if(!count){
                if(shareSwitch){
                    sleep(2000);
                    console.warn("6：发表观点正在运行中！！！")
                    className("android.widget.TextView").text("欢迎发表你的观点").findOne().click()
                    sleep(2000)
                    setText("        ")
                    sleep(2000);
                    click("发布");
                    console.info("6：发表观点完成！！！")
                }
            }
            sleep(1000)
            back();
            console.log("返回2")
            thread2.interrupt()
        }, sun* 1000);

    });
    text("推荐").waitFor()
}
 


//获取纪实页面文章
function FormulateText(i,a){
    if(a=="订阅"){
        var Ship=text(dates).drawingOrder(3).findOnce().parent().parent().parent().parent()
        if(Ship.clickable()){
            var source=Ship.parent().children()
        }else{
            var source=Ship.parent().parent().children()
        }
    }else if(a=="时评"||a=="纪实"){
        var Ship=text(dates).findOnce(a=="纪实"?0:i).parent().parent().parent()
        if(Ship.children().size()==3){ 
            var source=Ship.parent().parent().parent().children()
        }else if(Ship.children().size()==2){
            var source=Ship.parent().parent().children()
        }
    
    }else if(a=="强国征文"){
        var Ship=text(dates).drawingOrder(3).findOnce().parent().parent().parent().parent().parent()
        if(Ship.clickable()){
            var source=Ship.parent().children()
        }else{
            var source=Ship.children()
        }
       
    }
    i=!i?1:i;
    return {
        get:i==null?null:source.get(i),
        Sendbook:function (source,i){
            if(i!=null){
                var wz=source.get(i).child(0).children().size()
                if(wz==1){
                    var t2=source.get(i).child(0).child(0).child(0)
                    if(source.get(i).child(0).child(0).child(2).children().size()==1){
                        if(source.get(i).child(0).child(0).child(2).className()=="android.widget.LinearLayout"){
                            return !i?null:source.get(i).child(0).child(0).child(2).child(0).child(1)
                       }else{
                           return !i?null:source.get(i).child(0).child(0).child(1).child(0).child(1)
                       }
                    }else{
                        return !i?null:source.get(i).child(0).child(0).child(2).child(0).child(1)
                    }
                }else if(wz==2){
                    var sj=source.get(i).child(0).child(0)
                    return !i?null:source.get(i).child(0).child(1).child(0).child(1)
                }else if(wz==3){
                    var sj=source.get(i).child(0).child(0)
                    return i==null?null:source.get(i).child(0).child(2).child(0).child(1)
                }
                
            }else{
                return null;
            }
        }(source,i),
        size:source.size()
    }
}

//点击时评文章
function Currentreview(){
        if(listen){Audiovisual(1)}
        sleep(2000);
        var Current=className("android.widget.TextView").text("时评").findOne().parent()
        Current.click();
        notfound("加载失败，点击重试","时评页面加载失败")
        textContains(da.getYear()+1900+"-").waitFor();
        NOnotfound.interrupt()
        Reboot=0
        sleep(5000);
        if(!text(dates).exists()){
            console.log("文章没有更新")
            sleep(2000);
            console.log("切换频道")
            count2++;
        }else if(count==FormulateText(0,"时评").size-1){
            console.log("时评文章第1页面选读完成")
            sleep(2000);
            console.log("切换频道")
            count2++;
        }else if(dates!=FormulateText(0,"时评").Sendbook.text()){
            console.log("文章没有更新")
            sleep(2000);
            console.log("切换频道")
            count2++;
        }else if(text(dates).findOnce(count)){
            console.log("第"+count+"文章有更新")
            sleep(2000);
            Optionalarticle(FormulateText(count,"时评").get)
            sleep(2000);
        }else{
            console.log("文章没有更新")
            sleep(2000);
            console.log("切换频道")
            count2++;
        }
}

//点击纪实文章
function Nowadays(count2){
    var Formulate=className("android.widget.TextView").text("纪实").findOne().parent()
    Formulate.click();
    notfound("加载失败，点击重试","纪实页面加载失败")
    textContains(da.getYear()+1900+"-").waitFor();
    NOnotfound.interrupt()
    Reboot=0
    sleep(5000);
    if(!text(dates).exists()){
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count3++;
    }else if(count2==FormulateText(0,"纪实").size-1){
        console.log("纪实文章第1页面选读完成")
        sleep(2000);
        console.log("切换频道")
        count3++;
    }else if(dates!=FormulateText(0,"纪实").Sendbook.text()){
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count3++;
    }else if(text(dates).findOnce(count2)){
        console.log("第"+count2+"文章有更新")
        sleep(2000);
        Optionalarticle(FormulateText(count2,"纪实").get)
        sleep(2000);
    }else{
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count3++;
    }
}

//点击强国征文文章
function papers(count3){
    var Formulate=className("android.widget.TextView").text("强国征文").findOne().parent()
    Formulate.click();
    notfound("加载失败，点击重试","订阅页面加载失败")
    textContains(da.getYear()+1900+"-").waitFor();
    NOnotfound.interrupt()
    Reboot=0
    sleep(5000);
    if(!text(dates).exists()){
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count4++;
    }else if(count3==FormulateText(1,"强国征文").size){
        console.log("强国征文文章第1页面选读完成")
        sleep(2000);
        console.log("切换频道")
        count4++;
    }else if(dates!=FormulateText(1,"强国征文").Sendbook.text()){
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count4++;
    }else if(text(dates).findOnce(count3)){
        console.log("第"+count3+"文章有更新")
        sleep(2000);
        Optionalarticle(FormulateText(count3,"强国征文").get)
        sleep(2000);
    }else{
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count4++;
    }
}

//点击订阅文章
function Lick(count4){
    var Formulate=className("android.widget.TextView").text("订阅").findOne().parent()
    Formulate.click();
    notfound("加载失败，点击重试","订阅页面加载失败")
    textContains(da.getYear()+1900+"-").waitFor();
    NOnotfound.interrupt()
    Reboot=0
    sleep(5000);
    if(!text(dates).exists()){
        console.log("1文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count5++;
    }else if(count4==FormulateText(2,"订阅").size){
        console.log("纪实文章第1页面选读完成")
        sleep(2000);
        console.log("切换频道")
        count5++;
    }else if(dates!=FormulateText(2,"订阅").Sendbook.text()){
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count5++;
    }else if(text(dates).findOnce(count4-2)){
        console.log("第"+(count4-1)+"文章有更新")
        sleep(2000);
        Optionalarticle(FormulateText(count4,"订阅").get)
        sleep(2000);
    }else{
        console.log("文章没有更新")
        sleep(2000);
        console.log("切换频道")
        count5++;
    }
}


//网络错误
function notfound(title,logs){
    NOnotfound= threads.start(function(){
        text(title).waitFor()
        console.error(logs);
        console.error("等待自动重新加载!!!");
        sleep(2000);
        Reboot++
        if(Reboot>=3){
            console.error("加载失败!!!\n脚本停止!!!");
            exit()
        }else{
            console.error("第"+Reboot+"次自动重新加载!!!");
            if(text("刷新").exists()){
                text("刷新").click();
            }else{
                text(title).findOne().parent().click();
            }
        }
        sleep(10000);
        notfound(title,logs);
    });
}

//获取类型/数量/坑/题目1/题目2/字数/第几题
function Typesof(i,a){
    var source=text("查看提示").findOne().parent().parent().children()
    var qantity=source.get(0).child(1).text()
    return {
        origin:source,
        types:source.get(0).child(0).text(),
        qantity:parseInt(qantity.substring(qantity.lastIndexOf("/")+1,qantity.length)),
        problem:source.get(1).text(),
        topic1:!i?null:source.get(1).child(0).text(),
        topic2:!i?null:source.get(1).child(2).text(),
        fill:i==2?source.get(1).child(a).children().size():null,
        qantity2:parseInt(qantity.substring(0,qantity.lastIndexOf("/"))),
    }
}
//选择个数/按钮位置/按钮内容
function Select(i){
    var source=className("android.widget.ListView").findOne().children()
    var button=i==-2?null:source.get(i).child(0)
    return{
        origin:source,
        size:source.size(),
        button:i==-2?null:button,
        butext:i==-2?null:button.child(2).text()
    }
}
//答题类型
function Answertype(){}
//提示/答案/关闭提示
function Prompt(){
        var select=text("提示").findOne().parent()
        var origin
        if(Typesof().types.includes("(10分)")){
            origin=select.parent().children().get(1)
        }else{
            if(select.parent().parent().children().get(2).child(1).child(0).children().size()){
                origin=select.parent().parent().children().get(2).child(1).child(0)
            }else{
                origin=select.parent().parent().children().get(2).child(1)
            }
        }
    return{
        origin:select,
        answer:origin.child(0).text(),
        close:select.children().get(1)
    }
}
//进入任务列表
function integral(){
    text("积分").waitFor()
    id("ll_comm_head_score").findOne().child(1).click();
    notfound("网络不给力","学习积分加载失败！！！")
    text("已完成").waitFor()
    NOnotfound.interrupt()
    Reboot=0
    console.log("进入学习积分")
}

//获取当月第几周
var getMonthWeek = function (a, b, c) {
    /**
    * a = d = 当前日期
    * b = 6 - w = 当前周的还有几天过完(不算今天)
    * a + b 的和在除以7 就是当天是当前月份的第几周
    */
    var date = new Date(a, parseInt(b) - 1, c),
        w = date.getDay(),
        d = date.getDate();
    if(w==0){
        w=7;
    }
    function datare(){
        switch (Math.ceil((d + 6 - w) / 7)) {
            case 1:
                return"一"
                break;
            case 2:
                return"二"
                break;
            case 3:
                return"三"
                break;
            case 4:
                return"四"
                break;
            case 5:
                return"五"
                break;                
            default:
                break;
        }
    }
    var config={
        getMonth:date.getMonth()+1,
        getYear:date.getFullYear(),
        getWeek:datare(),
        DateString:date.getFullYear()+"年"+(date.getMonth()+1)+"月第"+datare()+"周答题"
    }
    return config;
}

//周转换
function week(z){
    var a
    switch (z) {
        case "五":
            a="四"
            break;
        case "四":
            a="三"
            break;
        case "三":  
            a="二"
            break;
        case "二":
            a="一"
            break;
        case "一":
            a="五"
            break;
        default:
            break;
    }
    return a;
}   

//多选题
function Multiplechoice(lb){
    console.log("多选题")
    var pit=(Typesof().problem.split(' ')).length-1;
    if(pit==Select(-2).size){
        console.verbose("1：咕咚大法之全都要算法")
        for(var i=0;i<pit;i++) {
            Select(i).button.click()
            sleep(700)
        }
    }else{
        console.log("2：咕咚大法之地毯式搜索算法")
        var arr =new Array(Select(-2).size)
        for(var i=0;i<arr.length;i++) {
            arr[i]=Select(i).butext
        }
        sleep(700)
        click("查看提示");
        sleep(700)
        var origin=Prompt().origin
        var answer=Prompt().answer
        for(var i=0;i<arr.length;i++) {
            if(!i){
                origin.children().get(1).click();
            }
            if(answer.indexOf(arr[i]) != -1){
                sleep(1200)
                Select(i).button.click()
            }else{

            }
        }
    }
    sleep(1200)
    var timuss=Typesof()
    if(Typesof().types.includes("(10分)")){
        if(lb==timuss.qantity){
            click("完成");
        }else{
            click("下一题");
        }
    }else{
        click("确定");
        sleep(700)
        if(lb==timuss.qantity2&&lb==timuss.qantity){
            click("完成");
        }else if(lb==timuss.qantity2){
            click("下一题");
        }
    }
    console.log("多选题完成")
}

//单选题
function Singlechoice(lb){
    console.log("单选题")
    sleep(700)
    var arr =new Array(Select(-2).size)
    for(var i=0;i<arr.length;i++) {
        if(Select(i).butext.indexOf(" ")!= -1){
            !i?console.info("3：咕咚大法之索引大小算法"):null;
            arr[i]=new Array();
            for(var j=0;j<(Select(i).butext.split(' ')).length-1;j++){
                arr[i][j]=Select(i).butext.split(" ")[j];
            }  
        }else{
            !i?console.log("2：咕咚大法之地毯式搜索算法"):null;
            arr[i]=Select(i).butext
        }
    }
    sleep(700)
    click("查看提示");
    sleep(700)
    if(Prompt().answer==""){
        var answer=answerid.child(0).child(0).text()+answerid.child(0).child(1).text()
    }else{
        var answer=Prompt().answer
    }
    if(arr[0] instanceof Array){
        var daan=0;
        var arr2 =new Array(arr[0].length)
        for(var i=0;i<arr.length;i++){
            for(var j=0;j<arr[i].length;j++){
                if(answer.indexOf((arr[i][j]))!=-1){
                    if(daan<arr[0].length){
                        arr2[daan]=answer.indexOf((arr[i][j]));
                    }else{
                        break;
                    }
                    daan++
                }
            }
        }
        var min
        var max;//遍历数组，默认arr中的某一个元素为最大值，进行逐一比较
        for(var i=0; i<arr2.length; i++){
            for(var j=i; j<arr2.length;j++){
                if(arr2[i]>arr2[j]){
                min=arr2[j];
                arr2[j]=arr2[i];
                arr2[i]=min;
                }
            }
        }
    }
    var false4=0;
    for(var i=0;i<arr.length;i++) {
        if(!i){
            Prompt().close.click();
        }
        if(arr[i] instanceof Array){
            var xz=""
            for(var j=0;j<arr[i].length;j++){
            xz+=answer.indexOf(arr[i][j]);
            }
            if(arr2.toString().replace(/,/g, "")==xz){
                sleep(1200)
                Select(i).button.click()
                break;
            }
        }else{
                if(answer.indexOf(arr[i]) != -1){
                    sleep(1200)
                    Select(i).button.click()
                    i==arr.length
                    break;
                }else{
                    false4++
                    if(false4==4){
                        for(var j=0;j<arr.length;j++){
                            var text2=arr[j].substring(arr[j].length-2,arr[j].length)
                            if(answer.indexOf(text2) != -1){
                                sleep(1200)
                                Select(i).button.click()
                                i==arr.length
                                break;
                            }else{
                                false4++
                                if(false4==8){
                                    console.log("8：咕咚大法之运气算法")
                                    sleep(1200)
                                    Select(random(1,arr.length)).button.click()
                                    i==arr.length
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    sleep(1200)
    var timuss=Typesof()

    if(Typesof().types.includes("(10分)")){
        if(lb==timuss.qantity){
            click("完成");
        }else{
            click("下一题");
        }
    }else{
        click("确定");
        sleep(700)
        if(lb==timuss.qantity2&&lb==timuss.qantity){
            click("完成");
        }else if(lb==timuss.qantity2){
            click("下一题");
        }
    }
    console.log("单选题完成");
}

//填空题
function fillintheblank(lb){
    console.log("填空题")
    var d1=Typesof(1).topic1
    var t1=0;
    var t2=0;
    var t4=0;
    if(d1.charAt(d1.length-1)=="“"){
        t4=1
        console.warn("4：咕咚大法之双引号算法")
        var d2=Typesof(1).topic2.substring(0,Typesof(1).topic2.lastIndexOf("”")+1);
    }else if(d1.charAt(d1.length-1)=="，"){
        console.error("5：咕咚大法之逗号算法")
        var d2=d1.substring(d1.length-3,d1.length);
    }else if(d1.lastIndexOf("，")==-1||Typesof(1).topic2.charAt(0)=="。"){
        console.log("6：咕咚大法之名词算法")
        if(d1.charAt(d1.length-1)=="和"||d1.charAt(d1.length-1)=="是"){
            t2=1;
            d2="&";
        }else if(d1.charAt(d1.length-1)=="“"){
            var d2=d1.substring(d1.lastIndexOf("“")+1,d1.length)
        }else{
            var d2=d1.substring(d1.length-3,d1.length)
        }
    }else{
        t=1
        if(d1.lastIndexOf("。")<d1.lastIndexOf("，")){
            console.error("5：咕咚大法之逗号算法")
            if(d1.substring(d1.lastIndexOf("，")+1,d1.length).length>=4){
                var d2=d1.substring(d1.lastIndexOf("，")+1,d1.length)
            }else{
                var d2=d1.substring(d1.lastIndexOf("，")-5,d1.length)
            }
        }else  if(d1.lastIndexOf("。")){
            console.log("6：咕咚大法之句号算法")
            if(!d1.lastIndexOf("，")){
                t1=1   
            }
            if(d1.lastIndexOf("。")==(d1.length-1)){
                var d2=d1.substring(d1.length-5,d1.length)
            }else{
                var d2=d1.substring(d1.lastIndexOf("。")+1,d1.length)
            }
        }
    }
    sleep(700)
    click("查看提示");
    sleep(700)
    text("提示").waitFor()
    var origin=Prompt().origin
    var answer=Prompt().answer
    sleep(700)
    Prompt().close.click();
    if(answer.indexOf(d2)==-1){
        var d4=answer.indexOf(d2.substring(d2.length-4,d2.length))
    }else{
        var d4=answer.indexOf(d2)
    }
    var d6=1;
    var d7
    for(var i=0;i<Typesof(0).origin.get(1).children().size();i++){
        if(Typesof(2,i).fill){
            d6=Typesof(2,i).fill-d6
            d7=i;
        }
    }
    var wu=""
    if(Prompt().answer=="请观看视频"){
        console.log("7：咕咚大法之没办法")
        for(var i=0;i<d6;i++){
            wu+=i;
        }
        setText(0,wu);
        sleep(1200)
    }else{
        if(t2){
            var d5=answer.substring(0,Typesof(2,d7).fill-1);
        }else if(t4){
            var d5=answer.substring(d4-(Typesof(2,d7).fill-1),d4);
        }else{
            var d5=answer.substring(d4+d2.length,d4+d2.length+Typesof(2,d7).fill-1);
        }    
    }
    if(d5){
        setText(0,d5);
    }else{
        setText(0,wu);
    }
    sleep(1200)
    var timuss=Typesof()
    if(Typesof().types.includes("(10分)")){
        if(lb==timuss.qantity){
            click("完成");
        }else{
            click("下一题");
        }
    }else{
        click("确定");
        sleep(700)
        if(lb==timuss.qantity){
            click("完成");
        }else if(lb==timuss.qantity2){
            click("下一题");
        }
    }
    
    console.log("填空题完成")
}
//开始自动答题
function Automaticanswer(){
    let lb=0
    let ln=Typesof().qantity
    while (lb<ln) {
        lb++
        sleep(1200)
        switch (Typesof().types) {
            case "多选题":
            case "多选题 (10分)":
                Multiplechoice(lb)
                break;
            case "单选题":
            case "单选题 (10分)":  
                Singlechoice(lb)
                break;
            case "填空题":
            case "填空题 (10分)":    
                fillintheblank(lb)
                break;
            default:
                break;
        }
    }
    console.log("退出")
    var daiti2= threads.start(function(){
        text("网络开小差～请稍后试试").waitFor()
        daiti.interrupt()
        click("确定");
        sleep(2000)
        back();
        console.log("网络错误")
        sleep(2000)
        integral()
    })
    var daiti= threads.start(function(){
        className("android.view.View").textContains("本次").waitFor()
        daiti2.interrupt()
        console.log("答题完毕!!!")
        back();
        sleep(2000)
        if(className("android.view.View").textContains("月").exists()||textContains("查看解析").exists()){
            sleep(2000)
            back();
        }
    })
    text("已完成").waitFor()
}

//答题部分
function Tasktype(title){
    //text(title).findOne().parent().parent().child(3).click();
    if(text(title).findOne().parent().childCount()>1){
        text(title).findOne().parent().child(3).click();
    }else{
        text(title).findOne().parent().parent().child(3).click();
    }
    notfound("网络不给力","学习积分加载失败！！！")
    if(title=="每周答题"){
        var getDate=getMonthWeek(da.getYear()+1900,yue,re);
        sleep(2000)
        if(text(getDate.DateString).exists()&&text(getDate.DateString).findOnce().parent().children().size()!=3){
            text(getDate.DateString).findOne().parent().click()
        }else{
            textContains("月").waitFor();
            console.log(getDate.DateString+"没更新")
            function Weeklytask(i){
                var select=className("android.view.View").findOnce().find(textContains("周答题"))
                return{
                    origin:select,
                    size:i!=-1?select.get(i).parent().children().size():null,
                    click:i!=-1?select.get(i).parent():null,
                    text:i!=-1?select.get(i).text():null
                }   
            }
             
            for(var i=0;i<=Weeklytask(-1).origin.size();i++){
                if(Weeklytask(i).size!=3&&Weeklytask(i).click.children().get(Weeklytask(i).size-1).text()=="未作答"){
                    // console.log(Weeklytask(i).click.children().get(Weeklytask(i).size-1).text())
                    Weeklytask(i).click.click();
                    break;
                }else if(i==(Weeklytask(-1).origin.size()-1)){
                    className("android.view.View").scrollable(true).findOne().scrollForward()
                    console.log("滑动：");
                    i--
                    sleep(2000)
                }
            }
            
        }   
    }else if(title=="专项答题"){
        textContains("答题").waitFor();
        sleep(1200)
        function Monthlymission(sum){
            var select=textContains(da.getYear()+1900+"/").findOne().parent().children();
            var size=sum!=-1?select.get(sum).children().size():null
            return{
                origin:select,
                size:size,  
                button:sum!=-1?select.get(sum).children().get(size-1):null
            }    
        }
        var dat=da.getYear()+1900+"/"+yue+"/"
        
        if(text(dat+re).exists()&&text(dat+re).findOne(4000).parent().child(2).children().size()!=3){
            console.log("1")
            text(dat+re).findOnce().parent().child(2).child(0).click();
        }else if(text(dat+(re==1?28:re-1)).exists()&&text(dat+(re==1?28:re-1)).findOne(4000).parent().child(2).children().size()!=3) {
            console.log("2")
            text(dat+(re==1?28:re-1)).findOnce().parent().child(2).child(0).click();
        }else{
            console.log("3")
            for(var i=2;i<=Monthlymission(-1).origin.size()/3+1;i+=3){
                if(Monthlymission(i).size!=3){
                    Monthlymission(i).button.click();
                    break;
                }else if(i>=(Monthlymission(-1).origin.size()/3)){
                    className("android.view.View").scrollable(true).findOne().scrollForward()
                    i-=3
                    sleep(2000)
                }else if(i>=300){
                    console.log("以超出aoutjs的分析范围");
                    back(); 
                    sleep(1000)
                    back(); 
                    sleep(1000)
                    text("推荐").waitFor();
                    console.error("返回桌面");
                    sleep(2000);
                    console.error("运行完毕");
                    console.hide()//隐藏控制台
                    exit()
                    break;
                }
            }
        }  
    }
    text("查看提示").waitFor()
    NOnotfound.interrupt()
    Automaticanswer()
}
//返回主页
function OutHome(){
    Cancelupgrade()
    var thread13= threads.start(function(){
        var off16=setInterval(function(){
            if(text("推荐").exists()){
                clearInterval(off16)
                thread13.interrupt()
            }else{
                back();
                sleep(1000);
                if(!text("推荐").exists()){
                    click("退出")
                }
            }
        },2000)
    });
    cancelRoot()
    sleep(2200);

}
console.timeEnd('代码加载用时');
console.info("输入no关闭脚本");
//控制台
console.show()//打开控制台
console.setPosition(0,200);//设置控制台出现位置
var thread12= threads.start(function(){
    var off99=setInterval(function(){
        if(console.rawInput()=="no"){
            clearInterval(off99);
            toast("脚本以关闭");
            console.error("脚本以关闭")
            setTimeout(function(){
                console.hide()//隐藏控制台
                exit()
            },3000);
        }else{
            console.info("输入no关闭脚本");
            toast("输入no停止脚本");
        }
    },1000);
});
if(logx){
    sleep(1000)
    console.hide()//关闭控制台
    sleep(1000)
    console.show()//打开控制台
}else{
    sleep(1000)
    console.hide()//关闭控制台
}
//启动学习强国
if(currentPackage()=="com.gudong.xuexi"||currentPackage()=="org.autojs.autojs"||timings){
    launch("cn.xuexi.android")
    sleep(2000)
    click(device.width/2,device.height-100)
    waitForPackage("cn.xuexi.android")
    if(text("推荐").exists()&&currentPackage()=="cn.xuexi.android"){
        num=1
    }else{
        num=0;
    }
    Logintask(num)//登录任务
}else if(currentPackage()!="com.gudong.xuexi"||currentPackage()!="org.autojs.autojs"){
    console.error("！！去在主页运行或者关闭软件再运行");
    console.error("！！脚本已经停止");
    exit()
}

Cancelupgrade()//取消任何弹窗
//开始执行任务
if(text(map()).exists()||num?!text(map()).waitFor():false){
    num=1;
    if(localchecked){
        Localchannel();//本地频道
    }
    if(fixedSwitch){
        subscription();//订阅
        sleep(1000)
    }
    if(articleSwitch||shareSwitch){
        Optionalarticle()//选读文章
    }
}else{
    
}



//循环操作选读文章*12
if(articleSwitch||listen){
    for(var i=0;i<listenNumber;i++){
    text("推荐").waitFor()
    if(count2==1||count3==1){
        i--
        console.error(count+"重新运行！！！");
    }else{
        count++;
        console.error(count+"轮运行完毕");
    }
    console.log("*******************************")
        //选读文章*12/视听学习*6
        if(articleSwitch){
            console.log("选读文章第"+(count+1)+"开始")
            sleep(2000);
            if(!count2){
                Currentreview()
            }else if(!count3){
                if(count2>1){
                    if(listen){Audiovisual(1)}
                    sleep(2000);
                    console.log("时评文章没有更新")
                    sleep(2000);
                    console.log("切换频道")
                }
                Nowadays(count2)
                sleep(2000);
                count2++;
            }else if(count4==1){
                if(count3>1){
                    if(listen){Audiovisual(1)}
                    sleep(2000);
                    console.log("纪实文文章没有更新")
                    sleep(2000);
                    console.log("切换频道")
                }
                papers(count3)
                sleep(2000);
                count3++;
            }else if(!count5){
                if(count4>2){
                    if(listen){Audiovisual(1)}
                    sleep(2000);
                    console.log("强国征文章没有更新")
                    sleep(2000);
                    console.log("切换频道")
                }
                Lick(count4)
                sleep(2000);
                count4++;
            }
        }else if(listen){
            console.log("视听学习第"+(count+1)+"开始")
            Audiovisual(1)
            var off15
            var thread97= threads.start(function(){
                off15=setInterval(function(){
                    console.warn("3：视听学习正在运行中！！！");
                },3000)
            });
            sleep(70000);
            clearInterval(off15);
            thread97.interrupt()
        }
    }
}
sleep(2000)
if(checked){//答题
    text("推荐").waitFor();
    integral()
    if(oneChecked){
        Tasktype("每日答题")
        sleep(2000)
    }
    if(twoChecked){
        Tasktype("每周答题")
        sleep(2000)
    }
    if(threeChecked){
        Tasktype("专项答题")
        sleep(2000)
        back(); 
        text("推荐").waitFor();
    }
    console.log("任务全部完成！！！！！！！！！")
}
sleep(2000);
back();
if(home){
    console.error("关闭学习强国");
    sleep(1000);
    if(parseInt(device.release)<10){
        console.error("返回桌面");
        home();
        sleep(2000); 
    }else{
        console.error("返回软件");
        back();
        sleep(2000); 
    }
}
console.error("运行完毕");
var thread9= threads.start(function(){
    setTimeout(function(){
        console.hide()//隐藏控制台
        if(home){
            exit()
        }
    },5000);  
});
