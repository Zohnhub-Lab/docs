import{_ as c,a as s}from"./crypt-demo2-7RJJjsGz.js";import{_ as h,r,o as p,c as u,b as e,a as l,e as t,w as _,f as n}from"./app--VcHmvhe.js";const g={},f=n('<h1 id="crypt-加密" tabindex="-1"><a class="header-anchor" href="#crypt-加密" aria-hidden="true">#</a> Crypt(加密)</h1><h2 id="介绍" tabindex="-1"><a class="header-anchor" href="#介绍" aria-hidden="true">#</a> <strong>介绍</strong></h2><p><code>Crypt</code>是什么？</p><p>相当于一个两层密码的保险箱加密了，除了你自己有钥匙能打开别人谁也打不开，配置中的密码和盐值相当于钥匙</p><p>当然还有密码和盐值你自己也要保管好，如果丢失了你自己也打不开，除非你自己穷举或者猜出正确密码。</p><div class="hint-container tip"><p class="hint-container-title">使用提醒</p><ol><li>如果你不了解想要使用本 加/解密 驱动请仔细查看一下每个文字</li><li>请先在本地使用了解一下再搬到生产环境中部署使用，否则数据丢失自行承担！</li><li>数据丢失100%的因为修改了配置文件导致的，如果已经上传了文件请勿再修改配置文件，否则数据丢失自行承担！</li></ol><p><mark>再次提醒请仔细阅读文档使用，否则数据丢失自行承担！</mark></p></div><h2 id="使用说明" tabindex="-1"><a class="header-anchor" href="#使用说明" aria-hidden="true">#</a> <strong>使用说明</strong></h2><p>我们只需要在现在已经挂载的驱动(网盘)中新建一个<strong>空白文件夹</strong>，名称随意，准备给加密(Crypt)驱动使用</p><p>然后把我们新建的空白文件夹名称填写到我们新建的<code>Crypt</code>驱动配置中的<code>加密后文件存储路径</code>选项</p><p>例如：</p><ul><li>我们原本的驱动路径是<code>/123</code>，我们在123这个目录下新建了一个<code>air空白文件夹</code></li><li>我们就要在<code>Crypt</code>驱动的<code>加密后文件存储路径</code>选项填写<code>/123/air</code></li><li>我们上传文件需要在 新建的<code>Crypt</code>驱动目录进行上传文件才会进行加密 <ul><li>加密文件我们去 <strong><code>加密后文件存储路径</code></strong> 查看会看到加密后的文件，无法正常打开查看</li><li>如果要打开查看，我们需要在挂载的<code>Crypt</code>驱动文件夹查看</li></ul></li></ul><h2 id="填写示例" tabindex="-1"><a class="header-anchor" href="#填写示例" aria-hidden="true">#</a> <strong>填写示例</strong></h2><p>如果你不懂如何配置，可以使用如下最简单默认的配置，具体每个配置的作用会在下方详细说明</p><p><img src="'+c+'" alt="image-20230721230425597"></p><div class="hint-container danger"><p class="hint-container-title">请仔细阅读注意事项 --- 非常重要</p><p>再次重申一下请勿嫌啰嗦</p><p>在配置中一经填写保存后，请勿修改，请勿修改，请勿修改！！！重要的事情说三遍</p><p><a href="#%E5%AF%86%E7%A0%81"><strong>密码</strong></a> 和 <a href="#%E7%9B%90%E5%80%BC"><strong>盐值</strong></a> 请必须记住，点击保存后这两个选项就会进行加密无法明文显示（上图明文显示是因为还未保存）</p><ul><li><strong>如果在没有上传文件之前密码忘记了可以重新填写密码配置</strong></li></ul><hr><p>如果你还没有在Crypt驱动內上传文件，可以修改配置，否则请勿修改！！</p><p>如果在已有数据的情况下更改配置，<code>Crypt</code>尽力过滤非法文件/目录，但非法数据不会被删除</p><ul><li><strong>非法文件/目录指的是另一种配置生成的加密数据</strong></li></ul></div>',15),m={class:"hint-container warning"},x=e("p",{class:"hint-container-title"},"注意",-1),b=e("p",null,[t("关于加密组合一共有5种方式，（实际上是6种）因为只开启"),e("strong",null,"文件夹加密，文件名不加密"),t("这样的配置不生效（下面举例的第一种）")],-1),y=e("code",null,"Off",-1),E=e("code",null,"true",-1),C=e("code",null,"Off",-1),v=e("code",null,"false",-1),B=e("code",null,"标准",-1),k=e("code",null,"false",-1),A=e("code",null,"标准",-1),F=e("code",null,"true",-1),R=e("code",null,"混淆",-1),K=e("code",null,"false",-1),N=e("code",null,"混淆",-1),q=e("code",null,"true",-1),J=e("br",null,null,-1),L=e("h3",{id:"文件名加密",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#文件名加密","aria-hidden":"true"},"#"),t(),e("i",{class:"fa-solid fa-files",style:{color:"#409eff"}}),t(),e("strong",null,"文件名加密")],-1),W=e("p",null,"如果看不懂可以使用默认配置",-1),S=n("<li><p>1.<strong>默认为 <code>Off关闭</code>状态</strong></p><ul><li>文件名是否加密，作用于上传后文件名进行加密</li></ul></li><li><p>2.<strong>标准加密</strong></p><ul><li>标准加密安全等级高<sup>(荐)</sup></li></ul></li><li><p>3.<strong>简单混淆</strong></p><ul><li>安全等级很低 ，对长文件名友好，但是对于中文文件名会生成特殊字符，某些网盘存储不支持特殊字符。</li></ul></li>",3),U=e("p",null,[t("下图中左侧的加密了的 "),e("a",{href:"#%E5%8A%A0%E5%AF%86%E5%90%8E%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E8%B7%AF%E5%BE%84"},[e("strong",null,"加密后文件存储路径")]),t("，右侧是解密后的"),e("code",null,"Crypt"),t("驱动可以查看文件")],-1),M=e("strong",null,".bin",-1),P=e("code",null,"Crypt",-1),T=n('<p><img src="'+s+'" alt="image-20230721230425597"></p><br><h3 id="文件夹名加密" tabindex="-1"><a class="header-anchor" href="#文件夹名加密" aria-hidden="true">#</a> <i class="fa-solid fa-folder-open" style="color:#409eff;"></i> <strong>文件夹名加密</strong></h3><p>使用启用文件夹加密，默认为 <code>false</code> 未启用，看不懂可以不启用，</p><p>开启文件夹加密的同时必须选择一项<strong>文件名加密</strong>否则单独只开文件夹加密不生效</p>',5),z=e("a",{href:"#%E5%8A%A0%E5%AF%86%E5%90%8E%E6%96%87%E4%BB%B6%E5%AD%98%E5%82%A8%E8%B7%AF%E5%BE%84"},[e("strong",null,"加密后文件存储路径")],-1),D=e("code",null,"crypt",-1),V=n('<p><img src="'+s+'" alt="image-20230721230425597"></p><br><h3 id="加密后文件存储路径" tabindex="-1"><a class="header-anchor" href="#加密后文件存储路径" aria-hidden="true">#</a> <i class="fa-solid fa-cloud-binary" style="color:#409eff;"></i> <strong>加密后文件存储路径</strong></h3><p>也就是存储加密后的文件，可以是AList能挂载的驱动里面任意一款驱动</p><br><h3 id="密码" tabindex="-1"><a class="header-anchor" href="#密码" aria-hidden="true">#</a> <i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>密码</strong></h3><p>就是字面意思密码</p><h3 id="盐值" tabindex="-1"><a class="header-anchor" href="#盐值" aria-hidden="true">#</a> <i class="fa-solid fa-lock-keyhole" style="color:#409eff;"></i> <strong>盐值</strong></h3><p>也可以理解为第二个密码</p><br><h3 id="加密后缀" tabindex="-1"><a class="header-anchor" href="#加密后缀" aria-hidden="true">#</a> <strong>加密后缀</strong></h3><p>高级选项，默认为<code>.bin</code>，可自定义必须要以<code>.</code>开头，例如 .abc .aaa .psd 这样的后缀</p><p>如果开启了文件名加密<code>加密后缀</code>就不会显示</p><br><h3 id="文件名编码" tabindex="-1"><a class="header-anchor" href="#文件名编码" aria-hidden="true">#</a> <strong>文件名编码</strong></h3><p>高级选项，非专业人士请勿修改，默认为 <strong><code>Base64</code></strong>，但是除了 <strong><code>Base64</code></strong> 之外的选项并没有测试，遇到问题需要自己解决。</p>',16),w={href:"https://github.com/alist-org/alist/issues/5109",target:"_blank",rel:"noopener noreferrer"},I={href:"https://github.com/alist-org/alist/issues/5080",target:"_blank",rel:"noopener noreferrer"},O=e("br",null,null,-1),Q=e("h2",{id:"高级用法",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#高级用法","aria-hidden":"true"},"#"),t(),e("strong",null,"高级用法")],-1),X=e("p",null,[t("高级用法仅适用于对 "),e("strong",null,[e("code",null,"Rclone")]),t(" 了解的人")],-1),Z=e("strong",null,[e("code",null,"Rclone")],-1),j={href:"https://rclone.org/crypt",target:"_blank",rel:"noopener noreferrer"},G=e("strong",null,"Rclone Crypt 文档",-1),H=n('<p>注意，<code>Alist Crypt</code>驱动默认使用了 <code>filename_encoding = base64</code> ,如果使用Rclone请在高级设置中配置此条。（理由：对长文件名更友好一些）</p><p>因为alist内部并没有对大小写<strong>不敏感</strong>提供支持，所以如果使用了大小写不敏感的文件系统可能会出问题，例如：windows上使用本地存储驱动，再使用Crypt</p><br><h2 id="注意事项" tabindex="-1"><a class="header-anchor" href="#注意事项" aria-hidden="true">#</a> <strong>注意事项</strong></h2>',4),Y=e("br",null,null,-1),$=e("h2",{id:"默认使用的下载方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#默认使用的下载方式","aria-hidden":"true"},"#"),t(),e("strong",null,"默认使用的下载方式")],-1);function ee(te,le){const o=r("Badge"),i=r("ExternalLinkIcon"),d=r("RouterLink"),a=r("Mermaid");return p(),u("div",null,[f,e("div",m,[x,b,e("ol",null,[e("li",null,[l(o,{text:"无效",color:"red",vertical:"middle"}),t(" 文件名 "),y,t("，文件夹 "),E]),e("li",null,[l(o,{text:"有效",type:"tip",vertical:"middle"}),t(" 文件名 "),C,t("，文件夹 "),v]),e("li",null,[l(o,{text:"有效",type:"tip",vertical:"middle"}),t(" 文件名 "),B,t("，文件夹 "),k]),e("li",null,[l(o,{text:"有效",type:"tip",vertical:"middle"}),t(" 文件名 "),A,t("，文件夹 "),F]),e("li",null,[l(o,{text:"有效",type:"tip",vertical:"middle"}),t(" 文件名 "),R,t("，文件夹 "),K]),e("li",null,[l(o,{text:"有效",type:"tip",vertical:"middle"}),t(" 文件名 "),N,t("，文件夹 "),q])])]),J,L,W,e("ul",null,[S,e("li",null,[U,e("ul",null,[e("li",null,[t("如果不开启"),l(o,{text:"文件名",type:"tip",vertical:"middle"}),t("加密，就会显示"),l(o,{text:"左上角",color:"rgb(216,100,69)",vertical:"middle"}),t("那样的是源文件后面新增一个加密的后缀（xxxxx.xxx "),M,t(" ）(后缀名可以自定义不一定是.bin)")]),e("li",null,[t("如果开启"),l(o,{text:"文件名",type:"tip",vertical:"middle"}),t("加密，就会显示"),l(o,{text:"左下角",color:"rgb(78,130,184)",vertical:"middle"}),t("那样将文件名也进行了加密混淆没有了后缀和原文件名，别人就无法知道是什么了，但是可以在"),P,t("驱动（"),l(o,{text:"右侧展示的文件夹",color:"rgb(0.0.0.0)",vertical:"middle"}),t("）中看到真实文件名")])])])]),T,e("ul",null,[e("li",null,[t("下图中左侧的加密了的 "),z,t("，右侧是解密后的"),D,t("驱动可以查看文件 "),e("ul",null,[e("li",null,[t("如果不开启"),l(o,{text:"文件夹",type:"tip",vertical:"middle"}),t("加密，就会显示"),l(o,{text:"左上角",color:"rgb(216,100,69)",vertical:"middle"}),t("那样的没有任何变化的文件夹")]),e("li",null,[t("如果开启"),l(o,{text:"文件夹",type:"tip",vertical:"middle"}),t("加密，就会显示"),l(o,{text:"左下角",color:"rgb(78,130,184)",vertical:"middle"}),t("那样将文件夹名字也进行了加密混淆")])])])]),V,e("ul",null,[e("li",null,[t("参考"),e("a",w,[t("#5109"),l(i)]),t("，"),e("a",I,[t("#5080"),l(i)])])]),O,Q,X,e("p",null,[t("如果你对 "),Z,t(" 很了解可以看 👉 "),e("a",j,[G,l(i)]),t(" 目前完全兼容")]),H,e("p",null,[t("启动AList时发现Crypt提示错误，是因为Crypt靠前启动时候找不到相关路径，可以通过给Crypt驱动填写"),l(d,{to:"/zh/guide/drivers/common.html#%E5%BA%8F%E5%8F%B7"},{default:_(()=>[t("序号")]),_:1}),t("让Crypt启动靠后")]),Y,$,l(a,{id:"mermaid-318",code:"eJzT1dXlKsksyUm1Uni5e8aLdUue7N3/fMqK57Nank5e9Xx575Md3S/27n02befTPf3v98znAqlPy8kvT85ILCpRCHHiUgCC4pLKnFSFZEOFtMycHCvlpKQ0neKSovzsVCvlNDMzKFu3PDOlJMPKqKBCJzk/J78IKJeWhqQ90QiqPS3N3NTcFG6CsbExqgkmBRUQbaVJ6UWJBRkKmSmphgrRCrFg0WRDMJWalwLlRj+bs+bZnF1Pdi9+PqEt1srKqjg/NzU5J7G42NYW4mVbW1u7RKNooLefdWx/sW7f0yXtULNAqlxS0xTgWmBOtDQDK0gyjIaYGxrkE6urB9T4sqFTTxeXaZnJ2UAtCkp6evopRZllqUXF+sn5ubn5eXoZJbk5yuWpSSmJZbrP1057PnWpEpIeYMgSqQcAEWS3Rg=="})])}const re=h(g,[["render",ee],["__file","Crypt.html.vue"]]);export{re as default};
