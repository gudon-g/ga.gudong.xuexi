"ui";//Ui初始化

var notify="\n\t修复在特定页面无法执行问题\n\t感谢\"不一样的性格\"反馈的Bug\n\t完善定时功能"//更新日志
var version="1.0.3 daily"
//导入外部js
require('/storage/emulated/0/脚本/自定义控件-Switch-1.0.0.1/widget-switch-se7en');
//require('./widget-switch-se7en');

//自定义方形按钮
var ColoredButton = (function() {
    util.extend(ColoredButton, ui.Widget);
    function ColoredButton() {
        ui.Widget.call(this);
        this.defineAttr("color", (view, name, defaultGetter) => {
            return this._color;
        }, (view, name, value, defaultSetter) => {
            this._color = value;
            view.attr("backgroundTint", value);
        });
        this.defineAttr("onClick", (view, name, defaultGetter) => {
            return this._onClick;
        }, (view, name, value, defaultSetter) => {
            this._onClick = value;
        });
    }
    ColoredButton.prototype.render = function() {
        return (
            <button textSize="16sp" style="Widget.AppCompat.Button.Colored" w="auto"/>
        );
    }
    ColoredButton.prototype.onViewCreated = function(view) {
        view.on("click", () => {
            if (this._onClick) {
                eval(this._onClick);
            }
        });
    }
    ui.registerWidget("colored-button", ColoredButton);
    return ColoredButton;
})();

