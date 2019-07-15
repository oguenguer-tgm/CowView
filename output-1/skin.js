// Garden Gnome Software - Skin
// Pano2VR 5.2.5/15998
// Filename: CowView_Skin.ggsk
// Generated Mo. Jul 15 11:52:03 2019

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
		hs+='left : 687px;';
		hs+='position : absolute;';
		hs+='top : 378px;';
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
		this._start_rotate_image.ggLeft=671;
		this._start_rotate_image.ggTop=346;
		this._start_rotate_image.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._start_rotate_image.ggVisible=true;
		this._start_rotate_image.className='ggskin ggskin_svg ';
		this._start_rotate_image.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 671px;';
		hs+='position : absolute;';
		hs+='top : 346px;';
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
		this._button_fullscreen.ggLeft=-176;
		this._button_fullscreen.ggTop=-79;
		this._button_fullscreen.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_fullscreen.ggVisible=true;
		this._button_fullscreen.className='ggskin ggskin_container ';
		this._button_fullscreen.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -176px;';
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
		this._button_zoom=document.createElement('div');
		this._button_zoom.ggId="button_zoom";
		this._button_zoom.ggLeft=-105;
		this._button_zoom.ggTop=-80;
		this._button_zoom.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._button_zoom.ggVisible=true;
		this._button_zoom.className='ggskin ggskin_container ';
		this._button_zoom.ggType='container';
		hs ='';
		hs+='height : 32px;';
		hs+='left : -105px;';
		hs+='position : absolute;';
		hs+='top : -80px;';
		hs+='visibility : inherit;';
		hs+='width : 64px;';
		hs+='pointer-events:none;';
		this._button_zoom.setAttribute('style',hs);
		this._button_zoom.style[domTransform + 'Origin']='50% 50%';
		me._button_zoom.ggIsActive=function() {
			return false;
		}
		me._button_zoom.ggElementNodeId=function() {
			return me.player.getCurrentNode();
		}
		this._button_zoom.ggUpdatePosition=function (useTransition) {
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
		this._zoomout=document.createElement('div');
		this._zoomout__img=document.createElement('img');
		this._zoomout__img.className='ggskin ggskin_svg';
		this._zoomout__img.setAttribute('src',basePath + 'images/zoomout.svg');
		this._zoomout__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomout__img['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__img);
		this._zoomout__imgo=document.createElement('img');
		this._zoomout__imgo.className='ggskin ggskin_svg';
		this._zoomout__imgo.setAttribute('src',basePath + 'images/zoomout__o.svg');
		this._zoomout__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomout__imgo['ondragstart']=function() { return false; };
		this._zoomout.appendChild(this._zoomout__imgo);
		this._zoomout.ggId="zoomout";
		this._zoomout.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomout.ggVisible=false;
		this._zoomout.className='ggskin ggskin_svg ';
		this._zoomout.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : 47px;';
		hs+='position : absolute;';
		hs+='top : 1px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomout.setAttribute('style',hs);
		this._zoomout.style[domTransform + 'Origin']='50% 50%';
		me._zoomout.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomout.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomout.onmouseover=function (e) {
			me._zoomout__img.style.visibility='hidden';
			me._zoomout__imgo.style.visibility='inherit';
		}
		this._zoomout.onmouseout=function (e) {
			me._zoomout__img.style.visibility='inherit';
			me._zoomout__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.onmousedown=function (e) {
			me.elementMouseDown['zoomout']=true;
		}
		this._zoomout.onmouseup=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		this._zoomout.ontouchend=function (e) {
			me.elementMouseDown['zoomout']=false;
		}
		me._zoomout.ggCurrentLogicStateVisible = -1;
		this._zoomout.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['opt_zoom'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomout.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomout.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomout.style[domTransition]='';
				if (me._zoomout.ggCurrentLogicStateVisible == 0) {
					me._zoomout.style.visibility=(Number(me._zoomout.style.opacity)>0||!me._zoomout.style.opacity)?'inherit':'hidden';
					me._zoomout.ggVisible=true;
				}
				else {
					me._zoomout.style.visibility="hidden";
					me._zoomout.ggVisible=false;
				}
			}
		}
		this._zoomout.ggUpdatePosition=function (useTransition) {
		}
		this._button_zoom.appendChild(this._zoomout);
		this._zoomin=document.createElement('div');
		this._zoomin__img=document.createElement('img');
		this._zoomin__img.className='ggskin ggskin_svg';
		this._zoomin__img.setAttribute('src',basePath + 'images/zoomin.svg');
		this._zoomin__img.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;pointer-events:none;');
		this._zoomin__img['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__img);
		this._zoomin__imgo=document.createElement('img');
		this._zoomin__imgo.className='ggskin ggskin_svg';
		this._zoomin__imgo.setAttribute('src',basePath + 'images/zoomin__o.svg');
		this._zoomin__imgo.setAttribute('style','position: absolute;top: 0px;left: 0px;width: 100%;height: 100%;-webkit-user-drag:none;visibility:hidden;pointer-events:none;');
		this._zoomin__imgo['ondragstart']=function() { return false; };
		this._zoomin.appendChild(this._zoomin__imgo);
		this._zoomin.ggId="zoomin";
		this._zoomin.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
		this._zoomin.ggVisible=false;
		this._zoomin.className='ggskin ggskin_svg ';
		this._zoomin.ggType='svg';
		hs ='';
		hs+='cursor : pointer;';
		hs+='height : 32px;';
		hs+='left : -9px;';
		hs+='position : absolute;';
		hs+='top : 2px;';
		hs+='visibility : hidden;';
		hs+='width : 32px;';
		hs+='pointer-events:auto;';
		this._zoomin.setAttribute('style',hs);
		this._zoomin.style[domTransform + 'Origin']='50% 50%';
		me._zoomin.ggIsActive=function() {
			if ((this.parentNode) && (this.parentNode.ggIsActive)) {
				return this.parentNode.ggIsActive();
			}
			return false;
		}
		me._zoomin.ggElementNodeId=function() {
			if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
				return this.parentNode.ggElementNodeId();
			}
			return me.player.getCurrentNode();
		}
		this._zoomin.onmouseover=function (e) {
			me._zoomin__img.style.visibility='hidden';
			me._zoomin__imgo.style.visibility='inherit';
		}
		this._zoomin.onmouseout=function (e) {
			me._zoomin__img.style.visibility='inherit';
			me._zoomin__imgo.style.visibility='hidden';
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.onmousedown=function (e) {
			me.elementMouseDown['zoomin']=true;
		}
		this._zoomin.onmouseup=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		this._zoomin.ontouchend=function (e) {
			me.elementMouseDown['zoomin']=false;
		}
		me._zoomin.ggCurrentLogicStateVisible = -1;
		this._zoomin.ggUpdateConditionTimer=function () {
			var newLogicStateVisible;
			if (
				(ggSkinVars['opt_zoom'] == true)
			)
			{
				newLogicStateVisible = 0;
			}
			else {
				newLogicStateVisible = -1;
			}
			if (me._zoomin.ggCurrentLogicStateVisible != newLogicStateVisible) {
				me._zoomin.ggCurrentLogicStateVisible = newLogicStateVisible;
				me._zoomin.style[domTransition]='';
				if (me._zoomin.ggCurrentLogicStateVisible == 0) {
					me._zoomin.style.visibility=(Number(me._zoomin.style.opacity)>0||!me._zoomin.style.opacity)?'inherit':'hidden';
					me._zoomin.ggVisible=true;
				}
				else {
					me._zoomin.style.visibility="hidden";
					me._zoomin.ggVisible=false;
				}
			}
		}
		this._zoomin.ggUpdatePosition=function (useTransition) {
		}
		this._button_zoom.appendChild(this._zoomin);
		this.divSkin.appendChild(this._button_zoom);
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
		hs+='height : 17px;';
		hs+='left : 2.14%;';
		hs+='opacity : 0.70001;';
		hs+='position : absolute;';
		hs+='top : 2.95%;';
		hs+='visibility : inherit;';
		hs+='width : 255px;';
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
		}
		this.skinTimerEvent();
	};
	this.hotspotProxyClick=function(id) {
	}
	this.hotspotProxyOver=function(id) {
	}
	this.hotspotProxyOut=function(id) {
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
		me._stop_rotate_image.ggUpdateConditionTimer();
		me._start_rotate_image.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomout']) {
			me.player.changeFovLog(0.5,true);
		}
		me._zoomout.ggUpdateConditionTimer();
		if (me.elementMouseDown['zoomin']) {
			me.player.changeFovLog(-0.5,true);
		}
		me._zoomin.ggUpdateConditionTimer();
		me._ht_room_descr.ggUpdateText();
		me._dropdown_cloner.ggClonerCallChildFunctions('ggUpdateConditionTimer');
		if (me.elementMouseOver['dropdown_menu_title_background']) {
		}
		me._dropdown_menu_title_background.ggUpdateConditionTimer();
		me._dropdown_menu_title.ggUpdateText();
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
			hs+='left : 123px;';
			hs+='position : absolute;';
			hs+='top : 135px;';
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
			hs+='left : -15px;';
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
			hs+='left : 117px;';
			hs+='position : absolute;';
			hs+='top : 200px;';
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
			this._image_2.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_2.ggVisible=true;
			this._image_2.className='ggskin ggskin_image ';
			this._image_2.ggType='image';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 35px;';
			hs+='pointer-events:auto;';
			this._image_2.setAttribute('style',hs);
			this._image_2.style[domTransform + 'Origin']='50% 50%';
			me._image_2.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_2.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_2.onmouseover=function (e) {
				me._ht_icon_text_cow_bwegend.style[domTransition]='none';
				me._ht_icon_text_cow_bwegend.style.visibility=(Number(me._ht_icon_text_cow_bwegend.style.opacity)>0||!me._ht_icon_text_cow_bwegend.style.opacity)?'inherit':'hidden';
				me._ht_icon_text_cow_bwegend.ggVisible=true;
			}
			this._image_2.onmouseout=function (e) {
				me._ht_icon_text_cow_bwegend.style[domTransition]='none';
				me._ht_icon_text_cow_bwegend.style.visibility='hidden';
				me._ht_icon_text_cow_bwegend.ggVisible=false;
			}
			this._image_2.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_2);
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
			hs+='left : 115px;';
			hs+='position : absolute;';
			hs+='top : 283px;';
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
			this._image_3.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this._image_3.ggVisible=true;
			this._image_3.className='ggskin ggskin_image ';
			this._image_3.ggType='image';
			hs ='';
			hs+='height : 30px;';
			hs+='left : -15px;';
			hs+='position : absolute;';
			hs+='top : -18px;';
			hs+='visibility : inherit;';
			hs+='width : 35px;';
			hs+='pointer-events:auto;';
			this._image_3.setAttribute('style',hs);
			this._image_3.style[domTransform + 'Origin']='50% 50%';
			me._image_3.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._image_3.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			this._image_3.onmouseover=function (e) {
				me._ht_icon_text_cow_stehend.style[domTransition]='none';
				me._ht_icon_text_cow_stehend.style.visibility=(Number(me._ht_icon_text_cow_stehend.style.opacity)>0||!me._ht_icon_text_cow_stehend.style.opacity)?'inherit':'hidden';
				me._ht_icon_text_cow_stehend.ggVisible=true;
			}
			this._image_3.onmouseout=function (e) {
				me._ht_icon_text_cow_stehend.style[domTransition]='none';
				me._ht_icon_text_cow_stehend.style.visibility='hidden';
				me._ht_icon_text_cow_stehend.ggVisible=false;
			}
			this._image_3.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._image_3);
		} else
		{
			this.__div=document.createElement('div');
			this.__div.ggId="ht_link";
			this.__div.ggParameter={ rx:0,ry:0,a:0,sx:1,sy:1 };
			this.__div.ggVisible=true;
			this.__div.className='ggskin ggskin_hotspot ';
			this.__div.ggType='hotspot';
			hs ='';
			hs+='height : 5px;';
			hs+='left : 120px;';
			hs+='position : absolute;';
			hs+='top : 362px;';
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
				me._ht_link_description_title.style[domTransition]='none';
				me._ht_link_description_title.style.visibility=(Number(me._ht_link_description_title.style.opacity)>0||!me._ht_link_description_title.style.opacity)?'inherit':'hidden';
				me._ht_link_description_title.ggVisible=true;
			}
			this._ht_link_icon.onmouseout=function (e) {
				me._ht_link_description_title.style[domTransition]='none';
				me._ht_link_description_title.style.visibility='hidden';
				me._ht_link_description_title.ggVisible=false;
			}
			this._ht_link_icon.ggUpdatePosition=function (useTransition) {
			}
			this.__div.appendChild(this._ht_link_icon);
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
			hs+='height : 11px;';
			hs+='left : -772px;';
			hs+='opacity : 0.89999;';
			hs+='position : absolute;';
			hs+='top : -264px;';
			hs+='visibility : hidden;';
			hs+='width : 289px;';
			hs+='pointer-events:auto;';
			this._ht_link_description_title.setAttribute('style',hs);
			this._ht_link_description_title.style[domTransform + 'Origin']='0% 0%';
			hs ='position:absolute;';
			hs+='left: 0px;';
			hs+='top:  0px;';
			hs+='width: 289px;';
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
			this._ht_link_description_title__text.innerHTML=me.hotspot.description;
			this._ht_link_description_title.appendChild(this._ht_link_description_title__text);
			me._ht_link_description_title.ggIsActive=function() {
				if ((this.parentNode) && (this.parentNode.ggIsActive)) {
					return this.parentNode.ggIsActive();
				}
				return false;
			}
			me._ht_link_description_title.ggElementNodeId=function() {
				if ((this.parentNode) && (this.parentNode.ggElementNodeId)) {
					return this.parentNode.ggElementNodeId();
				}
				return me.ggNodeId;
			}
			me._ht_link_description_title.ggCurrentLogicStateVisible = -1;
			this._ht_link_description_title.ggUpdateConditionTimer=function () {
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
			this.__div.appendChild(this._ht_link_description_title);
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
			hs+='text-align: left;';
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
				me._ht_link_description_title.ggUpdateConditionTimer();
				me._ht_link_title.ggUpdateConditionTimer();
			}
			this.hotspotTimerEvent();
		}
	};
	this.addSkinHotspot=function(hotspot) {
		return new SkinHotspotClass(me,hotspot);
	}
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