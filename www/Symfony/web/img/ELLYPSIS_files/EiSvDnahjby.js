/*!CK:3017370957!*//*1456774184,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["gbnuP"]); }

__d('LazyPagesInsightsPostDetailsDialog.react',['cx','fbt','Arbiter','BootloadedComponent.react','DialogExpansion','FeedPlaceHolderStory.react','JSResource','LayerFadeOnHide','React','PagesInsightsDataDispatcher','PagesInsightsDataPayloadTypes','XUIDialog.react','XUIDialogBody.react','XUIDialogTitle.react','XUISpinner.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k=c('React').createClass({displayName:'LazyPagesInsightsPostDetailsDialog',propTypes:{pageID:j.string.isRequired,postFeedObjectID:j.string.isRequired},componentDidMount:function(){c('PagesInsightsDataDispatcher').dispatch({pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID,type:c('PagesInsightsDataPayloadTypes').REQUEST_POST_DETAILS_DATA});c('Arbiter').subscribe('Story/delete',function(event,l){if(l===this.props.postFeedObjectID)this.refs.dialog.layer.hide();}.bind(this));},render:function(){var l=c('React').createElement('div',{className:"_19vn"},c('React').createElement('div',{className:"_2pi0 _4c9a"},c('React').createElement('div',{className:"_4c9b"},c('React').createElement(c('FeedPlaceHolderStory.react'),null))),c('React').createElement('div',{className:"_4c9c"},c('React').createElement('div',{className:"_2ph_ _4mzv"},c('React').createElement(c('XUISpinner.react'),{size:'large'}))));return (c('React').createElement(c('XUIDialog.react'),{behaviors:{DialogExpansion:c('DialogExpansion'),LayerFadeOnHide:c('LayerFadeOnHide')},ref:'dialog',shown:true,width:961},c('React').createElement(c('XUIDialogTitle.react'),null,i._("Infos sur la publication")),c('React').createElement(c('XUIDialogBody.react'),{className:"_4hcm",useCustomPadding:true},c('React').createElement(c('BootloadedComponent.react'),{bootloadLoader:c('JSResource')('PagesInsightsPostDetails.react'),bootloadPlaceholder:l,pageID:this.props.pageID,postFeedObjectID:this.props.postFeedObjectID}))));}});f.exports=k;},null);
__d('LazyHubblePostDrillDown.react',['cx','fbt','AsyncRequest','HubbleContext','InsightsLoadingIndicator.react','JSResource','LayerPage.react','LayerPageContent.react','LazyPagesInsightsPostDetailsDialog.react','PageInsightsPostDataType','PagesEventType','PagesInsightsGating','React','ReactLayeredComponentMixin','XPageAdminHomepagePanelLoggingController','XUICloseButton.react','XUIGrayText.react'],function a(b,c,d,e,f,g,h,i){if(c.__markCompiled)c.__markCompiled();var j=c('React').PropTypes,k={video:c('JSResource')('HubbleVideoPostDrillDown'),post:c('JSResource')('HubbleDefaultPostDrillDown')},l=c('React').createClass({displayName:'LazyHubblePostDrillDown',mixins:[c('ReactLayeredComponentMixin')],props:{drilldownProps:j.object,shown:j.bool,onClose:j.func,onToggle:j.func},getInitialState:function(){return {Component:null};},componentWillMount:function(){this._getDrillDownComponent();},componentDidUpdate:function(m){if(m.drilldownProps!==this.props.drilldownProps)this._getDrillDownComponent();},renderLayers:function(){if(!this.props.shown)return null;if(c('PagesInsightsGating').hasPostDetailsDialogRefresh&&this.props.drilldownProps.postIdentifier&&this.props.drilldownProps.postType!=='video'&&this.props.drilldownProps.postType!=='sharedVideo')return {postDetailsDialog:c('React').createElement(c('LazyPagesInsightsPostDetailsDialog.react'),{onToggle:this.props.onToggle,pageID:this.props.drilldownProps.postID.split('_')[0],postFeedObjectID:this.props.drilldownProps.postIdentifier,shown:true})};var m=this.state.Component,n;if(m){n=c('React').createElement(m,this.props.drilldownProps);}else n=c('React').createElement(c('InsightsLoadingIndicator.react'),null);return {modal:c('React').createElement(c('LayerPage.react'),{key:'test',layerRootClass:"_55vx",onToggle:this.props.onToggle,shown:true,width:915},c('React').createElement(c('LayerPageContent.react'),{useCustomPadding:true,key:'reuse'},c('React').createElement('div',{className:"_55m4"},c('React').createElement(c('XUICloseButton.react'),{className:"_55ng",onClick:this.props.onClose}),c('React').createElement('div',null,i._("Infos sur la publication"),c('React').createElement(c('XUIGrayText.react'),{className:"_2kn"},i._("Les statistiques rapport\u00e9es peuvent pr\u00e9senter un d\u00e9calage par rapport \u00e0 ce qui est affich\u00e9 sur les publications")))),n))};},_setDrilldownComponent:function(m){m.load().done(function(q){this.setState({Component:q});}.bind(this));var n=this.props.drilldownProps.postID.split('_'),o=n[0],p=c('XPageAdminHomepagePanelLoggingController').getURIBuilder();new (c('AsyncRequest'))().setURI(p.getURI()).setData({event_type:c('PagesEventType').POST_DETAIL_VIEW,page_id:o,additional_data:{post_id:this.props.drilldownProps.postID,post_type:this.props.drilldownProps.postType,post_status_type:this.props.drilldownProps.postStatusType,is_admin:true,ref:this.props.ref}}).send();},_getDrillDownComponent:function(){if(!this.props.drilldownProps.postIdentifier)return;var m=c('HubbleContext').get('minVideoInsightsCreationTime'),n=this.props.drilldownProps.postCreatedTime>=m;if(!n){if(c('PagesInsightsGating').hasPostDetailsDialogRefresh)return;this._setDrilldownComponent(k.post);return;}switch(this.props.drilldownProps.postType){case c('PageInsightsPostDataType').VIDEO:case c('PageInsightsPostDataType').SHARED_VIDEO:this._setDrilldownComponent(k.video);break;default:if(!c('PagesInsightsGating').hasPostDetailsDialogRefresh)this._setDrilldownComponent(k.post);}},render:function(){return null;}});f.exports=l;},null);
__d('AYMTHomepagePanelPostViewWrap.react',['ApiClient','Event','HubbleContext','LazyHubblePostDrillDown.react','React'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h=c('React').PropTypes,i=c('React').createClass({displayName:'AYMTHomepagePanelPostViewWrap',propTypes:{context:h.object,link:h.object,post:h.object},componentWillMount:function(){c('Event').listen(this.props.link,'click',function(){c('ApiClient').setClientID(this.props.context.appID);c('ApiClient').setAccessToken(this.props.context.accessToken);c('HubbleContext').setContext(this.props.context);this.handlePost();return false;}.bind(this));},getInitialState:function(){return {drilldownProps:{},showDrillDown:false};},handlePost:function(){if(!this.props.post)return;this.setState({drilldownProps:{postCreatedTime:this.props.post.created_time,postID:this.props.post.id,postIdentifier:this.props.post.identifier,postType:this.props.post.type,postStatusType:this.props.post.status_type,ref:'AYMT_homepage_panel'},showDrillDown:true});},onClose:function(){this.onToggleDrillDown(false);},onToggleDrillDown:function(j){if(!j&&this.state.showDrillDown)this.setState({drilldownProps:{},showDrillDown:false});},render:function(){return (c('React').createElement(c('LazyHubblePostDrillDown.react'),{drilldownProps:this.state.drilldownProps,shown:this.state.showDrillDown,onClose:this.onClose,onToggle:this.onToggleDrillDown}));}});f.exports=i;},null);
__d('AYMTRefreshElement',['csx','CSS','URI','DOM','DOMQuery','ge'],function a(b,c,d,e,f,g,h){if(c.__markCompiled)c.__markCompiled();f.exports={init:function(i,j){i.subscribe('itemclick',function(){c('CSS').addClass(j,'async_saving');});},initObjectSelector:function(i,j){i.subscribe('itemclick',function(){var k=i.getFocusedItem(),l=new (c('URI'))(k._data.ajaxify).getQueryData(),m=l.promoted_object,n=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2eka img")[0],o=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2ekc a")[0],p;if(o!==undefined){p=new (c('URI'))(o.dataset.hovercard);p.setQueryData({id:m});c('DOM').setAttributes(o,{'data-hovercard':p.toString()});c('DOM').setAttributes(o,{href:'#'});}else o=c('DOMQuery').scry(c('ge')('aymt_object_section'),"._2ekc span")[0];c('DOM').setContent(o,k._data.label);if(n!==undefined){if(p===undefined){p=new (c('URI'))(n.parentNode.dataset.hovercard);p.setQueryData({id:m});}c('DOM').setAttributes(n,{src:k._data.iconsrc});c('DOM').setAttributes(n.parentNode,{'data-hovercard':p?p.toString():'#',href:'#'});}c('CSS').addClass(j,'async_saving');});},initTimeRangeSelector:function(i,j){i.subscribe('itemclick',function(){var k=i.getFocusedItem(),l=c('DOMQuery').scry(c('ge')('aymt_campaign_section'),"span ._2ekc")[0];c('DOM').setContent(l,k._data.label);c('CSS').addClass(j,'async_saving');});},fromLink:function(i,j){i.onclick=function(){c('CSS').addClass(j,'async_saving');};}};},null);
__d('AYMTHomepagePanelLogger',['Event','BanzaiLogger'],function a(b,c,d,e,f,g){if(c.__markCompiled)c.__markCompiled();var h={init:function(i,j){c('Event').listen(i,'click',function(event){c('BanzaiLogger').log('AYMTHomepagePanelLoggerConfig',j);});}};f.exports=h;},null);