//UI界面
ui.layout(
    <drawer id="drawer">
        <vertical >
            <appbar bg="#FF4537">
                <toolbar id="toolbar" title="Gu Dong"/>
                <tabs id="tabs" tabIndicatorColor="#ffffff"/>
            </appbar>
            <viewpager id="viewpager" bg="#F2F2F2">
                <frame  w="*" h="*" >
                    <ScrollView> 
                        <vertical>
                            <frame id="go" checked='true' w="*" h="300" >
                                <canvas id="board" marginLeft="*"/>
                            </frame>
                            <frame w="*" h="*">
                                <canvas id="board2" w="*" h="291"/>
                                <vertical>
                                    <frame>
                                        <widget-switch-se7en id="gobu" text='选读文章' padding='30 0'trackColor="#FF4537" checked='true' marginTop="20" />
                                    </frame>
                                    <frame> 
                                        <widget-switch-se7en id="gobu1" text='视听学习' padding='30 0'trackColor="#FF4537" checked='true' marginTop="24"/>
                                    </frame>
                                    <frame> 
                                        <widget-switch-se7en id="gobu2" text='答题' padding='30 0'trackColor="#FF4537" checked='true' marginTop="24"/>
                                    </frame>
                                    <frame> 
                                        <widget-switch-se7en id="gobu3" text='订阅' padding='30 0'trackColor="#FF4537" checked='true' marginTop="24"/>
                                    </frame>
                                    <frame> 
                                        <widget-switch-se7en id="gobu4" text='分享/发表观点' padding='30 0'trackColor="#FF4537" checked='true' marginTop="24"/>
                                    </frame>
                                    <frame> 
                                        <widget-switch-se7en id="gobu5" text='本地频道' padding='30 0'trackColor="#FF4537" checked='true' marginTop="24"/>
                                    </frame>
                                </vertical>
                            </frame>
                            <frame> 
                                <text id="ci" text="运行次数：0" layout_gravity="center" w="auto" h="auto" padding="0 2"/>
                            </frame>
                            <frame> 
                            </frame>
                                <text text="2021~2022 1.0.3 daily " layout_gravity="center" w="auto" h="auto" padding="0 2"/>
                            <frame>
                                <text text="@咕咚一键学习强国" layout_gravity="center" w="auto" h="auto" padding="0 2"/>
                            </frame>
                        </vertical>
                    </ScrollView> 
                </frame>
                <frame>
                    <ScrollView> 
                        <vertical> 
                            <horizontal id="column" w="*" h="76dp" >
                                <grid id="icons" w="auto" h="auto" layout_gravity="left|center" marginLeft="8">
                                    <img src="@drawable/ic_alarm_on_black_48dp" bg="?selectableItemBackgroundBorderless" w="24"/>
                                </grid>
                                <text text="定时：" layout_gravity="left|center"  w="auto" h="auto" textSize="20sp" textColor="black"/>
                            </horizontal>    
                            <frame> 
                                <timepicker id = "timepicker" timePickerMode="spinner" setCurrentHour="10"/>
                            </frame>
                            <colored-button text="确定" onClick="time()" color="#FF4537" layout_gravity="top|center" w="*" margin="30 0"/>
                            <horizontal id="column" w="*" h="76dp" >
                                <grid id="icons5" w="auto" h="auto" layout_gravity="left|center" marginLeft="8">
                                    <img src="@drawable/ic_all_inclusive_black_48dp" bg="?selectableItemBackgroundBorderless" w="24"/>
                                </grid>
                                <text text="文章/视听次数：" layout_gravity="left|center"  w="auto" h="auto" textSize="20sp" textColor="black" />
                            </horizontal>
                            <horizontal id="column" margin="30 0" w="auto">
                                <text text="输入次数："  w="auto" h="auto" textSize="18sp" textColor="black"/>
                                <input id="text1" inputType="number" hint="默认12次" />
                                <colored-button text="确定" onClick="frequency()" color="#FF4537"/>
                            </horizontal> 
                            <horizontal id="column" w="*" h="76dp" >
                                <grid id="icons2" w="auto" h="auto" layout_gravity="left|center" marginLeft="8">
                                    <img src="@drawable/ic_border_color_black_48dp" bg="?selectableItemBackgroundBorderless" w="24"/>
                                </grid>
                                <text text="答题：" layout_gravity="left|center"  w="auto" h="auto" textSize="20sp" textColor="black"/>
                            </horizontal>
                            <frame> 
                                <widget-switch-se7en id="solve" text='每日答题' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame>
                            <frame> 
                                <widget-switch-se7en id="solve1" text='每周答题' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame> <frame> 
                                <widget-switch-se7en id="solve2" text='专项答题' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame>
                            <horizontal id="column" w="*" h="76dp" >
                                <grid id="icons3" w="auto" h="auto" layout_gravity="left|center" marginLeft="8">
                                    <img src="@drawable/ic_add_box_black_48dp" bg="?selectableItemBackgroundBorderless" w="24"/>
                                </grid>
                                <text text="订阅：" layout_gravity="left|center"  w="auto" h="auto" textSize="20sp" textColor="black"/>
                            </horizontal>
                            <horizontal id="column" margin="30 0">
                                <text text="类型："  w="auto" h="auto" textSize="18sp" textColor="black"/>
                                <spinner id="sp2" entries="地方媒体|上新|主要央媒|行业媒体|机关企事|党刊|高校|推荐|社会机构" spinnerMode="dialog"/>
                                <colored-button text="确定" onClick="Order()" color="#FF4537"/>
                            </horizontal> 
                            <horizontal id="column" w="*" h="76dp" >
                                <grid id="icons4" w="auto" h="auto" layout_gravity="left|center" marginLeft="8">
                                    <img src="@drawable/ic_widgets_black_48dp" bg="?selectableItemBackgroundBorderless" w="24"/>
                                </grid>
                                <text text="其他：" layout_gravity="left|center"  w="auto" h="auto" textSize="20sp" textColor="black"/>
                            </horizontal>
                            <frame> 
                                <widget-switch-se7en id="sound" text='静音' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame>
                            <frame> 
                                <widget-switch-se7en id="timing" text='定时' padding='30 8'trackColor="#FF4537" checked='flase' />
                            </frame>
                            <frame> 
                                <widget-switch-se7en id="log" text='控制台' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame>
                            <frame> 
                                <widget-switch-se7en id="bright" text='息屏运行' padding='30 8'trackColor="#FF4537" checked='flase' />
                            </frame>
                            <frame> 
                                <widget-switch-se7en id="shut" text='关闭软件' padding='30 8'trackColor="#FF4537" checked='true' />
                            </frame>
                        </vertical>
                    </ScrollView> 
                </frame>
            </viewpager>
        </vertical>
        <vertical layout_gravity="left" bg="#ffffff" w="280">
          <img w="280" h="200" scaleType="fitXY" src="https://gitee.com/flsdfhij/bloglmage/raw/master/img/gudong2.jpg"/>
            <list id="menu">
                <horizontal bg="?selectableItemBackground" w="*">
                    <img w="50" h="50" padding="16" src="{{this.icon}}" tint="{{color}}"/>
                    <text textColor="black" textSize="15sp" text="{{this.title}}" layout_gravity="center" />
                </horizontal>
            </list>
        </vertical>
    </drawer>
);

//启动按钮ui
var scheduleA=0;
var scheduleB=0;
var schColorA="#FF4537"
var schColorB="#F2F2F2"
var schtext="启动";

