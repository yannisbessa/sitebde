/*!CK:2823795424!*//*1457643618,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["7\/jDk"]); }

__d("StarsRatableComposerCloseResetBehaviorEnum",[],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports={NONE:"none",RESET_TO_EMPTY:"reset_to_empty",RESET_TO_PREVIOUS:"reset_to_previous"};},null);
__d('StarsRatableBase',['Event','Arbiter','CSS','DOM','Parent','Run','StarsRatableComposerCloseResetBehaviorEnum'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();function h(i,j,k,l){this.root=i;this.freezeOnClick=j;this.stars=c('DOM').scry(i,'a');this.listeners=[c('Event').listen(this.root,'click',this._onClick.bind(this)),c('Event').listen(this.root,'mousemove',this._onMouseMove.bind(this)),c('Event').listen(this.root,'mouseout',this._onMouseOut.bind(this))];this.holdMouseMove=false;this.setRating(k);this.defaultRating=k;this.composerHideResetBehavior=l;this.composerArbiters=[];c('Run').onLeave(this.destroyListeners.bind(this));}h.init=function(i,j,k,l){return new h(i,j,k,l);};Object.assign(h.prototype,{_onClick:function(event){this.layerHides=0;var i=this._getStarIndexFromEvent(event);if(!i)return;this.setRating(i);if(this.freezeOnClick){this.freeze();}else this.holdMouseMove=true;if(this.composerHideResetBehavior!==c('StarsRatableComposerCloseResetBehaviorEnum').NONE)this.composerArbiters=[c('Arbiter').subscribe('saving_rating_from_composer',function(j,k){this.defaultRating=k;this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:k);this._unsubscribeComposerArbiters();}.bind(this)),c('Arbiter').subscribe('canceling_from_composer',function(){this.setRating(this.composerHideResetBehavior===c('StarsRatableComposerCloseResetBehaviorEnum').RESET_TO_EMPTY?0:this.defaultRating);this._unsubscribeComposerArbiters();}.bind(this))];event.prevent();},_unsubscribeComposerArbiters:function(){for(var i=0;i<this.composerArbiters.length;++i)c('Arbiter').unsubscribe(this.composerArbiters[i]);this.composerArbiters=[];},_onMouseMove:function(event){if(this.holdMouseMove)return;var i=this._getStarIndexFromEvent(event);if(!i)return;this.setStars(i,true);},_onMouseOut:function(event){this.holdMouseMove=false;this.updateStars();},_getStarIndexFromEvent:function(event){var i=c('Parent').byTag(event.getTarget(),'a');if(i)return this.stars.indexOf(i)+1;return 0;},setRating:function(i){this._rating=i;this.updateStars();},updateStars:function(){this.setStars(this._rating);},setStars:function(i,j){var k=j?'hoverStar':'fullStar',l=j?'fullStar':'hoverStar';for(var m=0;m<this.stars.length;++m){c('CSS').removeClass(this.stars[m],l);var n=m>=i;c('CSS').conditionClass(this.stars[m],k,!n);c('CSS').conditionClass(this.stars[m],'emptyStar',n);}},freeze:function(){c('CSS').addClass(this.root,'uiStarsRated');this.destroyListeners();},destroyListeners:function(){this.listeners.forEach(function(i){i&&i.remove();});this.listeners=[];}});b.StarsRatableBase=f.exports=h;},null);
__d('LocalContentClickLogger',['BanzaiLogger','EventListener'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();h.prototype.initClickThroughLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(){return this.sendLoggingRequest(j,k);}.bind(this));};h.prototype.initMenuClickLogging=function(i,j,k,l){'use strict';i.subscribe('itemclick',function(m,n){if(n.item.getValue()==j)this.sendLoggingRequest(k,l);}.bind(this));};h.prototype.initPrivacyMenuClickLogging=function(i,j,k){'use strict';c('EventListener').listen(i,'click',function(event){j.button_text=event.target.textContent;this.sendLoggingRequest(j,k);}.bind(this));};h.prototype.sendLoggingRequest=function(i,j){'use strict';if(j=='reviews'){c('BanzaiLogger').log('ReviewConsumptionLoggerConfig',i);}else if(j=='review_production'){c('BanzaiLogger').log('ReviewProductionLoggerConfig',i);}else if(j=='menus')c('BanzaiLogger').log('MenuConsumptionLoggerConfig',i);};function h(){'use strict';}f.exports=new h();},null);
__d("XReviewsTabUpdateHistogramController",["XController"],function a(b,c,d,e,f,g){c.__markCompiled&&c.__markCompiled();f.exports=c("XController").create("\/ajax\/pages\/review\/update_histogram\/",{page_id:{type:"Int"}});},null);
__d('ReviewsController',['csx','fbt','ix','Arbiter','AsyncRequest','DOM','Dialog','Event','Image.react','React','ReactDOM','Run','XReviewsTabUpdateHistogramController','ge'],function a(b,c,d,e,f,g,h,i,j){if(c.__markCompiled)c.__markCompiled();var k={},l={},m={},n={},o={},p={registerRevealProfanity:function(q,r,s){c('Event').listen(r,'click',function(){q.style.display='none';s.style.display='inline';});},registerButton:function(q,r){k[r]=k[r]||[];k[r].push(q);},registerViewerReview:function(q,r){l[r]=l[r]||[];l[r].push(q);},registerComposer:function(q,r){m[r]=m[r]||[];m[r].push(q);},registerToggle:function(q,r,s,t){n[q]=n[q]||[];n[q].push([r,s,t]);},registerStoryDeleteListener:function(q){c('Arbiter').subscribe('Story/delete',function(r,s){this._updateToggles(q,false);new (c('AsyncRequest'))(c('XReviewsTabUpdateHistogramController').getURIBuilder().setInt('page_id',q).getURI()).setMethod('GET').setReadOnly(true).send();}.bind(this));},addUserReview:function(q,r,s,t,u,v,w,x,y,z){this._updateState(true,q,r,s,t,u,v,w,x,y,z);},deleteUserReview:function(q,r,s,t,u,v){this._updateState(false,q,null,null,null,r,s,t,v,null,null);if(u){var w=document.getElementById(u),x=w.parentNode.parentNode;x.parentNode.removeChild(x);}},_updateState:function(q,r,s,t,u,v,w,x,y,z,aa){var ba;if(z){var ca=c('ge')('own_review_container');if(ca)c('DOM').setContent(ca,z);}else if(y){var da=c('ge')('viewer_own_review_tab');if(da)c('DOM').replace(da,y);}else if(q){var ea=c('ge')('page_reviews_tab_list');if(ea)c('DOM').prependContent(ea,t);var fa="div._yj3",ga=c('DOM').scry(document,fa)[0];if(ga)ga.parentNode.removeChild(ga);}var ha=l[r]||[];for(ba=0;ba<ha.length;ba++)c('DOM').remove(ha[ba]);this._updateToggles(r,q);var ia=m[r]||[];for(ba=0;ba<ia.length;ba++){var ja=ia[ba];if(q){ja.hide();}else{ja.clear();ja.show();}}var ka=k[r]||[];for(ba=0;ba<ka.length;ba++){var la=ka[ba],ma=c('DOM').find(la,'.uiButtonText'),na=c('DOM').find(la,'i'),oa,pa;if(q){oa=j('/images/icons/buttons/check.png');pa=i._("Un avis a d\u00e9j\u00e0 \u00e9t\u00e9 donn\u00e9");}else{oa=j('/images/icons/buttons/feature.png');pa=i._("Avis");}var qa=c('DOM').create('span'),ra={"padding-right":"5px"};c('ReactDOM').render(c('React').createElement('div',null,pa),ma);c('ReactDOM').render(c('React').createElement(c('Image.react'),{src:oa,style:ra}),qa);c('DOM').replace(na,qa);}if(q){var sa=c('DOM').scry(document,'#page_recommendations_browse_list')[0];if(sa)c('DOM').prependContent(sa,s);}if(v){var ta=c('ge')('page_reviews_pill_and_histogram');if(ta)c('DOM').replace(ta,v);}if(w){var ua=c('ge')('pages_inline_rating_summary');if(ua)c('DOM').replace(ua,w);}if(x){var va=c('ge')('pages_review_needy_place_card');if(va)c('DOM').replace(va,x);}if(aa){var wa=c('ge')('spotlight_reviews_card_list');if(wa)c('DOM').prependContent(wa,aa);}},registerPhotoUpload:function(q,r){c('Arbiter').subscribe('multi-upload/images-upload-completed/'+r,function(){o[r]=false;});c('Arbiter').subscribe('multi-upload/images-upload-start/'+r,function(){o[r]=true;});c('Event').listen(q,'submit',function(){if(o[r]){new (c('Dialog'))().setTitle(i._("Les photos sont en cours de t\u00e9l\u00e9chargement")).setSemiModal(true).setButtons(c('Dialog').OK).setBody(i._("Please wait until photo is uploaded before posting.")).show();return false;}return true;}.bind(this));},_updateToggles:function(q,r){var s=n[q]||[];for(var t=0;t<s.length;t++){var u=s[t],v=u[r?1:2];c('DOM').setContent(u[0],v);}}};c('Run').onLeave(function(){k={};l={};m={};n={};o={};});f.exports=p;},null);