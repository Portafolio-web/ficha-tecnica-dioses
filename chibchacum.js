(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"chibchacum_atlas_1", frames: [[1493,0,156,160],[0,0,1491,868]]},
		{name:"chibchacum_atlas_2", frames: [[0,0,1920,1305]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.cerrar = function() {
	this.initialize(ss["chibchacum_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.chibchacum_1 = function() {
	this.initialize(ss["chibchacum_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["chibchacum_atlas_2"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cerrarchibchacum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cerrar();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-8,y:-8},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-8,-8,171.6,176);


(lib.Interpolación8 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cerrarchibchacum();
	this.instance.setTransform(589.5,-290);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.chibchacum_1();
	this.instance_1.setTransform(-745.5,-434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-745.5,-434,1498.6,868);


(lib.Interpolación7 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.cerrarchibchacum();
	this.instance.setTransform(589.5,-290);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.instance_1 = new lib.chibchacum_1();
	this.instance_1.setTransform(-745.5,-434);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-745.5,-434,1498.6,868);


// stage content:
(lib.chibchacum = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [49];
	// timeline functions:
	this.frame_49 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.cerrarchibchacum.on('click', function(){
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('index.html', '_self');
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(49).call(this.frame_49).wait(432));

	// boton
	this.cerrarchibchacum = new lib.cerrarchibchacum();
	this.cerrarchibchacum.name = "cerrarchibchacum";
	this.cerrarchibchacum.setTransform(1504,449.15);
	this.cerrarchibchacum._off = true;
	new cjs.ButtonHelper(this.cerrarchibchacum, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cerrarchibchacum).wait(49).to({_off:false},0).wait(432));

	// MergedLayer_3
	this.instance = new lib.Interpolación7("synched",0);
	this.instance.setTransform(914.5,737,0.0145,0.0167,0,-30.0375,-30.096,-3,-1.5);

	this.instance_1 = new lib.Interpolación8("synched",0);
	this.instance_1.setTransform(914.5,737);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},49).wait(432));
	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,skewX:0,skewY:0},49).wait(432));

	// negro
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.698)").s().p("EigGBt7IAAjlIo+AAMAAAjYQMFNXAAAIAAByIEyAAMAAADaDg");
	this.shape.setTransform(978.875,692.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.498)").s().p("EiiMBt7IAAjlMAAAjYQMFEZAAAIAAByMAAADaDg");
	this.shape_1.setTransform(992.25,692.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,18,45,0)").s().p("ECkTBt7MAAAjaDIEyAAMAAADaDgEipEBqWMAAAjYQII+AAMAAADYQg");
	this.shape_2.setTransform(978.875,692.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape_1}]},480).wait(1));

	// azul
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00122D").s().p("Ei2LAMwIAA5fMFsXAAAIAAZfg");
	this.shape_3.setTransform(958.875,1377.85);

	this.timeline.addTween(cjs.Tween.get(this.shape_3).wait(481));

	// fondo
	this.instance_2 = new lib.fondo();

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(481));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(752.9,666.1,1372,793.4);
// library properties:
lib.properties = {
	id: '1199EA5933091D4B85EE27F75B2CD01A',
	width: 1920,
	height: 1355,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/chibchacum_atlas_1.png?1629778439493", id:"chibchacum_atlas_1"},
		{src:"images/chibchacum_atlas_2.png?1629778439493", id:"chibchacum_atlas_2"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['1199EA5933091D4B85EE27F75B2CD01A'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;