var threada=threads.start(function(){
    var dw=parseInt(device.width/100*55.55555555555556);
    var dh=dw;
    ui.board.on("draw",function(canvas){
        var w =canvas.getWidth();
        var h = canvas.getHeight();
        var paint = new Paint();
        paint.setAntiAlias(true);
        canvas.drawColor(colors.parseColor("#F2F2F2"));
        if(parseInt(device.release)<10){
            paint.setColor(colors.parseColor(schColorA));
        }else{
            paint.setColor(colors.RED);
        }
        var left=Math.floor((w-dw)/2);
        var top=Math.floor((h-dh)/2);
        var right=Math.floor(w-(w-dh)/2);
        var bottom=Math.floor(h-(h-dw)/2);
        canvas.drawArc(left, top, right, bottom, 270,scheduleA,true,paint)
        if(parseInt(device.release)<10){
            paint.setColor(colors.parseColor(schColorB));
        }else{
            paint.setColor(colors.RED);
        }
        canvas.drawArc(left-1, top-1, right+1, bottom+1, 270,scheduleB,true,paint)
        if(parseInt(device.release)<10){
            paint.setColor(colors.parseColor("#ffffff"));
        }else{
            paint.setColor(colors.RED);
        }
        canvas.drawCircle(w/2, h/2, (283/(1080/w)), paint)
        paint.setARGB(255,251,76,77)
        canvas.drawCircle(w/2, h/2, (266/(1080/w)), paint)
        paint.setARGB(255,255,255,255)
        paint.setTextSize(120/(1080/w));//字体大小
        paint.setFakeBoldText(true); //字体加粗
        canvas.drawText(schtext,w/2-120/(1080/w),h/2+30, paint);
    }) 
    //开始小按钮ui
    ui.board2.on("draw",function(canvas){
        var w = canvas.getWidth();
        var h = canvas.getHeight();
        var paint = new Paint();
        paint.setAntiAlias(true);
        canvas.drawColor(colors.parseColor("#F2F2F2"));
        if(parseInt(device.release)<10){
            paint.setColor(colors.parseColor("#ffffff"));
        }else{
            paint.setColor(colors.RED);
        }
        canvas.drawRoundRect(18/(1080/w),0,w-18/(1080/w),h, 100/(1080/w),90/(1080/w), paint)
        for(var i=0;i<6;i++){
            if(parseInt(device.release)<10){
                paint.setColor(colors.parseColor("#D9D8D8"));
            }
            canvas.drawLine(90/(1080/w),h/6*i, w-90/(1080/w),h/6*i, paint)
        }
    })

});
//左上角侧拉菜单ui
var color="#FF4537";
activity.setSupportActionBar(ui.toolbar);
ui.viewpager.setTitles(["开始", "详细设置"]);
ui.tabs.setupWithViewPager(ui.viewpager);
ui.toolbar.setupWithDrawer(ui.drawer);
ui.menu.setDataSource([{
    title: "捐赠",
    icon: "@drawable/ic_stars_black_48dp"
    },
    {
        title: "反馈",
        icon: "@drawable/ic_lightbulb_outline_black_48dp"
    },
    {
        title: "关于",
        icon: "@drawable/ic_info_outline_black_48dp"
    },
    {
        title: "退出",
        icon: "@drawable/ic_exit_to_app_black_48dp"
    },
    {
        title: "检测版本",
        icon: "@drawable/ic_file_upload_black_48dp"
    }
]);

//详细设置图标ui
ui.icons.setDataSource(['ic_alarm_on_black_48dp']);
ui.icons2.setDataSource(['ic_border_color_black_48dp']);
ui.icons3.setDataSource(['ic_add_box_black_48dp']);
ui.icons4.setDataSource(['ic_widgets_black_48dp']);
ui.icons5.setDataSource(['ic_all_inclusive_black_48dp']);

//创建选项菜单(右上角)ui
ui.emitter.on("create_options_menu", menu => {
    menu.add("关于设置");
    menu.add("恢复默认设置");
});

