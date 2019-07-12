// Garden Gnome Software - Skin
// Pano2VR 5.2.5/15998
// Filename: CowView_Skin.ggsk
// Generated Fr. Jul 12 13:56:34 2019

function pano2vrSkin(player,base) {
	var ggSkinVars = [];
	var me=this;
	var flag=false;
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
		this._button_direction=document.createElement('div');
		this._button_direction.ggId="button_direction";
		this._button_direction.ggLeft=640;
		this._button_direction.ggTop=-163;
		this._button_direction.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_direction.ggVisible=true;
		this._button_direction.className='ggskin ggskin_container ';
		this._button_direction.ggType='container';
		hs ='';
		hs+='height : 62px;';
		hs+='left : 640px;';
		hs+='position : absolute;';
		hs+='top : -163px;';
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
		hs+='top : -1px;';
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
		this.divSkin.ggUpdateSize=function(w,h) {
			me.updateSize(me.divSkin);
		}
		this.divSkin.ggViewerInit=function() {
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
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
	}
	this.changeActiveNode=function(id) {
		me.ggUserdata=me.player.userdata;
	}
	this.skinTimerEvent=function() {
		setTimeout(function() { me.skinTimerEvent(); }, 10);
		me.ggCurrentTime=new Date().getTime();
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
		
		{
			this.__div=document.createElement('div');
			this.__div.ggId="Hot_info_blau";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 122px;';
			hs+='position : absolute;';
			hs+='top : 136px;';
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
			this._ht_info_blau=document.createElement('div');
			this._ht_info_blau__img=document.createElement('img');
			this._ht_info_blau__img.className='ggskin ggskin_svg';
			this._ht_info_blau__img.setAttribute('src',basePath + 'images/ht_info_blau.svg');
			this._ht_info_blau__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
			this._ht_info_blau__img['ondragstart']=function() { return false; };
			this._ht_info_blau.appendChild(this._ht_info_blau__img);
			this._ht_info_blau.ggId="ht_info_blau";
			this._ht_info_blau.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_blau.ggVisible=true;
			this._ht_info_blau.className='ggskin ggskin_svg ';
			this._ht_info_blau.ggType='svg';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -15px;';
			hs+='visibility : inherit;';
			hs+='width : 30px;';
			hs+='pointer-events:auto;';
			this._ht_info_blau.setAttribute('style',hs);
			this._ht_info_blau.style[domTransform + 'Origin']='50% 50%';
			me._ht_info_blau.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_info_blau.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._ht_info_blau.onmouseover=function (e) {
				me._ht_info_text_blau.style[domTransition]='none';
				me._ht_info_text_blau.style.visibility=(Number(me._ht_info_text_blau.style.opacity)>0||!me._ht_info_text_blau.style.opacity)?'inherit':'hidden';
				me._ht_info_text_blau.ggVisible=true;
			}
			this._ht_info_blau.onmouseout=function (e) {
				me._ht_info_text_blau.style[domTransition]='none';
				me._ht_info_text_blau.style.visibility='hidden';
				me._ht_info_text_blau.ggVisible=false;
			}
			this._ht_info_blau.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_info_blau);
			this._ht_info_text_blau=document.createElement('div');
			this._ht_info_text_blau__text=document.createElement('div');
			this._ht_info_text_blau.className='ggskin ggskin_textdiv';
			this._ht_info_text_blau.ggTextDiv=this._ht_info_text_blau__text;
			this._ht_info_text_blau.ggId="ht_info_text_blau";
			this._ht_info_text_blau.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._ht_info_text_blau.ggVisible=false;
			this._ht_info_text_blau.className='ggskin ggskin_text ';
			this._ht_info_text_blau.ggType='text';
			hs ='';
			hs+='height : 17px;';
			hs+='left : -73px;';
			hs+='opacity : 0.69999;';
			hs+='position : absolute;';
			hs+='top : 20px;';
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
			hs+='text-align: left;';
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
			}
			this.__div.appendChild(this._ht_info_text_blau);
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
	this.addSkin();
};