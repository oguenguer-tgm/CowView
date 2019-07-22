// Garden Gnome Software - Skin
// Pano2VR 5.2.5/15998
// Filename: CowView_Skin.ggsk
// Generated Mo. Jul 22 16:13:46 2019

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
	var nodeMarker=[];
	var activeNodeMarker=[];
	this.player=player;
	this.player.skinObj=this;
	this.divSkin=player.divSkin;
	this.ggUserdata=me.player.userdata;
	this.lastSize={ w: -1,h: -1 };
	var basePath="";
	// auto detect base path
	if (base=='?') {
		var scripts = document.getElementsByTagName('script');
		for(var i=0;i<scripts.length;i++) {
			var src=scripts[i].src;
			if (src.indexOf('skin.js')>=0) {
				var p=src.lastIndexOf('/');
				if (p>=0) {
					basePath=src.substr(0,p+1);
				}
			}
		}
	} else
	if (base) {
		basePath=base;
	}
	this.elementMouseDown=[];
	this.elementMouseOver=[];
	var cssPrefix='';
	var domTransition='transition';
	var domTransform='transform';
	var prefixes='Webkit,Moz,O,ms,Ms'.split(',');
	var i;
	if (typeof document.body.style['transform'] == 'undefined') {
		for(var i=0;i<prefixes.length;i++) {
			if (typeof document.body.style[prefixes[i] + 'Transform'] !== 'undefined') {
				cssPrefix='-' + prefixes[i].toLowerCase() + '-';
				domTransition=prefixes[i] + 'Transition';
				domTransform=prefixes[i] + 'Transform';
			}
		}
	}
	
	this.player.setMargins(0,0,0,0);
	
	this.updateSize=function(startElement) {
		var stack=[];
		stack.push(startElement);
		while(stack.length>0) {
			var e=stack.pop();
			if (e.ggUpdatePosition) {
				e.ggUpdatePosition();
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	
	parameterToTransform=function(p) {
		var hs='translate(' + p.rx + 'px,' + p.ry + 'px) rotate(' + p.a + 'deg) scale(' + p.sx + ',' + p.sy + ')';
		return hs;
	}
	
	this.findElements=function(id,regex) {
		var r=[];
		var stack=[];
		var pat=new RegExp(id,'');
		stack.push(me.divSkin);
		while(stack.length>0) {
			var e=stack.pop();
			if (regex) {
				if (pat.test(e.ggId)) r.push(e);
			} else {
				if (e.ggId==id) r.push(e);
			}
			if (e.hasChildNodes()) {
				for(var i=0;i<e.childNodes.length;i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
		return r;
	}
	
	this.addSkin=function() {
		var hs='';
		this.ggCurrentTime=new Date().getTime();
		this._button_auto_rotate=document.createElement('div');
		this._button_auto_rotate.ggId="button_auto_rotate";
		this._button_auto_rotate.ggLeft=-560;
		this._button_auto_rotate.ggTop=-458;
		this._button_auto_rotate.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_auto_rotate.ggVisible=true;
		this._button_auto_rotate.className='ggskin ggskin_container ';
		this._button_auto_rotate.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -560px;';
		hs+='position : absolute;';
		hs+='top : -458px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._button_auto_rotate.setAttribute('style',hs);
		this._button_auto_rotate.style[domTransform + 'Origin']='50% 50%';
		me._button_auto_rotate.ggIsActive=function() {
			return false;
		}
		me._button_auto_rotate.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_auto_rotate.onclick=function (e) {
			me.player.toggleAutorotate();
		}
		this._button_auto_rotate.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._stop_rotate_image=document.createElement('div');
		this._stop_rotate_image__img=document.createElement('img');
		this._stop_rotate_image__img.className='ggskin ggskin_svg';
		this._stop_rotate_image__img.setAttribute('src',basePath + 'images/stop_rotate_image.svg');
		this._stop_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._stop_rotate_image__img['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__img);
		this._stop_rotate_image__imgo=document.createElement('img');
		this._stop_rotate_image__imgo.className='ggskin ggskin_svg';
		this._stop_rotate_image__imgo.setAttribute('src',basePath + 'images/stop_rotate_image__o.svg');
		this._stop_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._stop_rotate_image__imgo['ondragstart']=function() { return false; };
		this._stop_rotate_image.appendChild(this._stop_rotate_image__imgo);
		this._stop_rotate_image.ggId="stop_rotate_image";
		this._stop_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._stop_rotate_image.ggVisible=false;
		this._stop_rotate_image.className='ggskin ggskin_svg ';
		this._stop_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 730px;';
		hs+='position : absolute;';
		hs+='top : 376px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._stop_rotate_image.setAttribute('style',hs);
		this._stop_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._stop_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._stop_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._stop_rotate_image.onmouseover=function (e) {
			me._stop_rotate_image__img.style.visibility='hidden';
			me._stop_rotate_image__imgo.style.visibility='inherit';
		}
		this._stop_rotate_image.onmouseout=function (e) {
			me._stop_rotate_image__img.style.visibility='inherit';
			me._stop_rotate_image__imgo.style.visibility='hidden';
		}
		me._stop_rotate_image.ggCurrentLogicStateVisible = -1;
		this._stop_rotate_image.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._stop_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._stop_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._stop_rotate_image.style[domTransition]='';
				if (me._stop_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._stop_rotate_image.style.visibility=(Number(me._stop_rotate_image.style.opacity)>0||!me._stop_rotate_image.style.opacity)?'inherit':'hidden';
					me._stop_rotate_image.ggVisible=true;
				}
				else {
					me._stop_rotate_image.style.visibility="hidden";
					me._stop_rotate_image.ggVisible=false;
				}
			}
		}
		this._stop_rotate_image.ggUpdatePosition=function (useTransition) {
		}
		this._button_auto_rotate.appendChild(this._stop_rotate_image);
		this._start_rotate_image=document.createElement('div');
		this._start_rotate_image__img=document.createElement('img');
		this._start_rotate_image__img.className='ggskin ggskin_svg';
		this._start_rotate_image__img.setAttribute('src',basePath + 'images/start_rotate_image.svg');
		this._start_rotate_image__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._start_rotate_image__img['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__img);
		this._start_rotate_image__imgo=document.createElement('img');
		this._start_rotate_image__imgo.className='ggskin ggskin_svg';
		this._start_rotate_image__imgo.setAttribute('src',basePath + 'images/start_rotate_image__o.svg');
		this._start_rotate_image__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._start_rotate_image__imgo['ondragstart']=function() { return false; };
		this._start_rotate_image.appendChild(this._start_rotate_image__imgo);
		this._start_rotate_image.ggId="start_rotate_image";
		this._start_rotate_image.ggLeft=714;
		this._start_rotate_image.ggTop=344;
		this._start_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._start_rotate_image.ggVisible=true;
		this._start_rotate_image.className='ggskin ggskin_svg ';
		this._start_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 714px;';
		hs+='position : absolute;';
		hs+='top : 344px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._start_rotate_image.setAttribute('style',hs);
		this._start_rotate_image.style[domTransform + 'Origin']='50% 50%';
		me._start_rotate_image.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._start_rotate_image.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._start_rotate_image.onmouseover=function (e) {
			me._start_rotate_image__img.style.visibility='hidden';
			me._start_rotate_image__imgo.style.visibility='inherit';
		}
		this._start_rotate_image.onmouseout=function (e) {
			me._start_rotate_image__img.style.visibility='inherit';
			me._start_rotate_image__imgo.style.visibility='hidden';
		}
		me._start_rotate_image.ggCurrentLogicStateVisible = -1;
		this._start_rotate_image.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsAutorotating() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._start_rotate_image.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._start_rotate_image.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._start_rotate_image.style[domTransition]='';
				if (me._start_rotate_image.ggCurrentLogicStateVisible == 0) {
					me._start_rotate_image.style.visibility="hidden";
					me._start_rotate_image.ggVisible=false;
				}
				else {
					me._start_rotate_image.style.visibility=(Number(me._start_rotate_image.style.opacity)>0||!me._start_rotate_image.style.opacity)?'inherit':'hidden';
					me._start_rotate_image.ggVisible=true;
				}
			}
		}
		this._start_rotate_image.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_auto_rotate.appendChild(this._start_rotate_image);
		this.divSkin.appendChild(this._button_auto_rotate);
		this._button_fullscreen=document.createElement('div');
		this._button_fullscreen.ggId="button_fullscreen";
		this._button_fullscreen.ggLeft=-137;
		this._button_fullscreen.ggTop=-79;
		this._button_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fullscreen.ggVisible=true;
		this._button_fullscreen.className='ggskin ggskin_container ';
		this._button_fullscreen.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -137px;';
		hs+='position : absolute;';
		hs+='top : -79px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:none;';
		this._button_fullscreen.setAttribute('style',hs);
		this._button_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_fullscreen.ggIsActive=function() {
			return false;
		}
		me._button_fullscreen.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_fullscreen.onclick=function (e) {
			me.player.toggleFullscreen();
		}
		this._button_fullscreen.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_image_normalscreen=document.createElement('div');
		this._button_image_normalscreen__img=document.createElement('img');
		this._button_image_normalscreen__img.className='ggskin ggskin_svg';
		this._button_image_normalscreen__img.setAttribute('src',basePath + 'images/button_image_normalscreen.svg');
		this._button_image_normalscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_normalscreen__img['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__img);
		this._button_image_normalscreen__imgo=document.createElement('img');
		this._button_image_normalscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_normalscreen__imgo.setAttribute('src',basePath + 'images/button_image_normalscreen__o.svg');
		this._button_image_normalscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_normalscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_normalscreen.appendChild(this._button_image_normalscreen__imgo);
		this._button_image_normalscreen.ggId="button_image_normalscreen";
		this._button_image_normalscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_normalscreen.ggVisible=false;
		this._button_image_normalscreen.className='ggskin ggskin_svg ';
		this._button_image_normalscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_normalscreen.setAttribute('style',hs);
		this._button_image_normalscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_normalscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_normalscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_normalscreen.onmouseover=function (e) {
			me._button_image_normalscreen__img.style.visibility='hidden';
			me._button_image_normalscreen__imgo.style.visibility='inherit';
		}
		this._button_image_normalscreen.onmouseout=function (e) {
			me._button_image_normalscreen__img.style.visibility='inherit';
			me._button_image_normalscreen__imgo.style.visibility='hidden';
		}
		me._button_image_normalscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_normalscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_normalscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_normalscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_normalscreen.style[domTransition]='';
				if (me._button_image_normalscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_normalscreen.style.visibility=(Number(me._button_image_normalscreen.style.opacity)>0||!me._button_image_normalscreen.style.opacity)?'inherit':'hidden';
					me._button_image_normalscreen.ggVisible=true;
				}
				else {
					me._button_image_normalscreen.style.visibility="hidden";
					me._button_image_normalscreen.ggVisible=false;
				}
			}
		}
		this._button_image_normalscreen.ggUpdatePosition=function (useTransition) {
			me._button_image_normalscreen.ggUpdateConditionResize();
		}
		this._button_fullscreen.appendChild(this._button_image_normalscreen);
		this._button_image_fullscreen=document.createElement('div');
		this._button_image_fullscreen__img=document.createElement('img');
		this._button_image_fullscreen__img.className='ggskin ggskin_svg';
		this._button_image_fullscreen__img.setAttribute('src',basePath + 'images/button_image_fullscreen.svg');
		this._button_image_fullscreen__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_fullscreen__img['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__img);
		this._button_image_fullscreen__imgo=document.createElement('img');
		this._button_image_fullscreen__imgo.className='ggskin ggskin_svg';
		this._button_image_fullscreen__imgo.setAttribute('src',basePath + 'images/button_image_fullscreen__o.svg');
		this._button_image_fullscreen__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_fullscreen__imgo['ondragstart']=function() { return false; };
		this._button_image_fullscreen.appendChild(this._button_image_fullscreen__imgo);
		this._button_image_fullscreen.ggId="button_image_fullscreen";
		this._button_image_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_fullscreen.ggVisible=true;
		this._button_image_fullscreen.className='ggskin ggskin_svg ';
		this._button_image_fullscreen.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 0px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_fullscreen.setAttribute('style',hs);
		this._button_image_fullscreen.style[domTransform + 'Origin']='50% 50%';
		me._button_image_fullscreen.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_fullscreen.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_fullscreen.onmouseover=function (e) {
			me._button_image_fullscreen__img.style.visibility='hidden';
			me._button_image_fullscreen__imgo.style.visibility='inherit';
		}
		this._button_image_fullscreen.onmouseout=function (e) {
			me._button_image_fullscreen__img.style.visibility='inherit';
			me._button_image_fullscreen__imgo.style.visibility='hidden';
		}
		me._button_image_fullscreen.ggCurrentLogicStateVisible = -1;
		this._button_image_fullscreen.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getIsFullscreen() == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._button_image_fullscreen.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._button_image_fullscreen.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._button_image_fullscreen.style[domTransition]='';
				if (me._button_image_fullscreen.ggCurrentLogicStateVisible == 0) {
					me._button_image_fullscreen.style.visibility="hidden";
					me._button_image_fullscreen.ggVisible=false;
				}
				else {
					me._button_image_fullscreen.style.visibility=(Number(me._button_image_fullscreen.style.opacity)>0||!me._button_image_fullscreen.style.opacity)?'inherit':'hidden';
					me._button_image_fullscreen.ggVisible=true;
				}
			}
		}
		this._button_image_fullscreen.ggUpdatePosition=function (useTransition) {
			me._button_image_fullscreen.ggUpdateConditionResize();
		}
		this._button_fullscreen.appendChild(this._button_image_fullscreen);
		this.divSkin.appendChild(this._button_fullscreen);
		this._ht_room_descr=document.createElement('div');
		this._ht_room_descr__text=document.createElement('div');
		this._ht_room_descr.className='ggskin ggskin_textdiv';
		this._ht_room_descr.ggTextDiv=this._ht_room_descr__text;
		this._ht_room_descr.ggId="ht_room_descr";
		this._ht_room_descr.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_room_descr.ggVisible=true;
		this._ht_room_descr.className='ggskin ggskin_text ';
		this._ht_room_descr.ggType='text';
		hs ='';
		hs+='height : 35px;';
		hs+='left : 2.14%;';
		hs+='opacity : 0.70001;';
		hs+='position : absolute;';
		hs+='top : 2.95%;';
		hs+='visibility : inherit;';
		hs+='width : 305px;';
		hs+='pointer-events:auto;';
		hs+='padding: 5px;';
		this._ht_room_descr.setAttribute('style',hs);
		this._ht_room_descr.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='background: #ffffff;';
		hs+='border: 1px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: #000000;';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 6px 7px 6px 7px;';
		hs+='overflow: hidden;';
		this._ht_room_descr__text.setAttribute('style',hs);
		this._ht_room_descr.ggUpdateText=function() {
			var hs=me.ggUserdata.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_room_descr.ggUpdateText();
		this._ht_room_descr.appendChild(this._ht_room_descr__text);
		me._ht_room_descr.ggIsActive=function() {
			return false;
		}
		me._ht_room_descr.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._ht_room_descr.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._ht_room_descr);
		this._dropdown_menu=document.createElement('div');
		this._dropdown_menu.ggId="Dropdown Menu";
		this._dropdown_menu.ggLeft=-250;
		this._dropdown_menu.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu.ggVisible=true;
		this._dropdown_menu.className='ggskin ggskin_container ';
		this._dropdown_menu.ggType='container';
		hs ='';
		hs+='height : 142px;';
		hs+='left : -250px;';
		hs+='position : absolute;';
		hs+='top : 29px;';
		hs+='visibility : inherit;';
		hs+='width : 190px;';
		hs+='pointer-events:none;';
		this._dropdown_menu.setAttribute('style',hs);
		this._dropdown_menu.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu.ggIsActive=function() {
			return false;
		}
		me._dropdown_menu.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._dropdown_menu.ggCurrentLogicStateVisible = -1;
		this._dropdown_menu.ggUpdateConditionResize=function () {
			var newLogicStateVisible;
			if (
				(me.player.getViewerSize().height <= 340)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._dropdown_menu.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._dropdown_menu.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._dropdown_menu.style[domTransition]='';
				if (me._dropdown_menu.ggCurrentLogicStateVisible == 0) {
					me._dropdown_menu.style.visibility="hidden";
					me._dropdown_menu.ggVisible=false;
				}
				else {
					me._dropdown_menu.style.visibility=(Number(me._dropdown_menu.style.opacity)>0||!me._dropdown_menu.style.opacity)?'inherit':'hidden';
					me._dropdown_menu.ggVisible=true;
				}
			}
		}
		this._dropdown_menu.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
			me._dropdown_menu.ggUpdateConditionResize();
		}
		this._dropdown_background=document.createElement('div');
		this._dropdown_background.ggId="Dropdown Background";
		this._dropdown_background.ggLeft=-190;
		this._dropdown_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_background.ggVisible=false;
		this._dropdown_background.className='ggskin ggskin_rectangle ';
		this._dropdown_background.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #afafaf;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : default;';
		hs+='height : 118px;';
		hs+='left : -190px;';
		hs+='position : absolute;';
		hs+='top : 23px;';
		hs+='visibility : hidden;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		this._dropdown_background.setAttribute('style',hs);
		this._dropdown_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_background.onclick=function (e) {
			me._dropdown_menu_title_background.onclick();
		}
		this._dropdown_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._dropdown_scrollarea=document.createElement('div');
		this._dropdown_scrollarea__content=document.createElement('div');
		this._dropdown_scrollarea.ggContent=this._dropdown_scrollarea__content;
		this._dropdown_scrollarea.appendChild(this._dropdown_scrollarea__content);
		hs ='';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		this._dropdown_scrollarea__content.setAttribute('style',hs);
		this._dropdown_scrollarea.ggId="Dropdown Scrollarea";
		this._dropdown_scrollarea.ggLeft=-186;
		this._dropdown_scrollarea.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_scrollarea.ggVisible=true;
		this._dropdown_scrollarea.className='ggskin ggskin_scrollarea ';
		this._dropdown_scrollarea.ggType='scrollarea';
		hs ='';
		hs+='-webkit-overflow-scrolling : touch;';
		hs+='border : 1px solid rgba(0, 0, 0, 0);';
		hs+='height : 115px;';
		hs+='left : -187px;';
		hs+='overflow-x : hidden;';
		hs+='overflow-y : auto;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : inherit;';
		hs+='width : 188px;';
		hs+='pointer-events:auto;';
		this._dropdown_scrollarea.setAttribute('style',hs);
		this._dropdown_scrollarea.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_scrollarea.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_scrollarea.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_scrollarea.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
			{
				this.ggContent.style.left = '0px';
				this.ggContent.style.marginLeft = '0px';
				this.ggContent.style.top = '0px';
				this.ggContent.style.marginTop = '0px';
			}
		}
		this._dropdown_cloner=document.createElement('div');
		this._dropdown_cloner.ggNumRepeat = 1;
		this._dropdown_cloner.ggWidth = 180;
		this._dropdown_cloner.ggHeight = 25;
		this._dropdown_cloner.ggUpdating = false;
		this._dropdown_cloner.ggFilter = [];
		this._dropdown_cloner.ggUpdate = function(filter) {
			if(me._dropdown_cloner.ggUpdating == true) return;
			me._dropdown_cloner.ggUpdating = true;
			if (typeof filter=='object') {
				me._dropdown_cloner.ggFilter = filter;
			} else {
				filter = me._dropdown_cloner.ggFilter;
			};
			if (me._dropdown_cloner.hasChildNodes() == true) {
				while (me._dropdown_cloner.firstChild) {
					me._dropdown_cloner.removeChild(me._dropdown_cloner.firstChild);
				}
			}
			var tourNodes = me.player.getNodeIds();
			var row = 0;
			var column = 0;
			var numCols = me._dropdown_cloner.ggNumRepeat;
			if (numCols < 1) numCols = 1;
			for (i=0; i < tourNodes.length; i++) {
				var nodeId = tourNodes[i];
				var passed = false;
				if (filter.length > 0) {
					var nodeData = me.player.getNodeUserdata(nodeId);
					for (j=0; j < filter.length; j++) {
						if (nodeData['tags'].indexOf(filter[j]) != -1) passed = true;
					}
				}
				else passed = true;
				if (passed) {
					me._dropdown_cloner__node = document.createElement('div');
					me._dropdown_cloner.appendChild(me._dropdown_cloner__node);
					me._dropdown_cloner__node.setAttribute('style','position: absolute; top: ' + (row * me._dropdown_cloner.ggHeight) + 'px; left:' + (column * me._dropdown_cloner.ggWidth) + 'px; height: ' + me._dropdown_cloner.ggHeight + 'px; width: ' + me._dropdown_cloner.ggWidth + 'px; overflow: hidden;');
					var inst = new SkinCloner_dropdown_cloner_Class(nodeId, me);
					me._dropdown_cloner__node.appendChild(inst.__div);
					me._dropdown_cloner__node.ggObj=inst;
					me.updateSize(inst.__div);
					column++;
					if (column >= numCols) {
						column = 0;
						row++;
					}
				}
			}
			me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
			me._dropdown_cloner.ggUpdating = false;
		}
		this._dropdown_cloner.ggClonerCallChildFunctions = function(functionname){
			var stack = [];
			var i;
			for(i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				stack.push(me._dropdown_cloner.childNodes[i]);
			}
			while (stack.length > 0) {
				var e = stack.pop();
				if (typeof e[functionname] == 'function')
					e[functionname]();
				if(e.hasChildNodes()) {
					for(i=0; i<e.childNodes.length; i++) {
						stack.push(e.childNodes[i]);
					}
				}
			}
		}
		this._dropdown_cloner.ggTags = [];
		this._dropdown_cloner.ggId="Dropdown Cloner";
		this._dropdown_cloner.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_cloner.ggVisible=true;
		this._dropdown_cloner.className='ggskin ggskin_cloner ';
		this._dropdown_cloner.ggType='cloner';
		hs ='';
		hs+='height : 24px;';
		hs+='left : 0px;';
		hs+='overflow : visible;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 179px;';
		hs+='pointer-events:none;';
		this._dropdown_cloner.setAttribute('style',hs);
		this._dropdown_cloner.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_cloner.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_cloner.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_cloner.ggUpdateConditionNodeChange=function () {
			var cnode=me.player.getCurrentNode();
			for(var i=0; i<me._dropdown_cloner.childNodes.length; i++) {
				var child=me._dropdown_cloner.childNodes[i];
				if (child.ggObj && child.ggObj.ggNodeId==cnode) {
			        var childOffX = child.offsetLeft;
			        var childOffY = child.offsetTop;
					var p = child.parentElement;
			        while (p != null && p!==this.divSkin) {
						if (p.ggType && p.ggType == 'scrollarea') {
							if ((p.scrollLeft + p.clientWidth) < (childOffX + child.clientWidth)) {
								p.scrollLeft = (childOffX + child.clientWidth) - p.clientWidth;
							}
							if ((p.scrollTop + p.clientHeight) < (childOffY + child.clientHeight)) {
								p.scrollTop = (childOffY + child.clientHeight) - p.clientHeight;
							}
							if (childOffX < p.scrollLeft) {
								p.scrollLeft = childOffX;
							}
							if (childOffY < p.scrollTop) {
								p.scrollTop = childOffY;
							}
						}
						childOffX += p.offsetLeft;
						childOffY += p.offsetTop;
						p = p.parentElement;
					}
				}
			}
		}
		this._dropdown_cloner.ggUpdatePosition=function (useTransition) {
			var w=me.player.getViewerSize().width;
			var h=me.player.getViewerSize().height
			if ((!me._dropdown_cloner.ggLastSize) || (me._dropdown_cloner.ggLastSize.w!=w) || (me._dropdown_cloner.ggLastSize.h!=h)) {
				me._dropdown_cloner.ggLastSize={ w:w, h:h };
				me._dropdown_cloner.ggUpdate();
			}
		}
		this._dropdown_cloner.ggNodeChange=function () {
			me._dropdown_cloner.ggUpdateConditionNodeChange();
		}
		this._dropdown_scrollarea__content.appendChild(this._dropdown_cloner);
		this._dropdown_background.appendChild(this._dropdown_scrollarea);
		this._dropdown_menu.appendChild(this._dropdown_background);
		this._dropdown_menu_title_background=document.createElement('div');
		this._dropdown_menu_title_background.ggId="Dropdown Menu Title Background";
		this._dropdown_menu_title_background.ggLeft=-190;
		this._dropdown_menu_title_background.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title_background.ggVisible=true;
		this._dropdown_menu_title_background.className='ggskin ggskin_rectangle ';
		this._dropdown_menu_title_background.ggType='rectangle';
		hs ='';
		hs+=cssPrefix + 'border-radius : 5px;';
		hs+='border-radius : 5px;';
		hs+='background : #ffffff;';
		hs+='border : 1px solid #000000;';
		hs+='cursor : pointer;';
		hs+='height : 19px;';
		hs+='left : -190px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 187px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_title_background.setAttribute('style',hs);
		this._dropdown_menu_title_background.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_menu_title_background.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title_background.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title_background.onclick=function (e) {
			me._dropdown_background.ggVisible = !me._dropdown_background.ggVisible;
			var flag=me._dropdown_background.ggVisible;
			me._dropdown_background.style[domTransition]='none';
			me._dropdown_background.style.visibility=((flag)&&(Number(me._dropdown_background.style.opacity)>0||!me._dropdown_background.style.opacity))?'inherit':'hidden';
			me._dropdown_open.ggVisible = !me._dropdown_open.ggVisible;
			var flag=me._dropdown_open.ggVisible;
			me._dropdown_open.style[domTransition]='none';
			me._dropdown_open.style.visibility=((flag)&&(Number(me._dropdown_open.style.opacity)>0||!me._dropdown_open.style.opacity))?'inherit':'hidden';
			me._dropdown_close.ggVisible = !me._dropdown_close.ggVisible;
			var flag=me._dropdown_close.ggVisible;
			me._dropdown_close.style[domTransition]='none';
			me._dropdown_close.style.visibility=((flag)&&(Number(me._dropdown_close.style.opacity)>0||!me._dropdown_close.style.opacity))?'inherit':'hidden';
		}
		this._dropdown_menu_title_background.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=true;
		}
		this._dropdown_menu_title_background.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		this._dropdown_menu_title_background.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_title_background']=false;
		}
		me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = -1;
		this._dropdown_menu_title_background.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_title_background'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_title_background.style[domTransition]='background-color none';
				if (me._dropdown_menu_title_background.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(239,239,239,1)";
				}
				else {
					me._dropdown_menu_title_background.style.backgroundColor="rgba(255,255,255,1)";
				}
			}
		}
		this._dropdown_menu_title_background.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
			}
		}
		this._dropdown_menu_title=document.createElement('div');
		this._dropdown_menu_title__text=document.createElement('div');
		this._dropdown_menu_title.className='ggskin ggskin_textdiv';
		this._dropdown_menu_title.ggTextDiv=this._dropdown_menu_title__text;
		this._dropdown_menu_title.ggId="Dropdown Menu Title";
		this._dropdown_menu_title.ggLeft=-187;
		this._dropdown_menu_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_title.ggVisible=true;
		this._dropdown_menu_title.className='ggskin ggskin_text ';
		this._dropdown_menu_title.ggType='text';
		hs ='';
		hs+='height : 18px;';
		hs+='left : -188px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 162px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_title.setAttribute('style',hs);
		this._dropdown_menu_title.style[domTransform + 'Origin']='100% 0%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 162px;';
		hs+='height: 18px;';
		hs+='border: 0px solid #000000;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: left;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_title__text.setAttribute('style',hs);
		this._dropdown_menu_title.ggUpdateText=function() {
			var hs=me.ggUserdata.title;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._dropdown_menu_title.ggUpdateText();
		this._dropdown_menu_title.appendChild(this._dropdown_menu_title__text);
		me._dropdown_menu_title.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_title.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_title.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_menu_title);
		this._dropdown_open=document.createElement('div');
		this._dropdown_open__img=document.createElement('img');
		this._dropdown_open__img.className='ggskin ggskin_svg';
		this._dropdown_open__img.setAttribute('src',basePath + 'images/dropdown_open.svg');
		this._dropdown_open__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_open__img['ondragstart']=function() { return false; };
		this._dropdown_open.appendChild(this._dropdown_open__img);
		this._dropdown_open.ggId="Dropdown Open";
		this._dropdown_open.ggLeft=-18;
		this._dropdown_open.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_open.ggVisible=true;
		this._dropdown_open.className='ggskin ggskin_svg ';
		this._dropdown_open.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : inherit;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._dropdown_open.setAttribute('style',hs);
		this._dropdown_open.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_open.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_open.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_open.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_open);
		this._dropdown_close=document.createElement('div');
		this._dropdown_close__img=document.createElement('img');
		this._dropdown_close__img.className='ggskin ggskin_svg';
		this._dropdown_close__img.setAttribute('src',basePath + 'images/dropdown_close.svg');
		this._dropdown_close__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_close__img['ondragstart']=function() { return false; };
		this._dropdown_close.appendChild(this._dropdown_close__img);
		this._dropdown_close.ggId="Dropdown Close";
		this._dropdown_close.ggLeft=-18;
		this._dropdown_close.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_close.ggVisible=false;
		this._dropdown_close.className='ggskin ggskin_svg ';
		this._dropdown_close.ggType='svg';
		hs ='';
		hs+='height : 10px;';
		hs+='left : -19px;';
		hs+='position : absolute;';
		hs+='top : 4px;';
		hs+='visibility : hidden;';
		hs+='width : 10px;';
		hs+='pointer-events:auto;';
		this._dropdown_close.setAttribute('style',hs);
		this._dropdown_close.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_close.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_close.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_close.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 1 + w) + 'px';
			}
		}
		this._dropdown_menu_title_background.appendChild(this._dropdown_close);
		this._dropdown_menu.appendChild(this._dropdown_menu_title_background);
		this.divSkin.appendChild(this._dropdown_menu);
		this._button_direction=document.createElement('div');
		this._button_direction.ggId="button_direction";
		this._button_direction.ggLeft=13;
		this._button_direction.ggTop=-92;
		this._button_direction.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_direction.ggVisible=true;
		this._button_direction.className='ggskin ggskin_container ';
		this._button_direction.ggType='container';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 13px;';
		hs+='position : absolute;';
		hs+='top : -92px;';
		hs+='visibility : inherit;';
		hs+='width : 82px;';
		hs+='pointer-events:none;';
		this._button_direction.setAttribute('style',hs);
		this._button_direction.style[domTransform + 'Origin']='50% 50%';
		me._button_direction.ggIsActive=function() {
			return false;
		}
		me._button_direction.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_direction.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this._button_image_right=document.createElement('div');
		this._button_image_right__img=document.createElement('img');
		this._button_image_right__img.className='ggskin ggskin_svg';
		this._button_image_right__img.setAttribute('src',basePath + 'images/button_image_right.svg');
		this._button_image_right__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_right__img['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__img);
		this._button_image_right__imgo=document.createElement('img');
		this._button_image_right__imgo.className='ggskin ggskin_svg';
		this._button_image_right__imgo.setAttribute('src',basePath + 'images/button_image_right__o.svg');
		this._button_image_right__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_right__imgo['ondragstart']=function() { return false; };
		this._button_image_right.appendChild(this._button_image_right__imgo);
		this._button_image_right.ggId="button_image_right";
		this._button_image_right.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_right.ggVisible=true;
		this._button_image_right.className='ggskin ggskin_svg ';
		this._button_image_right.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 51px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_right.setAttribute('style',hs);
		this._button_image_right.style[domTransform + 'Origin']='50% 50%';
		me._button_image_right.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_right.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_right.onmouseover=function (e) {
			me._button_image_right__img.style.visibility='hidden';
			me._button_image_right__imgo.style.visibility='inherit';
		}
		this._button_image_right.onmouseout=function (e) {
			me._button_image_right__img.style.visibility='inherit';
			me._button_image_right__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.onmousedown=function (e) {
			me.elementMouseDown['button_image_right']=true;
		}
		this._button_image_right.onmouseup=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ontouchend=function (e) {
			me.elementMouseDown['button_image_right']=false;
		}
		this._button_image_right.ggUpdatePosition=function (useTransition) {
		}
		this._button_direction.appendChild(this._button_image_right);
		this._button_image_left=document.createElement('div');
		this._button_image_left__img=document.createElement('img');
		this._button_image_left__img.className='ggskin ggskin_svg';
		this._button_image_left__img.setAttribute('src',basePath + 'images/button_image_left.svg');
		this._button_image_left__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_left__img['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__img);
		this._button_image_left__imgo=document.createElement('img');
		this._button_image_left__imgo.className='ggskin ggskin_svg';
		this._button_image_left__imgo.setAttribute('src',basePath + 'images/button_image_left__o.svg');
		this._button_image_left__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_left__imgo['ondragstart']=function() { return false; };
		this._button_image_left.appendChild(this._button_image_left__imgo);
		this._button_image_left.ggId="button_image_left";
		this._button_image_left.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_left.ggVisible=true;
		this._button_image_left.className='ggskin ggskin_svg ';
		this._button_image_left.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -1px;';
		hs+='position : absolute;';
		hs+='top : 15px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_left.setAttribute('style',hs);
		this._button_image_left.style[domTransform + 'Origin']='50% 50%';
		me._button_image_left.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_left.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_left.onmouseover=function (e) {
			me._button_image_left__img.style.visibility='hidden';
			me._button_image_left__imgo.style.visibility='inherit';
		}
		this._button_image_left.onmouseout=function (e) {
			me._button_image_left__img.style.visibility='inherit';
			me._button_image_left__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.onmousedown=function (e) {
			me.elementMouseDown['button_image_left']=true;
		}
		this._button_image_left.onmouseup=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ontouchend=function (e) {
			me.elementMouseDown['button_image_left']=false;
		}
		this._button_image_left.ggUpdatePosition=function (useTransition) {
		}
		this._button_direction.appendChild(this._button_image_left);
		this._button_image_down=document.createElement('div');
		this._button_image_down__img=document.createElement('img');
		this._button_image_down__img.className='ggskin ggskin_svg';
		this._button_image_down__img.setAttribute('src',basePath + 'images/button_image_down.svg');
		this._button_image_down__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_down__img['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__img);
		this._button_image_down__imgo=document.createElement('img');
		this._button_image_down__imgo.className='ggskin ggskin_svg';
		this._button_image_down__imgo.setAttribute('src',basePath + 'images/button_image_down__o.svg');
		this._button_image_down__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_down__imgo['ondragstart']=function() { return false; };
		this._button_image_down.appendChild(this._button_image_down__imgo);
		this._button_image_down.ggId="button_image_down";
		this._button_image_down.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_down.ggVisible=true;
		this._button_image_down.className='ggskin ggskin_svg ';
		this._button_image_down.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : 31px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_down.setAttribute('style',hs);
		this._button_image_down.style[domTransform + 'Origin']='50% 50%';
		me._button_image_down.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_down.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_down.onmouseover=function (e) {
			me._button_image_down__img.style.visibility='hidden';
			me._button_image_down__imgo.style.visibility='inherit';
		}
		this._button_image_down.onmouseout=function (e) {
			me._button_image_down__img.style.visibility='inherit';
			me._button_image_down__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.onmousedown=function (e) {
			me.elementMouseDown['button_image_down']=true;
		}
		this._button_image_down.onmouseup=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ontouchend=function (e) {
			me.elementMouseDown['button_image_down']=false;
		}
		this._button_image_down.ggUpdatePosition=function (useTransition) {
		}
		this._button_direction.appendChild(this._button_image_down);
		this._button_image_up=document.createElement('div');
		this._button_image_up__img=document.createElement('img');
		this._button_image_up__img.className='ggskin ggskin_svg';
		this._button_image_up__img.setAttribute('src',basePath + 'images/button_image_up.svg');
		this._button_image_up__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._button_image_up__img['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__img);
		this._button_image_up__imgo=document.createElement('img');
		this._button_image_up__imgo.className='ggskin ggskin_svg';
		this._button_image_up__imgo.setAttribute('src',basePath + 'images/button_image_up__o.svg');
		this._button_image_up__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._button_image_up__imgo['ondragstart']=function() { return false; };
		this._button_image_up.appendChild(this._button_image_up__imgo);
		this._button_image_up.ggId="button_image_up";
		this._button_image_up.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_image_up.ggVisible=true;
		this._button_image_up.className='ggskin ggskin_svg ';
		this._button_image_up.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 25px;';
		hs+='position : absolute;';
		hs+='top : -2px;';
		hs+='visibility : inherit;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._button_image_up.setAttribute('style',hs);
		this._button_image_up.style[domTransform + 'Origin']='50% 50%';
		me._button_image_up.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._button_image_up.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._button_image_up.onmouseover=function (e) {
			me._button_image_up__img.style.visibility='hidden';
			me._button_image_up__imgo.style.visibility='inherit';
		}
		this._button_image_up.onmouseout=function (e) {
			me._button_image_up__img.style.visibility='inherit';
			me._button_image_up__imgo.style.visibility='hidden';
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.onmousedown=function (e) {
			me.elementMouseDown['button_image_up']=true;
		}
		this._button_image_up.onmouseup=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ontouchend=function (e) {
			me.elementMouseDown['button_image_up']=false;
		}
		this._button_image_up.ggUpdatePosition=function (useTransition) {
		}
		this._button_direction.appendChild(this._button_image_up);
		this.divSkin.appendChild(this._button_direction);
		this._image_3=document.createElement('div');
		this._image_3__img=document.createElement('img');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img.setAttribute('src',basePath + 'images/image_3.png');
		this._image_3__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_3__img.className='ggskin ggskin_image';
		this._image_3__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_3__img);
		this._image_3.appendChild(this._image_3__img);
		this._image_3.ggId="Image 3";
		this._image_3.ggLeft=-37;
		this._image_3.ggTop=-76;
		this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_3.ggVisible=true;
		this._image_3.className='ggskin ggskin_image ';
		this._image_3.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -37px;';
		hs+='position : absolute;';
		hs+='top : -76px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._image_3.setAttribute('style',hs);
		this._image_3.style[domTransform + 'Origin']='50% 50%';
		me._image_3.ggIsActive=function() {
			return false;
		}
		me._image_3.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_3.onclick=function (e) {
			me.player.changeFovLog(1,true);
		}
		this._image_3.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_3);
		this._image_2=document.createElement('div');
		this._image_2__img=document.createElement('img');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img.setAttribute('src',basePath + 'images/image_2.png');
		this._image_2__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_2__img.className='ggskin ggskin_image';
		this._image_2__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_2__img);
		this._image_2.appendChild(this._image_2__img);
		this._image_2.ggId="Image 2";
		this._image_2.ggLeft=-85;
		this._image_2.ggTop=-75;
		this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_2.ggVisible=true;
		this._image_2.className='ggskin ggskin_image ';
		this._image_2.ggType='image';
		hs ='';
		hs+='height : 28px;';
		hs+='left : -85px;';
		hs+='position : absolute;';
		hs+='top : -75px;';
		hs+='visibility : inherit;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._image_2.setAttribute('style',hs);
		this._image_2.style[domTransform + 'Origin']='50% 50%';
		me._image_2.ggIsActive=function() {
			return false;
		}
		me._image_2.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_2.onclick=function (e) {
			me.player.changeFovLog(-1,true);
		}
		this._image_2.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_2);
		this._ht_link_description_title=document.createElement('div');
		this._ht_link_description_title__text=document.createElement('div');
		this._ht_link_description_title.className='ggskin ggskin_textdiv';
		this._ht_link_description_title.ggTextDiv=this._ht_link_description_title__text;
		this._ht_link_description_title.ggId="ht_link_description_title";
		this._ht_link_description_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._ht_link_description_title.ggVisible=false;
		this._ht_link_description_title.className='ggskin ggskin_text ';
		this._ht_link_description_title.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='cursor : pointer;';
		hs+='height : 7px;';
		hs+='left : 5px;';
		hs+='opacity : 0.89999;';
		hs+='position : absolute;';
		hs+='top : 69px;';
		hs+='visibility : hidden;';
		hs+='width : 396px;';
		hs+='pointer-events:auto;';
		this._ht_link_description_title.setAttribute('style',hs);
		this._ht_link_description_title.style[domTransform + 'Origin']='0% 0%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 396px;';
		hs+='height: auto;';
		hs+='background: #0c0c0c;';
		hs+='background: rgba(12,12,12,0.705882);';
		hs+='border: 5px solid #f8f8f8;';
		hs+='border-radius: 10px;';
		hs+=cssPrefix + 'border-radius: 10px;';
		hs+='color: rgba(250,250,250,1);';
		hs+='text-align: left;';
		hs+='white-space: pre-wrap;';
		hs+='padding: 4px 5px 4px 5px;';
		hs+='overflow: hidden;';
		this._ht_link_description_title__text.setAttribute('style',hs);
		this._ht_link_description_title.ggUpdateText=function() {
			var hs=me.player.hotspot.description;
			if (hs!=this.ggText) {
				this.ggText=hs;
				this.ggTextDiv.innerHTML=hs;
				if (this.ggUpdatePosition) this.ggUpdatePosition();
			}
		}
		me._ht_link_description_title.ggUpdateText();
		this._ht_link_description_title.appendChild(this._ht_link_description_title__text);
		me._ht_link_description_title.ggIsActive=function() {
			return false;
		}
		me._ht_link_description_title.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		me._ht_link_description_title.ggCurrentLogicStateVisible = -1;
		this._ht_link_description_title.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['rootElement'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._ht_link_description_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._ht_link_description_title.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._ht_link_description_title.style[domTransition]='';
				if (me._ht_link_description_title.ggCurrentLogicStateVisible == 0) {
					me._ht_link_description_title.style.visibility=(Number(me._ht_link_description_title.style.opacity)>0||!me._ht_link_description_title.style.opacity)?'inherit':'hidden';
					me._ht_link_description_title.ggVisible=true;
				}
				else {
					me._ht_link_description_title.style.visibility="hidden";
					me._ht_link_description_title.ggVisible=false;
				}
			}
		}
		this._ht_link_description_title.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._ht_link_description_title);
		this._image_1=document.createElement('div');
		this._image_1__img=document.createElement('img');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img.setAttribute('src',basePath + 'images/image_1.png');
		this._image_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_1__img.className='ggskin ggskin_image';
		this._image_1__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_1__img);
		this._image_1.appendChild(this._image_1__img);
		this._image_1.ggId="Image 1";
		this._image_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_1.ggVisible=true;
		this._image_1.className='ggskin ggskin_image ';
		this._image_1.ggType='image';
		hs ='';
		hs+='height : 139px;';
		hs+='left : 15px;';
		hs+='position : absolute;';
		hs+='top : 97px;';
		hs+='visibility : inherit;';
		hs+='width : 195px;';
		hs+='pointer-events:auto;';
		this._image_1.setAttribute('style',hs);
		this._image_1.style[domTransform + 'Origin']='50% 50%';
		me._image_1.ggIsActive=function() {
			return false;
		}
		me._image_1.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_1.ggUpdatePosition=function (useTransition) {
		}
		this.divSkin.appendChild(this._image_1);
		this._logo=document.createElement('div');
		this._logo__img=document.createElement('img');
		this._logo__img.className='ggskin ggskin_image';
		this._logo__img.setAttribute('src',basePath + 'images/logo.png');
		this._logo__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._logo__img.className='ggskin ggskin_image';
		this._logo__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._logo__img);
		this._logo.appendChild(this._logo__img);
		this._logo.ggId="Logo";
		this._logo.ggLeft=-369;
		this._logo.ggTop=-95;
		this._logo.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._logo.ggVisible=true;
		this._logo.className='ggskin ggskin_image ';
		this._logo.ggType='image';
		hs ='';
		hs+='height : 38px;';
		hs+='left : -369px;';
		hs+='position : absolute;';
		hs+='top : -95px;';
		hs+='visibility : inherit;';
		hs+='width : 136px;';
		hs+='pointer-events:auto;';
		this._logo.setAttribute('style',hs);
		this._logo.style[domTransform + 'Origin']='50% 50%';
		me._logo.ggIsActive=function() {
			return false;
		}
		me._logo.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._logo.onclick=function (e) {
			me.player.openUrl("https:\/\/www.vetmeduni.ac.at\/","");
		}
		this._logo.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._logo);
		this._image_4=document.createElement('div');
		this._image_4__img=document.createElement('img');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img.setAttribute('src',basePath + 'images/image_4.png');
		this._image_4__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_4__img.className='ggskin ggskin_image';
		this._image_4__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_4__img);
		this._image_4.appendChild(this._image_4__img);
		this._image_4.ggId="Image 4";
		this._image_4.ggLeft=103;
		this._image_4.ggTop=-87;
		this._image_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_4.ggVisible=true;
		this._image_4.className='ggskin ggskin_image ';
		this._image_4.ggType='image';
		hs ='';
		hs+='height : 46px;';
		hs+='left : 103px;';
		hs+='position : absolute;';
		hs+='top : -87px;';
		hs+='visibility : inherit;';
		hs+='width : 56px;';
		hs+='pointer-events:auto;';
		this._image_4.setAttribute('style',hs);
		this._image_4.style[domTransform + 'Origin']='50% 50%';
		me._image_4.ggIsActive=function() {
			return false;
		}
		me._image_4.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_4.onclick=function (e) {
			me._image_6.ggVisible = !me._image_6.ggVisible;
			var flag=me._image_6.ggVisible;
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility=((flag)&&(Number(me._image_6.style.opacity)>0||!me._image_6.style.opacity))?'inherit':'hidden';
		}
		this._image_4.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_4);
		this._image_5=document.createElement('div');
		this._image_5__img=document.createElement('img');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img.setAttribute('src',basePath + 'images/image_5.png');
		this._image_5__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_5__img.className='ggskin ggskin_image';
		this._image_5__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_5__img);
		this._image_5.appendChild(this._image_5__img);
		this._image_5.ggId="Image 5";
		this._image_5.ggLeft=215;
		this._image_5.ggTop=-82;
		this._image_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_5.ggVisible=true;
		this._image_5.className='ggskin ggskin_image ';
		this._image_5.ggType='image';
		hs ='';
		hs+='height : 32px;';
		hs+='left : 215px;';
		hs+='position : absolute;';
		hs+='top : -82px;';
		hs+='visibility : inherit;';
		hs+='width : 44px;';
		hs+='pointer-events:auto;';
		this._image_5.setAttribute('style',hs);
		this._image_5.style[domTransform + 'Origin']='50% 50%';
		me._image_5.ggIsActive=function() {
			return false;
		}
		me._image_5.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_5.onclick=function (e) {
			me.player.openUrl("mailto:Susanne.Waiblinger@vetmeduni.ac.at;Monika.Zandra@vetmeduni.ac.at","");
		}
		this._image_5.ggUpdatePosition=function (useTransition) {
			if (useTransition==='undefined') {
				useTransition = false;
			}
			if (!useTransition) {
				this.style[domTransition]='none';
			}
			if (this.parentNode) {
				var w=this.parentNode.offsetWidth;
					this.style.left=(this.ggLeft - 0 + w/2) + 'px';
				var h=this.parentNode.offsetHeight;
					this.style.top=(this.ggTop - 0 + h) + 'px';
			}
		}
		this.divSkin.appendChild(this._image_5);
		this._image_6=document.createElement('div');
		this._image_6__img=document.createElement('img');
		this._image_6__img.className='ggskin ggskin_image';
		this._image_6__img.setAttribute('src',basePath + 'images/image_6.png');
		this._image_6__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_6__img.className='ggskin ggskin_image';
		this._image_6__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_6__img);
		this._image_6.appendChild(this._image_6__img);
		this._image_6.ggId="Image 6";
		this._image_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_6.ggVisible=true;
		this._image_6.className='ggskin ggskin_image ';
		this._image_6.ggType='image';
		hs ='';
		hs+='height : 491px;';
		hs+='left : 14.3%;';
		hs+='position : absolute;';
		hs+='top : 12.6%;';
		hs+='visibility : inherit;';
		hs+='width : 1027px;';
		hs+='pointer-events:auto;';
		this._image_6.setAttribute('style',hs);
		this._image_6.style[domTransform + 'Origin']='50% 50%';
		me._image_6.ggIsActive=function() {
			return false;
		}
		me._image_6.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._image_6.ggUpdatePosition=function (useTransition) {
		}
		this._marker_1=document.createElement('div');
		this._marker_1.ggMarkerNodeId='{node1}';
		nodeMarker.push(this._marker_1);
		this._marker_1.ggId="Marker 1";
		this._marker_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_1.ggVisible=true;
		this._marker_1.className='ggskin ggskin_mark ';
		this._marker_1.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 864px;';
		hs+='position : absolute;';
		hs+='top : 261px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_1.setAttribute('style',hs);
		this._marker_1.style[domTransform + 'Origin']='50% 50%';
		me._marker_1.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_1.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_1.onclick=function (e) {
			me.player.openNext("{node1}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_1.onmouseover=function (e) {
			me.elementMouseOver['marker_1']=true;
		}
		this._marker_1.onmouseout=function (e) {
			me.elementMouseOver['marker_1']=false;
		}
		this._marker_1.ontouchend=function (e) {
			me.elementMouseOver['marker_1']=false;
		}
		this._marker_1.ggUpdateConditionNodeChange=function () {
				me._marker_1__normal.ggNodeChangeMain();
				me._marker_1__active.ggNodeChangeMain();
		}
		this._marker_1.ggUpdatePosition=function (useTransition) {
		}
		this._marker_1.ggNodeChange=function () {
			me._marker_1.ggUpdateConditionNodeChange();
		}
		this._marker_title_47=document.createElement('div');
		this._marker_title_47__text=document.createElement('div');
		this._marker_title_47.className='ggskin ggskin_textdiv';
		this._marker_title_47.ggTextDiv=this._marker_title_47__text;
		this._marker_title_47.ggId="marker_title_47";
		this._marker_title_47.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_47.ggVisible=false;
		this._marker_title_47.className='ggskin ggskin_text ';
		this._marker_title_47.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_47.setAttribute('style',hs);
		this._marker_title_47.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_47__text.setAttribute('style',hs);
		this._marker_title_47__text.innerHTML="Eingang";
		this._marker_title_47.appendChild(this._marker_title_47__text);
		me._marker_title_47.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_47.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_47.onmouseover=function (e) {
			me.elementMouseOver['marker_title_47']=true;
		}
		this._marker_title_47.onmouseout=function (e) {
			me.elementMouseOver['marker_title_47']=false;
		}
		this._marker_title_47.ontouchend=function (e) {
			me.elementMouseOver['marker_title_47']=false;
		}
		me._marker_title_47.ggCurrentLogicStatePosition = -1;
		me._marker_title_47.ggCurrentLogicStateVisible = -1;
		this._marker_title_47.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_1'] == true) || 
				(me.elementMouseOver['marker_title_47'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_47.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_47.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_47.style[domTransition]='left none, top none';
				if (me._marker_title_47.ggCurrentLogicStateVisible == 0) {
					me._marker_title_47.style.visibility=(Number(me._marker_title_47.style.opacity)>0||!me._marker_title_47.style.opacity)?'inherit':'hidden';
					me._marker_title_47.ggVisible=true;
				}
				else {
					me._marker_title_47.style.visibility="hidden";
					me._marker_title_47.ggVisible=false;
				}
			}
		}
		this._marker_title_47.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_47.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_47.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_47.style[domTransition]='left none, top none';
				if (me._marker_title_47.ggCurrentLogicStatePosition == 0) {
					me._marker_title_47.style.left='-1173px';
					me._marker_title_47.style.top='-405px';
				}
				else {
					me._marker_title_47.style.left='-55px';
					me._marker_title_47.style.top='18px';
				}
			}
		}
		this._marker_title_47.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_47.ggNodeChange=function () {
			me._marker_title_47.ggUpdateConditionNodeChange();
		}
		this._marker_1.appendChild(this._marker_title_47);
		this._image_6.appendChild(this._marker_1);
		this._marker_2=document.createElement('div');
		this._marker_2.ggMarkerNodeId='{node3}';
		nodeMarker.push(this._marker_2);
		this._marker_2.ggId="Marker 2";
		this._marker_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_2.ggVisible=true;
		this._marker_2.className='ggskin ggskin_mark ';
		this._marker_2.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 835px;';
		hs+='position : absolute;';
		hs+='top : 219px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_2.setAttribute('style',hs);
		this._marker_2.style[domTransform + 'Origin']='50% 50%';
		me._marker_2.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_2.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_2.onclick=function (e) {
			me.player.openNext("{node3}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_2.onmouseover=function (e) {
			me.elementMouseOver['marker_2']=true;
		}
		this._marker_2.onmouseout=function (e) {
			me.elementMouseOver['marker_2']=false;
		}
		this._marker_2.ontouchend=function (e) {
			me.elementMouseOver['marker_2']=false;
		}
		this._marker_2.ggUpdateConditionNodeChange=function () {
				me._marker_2__normal.ggNodeChangeMain();
				me._marker_2__active.ggNodeChangeMain();
		}
		this._marker_2.ggUpdatePosition=function (useTransition) {
		}
		this._marker_2.ggNodeChange=function () {
			me._marker_2.ggUpdateConditionNodeChange();
		}
		this._marker_title_2=document.createElement('div');
		this._marker_title_2__text=document.createElement('div');
		this._marker_title_2.className='ggskin ggskin_textdiv';
		this._marker_title_2.ggTextDiv=this._marker_title_2__text;
		this._marker_title_2.ggId="marker_title_2";
		this._marker_title_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_2.ggVisible=false;
		this._marker_title_2.className='ggskin ggskin_text ';
		this._marker_title_2.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -58px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_2.setAttribute('style',hs);
		this._marker_title_2.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_2__text.setAttribute('style',hs);
		this._marker_title_2__text.innerHTML="Dusche";
		this._marker_title_2.appendChild(this._marker_title_2__text);
		me._marker_title_2.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_2.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_2.onmouseover=function (e) {
			me.elementMouseOver['marker_title_2']=true;
		}
		this._marker_title_2.onmouseout=function (e) {
			me.elementMouseOver['marker_title_2']=false;
		}
		this._marker_title_2.ontouchend=function (e) {
			me.elementMouseOver['marker_title_2']=false;
		}
		me._marker_title_2.ggCurrentLogicStatePosition = -1;
		me._marker_title_2.ggCurrentLogicStateVisible = -1;
		this._marker_title_2.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_2'] == true) || 
				(me.elementMouseOver['marker_title_2'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_2.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_2.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_2.style[domTransition]='left none, top none';
				if (me._marker_title_2.ggCurrentLogicStateVisible == 0) {
					me._marker_title_2.style.visibility=(Number(me._marker_title_2.style.opacity)>0||!me._marker_title_2.style.opacity)?'inherit':'hidden';
					me._marker_title_2.ggVisible=true;
				}
				else {
					me._marker_title_2.style.visibility="hidden";
					me._marker_title_2.ggVisible=false;
				}
			}
		}
		this._marker_title_2.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_2.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_2.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_2.style[domTransition]='left none, top none';
				if (me._marker_title_2.ggCurrentLogicStatePosition == 0) {
					me._marker_title_2.style.left='-1144px';
					me._marker_title_2.style.top='-363px';
				}
				else {
					me._marker_title_2.style.left='-58px';
					me._marker_title_2.style.top='19px';
				}
			}
		}
		this._marker_title_2.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_2.ggNodeChange=function () {
			me._marker_title_2.ggUpdateConditionNodeChange();
		}
		this._marker_2.appendChild(this._marker_title_2);
		this._image_6.appendChild(this._marker_2);
		this._marker_3=document.createElement('div');
		this._marker_3.ggMarkerNodeId='{node5}';
		nodeMarker.push(this._marker_3);
		this._marker_3.ggId="Marker 3";
		this._marker_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_3.ggVisible=true;
		this._marker_3.className='ggskin ggskin_mark ';
		this._marker_3.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 742px;';
		hs+='position : absolute;';
		hs+='top : 200px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_3.setAttribute('style',hs);
		this._marker_3.style[domTransform + 'Origin']='50% 50%';
		me._marker_3.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_3.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_3.onclick=function (e) {
			me.player.openNext("{node5}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_3.onmouseover=function (e) {
			me.elementMouseOver['marker_3']=true;
		}
		this._marker_3.onmouseout=function (e) {
			me.elementMouseOver['marker_3']=false;
		}
		this._marker_3.ontouchend=function (e) {
			me.elementMouseOver['marker_3']=false;
		}
		this._marker_3.ggUpdateConditionNodeChange=function () {
				me._marker_3__normal.ggNodeChangeMain();
				me._marker_3__active.ggNodeChangeMain();
		}
		this._marker_3.ggUpdatePosition=function (useTransition) {
		}
		this._marker_3.ggNodeChange=function () {
			me._marker_3.ggUpdateConditionNodeChange();
		}
		this._marker_title_3=document.createElement('div');
		this._marker_title_3__text=document.createElement('div');
		this._marker_title_3.className='ggskin ggskin_textdiv';
		this._marker_title_3.ggTextDiv=this._marker_title_3__text;
		this._marker_title_3.ggId="marker_title_3";
		this._marker_title_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_3.ggVisible=false;
		this._marker_title_3.className='ggskin ggskin_text ';
		this._marker_title_3.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_3.setAttribute('style',hs);
		this._marker_title_3.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_3__text.setAttribute('style',hs);
		this._marker_title_3__text.innerHTML="Mischhalle Gang";
		this._marker_title_3.appendChild(this._marker_title_3__text);
		me._marker_title_3.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_3.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_3.onmouseover=function (e) {
			me.elementMouseOver['marker_title_3']=true;
		}
		this._marker_title_3.onmouseout=function (e) {
			me.elementMouseOver['marker_title_3']=false;
		}
		this._marker_title_3.ontouchend=function (e) {
			me.elementMouseOver['marker_title_3']=false;
		}
		me._marker_title_3.ggCurrentLogicStatePosition = -1;
		me._marker_title_3.ggCurrentLogicStateVisible = -1;
		this._marker_title_3.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_3'] == true) || 
				(me.elementMouseOver['marker_title_3'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_3.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_3.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_3.style[domTransition]='left none, top none';
				if (me._marker_title_3.ggCurrentLogicStateVisible == 0) {
					me._marker_title_3.style.visibility=(Number(me._marker_title_3.style.opacity)>0||!me._marker_title_3.style.opacity)?'inherit':'hidden';
					me._marker_title_3.ggVisible=true;
				}
				else {
					me._marker_title_3.style.visibility="hidden";
					me._marker_title_3.ggVisible=false;
				}
			}
		}
		this._marker_title_3.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_3.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_3.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_3.style[domTransition]='left none, top none';
				if (me._marker_title_3.ggCurrentLogicStatePosition == 0) {
					me._marker_title_3.style.left='-1051px';
					me._marker_title_3.style.top='-344px';
				}
				else {
					me._marker_title_3.style.left='-57px';
					me._marker_title_3.style.top='18px';
				}
			}
		}
		this._marker_title_3.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_3.ggNodeChange=function () {
			me._marker_title_3.ggUpdateConditionNodeChange();
		}
		this._marker_3.appendChild(this._marker_title_3);
		this._image_6.appendChild(this._marker_3);
		this._marker_4=document.createElement('div');
		this._marker_4.ggMarkerNodeId='{node4}';
		nodeMarker.push(this._marker_4);
		this._marker_4.ggId="Marker 4";
		this._marker_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_4.ggVisible=true;
		this._marker_4.className='ggskin ggskin_mark ';
		this._marker_4.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 751px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_4.setAttribute('style',hs);
		this._marker_4.style[domTransform + 'Origin']='50% 50%';
		me._marker_4.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_4.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_4.onclick=function (e) {
			me.player.openNext("{node4}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_4.onmouseover=function (e) {
			me.elementMouseOver['marker_4']=true;
		}
		this._marker_4.onmouseout=function (e) {
			me.elementMouseOver['marker_4']=false;
		}
		this._marker_4.ontouchend=function (e) {
			me.elementMouseOver['marker_4']=false;
		}
		this._marker_4.ggUpdateConditionNodeChange=function () {
				me._marker_4__normal.ggNodeChangeMain();
				me._marker_4__active.ggNodeChangeMain();
		}
		this._marker_4.ggUpdatePosition=function (useTransition) {
		}
		this._marker_4.ggNodeChange=function () {
			me._marker_4.ggUpdateConditionNodeChange();
		}
		this._marker_title_4=document.createElement('div');
		this._marker_title_4__text=document.createElement('div');
		this._marker_title_4.className='ggskin ggskin_textdiv';
		this._marker_title_4.ggTextDiv=this._marker_title_4__text;
		this._marker_title_4.ggId="marker_title_4";
		this._marker_title_4.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_4.ggVisible=false;
		this._marker_title_4.className='ggskin ggskin_text ';
		this._marker_title_4.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_4.setAttribute('style',hs);
		this._marker_title_4.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_4__text.setAttribute('style',hs);
		this._marker_title_4__text.innerHTML="Mischhalle";
		this._marker_title_4.appendChild(this._marker_title_4__text);
		me._marker_title_4.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_4.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_4.onmouseover=function (e) {
			me.elementMouseOver['marker_title_4']=true;
		}
		this._marker_title_4.onmouseout=function (e) {
			me.elementMouseOver['marker_title_4']=false;
		}
		this._marker_title_4.ontouchend=function (e) {
			me.elementMouseOver['marker_title_4']=false;
		}
		me._marker_title_4.ggCurrentLogicStatePosition = -1;
		me._marker_title_4.ggCurrentLogicStateVisible = -1;
		this._marker_title_4.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_4'] == true) || 
				(me.elementMouseOver['marker_title_4'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_4.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_4.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_4.style[domTransition]='left none, top none';
				if (me._marker_title_4.ggCurrentLogicStateVisible == 0) {
					me._marker_title_4.style.visibility=(Number(me._marker_title_4.style.opacity)>0||!me._marker_title_4.style.opacity)?'inherit':'hidden';
					me._marker_title_4.ggVisible=true;
				}
				else {
					me._marker_title_4.style.visibility="hidden";
					me._marker_title_4.ggVisible=false;
				}
			}
		}
		this._marker_title_4.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_4.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_4.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_4.style[domTransition]='left none, top none';
				if (me._marker_title_4.ggCurrentLogicStatePosition == 0) {
					me._marker_title_4.style.left='-1060px';
					me._marker_title_4.style.top='-304px';
				}
				else {
					me._marker_title_4.style.left='-55px';
					me._marker_title_4.style.top='19px';
				}
			}
		}
		this._marker_title_4.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_4.ggNodeChange=function () {
			me._marker_title_4.ggUpdateConditionNodeChange();
		}
		this._marker_4.appendChild(this._marker_title_4);
		this._image_6.appendChild(this._marker_4);
		this._marker_5=document.createElement('div');
		this._marker_5.ggMarkerNodeId='{node6}';
		nodeMarker.push(this._marker_5);
		this._marker_5.ggId="Marker 5";
		this._marker_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_5.ggVisible=true;
		this._marker_5.className='ggskin ggskin_mark ';
		this._marker_5.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 648px;';
		hs+='position : absolute;';
		hs+='top : 224px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_5.setAttribute('style',hs);
		this._marker_5.style[domTransform + 'Origin']='50% 50%';
		me._marker_5.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_5.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_5.onclick=function (e) {
			me.player.openNext("{node6}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_5.onmouseover=function (e) {
			me.elementMouseOver['marker_5']=true;
		}
		this._marker_5.onmouseout=function (e) {
			me.elementMouseOver['marker_5']=false;
		}
		this._marker_5.ontouchend=function (e) {
			me.elementMouseOver['marker_5']=false;
		}
		this._marker_5.ggUpdateConditionNodeChange=function () {
				me._marker_5__normal.ggNodeChangeMain();
				me._marker_5__active.ggNodeChangeMain();
		}
		this._marker_5.ggUpdatePosition=function (useTransition) {
		}
		this._marker_5.ggNodeChange=function () {
			me._marker_5.ggUpdateConditionNodeChange();
		}
		this._marker_title_5=document.createElement('div');
		this._marker_title_5__text=document.createElement('div');
		this._marker_title_5.className='ggskin ggskin_textdiv';
		this._marker_title_5.ggTextDiv=this._marker_title_5__text;
		this._marker_title_5.ggId="marker_title_5";
		this._marker_title_5.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_5.ggVisible=false;
		this._marker_title_5.className='ggskin ggskin_text ';
		this._marker_title_5.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_5.setAttribute('style',hs);
		this._marker_title_5.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_5__text.setAttribute('style',hs);
		this._marker_title_5__text.innerHTML="Behandlung";
		this._marker_title_5.appendChild(this._marker_title_5__text);
		me._marker_title_5.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_5.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_5.onmouseover=function (e) {
			me.elementMouseOver['marker_title_5']=true;
		}
		this._marker_title_5.onmouseout=function (e) {
			me.elementMouseOver['marker_title_5']=false;
		}
		this._marker_title_5.ontouchend=function (e) {
			me.elementMouseOver['marker_title_5']=false;
		}
		me._marker_title_5.ggCurrentLogicStatePosition = -1;
		me._marker_title_5.ggCurrentLogicStateVisible = -1;
		this._marker_title_5.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_5'] == true) || 
				(me.elementMouseOver['marker_title_5'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_5.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_5.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_5.style[domTransition]='left none, top none';
				if (me._marker_title_5.ggCurrentLogicStateVisible == 0) {
					me._marker_title_5.style.visibility=(Number(me._marker_title_5.style.opacity)>0||!me._marker_title_5.style.opacity)?'inherit':'hidden';
					me._marker_title_5.ggVisible=true;
				}
				else {
					me._marker_title_5.style.visibility="hidden";
					me._marker_title_5.ggVisible=false;
				}
			}
		}
		this._marker_title_5.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_5.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_5.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_5.style[domTransition]='left none, top none';
				if (me._marker_title_5.ggCurrentLogicStatePosition == 0) {
					me._marker_title_5.style.left='-957px';
					me._marker_title_5.style.top='-368px';
				}
				else {
					me._marker_title_5.style.left='-55px';
					me._marker_title_5.style.top='19px';
				}
			}
		}
		this._marker_title_5.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_5.ggNodeChange=function () {
			me._marker_title_5.ggUpdateConditionNodeChange();
		}
		this._marker_5.appendChild(this._marker_title_5);
		this._image_6.appendChild(this._marker_5);
		this._marker_6=document.createElement('div');
		this._marker_6.ggMarkerNodeId='{node7}';
		nodeMarker.push(this._marker_6);
		this._marker_6.ggId="Marker 6";
		this._marker_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_6.ggVisible=true;
		this._marker_6.className='ggskin ggskin_mark ';
		this._marker_6.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 539px;';
		hs+='position : absolute;';
		hs+='top : 211px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_6.setAttribute('style',hs);
		this._marker_6.style[domTransform + 'Origin']='50% 50%';
		me._marker_6.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_6.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_6.onclick=function (e) {
			me.player.openNext("{node7}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_6.onmouseover=function (e) {
			me.elementMouseOver['marker_6']=true;
		}
		this._marker_6.onmouseout=function (e) {
			me.elementMouseOver['marker_6']=false;
		}
		this._marker_6.ontouchend=function (e) {
			me.elementMouseOver['marker_6']=false;
		}
		this._marker_6.ggUpdateConditionNodeChange=function () {
				me._marker_6__normal.ggNodeChangeMain();
				me._marker_6__active.ggNodeChangeMain();
		}
		this._marker_6.ggUpdatePosition=function (useTransition) {
		}
		this._marker_6.ggNodeChange=function () {
			me._marker_6.ggUpdateConditionNodeChange();
		}
		this._marker_title_6=document.createElement('div');
		this._marker_title_6__text=document.createElement('div');
		this._marker_title_6.className='ggskin ggskin_textdiv';
		this._marker_title_6.ggTextDiv=this._marker_title_6__text;
		this._marker_title_6.ggId="marker_title_6";
		this._marker_title_6.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_6.ggVisible=false;
		this._marker_title_6.className='ggskin ggskin_text ';
		this._marker_title_6.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_6.setAttribute('style',hs);
		this._marker_title_6.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_6__text.setAttribute('style',hs);
		this._marker_title_6__text.innerHTML="Abkalbebox";
		this._marker_title_6.appendChild(this._marker_title_6__text);
		me._marker_title_6.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_6.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_6.onmouseover=function (e) {
			me.elementMouseOver['marker_title_6']=true;
		}
		this._marker_title_6.onmouseout=function (e) {
			me.elementMouseOver['marker_title_6']=false;
		}
		this._marker_title_6.ontouchend=function (e) {
			me.elementMouseOver['marker_title_6']=false;
		}
		me._marker_title_6.ggCurrentLogicStatePosition = -1;
		me._marker_title_6.ggCurrentLogicStateVisible = -1;
		this._marker_title_6.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_6'] == true) || 
				(me.elementMouseOver['marker_title_6'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_6.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_6.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_6.style[domTransition]='left none, top none';
				if (me._marker_title_6.ggCurrentLogicStateVisible == 0) {
					me._marker_title_6.style.visibility=(Number(me._marker_title_6.style.opacity)>0||!me._marker_title_6.style.opacity)?'inherit':'hidden';
					me._marker_title_6.ggVisible=true;
				}
				else {
					me._marker_title_6.style.visibility="hidden";
					me._marker_title_6.ggVisible=false;
				}
			}
		}
		this._marker_title_6.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_6.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_6.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_6.style[domTransition]='left none, top none';
				if (me._marker_title_6.ggCurrentLogicStatePosition == 0) {
					me._marker_title_6.style.left='-848px';
					me._marker_title_6.style.top='-355px';
				}
				else {
					me._marker_title_6.style.left='-55px';
					me._marker_title_6.style.top='19px';
				}
			}
		}
		this._marker_title_6.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_6.ggNodeChange=function () {
			me._marker_title_6.ggUpdateConditionNodeChange();
		}
		this._marker_6.appendChild(this._marker_title_6);
		this._image_6.appendChild(this._marker_6);
		this._marker_7=document.createElement('div');
		this._marker_7.ggMarkerNodeId='{node8}';
		nodeMarker.push(this._marker_7);
		this._marker_7.ggId="Marker 7";
		this._marker_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_7.ggVisible=true;
		this._marker_7.className='ggskin ggskin_mark ';
		this._marker_7.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 501px;';
		hs+='position : absolute;';
		hs+='top : 223px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_7.setAttribute('style',hs);
		this._marker_7.style[domTransform + 'Origin']='50% 50%';
		me._marker_7.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_7.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_7.onclick=function (e) {
			me.player.openNext("{node8}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_7.onmouseover=function (e) {
			me.elementMouseOver['marker_7']=true;
		}
		this._marker_7.onmouseout=function (e) {
			me.elementMouseOver['marker_7']=false;
		}
		this._marker_7.ontouchend=function (e) {
			me.elementMouseOver['marker_7']=false;
		}
		this._marker_7.ggUpdateConditionNodeChange=function () {
				me._marker_7__normal.ggNodeChangeMain();
				me._marker_7__active.ggNodeChangeMain();
		}
		this._marker_7.ggUpdatePosition=function (useTransition) {
		}
		this._marker_7.ggNodeChange=function () {
			me._marker_7.ggUpdateConditionNodeChange();
		}
		this._marker_title_7=document.createElement('div');
		this._marker_title_7__text=document.createElement('div');
		this._marker_title_7.className='ggskin ggskin_textdiv';
		this._marker_title_7.ggTextDiv=this._marker_title_7__text;
		this._marker_title_7.ggId="marker_title_7";
		this._marker_title_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_7.ggVisible=false;
		this._marker_title_7.className='ggskin ggskin_text ';
		this._marker_title_7.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_7.setAttribute('style',hs);
		this._marker_title_7.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_7__text.setAttribute('style',hs);
		this._marker_title_7__text.innerHTML="Laufgang";
		this._marker_title_7.appendChild(this._marker_title_7__text);
		me._marker_title_7.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_7.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_7.onmouseover=function (e) {
			me.elementMouseOver['marker_title_7']=true;
		}
		this._marker_title_7.onmouseout=function (e) {
			me.elementMouseOver['marker_title_7']=false;
		}
		this._marker_title_7.ontouchend=function (e) {
			me.elementMouseOver['marker_title_7']=false;
		}
		me._marker_title_7.ggCurrentLogicStatePosition = -1;
		me._marker_title_7.ggCurrentLogicStateVisible = -1;
		this._marker_title_7.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_7'] == true) || 
				(me.elementMouseOver['marker_title_7'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_7.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_7.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_7.style[domTransition]='left none, top none';
				if (me._marker_title_7.ggCurrentLogicStateVisible == 0) {
					me._marker_title_7.style.visibility=(Number(me._marker_title_7.style.opacity)>0||!me._marker_title_7.style.opacity)?'inherit':'hidden';
					me._marker_title_7.ggVisible=true;
				}
				else {
					me._marker_title_7.style.visibility="hidden";
					me._marker_title_7.ggVisible=false;
				}
			}
		}
		this._marker_title_7.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_7.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_7.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_7.style[domTransition]='left none, top none';
				if (me._marker_title_7.ggCurrentLogicStatePosition == 0) {
					me._marker_title_7.style.left='-810px';
					me._marker_title_7.style.top='-367px';
				}
				else {
					me._marker_title_7.style.left='-55px';
					me._marker_title_7.style.top='19px';
				}
			}
		}
		this._marker_title_7.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_7.ggNodeChange=function () {
			me._marker_title_7.ggUpdateConditionNodeChange();
		}
		this._marker_7.appendChild(this._marker_title_7);
		this._image_6.appendChild(this._marker_7);
		this._marker_8=document.createElement('div');
		this._marker_8.ggMarkerNodeId='{node11}';
		nodeMarker.push(this._marker_8);
		this._marker_8.ggId="Marker 8";
		this._marker_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_8.ggVisible=true;
		this._marker_8.className='ggskin ggskin_mark ';
		this._marker_8.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 582px;';
		hs+='position : absolute;';
		hs+='top : 151px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_8.setAttribute('style',hs);
		this._marker_8.style[domTransform + 'Origin']='50% 50%';
		me._marker_8.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_8.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_8.onclick=function (e) {
			me.player.openNext("{node11}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_8.onmouseover=function (e) {
			me.elementMouseOver['marker_8']=true;
		}
		this._marker_8.onmouseout=function (e) {
			me.elementMouseOver['marker_8']=false;
		}
		this._marker_8.ontouchend=function (e) {
			me.elementMouseOver['marker_8']=false;
		}
		this._marker_8.ggUpdateConditionNodeChange=function () {
				me._marker_8__normal.ggNodeChangeMain();
				me._marker_8__active.ggNodeChangeMain();
		}
		this._marker_8.ggUpdatePosition=function (useTransition) {
		}
		this._marker_8.ggNodeChange=function () {
			me._marker_8.ggUpdateConditionNodeChange();
		}
		this._marker_title_8=document.createElement('div');
		this._marker_title_8__text=document.createElement('div');
		this._marker_title_8.className='ggskin ggskin_textdiv';
		this._marker_title_8.ggTextDiv=this._marker_title_8__text;
		this._marker_title_8.ggId="marker_title_8";
		this._marker_title_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_8.ggVisible=false;
		this._marker_title_8.className='ggskin ggskin_text ';
		this._marker_title_8.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_8.setAttribute('style',hs);
		this._marker_title_8.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_8__text.setAttribute('style',hs);
		this._marker_title_8__text.innerHTML="Einzelfutter - Forschungsbereich";
		this._marker_title_8.appendChild(this._marker_title_8__text);
		me._marker_title_8.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_8.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_8.onmouseover=function (e) {
			me.elementMouseOver['marker_title_8']=true;
		}
		this._marker_title_8.onmouseout=function (e) {
			me.elementMouseOver['marker_title_8']=false;
		}
		this._marker_title_8.ontouchend=function (e) {
			me.elementMouseOver['marker_title_8']=false;
		}
		me._marker_title_8.ggCurrentLogicStatePosition = -1;
		me._marker_title_8.ggCurrentLogicStateVisible = -1;
		this._marker_title_8.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_8'] == true) || 
				(me.elementMouseOver['marker_title_8'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_8.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_8.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_8.style[domTransition]='left none, top none';
				if (me._marker_title_8.ggCurrentLogicStateVisible == 0) {
					me._marker_title_8.style.visibility=(Number(me._marker_title_8.style.opacity)>0||!me._marker_title_8.style.opacity)?'inherit':'hidden';
					me._marker_title_8.ggVisible=true;
				}
				else {
					me._marker_title_8.style.visibility="hidden";
					me._marker_title_8.ggVisible=false;
				}
			}
		}
		this._marker_title_8.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_8.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_8.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_8.style[domTransition]='left none, top none';
				if (me._marker_title_8.ggCurrentLogicStatePosition == 0) {
					me._marker_title_8.style.left='-891px';
					me._marker_title_8.style.top='-295px';
				}
				else {
					me._marker_title_8.style.left='-55px';
					me._marker_title_8.style.top='18px';
				}
			}
		}
		this._marker_title_8.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_8.ggNodeChange=function () {
			me._marker_title_8.ggUpdateConditionNodeChange();
		}
		this._marker_8.appendChild(this._marker_title_8);
		this._image_6.appendChild(this._marker_8);
		this._marker_9=document.createElement('div');
		this._marker_9.ggMarkerNodeId='{node9}';
		nodeMarker.push(this._marker_9);
		this._marker_9.ggId="Marker 9";
		this._marker_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_9.ggVisible=true;
		this._marker_9.className='ggskin ggskin_mark ';
		this._marker_9.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 532px;';
		hs+='position : absolute;';
		hs+='top : 162px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_9.setAttribute('style',hs);
		this._marker_9.style[domTransform + 'Origin']='50% 50%';
		me._marker_9.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_9.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_9.onclick=function (e) {
			me.player.openNext("{node9}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_9.onmouseover=function (e) {
			me.elementMouseOver['marker_9']=true;
		}
		this._marker_9.onmouseout=function (e) {
			me.elementMouseOver['marker_9']=false;
		}
		this._marker_9.ontouchend=function (e) {
			me.elementMouseOver['marker_9']=false;
		}
		this._marker_9.ggUpdateConditionNodeChange=function () {
				me._marker_9__normal.ggNodeChangeMain();
				me._marker_9__active.ggNodeChangeMain();
		}
		this._marker_9.ggUpdatePosition=function (useTransition) {
		}
		this._marker_9.ggNodeChange=function () {
			me._marker_9.ggUpdateConditionNodeChange();
		}
		this._marker_title_9=document.createElement('div');
		this._marker_title_9__text=document.createElement('div');
		this._marker_title_9.className='ggskin ggskin_textdiv';
		this._marker_title_9.ggTextDiv=this._marker_title_9__text;
		this._marker_title_9.ggId="marker_title_9";
		this._marker_title_9.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_9.ggVisible=false;
		this._marker_title_9.className='ggskin ggskin_text ';
		this._marker_title_9.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_9.setAttribute('style',hs);
		this._marker_title_9.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_9__text.setAttribute('style',hs);
		this._marker_title_9__text.innerHTML="Fressplatz Gang";
		this._marker_title_9.appendChild(this._marker_title_9__text);
		me._marker_title_9.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_9.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_9.onmouseover=function (e) {
			me.elementMouseOver['marker_title_9']=true;
		}
		this._marker_title_9.onmouseout=function (e) {
			me.elementMouseOver['marker_title_9']=false;
		}
		this._marker_title_9.ontouchend=function (e) {
			me.elementMouseOver['marker_title_9']=false;
		}
		me._marker_title_9.ggCurrentLogicStatePosition = -1;
		me._marker_title_9.ggCurrentLogicStateVisible = -1;
		this._marker_title_9.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_9'] == true) || 
				(me.elementMouseOver['marker_title_9'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_9.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_9.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_9.style[domTransition]='left none, top none';
				if (me._marker_title_9.ggCurrentLogicStateVisible == 0) {
					me._marker_title_9.style.visibility=(Number(me._marker_title_9.style.opacity)>0||!me._marker_title_9.style.opacity)?'inherit':'hidden';
					me._marker_title_9.ggVisible=true;
				}
				else {
					me._marker_title_9.style.visibility="hidden";
					me._marker_title_9.ggVisible=false;
				}
			}
		}
		this._marker_title_9.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_9.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_9.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_9.style[domTransition]='left none, top none';
				if (me._marker_title_9.ggCurrentLogicStatePosition == 0) {
					me._marker_title_9.style.left='-841px';
					me._marker_title_9.style.top='-306px';
				}
				else {
					me._marker_title_9.style.left='-55px';
					me._marker_title_9.style.top='19px';
				}
			}
		}
		this._marker_title_9.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_9.ggNodeChange=function () {
			me._marker_title_9.ggUpdateConditionNodeChange();
		}
		this._marker_9.appendChild(this._marker_title_9);
		this._image_6.appendChild(this._marker_9);
		this._marker_10=document.createElement('div');
		this._marker_10.ggMarkerNodeId='{node10}';
		nodeMarker.push(this._marker_10);
		this._marker_10.ggId="Marker 10";
		this._marker_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_10.ggVisible=true;
		this._marker_10.className='ggskin ggskin_mark ';
		this._marker_10.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 585px;';
		hs+='position : absolute;';
		hs+='top : 193px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_10.setAttribute('style',hs);
		this._marker_10.style[domTransform + 'Origin']='50% 50%';
		me._marker_10.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_10.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_10.onclick=function (e) {
			me.player.openNext("{node10}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_10.onmouseover=function (e) {
			me.elementMouseOver['marker_10']=true;
		}
		this._marker_10.onmouseout=function (e) {
			me.elementMouseOver['marker_10']=false;
		}
		this._marker_10.ontouchend=function (e) {
			me.elementMouseOver['marker_10']=false;
		}
		this._marker_10.ggUpdateConditionNodeChange=function () {
				me._marker_10__normal.ggNodeChangeMain();
				me._marker_10__active.ggNodeChangeMain();
		}
		this._marker_10.ggUpdatePosition=function (useTransition) {
		}
		this._marker_10.ggNodeChange=function () {
			me._marker_10.ggUpdateConditionNodeChange();
		}
		this._marker_title_10=document.createElement('div');
		this._marker_title_10__text=document.createElement('div');
		this._marker_title_10.className='ggskin ggskin_textdiv';
		this._marker_title_10.ggTextDiv=this._marker_title_10__text;
		this._marker_title_10.ggId="marker_title_10";
		this._marker_title_10.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_10.ggVisible=false;
		this._marker_title_10.className='ggskin ggskin_text ';
		this._marker_title_10.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_10.setAttribute('style',hs);
		this._marker_title_10.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_10__text.setAttribute('style',hs);
		this._marker_title_10__text.innerHTML="Fressbereich - Einzelfutterstrecke";
		this._marker_title_10.appendChild(this._marker_title_10__text);
		me._marker_title_10.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_10.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_10.onmouseover=function (e) {
			me.elementMouseOver['marker_title_10']=true;
		}
		this._marker_title_10.onmouseout=function (e) {
			me.elementMouseOver['marker_title_10']=false;
		}
		this._marker_title_10.ontouchend=function (e) {
			me.elementMouseOver['marker_title_10']=false;
		}
		me._marker_title_10.ggCurrentLogicStatePosition = -1;
		me._marker_title_10.ggCurrentLogicStateVisible = -1;
		this._marker_title_10.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_10'] == true) || 
				(me.elementMouseOver['marker_title_10'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_10.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_10.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_10.style[domTransition]='left none, top none';
				if (me._marker_title_10.ggCurrentLogicStateVisible == 0) {
					me._marker_title_10.style.visibility=(Number(me._marker_title_10.style.opacity)>0||!me._marker_title_10.style.opacity)?'inherit':'hidden';
					me._marker_title_10.ggVisible=true;
				}
				else {
					me._marker_title_10.style.visibility="hidden";
					me._marker_title_10.ggVisible=false;
				}
			}
		}
		this._marker_title_10.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_10.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_10.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_10.style[domTransition]='left none, top none';
				if (me._marker_title_10.ggCurrentLogicStatePosition == 0) {
					me._marker_title_10.style.left='-894px';
					me._marker_title_10.style.top='-337px';
				}
				else {
					me._marker_title_10.style.left='-55px';
					me._marker_title_10.style.top='19px';
				}
			}
		}
		this._marker_title_10.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_10.ggNodeChange=function () {
			me._marker_title_10.ggUpdateConditionNodeChange();
		}
		this._marker_10.appendChild(this._marker_title_10);
		this._image_6.appendChild(this._marker_10);
		this._marker_11=document.createElement('div');
		this._marker_11.ggMarkerNodeId='{node12}';
		nodeMarker.push(this._marker_11);
		this._marker_11.ggId="Marker 11";
		this._marker_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_11.ggVisible=true;
		this._marker_11.className='ggskin ggskin_mark ';
		this._marker_11.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 411px;';
		hs+='position : absolute;';
		hs+='top : 226px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_11.setAttribute('style',hs);
		this._marker_11.style[domTransform + 'Origin']='50% 50%';
		me._marker_11.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_11.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_11.onclick=function (e) {
			me.player.openNext("{node12}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_11.onmouseover=function (e) {
			me.elementMouseOver['marker_11']=true;
		}
		this._marker_11.onmouseout=function (e) {
			me.elementMouseOver['marker_11']=false;
		}
		this._marker_11.ontouchend=function (e) {
			me.elementMouseOver['marker_11']=false;
		}
		this._marker_11.ggUpdateConditionNodeChange=function () {
				me._marker_11__normal.ggNodeChangeMain();
				me._marker_11__active.ggNodeChangeMain();
		}
		this._marker_11.ggUpdatePosition=function (useTransition) {
		}
		this._marker_11.ggNodeChange=function () {
			me._marker_11.ggUpdateConditionNodeChange();
		}
		this._marker_title_11=document.createElement('div');
		this._marker_title_11__text=document.createElement('div');
		this._marker_title_11.className='ggskin ggskin_textdiv';
		this._marker_title_11.ggTextDiv=this._marker_title_11__text;
		this._marker_title_11.ggId="marker_title_11";
		this._marker_title_11.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_11.ggVisible=false;
		this._marker_title_11.className='ggskin ggskin_text ';
		this._marker_title_11.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_11.setAttribute('style',hs);
		this._marker_title_11.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_11__text.setAttribute('style',hs);
		this._marker_title_11__text.innerHTML="Liegebox Gang";
		this._marker_title_11.appendChild(this._marker_title_11__text);
		me._marker_title_11.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_11.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_11.onmouseover=function (e) {
			me.elementMouseOver['marker_title_11']=true;
		}
		this._marker_title_11.onmouseout=function (e) {
			me.elementMouseOver['marker_title_11']=false;
		}
		this._marker_title_11.ontouchend=function (e) {
			me.elementMouseOver['marker_title_11']=false;
		}
		me._marker_title_11.ggCurrentLogicStatePosition = -1;
		me._marker_title_11.ggCurrentLogicStateVisible = -1;
		this._marker_title_11.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_11'] == true) || 
				(me.elementMouseOver['marker_title_11'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_11.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_11.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_11.style[domTransition]='left none, top none';
				if (me._marker_title_11.ggCurrentLogicStateVisible == 0) {
					me._marker_title_11.style.visibility=(Number(me._marker_title_11.style.opacity)>0||!me._marker_title_11.style.opacity)?'inherit':'hidden';
					me._marker_title_11.ggVisible=true;
				}
				else {
					me._marker_title_11.style.visibility="hidden";
					me._marker_title_11.ggVisible=false;
				}
			}
		}
		this._marker_title_11.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_11.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_11.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_11.style[domTransition]='left none, top none';
				if (me._marker_title_11.ggCurrentLogicStatePosition == 0) {
					me._marker_title_11.style.left='-720px';
					me._marker_title_11.style.top='-370px';
				}
				else {
					me._marker_title_11.style.left='-55px';
					me._marker_title_11.style.top='19px';
				}
			}
		}
		this._marker_title_11.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_11.ggNodeChange=function () {
			me._marker_title_11.ggUpdateConditionNodeChange();
		}
		this._marker_11.appendChild(this._marker_title_11);
		this._image_6.appendChild(this._marker_11);
		this._marker_12=document.createElement('div');
		this._marker_12.ggMarkerNodeId='{node13}';
		nodeMarker.push(this._marker_12);
		this._marker_12.ggId="Marker 12";
		this._marker_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_12.ggVisible=true;
		this._marker_12.className='ggskin ggskin_mark ';
		this._marker_12.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 390px;';
		hs+='position : absolute;';
		hs+='top : 182px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_12.setAttribute('style',hs);
		this._marker_12.style[domTransform + 'Origin']='50% 50%';
		me._marker_12.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_12.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_12.onclick=function (e) {
			me.player.openNext("{node13}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_12.onmouseover=function (e) {
			me.elementMouseOver['marker_12']=true;
		}
		this._marker_12.onmouseout=function (e) {
			me.elementMouseOver['marker_12']=false;
		}
		this._marker_12.ontouchend=function (e) {
			me.elementMouseOver['marker_12']=false;
		}
		this._marker_12.ggUpdateConditionNodeChange=function () {
				me._marker_12__normal.ggNodeChangeMain();
				me._marker_12__active.ggNodeChangeMain();
		}
		this._marker_12.ggUpdatePosition=function (useTransition) {
		}
		this._marker_12.ggNodeChange=function () {
			me._marker_12.ggUpdateConditionNodeChange();
		}
		this._marker_title_12=document.createElement('div');
		this._marker_title_12__text=document.createElement('div');
		this._marker_title_12.className='ggskin ggskin_textdiv';
		this._marker_title_12.ggTextDiv=this._marker_title_12__text;
		this._marker_title_12.ggId="marker_title_12";
		this._marker_title_12.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_12.ggVisible=false;
		this._marker_title_12.className='ggskin ggskin_text ';
		this._marker_title_12.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_12.setAttribute('style',hs);
		this._marker_title_12.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_12__text.setAttribute('style',hs);
		this._marker_title_12__text.innerHTML="Kraftfutterstationen Gang";
		this._marker_title_12.appendChild(this._marker_title_12__text);
		me._marker_title_12.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_12.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_12.onmouseover=function (e) {
			me.elementMouseOver['marker_title_12']=true;
		}
		this._marker_title_12.onmouseout=function (e) {
			me.elementMouseOver['marker_title_12']=false;
		}
		this._marker_title_12.ontouchend=function (e) {
			me.elementMouseOver['marker_title_12']=false;
		}
		me._marker_title_12.ggCurrentLogicStatePosition = -1;
		me._marker_title_12.ggCurrentLogicStateVisible = -1;
		this._marker_title_12.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_12'] == true) || 
				(me.elementMouseOver['marker_title_12'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_12.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_12.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_12.style[domTransition]='left none, top none';
				if (me._marker_title_12.ggCurrentLogicStateVisible == 0) {
					me._marker_title_12.style.visibility=(Number(me._marker_title_12.style.opacity)>0||!me._marker_title_12.style.opacity)?'inherit':'hidden';
					me._marker_title_12.ggVisible=true;
				}
				else {
					me._marker_title_12.style.visibility="hidden";
					me._marker_title_12.ggVisible=false;
				}
			}
		}
		this._marker_title_12.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_12.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_12.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_12.style[domTransition]='left none, top none';
				if (me._marker_title_12.ggCurrentLogicStatePosition == 0) {
					me._marker_title_12.style.left='-699px';
					me._marker_title_12.style.top='-326px';
				}
				else {
					me._marker_title_12.style.left='-55px';
					me._marker_title_12.style.top='19px';
				}
			}
		}
		this._marker_title_12.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_12.ggNodeChange=function () {
			me._marker_title_12.ggUpdateConditionNodeChange();
		}
		this._marker_12.appendChild(this._marker_title_12);
		this._image_6.appendChild(this._marker_12);
		this._marker_13=document.createElement('div');
		this._marker_13.ggMarkerNodeId='{node14}';
		nodeMarker.push(this._marker_13);
		this._marker_13.ggId="Marker 13";
		this._marker_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_13.ggVisible=true;
		this._marker_13.className='ggskin ggskin_mark ';
		this._marker_13.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 260px;';
		hs+='position : absolute;';
		hs+='top : 224px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_13.setAttribute('style',hs);
		this._marker_13.style[domTransform + 'Origin']='50% 50%';
		me._marker_13.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_13.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_13.onclick=function (e) {
			me.player.openNext("{node14}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_13.onmouseover=function (e) {
			me.elementMouseOver['marker_13']=true;
		}
		this._marker_13.onmouseout=function (e) {
			me.elementMouseOver['marker_13']=false;
		}
		this._marker_13.ontouchend=function (e) {
			me.elementMouseOver['marker_13']=false;
		}
		this._marker_13.ggUpdateConditionNodeChange=function () {
				me._marker_13__normal.ggNodeChangeMain();
				me._marker_13__active.ggNodeChangeMain();
		}
		this._marker_13.ggUpdatePosition=function (useTransition) {
		}
		this._marker_13.ggNodeChange=function () {
			me._marker_13.ggUpdateConditionNodeChange();
		}
		this._marker_title_13=document.createElement('div');
		this._marker_title_13__text=document.createElement('div');
		this._marker_title_13.className='ggskin ggskin_textdiv';
		this._marker_title_13.ggTextDiv=this._marker_title_13__text;
		this._marker_title_13.ggId="marker_title_13";
		this._marker_title_13.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_13.ggVisible=false;
		this._marker_title_13.className='ggskin ggskin_text ';
		this._marker_title_13.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_13.setAttribute('style',hs);
		this._marker_title_13.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_13__text.setAttribute('style',hs);
		this._marker_title_13__text.innerHTML="Liegebox 2";
		this._marker_title_13.appendChild(this._marker_title_13__text);
		me._marker_title_13.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_13.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_13.onmouseover=function (e) {
			me.elementMouseOver['marker_title_13']=true;
		}
		this._marker_title_13.onmouseout=function (e) {
			me.elementMouseOver['marker_title_13']=false;
		}
		this._marker_title_13.ontouchend=function (e) {
			me.elementMouseOver['marker_title_13']=false;
		}
		me._marker_title_13.ggCurrentLogicStatePosition = -1;
		me._marker_title_13.ggCurrentLogicStateVisible = -1;
		this._marker_title_13.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_13'] == true) || 
				(me.elementMouseOver['marker_title_13'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_13.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_13.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_13.style[domTransition]='left none, top none';
				if (me._marker_title_13.ggCurrentLogicStateVisible == 0) {
					me._marker_title_13.style.visibility=(Number(me._marker_title_13.style.opacity)>0||!me._marker_title_13.style.opacity)?'inherit':'hidden';
					me._marker_title_13.ggVisible=true;
				}
				else {
					me._marker_title_13.style.visibility="hidden";
					me._marker_title_13.ggVisible=false;
				}
			}
		}
		this._marker_title_13.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_13.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_13.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_13.style[domTransition]='left none, top none';
				if (me._marker_title_13.ggCurrentLogicStatePosition == 0) {
					me._marker_title_13.style.left='-569px';
					me._marker_title_13.style.top='-368px';
				}
				else {
					me._marker_title_13.style.left='-55px';
					me._marker_title_13.style.top='19px';
				}
			}
		}
		this._marker_title_13.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_13.ggNodeChange=function () {
			me._marker_title_13.ggUpdateConditionNodeChange();
		}
		this._marker_13.appendChild(this._marker_title_13);
		this._image_6.appendChild(this._marker_13);
		this._marker_14=document.createElement('div');
		this._marker_14.ggMarkerNodeId='{node15}';
		nodeMarker.push(this._marker_14);
		this._marker_14.ggId="Marker 14";
		this._marker_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_14.ggVisible=true;
		this._marker_14.className='ggskin ggskin_mark ';
		this._marker_14.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 717px;';
		hs+='position : absolute;';
		hs+='top : 162px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_14.setAttribute('style',hs);
		this._marker_14.style[domTransform + 'Origin']='50% 50%';
		me._marker_14.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_14.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_14.onclick=function (e) {
			me.player.openNext("{node15}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_14.onmouseover=function (e) {
			me.elementMouseOver['marker_14']=true;
		}
		this._marker_14.onmouseout=function (e) {
			me.elementMouseOver['marker_14']=false;
		}
		this._marker_14.ontouchend=function (e) {
			me.elementMouseOver['marker_14']=false;
		}
		this._marker_14.ggUpdateConditionNodeChange=function () {
				me._marker_14__normal.ggNodeChangeMain();
				me._marker_14__active.ggNodeChangeMain();
		}
		this._marker_14.ggUpdatePosition=function (useTransition) {
		}
		this._marker_14.ggNodeChange=function () {
			me._marker_14.ggUpdateConditionNodeChange();
		}
		this._marker_title_14=document.createElement('div');
		this._marker_title_14__text=document.createElement('div');
		this._marker_title_14.className='ggskin ggskin_textdiv';
		this._marker_title_14.ggTextDiv=this._marker_title_14__text;
		this._marker_title_14.ggId="marker_title_14";
		this._marker_title_14.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_14.ggVisible=false;
		this._marker_title_14.className='ggskin ggskin_text ';
		this._marker_title_14.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_14.setAttribute('style',hs);
		this._marker_title_14.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_14__text.setAttribute('style',hs);
		this._marker_title_14__text.innerHTML="Forschungsbereich - Liegefl\xe4che";
		this._marker_title_14.appendChild(this._marker_title_14__text);
		me._marker_title_14.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_14.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_14.onmouseover=function (e) {
			me.elementMouseOver['marker_title_14']=true;
		}
		this._marker_title_14.onmouseout=function (e) {
			me.elementMouseOver['marker_title_14']=false;
		}
		this._marker_title_14.ontouchend=function (e) {
			me.elementMouseOver['marker_title_14']=false;
		}
		me._marker_title_14.ggCurrentLogicStatePosition = -1;
		me._marker_title_14.ggCurrentLogicStateVisible = -1;
		this._marker_title_14.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_14'] == true) || 
				(me.elementMouseOver['marker_title_14'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_14.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_14.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_14.style[domTransition]='left none, top none';
				if (me._marker_title_14.ggCurrentLogicStateVisible == 0) {
					me._marker_title_14.style.visibility=(Number(me._marker_title_14.style.opacity)>0||!me._marker_title_14.style.opacity)?'inherit':'hidden';
					me._marker_title_14.ggVisible=true;
				}
				else {
					me._marker_title_14.style.visibility="hidden";
					me._marker_title_14.ggVisible=false;
				}
			}
		}
		this._marker_title_14.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_14.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_14.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_14.style[domTransition]='left none, top none';
				if (me._marker_title_14.ggCurrentLogicStatePosition == 0) {
					me._marker_title_14.style.left='-1026px';
					me._marker_title_14.style.top='-306px';
				}
				else {
					me._marker_title_14.style.left='-55px';
					me._marker_title_14.style.top='19px';
				}
			}
		}
		this._marker_title_14.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_14.ggNodeChange=function () {
			me._marker_title_14.ggUpdateConditionNodeChange();
		}
		this._marker_14.appendChild(this._marker_title_14);
		this._image_6.appendChild(this._marker_14);
		this._marker_15=document.createElement('div');
		this._marker_15.ggMarkerNodeId='{node16}';
		nodeMarker.push(this._marker_15);
		this._marker_15.ggId="Marker 15";
		this._marker_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_15.ggVisible=true;
		this._marker_15.className='ggskin ggskin_mark ';
		this._marker_15.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 351px;';
		hs+='position : absolute;';
		hs+='top : 223px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_15.setAttribute('style',hs);
		this._marker_15.style[domTransform + 'Origin']='50% 50%';
		me._marker_15.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_15.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_15.onclick=function (e) {
			me.player.openNext("{node16}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_15.onmouseover=function (e) {
			me.elementMouseOver['marker_15']=true;
		}
		this._marker_15.onmouseout=function (e) {
			me.elementMouseOver['marker_15']=false;
		}
		this._marker_15.ontouchend=function (e) {
			me.elementMouseOver['marker_15']=false;
		}
		this._marker_15.ggUpdateConditionNodeChange=function () {
				me._marker_15__normal.ggNodeChangeMain();
				me._marker_15__active.ggNodeChangeMain();
		}
		this._marker_15.ggUpdatePosition=function (useTransition) {
		}
		this._marker_15.ggNodeChange=function () {
			me._marker_15.ggUpdateConditionNodeChange();
		}
		this._marker_title_15=document.createElement('div');
		this._marker_title_15__text=document.createElement('div');
		this._marker_title_15.className='ggskin ggskin_textdiv';
		this._marker_title_15.ggTextDiv=this._marker_title_15__text;
		this._marker_title_15.ggId="marker_title_15";
		this._marker_title_15.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_15.ggVisible=false;
		this._marker_title_15.className='ggskin ggskin_text ';
		this._marker_title_15.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_15.setAttribute('style',hs);
		this._marker_title_15.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_15__text.setAttribute('style',hs);
		this._marker_title_15__text.innerHTML="Liegebox-innen";
		this._marker_title_15.appendChild(this._marker_title_15__text);
		me._marker_title_15.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_15.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_15.onmouseover=function (e) {
			me.elementMouseOver['marker_title_15']=true;
		}
		this._marker_title_15.onmouseout=function (e) {
			me.elementMouseOver['marker_title_15']=false;
		}
		this._marker_title_15.ontouchend=function (e) {
			me.elementMouseOver['marker_title_15']=false;
		}
		me._marker_title_15.ggCurrentLogicStatePosition = -1;
		me._marker_title_15.ggCurrentLogicStateVisible = -1;
		this._marker_title_15.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_15'] == true) || 
				(me.elementMouseOver['marker_title_15'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_15.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_15.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_15.style[domTransition]='left none, top none';
				if (me._marker_title_15.ggCurrentLogicStateVisible == 0) {
					me._marker_title_15.style.visibility=(Number(me._marker_title_15.style.opacity)>0||!me._marker_title_15.style.opacity)?'inherit':'hidden';
					me._marker_title_15.ggVisible=true;
				}
				else {
					me._marker_title_15.style.visibility="hidden";
					me._marker_title_15.ggVisible=false;
				}
			}
		}
		this._marker_title_15.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_15.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_15.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_15.style[domTransition]='left none, top none';
				if (me._marker_title_15.ggCurrentLogicStatePosition == 0) {
					me._marker_title_15.style.left='-660px';
					me._marker_title_15.style.top='-367px';
				}
				else {
					me._marker_title_15.style.left='-55px';
					me._marker_title_15.style.top='19px';
				}
			}
		}
		this._marker_title_15.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_15.ggNodeChange=function () {
			me._marker_title_15.ggUpdateConditionNodeChange();
		}
		this._marker_15.appendChild(this._marker_title_15);
		this._image_6.appendChild(this._marker_15);
		this._marker_16=document.createElement('div');
		this._marker_16.ggMarkerNodeId='{node20}';
		nodeMarker.push(this._marker_16);
		this._marker_16.ggId="Marker 16";
		this._marker_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_16.ggVisible=true;
		this._marker_16.className='ggskin ggskin_mark ';
		this._marker_16.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 262px;';
		hs+='position : absolute;';
		hs+='top : 170px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_16.setAttribute('style',hs);
		this._marker_16.style[domTransform + 'Origin']='50% 50%';
		me._marker_16.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_16.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_16.onclick=function (e) {
			me.player.openNext("{node20}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_16.onmouseover=function (e) {
			me.elementMouseOver['marker_16']=true;
		}
		this._marker_16.onmouseout=function (e) {
			me.elementMouseOver['marker_16']=false;
		}
		this._marker_16.ontouchend=function (e) {
			me.elementMouseOver['marker_16']=false;
		}
		this._marker_16.ggUpdateConditionNodeChange=function () {
				me._marker_16__normal.ggNodeChangeMain();
				me._marker_16__active.ggNodeChangeMain();
		}
		this._marker_16.ggUpdatePosition=function (useTransition) {
		}
		this._marker_16.ggNodeChange=function () {
			me._marker_16.ggUpdateConditionNodeChange();
		}
		this._marker_title_16=document.createElement('div');
		this._marker_title_16__text=document.createElement('div');
		this._marker_title_16.className='ggskin ggskin_textdiv';
		this._marker_title_16.ggTextDiv=this._marker_title_16__text;
		this._marker_title_16.ggId="marker_title_16";
		this._marker_title_16.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_16.ggVisible=false;
		this._marker_title_16.className='ggskin ggskin_text ';
		this._marker_title_16.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_16.setAttribute('style',hs);
		this._marker_title_16.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_16__text.setAttribute('style',hs);
		this._marker_title_16__text.innerHTML="Futterautomat Gang";
		this._marker_title_16.appendChild(this._marker_title_16__text);
		me._marker_title_16.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_16.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_16.onmouseover=function (e) {
			me.elementMouseOver['marker_title_16']=true;
		}
		this._marker_title_16.onmouseout=function (e) {
			me.elementMouseOver['marker_title_16']=false;
		}
		this._marker_title_16.ontouchend=function (e) {
			me.elementMouseOver['marker_title_16']=false;
		}
		me._marker_title_16.ggCurrentLogicStatePosition = -1;
		me._marker_title_16.ggCurrentLogicStateVisible = -1;
		this._marker_title_16.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_16'] == true) || 
				(me.elementMouseOver['marker_title_16'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_16.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_16.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_16.style[domTransition]='left none, top none';
				if (me._marker_title_16.ggCurrentLogicStateVisible == 0) {
					me._marker_title_16.style.visibility=(Number(me._marker_title_16.style.opacity)>0||!me._marker_title_16.style.opacity)?'inherit':'hidden';
					me._marker_title_16.ggVisible=true;
				}
				else {
					me._marker_title_16.style.visibility="hidden";
					me._marker_title_16.ggVisible=false;
				}
			}
		}
		this._marker_title_16.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_16.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_16.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_16.style[domTransition]='left none, top none';
				if (me._marker_title_16.ggCurrentLogicStatePosition == 0) {
					me._marker_title_16.style.left='-571px';
					me._marker_title_16.style.top='-314px';
				}
				else {
					me._marker_title_16.style.left='-55px';
					me._marker_title_16.style.top='19px';
				}
			}
		}
		this._marker_title_16.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_16.ggNodeChange=function () {
			me._marker_title_16.ggUpdateConditionNodeChange();
		}
		this._marker_16.appendChild(this._marker_title_16);
		this._image_6.appendChild(this._marker_16);
		this._marker_17=document.createElement('div');
		this._marker_17.ggMarkerNodeId='{node17}';
		nodeMarker.push(this._marker_17);
		this._marker_17.ggId="Marker 17";
		this._marker_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_17.ggVisible=true;
		this._marker_17.className='ggskin ggskin_mark ';
		this._marker_17.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 297px;';
		hs+='position : absolute;';
		hs+='top : 160px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_17.setAttribute('style',hs);
		this._marker_17.style[domTransform + 'Origin']='50% 50%';
		me._marker_17.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_17.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_17.onclick=function (e) {
			me.player.openNext("{node17}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_17.onmouseover=function (e) {
			me.elementMouseOver['marker_17']=true;
		}
		this._marker_17.onmouseout=function (e) {
			me.elementMouseOver['marker_17']=false;
		}
		this._marker_17.ontouchend=function (e) {
			me.elementMouseOver['marker_17']=false;
		}
		this._marker_17.ggUpdateConditionNodeChange=function () {
				me._marker_17__normal.ggNodeChangeMain();
				me._marker_17__active.ggNodeChangeMain();
		}
		this._marker_17.ggUpdatePosition=function (useTransition) {
		}
		this._marker_17.ggNodeChange=function () {
			me._marker_17.ggUpdateConditionNodeChange();
		}
		this._marker_title_17=document.createElement('div');
		this._marker_title_17__text=document.createElement('div');
		this._marker_title_17.className='ggskin ggskin_textdiv';
		this._marker_title_17.ggTextDiv=this._marker_title_17__text;
		this._marker_title_17.ggId="marker_title_17";
		this._marker_title_17.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_17.ggVisible=false;
		this._marker_title_17.className='ggskin ggskin_text ';
		this._marker_title_17.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_17.setAttribute('style',hs);
		this._marker_title_17.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_17__text.setAttribute('style',hs);
		this._marker_title_17__text.innerHTML="F\xfctterungssystem";
		this._marker_title_17.appendChild(this._marker_title_17__text);
		me._marker_title_17.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_17.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_17.onmouseover=function (e) {
			me.elementMouseOver['marker_title_17']=true;
		}
		this._marker_title_17.onmouseout=function (e) {
			me.elementMouseOver['marker_title_17']=false;
		}
		this._marker_title_17.ontouchend=function (e) {
			me.elementMouseOver['marker_title_17']=false;
		}
		me._marker_title_17.ggCurrentLogicStatePosition = -1;
		me._marker_title_17.ggCurrentLogicStateVisible = -1;
		this._marker_title_17.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_17'] == true) || 
				(me.elementMouseOver['marker_title_17'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_17.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_17.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_17.style[domTransition]='left none, top none';
				if (me._marker_title_17.ggCurrentLogicStateVisible == 0) {
					me._marker_title_17.style.visibility=(Number(me._marker_title_17.style.opacity)>0||!me._marker_title_17.style.opacity)?'inherit':'hidden';
					me._marker_title_17.ggVisible=true;
				}
				else {
					me._marker_title_17.style.visibility="hidden";
					me._marker_title_17.ggVisible=false;
				}
			}
		}
		this._marker_title_17.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_17.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_17.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_17.style[domTransition]='left none, top none';
				if (me._marker_title_17.ggCurrentLogicStatePosition == 0) {
					me._marker_title_17.style.left='-606px';
					me._marker_title_17.style.top='-304px';
				}
				else {
					me._marker_title_17.style.left='-55px';
					me._marker_title_17.style.top='19px';
				}
			}
		}
		this._marker_title_17.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_17.ggNodeChange=function () {
			me._marker_title_17.ggUpdateConditionNodeChange();
		}
		this._marker_17.appendChild(this._marker_title_17);
		this._image_6.appendChild(this._marker_17);
		this._marker_18=document.createElement('div');
		this._marker_18.ggMarkerNodeId='{node18}';
		nodeMarker.push(this._marker_18);
		this._marker_18.ggId="Marker 18";
		this._marker_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_18.ggVisible=true;
		this._marker_18.className='ggskin ggskin_mark ';
		this._marker_18.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 504px;';
		hs+='position : absolute;';
		hs+='top : 155px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_18.setAttribute('style',hs);
		this._marker_18.style[domTransform + 'Origin']='50% 50%';
		me._marker_18.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_18.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_18.onclick=function (e) {
			me.player.openNext("{node18}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_18.onmouseover=function (e) {
			me.elementMouseOver['marker_18']=true;
		}
		this._marker_18.onmouseout=function (e) {
			me.elementMouseOver['marker_18']=false;
		}
		this._marker_18.ontouchend=function (e) {
			me.elementMouseOver['marker_18']=false;
		}
		this._marker_18.ggUpdateConditionNodeChange=function () {
				me._marker_18__normal.ggNodeChangeMain();
				me._marker_18__active.ggNodeChangeMain();
		}
		this._marker_18.ggUpdatePosition=function (useTransition) {
		}
		this._marker_18.ggNodeChange=function () {
			me._marker_18.ggUpdateConditionNodeChange();
		}
		this._marker_title_18=document.createElement('div');
		this._marker_title_18__text=document.createElement('div');
		this._marker_title_18.className='ggskin ggskin_textdiv';
		this._marker_title_18.ggTextDiv=this._marker_title_18__text;
		this._marker_title_18.ggId="marker_title_18";
		this._marker_title_18.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_18.ggVisible=false;
		this._marker_title_18.className='ggskin ggskin_text ';
		this._marker_title_18.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_18.setAttribute('style',hs);
		this._marker_title_18.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_18__text.setAttribute('style',hs);
		this._marker_title_18__text.innerHTML="Futtertisch";
		this._marker_title_18.appendChild(this._marker_title_18__text);
		me._marker_title_18.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_18.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_18.onmouseover=function (e) {
			me.elementMouseOver['marker_title_18']=true;
		}
		this._marker_title_18.onmouseout=function (e) {
			me.elementMouseOver['marker_title_18']=false;
		}
		this._marker_title_18.ontouchend=function (e) {
			me.elementMouseOver['marker_title_18']=false;
		}
		me._marker_title_18.ggCurrentLogicStatePosition = -1;
		me._marker_title_18.ggCurrentLogicStateVisible = -1;
		this._marker_title_18.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_18'] == true) || 
				(me.elementMouseOver['marker_title_18'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_18.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_18.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_18.style[domTransition]='left none, top none';
				if (me._marker_title_18.ggCurrentLogicStateVisible == 0) {
					me._marker_title_18.style.visibility=(Number(me._marker_title_18.style.opacity)>0||!me._marker_title_18.style.opacity)?'inherit':'hidden';
					me._marker_title_18.ggVisible=true;
				}
				else {
					me._marker_title_18.style.visibility="hidden";
					me._marker_title_18.ggVisible=false;
				}
			}
		}
		this._marker_title_18.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_18.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_18.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_18.style[domTransition]='left none, top none';
				if (me._marker_title_18.ggCurrentLogicStatePosition == 0) {
					me._marker_title_18.style.left='-813px';
					me._marker_title_18.style.top='-299px';
				}
				else {
					me._marker_title_18.style.left='-55px';
					me._marker_title_18.style.top='18px';
				}
			}
		}
		this._marker_title_18.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_18.ggNodeChange=function () {
			me._marker_title_18.ggUpdateConditionNodeChange();
		}
		this._marker_18.appendChild(this._marker_title_18);
		this._image_6.appendChild(this._marker_18);
		this._marker_19=document.createElement('div');
		this._marker_19.ggMarkerNodeId='{node21}';
		nodeMarker.push(this._marker_19);
		this._marker_19.ggId="Marker 19";
		this._marker_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_19.ggVisible=true;
		this._marker_19.className='ggskin ggskin_mark ';
		this._marker_19.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 576px;';
		hs+='position : absolute;';
		hs+='top : 263px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_19.setAttribute('style',hs);
		this._marker_19.style[domTransform + 'Origin']='50% 50%';
		me._marker_19.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_19.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_19.onclick=function (e) {
			me.player.openNext("{node21}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_19.onmouseover=function (e) {
			me.elementMouseOver['marker_19']=true;
		}
		this._marker_19.onmouseout=function (e) {
			me.elementMouseOver['marker_19']=false;
		}
		this._marker_19.ontouchend=function (e) {
			me.elementMouseOver['marker_19']=false;
		}
		this._marker_19.ggUpdateConditionNodeChange=function () {
				me._marker_19__normal.ggNodeChangeMain();
				me._marker_19__active.ggNodeChangeMain();
		}
		this._marker_19.ggUpdatePosition=function (useTransition) {
		}
		this._marker_19.ggNodeChange=function () {
			me._marker_19.ggUpdateConditionNodeChange();
		}
		this._marker_title_19=document.createElement('div');
		this._marker_title_19__text=document.createElement('div');
		this._marker_title_19.className='ggskin ggskin_textdiv';
		this._marker_title_19.ggTextDiv=this._marker_title_19__text;
		this._marker_title_19.ggId="marker_title_19";
		this._marker_title_19.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_19.ggVisible=false;
		this._marker_title_19.className='ggskin ggskin_text ';
		this._marker_title_19.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_19.setAttribute('style',hs);
		this._marker_title_19.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_19__text.setAttribute('style',hs);
		this._marker_title_19__text.innerHTML="Auslauf";
		this._marker_title_19.appendChild(this._marker_title_19__text);
		me._marker_title_19.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_19.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_19.onmouseover=function (e) {
			me.elementMouseOver['marker_title_19']=true;
		}
		this._marker_title_19.onmouseout=function (e) {
			me.elementMouseOver['marker_title_19']=false;
		}
		this._marker_title_19.ontouchend=function (e) {
			me.elementMouseOver['marker_title_19']=false;
		}
		me._marker_title_19.ggCurrentLogicStatePosition = -1;
		me._marker_title_19.ggCurrentLogicStateVisible = -1;
		this._marker_title_19.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_19'] == true) || 
				(me.elementMouseOver['marker_title_19'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_19.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_19.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_19.style[domTransition]='left none, top none';
				if (me._marker_title_19.ggCurrentLogicStateVisible == 0) {
					me._marker_title_19.style.visibility=(Number(me._marker_title_19.style.opacity)>0||!me._marker_title_19.style.opacity)?'inherit':'hidden';
					me._marker_title_19.ggVisible=true;
				}
				else {
					me._marker_title_19.style.visibility="hidden";
					me._marker_title_19.ggVisible=false;
				}
			}
		}
		this._marker_title_19.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_19.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_19.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_19.style[domTransition]='left none, top none';
				if (me._marker_title_19.ggCurrentLogicStatePosition == 0) {
					me._marker_title_19.style.left='-885px';
					me._marker_title_19.style.top='-407px';
				}
				else {
					me._marker_title_19.style.left='-55px';
					me._marker_title_19.style.top='19px';
				}
			}
		}
		this._marker_title_19.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_19.ggNodeChange=function () {
			me._marker_title_19.ggUpdateConditionNodeChange();
		}
		this._marker_19.appendChild(this._marker_title_19);
		this._image_6.appendChild(this._marker_19);
		this._marker_20=document.createElement('div');
		this._marker_20.ggMarkerNodeId='{node22}';
		nodeMarker.push(this._marker_20);
		this._marker_20.ggId="Marker 20";
		this._marker_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_20.ggVisible=true;
		this._marker_20.className='ggskin ggskin_mark ';
		this._marker_20.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 572px;';
		hs+='position : absolute;';
		hs+='top : 327px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_20.setAttribute('style',hs);
		this._marker_20.style[domTransform + 'Origin']='50% 50%';
		me._marker_20.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_20.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_20.onclick=function (e) {
			me.player.openNext("{node22}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_20.onmouseover=function (e) {
			me.elementMouseOver['marker_20']=true;
		}
		this._marker_20.onmouseout=function (e) {
			me.elementMouseOver['marker_20']=false;
		}
		this._marker_20.ontouchend=function (e) {
			me.elementMouseOver['marker_20']=false;
		}
		this._marker_20.ggUpdateConditionNodeChange=function () {
				me._marker_20__normal.ggNodeChangeMain();
				me._marker_20__active.ggNodeChangeMain();
		}
		this._marker_20.ggUpdatePosition=function (useTransition) {
		}
		this._marker_20.ggNodeChange=function () {
			me._marker_20.ggUpdateConditionNodeChange();
		}
		this._marker_title_20=document.createElement('div');
		this._marker_title_20__text=document.createElement('div');
		this._marker_title_20.className='ggskin ggskin_textdiv';
		this._marker_title_20.ggTextDiv=this._marker_title_20__text;
		this._marker_title_20.ggId="marker_title_20";
		this._marker_title_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_20.ggVisible=false;
		this._marker_title_20.className='ggskin ggskin_text ';
		this._marker_title_20.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_20.setAttribute('style',hs);
		this._marker_title_20.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_20__text.setAttribute('style',hs);
		this._marker_title_20__text.innerHTML="G\xfclle und Mistlager";
		this._marker_title_20.appendChild(this._marker_title_20__text);
		me._marker_title_20.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_20.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_20.onmouseover=function (e) {
			me.elementMouseOver['marker_title_20']=true;
		}
		this._marker_title_20.onmouseout=function (e) {
			me.elementMouseOver['marker_title_20']=false;
		}
		this._marker_title_20.ontouchend=function (e) {
			me.elementMouseOver['marker_title_20']=false;
		}
		me._marker_title_20.ggCurrentLogicStatePosition = -1;
		me._marker_title_20.ggCurrentLogicStateVisible = -1;
		this._marker_title_20.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_20'] == true) || 
				(me.elementMouseOver['marker_title_20'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_20.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_20.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_20.style[domTransition]='left none, top none';
				if (me._marker_title_20.ggCurrentLogicStateVisible == 0) {
					me._marker_title_20.style.visibility=(Number(me._marker_title_20.style.opacity)>0||!me._marker_title_20.style.opacity)?'inherit':'hidden';
					me._marker_title_20.ggVisible=true;
				}
				else {
					me._marker_title_20.style.visibility="hidden";
					me._marker_title_20.ggVisible=false;
				}
			}
		}
		this._marker_title_20.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_20.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_20.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_20.style[domTransition]='left none, top none';
				if (me._marker_title_20.ggCurrentLogicStatePosition == 0) {
					me._marker_title_20.style.left='-881px';
					me._marker_title_20.style.top='-471px';
				}
				else {
					me._marker_title_20.style.left='-55px';
					me._marker_title_20.style.top='19px';
				}
			}
		}
		this._marker_title_20.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_20.ggNodeChange=function () {
			me._marker_title_20.ggUpdateConditionNodeChange();
		}
		this._marker_20.appendChild(this._marker_title_20);
		this._image_6.appendChild(this._marker_20);
		this._marker_21=document.createElement('div');
		this._marker_21.ggMarkerNodeId='{node24}';
		nodeMarker.push(this._marker_21);
		this._marker_21.ggId="Marker 21";
		this._marker_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_21.ggVisible=true;
		this._marker_21.className='ggskin ggskin_mark ';
		this._marker_21.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 238px;';
		hs+='position : absolute;';
		hs+='top : 218px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_21.setAttribute('style',hs);
		this._marker_21.style[domTransform + 'Origin']='50% 50%';
		me._marker_21.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_21.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_21.onclick=function (e) {
			me.player.openNext("{node24}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_21.onmouseover=function (e) {
			me.elementMouseOver['marker_21']=true;
		}
		this._marker_21.onmouseout=function (e) {
			me.elementMouseOver['marker_21']=false;
		}
		this._marker_21.ontouchend=function (e) {
			me.elementMouseOver['marker_21']=false;
		}
		this._marker_21.ggUpdateConditionNodeChange=function () {
				me._marker_21__normal.ggNodeChangeMain();
				me._marker_21__active.ggNodeChangeMain();
		}
		this._marker_21.ggUpdatePosition=function (useTransition) {
		}
		this._marker_21.ggNodeChange=function () {
			me._marker_21.ggUpdateConditionNodeChange();
		}
		this._marker_title_21=document.createElement('div');
		this._marker_title_21__text=document.createElement('div');
		this._marker_title_21.className='ggskin ggskin_textdiv';
		this._marker_title_21.ggTextDiv=this._marker_title_21__text;
		this._marker_title_21.ggId="marker_title_21";
		this._marker_title_21.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_21.ggVisible=false;
		this._marker_title_21.className='ggskin ggskin_text ';
		this._marker_title_21.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_21.setAttribute('style',hs);
		this._marker_title_21.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_21__text.setAttribute('style',hs);
		this._marker_title_21__text.innerHTML="Vorwartebereich";
		this._marker_title_21.appendChild(this._marker_title_21__text);
		me._marker_title_21.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_21.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_21.onmouseover=function (e) {
			me.elementMouseOver['marker_title_21']=true;
		}
		this._marker_title_21.onmouseout=function (e) {
			me.elementMouseOver['marker_title_21']=false;
		}
		this._marker_title_21.ontouchend=function (e) {
			me.elementMouseOver['marker_title_21']=false;
		}
		me._marker_title_21.ggCurrentLogicStatePosition = -1;
		me._marker_title_21.ggCurrentLogicStateVisible = -1;
		this._marker_title_21.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_21'] == true) || 
				(me.elementMouseOver['marker_title_21'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_21.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_21.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_21.style[domTransition]='left none, top none';
				if (me._marker_title_21.ggCurrentLogicStateVisible == 0) {
					me._marker_title_21.style.visibility=(Number(me._marker_title_21.style.opacity)>0||!me._marker_title_21.style.opacity)?'inherit':'hidden';
					me._marker_title_21.ggVisible=true;
				}
				else {
					me._marker_title_21.style.visibility="hidden";
					me._marker_title_21.ggVisible=false;
				}
			}
		}
		this._marker_title_21.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_21.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_21.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_21.style[domTransition]='left none, top none';
				if (me._marker_title_21.ggCurrentLogicStatePosition == 0) {
					me._marker_title_21.style.left='-547px';
					me._marker_title_21.style.top='-362px';
				}
				else {
					me._marker_title_21.style.left='-55px';
					me._marker_title_21.style.top='19px';
				}
			}
		}
		this._marker_title_21.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_21.ggNodeChange=function () {
			me._marker_title_21.ggUpdateConditionNodeChange();
		}
		this._marker_21.appendChild(this._marker_title_21);
		this._image_6.appendChild(this._marker_21);
		this._marker_22=document.createElement('div');
		this._marker_22.ggMarkerNodeId='{node25}';
		nodeMarker.push(this._marker_22);
		this._marker_22.ggId="Marker 22";
		this._marker_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_22.ggVisible=true;
		this._marker_22.className='ggskin ggskin_mark ';
		this._marker_22.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 183px;';
		hs+='position : absolute;';
		hs+='top : 163px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_22.setAttribute('style',hs);
		this._marker_22.style[domTransform + 'Origin']='50% 50%';
		me._marker_22.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_22.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_22.onclick=function (e) {
			me.player.openNext("{node25}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_22.onmouseover=function (e) {
			me.elementMouseOver['marker_22']=true;
		}
		this._marker_22.onmouseout=function (e) {
			me.elementMouseOver['marker_22']=false;
		}
		this._marker_22.ontouchend=function (e) {
			me.elementMouseOver['marker_22']=false;
		}
		this._marker_22.ggUpdateConditionNodeChange=function () {
				me._marker_22__normal.ggNodeChangeMain();
				me._marker_22__active.ggNodeChangeMain();
		}
		this._marker_22.ggUpdatePosition=function (useTransition) {
		}
		this._marker_22.ggNodeChange=function () {
			me._marker_22.ggUpdateConditionNodeChange();
		}
		this._marker_title_22=document.createElement('div');
		this._marker_title_22__text=document.createElement('div');
		this._marker_title_22.className='ggskin ggskin_textdiv';
		this._marker_title_22.ggTextDiv=this._marker_title_22__text;
		this._marker_title_22.ggId="marker_title_22";
		this._marker_title_22.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_22.ggVisible=false;
		this._marker_title_22.className='ggskin ggskin_text ';
		this._marker_title_22.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_22.setAttribute('style',hs);
		this._marker_title_22.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_22__text.setAttribute('style',hs);
		this._marker_title_22__text.innerHTML="Melkstand";
		this._marker_title_22.appendChild(this._marker_title_22__text);
		me._marker_title_22.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_22.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_22.onmouseover=function (e) {
			me.elementMouseOver['marker_title_22']=true;
		}
		this._marker_title_22.onmouseout=function (e) {
			me.elementMouseOver['marker_title_22']=false;
		}
		this._marker_title_22.ontouchend=function (e) {
			me.elementMouseOver['marker_title_22']=false;
		}
		me._marker_title_22.ggCurrentLogicStatePosition = -1;
		me._marker_title_22.ggCurrentLogicStateVisible = -1;
		this._marker_title_22.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_22'] == true) || 
				(me.elementMouseOver['marker_title_22'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_22.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_22.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_22.style[domTransition]='left none, top none';
				if (me._marker_title_22.ggCurrentLogicStateVisible == 0) {
					me._marker_title_22.style.visibility=(Number(me._marker_title_22.style.opacity)>0||!me._marker_title_22.style.opacity)?'inherit':'hidden';
					me._marker_title_22.ggVisible=true;
				}
				else {
					me._marker_title_22.style.visibility="hidden";
					me._marker_title_22.ggVisible=false;
				}
			}
		}
		this._marker_title_22.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_22.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_22.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_22.style[domTransition]='left none, top none';
				if (me._marker_title_22.ggCurrentLogicStatePosition == 0) {
					me._marker_title_22.style.left='-492px';
					me._marker_title_22.style.top='-307px';
				}
				else {
					me._marker_title_22.style.left='-55px';
					me._marker_title_22.style.top='19px';
				}
			}
		}
		this._marker_title_22.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_22.ggNodeChange=function () {
			me._marker_title_22.ggUpdateConditionNodeChange();
		}
		this._marker_22.appendChild(this._marker_title_22);
		this._image_6.appendChild(this._marker_22);
		this._marker_23=document.createElement('div');
		this._marker_23.ggMarkerNodeId='{node26}';
		nodeMarker.push(this._marker_23);
		this._marker_23.ggId="Marker 23";
		this._marker_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_23.ggVisible=true;
		this._marker_23.className='ggskin ggskin_mark ';
		this._marker_23.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 243px;';
		hs+='position : absolute;';
		hs+='top : 118px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_23.setAttribute('style',hs);
		this._marker_23.style[domTransform + 'Origin']='50% 50%';
		me._marker_23.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_23.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_23.onclick=function (e) {
			me.player.openNext("{node26}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_23.onmouseover=function (e) {
			me.elementMouseOver['marker_23']=true;
		}
		this._marker_23.onmouseout=function (e) {
			me.elementMouseOver['marker_23']=false;
		}
		this._marker_23.ontouchend=function (e) {
			me.elementMouseOver['marker_23']=false;
		}
		this._marker_23.ggUpdateConditionNodeChange=function () {
				me._marker_23__normal.ggNodeChangeMain();
				me._marker_23__active.ggNodeChangeMain();
		}
		this._marker_23.ggUpdatePosition=function (useTransition) {
		}
		this._marker_23.ggNodeChange=function () {
			me._marker_23.ggUpdateConditionNodeChange();
		}
		this._marker_title_23=document.createElement('div');
		this._marker_title_23__text=document.createElement('div');
		this._marker_title_23.className='ggskin ggskin_textdiv';
		this._marker_title_23.ggTextDiv=this._marker_title_23__text;
		this._marker_title_23.ggId="marker_title_23";
		this._marker_title_23.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_23.ggVisible=false;
		this._marker_title_23.className='ggskin ggskin_text ';
		this._marker_title_23.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -56px;';
		hs+='position : absolute;';
		hs+='top : 18px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_23.setAttribute('style',hs);
		this._marker_title_23.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_23__text.setAttribute('style',hs);
		this._marker_title_23__text.innerHTML="Milchraum";
		this._marker_title_23.appendChild(this._marker_title_23__text);
		me._marker_title_23.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_23.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_23.onmouseover=function (e) {
			me.elementMouseOver['marker_title_23']=true;
		}
		this._marker_title_23.onmouseout=function (e) {
			me.elementMouseOver['marker_title_23']=false;
		}
		this._marker_title_23.ontouchend=function (e) {
			me.elementMouseOver['marker_title_23']=false;
		}
		me._marker_title_23.ggCurrentLogicStatePosition = -1;
		me._marker_title_23.ggCurrentLogicStateVisible = -1;
		this._marker_title_23.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_23'] == true) || 
				(me.elementMouseOver['marker_title_23'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_23.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_23.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_23.style[domTransition]='left none, top none';
				if (me._marker_title_23.ggCurrentLogicStateVisible == 0) {
					me._marker_title_23.style.visibility=(Number(me._marker_title_23.style.opacity)>0||!me._marker_title_23.style.opacity)?'inherit':'hidden';
					me._marker_title_23.ggVisible=true;
				}
				else {
					me._marker_title_23.style.visibility="hidden";
					me._marker_title_23.ggVisible=false;
				}
			}
		}
		this._marker_title_23.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_23.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_23.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_23.style[domTransition]='left none, top none';
				if (me._marker_title_23.ggCurrentLogicStatePosition == 0) {
					me._marker_title_23.style.left='-552px';
					me._marker_title_23.style.top='-262px';
				}
				else {
					me._marker_title_23.style.left='-56px';
					me._marker_title_23.style.top='18px';
				}
			}
		}
		this._marker_title_23.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_23.ggNodeChange=function () {
			me._marker_title_23.ggUpdateConditionNodeChange();
		}
		this._marker_23.appendChild(this._marker_title_23);
		this._image_6.appendChild(this._marker_23);
		this._marker_24=document.createElement('div');
		this._marker_24.ggMarkerNodeId='{node27}';
		nodeMarker.push(this._marker_24);
		this._marker_24.ggId="Marker 24";
		this._marker_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_24.ggVisible=true;
		this._marker_24.className='ggskin ggskin_mark ';
		this._marker_24.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 72px;';
		hs+='position : absolute;';
		hs+='top : 264px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_24.setAttribute('style',hs);
		this._marker_24.style[domTransform + 'Origin']='50% 50%';
		me._marker_24.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_24.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_24.onclick=function (e) {
			me.player.openNext("{node27}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_24.onmouseover=function (e) {
			me.elementMouseOver['marker_24']=true;
		}
		this._marker_24.onmouseout=function (e) {
			me.elementMouseOver['marker_24']=false;
		}
		this._marker_24.ontouchend=function (e) {
			me.elementMouseOver['marker_24']=false;
		}
		this._marker_24.ggUpdateConditionNodeChange=function () {
				me._marker_24__normal.ggNodeChangeMain();
				me._marker_24__active.ggNodeChangeMain();
		}
		this._marker_24.ggUpdatePosition=function (useTransition) {
		}
		this._marker_24.ggNodeChange=function () {
			me._marker_24.ggUpdateConditionNodeChange();
		}
		this._marker_title_24=document.createElement('div');
		this._marker_title_24__text=document.createElement('div');
		this._marker_title_24.className='ggskin ggskin_textdiv';
		this._marker_title_24.ggTextDiv=this._marker_title_24__text;
		this._marker_title_24.ggId="marker_title_24";
		this._marker_title_24.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_24.ggVisible=false;
		this._marker_title_24.className='ggskin ggskin_text ';
		this._marker_title_24.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_24.setAttribute('style',hs);
		this._marker_title_24.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_24__text.setAttribute('style',hs);
		this._marker_title_24__text.innerHTML="K\xe4lberiglus";
		this._marker_title_24.appendChild(this._marker_title_24__text);
		me._marker_title_24.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_24.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_24.onmouseover=function (e) {
			me.elementMouseOver['marker_title_24']=true;
		}
		this._marker_title_24.onmouseout=function (e) {
			me.elementMouseOver['marker_title_24']=false;
		}
		this._marker_title_24.ontouchend=function (e) {
			me.elementMouseOver['marker_title_24']=false;
		}
		me._marker_title_24.ggCurrentLogicStatePosition = -1;
		me._marker_title_24.ggCurrentLogicStateVisible = -1;
		this._marker_title_24.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_24'] == true) || 
				(me.elementMouseOver['marker_title_24'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_24.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_24.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_24.style[domTransition]='left none, top none';
				if (me._marker_title_24.ggCurrentLogicStateVisible == 0) {
					me._marker_title_24.style.visibility=(Number(me._marker_title_24.style.opacity)>0||!me._marker_title_24.style.opacity)?'inherit':'hidden';
					me._marker_title_24.ggVisible=true;
				}
				else {
					me._marker_title_24.style.visibility="hidden";
					me._marker_title_24.ggVisible=false;
				}
			}
		}
		this._marker_title_24.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_24.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_24.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_24.style[domTransition]='left none, top none';
				if (me._marker_title_24.ggCurrentLogicStatePosition == 0) {
					me._marker_title_24.style.left='-381px';
					me._marker_title_24.style.top='-408px';
				}
				else {
					me._marker_title_24.style.left='-55px';
					me._marker_title_24.style.top='19px';
				}
			}
		}
		this._marker_title_24.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_24.ggNodeChange=function () {
			me._marker_title_24.ggUpdateConditionNodeChange();
		}
		this._marker_24.appendChild(this._marker_title_24);
		this._image_6.appendChild(this._marker_24);
		this._marker_25=document.createElement('div');
		this._marker_25.ggMarkerNodeId='{node28}';
		nodeMarker.push(this._marker_25);
		this._marker_25.ggId="Marker 25";
		this._marker_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_25.ggVisible=true;
		this._marker_25.className='ggskin ggskin_mark ';
		this._marker_25.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 205px;';
		hs+='position : absolute;';
		hs+='top : 300px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_25.setAttribute('style',hs);
		this._marker_25.style[domTransform + 'Origin']='50% 50%';
		me._marker_25.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_25.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_25.onclick=function (e) {
			me.player.openNext("{node28}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_25.onmouseover=function (e) {
			me.elementMouseOver['marker_25']=true;
		}
		this._marker_25.onmouseout=function (e) {
			me.elementMouseOver['marker_25']=false;
		}
		this._marker_25.ontouchend=function (e) {
			me.elementMouseOver['marker_25']=false;
		}
		this._marker_25.ggUpdateConditionNodeChange=function () {
				me._marker_25__normal.ggNodeChangeMain();
				me._marker_25__active.ggNodeChangeMain();
		}
		this._marker_25.ggUpdatePosition=function (useTransition) {
		}
		this._marker_25.ggNodeChange=function () {
			me._marker_25.ggUpdateConditionNodeChange();
		}
		this._marker_title_25=document.createElement('div');
		this._marker_title_25__text=document.createElement('div');
		this._marker_title_25.className='ggskin ggskin_textdiv';
		this._marker_title_25.ggTextDiv=this._marker_title_25__text;
		this._marker_title_25.ggId="marker_title_25";
		this._marker_title_25.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_25.ggVisible=false;
		this._marker_title_25.className='ggskin ggskin_text ';
		this._marker_title_25.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_25.setAttribute('style',hs);
		this._marker_title_25.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_25__text.setAttribute('style',hs);
		this._marker_title_25__text.innerHTML="K\xe4lberstall Gang";
		this._marker_title_25.appendChild(this._marker_title_25__text);
		me._marker_title_25.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_25.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_25.onmouseover=function (e) {
			me.elementMouseOver['marker_title_25']=true;
		}
		this._marker_title_25.onmouseout=function (e) {
			me.elementMouseOver['marker_title_25']=false;
		}
		this._marker_title_25.ontouchend=function (e) {
			me.elementMouseOver['marker_title_25']=false;
		}
		me._marker_title_25.ggCurrentLogicStatePosition = -1;
		me._marker_title_25.ggCurrentLogicStateVisible = -1;
		this._marker_title_25.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_25'] == true) || 
				(me.elementMouseOver['marker_title_25'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_25.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_25.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_25.style[domTransition]='left none, top none';
				if (me._marker_title_25.ggCurrentLogicStateVisible == 0) {
					me._marker_title_25.style.visibility=(Number(me._marker_title_25.style.opacity)>0||!me._marker_title_25.style.opacity)?'inherit':'hidden';
					me._marker_title_25.ggVisible=true;
				}
				else {
					me._marker_title_25.style.visibility="hidden";
					me._marker_title_25.ggVisible=false;
				}
			}
		}
		this._marker_title_25.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_25.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_25.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_25.style[domTransition]='left none, top none';
				if (me._marker_title_25.ggCurrentLogicStatePosition == 0) {
					me._marker_title_25.style.left='-514px';
					me._marker_title_25.style.top='-444px';
				}
				else {
					me._marker_title_25.style.left='-55px';
					me._marker_title_25.style.top='19px';
				}
			}
		}
		this._marker_title_25.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_25.ggNodeChange=function () {
			me._marker_title_25.ggUpdateConditionNodeChange();
		}
		this._marker_25.appendChild(this._marker_title_25);
		this._image_6.appendChild(this._marker_25);
		this._marker_26=document.createElement('div');
		this._marker_26.ggMarkerNodeId='{node29}';
		nodeMarker.push(this._marker_26);
		this._marker_26.ggId="Marker 26";
		this._marker_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_26.ggVisible=true;
		this._marker_26.className='ggskin ggskin_mark ';
		this._marker_26.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 235px;';
		hs+='position : absolute;';
		hs+='top : 324px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_26.setAttribute('style',hs);
		this._marker_26.style[domTransform + 'Origin']='50% 50%';
		me._marker_26.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_26.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_26.onclick=function (e) {
			me.player.openNext("{node29}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_26.onmouseover=function (e) {
			me.elementMouseOver['marker_26']=true;
		}
		this._marker_26.onmouseout=function (e) {
			me.elementMouseOver['marker_26']=false;
		}
		this._marker_26.ontouchend=function (e) {
			me.elementMouseOver['marker_26']=false;
		}
		this._marker_26.ggUpdateConditionNodeChange=function () {
				me._marker_26__normal.ggNodeChangeMain();
				me._marker_26__active.ggNodeChangeMain();
		}
		this._marker_26.ggUpdatePosition=function (useTransition) {
		}
		this._marker_26.ggNodeChange=function () {
			me._marker_26.ggUpdateConditionNodeChange();
		}
		this._marker_title_26=document.createElement('div');
		this._marker_title_26__text=document.createElement('div');
		this._marker_title_26.className='ggskin ggskin_textdiv';
		this._marker_title_26.ggTextDiv=this._marker_title_26__text;
		this._marker_title_26.ggId="marker_title_26";
		this._marker_title_26.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_26.ggVisible=false;
		this._marker_title_26.className='ggskin ggskin_text ';
		this._marker_title_26.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_26.setAttribute('style',hs);
		this._marker_title_26.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_26__text.setAttribute('style',hs);
		this._marker_title_26__text.innerHTML="K\xe4lberstall Gruppenhaltung";
		this._marker_title_26.appendChild(this._marker_title_26__text);
		me._marker_title_26.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_26.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_26.onmouseover=function (e) {
			me.elementMouseOver['marker_title_26']=true;
		}
		this._marker_title_26.onmouseout=function (e) {
			me.elementMouseOver['marker_title_26']=false;
		}
		this._marker_title_26.ontouchend=function (e) {
			me.elementMouseOver['marker_title_26']=false;
		}
		me._marker_title_26.ggCurrentLogicStatePosition = -1;
		me._marker_title_26.ggCurrentLogicStateVisible = -1;
		this._marker_title_26.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_26'] == true) || 
				(me.elementMouseOver['marker_title_26'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_26.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_26.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_26.style[domTransition]='left none, top none';
				if (me._marker_title_26.ggCurrentLogicStateVisible == 0) {
					me._marker_title_26.style.visibility=(Number(me._marker_title_26.style.opacity)>0||!me._marker_title_26.style.opacity)?'inherit':'hidden';
					me._marker_title_26.ggVisible=true;
				}
				else {
					me._marker_title_26.style.visibility="hidden";
					me._marker_title_26.ggVisible=false;
				}
			}
		}
		this._marker_title_26.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_26.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_26.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_26.style[domTransition]='left none, top none';
				if (me._marker_title_26.ggCurrentLogicStatePosition == 0) {
					me._marker_title_26.style.left='-544px';
					me._marker_title_26.style.top='-468px';
				}
				else {
					me._marker_title_26.style.left='-55px';
					me._marker_title_26.style.top='19px';
				}
			}
		}
		this._marker_title_26.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_26.ggNodeChange=function () {
			me._marker_title_26.ggUpdateConditionNodeChange();
		}
		this._marker_26.appendChild(this._marker_title_26);
		this._image_6.appendChild(this._marker_26);
		this._marker_27=document.createElement('div');
		this._marker_27.ggMarkerNodeId='{node30}';
		nodeMarker.push(this._marker_27);
		this._marker_27.ggId="Marker 27";
		this._marker_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_27.ggVisible=true;
		this._marker_27.className='ggskin ggskin_mark ';
		this._marker_27.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 181px;';
		hs+='position : absolute;';
		hs+='top : 375px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_27.setAttribute('style',hs);
		this._marker_27.style[domTransform + 'Origin']='50% 50%';
		me._marker_27.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_27.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_27.onclick=function (e) {
			me.player.openNext("{node30}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_27.onmouseover=function (e) {
			me.elementMouseOver['marker_27']=true;
		}
		this._marker_27.onmouseout=function (e) {
			me.elementMouseOver['marker_27']=false;
		}
		this._marker_27.ontouchend=function (e) {
			me.elementMouseOver['marker_27']=false;
		}
		this._marker_27.ggUpdateConditionNodeChange=function () {
				me._marker_27__normal.ggNodeChangeMain();
				me._marker_27__active.ggNodeChangeMain();
		}
		this._marker_27.ggUpdatePosition=function (useTransition) {
		}
		this._marker_27.ggNodeChange=function () {
			me._marker_27.ggUpdateConditionNodeChange();
		}
		this._marker_title_27=document.createElement('div');
		this._marker_title_27__text=document.createElement('div');
		this._marker_title_27.className='ggskin ggskin_textdiv';
		this._marker_title_27.ggTextDiv=this._marker_title_27__text;
		this._marker_title_27.ggId="marker_title_27";
		this._marker_title_27.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_27.ggVisible=false;
		this._marker_title_27.className='ggskin ggskin_text ';
		this._marker_title_27.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_27.setAttribute('style',hs);
		this._marker_title_27.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_27__text.setAttribute('style',hs);
		this._marker_title_27__text.innerHTML="K\xe4lberh\xfctte";
		this._marker_title_27.appendChild(this._marker_title_27__text);
		me._marker_title_27.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_27.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_27.onmouseover=function (e) {
			me.elementMouseOver['marker_title_27']=true;
		}
		this._marker_title_27.onmouseout=function (e) {
			me.elementMouseOver['marker_title_27']=false;
		}
		this._marker_title_27.ontouchend=function (e) {
			me.elementMouseOver['marker_title_27']=false;
		}
		me._marker_title_27.ggCurrentLogicStatePosition = -1;
		me._marker_title_27.ggCurrentLogicStateVisible = -1;
		this._marker_title_27.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_27'] == true) || 
				(me.elementMouseOver['marker_title_27'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_27.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_27.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_27.style[domTransition]='left none, top none';
				if (me._marker_title_27.ggCurrentLogicStateVisible == 0) {
					me._marker_title_27.style.visibility=(Number(me._marker_title_27.style.opacity)>0||!me._marker_title_27.style.opacity)?'inherit':'hidden';
					me._marker_title_27.ggVisible=true;
				}
				else {
					me._marker_title_27.style.visibility="hidden";
					me._marker_title_27.ggVisible=false;
				}
			}
		}
		this._marker_title_27.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_27.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_27.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_27.style[domTransition]='left none, top none';
				if (me._marker_title_27.ggCurrentLogicStatePosition == 0) {
					me._marker_title_27.style.left='-490px';
					me._marker_title_27.style.top='-519px';
				}
				else {
					me._marker_title_27.style.left='-55px';
					me._marker_title_27.style.top='19px';
				}
			}
		}
		this._marker_title_27.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_27.ggNodeChange=function () {
			me._marker_title_27.ggUpdateConditionNodeChange();
		}
		this._marker_27.appendChild(this._marker_title_27);
		this._image_6.appendChild(this._marker_27);
		this._marker_280=document.createElement('div');
		this._marker_280.ggMarkerNodeId='{node30}';
		nodeMarker.push(this._marker_280);
		this._marker_280.ggId="Marker 28";
		this._marker_280.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_280.ggVisible=true;
		this._marker_280.className='ggskin ggskin_mark ';
		this._marker_280.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 281px;';
		hs+='position : absolute;';
		hs+='top : 371px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_280.setAttribute('style',hs);
		this._marker_280.style[domTransform + 'Origin']='50% 50%';
		me._marker_280.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_280.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_280.onclick=function (e) {
			me.player.openNext("{node31}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_280.onmouseover=function (e) {
			me.elementMouseOver['marker_280']=true;
		}
		this._marker_280.onmouseout=function (e) {
			me.elementMouseOver['marker_280']=false;
		}
		this._marker_280.ontouchend=function (e) {
			me.elementMouseOver['marker_280']=false;
		}
		this._marker_280.ggUpdateConditionNodeChange=function () {
				me._marker_280__normal.ggNodeChangeMain();
				me._marker_280__active.ggNodeChangeMain();
		}
		this._marker_280.ggUpdatePosition=function (useTransition) {
		}
		this._marker_280.ggNodeChange=function () {
			me._marker_280.ggUpdateConditionNodeChange();
		}
		this._marker_title_280=document.createElement('div');
		this._marker_title_280__text=document.createElement('div');
		this._marker_title_280.className='ggskin ggskin_textdiv';
		this._marker_title_280.ggTextDiv=this._marker_title_280__text;
		this._marker_title_280.ggId="marker_title_28";
		this._marker_title_280.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_280.ggVisible=false;
		this._marker_title_280.className='ggskin ggskin_text ';
		this._marker_title_280.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_280.setAttribute('style',hs);
		this._marker_title_280.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_280__text.setAttribute('style',hs);
		this._marker_title_280__text.innerHTML="K\xe4lberbox Iglus";
		this._marker_title_280.appendChild(this._marker_title_280__text);
		me._marker_title_280.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_280.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_280.onmouseover=function (e) {
			me.elementMouseOver['marker_title_280']=true;
		}
		this._marker_title_280.onmouseout=function (e) {
			me.elementMouseOver['marker_title_280']=false;
		}
		this._marker_title_280.ontouchend=function (e) {
			me.elementMouseOver['marker_title_280']=false;
		}
		me._marker_title_280.ggCurrentLogicStatePosition = -1;
		me._marker_title_280.ggCurrentLogicStateVisible = -1;
		this._marker_title_280.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_280'] == true) || 
				(me.elementMouseOver['marker_title_280'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_280.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_280.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_280.style[domTransition]='left none, top none';
				if (me._marker_title_280.ggCurrentLogicStateVisible == 0) {
					me._marker_title_280.style.visibility=(Number(me._marker_title_280.style.opacity)>0||!me._marker_title_280.style.opacity)?'inherit':'hidden';
					me._marker_title_280.ggVisible=true;
				}
				else {
					me._marker_title_280.style.visibility="hidden";
					me._marker_title_280.ggVisible=false;
				}
			}
		}
		this._marker_title_280.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_280.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_280.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_280.style[domTransition]='left none, top none';
				if (me._marker_title_280.ggCurrentLogicStatePosition == 0) {
					me._marker_title_280.style.left='-590px';
					me._marker_title_280.style.top='-515px';
				}
				else {
					me._marker_title_280.style.left='-55px';
					me._marker_title_280.style.top='19px';
				}
			}
		}
		this._marker_title_280.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_280.ggNodeChange=function () {
			me._marker_title_280.ggUpdateConditionNodeChange();
		}
		this._marker_280.appendChild(this._marker_title_280);
		this._image_6.appendChild(this._marker_280);
		this._marker_28=document.createElement('div');
		this._marker_28.ggMarkerNodeId='{node33}';
		nodeMarker.push(this._marker_28);
		this._marker_28.ggId="Marker 28";
		this._marker_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_28.ggVisible=true;
		this._marker_28.className='ggskin ggskin_mark ';
		this._marker_28.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 174px;';
		hs+='position : absolute;';
		hs+='top : 341px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_28.setAttribute('style',hs);
		this._marker_28.style[domTransform + 'Origin']='50% 50%';
		me._marker_28.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_28.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_28.onclick=function (e) {
			me.player.openNext("{node33}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_28.onmouseover=function (e) {
			me.elementMouseOver['marker_28']=true;
		}
		this._marker_28.onmouseout=function (e) {
			me.elementMouseOver['marker_28']=false;
		}
		this._marker_28.ontouchend=function (e) {
			me.elementMouseOver['marker_28']=false;
		}
		this._marker_28.ggUpdateConditionNodeChange=function () {
				me._marker_28__normal.ggNodeChangeMain();
				me._marker_28__active.ggNodeChangeMain();
		}
		this._marker_28.ggUpdatePosition=function (useTransition) {
		}
		this._marker_28.ggNodeChange=function () {
			me._marker_28.ggUpdateConditionNodeChange();
		}
		this._marker_title_28=document.createElement('div');
		this._marker_title_28__text=document.createElement('div');
		this._marker_title_28.className='ggskin ggskin_textdiv';
		this._marker_title_28.ggTextDiv=this._marker_title_28__text;
		this._marker_title_28.ggId="marker_title_28";
		this._marker_title_28.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_28.ggVisible=false;
		this._marker_title_28.className='ggskin ggskin_text ';
		this._marker_title_28.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -57px;';
		hs+='position : absolute;';
		hs+='top : 17px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_28.setAttribute('style',hs);
		this._marker_title_28.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_28__text.setAttribute('style',hs);
		this._marker_title_28__text.innerHTML="Milchraum K\xe4lber";
		this._marker_title_28.appendChild(this._marker_title_28__text);
		me._marker_title_28.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_28.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_28.onmouseover=function (e) {
			me.elementMouseOver['marker_title_28']=true;
		}
		this._marker_title_28.onmouseout=function (e) {
			me.elementMouseOver['marker_title_28']=false;
		}
		this._marker_title_28.ontouchend=function (e) {
			me.elementMouseOver['marker_title_28']=false;
		}
		me._marker_title_28.ggCurrentLogicStatePosition = -1;
		me._marker_title_28.ggCurrentLogicStateVisible = -1;
		this._marker_title_28.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_28'] == true) || 
				(me.elementMouseOver['marker_title_28'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_28.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_28.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_28.style[domTransition]='left none, top none';
				if (me._marker_title_28.ggCurrentLogicStateVisible == 0) {
					me._marker_title_28.style.visibility=(Number(me._marker_title_28.style.opacity)>0||!me._marker_title_28.style.opacity)?'inherit':'hidden';
					me._marker_title_28.ggVisible=true;
				}
				else {
					me._marker_title_28.style.visibility="hidden";
					me._marker_title_28.ggVisible=false;
				}
			}
		}
		this._marker_title_28.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_28.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_28.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_28.style[domTransition]='left none, top none';
				if (me._marker_title_28.ggCurrentLogicStatePosition == 0) {
					me._marker_title_28.style.left='-483px';
					me._marker_title_28.style.top='-485px';
				}
				else {
					me._marker_title_28.style.left='-57px';
					me._marker_title_28.style.top='17px';
				}
			}
		}
		this._marker_title_28.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_28.ggNodeChange=function () {
			me._marker_title_28.ggUpdateConditionNodeChange();
		}
		this._marker_28.appendChild(this._marker_title_28);
		this._image_6.appendChild(this._marker_28);
		this._marker_29=document.createElement('div');
		this._marker_29.ggMarkerNodeId='{node34}';
		nodeMarker.push(this._marker_29);
		this._marker_29.ggId="Marker 29";
		this._marker_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_29.ggVisible=true;
		this._marker_29.className='ggskin ggskin_mark ';
		this._marker_29.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 428px;';
		hs+='position : absolute;';
		hs+='top : 95px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_29.setAttribute('style',hs);
		this._marker_29.style[domTransform + 'Origin']='50% 50%';
		me._marker_29.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_29.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_29.onclick=function (e) {
			me.player.openNext("{node34}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_29.onmouseover=function (e) {
			me.elementMouseOver['marker_29']=true;
		}
		this._marker_29.onmouseout=function (e) {
			me.elementMouseOver['marker_29']=false;
		}
		this._marker_29.ontouchend=function (e) {
			me.elementMouseOver['marker_29']=false;
		}
		this._marker_29.ggUpdateConditionNodeChange=function () {
				me._marker_29__normal.ggNodeChangeMain();
				me._marker_29__active.ggNodeChangeMain();
		}
		this._marker_29.ggUpdatePosition=function (useTransition) {
		}
		this._marker_29.ggNodeChange=function () {
			me._marker_29.ggUpdateConditionNodeChange();
		}
		this._marker_title_29=document.createElement('div');
		this._marker_title_29__text=document.createElement('div');
		this._marker_title_29.className='ggskin ggskin_textdiv';
		this._marker_title_29.ggTextDiv=this._marker_title_29__text;
		this._marker_title_29.ggId="marker_title_29";
		this._marker_title_29.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_29.ggVisible=false;
		this._marker_title_29.className='ggskin ggskin_text ';
		this._marker_title_29.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_29.setAttribute('style',hs);
		this._marker_title_29.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_29__text.setAttribute('style',hs);
		this._marker_title_29__text.innerHTML="Futterk\xfcche";
		this._marker_title_29.appendChild(this._marker_title_29__text);
		me._marker_title_29.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_29.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_29.onmouseover=function (e) {
			me.elementMouseOver['marker_title_29']=true;
		}
		this._marker_title_29.onmouseout=function (e) {
			me.elementMouseOver['marker_title_29']=false;
		}
		this._marker_title_29.ontouchend=function (e) {
			me.elementMouseOver['marker_title_29']=false;
		}
		me._marker_title_29.ggCurrentLogicStatePosition = -1;
		me._marker_title_29.ggCurrentLogicStateVisible = -1;
		this._marker_title_29.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_29'] == true) || 
				(me.elementMouseOver['marker_title_29'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_29.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_29.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_29.style[domTransition]='left none, top none';
				if (me._marker_title_29.ggCurrentLogicStateVisible == 0) {
					me._marker_title_29.style.visibility=(Number(me._marker_title_29.style.opacity)>0||!me._marker_title_29.style.opacity)?'inherit':'hidden';
					me._marker_title_29.ggVisible=true;
				}
				else {
					me._marker_title_29.style.visibility="hidden";
					me._marker_title_29.ggVisible=false;
				}
			}
		}
		this._marker_title_29.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_29.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_29.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_29.style[domTransition]='left none, top none';
				if (me._marker_title_29.ggCurrentLogicStatePosition == 0) {
					me._marker_title_29.style.left='-737px';
					me._marker_title_29.style.top='-239px';
				}
				else {
					me._marker_title_29.style.left='-55px';
					me._marker_title_29.style.top='19px';
				}
			}
		}
		this._marker_title_29.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_29.ggNodeChange=function () {
			me._marker_title_29.ggUpdateConditionNodeChange();
		}
		this._marker_29.appendChild(this._marker_title_29);
		this._image_6.appendChild(this._marker_29);
		this._marker_30=document.createElement('div');
		this._marker_30.ggMarkerNodeId='{node35}';
		nodeMarker.push(this._marker_30);
		this._marker_30.ggId="Marker 30";
		this._marker_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_30.ggVisible=true;
		this._marker_30.className='ggskin ggskin_mark ';
		this._marker_30.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 504px;';
		hs+='position : absolute;';
		hs+='top : 116px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_30.setAttribute('style',hs);
		this._marker_30.style[domTransform + 'Origin']='50% 50%';
		me._marker_30.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_30.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_30.onclick=function (e) {
			me.player.openNext("{node35}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_30.onmouseover=function (e) {
			me.elementMouseOver['marker_30']=true;
		}
		this._marker_30.onmouseout=function (e) {
			me.elementMouseOver['marker_30']=false;
		}
		this._marker_30.ontouchend=function (e) {
			me.elementMouseOver['marker_30']=false;
		}
		this._marker_30.ggUpdateConditionNodeChange=function () {
				me._marker_30__normal.ggNodeChangeMain();
				me._marker_30__active.ggNodeChangeMain();
		}
		this._marker_30.ggUpdatePosition=function (useTransition) {
		}
		this._marker_30.ggNodeChange=function () {
			me._marker_30.ggUpdateConditionNodeChange();
		}
		this._marker_title_30=document.createElement('div');
		this._marker_title_30__text=document.createElement('div');
		this._marker_title_30.className='ggskin ggskin_textdiv';
		this._marker_title_30.ggTextDiv=this._marker_title_30__text;
		this._marker_title_30.ggId="marker_title_30";
		this._marker_title_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_30.ggVisible=false;
		this._marker_title_30.className='ggskin ggskin_text ';
		this._marker_title_30.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_30.setAttribute('style',hs);
		this._marker_title_30.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_30__text.setAttribute('style',hs);
		this._marker_title_30__text.innerHTML="Futterk\xfcche-innen";
		this._marker_title_30.appendChild(this._marker_title_30__text);
		me._marker_title_30.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_30.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_30.onmouseover=function (e) {
			me.elementMouseOver['marker_title_30']=true;
		}
		this._marker_title_30.onmouseout=function (e) {
			me.elementMouseOver['marker_title_30']=false;
		}
		this._marker_title_30.ontouchend=function (e) {
			me.elementMouseOver['marker_title_30']=false;
		}
		me._marker_title_30.ggCurrentLogicStatePosition = -1;
		me._marker_title_30.ggCurrentLogicStateVisible = -1;
		this._marker_title_30.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_30'] == true) || 
				(me.elementMouseOver['marker_title_30'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_30.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_30.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_30.style[domTransition]='left none, top none';
				if (me._marker_title_30.ggCurrentLogicStateVisible == 0) {
					me._marker_title_30.style.visibility=(Number(me._marker_title_30.style.opacity)>0||!me._marker_title_30.style.opacity)?'inherit':'hidden';
					me._marker_title_30.ggVisible=true;
				}
				else {
					me._marker_title_30.style.visibility="hidden";
					me._marker_title_30.ggVisible=false;
				}
			}
		}
		this._marker_title_30.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_30.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_30.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_30.style[domTransition]='left none, top none';
				if (me._marker_title_30.ggCurrentLogicStatePosition == 0) {
					me._marker_title_30.style.left='-813px';
					me._marker_title_30.style.top='-260px';
				}
				else {
					me._marker_title_30.style.left='-55px';
					me._marker_title_30.style.top='19px';
				}
			}
		}
		this._marker_title_30.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_30.ggNodeChange=function () {
			me._marker_title_30.ggUpdateConditionNodeChange();
		}
		this._marker_30.appendChild(this._marker_title_30);
		this._image_6.appendChild(this._marker_30);
		this._marker_31=document.createElement('div');
		this._marker_31.ggMarkerNodeId='{node36}';
		nodeMarker.push(this._marker_31);
		this._marker_31.ggId="Marker 31";
		this._marker_31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_31.ggVisible=true;
		this._marker_31.className='ggskin ggskin_mark ';
		this._marker_31.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 602px;';
		hs+='position : absolute;';
		hs+='top : 71px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_31.setAttribute('style',hs);
		this._marker_31.style[domTransform + 'Origin']='50% 50%';
		me._marker_31.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_31.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_31.onclick=function (e) {
			me.player.openNext("{node36}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_31.onmouseover=function (e) {
			me.elementMouseOver['marker_31']=true;
		}
		this._marker_31.onmouseout=function (e) {
			me.elementMouseOver['marker_31']=false;
		}
		this._marker_31.ontouchend=function (e) {
			me.elementMouseOver['marker_31']=false;
		}
		this._marker_31.ggUpdateConditionNodeChange=function () {
				me._marker_31__normal.ggNodeChangeMain();
				me._marker_31__active.ggNodeChangeMain();
		}
		this._marker_31.ggUpdatePosition=function (useTransition) {
		}
		this._marker_31.ggNodeChange=function () {
			me._marker_31.ggUpdateConditionNodeChange();
		}
		this._marker_title_31=document.createElement('div');
		this._marker_title_31__text=document.createElement('div');
		this._marker_title_31.className='ggskin ggskin_textdiv';
		this._marker_title_31.ggTextDiv=this._marker_title_31__text;
		this._marker_title_31.ggId="marker_title_31";
		this._marker_title_31.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_31.ggVisible=false;
		this._marker_title_31.className='ggskin ggskin_text ';
		this._marker_title_31.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_31.setAttribute('style',hs);
		this._marker_title_31.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_31__text.setAttribute('style',hs);
		this._marker_title_31__text.innerHTML="Futterlager";
		this._marker_title_31.appendChild(this._marker_title_31__text);
		me._marker_title_31.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_31.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_31.onmouseover=function (e) {
			me.elementMouseOver['marker_title_31']=true;
		}
		this._marker_title_31.onmouseout=function (e) {
			me.elementMouseOver['marker_title_31']=false;
		}
		this._marker_title_31.ontouchend=function (e) {
			me.elementMouseOver['marker_title_31']=false;
		}
		me._marker_title_31.ggCurrentLogicStatePosition = -1;
		me._marker_title_31.ggCurrentLogicStateVisible = -1;
		this._marker_title_31.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_31'] == true) || 
				(me.elementMouseOver['marker_title_31'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_31.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_31.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_31.style[domTransition]='left none, top none';
				if (me._marker_title_31.ggCurrentLogicStateVisible == 0) {
					me._marker_title_31.style.visibility=(Number(me._marker_title_31.style.opacity)>0||!me._marker_title_31.style.opacity)?'inherit':'hidden';
					me._marker_title_31.ggVisible=true;
				}
				else {
					me._marker_title_31.style.visibility="hidden";
					me._marker_title_31.ggVisible=false;
				}
			}
		}
		this._marker_title_31.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_31.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_31.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_31.style[domTransition]='left none, top none';
				if (me._marker_title_31.ggCurrentLogicStatePosition == 0) {
					me._marker_title_31.style.left='-911px';
					me._marker_title_31.style.top='-215px';
				}
				else {
					me._marker_title_31.style.left='-55px';
					me._marker_title_31.style.top='19px';
				}
			}
		}
		this._marker_title_31.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_31.ggNodeChange=function () {
			me._marker_title_31.ggUpdateConditionNodeChange();
		}
		this._marker_31.appendChild(this._marker_title_31);
		this._image_6.appendChild(this._marker_31);
		this._marker_32=document.createElement('div');
		this._marker_32.ggMarkerNodeId='{node37}';
		nodeMarker.push(this._marker_32);
		this._marker_32.ggId="Marker 32";
		this._marker_32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_32.ggVisible=true;
		this._marker_32.className='ggskin ggskin_mark ';
		this._marker_32.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 701px;';
		hs+='position : absolute;';
		hs+='top : 100px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_32.setAttribute('style',hs);
		this._marker_32.style[domTransform + 'Origin']='50% 50%';
		me._marker_32.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_32.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_32.onclick=function (e) {
			me.player.openNext("{node37}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_32.onmouseover=function (e) {
			me.elementMouseOver['marker_32']=true;
		}
		this._marker_32.onmouseout=function (e) {
			me.elementMouseOver['marker_32']=false;
		}
		this._marker_32.ontouchend=function (e) {
			me.elementMouseOver['marker_32']=false;
		}
		this._marker_32.ggUpdateConditionNodeChange=function () {
				me._marker_32__normal.ggNodeChangeMain();
				me._marker_32__active.ggNodeChangeMain();
		}
		this._marker_32.ggUpdatePosition=function (useTransition) {
		}
		this._marker_32.ggNodeChange=function () {
			me._marker_32.ggUpdateConditionNodeChange();
		}
		this._marker_title_32=document.createElement('div');
		this._marker_title_32__text=document.createElement('div');
		this._marker_title_32.className='ggskin ggskin_textdiv';
		this._marker_title_32.ggTextDiv=this._marker_title_32__text;
		this._marker_title_32.ggId="marker_title_32";
		this._marker_title_32.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_32.ggVisible=false;
		this._marker_title_32.className='ggskin ggskin_text ';
		this._marker_title_32.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_32.setAttribute('style',hs);
		this._marker_title_32.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_32__text.setAttribute('style',hs);
		this._marker_title_32__text.innerHTML="Fahrsilos";
		this._marker_title_32.appendChild(this._marker_title_32__text);
		me._marker_title_32.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_32.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_32.onmouseover=function (e) {
			me.elementMouseOver['marker_title_32']=true;
		}
		this._marker_title_32.onmouseout=function (e) {
			me.elementMouseOver['marker_title_32']=false;
		}
		this._marker_title_32.ontouchend=function (e) {
			me.elementMouseOver['marker_title_32']=false;
		}
		me._marker_title_32.ggCurrentLogicStatePosition = -1;
		me._marker_title_32.ggCurrentLogicStateVisible = -1;
		this._marker_title_32.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_32'] == true) || 
				(me.elementMouseOver['marker_title_32'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_32.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_32.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_32.style[domTransition]='left none, top none';
				if (me._marker_title_32.ggCurrentLogicStateVisible == 0) {
					me._marker_title_32.style.visibility=(Number(me._marker_title_32.style.opacity)>0||!me._marker_title_32.style.opacity)?'inherit':'hidden';
					me._marker_title_32.ggVisible=true;
				}
				else {
					me._marker_title_32.style.visibility="hidden";
					me._marker_title_32.ggVisible=false;
				}
			}
		}
		this._marker_title_32.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_32.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_32.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_32.style[domTransition]='left none, top none';
				if (me._marker_title_32.ggCurrentLogicStatePosition == 0) {
					me._marker_title_32.style.left='-1010px';
					me._marker_title_32.style.top='-244px';
				}
				else {
					me._marker_title_32.style.left='-55px';
					me._marker_title_32.style.top='19px';
				}
			}
		}
		this._marker_title_32.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_32.ggNodeChange=function () {
			me._marker_title_32.ggUpdateConditionNodeChange();
		}
		this._marker_32.appendChild(this._marker_title_32);
		this._image_6.appendChild(this._marker_32);
		this._marker_33=document.createElement('div');
		this._marker_33.ggMarkerNodeId='{node2}';
		nodeMarker.push(this._marker_33);
		this._marker_33.ggId="Marker 33";
		this._marker_33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_33.ggVisible=true;
		this._marker_33.className='ggskin ggskin_mark ';
		this._marker_33.ggType='mark';
		hs ='';
		hs+='height : 5px;';
		hs+='left : 927px;';
		hs+='position : absolute;';
		hs+='top : 119px;';
		hs+='visibility : inherit;';
		hs+='width : 5px;';
		hs+='pointer-events:auto;';
		this._marker_33.setAttribute('style',hs);
		this._marker_33.style[domTransform + 'Origin']='50% 50%';
		me._marker_33.ggIsActive=function() {
			return this.ggIsMarkerActive==true;
		}
		me._marker_33.ggElementNodeId=function() {
			var hs=String(this.ggMarkerNodeId);
			if (hs.charAt(0)=='{') {
				return hs.substr(1, hs.length - 2);
			}
			return '';
		}
		this._marker_33.onclick=function (e) {
			me.player.openNext("{node2}","");
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this._marker_33.onmouseover=function (e) {
			me.elementMouseOver['marker_33']=true;
		}
		this._marker_33.onmouseout=function (e) {
			me.elementMouseOver['marker_33']=false;
		}
		this._marker_33.ontouchend=function (e) {
			me.elementMouseOver['marker_33']=false;
		}
		this._marker_33.ggUpdateConditionNodeChange=function () {
				me._marker_33__normal.ggNodeChangeMain();
				me._marker_33__active.ggNodeChangeMain();
		}
		this._marker_33.ggUpdatePosition=function (useTransition) {
		}
		this._marker_33.ggNodeChange=function () {
			me._marker_33.ggUpdateConditionNodeChange();
		}
		this._marker_title_33=document.createElement('div');
		this._marker_title_33__text=document.createElement('div');
		this._marker_title_33.className='ggskin ggskin_textdiv';
		this._marker_title_33.ggTextDiv=this._marker_title_33__text;
		this._marker_title_33.ggId="marker_title_33";
		this._marker_title_33.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._marker_title_33.ggVisible=false;
		this._marker_title_33.className='ggskin ggskin_text ';
		this._marker_title_33.ggType='text';
		hs ='';
		hs+='z-index: 100;';
		hs+='height : 23px;';
		hs+='left : -55px;';
		hs+='position : absolute;';
		hs+='top : 19px;';
		hs+='visibility : hidden;';
		hs+='width : 124px;';
		hs+='pointer-events:auto;';
		hs+='text-shadow: 1px 1px 4px #000000;';
		this._marker_title_33.setAttribute('style',hs);
		this._marker_title_33.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='cursor: default;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: auto;';
		hs+='height: auto;';
		hs+='border: 0px solid #000000;';
		hs+='color: rgba(0,0,0,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 2px 5px 2px 5px;';
		hs+='overflow: hidden;';
		this._marker_title_33__text.setAttribute('style',hs);
		this._marker_title_33__text.innerHTML="Parkplatz";
		this._marker_title_33.appendChild(this._marker_title_33__text);
		me._marker_title_33.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._marker_title_33.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._marker_title_33.onmouseover=function (e) {
			me.elementMouseOver['marker_title_33']=true;
		}
		this._marker_title_33.onmouseout=function (e) {
			me.elementMouseOver['marker_title_33']=false;
		}
		this._marker_title_33.ontouchend=function (e) {
			me.elementMouseOver['marker_title_33']=false;
		}
		me._marker_title_33.ggCurrentLogicStatePosition = -1;
		me._marker_title_33.ggCurrentLogicStateVisible = -1;
		this._marker_title_33.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(me.elementMouseOver['marker_33'] == true) || 
				(me.elementMouseOver['marker_title_33'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._marker_title_33.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._marker_title_33.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._marker_title_33.style[domTransition]='left none, top none';
				if (me._marker_title_33.ggCurrentLogicStateVisible == 0) {
					me._marker_title_33.style.visibility=(Number(me._marker_title_33.style.opacity)>0||!me._marker_title_33.style.opacity)?'inherit':'hidden';
					me._marker_title_33.ggVisible=true;
				}
				else {
					me._marker_title_33.style.visibility="hidden";
					me._marker_title_33.ggVisible=false;
				}
			}
		}
		this._marker_title_33.ggUpdateConditionNodeChange=function () {
			var newLogicStatePosition;
			if (
				(me.player.getIsMobile() == true)
			)
			{
				newLogicStatePosition = 0;
			}
			else {
				newLogicStatePosition = -1;
			}
			if (me._marker_title_33.ggCurrentLogicStatePosition != newLogicStatePosition) {
				me._marker_title_33.ggCurrentLogicStatePosition = newLogicStatePosition;
				me._marker_title_33.style[domTransition]='left none, top none';
				if (me._marker_title_33.ggCurrentLogicStatePosition == 0) {
					me._marker_title_33.style.left='-1236px';
					me._marker_title_33.style.top='-263px';
				}
				else {
					me._marker_title_33.style.left='-55px';
					me._marker_title_33.style.top='19px';
				}
			}
		}
		this._marker_title_33.ggUpdatePosition=function (useTransition) {
			this.style[domTransition]='none';
			this.ggTextDiv.style.left=((124-this.ggTextDiv.offsetWidth)/2) + 'px';
		}
		this._marker_title_33.ggNodeChange=function () {
			me._marker_title_33.ggUpdateConditionNodeChange();
		}
		this._marker_33.appendChild(this._marker_title_33);
		this._image_6.appendChild(this._marker_33);
		this.divSkin.appendChild(this._image_6);
		this._marker_1__normal=new SkinElement_image_7_Class(this,this._marker_1);
		this._marker_1__normal.style.visibility='inherit';
		this._marker_1__normal.style.left='0px';
		this._marker_1__normal.style.top='0px';
		this._marker_1.ggMarkerNormal=this._marker_1__normal;
		this._marker_1__active=new SkinElement_image_8_Class(this,this._marker_1);
		this._marker_1__active.style.visibility='hidden';
		this._marker_1__active.style.left='0px';
		this._marker_1__active.style.top='0px';
		this._marker_1.ggMarkerActive=this._marker_1__active;
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__active,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__active);
		}
		if (this._marker_1.firstChild) {
			this._marker_1.insertBefore(this._marker_1__normal,this._marker_1.firstChild);
		} else {
			this._marker_1.appendChild(this._marker_1__normal);
		}
		this._marker_2__normal=new SkinElement_image_7_Class(this,this._marker_2);
		this._marker_2__normal.style.visibility='inherit';
		this._marker_2__normal.style.left='0px';
		this._marker_2__normal.style.top='0px';
		this._marker_2.ggMarkerNormal=this._marker_2__normal;
		this._marker_2__active=new SkinElement_image_8_Class(this,this._marker_2);
		this._marker_2__active.style.visibility='hidden';
		this._marker_2__active.style.left='0px';
		this._marker_2__active.style.top='0px';
		this._marker_2.ggMarkerActive=this._marker_2__active;
		if (this._marker_2.firstChild) {
			this._marker_2.insertBefore(this._marker_2__active,this._marker_2.firstChild);
		} else {
			this._marker_2.appendChild(this._marker_2__active);
		}
		if (this._marker_2.firstChild) {
			this._marker_2.insertBefore(this._marker_2__normal,this._marker_2.firstChild);
		} else {
			this._marker_2.appendChild(this._marker_2__normal);
		}
		this._marker_3__normal=new SkinElement_image_7_Class(this,this._marker_3);
		this._marker_3__normal.style.visibility='inherit';
		this._marker_3__normal.style.left='0px';
		this._marker_3__normal.style.top='0px';
		this._marker_3.ggMarkerNormal=this._marker_3__normal;
		this._marker_3__active=new SkinElement_image_8_Class(this,this._marker_3);
		this._marker_3__active.style.visibility='hidden';
		this._marker_3__active.style.left='0px';
		this._marker_3__active.style.top='0px';
		this._marker_3.ggMarkerActive=this._marker_3__active;
		if (this._marker_3.firstChild) {
			this._marker_3.insertBefore(this._marker_3__active,this._marker_3.firstChild);
		} else {
			this._marker_3.appendChild(this._marker_3__active);
		}
		if (this._marker_3.firstChild) {
			this._marker_3.insertBefore(this._marker_3__normal,this._marker_3.firstChild);
		} else {
			this._marker_3.appendChild(this._marker_3__normal);
		}
		this._marker_4__normal=new SkinElement_image_7_Class(this,this._marker_4);
		this._marker_4__normal.style.visibility='inherit';
		this._marker_4__normal.style.left='0px';
		this._marker_4__normal.style.top='0px';
		this._marker_4.ggMarkerNormal=this._marker_4__normal;
		this._marker_4__active=new SkinElement_image_8_Class(this,this._marker_4);
		this._marker_4__active.style.visibility='hidden';
		this._marker_4__active.style.left='0px';
		this._marker_4__active.style.top='0px';
		this._marker_4.ggMarkerActive=this._marker_4__active;
		if (this._marker_4.firstChild) {
			this._marker_4.insertBefore(this._marker_4__active,this._marker_4.firstChild);
		} else {
			this._marker_4.appendChild(this._marker_4__active);
		}
		if (this._marker_4.firstChild) {
			this._marker_4.insertBefore(this._marker_4__normal,this._marker_4.firstChild);
		} else {
			this._marker_4.appendChild(this._marker_4__normal);
		}
		this._marker_5__normal=new SkinElement_image_7_Class(this,this._marker_5);
		this._marker_5__normal.style.visibility='inherit';
		this._marker_5__normal.style.left='0px';
		this._marker_5__normal.style.top='0px';
		this._marker_5.ggMarkerNormal=this._marker_5__normal;
		this._marker_5__active=new SkinElement_image_8_Class(this,this._marker_5);
		this._marker_5__active.style.visibility='hidden';
		this._marker_5__active.style.left='0px';
		this._marker_5__active.style.top='0px';
		this._marker_5.ggMarkerActive=this._marker_5__active;
		if (this._marker_5.firstChild) {
			this._marker_5.insertBefore(this._marker_5__active,this._marker_5.firstChild);
		} else {
			this._marker_5.appendChild(this._marker_5__active);
		}
		if (this._marker_5.firstChild) {
			this._marker_5.insertBefore(this._marker_5__normal,this._marker_5.firstChild);
		} else {
			this._marker_5.appendChild(this._marker_5__normal);
		}
		this._marker_6__normal=new SkinElement_image_7_Class(this,this._marker_6);
		this._marker_6__normal.style.visibility='inherit';
		this._marker_6__normal.style.left='0px';
		this._marker_6__normal.style.top='0px';
		this._marker_6.ggMarkerNormal=this._marker_6__normal;
		this._marker_6__active=new SkinElement_image_8_Class(this,this._marker_6);
		this._marker_6__active.style.visibility='hidden';
		this._marker_6__active.style.left='0px';
		this._marker_6__active.style.top='0px';
		this._marker_6.ggMarkerActive=this._marker_6__active;
		if (this._marker_6.firstChild) {
			this._marker_6.insertBefore(this._marker_6__active,this._marker_6.firstChild);
		} else {
			this._marker_6.appendChild(this._marker_6__active);
		}
		if (this._marker_6.firstChild) {
			this._marker_6.insertBefore(this._marker_6__normal,this._marker_6.firstChild);
		} else {
			this._marker_6.appendChild(this._marker_6__normal);
		}
		this._marker_7__normal=new SkinElement_image_7_Class(this,this._marker_7);
		this._marker_7__normal.style.visibility='inherit';
		this._marker_7__normal.style.left='0px';
		this._marker_7__normal.style.top='0px';
		this._marker_7.ggMarkerNormal=this._marker_7__normal;
		this._marker_7__active=new SkinElement_image_8_Class(this,this._marker_7);
		this._marker_7__active.style.visibility='hidden';
		this._marker_7__active.style.left='0px';
		this._marker_7__active.style.top='0px';
		this._marker_7.ggMarkerActive=this._marker_7__active;
		if (this._marker_7.firstChild) {
			this._marker_7.insertBefore(this._marker_7__active,this._marker_7.firstChild);
		} else {
			this._marker_7.appendChild(this._marker_7__active);
		}
		if (this._marker_7.firstChild) {
			this._marker_7.insertBefore(this._marker_7__normal,this._marker_7.firstChild);
		} else {
			this._marker_7.appendChild(this._marker_7__normal);
		}
		this._marker_8__normal=new SkinElement_image_7_Class(this,this._marker_8);
		this._marker_8__normal.style.visibility='inherit';
		this._marker_8__normal.style.left='0px';
		this._marker_8__normal.style.top='0px';
		this._marker_8.ggMarkerNormal=this._marker_8__normal;
		this._marker_8__active=new SkinElement_image_8_Class(this,this._marker_8);
		this._marker_8__active.style.visibility='hidden';
		this._marker_8__active.style.left='0px';
		this._marker_8__active.style.top='0px';
		this._marker_8.ggMarkerActive=this._marker_8__active;
		if (this._marker_8.firstChild) {
			this._marker_8.insertBefore(this._marker_8__active,this._marker_8.firstChild);
		} else {
			this._marker_8.appendChild(this._marker_8__active);
		}
		if (this._marker_8.firstChild) {
			this._marker_8.insertBefore(this._marker_8__normal,this._marker_8.firstChild);
		} else {
			this._marker_8.appendChild(this._marker_8__normal);
		}
		this._marker_9__normal=new SkinElement_image_7_Class(this,this._marker_9);
		this._marker_9__normal.style.visibility='inherit';
		this._marker_9__normal.style.left='0px';
		this._marker_9__normal.style.top='0px';
		this._marker_9.ggMarkerNormal=this._marker_9__normal;
		this._marker_9__active=new SkinElement_image_8_Class(this,this._marker_9);
		this._marker_9__active.style.visibility='hidden';
		this._marker_9__active.style.left='0px';
		this._marker_9__active.style.top='0px';
		this._marker_9.ggMarkerActive=this._marker_9__active;
		if (this._marker_9.firstChild) {
			this._marker_9.insertBefore(this._marker_9__active,this._marker_9.firstChild);
		} else {
			this._marker_9.appendChild(this._marker_9__active);
		}
		if (this._marker_9.firstChild) {
			this._marker_9.insertBefore(this._marker_9__normal,this._marker_9.firstChild);
		} else {
			this._marker_9.appendChild(this._marker_9__normal);
		}
		this._marker_10__normal=new SkinElement_image_7_Class(this,this._marker_10);
		this._marker_10__normal.style.visibility='inherit';
		this._marker_10__normal.style.left='0px';
		this._marker_10__normal.style.top='0px';
		this._marker_10.ggMarkerNormal=this._marker_10__normal;
		this._marker_10__active=new SkinElement_image_8_Class(this,this._marker_10);
		this._marker_10__active.style.visibility='hidden';
		this._marker_10__active.style.left='0px';
		this._marker_10__active.style.top='0px';
		this._marker_10.ggMarkerActive=this._marker_10__active;
		if (this._marker_10.firstChild) {
			this._marker_10.insertBefore(this._marker_10__active,this._marker_10.firstChild);
		} else {
			this._marker_10.appendChild(this._marker_10__active);
		}
		if (this._marker_10.firstChild) {
			this._marker_10.insertBefore(this._marker_10__normal,this._marker_10.firstChild);
		} else {
			this._marker_10.appendChild(this._marker_10__normal);
		}
		this._marker_11__normal=new SkinElement_image_7_Class(this,this._marker_11);
		this._marker_11__normal.style.visibility='inherit';
		this._marker_11__normal.style.left='0px';
		this._marker_11__normal.style.top='0px';
		this._marker_11.ggMarkerNormal=this._marker_11__normal;
		this._marker_11__active=new SkinElement_image_8_Class(this,this._marker_11);
		this._marker_11__active.style.visibility='hidden';
		this._marker_11__active.style.left='0px';
		this._marker_11__active.style.top='0px';
		this._marker_11.ggMarkerActive=this._marker_11__active;
		if (this._marker_11.firstChild) {
			this._marker_11.insertBefore(this._marker_11__active,this._marker_11.firstChild);
		} else {
			this._marker_11.appendChild(this._marker_11__active);
		}
		if (this._marker_11.firstChild) {
			this._marker_11.insertBefore(this._marker_11__normal,this._marker_11.firstChild);
		} else {
			this._marker_11.appendChild(this._marker_11__normal);
		}
		this._marker_12__normal=new SkinElement_image_7_Class(this,this._marker_12);
		this._marker_12__normal.style.visibility='inherit';
		this._marker_12__normal.style.left='0px';
		this._marker_12__normal.style.top='0px';
		this._marker_12.ggMarkerNormal=this._marker_12__normal;
		this._marker_12__active=new SkinElement_image_8_Class(this,this._marker_12);
		this._marker_12__active.style.visibility='hidden';
		this._marker_12__active.style.left='0px';
		this._marker_12__active.style.top='0px';
		this._marker_12.ggMarkerActive=this._marker_12__active;
		if (this._marker_12.firstChild) {
			this._marker_12.insertBefore(this._marker_12__active,this._marker_12.firstChild);
		} else {
			this._marker_12.appendChild(this._marker_12__active);
		}
		if (this._marker_12.firstChild) {
			this._marker_12.insertBefore(this._marker_12__normal,this._marker_12.firstChild);
		} else {
			this._marker_12.appendChild(this._marker_12__normal);
		}
		this._marker_13__normal=new SkinElement_image_7_Class(this,this._marker_13);
		this._marker_13__normal.style.visibility='inherit';
		this._marker_13__normal.style.left='0px';
		this._marker_13__normal.style.top='0px';
		this._marker_13.ggMarkerNormal=this._marker_13__normal;
		this._marker_13__active=new SkinElement_image_8_Class(this,this._marker_13);
		this._marker_13__active.style.visibility='hidden';
		this._marker_13__active.style.left='0px';
		this._marker_13__active.style.top='0px';
		this._marker_13.ggMarkerActive=this._marker_13__active;
		if (this._marker_13.firstChild) {
			this._marker_13.insertBefore(this._marker_13__active,this._marker_13.firstChild);
		} else {
			this._marker_13.appendChild(this._marker_13__active);
		}
		if (this._marker_13.firstChild) {
			this._marker_13.insertBefore(this._marker_13__normal,this._marker_13.firstChild);
		} else {
			this._marker_13.appendChild(this._marker_13__normal);
		}
		this._marker_14__normal=new SkinElement_image_7_Class(this,this._marker_14);
		this._marker_14__normal.style.visibility='inherit';
		this._marker_14__normal.style.left='0px';
		this._marker_14__normal.style.top='0px';
		this._marker_14.ggMarkerNormal=this._marker_14__normal;
		this._marker_14__active=new SkinElement_image_8_Class(this,this._marker_14);
		this._marker_14__active.style.visibility='hidden';
		this._marker_14__active.style.left='0px';
		this._marker_14__active.style.top='0px';
		this._marker_14.ggMarkerActive=this._marker_14__active;
		if (this._marker_14.firstChild) {
			this._marker_14.insertBefore(this._marker_14__active,this._marker_14.firstChild);
		} else {
			this._marker_14.appendChild(this._marker_14__active);
		}
		if (this._marker_14.firstChild) {
			this._marker_14.insertBefore(this._marker_14__normal,this._marker_14.firstChild);
		} else {
			this._marker_14.appendChild(this._marker_14__normal);
		}
		this._marker_15__normal=new SkinElement_image_7_Class(this,this._marker_15);
		this._marker_15__normal.style.visibility='inherit';
		this._marker_15__normal.style.left='0px';
		this._marker_15__normal.style.top='0px';
		this._marker_15.ggMarkerNormal=this._marker_15__normal;
		this._marker_15__active=new SkinElement_image_8_Class(this,this._marker_15);
		this._marker_15__active.style.visibility='hidden';
		this._marker_15__active.style.left='0px';
		this._marker_15__active.style.top='0px';
		this._marker_15.ggMarkerActive=this._marker_15__active;
		if (this._marker_15.firstChild) {
			this._marker_15.insertBefore(this._marker_15__active,this._marker_15.firstChild);
		} else {
			this._marker_15.appendChild(this._marker_15__active);
		}
		if (this._marker_15.firstChild) {
			this._marker_15.insertBefore(this._marker_15__normal,this._marker_15.firstChild);
		} else {
			this._marker_15.appendChild(this._marker_15__normal);
		}
		this._marker_16__normal=new SkinElement_image_7_Class(this,this._marker_16);
		this._marker_16__normal.style.visibility='inherit';
		this._marker_16__normal.style.left='0px';
		this._marker_16__normal.style.top='0px';
		this._marker_16.ggMarkerNormal=this._marker_16__normal;
		this._marker_16__active=new SkinElement_image_8_Class(this,this._marker_16);
		this._marker_16__active.style.visibility='hidden';
		this._marker_16__active.style.left='0px';
		this._marker_16__active.style.top='0px';
		this._marker_16.ggMarkerActive=this._marker_16__active;
		if (this._marker_16.firstChild) {
			this._marker_16.insertBefore(this._marker_16__active,this._marker_16.firstChild);
		} else {
			this._marker_16.appendChild(this._marker_16__active);
		}
		if (this._marker_16.firstChild) {
			this._marker_16.insertBefore(this._marker_16__normal,this._marker_16.firstChild);
		} else {
			this._marker_16.appendChild(this._marker_16__normal);
		}
		this._marker_17__normal=new SkinElement_image_7_Class(this,this._marker_17);
		this._marker_17__normal.style.visibility='inherit';
		this._marker_17__normal.style.left='0px';
		this._marker_17__normal.style.top='0px';
		this._marker_17.ggMarkerNormal=this._marker_17__normal;
		this._marker_17__active=new SkinElement_image_8_Class(this,this._marker_17);
		this._marker_17__active.style.visibility='hidden';
		this._marker_17__active.style.left='0px';
		this._marker_17__active.style.top='0px';
		this._marker_17.ggMarkerActive=this._marker_17__active;
		if (this._marker_17.firstChild) {
			this._marker_17.insertBefore(this._marker_17__active,this._marker_17.firstChild);
		} else {
			this._marker_17.appendChild(this._marker_17__active);
		}
		if (this._marker_17.firstChild) {
			this._marker_17.insertBefore(this._marker_17__normal,this._marker_17.firstChild);
		} else {
			this._marker_17.appendChild(this._marker_17__normal);
		}
		this._marker_18__normal=new SkinElement_image_7_Class(this,this._marker_18);
		this._marker_18__normal.style.visibility='inherit';
		this._marker_18__normal.style.left='0px';
		this._marker_18__normal.style.top='0px';
		this._marker_18.ggMarkerNormal=this._marker_18__normal;
		this._marker_18__active=new SkinElement_image_8_Class(this,this._marker_18);
		this._marker_18__active.style.visibility='hidden';
		this._marker_18__active.style.left='0px';
		this._marker_18__active.style.top='0px';
		this._marker_18.ggMarkerActive=this._marker_18__active;
		if (this._marker_18.firstChild) {
			this._marker_18.insertBefore(this._marker_18__active,this._marker_18.firstChild);
		} else {
			this._marker_18.appendChild(this._marker_18__active);
		}
		if (this._marker_18.firstChild) {
			this._marker_18.insertBefore(this._marker_18__normal,this._marker_18.firstChild);
		} else {
			this._marker_18.appendChild(this._marker_18__normal);
		}
		this._marker_19__normal=new SkinElement_image_7_Class(this,this._marker_19);
		this._marker_19__normal.style.visibility='inherit';
		this._marker_19__normal.style.left='0px';
		this._marker_19__normal.style.top='0px';
		this._marker_19.ggMarkerNormal=this._marker_19__normal;
		this._marker_19__active=new SkinElement_image_8_Class(this,this._marker_19);
		this._marker_19__active.style.visibility='hidden';
		this._marker_19__active.style.left='0px';
		this._marker_19__active.style.top='0px';
		this._marker_19.ggMarkerActive=this._marker_19__active;
		if (this._marker_19.firstChild) {
			this._marker_19.insertBefore(this._marker_19__active,this._marker_19.firstChild);
		} else {
			this._marker_19.appendChild(this._marker_19__active);
		}
		if (this._marker_19.firstChild) {
			this._marker_19.insertBefore(this._marker_19__normal,this._marker_19.firstChild);
		} else {
			this._marker_19.appendChild(this._marker_19__normal);
		}
		this._marker_20__normal=new SkinElement_image_7_Class(this,this._marker_20);
		this._marker_20__normal.style.visibility='inherit';
		this._marker_20__normal.style.left='0px';
		this._marker_20__normal.style.top='0px';
		this._marker_20.ggMarkerNormal=this._marker_20__normal;
		this._marker_20__active=new SkinElement_image_8_Class(this,this._marker_20);
		this._marker_20__active.style.visibility='hidden';
		this._marker_20__active.style.left='0px';
		this._marker_20__active.style.top='0px';
		this._marker_20.ggMarkerActive=this._marker_20__active;
		if (this._marker_20.firstChild) {
			this._marker_20.insertBefore(this._marker_20__active,this._marker_20.firstChild);
		} else {
			this._marker_20.appendChild(this._marker_20__active);
		}
		if (this._marker_20.firstChild) {
			this._marker_20.insertBefore(this._marker_20__normal,this._marker_20.firstChild);
		} else {
			this._marker_20.appendChild(this._marker_20__normal);
		}
		this._marker_21__normal=new SkinElement_image_7_Class(this,this._marker_21);
		this._marker_21__normal.style.visibility='inherit';
		this._marker_21__normal.style.left='0px';
		this._marker_21__normal.style.top='0px';
		this._marker_21.ggMarkerNormal=this._marker_21__normal;
		this._marker_21__active=new SkinElement_image_8_Class(this,this._marker_21);
		this._marker_21__active.style.visibility='hidden';
		this._marker_21__active.style.left='0px';
		this._marker_21__active.style.top='0px';
		this._marker_21.ggMarkerActive=this._marker_21__active;
		if (this._marker_21.firstChild) {
			this._marker_21.insertBefore(this._marker_21__active,this._marker_21.firstChild);
		} else {
			this._marker_21.appendChild(this._marker_21__active);
		}
		if (this._marker_21.firstChild) {
			this._marker_21.insertBefore(this._marker_21__normal,this._marker_21.firstChild);
		} else {
			this._marker_21.appendChild(this._marker_21__normal);
		}
		this._marker_22__normal=new SkinElement_image_7_Class(this,this._marker_22);
		this._marker_22__normal.style.visibility='inherit';
		this._marker_22__normal.style.left='0px';
		this._marker_22__normal.style.top='0px';
		this._marker_22.ggMarkerNormal=this._marker_22__normal;
		this._marker_22__active=new SkinElement_image_8_Class(this,this._marker_22);
		this._marker_22__active.style.visibility='hidden';
		this._marker_22__active.style.left='0px';
		this._marker_22__active.style.top='0px';
		this._marker_22.ggMarkerActive=this._marker_22__active;
		if (this._marker_22.firstChild) {
			this._marker_22.insertBefore(this._marker_22__active,this._marker_22.firstChild);
		} else {
			this._marker_22.appendChild(this._marker_22__active);
		}
		if (this._marker_22.firstChild) {
			this._marker_22.insertBefore(this._marker_22__normal,this._marker_22.firstChild);
		} else {
			this._marker_22.appendChild(this._marker_22__normal);
		}
		this._marker_23__normal=new SkinElement_image_7_Class(this,this._marker_23);
		this._marker_23__normal.style.visibility='inherit';
		this._marker_23__normal.style.left='0px';
		this._marker_23__normal.style.top='0px';
		this._marker_23.ggMarkerNormal=this._marker_23__normal;
		this._marker_23__active=new SkinElement_image_8_Class(this,this._marker_23);
		this._marker_23__active.style.visibility='hidden';
		this._marker_23__active.style.left='0px';
		this._marker_23__active.style.top='0px';
		this._marker_23.ggMarkerActive=this._marker_23__active;
		if (this._marker_23.firstChild) {
			this._marker_23.insertBefore(this._marker_23__active,this._marker_23.firstChild);
		} else {
			this._marker_23.appendChild(this._marker_23__active);
		}
		if (this._marker_23.firstChild) {
			this._marker_23.insertBefore(this._marker_23__normal,this._marker_23.firstChild);
		} else {
			this._marker_23.appendChild(this._marker_23__normal);
		}
		this._marker_24__normal=new SkinElement_image_7_Class(this,this._marker_24);
		this._marker_24__normal.style.visibility='inherit';
		this._marker_24__normal.style.left='0px';
		this._marker_24__normal.style.top='0px';
		this._marker_24.ggMarkerNormal=this._marker_24__normal;
		this._marker_24__active=new SkinElement_image_8_Class(this,this._marker_24);
		this._marker_24__active.style.visibility='hidden';
		this._marker_24__active.style.left='0px';
		this._marker_24__active.style.top='0px';
		this._marker_24.ggMarkerActive=this._marker_24__active;
		if (this._marker_24.firstChild) {
			this._marker_24.insertBefore(this._marker_24__active,this._marker_24.firstChild);
		} else {
			this._marker_24.appendChild(this._marker_24__active);
		}
		if (this._marker_24.firstChild) {
			this._marker_24.insertBefore(this._marker_24__normal,this._marker_24.firstChild);
		} else {
			this._marker_24.appendChild(this._marker_24__normal);
		}
		this._marker_25__normal=new SkinElement_image_7_Class(this,this._marker_25);
		this._marker_25__normal.style.visibility='inherit';
		this._marker_25__normal.style.left='0px';
		this._marker_25__normal.style.top='0px';
		this._marker_25.ggMarkerNormal=this._marker_25__normal;
		this._marker_25__active=new SkinElement_image_8_Class(this,this._marker_25);
		this._marker_25__active.style.visibility='hidden';
		this._marker_25__active.style.left='0px';
		this._marker_25__active.style.top='0px';
		this._marker_25.ggMarkerActive=this._marker_25__active;
		if (this._marker_25.firstChild) {
			this._marker_25.insertBefore(this._marker_25__active,this._marker_25.firstChild);
		} else {
			this._marker_25.appendChild(this._marker_25__active);
		}
		if (this._marker_25.firstChild) {
			this._marker_25.insertBefore(this._marker_25__normal,this._marker_25.firstChild);
		} else {
			this._marker_25.appendChild(this._marker_25__normal);
		}
		this._marker_26__normal=new SkinElement_image_7_Class(this,this._marker_26);
		this._marker_26__normal.style.visibility='inherit';
		this._marker_26__normal.style.left='0px';
		this._marker_26__normal.style.top='0px';
		this._marker_26.ggMarkerNormal=this._marker_26__normal;
		this._marker_26__active=new SkinElement_image_8_Class(this,this._marker_26);
		this._marker_26__active.style.visibility='hidden';
		this._marker_26__active.style.left='0px';
		this._marker_26__active.style.top='0px';
		this._marker_26.ggMarkerActive=this._marker_26__active;
		if (this._marker_26.firstChild) {
			this._marker_26.insertBefore(this._marker_26__active,this._marker_26.firstChild);
		} else {
			this._marker_26.appendChild(this._marker_26__active);
		}
		if (this._marker_26.firstChild) {
			this._marker_26.insertBefore(this._marker_26__normal,this._marker_26.firstChild);
		} else {
			this._marker_26.appendChild(this._marker_26__normal);
		}
		this._marker_27__normal=new SkinElement_image_7_Class(this,this._marker_27);
		this._marker_27__normal.style.visibility='inherit';
		this._marker_27__normal.style.left='0px';
		this._marker_27__normal.style.top='0px';
		this._marker_27.ggMarkerNormal=this._marker_27__normal;
		this._marker_27__active=new SkinElement_image_8_Class(this,this._marker_27);
		this._marker_27__active.style.visibility='hidden';
		this._marker_27__active.style.left='0px';
		this._marker_27__active.style.top='0px';
		this._marker_27.ggMarkerActive=this._marker_27__active;
		if (this._marker_27.firstChild) {
			this._marker_27.insertBefore(this._marker_27__active,this._marker_27.firstChild);
		} else {
			this._marker_27.appendChild(this._marker_27__active);
		}
		if (this._marker_27.firstChild) {
			this._marker_27.insertBefore(this._marker_27__normal,this._marker_27.firstChild);
		} else {
			this._marker_27.appendChild(this._marker_27__normal);
		}
		this._marker_280__normal=new SkinElement_image_7_Class(this,this._marker_280);
		this._marker_280__normal.style.visibility='inherit';
		this._marker_280__normal.style.left='0px';
		this._marker_280__normal.style.top='0px';
		this._marker_280.ggMarkerNormal=this._marker_280__normal;
		this._marker_280__active=new SkinElement_image_8_Class(this,this._marker_280);
		this._marker_280__active.style.visibility='hidden';
		this._marker_280__active.style.left='0px';
		this._marker_280__active.style.top='0px';
		this._marker_280.ggMarkerActive=this._marker_280__active;
		if (this._marker_280.firstChild) {
			this._marker_280.insertBefore(this._marker_280__active,this._marker_280.firstChild);
		} else {
			this._marker_280.appendChild(this._marker_280__active);
		}
		if (this._marker_280.firstChild) {
			this._marker_280.insertBefore(this._marker_280__normal,this._marker_280.firstChild);
		} else {
			this._marker_280.appendChild(this._marker_280__normal);
		}
		this._marker_28__normal=new SkinElement_image_7_Class(this,this._marker_28);
		this._marker_28__normal.style.visibility='inherit';
		this._marker_28__normal.style.left='0px';
		this._marker_28__normal.style.top='0px';
		this._marker_28.ggMarkerNormal=this._marker_28__normal;
		this._marker_28__active=new SkinElement_image_8_Class(this,this._marker_28);
		this._marker_28__active.style.visibility='hidden';
		this._marker_28__active.style.left='0px';
		this._marker_28__active.style.top='0px';
		this._marker_28.ggMarkerActive=this._marker_28__active;
		if (this._marker_28.firstChild) {
			this._marker_28.insertBefore(this._marker_28__active,this._marker_28.firstChild);
		} else {
			this._marker_28.appendChild(this._marker_28__active);
		}
		if (this._marker_28.firstChild) {
			this._marker_28.insertBefore(this._marker_28__normal,this._marker_28.firstChild);
		} else {
			this._marker_28.appendChild(this._marker_28__normal);
		}
		this._marker_29__normal=new SkinElement_image_7_Class(this,this._marker_29);
		this._marker_29__normal.style.visibility='inherit';
		this._marker_29__normal.style.left='0px';
		this._marker_29__normal.style.top='0px';
		this._marker_29.ggMarkerNormal=this._marker_29__normal;
		this._marker_29__active=new SkinElement_image_8_Class(this,this._marker_29);
		this._marker_29__active.style.visibility='hidden';
		this._marker_29__active.style.left='0px';
		this._marker_29__active.style.top='0px';
		this._marker_29.ggMarkerActive=this._marker_29__active;
		if (this._marker_29.firstChild) {
			this._marker_29.insertBefore(this._marker_29__active,this._marker_29.firstChild);
		} else {
			this._marker_29.appendChild(this._marker_29__active);
		}
		if (this._marker_29.firstChild) {
			this._marker_29.insertBefore(this._marker_29__normal,this._marker_29.firstChild);
		} else {
			this._marker_29.appendChild(this._marker_29__normal);
		}
		this._marker_30__normal=new SkinElement_image_7_Class(this,this._marker_30);
		this._marker_30__normal.style.visibility='inherit';
		this._marker_30__normal.style.left='0px';
		this._marker_30__normal.style.top='0px';
		this._marker_30.ggMarkerNormal=this._marker_30__normal;
		this._marker_30__active=new SkinElement_image_8_Class(this,this._marker_30);
		this._marker_30__active.style.visibility='hidden';
		this._marker_30__active.style.left='0px';
		this._marker_30__active.style.top='0px';
		this._marker_30.ggMarkerActive=this._marker_30__active;
		if (this._marker_30.firstChild) {
			this._marker_30.insertBefore(this._marker_30__active,this._marker_30.firstChild);
		} else {
			this._marker_30.appendChild(this._marker_30__active);
		}
		if (this._marker_30.firstChild) {
			this._marker_30.insertBefore(this._marker_30__normal,this._marker_30.firstChild);
		} else {
			this._marker_30.appendChild(this._marker_30__normal);
		}
		this._marker_31__normal=new SkinElement_image_7_Class(this,this._marker_31);
		this._marker_31__normal.style.visibility='inherit';
		this._marker_31__normal.style.left='0px';
		this._marker_31__normal.style.top='0px';
		this._marker_31.ggMarkerNormal=this._marker_31__normal;
		this._marker_31__active=new SkinElement_image_8_Class(this,this._marker_31);
		this._marker_31__active.style.visibility='hidden';
		this._marker_31__active.style.left='0px';
		this._marker_31__active.style.top='0px';
		this._marker_31.ggMarkerActive=this._marker_31__active;
		if (this._marker_31.firstChild) {
			this._marker_31.insertBefore(this._marker_31__active,this._marker_31.firstChild);
		} else {
			this._marker_31.appendChild(this._marker_31__active);
		}
		if (this._marker_31.firstChild) {
			this._marker_31.insertBefore(this._marker_31__normal,this._marker_31.firstChild);
		} else {
			this._marker_31.appendChild(this._marker_31__normal);
		}
		this._marker_32__normal=new SkinElement_image_7_Class(this,this._marker_32);
		this._marker_32__normal.style.visibility='inherit';
		this._marker_32__normal.style.left='0px';
		this._marker_32__normal.style.top='0px';
		this._marker_32.ggMarkerNormal=this._marker_32__normal;
		this._marker_32__active=new SkinElement_image_8_Class(this,this._marker_32);
		this._marker_32__active.style.visibility='hidden';
		this._marker_32__active.style.left='0px';
		this._marker_32__active.style.top='0px';
		this._marker_32.ggMarkerActive=this._marker_32__active;
		if (this._marker_32.firstChild) {
			this._marker_32.insertBefore(this._marker_32__active,this._marker_32.firstChild);
		} else {
			this._marker_32.appendChild(this._marker_32__active);
		}
		if (this._marker_32.firstChild) {
			this._marker_32.insertBefore(this._marker_32__normal,this._marker_32.firstChild);
		} else {
			this._marker_32.appendChild(this._marker_32__normal);
		}
		this._marker_33__normal=new SkinElement_image_7_Class(this,this._marker_33);
		this._marker_33__normal.style.visibility='inherit';
		this._marker_33__normal.style.left='0px';
		this._marker_33__normal.style.top='0px';
		this._marker_33.ggMarkerNormal=this._marker_33__normal;
		this._marker_33__active=new SkinElement_image_8_Class(this,this._marker_33);
		this._marker_33__active.style.visibility='hidden';
		this._marker_33__active.style.left='0px';
		this._marker_33__active.style.top='0px';
		this._marker_33.ggMarkerActive=this._marker_33__active;
		if (this._marker_33.firstChild) {
			this._marker_33.insertBefore(this._marker_33__active,this._marker_33.firstChild);
		} else {
			this._marker_33.appendChild(this._marker_33__active);
		}
		if (this._marker_33.firstChild) {
			this._marker_33.insertBefore(this._marker_33__normal,this._marker_33.firstChild);
		} else {
			this._marker_33.appendChild(this._marker_33__normal);
		}
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
			me._dropdown_cloner.ggUpdate(me._dropdown_cloner.ggTags);
		}
		this.divSkin.ggLoaded=function() {
		}
		this.divSkin.ggReLoaded=function() {
		}
		this.divSkin.ggLoadedLevels=function() {
		}
		this.divSkin.ggReLoadedLevels=function() {
		}
		this.divSkin.ggEnterFullscreen=function() {
		}
		this.divSkin.ggExitFullscreen=function() {
			me._image_1.style[domTransition]='none';
			me._image_1.style.visibility='hidden';
			me._image_1.ggVisible=false;
			me._image_6.style[domTransition]='none';
			me._image_6.style.visibility='hidden';
			me._image_6.ggVisible=false;
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
		if (id=='{}') {
			me._marker_title_47.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_2.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_3.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_4.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_5.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_6.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_7.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_8.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_9.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_10.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_11.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_12.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_13.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_14.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_15.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_16.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_17.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_18.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_19.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_20.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_21.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_22.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_23.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_24.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_25.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_26.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_27.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_280.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_28.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_29.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_30.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_31.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_32.onmouseover();
		}
		if (id=='{}') {
			me._marker_title_33.onmouseover();
		}
	}
	this.hotspotProxyOut=function(id) {
		if (id=='{}') {
			me._marker_title_47.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_2.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_3.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_4.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_5.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_6.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_7.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_8.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_9.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_10.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_11.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_12.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_13.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_14.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_15.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_16.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_17.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_18.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_19.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_20.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_21.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_22.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_23.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_24.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_25.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_26.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_27.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_280.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_28.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_29.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_30.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_31.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_32.onmouseout();
		}
		if (id=='{}') {
			me._marker_title_33.onmouseout();
		}
	}
	this.ggHotspotCallChildFunctions=function(functionname) {
		var stack = me.player.getCurrentPointHotspots();
		while (stack.length > 0) {
			var e = stack.pop();
			if (typeof e[functionname] == 'function') {
				e[functionname]();
			}
			if(e.hasChildNodes()) {
				for(var i=0; i<e.childNodes.length; i++) {
					stack.push(e.childNodes[i]);
				}
			}
		}
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
		me._dropdown_cloner.ggNodeChange();
		me._marker_1.ggNodeChange();
		me._marker_title_47.ggNodeChange();
		me._marker_2.ggNodeChange();
		me._marker_title_2.ggNodeChange();
		me._marker_3.ggNodeChange();
		me._marker_title_3.ggNodeChange();
		me._marker_4.ggNodeChange();
		me._marker_title_4.ggNodeChange();
		me._marker_5.ggNodeChange();
		me._marker_title_5.ggNodeChange();
		me._marker_6.ggNodeChange();
		me._marker_title_6.ggNodeChange();
		me._marker_7.ggNodeChange();
		me._marker_title_7.ggNodeChange();
		me._marker_8.ggNodeChange();
		me._marker_title_8.ggNodeChange();
		me._marker_9.ggNodeChange();
		me._marker_title_9.ggNodeChange();
		me._marker_10.ggNodeChange();
		me._marker_title_10.ggNodeChange();
		me._marker_11.ggNodeChange();
		me._marker_title_11.ggNodeChange();
		me._marker_12.ggNodeChange();
		me._marker_title_12.ggNodeChange();
		me._marker_13.ggNodeChange();
		me._marker_title_13.ggNodeChange();
		me._marker_14.ggNodeChange();
		me._marker_title_14.ggNodeChange();
		me._marker_15.ggNodeChange();
		me._marker_title_15.ggNodeChange();
		me._marker_16.ggNodeChange();
		me._marker_title_16.ggNodeChange();
		me._marker_17.ggNodeChange();
		me._marker_title_17.ggNodeChange();
		me._marker_18.ggNodeChange();
		me._marker_title_18.ggNodeChange();
		me._marker_19.ggNodeChange();
		me._marker_title_19.ggNodeChange();
		me._marker_20.ggNodeChange();
		me._marker_title_20.ggNodeChange();
		me._marker_21.ggNodeChange();
		me._marker_title_21.ggNodeChange();
		me._marker_22.ggNodeChange();
		me._marker_title_22.ggNodeChange();
		me._marker_23.ggNodeChange();
		me._marker_title_23.ggNodeChange();
		me._marker_24.ggNodeChange();
		me._marker_title_24.ggNodeChange();
		me._marker_25.ggNodeChange();
		me._marker_title_25.ggNodeChange();
		me._marker_26.ggNodeChange();
		me._marker_title_26.ggNodeChange();
		me._marker_27.ggNodeChange();
		me._marker_title_27.ggNodeChange();
		me._marker_280.ggNodeChange();
		me._marker_title_280.ggNodeChange();
		me._marker_28.ggNodeChange();
		me._marker_title_28.ggNodeChange();
		me._marker_29.ggNodeChange();
		me._marker_title_29.ggNodeChange();
		me._marker_30.ggNodeChange();
		me._marker_title_30.ggNodeChange();
		me._marker_31.ggNodeChange();
		me._marker_title_31.ggNodeChange();
		me._marker_32.ggNodeChange();
		me._marker_title_32.ggNodeChange();
		me._marker_33.ggNodeChange();
		me._marker_title_33.ggNodeChange();
		var newMarker=[];
		var i,j;
		var tags=me.ggUserdata.tags;
		for (i=0;i<nodeMarker.length;i++) {
			var match=false;
			if ((nodeMarker[i].ggMarkerNodeId==id) && (id!='')) match=true;
			for(j=0;j<tags.length;j++) {
				if (nodeMarker[i].ggMarkerNodeId==tags[j]) match=true;
			}
			if (match) {
				newMarker.push(nodeMarker[i]);
			}
		}
		for(i=0;i<activeNodeMarker.length;i++) {
			if (newMarker.indexOf(activeNodeMarker[i])<0) {
				if (activeNodeMarker[i].ggMarkerNormal) {
					activeNodeMarker[i].ggMarkerNormal.style.visibility='inherit';
				}
				if (activeNodeMarker[i].ggMarkerActive) {
					activeNodeMarker[i].ggMarkerActive.style.visibility='hidden';
				}
				if (activeNodeMarker[i].ggDeactivate) {
					activeNodeMarker[i].ggDeactivate();
				}
				activeNodeMarker[i].ggIsMarkerActive=false;
			}
		}
		for(i=0;i<newMarker.length;i++) {
			if (activeNodeMarker.indexOf(newMarker[i])<0) {
				if (newMarker[i].ggMarkerNormal) {
					newMarker[i].ggMarkerNormal.style.visibility='hidden';
				}
				if (newMarker[i].ggMarkerActive) {
					newMarker[i].ggMarkerActive.style.visibility='inherit';
				}
				if (newMarker[i].ggActivate) {
					newMarker[i].ggActivate();
				}
				newMarker[i].ggIsMarkerActive=true;
			}
		}
		activeNodeMarker=newMarker;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
		me._stop_rotate_image.ggUpdateConditionTimer();
		me._start_rotate_image.ggUpdateConditionTimer();
		me._ht_room_descr.ggUpdateText();
		me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['dropdown_menu_title_background']) {
		}
		me._dropdown_menu_title_background.ggUpdateConditionTimer();
		me._dropdown_menu_title.ggUpdateText();
		if (me.elementMouseDown['button_image_right']) {
			me.player.changePanLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_left']) {
			me.player.changePanLog(0.5,true);
		}
		if (me.elementMouseDown['button_image_down']) {
			me.player.changeTiltLog(-0.5,true);
		}
		if (me.elementMouseDown['button_image_up']) {
			me.player.changeTiltLog(0.5,true);
		}
		me._ht_link_description_title.ggUpdateText();
		me._ht_link_description_title.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_1']) {
		}
		if (me.elementMouseOver['marker_title_47']) {
		}
		me._marker_title_47.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_2']) {
		}
		if (me.elementMouseOver['marker_title_2']) {
		}
		me._marker_title_2.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_3']) {
		}
		if (me.elementMouseOver['marker_title_3']) {
		}
		me._marker_title_3.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_4']) {
		}
		if (me.elementMouseOver['marker_title_4']) {
		}
		me._marker_title_4.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_5']) {
		}
		if (me.elementMouseOver['marker_title_5']) {
		}
		me._marker_title_5.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_6']) {
		}
		if (me.elementMouseOver['marker_title_6']) {
		}
		me._marker_title_6.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_7']) {
		}
		if (me.elementMouseOver['marker_title_7']) {
		}
		me._marker_title_7.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_8']) {
		}
		if (me.elementMouseOver['marker_title_8']) {
		}
		me._marker_title_8.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_9']) {
		}
		if (me.elementMouseOver['marker_title_9']) {
		}
		me._marker_title_9.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_10']) {
		}
		if (me.elementMouseOver['marker_title_10']) {
		}
		me._marker_title_10.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_11']) {
		}
		if (me.elementMouseOver['marker_title_11']) {
		}
		me._marker_title_11.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_12']) {
		}
		if (me.elementMouseOver['marker_title_12']) {
		}
		me._marker_title_12.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_13']) {
		}
		if (me.elementMouseOver['marker_title_13']) {
		}
		me._marker_title_13.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_14']) {
		}
		if (me.elementMouseOver['marker_title_14']) {
		}
		me._marker_title_14.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_15']) {
		}
		if (me.elementMouseOver['marker_title_15']) {
		}
		me._marker_title_15.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_16']) {
		}
		if (me.elementMouseOver['marker_title_16']) {
		}
		me._marker_title_16.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_17']) {
		}
		if (me.elementMouseOver['marker_title_17']) {
		}
		me._marker_title_17.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_18']) {
		}
		if (me.elementMouseOver['marker_title_18']) {
		}
		me._marker_title_18.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_19']) {
		}
		if (me.elementMouseOver['marker_title_19']) {
		}
		me._marker_title_19.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_20']) {
		}
		if (me.elementMouseOver['marker_title_20']) {
		}
		me._marker_title_20.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_21']) {
		}
		if (me.elementMouseOver['marker_title_21']) {
		}
		me._marker_title_21.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_22']) {
		}
		if (me.elementMouseOver['marker_title_22']) {
		}
		me._marker_title_22.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_23']) {
		}
		if (me.elementMouseOver['marker_title_23']) {
		}
		me._marker_title_23.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_24']) {
		}
		if (me.elementMouseOver['marker_title_24']) {
		}
		me._marker_title_24.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_25']) {
		}
		if (me.elementMouseOver['marker_title_25']) {
		}
		me._marker_title_25.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_26']) {
		}
		if (me.elementMouseOver['marker_title_26']) {
		}
		me._marker_title_26.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_27']) {
		}
		if (me.elementMouseOver['marker_title_27']) {
		}
		me._marker_title_27.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_280']) {
		}
		if (me.elementMouseOver['marker_title_280']) {
		}
		me._marker_title_280.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_28']) {
		}
		if (me.elementMouseOver['marker_title_28']) {
		}
		me._marker_title_28.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_29']) {
		}
		if (me.elementMouseOver['marker_title_29']) {
		}
		me._marker_title_29.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_30']) {
		}
		if (me.elementMouseOver['marker_title_30']) {
		}
		me._marker_title_30.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_31']) {
		}
		if (me.elementMouseOver['marker_title_31']) {
		}
		me._marker_title_31.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_32']) {
		}
		if (me.elementMouseOver['marker_title_32']) {
		}
		me._marker_title_32.ggUpdateConditionTimer();
		if (me.elementMouseOver['marker_33']) {
		}
		if (me.elementMouseOver['marker_title_33']) {
		}
		me._marker_title_33.ggUpdateConditionTimer();
		me.ggHotspotCallChildFunctions('ggUpdateConditionTimer');
	};
	function SkinHotspotClass(skinObj,hotspot) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.hotspot=hotspot;
		var nodeId=String(hotspot.url);
		nodeId=(nodeId.charAt(0)=='{')?nodeId.substr(1, nodeId.length - 2):'';
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		if (hotspot.skinid=='ht_info_blau') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info_blau";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 121px;';
			hs+='position : absolute;';
			hs+='top : 269px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._htt_info_blau=document.createElement('div');
			this._htt_info_blau__img=document.createElement('img');
			this._htt_info_blau__img.className='ggskin ggskin_svg';
			this._htt_info_blau__img.setAttribute('src',basePath + 'images/htt_info_blau.svg');
			this._htt_info_blau__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._htt_info_blau__img['ondragstart']=function() { return false; };
			this._htt_info_blau.appendChild(this._htt_info_blau__img);
			this._htt_info_blau.ggId="htt_info_blau";
			this._htt_info_blau.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._htt_info_blau.ggVisible=true;
			this._htt_info_blau.className='ggskin ggskin_svg ';
			this._htt_info_blau.ggType='svg';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._htt_info_blau.setAttribute('style',hs);
			this._htt_info_blau.style[domTransform + 'Origin']='50% 50%';
			me._htt_info_blau.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._htt_info_blau.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._htt_info_blau.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
			}
			this._htt_info_blau.onmouseover=function (e) {
				me._ht_info_text_blau.style[domTransition]='none';
				me._ht_info_text_blau.style.visibility=(Number(me._ht_info_text_blau.style.opacity)>0||!me._ht_info_text_blau.style.opacity)?'inherit':'hidden';
				me._ht_info_text_blau.ggVisible=true;
			}
			this._htt_info_blau.onmouseout=function (e) {
				me._ht_info_text_blau.style[domTransition]='none';
				me._ht_info_text_blau.style.visibility='hidden';
				me._ht_info_text_blau.ggVisible=false;
			}
			this._htt_info_blau.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._htt_info_blau);
			this._ht_info_text_blau=document.createElement('div');
			this._ht_info_text_blau__text=document.createElement('div');
			this._ht_info_text_blau.className='ggskin ggskin_textdiv';
			this._ht_info_text_blau.ggTextDiv=this._ht_info_text_blau__text;
			this._ht_info_text_blau.ggId="ht_info_text_blau";
			this._ht_info_text_blau.ggLeft=-84;
			this._ht_info_text_blau.ggTop=17;
			this._ht_info_text_blau.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_text_blau.ggVisible=false;
			this._ht_info_text_blau.className='ggskin ggskin_text ';
			this._ht_info_text_blau.ggType='text';
			hs ='';
			hs+='height : 19px;';
			hs+='left : -84px;';
			hs+='opacity : 0.69999;';
			hs+='position : absolute;';
			hs+='top : 17px;';
			hs+='visibility : hidden;';
			hs+='width : 145px;';
			hs+='pointer-events:auto;';
			this._ht_info_text_blau.setAttribute('style',hs);
			this._ht_info_text_blau.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 145px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 4px 5px 4px 5px;';
			hs+='overflow: hidden;';
			this._ht_info_text_blau__text.setAttribute('style',hs);
			this._ht_info_text_blau__text.innerHTML=me.hotspot.title;
			this._ht_info_text_blau.appendChild(this._ht_info_text_blau__text);
			me._ht_info_text_blau.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_text_blau.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_text_blau.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._ht_info_text_blau);
		} else
		if (hotspot.skinid=='ht_icon_cow_bewegend') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_icon_cow_bewegend";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 115px;';
			hs+='position : absolute;';
			hs+='top : 334px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.target+""+me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_icon_text_cow_bwegend=document.createElement('div');
			this._ht_icon_text_cow_bwegend__text=document.createElement('div');
			this._ht_icon_text_cow_bwegend.className='ggskin ggskin_textdiv';
			this._ht_icon_text_cow_bwegend.ggTextDiv=this._ht_icon_text_cow_bwegend__text;
			this._ht_icon_text_cow_bwegend.ggId="ht_icon_text_cow_bwegend";
			this._ht_icon_text_cow_bwegend.ggLeft=-73;
			this._ht_icon_text_cow_bwegend.ggTop=18;
			this._ht_icon_text_cow_bwegend.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_icon_text_cow_bwegend.ggVisible=false;
			this._ht_icon_text_cow_bwegend.className='ggskin ggskin_text ';
			this._ht_icon_text_cow_bwegend.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -73px;';
			hs+='opacity : 0.69999;';
			hs+='position : absolute;';
			hs+='top : 18px;';
			hs+='visibility : hidden;';
			hs+='width : 145px;';
			hs+='pointer-events:auto;';
			this._ht_icon_text_cow_bwegend.setAttribute('style',hs);
			this._ht_icon_text_cow_bwegend.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 145px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 4px 5px 4px 5px;';
			hs+='overflow: hidden;';
			this._ht_icon_text_cow_bwegend__text.setAttribute('style',hs);
			this._ht_icon_text_cow_bwegend__text.innerHTML=me.hotspot.title;
			this._ht_icon_text_cow_bwegend.appendChild(this._ht_icon_text_cow_bwegend__text);
			me._ht_icon_text_cow_bwegend.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_icon_text_cow_bwegend.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_icon_text_cow_bwegend.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._ht_icon_text_cow_bwegend);
			this._image_20=document.createElement('div');
			this._image_20__img=document.createElement('img');
			this._image_20__img.className='ggskin ggskin_image';
			this._image_20__img.setAttribute('src',basePath + 'images/image_20.png');
			this._image_20__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_20__img.className='ggskin ggskin_image';
			this._image_20__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_20__img);
			this._image_20.appendChild(this._image_20__img);
			this._image_20.ggId="Image 2";
			this._image_20.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_20.ggVisible=true;
			this._image_20.className='ggskin ggskin_image ';
			this._image_20.ggType='image';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 35px;';
			hs+='pointer-events:auto;';
			this._image_20.setAttribute('style',hs);
			this._image_20.style[domTransform + 'Origin']='50% 50%';
			me._image_20.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_20.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_20.onmouseover=function (e) {
				me._ht_icon_text_cow_bwegend.style[domTransition]='none';
				me._ht_icon_text_cow_bwegend.style.visibility=(Number(me._ht_icon_text_cow_bwegend.style.opacity)>0||!me._ht_icon_text_cow_bwegend.style.opacity)?'inherit':'hidden';
				me._ht_icon_text_cow_bwegend.ggVisible=true;
			}
			this._image_20.onmouseout=function (e) {
				me._ht_icon_text_cow_bwegend.style[domTransition]='none';
				me._ht_icon_text_cow_bwegend.style.visibility='hidden';
				me._ht_icon_text_cow_bwegend.ggVisible=false;
			}
			this._image_20.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_20);
		} else
		if (hotspot.skinid=='ht_icon_cow_stehend') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_icon_cow_stehend";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 113px;';
			hs+='position : absolute;';
			hs+='top : 417px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.target+""+me.hotspot.url,"");
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_icon_text_cow_stehend=document.createElement('div');
			this._ht_icon_text_cow_stehend__text=document.createElement('div');
			this._ht_icon_text_cow_stehend.className='ggskin ggskin_textdiv';
			this._ht_icon_text_cow_stehend.ggTextDiv=this._ht_icon_text_cow_stehend__text;
			this._ht_icon_text_cow_stehend.ggId="ht_icon_text_cow_stehend";
			this._ht_icon_text_cow_stehend.ggLeft=-73;
			this._ht_icon_text_cow_stehend.ggTop=18;
			this._ht_icon_text_cow_stehend.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_icon_text_cow_stehend.ggVisible=false;
			this._ht_icon_text_cow_stehend.className='ggskin ggskin_text ';
			this._ht_icon_text_cow_stehend.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -73px;';
			hs+='opacity : 0.69999;';
			hs+='position : absolute;';
			hs+='top : 18px;';
			hs+='visibility : hidden;';
			hs+='width : 145px;';
			hs+='pointer-events:auto;';
			this._ht_icon_text_cow_stehend.setAttribute('style',hs);
			this._ht_icon_text_cow_stehend.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 145px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 4px 5px 4px 5px;';
			hs+='overflow: hidden;';
			this._ht_icon_text_cow_stehend__text.setAttribute('style',hs);
			this._ht_icon_text_cow_stehend__text.innerHTML=me.hotspot.title;
			this._ht_icon_text_cow_stehend.appendChild(this._ht_icon_text_cow_stehend__text);
			me._ht_icon_text_cow_stehend.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_icon_text_cow_stehend.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_icon_text_cow_stehend.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._ht_icon_text_cow_stehend);
			this._image_30=document.createElement('div');
			this._image_30__img=document.createElement('img');
			this._image_30__img.className='ggskin ggskin_image';
			this._image_30__img.setAttribute('src',basePath + 'images/image_30.png');
			this._image_30__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._image_30__img.className='ggskin ggskin_image';
			this._image_30__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._image_30__img);
			this._image_30.appendChild(this._image_30__img);
			this._image_30.ggId="Image 3";
			this._image_30.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_30.ggVisible=true;
			this._image_30.className='ggskin ggskin_image ';
			this._image_30.ggType='image';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 35px;';
			hs+='pointer-events:auto;';
			this._image_30.setAttribute('style',hs);
			this._image_30.style[domTransform + 'Origin']='50% 50%';
			me._image_30.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_30.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_30.onmouseover=function (e) {
				me._ht_icon_text_cow_stehend.style[domTransition]='none';
				me._ht_icon_text_cow_stehend.style.visibility=(Number(me._ht_icon_text_cow_stehend.style.opacity)>0||!me._ht_icon_text_cow_stehend.style.opacity)?'inherit':'hidden';
				me._ht_icon_text_cow_stehend.ggVisible=true;
			}
			this._image_30.onmouseout=function (e) {
				me._ht_icon_text_cow_stehend.style[domTransition]='none';
				me._ht_icon_text_cow_stehend.style.visibility='hidden';
				me._ht_icon_text_cow_stehend.ggVisible=false;
			}
			this._image_30.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_30);
		} else
		if (hotspot.skinid=='ht_link') {
			this.__div=document.createElement('div');
			this.__div.ggId="ht_link";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 118px;';
			hs+='position : absolute;';
			hs+='top : 496px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.player.openUrl(me.hotspot.url,me.hotspot.target);
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.elementMouseOver['_div']=true;
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.elementMouseOver['_div']=false;
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ontouchend=function (e) {
				me.elementMouseOver['_div']=false;
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._ht_link_icon=document.createElement('div');
			this._ht_link_icon__img=document.createElement('img');
			this._ht_link_icon__img.className='ggskin ggskin_image';
			this._ht_link_icon__img.setAttribute('src',basePath + 'images/ht_link_icon.png');
			this._ht_link_icon__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_link_icon__img.className='ggskin ggskin_image';
			this._ht_link_icon__img['ondragstart']=function() { return false; };
			me.player.checkLoaded.push(this._ht_link_icon__img);
			this._ht_link_icon.appendChild(this._ht_link_icon__img);
			this._ht_link_icon.ggId="ht_link_icon";
			this._ht_link_icon.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_link_icon.ggVisible=true;
			this._ht_link_icon.className='ggskin ggskin_image ';
			this._ht_link_icon.ggType='image';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._ht_link_icon.setAttribute('style',hs);
			this._ht_link_icon.style[domTransform + 'Origin']='50% 50%';
			me._ht_link_icon.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_link_icon.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_link_icon.onmouseover=function (e) {
				me.skin._ht_link_description_title.style[domTransition]='none';
				me.skin._ht_link_description_title.style.visibility=(Number(me.skin._ht_link_description_title.style.opacity)>0||!me.skin._ht_link_description_title.style.opacity)?'inherit':'hidden';
				me.skin._ht_link_description_title.ggVisible=true;
			}
			this._ht_link_icon.onmouseout=function (e) {
				me.skin._ht_link_description_title.style[domTransition]='none';
				me.skin._ht_link_description_title.style.visibility='hidden';
				me.skin._ht_link_description_title.ggVisible=false;
			}
			this._ht_link_icon.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_link_icon);
			this._ht_link_title=document.createElement('div');
			this._ht_link_title__text=document.createElement('div');
			this._ht_link_title.className='ggskin ggskin_textdiv';
			this._ht_link_title.ggTextDiv=this._ht_link_title__text;
			this._ht_link_title.ggId="ht_link_title";
			this._ht_link_title.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_link_title.ggVisible=false;
			this._ht_link_title.className='ggskin ggskin_text ';
			this._ht_link_title.ggType='text';
			hs ='';
			hs+='z-index: 100;';
			hs+='height : 22px;';
			hs+='left : -70px;';
			hs+='opacity : 0.90002;';
			hs+='position : absolute;';
			hs+='top : 20px;';
			hs+='visibility : hidden;';
			hs+='width : 145px;';
			hs+='pointer-events:auto;';
			this._ht_link_title.setAttribute('style',hs);
			this._ht_link_title.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 145px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='background: rgba(255,255,255,0.705882);';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: rgba(0,0,0,1);';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 3px 4px 3px 4px;';
			hs+='overflow: hidden;';
			this._ht_link_title__text.setAttribute('style',hs);
			this._ht_link_title__text.innerHTML=me.hotspot.title;
			this._ht_link_title.appendChild(this._ht_link_title__text);
			me._ht_link_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_link_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_link_title.ggCurrentLogicStateVisible = -1;
			this._ht_link_title.ggUpdateConditionTimer=function () {
				var newLogicStateVisible;
				if (
					(me.elementMouseOver['_div'] == true)
				)
				{
					newLogicStateVisible = 0;
				}
				else {
					newLogicStateVisible = -1;
				}
				if (me._ht_link_title.ggCurrentLogicStateVisible != newLogicStateVisible) {
					me._ht_link_title.ggCurrentLogicStateVisible = newLogicStateVisible;
					me._ht_link_title.style[domTransition]='';
					if (me._ht_link_title.ggCurrentLogicStateVisible == 0) {
						me._ht_link_title.style.visibility=(Number(me._ht_link_title.style.opacity)>0||!me._ht_link_title.style.opacity)?'inherit':'hidden';
						me._ht_link_title.ggVisible=true;
					}
					else {
						me._ht_link_title.style.visibility="hidden";
						me._ht_link_title.ggVisible=false;
					}
				}
			}
			this._ht_link_title.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_link_title);
			this.hotspotTimerEvent=function() {
				setTimeout(function() { me.hotspotTimerEvent(); }, 10);
				if (me.elementMouseOver['_div']) {
				}
				me._ht_link_title.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_info_blau_1";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 126px;';
			hs+='position : absolute;';
			hs+='top : 663px;';
			hs+='visibility : inherit;';
			hs+='width : 5px;';
			hs+='pointer-events:auto;';
			this.__div.setAttribute('style',hs);
			this.__div.style[domTransform + 'Origin']='50% 50%';
			me.__div.ggIsActive=function() {
				return me.player.getCurrentNode()==this.ggElementNodeId();
			}
			me.__div.ggElementNodeId=function() {
				return me.hotspot.url.substr(1, me.hotspot.url.length - 2);
			}
			this.__div.onclick=function (e) {
				me.skin.hotspotProxyClick(me.hotspot.id);
			}
			this.__div.onmouseover=function (e) {
				me.player.setActiveHotspot(me.hotspot);
				me.skin.hotspotProxyOver(me.hotspot.id);
			}
			this.__div.onmouseout=function (e) {
				me.player.setActiveHotspot(null);
				me.skin.hotspotProxyOut(me.hotspot.id);
			}
			this.__div.ggUpdatePosition=function (useTransition) {
			}
			this._htt_info_blau_1=document.createElement('div');
			this._htt_info_blau_1__img=document.createElement('img');
			this._htt_info_blau_1__img.className='ggskin ggskin_svg';
			this._htt_info_blau_1__img.setAttribute('src',basePath + 'images/htt_info_blau_1.svg');
			this._htt_info_blau_1__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._htt_info_blau_1__img['ondragstart']=function() { return false; };
			this._htt_info_blau_1.appendChild(this._htt_info_blau_1__img);
			this._htt_info_blau_1.ggId="htt_info_blau_1";
			this._htt_info_blau_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._htt_info_blau_1.ggVisible=true;
			this._htt_info_blau_1.className='ggskin ggskin_svg ';
			this._htt_info_blau_1.ggType='svg';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -16px;';
			hs+='position : absolute;';
			hs+='top : -16px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._htt_info_blau_1.setAttribute('style',hs);
			this._htt_info_blau_1.style[domTransform + 'Origin']='50% 50%';
			me._htt_info_blau_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._htt_info_blau_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._htt_info_blau_1.onclick=function (e) {
				me.player.openNext(me.hotspot.url,"");
			}
			this._htt_info_blau_1.onmouseover=function (e) {
				me._ht_info_text_blau_1.style[domTransition]='none';
				me._ht_info_text_blau_1.style.visibility=(Number(me._ht_info_text_blau_1.style.opacity)>0||!me._ht_info_text_blau_1.style.opacity)?'inherit':'hidden';
				me._ht_info_text_blau_1.ggVisible=true;
				me.skin._image_1.style[domTransition]='none';
				me.skin._image_1.style.visibility=(Number(me.skin._image_1.style.opacity)>0||!me.skin._image_1.style.opacity)?'inherit':'hidden';
				me.skin._image_1.ggVisible=true;
			}
			this._htt_info_blau_1.onmouseout=function (e) {
				me._ht_info_text_blau_1.style[domTransition]='none';
				me._ht_info_text_blau_1.style.visibility='hidden';
				me._ht_info_text_blau_1.ggVisible=false;
				me.skin._image_1.style[domTransition]='none';
				me.skin._image_1.style.visibility='hidden';
				me.skin._image_1.ggVisible=false;
			}
			this._htt_info_blau_1.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._htt_info_blau_1);
			this._ht_info_text_blau_1=document.createElement('div');
			this._ht_info_text_blau_1__text=document.createElement('div');
			this._ht_info_text_blau_1.className='ggskin ggskin_textdiv';
			this._ht_info_text_blau_1.ggTextDiv=this._ht_info_text_blau_1__text;
			this._ht_info_text_blau_1.ggId="ht_info_text_blau_1";
			this._ht_info_text_blau_1.ggLeft=-84;
			this._ht_info_text_blau_1.ggTop=15;
			this._ht_info_text_blau_1.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_text_blau_1.ggVisible=false;
			this._ht_info_text_blau_1.className='ggskin ggskin_text ';
			this._ht_info_text_blau_1.ggType='text';
			hs ='';
			hs+='height : 19px;';
			hs+='left : -84px;';
			hs+='opacity : 0.69999;';
			hs+='position : absolute;';
			hs+='top : 15px;';
			hs+='visibility : hidden;';
			hs+='width : 145px;';
			hs+='pointer-events:auto;';
			this._ht_info_text_blau_1.setAttribute('style',hs);
			this._ht_info_text_blau_1.style[domTransform + 'Origin']='50% 50%';
			hs ='position:absolute;';
			hs+='cursor: default;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 145px;';
			hs+='height: auto;';
			hs+='background: #ffffff;';
			hs+='border: 1px solid #000000;';
			hs+='border-radius: 5px;';
			hs+=cssPrefix + 'border-radius: 5px;';
			hs+='color: #000000;';
			hs+='text-align: center;';
			hs+='white-space: pre-wrap;';
			hs+='padding: 4px 5px 4px 5px;';
			hs+='overflow: hidden;';
			this._ht_info_text_blau_1__text.setAttribute('style',hs);
			this._ht_info_text_blau_1__text.innerHTML=me.hotspot.title;
			this._ht_info_text_blau_1.appendChild(this._ht_info_text_blau_1__text);
			me._ht_info_text_blau_1.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_text_blau_1.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_text_blau_1.ggUpdatePosition=function (useTransition) {
				if (useTransition==='undefined') {
					useTransition = false;
				}
				if (!useTransition) {
					this.style[domTransition]='none';
				}
				if (this.parentNode) {
					var w=this.parentNode.offsetWidth;
						this.style.left=(this.ggLeft - 0 + w/2) + 'px';
					var h=this.parentNode.offsetHeight;
						this.style.top=(this.ggTop - 0 + h/2) + 'px';
				}
			}
			this.__div.appendChild(this._ht_info_text_blau_1);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	function SkinElement_image_7_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._image_7=document.createElement('div');
		this._image_7__img=document.createElement('img');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img.setAttribute('src',basePath + 'images/image_7.png');
		this._image_7__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_7__img.className='ggskin ggskin_image';
		this._image_7__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_7__img);
		this._image_7.appendChild(this._image_7__img);
		this._image_7.ggId="Image 7";
		this._image_7.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_7.ggVisible=true;
		this._image_7.className='ggskin ggskin_image ';
		this._image_7.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 136px;';
		hs+='position : absolute;';
		hs+='top : 569px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		this._image_7.setAttribute('style',hs);
		this._image_7.style[domTransform + 'Origin']='50% 50%';
		me._image_7.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._image_7.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._image_7.ggUpdatePosition=function (useTransition) {
		}
		this._image_7.ggNodeChangeMain=function() {
		}
		return this._image_7;
	};
	function SkinElement_image_8_Class(skinObj,ggParent) {
		var me=this;
		var flag=false;
		this.player=skinObj.player;
		this.skin=skinObj;
		this.ggParent=ggParent;
		var nodeId=ggParent.ggElementNodeId();
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		
		this.findElements=function(id,regex) {
			return me.skin.findElements(id,regex);
		}
		
		this._image_8=document.createElement('div');
		this._image_8__img=document.createElement('img');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img.setAttribute('src',basePath + 'images/image_8.png');
		this._image_8__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._image_8__img.className='ggskin ggskin_image';
		this._image_8__img['ondragstart']=function() { return false; };
		me.player.checkLoaded.push(this._image_8__img);
		this._image_8.appendChild(this._image_8__img);
		this._image_8.ggId="Image 8";
		this._image_8.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._image_8.ggVisible=true;
		this._image_8.className='ggskin ggskin_image ';
		this._image_8.ggType='image';
		hs ='';
		hs+='height : 18px;';
		hs+='left : 136px;';
		hs+='position : absolute;';
		hs+='top : 610px;';
		hs+='visibility : inherit;';
		hs+='width : 14px;';
		hs+='pointer-events:auto;';
		this._image_8.setAttribute('style',hs);
		this._image_8.style[domTransform + 'Origin']='50% 50%';
		me._image_8.ggIsActive=function() {
			return me.player.getCurrentNode()==this.ggElementNodeId();
		}
		me._image_8.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._image_8.ggUpdatePosition=function (useTransition) {
		}
		this._image_8.ggNodeChangeMain=function() {
		}
		return this._image_8;
	};
	function SkinCloner_dropdown_cloner_Class(nodeId, parent) {
		var me=this;
		this.skin=parent;
		this.player=this.skin.player;
		this.findElements=this.skin.findElements;
		this.ggNodeId=nodeId;
		this.ggUserdata=this.skin.player.getNodeUserdata(nodeId);
		this.elementMouseDown=[];
		this.elementMouseOver=[];
		this.__div=document.createElement('div');
		this.__div.setAttribute('style','position: absolute; left: 0px; top: 0px; width: 180px; height: 25px; visibility: inherit;');
		this.__div.ggIsActive = function() {
			return me.player.getCurrentNode()==me.ggNodeId;
		}
		this.__div.ggElementNodeId=function() {
			return me.ggNodeId;
		}
		this._dropdown_menu_text=document.createElement('div');
		this._dropdown_menu_text__text=document.createElement('div');
		this._dropdown_menu_text.className='ggskin ggskin_textdiv';
		this._dropdown_menu_text.ggTextDiv=this._dropdown_menu_text__text;
		this._dropdown_menu_text.ggId="Dropdown Menu Text";
		this._dropdown_menu_text.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_menu_text.ggVisible=true;
		this._dropdown_menu_text.className='ggskin ggskin_text ';
		this._dropdown_menu_text.ggType='text';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 18px;';
		hs+='left : 23px;';
		hs+='position : absolute;';
		hs+='top : 0px;';
		hs+='visibility : inherit;';
		hs+='width : 146px;';
		hs+='pointer-events:auto;';
		this._dropdown_menu_text.setAttribute('style',hs);
		this._dropdown_menu_text.style[domTransform + 'Origin']='50% 50%';
		hs ='position:absolute;';
		hs+='left: 0px;';
		hs+='top:  0px;';
		hs+='width: 146px;';
		hs+='height: 18px;';
		hs+='background: #afafaf;';
		hs+='border: 0px solid #848484;';
		hs+='border-radius: 5px;';
		hs+=cssPrefix + 'border-radius: 5px;';
		hs+='color: rgba(255,255,255,1);';
		hs+='text-align: center;';
		hs+='white-space: nowrap;';
		hs+='padding: 1px 2px 1px 2px;';
		hs+='overflow: hidden;';
		this._dropdown_menu_text__text.setAttribute('style',hs);
		this._dropdown_menu_text__text.innerHTML=me.ggUserdata.title;
		this._dropdown_menu_text.appendChild(this._dropdown_menu_text__text);
		me._dropdown_menu_text.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_menu_text.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._dropdown_menu_text.onclick=function (e) {
			me.player.openNext("{"+me.ggNodeId+"}",me.player.hotspot.target);
		}
		this._dropdown_menu_text.onmouseover=function (e) {
			me.elementMouseOver['dropdown_menu_text']=true;
		}
		this._dropdown_menu_text.onmouseout=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		this._dropdown_menu_text.ontouchend=function (e) {
			me.elementMouseOver['dropdown_menu_text']=false;
		}
		me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = -1;
		me._dropdown_menu_text.ggCurrentLogicStateTextColor = -1;
		this._dropdown_menu_text.ggUpdateConditionTimer=function () {
			var newLogicStateBackgroundColor;
			if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateBackgroundColor = 0;
			}
			else if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateBackgroundColor = 1;
			}
			else {
				newLogicStateBackgroundColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor != newLogicStateBackgroundColor) {
				me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor = newLogicStateBackgroundColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color none, color none';
				if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 0) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateBackgroundColor == 1) {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(255,255,255,1)";
				}
				else {
					me._dropdown_menu_text__text.style.backgroundColor="rgba(175,175,175,1)";
				}
			}
			var newLogicStateTextColor;
			if (
				(me._dropdown_menu_text.ggIsActive() == true)
			)
			{
				newLogicStateTextColor = 0;
			}
			else if (
				(me.elementMouseOver['dropdown_menu_text'] == true)
			)
			{
				newLogicStateTextColor = 1;
			}
			else {
				newLogicStateTextColor = -1;
			}
			if (me._dropdown_menu_text.ggCurrentLogicStateTextColor != newLogicStateTextColor) {
				me._dropdown_menu_text.ggCurrentLogicStateTextColor = newLogicStateTextColor;
				me._dropdown_menu_text__text.style[domTransition]='background-color none, color none';
				if (me._dropdown_menu_text.ggCurrentLogicStateTextColor == 0) {
					me._dropdown_menu_text__text.style.color="rgba(0,0,0,1)";
				}
				else if (me._dropdown_menu_text.ggCurrentLogicStateTextColor == 1) {
					me._dropdown_menu_text__text.style.color="rgba(0,0,0,1)";
				}
				else {
					me._dropdown_menu_text__text.style.color="rgba(255,255,255,1)";
				}
			}
		}
		this._dropdown_menu_text.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._dropdown_menu_text);
		this._dropdown_checkmark=document.createElement('div');
		this._dropdown_checkmark__img=document.createElement('img');
		this._dropdown_checkmark__img.className='ggskin ggskin_svg';
		this._dropdown_checkmark__img.setAttribute('src',basePath + 'images/dropdown_checkmark.svg');
		this._dropdown_checkmark__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._dropdown_checkmark__img['ondragstart']=function() { return false; };
		this._dropdown_checkmark.appendChild(this._dropdown_checkmark__img);
		this._dropdown_checkmark.ggId="Dropdown Checkmark";
		this._dropdown_checkmark.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._dropdown_checkmark.ggVisible=true;
		this._dropdown_checkmark.className='ggskin ggskin_svg ';
		this._dropdown_checkmark.ggType='svg';
		hs ='';
		hs+='height : 26px;';
		hs+='left : -1px;';
		hs+='opacity : 0;';
		hs+='position : absolute;';
		hs+='top : -3px;';
		hs+='visibility : hidden;';
		hs+='width : 26px;';
		hs+='pointer-events:auto;';
		this._dropdown_checkmark.setAttribute('style',hs);
		this._dropdown_checkmark.style[domTransform + 'Origin']='50% 50%';
		me._dropdown_checkmark.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._dropdown_checkmark.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		me._dropdown_checkmark.ggCurrentLogicStateAlpha = -1;
		this._dropdown_checkmark.ggUpdateConditionTimer=function () {
			var newLogicStateAlpha;
			if (
				(me.player.nodeVisited(me._dropdown_checkmark.ggElementNodeId()) == true) || 
				(me._dropdown_checkmark.ggIsActive() == true)
			)
			{
				newLogicStateAlpha = 0;
			}
			else {
				newLogicStateAlpha = -1;
			}
			if (me._dropdown_checkmark.ggCurrentLogicStateAlpha != newLogicStateAlpha) {
				me._dropdown_checkmark.ggCurrentLogicStateAlpha = newLogicStateAlpha;
				me._dropdown_checkmark.style[domTransition]='opacity none, visibility none';
				if (me._dropdown_checkmark.ggCurrentLogicStateAlpha == 0) {
					me._dropdown_checkmark.style.visibility=me._dropdown_checkmark.ggVisible?'inherit':'hidden';
					me._dropdown_checkmark.style.opacity=1;
				}
				else {
					me._dropdown_checkmark.style.visibility="hidden";
					me._dropdown_checkmark.style.opacity=0;
				}
			}
		}
		this._dropdown_checkmark.ggUpdatePosition=function (useTransition) {
		}
		this.__div.appendChild(this._dropdown_checkmark);
	};
	this.addSkin();
};