//初始化运行参数值/默认/修改/修改后
var storage = storages.create("GOvalue");
storages.remove("GOvalue");
var storage = storages.create("GOvalue");
const restore =new Array({//默认
    name:"定时",
    checked:false,
    hour:12,
    minute:00 ,
    ids:0,
    passw:null,
},{
    name:"选读文章",
    checked:true,
},{
    name:"视听学习",
    checked:true,
    number:12,
},{
    name:"答题",
    checked:true,
    oneChecked:true,
    twoChecked:true,
    threeChecked:true,
},{
    name:"订阅",
    checked:true,
    tetx:"地方媒体",
},{
    name:"分享/发表观点",
    checked:true,
},{
    name:"本地频道",
    checked:true,
},{
    name:"其他",
    sound:true,
    bright:false,
    log:true,
    shut:true,
});
var valueDefault=restore;//默认备份
if(!storage.contains("valueChange")){
    ui.timepicker.setCurrentHour(12);
    ui.timepicker.setCurrentMinute(00);
    storage.put("valueChange",valueDefault);
    storage.put("restore",restore)
    storage.put("Upload",null)
}else{
    for(value of storage.get("valueChange")){
        if(value.name=="定时"){
            ui.timing.attr("checked",value.checked)
            ui.timepicker.setCurrentHour(value.hour);
            ui.timepicker.setCurrentMinute(value.minute);
            valueDefault[0].checked=value.checked;
            valueDefault[0].hour=value.hour
            valueDefault[0].minute=value.minute
            valueDefault[0].ids=value.ids
            valueDefault[0].passw=value.passw
        }else if(value.name=="订阅"){
            var sp2text=0;
            switch (value.tetx) {
                case "地方媒体":
                    sp2text=0
                    break;
                case "上新":
                    sp2text=1
                    break;
                case "主要央媒":
                    sp2text=2
                    break;
                case "行业媒体":
                    sp2text=3
                    break;
                case "机关企事业单位":
                    sp2text=4
                    break;
                case "党刊":
                    sp2text=5
                    break;
                case "高校":
                    sp2text=6
                    break;
                case "推荐":
                    sp2text=7
                    break;
                case "社会机构":
                    sp2text=8
                    break;
                default:
                    break;
            }
            ui.sp2.setSelection(sp2text);
            valueDefault[4].tetx=value.tetx
        }else if(value.name=="其他"){
            ui.sound.attr("checked",value.sound)
            ui.bright.attr("checked",value.bright)
            ui.log.attr("checked",value.log)
            ui.shut.attr("checked",value.shut)
            valueDefault[7].sound=value.sound
            valueDefault[7].bright=value.bright
            valueDefault[7].log=value.log
            valueDefault[7].shut=value.shut
        }
    }
    storage.put("valueChange",valueDefault);
}


//左上角侧拉菜单里按钮触发函数
ui.menu.on("item_click", item => {
    switch (item.title) {
        case "捐赠":
            if(getAppName("com.eg.android.AlipayGphone")){
                app.startActivity({ 
                    action: "android.intent.action.VIEW", 
                    data:"alipays://platformapi/startapp?saId=10000007&qrcode=%68%74%74%70%73%3A%2F%2F%71%72%2E%61%6C%69%70%61%79%2E%63%6F%6D%2F%66%6B%78%31%31%37%30%31%61%33%35%6D%78%38%77%65%79%71%77%73%77%36%66%3F%5F%73%3D%77%65%62%2D%6F%74%68%65%72", 
                    packageName: "com.eg.android.AlipayGphone", 
                });
            }else{
                toast("请安装支付宝");
            }
            break;
        case "反馈":
            if(getAppName("com.tencent.mobileqq")){
                var qq = "1436619325";
                app.startActivity({ 
                    action: "android.intent.action.VIEW", 
                    data:"mqq://im/chat?chat_type=wpa&version=1&src_type=web&uin=" + qq, 
                    packageName: "com.tencent.mobileqq", 
                });
            }else{
                toast("请安装QQ");
            }
            break;
        case "关于":
            alert("关于", "作者：咕咚\n开发：基于Autojs开发\n版本："+version);
            break;    
        case "退出":
            ui.finish();
            break;
        case "检测版本":
            var releaseNotes = "版本："+version+"\n更新日志："+notify;
            dialogs.build({
                title: "当前版本",
                content: releaseNotes,
                positive: "立即下载",
                negative: "取消",
                neutral: "去官网"
            }).on("positive",function(){
                toast("现在是最新版本");
            }).on("neutral", () => {
                app.openUrl("http://gudong.ga/");
            }).show();
           
            break;
        default:
            break;
        }
})
    
//监听选项菜单点触发击函数
ui.emitter.on("options_item_selected", (e, item) => {
    switch (item.getTitle()) {
        case "关于设置":
        alert("关于设置", "更新日志："+notify+"\n已知缺陷:定时运行 运行次数\n已知Bug:息屏运行 关闭软件 答题 ");
            break;
            case "恢复默认设置":
                if(timers.getTimedTask(valueDefault[0].ids)){
                    timers.removeTimedTask(timers.getTimedTask(valueDefault[0].ids).id)
                }
                valueDefault=storage.get("restore",restore);
                storage.put("valueChange",storage.get("restore",restore));
                storage.put("Upload",null);
                ui.gobu.attr("checked",true);
                ui.gobu1.attr("checked",true);
                ui.gobu2.attr("checked",true);
                ui.gobu3.attr("checked",true);
                ui.gobu4.attr("checked",true);
                ui.gobu5.attr("checked",true);
                ui.timepicker.setCurrentHour(12);
                ui.timepicker.setCurrentMinute(00);
                ui.solve.attr("checked",true);
                ui.solve1.attr("checked",true);
                ui.solve2.attr("checked",true);
                ui.sp2.setSelection(0);
                ui.sound.attr("checked",true);
                ui.bright.attr("checked",false);
                ui.log.attr("checked",true);
                ui.shut.attr("checked",true);
                ui.timing.attr("checked",false);
                schtext="启动"
                toast("恢复成功！");
                break;
            default:
                break;
        }
    e.consumed = true;
});


