/*!CK:3683620063!*//*1456182674,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["FN\/BI"]); }

__d('P2PSenderNUXChatThreadBanner.react',['fbt','P2PBannerType','P2PPaymentLoggerEventFlow','P2PSendMoneyNUXChatThreadBanner.react','React'],function a(b,c,d,e,f,g,h){'use strict';if(c.__markCompiled)c.__markCompiled();var i=c('React').PropTypes,j=c('React').createClass({displayName:'P2PSenderNUXChatThreadBanner',propTypes:{threadID:i.string.isRequired},render:function(){return (c('React').createElement(c('P2PSendMoneyNUXChatThreadBanner.react'),{bannerType:c('P2PBannerType').SENDER_NUX,bodyText:h._("C\u2019est gratuit et s\u00e9curis\u00e9."),buttonText:h._("Commencer"),loggerEventFlow:c('P2PPaymentLoggerEventFlow').UI_FLOW_SENDER_NUX_CHAT_THREAD_BANNER,threadID:this.props.threadID,titleText:h._("Vous pouvez maintenant envoyer de l\u2019argent\u00a0!")}));}});f.exports=j;},null);