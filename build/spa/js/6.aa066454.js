(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"2fbb":function(t,e,i){"use strict";i("fbc3")},"595f":function(t,e,i){},"713b":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-layout",{attrs:{view:"LHh Lpr lFf"}},[i("application-header",[i("template",{slot:"prepend"},[i("q-btn",{staticClass:"app-no-draggable",attrs:{flat:"",dense:"",round:"",icon:t.leftDrawerOpen?"menu_open":"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}})],1),i("template",{slot:"append"},[i("q-badge",{staticClass:"app-no-draggable cursor-pointer q-mx-sm q-px-sm q-py-xs non-selectable",attrs:{color:"page","text-color":"page"},on:{click:t.showAboutDialog}},[i("div",{attrs:{id:"version"}},[t._v(t._s("v"+t.publicVersion))]),i("q-separator",{staticClass:"q-mx-sm",attrs:{vertical:""}}),i("div",{attrs:{id:"commit"}},[t._v(t._s(t.publicSourceCommit))])],1)],1)],2),i("left-drawer",{ref:"leftDrawer",model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}}),i("q-page-container",{staticClass:"bg-page text-page"},[i("keep-alive",{attrs:{include:"Player,Index"}},[i("router-view")],1)],1)],1)},a=[],s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-drawer",{ref:"qDrawer",attrs:{value:t.value,side:"left","show-if-above":"",width:280,breakpoint:t.breakpoint},on:{input:function(e){return t.$emit("input",e)}}},[i("div",{staticClass:"full-height column items-stretch"},[i("div",{staticClass:"left-drawer-header bg-primary text-primary q-px-sm"},[i("q-img",{staticClass:"ab-logo-background ab-logo absolute",attrs:{src:t.abLogo,contain:""}}),i("corner")],1),i("q-scroll-area",{staticClass:"left-drawer-menu bg-page text-page q-pt-md"},[i("q-list",{staticClass:"non-selectable "},t._l(t.essentialLinks,(function(e){return i("EssentialLink",t._b({key:e.id||e.title},"EssentialLink",e,!1))})),1)],1)],1)])},o=[],r=(i("ddb0"),i("ddc3")),c=i.n(r),l=i("c83d"),u=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.children&&0!==t.children.length?t.children.length>0?i("div",[i("q-expansion-item",{attrs:{"expand-separator":"",icon:t.icon,label:t.titleString,caption:t.captionString,"default-opened":""}},t._l(t.children,(function(e){return i("EssentialLink",t._b({key:e.id||e.title,attrs:{level:.5}},"EssentialLink",e,!1))})),1)],1):t._e():i("q-item",{staticClass:"drawer-menu-item",attrs:{clickable:"",active:t.isActive,"inset-level":t.level,"active-class":"active-item"},on:{click:t.handleClick}},[t.icon?i("q-item-section",{attrs:{avatar:""}},[i("q-icon",{attrs:{name:t.icon}})],1):t._e(),i("q-item-section",[i("q-item-label",[t._v(t._s(t.titleString))]),i("q-item-label",{attrs:{caption:""}},[t._v(t._s(t.captionString))])],1)],1)},p=[],d={name:"EssentialLink",props:{title:{type:[String,Function],required:!0},caption:{type:[String,Function],default:void 0},icon:{type:String,default:""},link:{type:String,default:"#"},query:{type:Object,default:void 0},level:{type:Number,default:0},children:{type:Array,default(){return[]}}},data(){return{isActive:!1}},computed:{titleString(){return"string"===typeof this.title?this.title:this.title()},captionString(){if(this.caption)return"string"===typeof this.caption?this.caption:this.caption()}},mounted(){this.updateIsActive(this.$route)},watch:{$route(t){this.updateIsActive(t)}},methods:{updateIsActive(t){const e=t.path;let i=e===this.link;if(i&&this.query){const e=t.query;i=Object.entries(this.query).findIndex((([t,i])=>e[t]!==i))<0}this.isActive=i},handleClick(){this.query?this.$router.push({path:this.link,query:this.query}):this.$router.push(this.link)}}},h=d,m=(i("2fbb"),i("2877")),v=i("66e5"),b=i("4074"),g=i("0016"),f=i("0170"),_=i("3b73"),w=i("eebe"),$=i.n(w),q=Object(m["a"])(h,u,p,!1,null,"3fc7aef2",null),y=q.exports;$()(q,"components",{QItem:v["a"],QItemSection:b["a"],QIcon:g["a"],QItemLabel:f["a"],QExpansionItem:_["a"]});var k=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"corner-account q-py-xs"},[t.$store.state.account.authState?"signedIn"===t.$store.state.account.authState?[i("div",{staticClass:"row relative-position"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-icon",{staticStyle:{opacity:"0.8"},attrs:{size:"56px",name:"account_circle"}})],1),i("div",{staticClass:"column justify-center q-ml-md"},[i("div",{staticClass:"account-name row"},[i("div",[t._v(t._s(t.title))]),i("q-badge",{staticClass:"self-start q-ml-xs",attrs:{color:"positive","text-color":"positive",label:t.caption}})],1)]),i("div",{staticClass:"absolute-right"},[i("alphabiz-button",{attrs:{icon:"more_horiz","button-type":"icon",color:"primary",size:"0.8rem"}},[i("corner-menu",{on:{signOut:t.signOut,invite:t.invite}})],1)],1)],1)]:[i("div",{staticClass:"row"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-img",{staticClass:"logo",attrs:{src:t.abLogo,contain:"",width:"48px",height:"48px"}})],1),i("div",{staticClass:"column justify-center q-ml-md"},[i("alphabiz-button",{attrs:{label:t.caption,size:"0.8rem",color:"secondary"},on:{click:t.$amplify.showSignedOutDialog}})],1)],1)]:[i("div",{staticClass:"row"},[i("q-avatar",{staticClass:"account-avatar",attrs:{size:"64px"}},[i("q-spinner",{attrs:{size:"32px"}})],1),i("div",{staticClass:"column justify-center q-ml-md"},[i("div",{staticClass:"account-loading"},[t._v(t._s(t.$t("account_loading")))])])],1)]],2)},C=[],S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-menu",{attrs:{"auto-close":"","touch-position":"","transition-show":"jump-up","transition-hide":"jump-down"}},[i("q-list",{staticClass:"corner-menu__list",staticStyle:{"min-width":"160px"}},[i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$router.push("/account/settings")}}},[i("q-item-section",{attrs:{"data-cy":"account-settings-btn"}},[t._v("\n        "+t._s(t.$t("account_account_setting"))+"\n      ")])],1),i("q-separator"),t.showInvite?i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("invite")}}},[i("q-item-section",{attrs:{"data-cy":"invite-btn"}},[t._v(t._s(t.$t("account_invitation")))])],1):t._e(),i("q-separator"),i("q-item",{attrs:{clickable:""},on:{click:function(e){return t.$emit("signOut")}}},[i("q-item-section",{attrs:{"data-cy":"sign-out-btn"}},[t._v(t._s(t.$t("account_sign_out"))+"\n      ")])],1)],1)],1)},x=[],L={name:"CornerMenu",computed:{showInvite(){return this.$store.state.account.invitationCode&&this.$store.state.account.invitationCode.findIndex((t=>0===t.invitation_state))>=0}}},Q=L,I=i("4e73"),D=i("1c1c"),O=i("eb85"),A=Object(m["a"])(Q,S,x,!1,null,null,null),z=A.exports;$()(A,"components",{QMenu:I["a"],QList:D["a"],QItem:v["a"],QItemSection:b["a"],QSeparator:O["a"]});var T=i("48f4"),j={name:"Corner",data(){return{abLogo:i("a4a1")}},components:{CornerMenu:z},computed:{info(){return"signedIn"===this.$store.state.account.authState?this.$store.getters.accountUserInfo:null},title(){return this.info?this.info.nickname?this.info.nickname:this.info.emailVerified?this.info.email.split("@")[0]:this.info.phoneNumberVerified?this.info.phoneNumber:"???":this.$t("account_want_to_join")},caption(){return this.info?`Lv. ${this.info.accountLevel}`:this.$t("account_sign_up_now")}},methods:{signOut(){T["b"].showPositive("signed_out"),T["a"].updateState("signedOut"),(this.$route.path.startsWith("/account")||this.$route.path.startsWith("/credits"))&&this.$router.push("/"),T["a"].signOut().catch((()=>{}))},invite(){this.$router.push({path:"/account/settings",query:{call:"invite"}})}}},B=j,E=(i("a763"),i("cb32")),P=i("0d59"),M=i("58a81"),W=i("068f"),F=Object(m["a"])(B,k,C,!1,null,"8f223be4",null),H=F.exports;$()(F,"components",{QAvatar:E["a"],QSpinner:P["a"],QIcon:g["a"],QBadge:M["a"],QImg:W["a"]});var V=i("0613");const N=!c.a.prerelease(Object(l["a"])("version"));var R={name:"LeftDrawer",components:{EssentialLink:y,Corner:H},props:{value:Boolean,currentTab:String},data(){return{abLogo:i("a4a1"),breakpoint:1080,currentBehavior:null,resizeListener:null}},computed:{indexItem(){const t=t=>{const e=V["a"].getters[`get${t[0].toUpperCase()+t.slice(1)}TaskCount`];return`${this.$t(t)} (${e})`},e={id:"downloading",title:()=>t("downloading"),icon:"file_download",link:"/",query:{currentTab:"downloading"}},i={id:"uploading",title:()=>t("uploading"),caption:()=>V["a"].getters.isUploadingLoading?this.$t("loading"):null,icon:"file_upload",link:"/",query:{currentTab:"uploading"}},n={id:"downloaded",title:()=>t("downloaded"),icon:"done",link:"/",query:{currentTab:"downloaded"}};return{title:this.$t("home"),caption:this.$t("home_caption"),icon:"home",children:[e,i,n]}},accountSettingItem(){const t=[];return"signedIn"===this.$store.state.account.authState&&t.push({title:this.$t("account_account_setting"),icon:"account_circle",link:"/account/settings",caption:this.$t("account_setting_caption")}),t},disableDevTools(){return V["a"].getters.settings.disableDevTools},developmentItem(){const t=[];try{N&&this.disableDevTools||t.push({title:this.$t("development"),caption:this.$t("development_caption"),icon:"developer_mode",link:"/development"})}catch(e){}return t},essentialLinks(){const t={title:this.$t("player"),caption:this.$t("player_caption"),icon:"play_circle_filled",link:"/player"},e={title:this.$t("credits"),caption:this.$t("credits_caption"),icon:"savings",link:"/credits"},i={title:this.$t("basic_setting"),icon:"assignment",link:"/basicSetting",caption:this.$t("basic_caption")},n={title:this.$t("advanced"),icon:"build",link:"/advanceSetting",caption:this.$t("advanced")},a={title:this.$t("settings"),caption:this.$t("settings_caption"),icon:"settings",children:[...this.accountSettingItem,i,n]};return[this.indexItem,t,e,a,...this.developmentItem]}},methods:{onWindowResize(){this.updateCurrentBehavior()},updateCurrentBehavior(){const t=window.innerWidth<=this.breakpoint-8?"mobile":"desktop";t!==this.currentBehavior&&(this.currentBehavior=t,this.$refs.qDrawer&&this.$refs.qDrawer.__updateLocal("belowBreakpoint","mobile"===t))}},created(){this.updateCurrentBehavior(),this.resizeListener=t=>this.onWindowResize(t),window.addEventListener("resize",this.resizeListener)},beforeDestroy(){window.removeEventListener("resize",this.resizeListener)}},U=R,J=(i("cb75"),i("9404")),G=i("2c91"),K=i("4983"),X=i("b498"),Y=Object(m["a"])(U,s,o,!1,null,"049eeaa6",null),Z=Y.exports;$()(Y,"components",{QDrawer:J["a"],QImg:W["a"],QSpace:G["a"],QScrollArea:K["a"],QList:D["a"],QColor:X["a"]});var tt=i("7f32"),et=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("q-header",{staticClass:"bg-primary text-primary",staticStyle:{"padding-top":"30px"}},[i("q-toolbar",{staticStyle:{height:"50px"}},[t._t("prepend"),i("q-toolbar-title",{staticClass:"toolbar-title",attrs:{shrink:""}},[t._v("\n      "+t._s(t.applicationTitle)+"\n    ")]),i("q-space"),t._t("append")],2)],1)},it=[];const nt=i("ed08").isElectron();var at={name:"ApplicationHeader",props:{},data(){return{env:null}},created(){if(nt){Promise.resolve().then(i.t.bind(null,"bdb9",7)).then((({ipcRenderer:t})=>{this.windowControl=e=>t.sendSync("app_window_control",e)}));const t=navigator.userAgent.toLowerCase(),e=/macintosh|mac os x/i.test(t);this.env=e?"mac":"win"}},computed:{applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"}}},st=at,ot=i("e359"),rt=i("65c6"),ct=i("6ac5"),lt=Object(m["a"])(st,et,it,!1,null,"6bbe6222",null),ut=lt.exports;$()(lt,"components",{QHeader:ot["a"],QToolbar:rt["a"],QToolbarTitle:ct["a"],QSpace:G["a"]});const pt=i("ed08").isElectron();var dt={name:"MainLayout",components:{ApplicationHeader:ut,ApplicationBar:tt["a"],LeftDrawer:Z},data(){return{showAppBar:pt,currentTab:"downloading",leftDrawerOpen:!1}},computed:{leftDrawerBehavior(){return this.$refs.leftDrawer.currentBehavior},applicationTitle(){const t={Index:this.$route.query.currentTab,Player:"player",Credits:"credits",AccountSettings:"account_account_setting",BasicSettings:"basic_setting",AdvancedSettings:"advancedSettings",Development:"development"},e=this.$route.name;return e&&t[e]?this.$t(t[e]):"Alphabiz"},publicVersion(){return Object(l["a"])("version")},publicSourceCommit(){return Object(l["a"])("sourceCommit")}},methods:{showAboutDialog(){const t=this.$root.$children[0];t.$refs.about.about_visible()}}},ht=dt,mt=(i("89d3"),i("4d5a")),vt=i("9c40"),bt=i("09e3"),gt=i("7ff0"),ft=Object(m["a"])(ht,n,a,!1,null,null,null);e["default"]=ft.exports;$()(ft,"components",{QLayout:mt["a"],QBtn:vt["a"],QBadge:M["a"],QSeparator:O["a"],QPageContainer:bt["a"],QFooter:gt["a"],QToolbar:rt["a"]})},"89d3":function(t,e,i){"use strict";i("e87e")},a763:function(t,e,i){"use strict";i("e441")},cb75:function(t,e,i){"use strict";i("595f")},e441:function(t,e,i){},e87e:function(t,e,i){},fbc3:function(t,e,i){}}]);