//启动动效
function pidong(){
    schtext="加载"
    off=setInterval(function(){
        if(scheduleA<=360){
            scheduleA+=4
            scheduleB=0
        }else if(scheduleB<=360){
            scheduleB+=4;
        }else{
            scheduleA=0;
        }
    },2)
}
//启动按钮
var off;
var off1;
var off2;
var dia;
ui.go.on("click",function(canvas){
    if(auto.service){
        if(schtext!="加载"){        
            if(schtext=="启动"&&+dates<20220401||schtext==Shifen()){
                pidong()
                schtext="取消"
                toast("3秒后自动执行");
                var min=3;
                off1=setInterval(function(){
                    toast(min--);
                },2000)
                off2=setTimeout(function(){
                    clearInterval(off1)
                    toast("启动成功");
                    schtext="重试"
                    clearInterval(off)
                    scheduleA=360;
                    scheduleB=0;
                    storage.put("Upload",storage.get("valueChange"))
                    threads.start(function(){   
                        if(valueDefault[0].checked){
                            schtext=Shifen()
                            sleep(2000)
                            ui.finish();
                            toast("定时设置成功,请勿关闭后台");
                        }else{
                            console.log(valueDefault[0].ids)
                            //require('/storage/emulated/0/脚本/12/咕咚一键学习强国');
                            //require('./core');
                            //console.log(restore)
                            //console.log("***************************")
                            var storagea = storages.create("GOvalue");
                            console.log(storage.get("Upload"))
                        }
                     });   
                },min*1000*2);
            }else if(schtext!="启动"||schtext!=Shifen()){
                clearInterval(off1)
                clearTimeout(off2)
                toast("取消成功");
                if(valueDefault[0].checked){
                    schtext=Shifen()
                }else{
                    schtext="启动"
                }
                clearInterval(off)
                scheduleA=360;
                scheduleB=0;
            }else{
                daily.show();
            }   
        }else{
            toast("加载中");
        }
        
    }else{
        toast("无障碍服务没有开启");
        dia.show();
    }
})
dia=dialogs.build({
    title: "无障碍服务没有开启",
    content: "咕咚一键需要无障碍服务的支持否则无法运行，请在设置里的无障碍中选择咕咚一键并且打开",
    positive: "去打开",
    negative: "确定",
    neutral: "取消"
}).on("positive",function(){
    app.startActivity({
        action: "android.settings.ACCESSIBILITY_SETTINGS"
    });
}).on("negative", () => {
    toast("以退出 请打开服务");
    ui.finish();
})
//查看设置信息
function lookvalue(ob,keyindex){
    var str="";
    for(i in valueDefault[keyindex]){
        str+=ob[i]+valueDefault[keyindex][i]+"\n";
    }
    alert(str);
}
//查看设置参数
ui.icons.on("item_click", function() {
    var name=Object({name:"⏰：",checked:"定时运行:",hour:"几点:",minute:"几分:",ids:"定时:",passw:"密码:"})
    lookvalue(name,0);
});
ui.icons5.on("item_click", function() {
    var name=Object({name:"📄：选读文章/",checked:"文章/视听:",number:"次数:"})
    lookvalue(name,2);
});
ui.icons2.on("item_click", function() {
    var name=Object({name:"✏：",checked:"答题:", oneChecked:"每日答题:",twoChecked:"每周答题:",threeChecked:"专项答题:",})
    lookvalue(name,3);
});
ui.icons3.on("item_click", function() {
    var name=Object({name:"➕：",checked:"订阅：",tetx:"订阅类型："})
    lookvalue(name,4);
});
ui.icons4.on("item_click", function() {
    var name=Object({name:"🧪：",sound:"静音：",bright:"息屏运行：",log:"关闭控制台：",shut:"运行完毕关闭软件：",})
    lookvalue(name,7);
});
//开始小按钮事件
ui.gobu.setThumbWidth(24);
ui.gobu.on("click",function(e){
    ui.gobu.attr("checked",e.checked)
    e.bg="#000000"
   change("选读文章",e.checked)
})
ui.gobu1.setThumbWidth(24);
ui.gobu1.on("click",function(e){
    ui.gobu1.attr("checked",e.checked)
    e.bg="#000000"
    change("视听学习",e.checked)
})
ui.gobu2.setThumbWidth(24);
ui.gobu2.on("click",function(e){
    ui.gobu2.attr("checked",e.checked)
    e.bg="#000000"
    change("答题",e.checked)
    valueDefault[3].oneChecked=e.checked;
    ui.solve.attr("checked",e.checked)
    valueDefault[3].twoChecked=e.checked;
    ui.solve1.attr("checked",e.checked)
    valueDefault[3].threeChecked=e.checked;
    ui.solve2.attr("checked",e.checked);
    storage.put("valueChange",valueDefault);
})
ui.gobu3.setThumbWidth(24);
ui.gobu3.on("click",function(e){
    ui.gobu3.attr("checked",e.checked)
    e.bg="#000000"
    change("订阅",e.checked)
})
ui.gobu4.setThumbWidth(24);
ui.gobu4.on("click",function(e){
    ui.gobu4.attr("checked",e.checked)
    e.bg="#000000"
    change("分享/发表观点",e.checked)
})
ui.gobu5.setThumbWidth(24);
ui.gobu5.on("click",function(e){
    ui.gobu5.attr("checked",e.checked)
    e.bg="#000000"
    change("本地频道",e.checked)
})
ui.timing.setThumbWidth(24);
ui.timing.on("click",function(e){
    if(serv()){
            if(valueDefault[0].passw){
                ui.timing.attr("checked",e.checked)
                e.bg="#000000"
                change("定时",e.checked)
                valueDefault[0].checked=e.checked
                if(e.checked){
                    if(timers.getTimedTask(valueDefault[0].ids)){
                        timers.removeTimedTask(timers.getTimedTask(valueDefault[0].ids).id)
                    }
                   task=timers.addDailyTask({
                        path: "./core.js",
                        time: ui.timepicker.getCurrentHour()+":"+ui.timepicker.getCurrentMinute(),
                        delay: 0,
                        loopTimes: 1,
                        interval: 0,
                    })
                    valueDefault[0].ids=task.id
                    schtext=Shifen()
                }else {
                    if(timers.getTimedTask(valueDefault[0].ids)){
                        timers.removeTimedTask(timers.getTimedTask(valueDefault[0].ids).id)
                    }
                    valueDefault[0].ids=0
                    schtext="启动"
                }
                storage.put("valueChange",valueDefault); 
                storage.put("Upload",storage.get("valueChange"))
            }else{
                ui.timing.attr("checked",valueDefault[0].checked)
                pass("B")
            }
    }else{
        toast("无障碍服务没有开启");
        dia.show();
        ui.timing.attr("checked",valueDefault[0].checked)
    }
})

