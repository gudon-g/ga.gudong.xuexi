// ==UserScript==
// @name         咕咚一键云班课
// @namespace    http://www.gudong.xj/
// @version      1.0.25
// @license MIT
// @description  咕咚一键云班课：一键刷云班课,鼠标点击课程的作业自动刷完，无需一个一个点击查看，自动加速视频，自动下载文件，自动打开文件
// @author       咕咚 微信/QQ：1436619325
// @include      https://www.mosoteach.cn/web/index.php?c=clazzcourse*
// @include      https://www.mosoteach.cn/web/index.php?c=res&m=index&clazz_course_id=*
// @include      https://www.mosoteach.cn/web/index.php?c=interaction&m=index&clazz_course_id=*
// @include    	 https://viewer.mosoteach.cn/viewer?token=*
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addStyle
// @grant        GM_getResourceText
// @grant        GM_addValueChangeListener
// @grant        GM_deleteValue
// @require      https://apps.bdimg.com/libs/jquery/2.1.4/jquery.min.js
// @require      https://code.jquery.com/ui/1.12.1/jquery-ui.min.js
// @require      https://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/jquery-ui.min.js
// @require      https://bowercdn.net/c/growl-1.3.2/javascripts/jquery.growl.js
// @resource     staticJqueryGrowl https://static.runoob.com/assets/jquery/jquery.growl/stylesheets/jquery.growl.css
// @require      https://lib.baomitu.com/qrcodejs/1.0.0/qrcode.min.js
// @icon         https://public-cdn-oss.mosoteach.cn/avatar/2020/DB/a5622593d680e472c30100a15dcb1282.jpg
// @icon64       https://public-cdn-oss.mosoteach.cn/avatar/2020/DB/a5622593d680e472c30100a15dcb1282.jpg
 
// ==/UserScript==
 
