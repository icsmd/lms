(function(){var requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(callback){setTimeout(callback,1000/60);},Circles=window.Circles=function(options){var elId=options.id;this._el=document.getElementById(elId);if(this._el===null)return;this._radius=options.radius||10;this._duration=options.duration===undefined?500:options.duration;this._value=0;this._maxValue=options.maxValue||100;this._text=options.text===undefined?function(value){return this.htmlifyNumber(value);}:options.text;this._strokeWidth=options.width||10;this._colors=options.colors||['#EEE','#F00'];this._svg=null;this._movingPath=null;this._wrapContainer=null;this._textContainer=null;this._wrpClass=options.wrpClass||'circles-wrp';this._textClass=options.textClass||'circle-text';var endAngleRad=Math.PI/180*270;this._start=-Math.PI/180*90;this._startPrecise=this._precise(this._start);this._circ=endAngleRad- this._start;this._generate().update(options.value||0);};Circles.prototype={VERSION:'0.0.5',_generate:function(){this._svgSize=this._radius*2;this._radiusAdjusted=this._radius-(this._strokeWidth/2);this._generateSvg()._generateText()._generateWrapper();this._el.innerHTML='';this._el.appendChild(this._wrapContainer);return this;},_setPercentage:function(percentage){this._movingPath.setAttribute('d',this._calculatePath(percentage,true));this._textContainer.innerHTML=this._getText(this.getValueFromPercent(percentage));},_generateWrapper:function(){this._wrapContainer=document.createElement('div');this._wrapContainer.className=this._wrpClass;this._wrapContainer.style.position='relative';this._wrapContainer.style.display='inline-block';this._wrapContainer.appendChild(this._svg);this._wrapContainer.appendChild(this._textContainer);return this;},_generateText:function(){this._textContainer=document.createElement('div');this._textContainer.className=this._textClass;var style={};for(var prop in style){this._textContainer.style[prop]=style[prop];}
this._textContainer.innerHTML=this._getText(0);return this;},_getText:function(value){if(!this._text)return'';if(value===undefined)value=this._value;value=parseFloat(value.toFixed(2));return typeof this._text==='function'?this._text.call(this,value):this._text;},_generateSvg:function(){this._svg=document.createElementNS('http://www.w3.org/2000/svg','svg');this._svg.setAttribute('xmlns','http://www.w3.org/2000/svg');this._svg.setAttribute('width',this._svgSize);this._svg.setAttribute('height',this._svgSize);this._generatePath(100,false,this._colors[0])._generatePath(1,true,this._colors[1]);this._movingPath=this._svg.getElementsByTagName('path')[1];return this;},_generatePath:function(percentage,open,color){var path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('fill','transparent');path.setAttribute('stroke',color);path.setAttribute('stroke-width',this._strokeWidth);path.setAttribute('d',this._calculatePath(percentage,open));this._svg.appendChild(path);return this;},_calculatePath:function(percentage,open){var end=this._start+((percentage/100)*this._circ),endPrecise=this._precise(end);return this._arc(endPrecise,open);},_arc:function(end,open){var endAdjusted=end- 0.001,longArc=end- this._startPrecise<Math.PI?0:1;return['M',this._radius+ this._radiusAdjusted*Math.cos(this._startPrecise),this._radius+ this._radiusAdjusted*Math.sin(this._startPrecise),'A',this._radiusAdjusted,this._radiusAdjusted,0,longArc,1,this._radius+ this._radiusAdjusted*Math.cos(endAdjusted),this._radius+ this._radiusAdjusted*Math.sin(endAdjusted),open?'':'Z'].join(' ');},_precise:function(value){return Math.round(value*1000)/ 1000;
},htmlifyNumber:function(number,integerPartClass,decimalPartClass){integerPartClass=integerPartClass||'circles-integer';decimalPartClass=decimalPartClass||'circles-decimals';var parts=(number+'').split('.'),html='<span class="'+ integerPartClass+'">'+ parts[0]+'</span>';if(parts.length>1){html+='.<span class="'+ decimalPartClass+'">'+ parts[1].substring(0,2)+'</span>';}
return html;},updateRadius:function(radius){this._radius=radius;return this._generate().update(true);},updateWidth:function(width){this._strokeWidth=width;return this._generate().update(true);},updateColors:function(colors){this._colors=colors;var paths=this._svg.getElementsByTagName('path');paths[0].setAttribute('stroke',colors[0]);paths[1].setAttribute('stroke',colors[1]);return this;},getPercent:function(){return(this._value*100)/ this._maxValue;
},getValueFromPercent:function(percentage){return(this._maxValue*percentage)/ 100;
},getValue:function()
{return this._value;},getMaxValue:function()
{return this._maxValue;},update:function(value,duration){if(value===true){this._setPercentage(this.getPercent());return this;}
if(this._value==value||isNaN(value))return this;if(duration===undefined)duration=this._duration;var self=this,oldPercentage=self.getPercent(),delta=1,newPercentage,isGreater,steps,stepDuration;this._value=Math.min(this._maxValue,Math.max(0,value));if(!duration){this._setPercentage(this.getPercent());return this;}
newPercentage=self.getPercent();isGreater=newPercentage>oldPercentage;delta+=newPercentage%1;steps=Math.floor(Math.abs(newPercentage- oldPercentage)/ delta);
stepDuration=duration/steps;(function animate(lastFrame){if(isGreater)
oldPercentage+=delta;else
oldPercentage-=delta;if((isGreater&&oldPercentage>=newPercentage)||(!isGreater&&oldPercentage<=newPercentage))
{requestAnimFrame(function(){self._setPercentage(newPercentage);});return;}
requestAnimFrame(function(){self._setPercentage(oldPercentage);});var now=Date.now(),deltaTime=now- lastFrame;if(deltaTime>=stepDuration){animate(now);}else{setTimeout(function(){animate(Date.now());},stepDuration- deltaTime);}})(Date.now());return this;}};Circles.create=function(options){return new Circles(options);};$.fn.fitText=function(kompressor,options){var compressor=kompressor||1,settings=$.extend({'minFontSize':Number.NEGATIVE_INFINITY,'maxFontSize':Number.POSITIVE_INFINITY},options);return this.each(function(){var $this=$(this);var resizer=function(){$this.css('font-size',Math.max(Math.min($this.width()/ (compressor*10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
};resizer();$(window).on('resize.fittext orientationchange.fittext',resizer);});};})();