ui.solve.setThumbWidth(24);
ui.solve.on("click",function(e){
    daiti(e,2)
})
ui.solve1.setThumbWidth(24);
ui.solve1.on("click",function(e){
    daiti(e,3)
})
ui.solve2.setThumbWidth(24);
ui.solve2.on("click",function(e){
    daiti(e,4)
})

//答题选择
function daiti(e,keyindex){
    if (valueDefault[3].checked) {
            datioff(keyindex,e)
            if(e.checked){
                toast("开启"+e.text);
            }else{
                toast("关闭"+e.text);
            }
            if(!(valueDefault[3].oneChecked||valueDefault[3].twoChecked||valueDefault[3].threeChecked)){
                confirm("关闭所有答题").then(clear => {
                    if(clear){
                        valueDefault[3].checked=false
                        ui.gobu2.attr("checked",false)
                        toast("关闭所有答题成功");
                    }else{
                        toast("关闭"+e.text+"失败");
                        datioff(keyindex,e,1)
                        console.log(Object.keys(valueDefault[3])[keyindex])
                    }
                });
        }
    }else {
        confirm("开启答题").then(clear => {
            if(clear){
                valueDefault[3].checked=true
                datioff(keyindex,e)
                ui.gobu2.attr("checked",true)
                toast("开启答题成功");
            }else{
                datioff(keyindex,e,1)
                toast("开启答题失败");
            }
        });
    }
    storage.put("valueChange",valueDefault);
}

//更新答题设置
function datioff(keyindex,e,t){
    var value=Object.keys(valueDefault[3])[keyindex]
    valueDefault[3][value]=t?!e.checked:e.checked;
    if (value=="oneChecked") {
        ui.solve.attr("checked",t?!e.checked:e.checked)
    }else if (value=="twoChecked") {
        ui.solve1.attr("checked",t?!e.checked:e.checked)
    }else if (value=="threeChecked") {
        ui.solve2.attr("checked",t?!e.checked:e.checked)
    }else {
        
    }
    storage.put("valueChange",valueDefault);
}

