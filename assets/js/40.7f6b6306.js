(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{346:function(a,t,s){"use strict";s.r(t);var r=s(7),e=Object(r.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[a._v("首先声明:本文涉及的一切链接,软件仅限于学习和研究使用。")]),a._v(" "),t("h3",{attrs:{id:"前言"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[a._v("#")]),a._v(" 前言")]),a._v(" "),t("p",[a._v("前段时间，我的位于腾讯云的香港服务器经常出现IP被禁封问题，导致我的无法科学上网。")]),a._v(" "),t("p",[a._v("整个过程也多次请求腾讯客服更换IP,结果却总是不尽人意,新IP坚持不了3天就凉透了。")]),a._v(" "),t("p",[a._v("于是我开始思考我服务的稳定性,重新搭建服务。")]),a._v(" "),t("h3",{attrs:{id:"掉坑里了"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#掉坑里了"}},[a._v("#")]),a._v(" 掉坑里了")]),a._v(" "),t("p",[a._v("于是我重新找了台小白鼠机器运行起了我的"),t("a",{attrs:{href:"https://raw.githubusercontent.com/chansanya/filebox/master/v2ray/v2ray.sh",target:"_blank",rel:"noopener noreferrer"}},[a._v("一键脚本"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("看这一道道命令从眼前闪过,想到我即将拥有一台崭新的VPS,我情不自禁的打开腾讯云点退款。")]),a._v(" "),t("p",[a._v("然后命令结束:Unit v2ray.service could not be found ！！！")]),a._v(" "),t("p",[a._v("这怎么就失败了呢,往上一翻日志: 404 ❔ ❔ ❔")]),a._v(" "),t("p",[a._v("定位代码")]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[a._v("    "),t("span",{pre:!0,attrs:{class:"token function-name function"}},[a._v("installV2ray")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /tmp/v2ray\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" /tmp/v2ray\n    "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("DOWNLOAD_LINK")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://github.com/v2fly/v2ray-core/releases/download/'),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${NEW_VER}")]),a._v("/v2ray-linux-"),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$(")]),a._v("archAffix"),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v(")")])]),a._v('.zip"')]),a._v("\n    colorEcho "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$BLUE")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" 下载V2Ray: '),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOWNLOAD_LINK}")]),a._v('"')]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-L")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-H")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Cache-Control: no-cache"')]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-o")]),a._v(" /tmp/v2ray/v2ray.zip "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("${DOWNLOAD_LINK}")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("if")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$?")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("then")]),a._v("\n        colorEcho "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$RED")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" 下载V2ray文件失败，请检查服务器网络设置"')]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("fi")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-p")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/etc/v2ray'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/var/log/v2ray'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("&&")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("\\")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" /tmp/v2ray/v2ray.zip "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-d")]),a._v(" /tmp/v2ray\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" /usr/bin/v2ray\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /tmp/v2ray/v2ctl /usr/bin/v2ray/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /tmp/v2ray/v2ray /usr/bin/v2ray/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" /tmp/v2ray/geo* /usr/bin/v2ray/"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("chmod")]),a._v(" +x "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/usr/bin/v2ray/v2ray'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'/usr/bin/v2ray/v2ctl'")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("||")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        colorEcho "),t("span",{pre:!0,attrs:{class:"token variable"}},[a._v("$RED")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('" V2ray安装失败"')]),a._v("\n        "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("exit")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /etc/systemd/system/v2ray.service\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-rf")]),a._v(" /etc/systemd/system/multi-user.target.wants/v2ray.service\n    "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("wget")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-O")]),a._v(" /etc/systemd/system/v2ray.service https://raw.githubusercontent.com/hijkpw/scripts/master/v2ray.service\n    systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("enable")]),a._v(" v2ray.service\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n\n")])])]),t("p",[a._v("原来是 https://raw.githubusercontent.com/hijkpw/scripts/master/v2ray.service 这个地址不存在。\n其实我很不理解，为啥要删除要用这个 v2ray.service,难道有魔改嘛？")]),a._v(" "),t("p",[a._v("想了想大佬的世界不理解正常，于是屁颠屁颠的到v2ray-core 去搞了个安装包。本来事情到这里也就结束了，结果选择协议时错把VLESS当做了VMESS协议。\n"),t("a",{attrs:{href:"https://www.v2fly.org/config/protocols/dns.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("协议区别"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("结果就是部署完了，客户端没反应,Google 还是回复我令人痛心的:ERR_CONNECTION_TIMED_OUT")]),a._v(" "),t("h3",{attrs:{id:"爬坑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#爬坑"}},[a._v("#")]),a._v(" 爬坑")]),a._v(" "),t("p",[a._v("于是我打开了GitHub,进入社区，混进了Tg群，找到了一个管理测试可用的"),t("a",{attrs:{href:"tiny.one/one4all"}},[a._v("脚本")])]),a._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("bash")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("curl")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-ksL")]),a._v("  tiny.one/one4all"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("p",[a._v("理智的我当然不会盲目执行了，顺着这个地址，我扒到了归档的"),t("a",{attrs:{href:"https://github.com/oneforallofall/oneforall",target:"_blank",rel:"noopener noreferrer"}},[a._v("github"),t("OutboundLink")],1)]),a._v(" "),t("p",[a._v("一看这啥啊 😱😱😱")]),a._v(" "),t("p",[a._v("trojan-go, v2ray ,xray ,hysteria,瞬间触及到了我的知识盲区.")]),a._v(" "),t("p",[a._v("好吧！作为一个专一的男人，我选择V2ray。")]),a._v(" "),t("p",[a._v("什么V2ray 高版本不支持？")]),a._v(" "),t("p",[a._v("VLESS？那对不起，以后不要联系了,我怕xray误会。")]),a._v(" "),t("p",[a._v("嗯。。。VLESS不加密？")]),a._v(" "),t("p",[a._v("行吧，那我上xtls。")]),a._v(" "),t("p",[a._v("你朋友用的客户端是V2ray的")]),a._v(" "),t("p",[a._v("好说，去升级。。。")]),a._v(" "),t("p",[a._v("于是方案定下来了: xray+vless+tcp+xtls 。这么一大堆名称，我自己都吓一跳")]),a._v(" "),t("p",[a._v("对了还得搞对证书和域名做伪装。")]),a._v(" "),t("p",[a._v("好吧，一上午过去了。服务搭建好了，但是有两个。一个个切也不是办法，咋办呢！")]),a._v(" "),t("p",[a._v("诶，那就学人家机场搞订阅啊。")]),a._v(" "),t("p",[a._v("嗯，行。。怎么搞不会，不会就去学啊。")]),a._v(" "),t("h1",{attrs:{id:"订阅"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#订阅"}},[a._v("#")]),a._v(" 订阅")]),a._v(" "),t("p",[a._v("研究了下，订阅的机制是，通过解析一个链接的返回，达到更新节点的目的。不同的客户端解析方式不一样。")]),a._v(" "),t("p",[a._v("别人我不管，我用的V2rayN和Shadowrocket,可解析VMESS,和VLESS链接")]),a._v(" "),t("p",[a._v("附:")]),a._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/XTLS/Xray-core/issues/91",target:"_blank",rel:"noopener noreferrer"}},[a._v("VLESS编码"),t("OutboundLink")],1)]),a._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/2dust/v2rayN/wiki/%E5%88%86%E4%BA%AB%E9%93%BE%E6%8E%A5%E6%A0%BC%E5%BC%8F%E8%AF%B4%E6%98%8E(ver-2)",target:"_blank",rel:"noopener noreferrer"}},[a._v("VLESS编码"),t("OutboundLink")],1)]),a._v(" "),t("li",[a._v("订阅内容组 N个编码地址字用 换行符(\\n)分割，然后整体Base64编码")])]),a._v(" "),t("p",[t("strong",[a._v("伪代码")])]),a._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v(' String content = VLESS1+ "\\n" +  VLESS1 + "\\n" +  VLESS1 + "\\n" +  VMESS1+ "\\n" +  VMESS2;\n String return = Bsse64(content);\n')])])]),t("h3",{attrs:{id:"结语"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[a._v("#")]),a._v(" 结语")]),a._v(" "),t("p",[a._v("事情到这里，差不多就结束了。有时间再自己搭一个控制台管理吧。")])])}),[],!1,null,null,null);t.default=e.exports}}]);