(function() {
		var my_V="1.0.25";
		var duration=5;
		var load=5;
		var uptitle="<h5>1：咕咚终于有自己的官网了,快来瞧一瞧</h5><h5>2：新增官网直达</h5><h4>脚本版本：</h4><h5>历史版本："+ GM_getValue('-V')+"</h5><h5>更新版本："+ my_V+"</h5>"
		// GM_addStyle(GM_getResourceText('ajaxJqueryUi'));
  //   GM_addStyle(GM_getResourceText('staticJqueryUi'));
    console.log(GM_getValue('myName'))
    GM_addValueChangeListener('myName', function(name, old_value, new_value, remote){
      console.log(` 发生变化的存储名是: ${name}, ${name} 原来的值是 ${old_value}, ${name} 新的值是 ${new_value}, 这个值的变动是由${remote ? '本标签页' : '其他标签页'}起的。 `);
    })
		GM_addValueChangeListener('myClose', function(name, old_value, new_value, remote){
		  console.log(` 发生变化的存储名是: ${name}, ${name} 原来的值是 ${old_value}, ${name} 新的值是 ${new_value}, 这个值的变动是由${remote ? '本标签页' : '其他标签页'}起的。 `);
		})
    if(GM_getValue('myName')){
         console.log(his_name);
    }else{
       var my_name=GM_setValue('myName', 0);
       var his_name = GM_getValue('myName');
			 GM_setValue('myName', 0);
       console.log(his_name);
    }
		
		if(GM_getValue('myCDN')){
		     console.log(his_myCDN);
		}else{
		   var my_myCDN=GM_setValue('myCDN', 0);
		   var his_myCDN = GM_getValue('myCDN');
			 GM_setValue('myCDN', 0);
		   console.log(his_myCDN);
		}
		
		if(GM_getValue('myClose')){
			GM_setValue('myClose', 0);
			window.close();
			stopDefault(ev);
			return false;
		}
		if(GM_getValue('duration')||GM_getValue('load')){
		     console.log(his_duration);
				 console.log(his_load);
				 console.log(his_durationzise);
				 console.log(his_loadzise);
				 console.log(his_open);
		}else{
		   var my_duration=GM_setValue('duration', 5);
		   var my_load=GM_setValue('load', 5);
		   var my_open=GM_setValue('open','on');
		   var his_duration = GM_getValue('duration');
		   var his_load = GM_getValue('load');
		   var his_open = GM_getValue('open');
			 GM_setValue('load', 5);
			 GM_setValue('duration', 5);
			 GM_setValue('open', 'on');
		   console.log(his_load);
		   console.log(his_duration);
		   console.log(his_open);
			 
		   var my_durationzise=GM_setValue('durationzise', 22);
		   var my_loadzise=GM_setValue('loadzise', 22);
		   var his_durationzise = GM_getValue('durationzise');
		   var his_loadzise = GM_getValue('loadzise');
			 GM_setValue('loadzise', 22);
			 GM_setValue('durationzise', 22);
		   console.log(his_loadzise);
		   console.log(his_durationzise);
		}
		if(window.location.pathname=="/viewer"){
			return
		}
/**
 * @function：html样式插入
 */
	function _(id){
		return document.getElementById(id);
	}
		$("<meta name='referrer' content='no-referrer'/>").appendTo($("head"));
		$("<link rel='stylesheet' type='text/css' href='https://cdn.eyuyao.com/jquery.barrager.js/jquery.barrager.js-1.1/dist/css/barrager.css'/><script src='https://cdn.eyuyao.com/jquery.barrager.js/jquery.barrager.js-1.1/dist/js/jquery.barrager.js' type='text/javascript' charset='utf-8'></script>").appendTo($("head"));
    GM_addStyle(GM_getResourceText('staticJqueryGrowl'));
	
	if(GM_getValue('myCDN')==0){
		$("<link id='linkcss' rel='stylesheet' type='text/css' href='https://ajax.aspnetcdn.com/ajax/jquery.ui/1.12.1/themes/blitzer/jquery-ui.css'/>").appendTo($("head"));
		_("linkcss").onload = function(){
				$.growl.notice({
						title: "咕咚一键云班课",
						message: "面板加载成功！\</br>CDN加载成功！"
				});
				$(".ui-widget-overlay").css('z-index',99)
				$(".ui-dialog").css({
						"position":"fixed",
						"left":"50%",
						"margin-left":"-150px",
						"top":"50%",
						"margin-top":"-150px",
						"background-color":"white",
				})
		}
		_("linkcss").onerror = function(){
			links()
		}
	}else{
		links()
	}	
	function links(){
			$("<link id='linkcss2' rel='stylesheet' type='text/css' href='https://code.jquery.com/ui/1.12.1/themes/blitzer/jquery-ui.css'/>").appendTo($("head"));
			_("linkcss2").onload = function(){
					GM_setValue('myCDN', 2)
					$.growl.warning({
							title: "咕咚一键云班课",
							message: "切换CDN！\</br>面板加载成功！",
					});
					$(".ui-widget-overlay").css('z-index',99)
					$(".ui-dialog").css({
							"position":"fixed",
							"left":"50%",
							"margin-left":"-150px",
							"top":"50%",
							"margin-top":"-150px",
							"background-color":"white",
					})
			}
			_("linkcss2").onerror = function(){
					GM_setValue('myCDN', 0)
					$.growl.error({
							title: "咕咚一键云班课",
							message: "页面初始化失败！\</br>请联系作者！"
					});
			}
	}
	    
		$("<div id='gudong'><div id='centerw'style=''><div class='titles' tabindex='0'><div id='course'>课程:<span>ฅʕ•̫͡•ʔฅ</span></div><div id='numbers'>作业任务:<span>0</span></div><a id='gos' href=''>GO</a></div></div><div class='button'><div class='speed round recover' id='speed'>"+GM_getValue('duration')+"s</div><div class='change round' id='change'>🌞</div><div class='wait round recover' id='wait'>"+GM_getValue('load')+"s</div><div class='again round' id='again'>on</div><div class='save' id='save'>Perfect</div></div><div class='logoa' ><canvas id='c' class='f'>当前浏览器不支持canvas 请升级！</canvas><img id='melogo' class='f' src='' alt=''></div></div><div id='up' title='😋🥤更新日志：'><h4>捐赠作者：</h4><h5>制作不易，你的支持是作者最大动力，谢谢！</h5><div class='jz'></div><div class='jz'></div><h4>更新内容：</h4>"+uptitle+"<h4>反馈：</h4><div class='jz'></div></div><div id='mydialog' title='咕咚一键云班课使用说明：'><h4>使用方法：</h4><h5>点击GO按钮即可！自动运行完成后自动停止！</h5><h4>作者声明：</h4><h5>一键云班课由“咕咚”独立开发,为同学带来方便,此功能完全免费,如果有盗卖现象,请立马退货退款后拉黑。</h5><h4>使用技巧：</h4><h5>鼠标在头像里：隐藏任务栏和按钮</h5><h5>鼠标在头像外：显现任务栏和按钮</h5><h5>鼠标双击头像：可以查看当前作业进度</h5><h5>第一个悬浮球：点击设置作业刷取速度</h5><h5>第二个悬浮球：点击设置作业加载等待时间</h5><h5>第三个悬浮球：点击设置视频加载等待</h5><h5>第四个悬浮球：点击设置时间反转</h5><h5>第五个悬浮球：点击保存配置长按恢复默认配置 </h5><h5>鼠标点击进度条：返回默认状态</h5><h5>鼠标点击任务栏：显示使用说明</h5><h5>鼠标按住头像不放：可移动图标位置或进入设置</h5><h4>使用问题：</h4><h5>1, Word、Excel、PowerPoint等演示文件无法自动完成：请把云班课弹出式窗口和重定向权限设置为允许。捷径：浏览器的搜索框最左侧的拦截弹出式窗口设置为始终允许。路径：设置—隐私设置和安全性—网站设置—近期活动—www.mosoteach.cn—权限—弹出式窗口和重定向</h5><h5>2,插件自动运行后发现还有作业没有自动刷完：以为你的网路速度太慢所导致，更换网路，刷新网页页面重新点击GO按钮或者选择其他模式点击GO按钮</h5><h4>捐赠作者：</h4><h5>制作不易，你的支持是作者最大动力，谢谢！</h5><div class='jz'></div><div class='jz'></div><h4>反馈：</h4><div class='jz'></div><span></span></div>").appendTo($("body"));
 
		
/**
 * @function：css样式设置
 */
		$("<svg t='1626957107518' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='5182' width='32' height='32'><path d='M395.846 603.585c-3.921 1.98-7.936 2.925-12.81 2.925-10.9 0-19.791-5.85-24.764-14.625l-2.006-3.864-78.106-167.913c-0.956-1.98-0.956-3.865-0.956-5.845 0-7.83 5.928-13.68 13.863-13.68 2.965 0 5.928 0.944 8.893 2.924l91.965 64.43c6.884 3.864 14.82 6.79 23.708 6.79 4.972 0 9.85-0.945 14.822-2.926L861.71 282.479c-77.149-89.804-204.684-148.384-349.135-148.384-235.371 0-427.242 157.158-427.242 351.294 0 105.368 57.361 201.017 147.323 265.447 6.88 4.905 11.852 13.68 11.852 22.45 0 2.925-0.957 5.85-2.006 8.775-6.881 26.318-18.831 69.334-18.831 71.223-0.958 2.92-2.013 6.79-2.013 10.75 0 7.83 5.929 13.68 13.865 13.68 2.963 0 5.928-0.944 7.935-2.925l92.922-53.674c6.885-3.87 14.82-6.794 22.756-6.794 3.916 0 8.889 0.944 12.81 1.98 43.496 12.644 91.012 19.53 139.48 19.53 235.372 0 427.24-157.158 427.24-351.294 0-58.58-17.78-114.143-48.467-163.003l-491.39 280.07-2.963 1.98z' fill='#09BB07' p-id='5183'></path></svg>").appendTo($(".jz"));
		var arrQr=new Array("wxp://f2f0tKEqNlro-cTlBEN6nJDzd9PdBK_wj7VW","https://qr.alipay.com/fkx11701a35mx8weyqwsw6f","https://u.wechat.com/MAlZz-VxmZT7hTiHdcGrmmg");
		for(var i=0;i<arrQr.length*2;i++){
			qrcode(".jz",i,arrQr[i>=3?i-3:i])
			if(i==1||i==4){
				$("svg")[i].remove()
				$("<svg t='1626957341020' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='7151' width='32' height='32'><path d='M902.095 652.871l-250.96-84.392s19.287-28.87 39.874-85.472c20.59-56.606 23.539-87.689 23.539-87.689l-162.454-1.339v-55.487l196.739-1.387v-39.227H552.055v-89.29h-96.358v89.294H272.133v39.227l183.564-1.304v59.513h-147.24v31.079h303.064s-3.337 25.223-14.955 56.606c-11.615 31.38-23.58 58.862-23.58 58.862s-142.3-49.804-217.285-49.804c-74.985 0-166.182 30.123-175.024 117.55-8.8 87.383 42.481 134.716 114.728 152.139 72.256 17.513 138.962-0.173 197.04-28.607 58.087-28.391 115.081-92.933 115.081-92.933l292.486 142.041c-11.932 69.3-72.067 119.914-142.387 119.844H266.37c-79.714 0.078-144.392-64.483-144.466-144.194V266.374c-0.074-79.72 64.493-144.399 144.205-144.47h491.519c79.714-0.073 144.396 64.49 144.466 144.203v386.764z m-365.76-48.895s-91.302 115.262-198.879 115.262c-107.623 0-130.218-54.767-130.218-94.155 0-39.34 22.373-82.144 113.943-88.333 91.519-6.18 215.2 67.226 215.2 67.226h-0.047z' fill='#02A9F1' p-id='7152'></path></svg>").appendTo($(".jz")[i]);
			}else if(i==2||i==5){
				$("svg")[i].remove()
				$("<svg t='1626958834883' class='icon' viewBox='0 0 1024 1024' version='1.1' xmlns='http://www.w3.org/2000/svg' p-id='16931' width='32' height='32'><path d='M669.3 369.4c9.8 0 19.6 0 29.4 1.6C671 245.2 536.9 152 383.2 152 211.6 152 71 269.7 71 416.8c0 85 45.8 156.9 124.2 210.9l-31.1 93.2L273.6 667c39.2 8.2 70.3 16.3 109.5 16.3 9.8 0 19.6 0 31.1-1.6-6.5-21.3-9.8-42.5-9.8-65.4 0.1-135.7 116.2-246.9 264.9-246.9z m-168.4-85c24.5 0 39.2 16.3 39.2 39.2 0 22.9-16.3 39.2-39.2 39.2-24.5 0-47.4-16.4-47.4-39.2 0-24.5 24.6-39.2 47.4-39.2z m-216.3 73.1c-24.7 0-47.8-16.2-47.8-38.8 0-24.3 24.7-38.8 47.8-38.8s39.5 16.2 39.5 38.8c0.1 22.7-16.4 38.8-39.5 38.8z' fill='#24DB5A' p-id='16932'></path><path d='M953.8 613c0-125.9-124.2-227.2-264.8-227.2-148.8 0-266.5 103-266.5 227.2 0 125.9 117.7 227.2 266.5 227.2 31.1 0 62.1-8.2 93.2-16.3l85 47.4-22.9-78.5c62.1-47.4 109.5-109.5 109.5-179.8z m-351.5-39.2c-14.7 0-31.1-14.7-31.1-31.1 0-14.7 16.3-31.1 31.1-31.1 22.9 0 39.2 16.3 39.2 31.1 0 16.4-14.7 31.1-39.2 31.1z m178-7.6c-14.8 0-31.3-14.6-31.3-30.7 0-14.6 16.5-30.7 31.3-30.7 23.1 0 39.5 16.2 39.5 30.7 0 16.2-16.4 30.7-39.5 30.7z' fill='#24DB5A' p-id='16933'></path></svg>").appendTo($(".jz")[i]);
			}
		}
		function qrcode(doms,index,text){
			var qrcode = new QRCode($(doms)[index], {
				text: text,
			    width: 100,
			    height: 100,
			    colorDark : "#000000",
			    colorLight : "#ffffff",
			    correctLevel : QRCode.CorrectLevel.H
			});
		}
		
		$("#gudong").css({
			"position": "fixed",
			"width": "192px",
			"height": "60px",
			"left": "22px",
			"top":"80px"
		});
		$("#centerw").css({
			"width":" 140px",
			"height":"100%",
			"position": "absolute",
			"margin-left":"30px",
			"overflow":"hidden"
		});
		$(".logoa").css({
			"width": "60px",
			"height": "100%",
			"border-radius": "50%",
			"perspective":"62px"
		});
		$(".f").css({
			"width": "100%",
			"height":  "100%",
			"position": "absolute",
			"transition": "2s",
			"transform-origin": "center",
		});
		$("#c").css({
			 "width": "56px",
			 "height": "56px",
			 "background": "white",
			"border": "2px solid #40B782",
			"border-radius":"50%",
			'transform':'rotateY(-180deg)',
		});
		$("#melogo").css({
			"backface-visibility": "hidden",
		})
		$(".titles").css({
			"position": "absolute",
			"top": "10px",
			"width":"100%",
			"height": "43px",
			"border-radius": "0px 20px 20px 0px",
			"background": "#40B782",
			"color": "white",
		});
		$(".button").css({
			"width":"60px",
			"height":"60px",
			"position": "absolute",
			"left":"0px",
			"top":"0px",
			"border-radius":"50%",
		})
		$(".round").css({
			"width":"22px",
			"height":"22px",
			"border-radius": "50%",
			"text-align":" center",
			"font-size":"12px",
			"line-height":"22px",
			"text-decoration": "none",
			"color": "white",
			"position":" absolute",
			"left":"18px",
			"top":"18px",
			"opacity":'0',
			"animation":"go 5s ease infinite"
		});
		$(".save").css({
			"width":"60px",
			"height":"60px",
			"position":" absolute",
			"top":"0px",
			"left":"0px",
			"opacity":"0",
			"line-height":"60px",
			"text-decoration": "none",
			"color": "white",
			"background":"linear-gradient(120deg,#28F39D, #00DCB2,#00CFFF)",
			"border-radius":"50%",
			"text-align":" center",
			"box-shadow": "inset -5px 1px 5px 1px rgb(0 0 0 / 20%)",
    "overflow": "hidden"
		}).click(function(){
					$(".save").text("Victory")
					$(".save").animate({
						top: "75px",
						left:"75px", 
						width: "0px",
						height: "0px",
						fontSize: "0px",
						lineHeight:"0px",
					})
				setTimeout(function(){
					if($(".logoa").css("display")=="none"){
							$(".speed").animate({
								left: "18px",
								top: "18px",
								opacity:'0',
							});
							$(".wait").animate({
								left: "18px",
								top: "18px",
								opacity:'0',
							});
							$(".again").animate({
								left: "18px",
								top: "18px",
								opacity:'0',
							});
							$(".change").animate({
								left: "18px",
								top: "18px",
								opacity:'0',
							});
							$(".save").animate({
									opacity:'0',
							},1,function(){
								$(".button").animate({
										width: "60px",
										height: "60px",
										left: "0px",
										top: "0px",
								})
								$(".logoa").animate({
									opacity:'1',
								})
								$(".logoa").css("display","block")
								$("#centerw").css("display","block")
								$(".save").css({
										"top":"30px",
										"left":"30px",
								})
							})		
					}
					$(".default").animate({
						left:$(window).width()-300+"px",
					})
				},500)
				setTimeout(function(){
					$(".titles").animate({
						left:"0px",
						opacity:'1',
					})
					hint=2000
				},1000)
				$.growl.warning({
						title: "咕咚一键云班课",
					message: "配置保存成功",
				});
				console.log("设置保存成功")
				GM_setValue('load', parseFloat($("#wait").text()).toFixed(1))
				GM_setValue('open',$(".again").text())
				GM_setValue('duration', parseFloat($("#speed").text()).toFixed(1));
				GM_setValue('loadzise',$("#wait").width())
				GM_setValue('durationzise',$("#speed").width())
				
				duration=parseFloat($("#speed").text()).toFixed(1);
				load=parseFloat($("#wait").text()).toFixed(1);
				console.log(duration*1000+"*********"+load)
		}).mouseover(function(){
				$(".default").animate({
						left:"190px",
					})
				if(hint){clearTimeout(wave)}
				wave=setTimeout(function(c){
					$.growl({
							title: "保存配置",
						message: "点击保存配置<br/>长按恢复默认配置"
					});
				},hint)
			
		}).hover(function(){
			$(".titles").animate({
				left:"-140px",
				opacity:"0",
			})	
		})
		let wave
		var opposite=0
		$(".round").click(function(){
			console.log(this.id)
			switch (this.id){
				case "speed":
					bigger("#speed",1-(1*opposite),1-(1*opposite))
					break;
				case "wait":
					bigger("#wait",1-(1*opposite),1-(1*opposite))
					break;
				case "change":
					if($(".change").text()=="🌞"){
							opposite=2
							$(".change").text("🌝");
							$(".change").animate({
								backgroundColor:"#FF674F",
							})
					}else{
						opposite=0;
							$(".change").text("🌞");
							$(".change").animate({
								backgroundColor:"#00B8FF",
							})
					}
					break;
				case "again":
					if($(".again").text()=="off"){
						$(".again").text("on");
						$(".again").animate({
							backgroundColor:"#FF8983",
						})
					}else{
						$(".again").text("off");
						$(".again").animate({
							backgroundColor:"#FFA300",
						})
					}
					break;
				default:
					break;
			}
		}).mouseover(function(){
			$(".default").animate({
				left:"190px"
			})
			if(hint){clearTimeout(shake)}
			shake=setTimeout(function(t){
				switch (t.id){
					case "speed":
						$.growl.notice({
								title: "作业刷取速度",
							message: "点击即可设置"
						});
						break;
					case "wait":
						$.growl.error({
								title: "作业加载等待时间",
							message: "点击即可设置"
						});
						break;
					case "again":
						$.growl.warning({
								title: "关闭视频加载等待",
							message: "点击即可设置"
						});
						break;
					case "change":
						$.growl({
								title: "时间反转",
							message: "点击即可设置"
						});
						break;	
					default:
						console.log(t.id+"*****")
						break;
				}
				},hint,this)	
		})
		let shake
		var hint=2000
		function bigger(a,b,c){
			$(a).text((parseFloat($(a).text())+c).toFixed(1)+"s")
			$(a).animate({
				width: "+="+b+"px",
				height: "+="+b+"px",
				lineHeight: "+="+b+"px"
			})
		}
		$(".speed").css({
			"background":"#28F39D",
			"box-shadow":"3px -2px 5px 1px rgb(0 0 0 / 20%)",
			
		}).click(function(){
			
		})
		$(".wait").css({
			"background":"#92ABFF",
			"box-shadow":"rgb(0 0 0 / 20%) 3px 0px 5px 1px",
		})
		$(".again").css({
			"background":"	#FFA300",
			"box-shadow":"rgb(0 0 0 / 20%) 5px 1px 5px 1px",
		})
		$(".change").css({
				"box-shadow":"rgb(0 0 0 / 20%) 5px 3px 5px 1px",
				"background":"	#00B8FF",
		}).click(function(){
				
		})
		for(index in document.styleSheets){
		    if(document.styleSheets[index].href==null){
		        var tt=document.styleSheets[index];
						tt.insertRule(" @keyframes go{50%{transform:translate(5px,2px)}100%{transform:translateY(0px)}} ")
						 break
		    }
		}
		$(".titles div").css({
			"margin-left":" 30px",
			"font":"10px/21.5px '微软雅黑'",
			"height": "50%",
			"overflow":"hidden"
		});
		$(".titles span").css("vertical-align","baseline");
		$("#gos").css({
			"position": "absolute",
			"top":" 0px",
			"right": "0px",
			"width": "43px",
			"height": "100%",
			"border-radius":"50%",
			"text-align":" center",
			"line-height":"43px",
			"text-decoration": "none",
			"color": "white",
			"background": "linear-gradient(120deg,#28F39D, #00DCB2,#00CFFF)",
			"box-shadow":"1px -2px 10px white",
			"font-size":"12px"
		});
		$("#pass").css({
			"padding":"0px",
			"width":"100%",
			"height":"33px"
		})
	$("#bang").css('color','pink')
    $(".jz").css({
		"display":" inline-block",
		"position":"relative"
		})
		$(".jz:nth-last-of-type(2)").css({
			"margin-left":"14.2px",
		"background-position-y": "-100px"
		})
		$(".jz:last-of-type").css({
		"background-position-y": "-200px"
		})
		$("svg").css({
			"position":"absolute",
			"left":"50%",
			"margin-left":"-16px",
			"top":"50%",
			"margin-top":"-16px",
			"background-color":"white",
			"border-radius":"32%"
		})
		$(".speed").animate({
			width: GM_getValue('durationzise')+"px",
			height: GM_getValue('durationzise')+"px",
			lineHeight:GM_getValue('durationzise')+"px",
			opacity:'0',
		});
		$(".wait").animate({
			width: GM_getValue('loadzise')+"px",
			height: GM_getValue('loadzise')+"px",
			lineHeight:GM_getValue('loadzise')+"px",
			opacity:'0',
		});
		if(GM_getValue('open')=="off"){
			$(".again").text("off");
			$(".again").animate({
				backgroundColor:"#FFA300",
			})
		}else{
			$(".again").text("on");
			$(".again").animate({
				backgroundColor:"#FF8983",
			})
		}
			
		/**
	 * @function：获取用户头像
	 */
	function goBack(){
	  	varwindow.history.back();
	  }
		$("#melogo").css("border-radius","50%").attr('src',$(".user-information-box").children("a").eq(0).children("img").attr('src'));
/**
 * @function：插件鼠标事件
 */
		var divs=document.getElementById("gudong")
		divs.onmousedown=function(){
			var ev=ev||window.event
			var x=ev.clientX-parseInt(getComputedStyle(divs,null).left)
			var y=ev.clientY-parseInt(getComputedStyle(divs,null).top)
			divs.onmousemove=function(ev){
				var ev=ev=window.event
				divs.style.left=ev.clientX-x+"px"
				divs.style.top=ev.clientY-y+"px"
				//clearInterval(shi1)
				console.log($("#gudong").css("left"))
				
			}
			divs.onmouseup=function(){
				divs.onmousemove=null
			}
			divs.onmouseleave=function(){
				divs.onmousemove=null
			}
			ev.preventDefault();
		}
	
		let Jitter
		$(".logoa").children().on({
			'mouseenter':function(){
					clearTimeout(Jitter);
					Jitter=setTimeout(function(c){
						$(".titles").animate({left:"-140px"})
					},350)
			},
			'mouseleave':function(){
						$(".default").animate({
							left:$(window).width()-300+"px",
						})
						//clearInterval(shi1)
					clearTimeout(Jitter);
					Jitter=setTimeout(function(c){
							$(".titles").animate({
								left:"0px",
								opacity:'1',
							})
					},350)
			},
			"dblclick":function(){
				$("#melogo").css("transform","rotateY(180deg)")
				$("#c").css("transform","rotateY(0deg)")
			},
			"click":function(){
				$("#melogo").css("transform","rotateY(0deg)")
				$("#c").css("transform","rotateY(-180deg)")
			}
		})
		$(".titles").children("div").click(function(){
			$("#mydialog").dialog("open");
		})
		var shi1,recover1
		
		$(".save").mousedown(function(){
			var recover=0
			recover1=setInterval(function(){
				recover++
				if(recover>=2){
					clearInterval(recover1)
					$(".save").text("Recover");
					$(".change").text("🌞");
					$(".change").animate({
						backgroundColor:"#00B8FF",
					})
					$(".again").text("off");
					$(".again").animate({
						backgroundColor:"#FFA300",
					})
					$(".recover").animate({
							width: "22px",
							height: "22px",
							lineHeight: "22px"
					}).text("5s")
				}
				opposite=0
				console.log("初始化成功")
				},500);
		}).mouseup(function(){
			clearInterval(recover1)
			console.log("触发失败2")
		})
		
		$("#melogo").mousedown(function(){
			var shi=0;
			shi1=setInterval(function(){
				shi++
				if(shi>=2){
					clearInterval(shi1)
						$(".save").text("Perfect")
						$("#centerw").css("display","none")
						$(".logoa").animate({
							opacity:'0',
						},0.2,function(){
							$(".logoa").css("display","none")
							$(".titles").animate({
								left:"-140px",
								opacity:"0",
								})
							$(".button").animate({
									width: "150px",
									height: "150px",
									left: "-45px",
									top: "-45px",
							})		
								$(".save").animate({
										width: "60px",
										height: "60px",
										opacity:'1',
										top: "45px",
										left:"45px",
										lineHeight:"60px",
										fontSize:"12px"
								})
								$(".speed").animate({
											left: "100px",
											top: "12px",
												opacity:'1',
										});
								$(".wait").animate({
									left: "132px",
									top: "37px",
									opacity:'1',
								})		
								$(".again").animate({
									left: "125px",
									top: "74px",
										opacity:'1',
								})
								$(".change").animate({
									left: "102px",
									top: "107px",
										opacity:'1',
								})
						})
				}
			},500);
		}).mouseup(function(){
			clearInterval(shi1)
			console.log("触发失败")
		})
		$("#gos").click(function(ev){
			var ev=ev=window.event
			if(keCheng()&&homes==$("#numbers").children("span").text()){
				if(GM_getValue('myName')){
						work(0,0)
					}else{
						$("#mydialog").dialog("open");
					}
						stopDefault(ev);
						return false;
				}else{
					$.ajaxSetup({cache : false });
				}
		})
		
		$("#mydialog").dialog({
					autoOpen:false,
					modal:true,
					width:300,
					height:250,
					resizable:false,
					draggable:false,
					buttons:{
						"取消":function(){
							$("#mydialog").dialog("close");
								GM_setValue('myName', 0)
						},
						"确定":function(){
							$("#mydialog").dialog("close");
								GM_setValue('myName', 1)
						},
						"官网":function(){
								var tempwindow=window.open('_blank');
								tempwindow.location='http://gudong.ga/' ;
						},
					}
			})
 
			$("#up").dialog({
					autoOpen:false,
					modal:true,
					width:300,
					height:250,
					resizable:false,
					draggable:false,
					buttons:{
						"取消":function(){
							$("#up").dialog("close");
							$.growl.error({
									title: "咕咚一键云班课",
								message: "新功能自己探索吧！"
							});
						},
						"确定":function(){
							GM_setValue('open', 'on');
							hint=0
							$("#up").dialog("close");
							my_V=GM_setValue('-V', my_V)
							var his_V = GM_getValue('-V');
							$(".titles").animate({left:"-140px"})
							var event = document.createEvent('MouseEvents');
							// initEvent接受3个参数：
							// 事件类型，是否冒泡，是否阻止浏览器的默认行为
							event.initEvent("mousedown", false, true);
							//触发document上绑定的click事件
							$("#melogo")[0].dispatchEvent(event);
							var event = document.createEvent('MouseEvents');
							event.initEvent("mouseover", false, true);
							for(index in $(".round")){
							    if($(".round").eq(index).length){
							        $(".round")[index].dispatchEvent(event);
							    }
							}
							$(".save")[0].dispatchEvent(event);
							setTimeout(function(){
								$(".default").animate({
									left:$(window).width()-300+"px",
								})
								$("#save").trigger("click")
							},2000)
						},"官网":function(){
								var tempwindow=window.open('_blank');
								tempwindow.location='http://gudong.ga/' ;
						},
					},open:function(){
						let shi=5;
						$(".ui-button").eq(6).addClass("ui-state-disabled");
						var offz=setInterval(function(){
							if(shi<0){
								$(".ui-button").eq(6).removeClass("ui-state-disabled");
								$(".ui-button").eq(6).text("确定");
								clearTimeout(offz);
							}else{
								$(".ui-button").eq(6).text(shi);
							}
							shi--;
						},1000)
					}
			})
		if(GM_getValue('-V')==my_V){
					console.log(GM_getValue('-V'));
				}else{
					$("#up").dialog("open")
					var ba=0;
					var Donate=new Array('',"春*￥20.00","*鹏￥8.00","B*y￥6.66","*涛￥6.00","*卜￥5.00","*子￥4.00","l*E￥2.00","似*m￥1.00","*酱￥1.00","**￥0.01","谢谢大家的捐赠！！！！！！！！！！！！！！！！！！！！！！！！");
					let offcc=setInterval(function(){
						ba++
						let item={
						   img:$(".user-information-box").children("a").eq(0).children("img").attr('src'), //图片 
						   info:"<span id='bar"+ba+"'></span>", //文字 
						   href:"", //链接 
						   close:true, //显示关闭按钮 
						   speed:1, //延迟,单位秒,默认6 
						   bottom:Math.floor(Math.random()*$(window).height()), //距离底部高度,单位px,默认随机 
						   color:'#fff', //颜色,默认白色 
						   old_ie_color:'#000000', //ie低版兼容色,不能与网页背景相同,默认黑色 
						 }
						$('body').barrager(item);
					_("bar"+ba).parentNode.parentNode.innerHTML="<div id='bar"+ba+"' style='margin-right: 2px;font-size: 14px;color: #fff;line-height: 40px;margin-left: 18px;'>"+Donate[ba]+"</div>"
					$("#bar"+ba).click(function(){
						$("#up").dialog("open")
					})
					},300)
					setTimeout(function(){
						ba=0;
						clearInterval(offcc)
						console.log(123)
					},3300)
				}
	
 
	/**
	 * function：获取课程和作业任务
	 */
			var homework=$(".res-row-title")
			var homes=-1
			let box=$("#res-list-box").children("div");
			var works=new Array();
$("#res-list-box").ready(function(){
		if($(".selected .fontsize-14").text()=="资源"){
			$("#course").children("span").text($(".cc-name").children("span").text())
			for(let y=0;y<box.length;y++){
				works[y]=new Array();
				for(let x=0;x<box.eq(y).children(".hide-div").children("div").length;x++){
					let drag=box.eq(y).children(".hide-div").children("div").eq(x).children(".res-info").children(".create-box.manual-order-hide-part").children('span');
					if(drag.eq(drag.length-3).attr('data-is-drag')=="N"){
							$("#numbers").children("span").text(function(indexs,oldhtml){
									oldhtml=Number(oldhtml)+1
									homes=oldhtml
									return oldhtml
								})
							works[y][x]=box.eq(y).children(".hide-div").children("div").eq(x)
					}
				}
			}
			console.log(homes)
			var newData = works.filter(function(item) {
				return item.length;
			});
			works=newData;
			for(let i=0;i<works.length;i++){
				for(let j=0;j<works[i].length;j++){
						if (works[i][j]==''||works[i][j]==null||typeof(works[i][j])==undefined) {
							works[i].splice(j, 1)
							j--
						}
				}
			}
			if(homes==-1){
				$.growl.warning({
									title: "咕咚一键云班课",
								message: "无作业任务！！！"
				});
			}else{
					$.growl.notice({
										title: "咕咚一键云班课",
									message: "以获取作业任务"
					});
			}
		}
})
	/**
	 * function：判断网页
	 */
		function keCheng(){
			if($("section").attr('id')=='main'){
				$.growl.notice({
						title: "咕咚一键云班课",
					message: "选择要刷的课程 \</br>路径:我加入的—课程—进入>"
				});
				return 0
			}else if($(".selected .fontsize-14").text()=="活动"){
				$.growl.notice({
						title: "咕咚一键云班课",
					message: "请选择资源才能运行"
				});
				return 0
			}else{
				return 1
			}
		}
 
		/**
		 * @function：阻止默认事件
		 * @name：stopDefault()
		 * @stopDefault()
		 * 	e:标签event事件
		 */
		function stopDefault(e) {
			if (e && e.preventDefault)
					e.preventDefault();
			else
					window.event.returnValue = false; //兼容IE
		}
 
	/**
	 * function：作业任务量
	 */
	function numbers(){
			$("#numbers").children("span").text(function(indexs,oldhtml){
				oldhtml=Number(oldhtml)-1
				if(!Number(oldhtml)){
					$.growl.notice({
							title: "咕咚一键云班课",
						message: "作业已经全部完成\</br>点击go按钮即可刷新"
					});
				}
				return oldhtml
			})
	}
	
		/**
		 * @function：自动刷作业
		 * @name：work()
		 */
		function work(x,y){
		let time=0
		let speed=duration*1000
		let delay=speed/load
		for(let i=x;i<=works.length-1;i++){
			(function(i){
					var offc=setTimeout(function(){
							for(let j=y;j<works[i].length;j++){
								(function(i,j){
									var offc=setTimeout(function(){
										switch (works[i][j].attr('class')){
											case "res-row-open-enable res-row preview ":
											case "res-row-open-enable res-row preview  drag-res-row":
													switch (works[i][j].attr('data-mime')){
														case "image":
															console.log("image");
															works[i][j].trigger("click");
															setTimeout(function(){
																core(i,j,delay,$(".viewer-canvas").children().length,img,speed)
															},speed/2)	
															oRange+=(100/homes)
															numbers()
															break;
														case "audio":
															console.log("audio");
															works[i][j].trigger("click");
															setTimeout(function(){
																core(i,j,delay,$(".mejs__currenttime").eq(1).text()!='00:00',audio,speed)
															},speed/2)
															oRange+=(100/homes)
															numbers()
															break;
														case "video":
															console.log("video");
															works[i][j].trigger("click");
															setTimeout(function(){
																	if($("#preview-video_native_hls").length){
																		//core(i,j,delay,$("#preview-video_native_hls")[0].currentTime,video,speed)
																		//$("#preview-video_native_hls")[0].currentTime=0;
																		core(i,j,delay,$(".mejs__currenttime").eq(0).text()!='00:00',video,speed)
																	}else  if($("#preview-video_html5").length){
																		//core(i,j,delay,$("#preview-video_html5")[0].currentTime,video1,speed)
																		//$("#preview-video_html5")[0].currentTime=0;
																		core(i,j,delay,$(".mejs__currenttime").eq(1).text()!='00:00',video,speed)
																	};
															},speed/2);
															oRange+=(100/homes)
															numbers()
															break;
														default:
															console.log("未知"+works[i][j].attr('class'));
															numbers()
															oRange+=(100/homes)
															break;
													}
											break;
											case "res-row-open-enable res-row preview-file  drag-res-row":
											case "res-row-open-enable res-row preview-file ":
											case "res-row-open-enable res-row web  drag-res-row":
												console.log("application");
												GM_setValue('myClose',1);
												works[i][j].trigger("click");
												// window.parent.location.reload();
												numbers()
												oRange+=(100/homes)
												break;
											case "res-row-open-enable res-row download-res  drag-res-row":
											case "res-row-open-enable res-row download-res ":
												console.log("text");
												works[i][j].children(".operation.manual-order-hide-part").children("ul").children(".download-res-button").children("a")[0].click()
												oRange+=(100/homes)
												numbers()
												break;
											default:
												console.log("未知")
												console.log(works[i][j].eq(0))
												console.log(works[i][j].attr('data-mime')+" "+works[i][j].attr('class'));
												numbers()
												oRange+=(100/homes)
												break;
										}
									},j*speed)
									if(y){
										y=0;
									}
								})(i,j)
							}
					},time+=i?works[i-1].length*speed:0);
				})(i)
			}
		}
 
/**
 * @function：音频类型作业
 *
 */
var audio=function(a){
	if(a){
		$(".close-window").trigger("click");
		$("#preview-audio_html5").trigger("pause")
		console.log("111111")
		$(".mejs__currenttime").eq(1).text('00:00')
	}else{
		$(".close-window").trigger("click");
	}
	return{
		//x:!$("#preview-audio_html5")[0].paused
		x:$(".mejs__currenttime").eq(1).text()!='00:00'
	}
}
 
/**
	 * @function：图片类型作业
	 *
	 */
	var img=function(a){
			if(a){
				$(".viewer-button.viewer-close").trigger("click");
			}else{
				$(".viewer-button.viewer-close").trigger("click");
			}
			return{
				x:$(".viewer-canvas").children().length
			}
	}
	
	/**
	 * @function：视频类型作业
	 *
	 */
	var video=function(a){
		if(a==1){
			$("#preview-video_native_hls")[0].currentTime=$("#preview-video_native_hls")[0].duration
			$("#preview-video_native_hls").trigger("pause")
			$(".close-window").trigger("click");
			$(".mejs__currenttime").eq(0).text('00:00')
		}else if(a==0){
			$(".close-window").trigger("click");
		}
		return{
			//x:$("#preview-video_native_hls")[0].currentTime
			x:$(".mejs__currenttime").eq(0).text()!='00:00'
		}
	}
	var video1=function(a){
		if(a==1){
			$("#preview-video_html5")[0].currentTime=$("#preview-video_html5")[0].duration
			$("#preview-video_html5").trigger("pause")
			$(".close-window").trigger("click");
			$(".mejs__currenttime").eq(1).text('00:00')
		}else if(a==0){
			$(".close-window").trigger("click");
		}
		return{
			//x:$("#preview-video_html5")[0].currentTime,
			x:$(".mejs__currenttime").eq(1).text()!='00:00'
		}
	}
	
	/**
	 * @param {Object} i
	 * @param {Object} j
	 * @param {Object} delay
	 * @param {Object} condition
	 * @param {Object} method
	 * @param {Object} speed
	 */
function core(i,j,delay,condition,method,speed){
	var wait=0;//初始化等待加载时间
	if(condition){//模拟作业在加载中
			console.log("作业资源以加载成功")
			method(1)
			//console.log(method)
	}else{
			var offb
			var offd=setTimeout(function(){
				console.log("关闭一次性计数器")
				clearInterval(offb);//关闭循环计数器
				for(var z=1;z<1000;z++){//关闭一次性计数器
					clearTimeout(z);
				}
					$(".growl-close").eq(0).trigger("click");
					again()
			},speed/2-200)
			again()
			function again(){
				$.growl.warning({
					title: "咕咚一键云班课",
					message: "作业资源加载中\</br>作业："+works[i][j].children().eq(5).children(":first").text()
				});
				offb=setInterval(function() {
					wait++//加载累加
					if(wait>=(1000/delay)*load){//加载超时
						if(GM_getValue('open')=="off"){
							clearInterval(offb);//关闭循环计数器
							console.log("刷取失败\n"+$(".res-group-name").eq(i).text()+"的<br/>第"+(j+1)+"个\n作业:"+works[i][j].children().eq(5).children(":first").text())
							$.growl.error({
								title: "咕咚一键云班课",
								message: "刷取失败\</br>"+$(".res-group-name").eq(i).text()+"的<br/>第"+(j+1)+"个\</br>作业:"+works[i][j].children().eq(5).children(":first").text()
							});
							method(0);
							if(works[i].length-1==j){
								work(i+1,0)//开启做作业
							}else{
								work(i,j+1)//开启做作业
							}
							setTimeout(function(){
								$.growl.error({
									title: "咕咚一键云班课",
									message:"正在执行中请勿关闭"
									});
							},speed)
						}else if(wait%(1000/delay)*load==0){
							$.growl.error({
								title: "咕咚一键云班课",
								message: "作业："+works[i][j].children().eq(5).children(":first").text()+" \n<br/>第"+wait+"次重新加载中！"
							});
						}
						
						if(method(2).x&&GM_getValue('open')=="on"){
							clearInterval(offb);//关闭循环计数器
							$.growl.notice({
									title: "咕咚一键云班课",
								message: "资源以加载成功,刷取成功"
							});
							console.log("资源以加载成功3")
							method(1)
							if(works[i].length-1==j){
								work(i+1,0)//开启做作业
							}else{
								work(i,j+1)//开启做作业
							}
							setTimeout(function(){
								$.growl.error({
									title: "咕咚一键云班课",
									message:"正在执行中请勿关闭"
									});
							},speed)
						}
						
					}else if(method(2).x&&wait*delay<speed/2-200){
						clearTimeout(offd);
						clearInterval(offb);//关闭循环计数器
						console.log("资源以加载成功2")
						method(1)
					}else{
						if(wait==parseInt(load/2)){
							$.growl.warning({
								title: "咕咚一键云班课",
								message: "作业资源等待加载中！\</br>当前网络不稳定！\</br>部分无法自动完成！\</br>建议切换更快的网络！"
							});
						}
						console.log("作业："+works[i][j].children().eq(5).children(":first").text()+" \n第"+wait+"次重新加载中！");//加载中
					}
				}, delay);
			}
	}
}
	
 
 
 
/**
 * @function：进度条
 */
 
		let canvas = document.getElementById("c")
		let ctx = canvas.getContext("2d")
		let oRange = 0
		let M = Math
		let Sin = M.sin
		let Cos = M.cos
		let Sqrt = M.sqrt
		let Pow = M.pow
		let PI = M.PI
		let Round = M.round
		let oW = canvas.width = 60
		let oH = canvas.height = 60
		let lineWidth = -1// 线宽
		let r = (oW / 2) // 大半径
		let cR = r - 10 * lineWidth
		ctx.beginPath()
		ctx.lineWidth = lineWidth
 
		// 水波动画初始参数
		let axisLength = 2 * r - 16 * lineWidth // Sin 图形长度
		let unit = axisLength / 9 // 波浪宽
		let range = .4 // 浪幅
		let nowrange = range
		let xoffset = 8 * lineWidth // x 轴偏移量
		let data = ~~(oRange) / 100 // 数据量
		let sp = 0 // 周期偏移量
		let nowdata = 0
		let waveupsp = 0.006 // 水波上涨速度
 
		// 圆动画初始参数
		let arcStack=new Array();
		arcStack = [] // 圆栈
		let bR = r - 8 * lineWidth
		let soffset = -(PI / 2) // 圆动画起始位置
		let circleLock = true // 起始动画锁
 
		// 获取圆动画轨迹点集
		for (var i = soffset; i < soffset + 2 * PI; i += 1 / (8 * PI)) {
		    arcStack.push([
		        r + bR * Cos(i),
		        r + bR * Sin(i)
		    ])
		}
		// 圆起始点
		let cStartPoint = arcStack.shift();
		ctx.strokeStyle = "#70E0F3";
		ctx.moveTo(cStartPoint[0], cStartPoint[1]);
		// 开始渲染
		render();
 
		function drawSine() {
		    ctx.beginPath();
		    ctx.save();
		    var Stack = []; // 记录起始点和终点坐标
		    for (var i = xoffset; i <= xoffset + axisLength; i += 20 / axisLength) {
		        var x = sp + (xoffset + i) / unit;
		        var y = Sin(x) * nowrange;
		        var dx = i;
		        var dy = 2 * cR * (1 - nowdata) + (r - cR) - (unit * y);
		        ctx.lineTo(dx, dy);
		        Stack.push([dx, dy])
		    }
		    // 获取初始点和结束点
		    var startP = Stack[0]
		    var endP = Stack[Stack.length - 1]
		    ctx.lineTo(xoffset + axisLength, oW);
		    ctx.lineTo(xoffset, oW);
		    ctx.lineTo(startP[0], startP[1])
		    ctx.fillStyle = "#70E0F3";
		    ctx.fill();
		    ctx.restore();
		}
 
		function drawText() {
		    ctx.globalCompositeOperation = 'source-over';
		    var size = 0.4 * cR;
		    ctx.font = 'bold ' + size + 'px Microsoft Yahei';
				var gradient=ctx.createLinearGradient(0,0,canvas.width,0);
				gradient.addColorStop("0","magenta");
		    let txt = (nowdata.toFixed(2) * 100).toFixed(0) + '`%';
		    var fonty = r + size / 2;
		    var fontx = r - size * 0.8;
		    ctx.fillStyle = "white";
		    ctx.textAlign = 'center';
				ctx.strokeStyle="#5F6368";
				ctx.strokeText(txt, r + 5, r + 20)
		    ctx.fillText(txt, r + 5, r + 20)
		}
 
		//橘黄色进度圈
		function orangeCircle() {
		    ctx.beginPath();
		    ctx.strokeStyle = '#70E0F3';
		    //使用这个使圆环两端是圆弧形状
		    ctx.lineCap = 'round';
		    ctx.arc(r, r, cR - 5, 0 * (Math.PI / 180.0) - (Math.PI / 2), (nowdata * 360) * (Math.PI / 180.0) - (Math.PI / 2));
		    ctx.stroke();
		    ctx.save()
		}
		//裁剪中间水圈
		function clipCircle() {
		    ctx.beginPath();
		    ctx.arc(r, r, cR - 10, 0, 2 * Math.PI, false);
		    ctx.clip();
		}
		//渲染canvas
		function render() {
		    ctx.clearRect(0, 0, oW, oH);
		   //橘黄色进度圈
		    orangeCircle();
		    //裁剪中间水圈
		    clipCircle();
		    // 控制波幅
		//  oRange.addEventListener("change", function() {
		        data = ~~(oRange) / 100;
		//  }, 0);
		    if (data >= 0.85) {
		        if (nowrange > range / 4) {
		            var t = range * 0.01;
		            nowrange -= t;
		        }
		    } else if (data <= 0.1) {
		        if (nowrange < range * 1.5) {
		            var t = range * 0.01;
		            nowrange += t;
		        }
		    } else {
		        if (nowrange <= range) {
		            var t = range * 0.01;
		            nowrange += t;
		        }
		        if (nowrange >= range) {
		            var t = range * 0.01;
		            nowrange -= t;
		        }
		    }
		    if ((data - nowdata) > 0) {
		        nowdata += waveupsp;
		    }
		    if ((data - nowdata) < 0) {
		        nowdata -= waveupsp
		    }
		    sp += 0.07;
		    // 开始水波动画
		    drawSine();
		    // 写字
		    drawText();
		    requestAnimationFrame(render)
		}
})();
 
		
 