let task
//详细设置方形按钮触发函数
function time() {
    ui.timing.setThumbWidth(24);
    for(value of valueDefault){
        if(value.name=="定时"){
            if(value.checked&&serv()){
                value.hour = ui.timepicker.getCurrentHour();
                value.minute = ui.timepicker.getCurrentMinute();
                valueDefault[0].hour = ui.timepicker.getCurrentHour();
                valueDefault[0].minute = ui.timepicker.getCurrentMinute();
                if(timers.getTimedTask(valueDefault[0].ids)){
                    timers.removeTimedTask(timers.getTimedTask(valueDefault[0].ids).id)
                }
                task=timers.addDailyTask({
                    path: "./core.js",
                    time: ui.timepicker.getCurrentHour()+":"+ui.timepicker.getCurrentMinute(),
                    delay: 0,
                    loopTimes: 1,
                    interval: 0,
                })
                valueDefault[0].ids=task.id
                ui.log.attr("checked",true)
                valueDefault[7].log=true
                toast("开启定时成功");
                storage.put("valueChange",valueDefault);
                schtext=Shifen()
                storage.put("Upload",storage.get("valueChange"))
            }else if(!serv()){

            }else{
                if(valueDefault[0].passw){
                    Timcon.show()
                }else{
                    pass("A")
                }
            }
        }
    }
}
//提示保存后台并且设置定时
var Timcon=dialogs.build({
    title: "开启定时",
    content: "由于各系统的限制，定时任务不能一定保证准时运行，请尽量将Auto.js Pro加入各种白名单和允许自启动权限。",
    positive: "确定",
    negative: "取消",
}).on("positive",function(){
    valueDefault[0].checked=true;
    ui.timing.attr("checked",true);
    valueDefault[0].hour = ui.timepicker.getCurrentHour();
    valueDefault[0].minute = ui.timepicker.getCurrentMinute();
    if(timers.getTimedTask(valueDefault[0].ids)){
        timers.removeTimedTask(timers.getTimedTask(valueDefault[0].ids).id)
    }
    task=timers.addDailyTask({
        path: "./core.js",
        time: ui.timepicker.getCurrentHour()+":"+ui.timepicker.getCurrentMinute(),
        delay: 0,
        loopTimes: 1,
        interval: 0,
    })
    valueDefault[0].ids=task.id
    ui.log.attr("checked",true)
    valueDefault[7].log=true
    storage.put("valueChange",valueDefault);
    toast("开启定时成功");
    schtext=Shifen()
    storage.put("Upload",storage.get("valueChange"))
}).on("negative",function(){
    toast("开启定时失败");
})
//锁屏密码
function pass(keys){
    if(!valueDefault[0].passw){
        var p=false
        threads.start(function(){
            var expr
            while (!expr){
                expr = rawInput("请输入开屏密码：")
                if(!expr){
                    toast("输入不能为空");
                }
            }
            var regString = /[a-zA-Z]+/;
            if(regString.test(expr)||device.product.indexOf("meizu") != -1){
                valueDefault[0].passw=expr
                if(keys=="A"){
                    Timcon.show()
                }else if(keys=="B"){
                    Timcon.show()
                }
                storage.put("valueChange",valueDefault);
                toast("密码保存成功");
                p=true;
            }else{
                dialogs.build({
                    title: "系统不支持纯数字密码：",
                    content: "目前值支持:\n\t\tFlyme\n解决方法：\n\t\t设置包含字母的密码",
                    positive: "确定",
                    negative: "取消",
                }).on("positive",function(){
                    app.launchApp("设置");
                }).on("negative",function(){
                    toast("开启定时失败");
                }).show()
                toast("密码保存失败");
                p=false;
            }
        })
        return p
    }else{
        return true 
    }
}
//文章/试听
function frequency(){
    if(valueDefault[1].checked||valueDefault[2].checked){
        var text = ui.text1.text();
        if (text.length == 0) {
            ui.text1.setError("输入不能为空");
            toast("输入不能为空");
            return;
        }else if (parseInt(text) > 14) {
            ui.text1.setError("次数不能大于14");
            toast("次数不能大于14");
            return;
        }else{
            valueDefault[2].number=parseInt(text)
            storage.put("valueChange",valueDefault);
            toast("设置次数成功");
        }
    }else {
        threads.start(function(){
            var options = ["开启选读文章", "开启视听学习", "开启文章/视听", "取消"]
            var i = dialogs.select("请选择开启或者取消", options);
            if(i==0){
                valueDefault[1].checked=true;
                ui.gobu.attr("checked",true);
                toast("开启选读文章成功");
            }else if(i==1){
                valueDefault[2].checked=true;
                ui.gobu1.attr("checked",true);
                toast("开启视听学习成功");
            }else if (i==2) {
                valueDefault[1].checked=true;
                ui.gobu.attr("checked",true);
                valueDefault[2].checked=true;
                ui.gobu1.attr("checked",true);
                toast("开启文章/视听成功");
            }else if(i==3){
                toast("您取消了选择");
            }
            storage.put("valueChange",valueDefault);
        })
    }
}

