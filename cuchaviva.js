(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"cuchaviva_atlas_1", frames: [[1134,606,92,95],[1134,0,879,604],[0,0,1132,769],[0,771,1132,769]]}
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



(lib.boton2 = function() {
	this.initialize(ss["cuchaviva_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.cuchaviva_1 = function() {
	this.initialize(ss["cuchaviva_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondonegro = function() {
	this.initialize(ss["cuchaviva_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.fondonegropngcopia = function() {
	this.initialize(ss["cuchaviva_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Interpolación3 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.cuchaviva_1();
	this.instance.setTransform(-439.5,-302);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-439.5,-302,879,604);


(lib.cuchavivaabrir = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boton2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-5,y:-5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,101.2,104.5);


(lib.cerrarcuchaviva = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boton2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({scaleX:1.1,scaleY:1.1,x:-5,y:-5},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-5,-5,101.2,104.5);


(lib.Interpolación6 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boton2();
	this.instance.setTransform(361.5,-126);

	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-453.5,-302,907,604);


(lib.Interpolación5 = function(mode,startPosition,loop,reversed) {
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
	this.instance = new lib.boton2();
	this.instance.setTransform(361.5,-126);

	this.instance_1 = new lib.Interpolación3("synched",0);
	this.instance_1.setTransform(-14,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-453.5,-302,907,604);


(lib.cuchavivacerrar = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// timeline functions:
	this.frame_34 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('ficha-dioses.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(1));

	// Capa_2
	this.instance = new lib.cerrarcuchaviva();
	this.instance.setTransform(964,320.5,1,1,0,0,0,46,47.5);
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(34));

	// cuchaviva_copia
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(560.55,397,1,1,0,0,0,4.4,-1.9);

	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.setTransform(560.5,397,0.012,0.0127,30.0091,0,0,7.8,4.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},34).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:7.8,regY:4.9,scaleX:0.012,scaleY:0.0127,rotation:30.0091,x:560.5},34).wait(1));

	// Capa_3
	this.instance_3 = new lib.fondonegropngcopia();
	this.instance_3.setTransform(0,-1);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,-1,1132,769);


// stage content:
(lib.cuchaviva = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [34,69];
	// timeline functions:
	this.frame_34 = function() {
		var _this = this;
		/*
		Al hacer clic en la instancia del símbolo especificada, se ejecuta una función.
		*/
		_this.cuchavivaabrir.on('click', function(){
		/*
		Mueve la cabeza lectora a la etiqueta de fotograma especificada en la línea de tiempo y continúa la reproducción desde dicho fotograma.
		Se puede utilizar en la línea de tiempo principal o en líneas de tiempo de clips de película.
		*/
		_this.gotoAndPlay('enterFrameLabel');
		});
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
	}
	this.frame_69 = function() {
		var _this = this;
		/*
		Detener un clip de película o un vídeo
		Detiene el clip de película o el vídeo especificado.
		*/
		_this.stop();
		
		
		var _this = this;
		/*
		Carga la URL en una ventana nueva del navegador.
		*/
		window.open('ficha-dioses.html', '_self');
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(34).call(this.frame_34).wait(35).call(this.frame_69).wait(1));

	// cuchavivacerrar
	this.instance = new lib.cuchavivacerrar();
	this.instance.setTransform(565,384.5,1,1,0,0,0,566,384.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(35).to({_off:false},0).wait(35));

	// boton
	this.cuchavivaabrir = new lib.cuchavivaabrir();
	this.cuchavivaabrir.name = "cuchavivaabrir";
	this.cuchavivaabrir.setTransform(967,320.5,1,1,0,0,0,46,47.5);
	this.cuchavivaabrir._off = true;
	new cjs.ButtonHelper(this.cuchavivaabrir, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.cuchavivaabrir).wait(34).to({_off:false},0).to({_off:true},1).wait(35));

	// cuchaviva
	this.instance_1 = new lib.Interpolación5("synched",0);
	this.instance_1.setTransform(559.5,397,0.01,0.01,29.9729,0,0,4.4,-2.5);

	this.instance_2 = new lib.Interpolación6("synched",0);
	this.instance_2.setTransform(559.5,397);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1}]}).to({state:[{t:this.instance_2}]},34).to({state:[]},1).wait(35));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({_off:true,regX:0,regY:0,scaleX:1,scaleY:1,rotation:0},34).wait(36));

	// Capa_8
	this.instance_3 = new lib.fondonegro();
	this.instance_3.setTransform(-1,0);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({_off:true},35).wait(35));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(564.5,383,566.5,386);
// library properties:
lib.properties = {
	id: '111CB1DD1A64D24CAAB176E4117C81DE',
	width: 1131,
	height: 768,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/cuchaviva_atlas_1.png?1630194360781", id:"cuchaviva_atlas_1"}
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
an.compositions['111CB1DD1A64D24CAAB176E4117C81DE'] = {
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