//修改开始小按钮参数
function change(key,values){
    for(value of valueDefault){
        if(value.name==key){
            if(values){
                toast("开启"+key);
            }else{
                toast("关闭"+key);
            }
            value.checked=values;
            break;
        }
    }
    storage.put("valueChange",valueDefault);//修改后保存
}


//订阅选择
function Order(){
    if (valueDefault[4].checked) {
        var j = ui.sp2.getSelectedItemPosition();
        var butext="";
        switch (j) {
            case 0:
                butext="地方媒体"
                break;
            case 1:
                butext="上新"
                break;
            case 2:
                butext="主要央媒"
                break;
            case 3:
                butext="行业媒体"
                break;
            case 4:
                butext="机关企事业单位"
                break;
            case 5:
                butext="党刊"
                break;
            case 6:
                butext="高校"
                break;
            case 7:
                butext="推荐"
                break;
            case 8:
                butext="社会机构"
                break;
            default:
                break;
        }
        toast("选择："+butext);
        valueDefault[4].tetx=butext;
    }else{
        confirm("开启订阅").then(clear => {
            if(clear){
                valueDefault[4].checked=true
                ui.gobu3.attr("checked",true)
                toast("开启订阅成功");
            }else{
                toast("开启订阅失败");
            }
        });
    }
    storage.put("valueChange",valueDefault);
}
//其他
ui.sound.setThumbWidth(24);
ui.sound.on("click",function(e){
    ui.sound.attr("checked",e.checked)
    valueDefault[7].sound=e.checked
    storage.put("valueChange",valueDefault);
    if (e.checked) {   
        toast("开启静音");
    }else{
        toast("关闭静音");
    }
})
ui.bright.setThumbWidth(24);
ui.bright.on("click",function(e){
    ui.bright.attr("checked",e.checked)
    valueDefault[7].bright=e.checked
    storage.put("valueChange",valueDefault);
    if (e.checked) {   
        toast("开启息屏");
    }else{
        toast("关闭息屏");
    }
})
ui.log.setThumbWidth(24);
ui.log.on("click",function(e){
    ui.log.attr("checked",e.checked)
    valueDefault[7].log=e.checked
    storage.put("valueChange",valueDefault);
    if (e.checked) {   
        toast("开启控制台");
    }else{
        toast("关闭控制台");
    }
})
ui.shut.setThumbWidth(24);
ui.shut.on("click",function(e){
    ui.shut.attr("checked",e.checked)
    valueDefault[7].shut=e.checked
    storage.put("valueChange",valueDefault);
    if (e.checked) {   
        toast("开启关闭软件");
    }else{
        toast("关闭 关闭软件");
    }
})

//时间格式化
function Shifen(){
    var Shi
    var fen
    if(ui.timepicker.getCurrentHour()<10){
        Shi="0"+ui.timepicker.getCurrentHour()
    }else{
        Shi=ui.timepicker.getCurrentHour()
    }
    if(ui.timepicker.getCurrentMinute()<10){
        fen="0"+ui.timepicker.getCurrentMinute()
    }else{
        fen=ui.timepicker.getCurrentMinute()
    }
    return "\t"+Shi+":"+fen
}
//无障碍
function serv(){
    if(auto.service){
        return true
    }else{
        toast("无障碍服务没有开启");
        dia.show();
        return false
    }
}
//自动关闭动画
pidong()
setTimeout(function(){
    if(valueDefault[0].checked){
        schtext=Shifen()
    }else{
        schtext="启动"
    }
    clearInterval(off)
    scheduleA=360;
    scheduleB=0;
},2000);
//内测限制
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
var dates=da.getYear()+1900+""+yue+""+re;

var releaseNotes = "版本："+version+"\n内测："+(+dates<20220401?"正在进行中\n":"已经结束\n更多信息：请前往官网\n")+ "内测截止时间：2022-04-01\n更新日志："+notify;
var daily=dialogs.build({
    title: "当前为内测版本",
    content: releaseNotes,
    positive: "捐赠",
    negative: "确定",
    neutral: "去官网"
}).on("positive",function(){
    if(getAppName("com.eg.android.AlipayGphone")){
        app.startActivity({ 
            action: "android.intent.action.VIEW", 
            data:"alipays://platformapi/startapp?saId=10000007&qrcode=%68%74%74%70%73%3A%2F%2F%71%72%2E%61%6C%69%70%61%79%2E%63%6F%6D%2F%66%6B%78%31%31%37%30%31%61%33%35%6D%78%38%77%65%79%71%77%73%77%36%66%3F%5F%73%3D%77%65%62%2D%6F%74%68%65%72", 
            packageName: "com.eg.android.AlipayGphone", 
        });
    }else{
        toast("请安装支付宝");
    }
}).on("neutral", () => {
    app.openUrl("http://gudong.ga");
}).show();