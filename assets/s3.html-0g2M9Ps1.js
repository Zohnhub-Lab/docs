import{_ as u,a as h,b as p,c as _,d as g,e as f,f as m,g as b,h as k,i as v,j as w,k as y,l as S,m as A,n as C,o as x,p as O,q as E}from"./googleStorage4-JhGAAhz7.js";import{_ as R,r as a,o as B,c as I,a as o,w as n,e as t,b as e,f as T}from"./app--VcHmvhe.js";const j={},D=T('<h1 id="s3" tabindex="-1"><a class="header-anchor" href="#s3" aria-hidden="true">#</a> S3</h1><p>S3 object storage protocols, such as COS, OSS, B2, etc.</p><h3 id="bucket" tabindex="-1"><a class="header-anchor" href="#bucket" aria-hidden="true">#</a> <strong>BucKet</strong></h3><p>bucket name</p><h3 id="endpoint" tabindex="-1"><a class="header-anchor" href="#endpoint" aria-hidden="true">#</a> <strong>Endpoint</strong></h3><p>Endpoint address (If you don’t know, you can read the official documents below)</p><h3 id="region" tabindex="-1"><a class="header-anchor" href="#region" aria-hidden="true">#</a> <strong>Region</strong></h3><p>area (If you don’t know, you can read the official documents below)</p><h3 id="access-key-id" tabindex="-1"><a class="header-anchor" href="#access-key-id" aria-hidden="true">#</a> <strong>Access key id</strong></h3><p>Access key id</p><h3 id="secret-access-key" tabindex="-1"><a class="header-anchor" href="#secret-access-key" aria-hidden="true">#</a> <strong>Secret access key</strong></h3><p>Secret access key</p><h2 id="session-token" tabindex="-1"><a class="header-anchor" href="#session-token" aria-hidden="true">#</a> <strong>Session token</strong></h2><p>Session token，Normally, the three-segment token needs to be used, and the two-segment token does not need to fill in this option.</p><h3 id="root-folder-path" tabindex="-1"><a class="header-anchor" href="#root-folder-path" aria-hidden="true">#</a> <strong>Root folder path</strong></h3><p>Root path, if not filled, it defaults to the root directory.</p><h3 id="custom-host" tabindex="-1"><a class="header-anchor" href="#custom-host" aria-hidden="true">#</a> <strong>Custom Host</strong></h3><p>Custom cdn acceleration domain name</p><h3 id="sign-url-expire" tabindex="-1"><a class="header-anchor" href="#sign-url-expire" aria-hidden="true">#</a> <strong>Sign url expire</strong></h3><p>The validity period of the signed download address is 4 hours by default. If a custom accelerated domain name is used, this option is invalid.</p><h3 id="placeholder" tabindex="-1"><a class="header-anchor" href="#placeholder" aria-hidden="true">#</a> <strong>Placeholder</strong></h3><p>The name of placeholder file.</p><h3 id="force-path-style" tabindex="-1"><a class="header-anchor" href="#force-path-style" aria-hidden="true">#</a> <strong>Force path style</strong></h3><p>If enable ForcePathStyle, usually needed for minio.</p><h3 id="list-object-version" tabindex="-1"><a class="header-anchor" href="#list-object-version" aria-hidden="true">#</a> <strong>List object version</strong></h3><p>Refer to s3 sdk documents.</p><h2 id="add-object-storage-examples-and-official-documents" tabindex="-1"><a class="header-anchor" href="#add-object-storage-examples-and-official-documents" aria-hidden="true">#</a> <strong>Add object storage examples and official documents</strong></h2><p><code>S3 Object Storage</code> includes but is not limited to these. There are many more, such as Microsoft and Google, which have not been added. There are no examples here because it is difficult to register and activate and cannot provide example tutorials. If you have an account, please contact us and provide an account and I will add it.</p>',28),F={href:"https://oss.console.aliyun.com/",target:"_blank",rel:"noopener noreferrer"},W=e("strong",null,"Alibaba Cloud OSS Official Website",-1),U={href:"https://help.aliyun.com/document_detail/31837.html",target:"_blank",rel:"noopener noreferrer"},K=e("strong",null,"Comparison Table of Endpoints in Different Regions of OSS under Public Cloud",-1),z=e("div",{class:"hint-container tip"},[e("p",{class:"hint-container-title"},"Tips"),e("p",null,[t("Alist needs to skip "),e("code",null,"referer"),t(" to mount "),e("strong",null,"Alibaba Cloud Disk"),t(". If you do not allow "),e("code",null,"referer"),t(" to be empty in anti-leech, it will not work, because Alibaba Cloud Disk uses Alibaba Cloud OSS (in Beijing area)")]),e("p",null,[t("In fact, the "),e("code",null,"Region|Region"),t(" option can be written as "),e("code",null,"Endpoint"),t(", but for the sake of specification, let’s write it according to the comparison table.:::")])],-1),G=e("p",null,"Fill in example:",-1),L=e("p",null,[e("img",{src:u,alt:"s3"})],-1),P=e("p",null,null,-1),q={href:"https://console.cloud.tencent.com/cos",target:"_blank",rel:"noopener noreferrer"},N=e("strong",null,"Tencent Cloud COS Official Website",-1),Y={href:"https://cloud.tencent.com/document/product/436/6224",target:"_blank",rel:"noopener noreferrer"},Q=e("strong",null,"Collection Table of Endpoints in Each Region of COS under the Public Cloud",-1),H=e("p",null,"Fill in example:",-1),M=e("p",null,[e("img",{src:h,alt:"s3"})],-1),V={href:"https://oos-cn.ctyun.cn/oos/ctyun/consoleBucket.html",target:"_blank",rel:"noopener noreferrer"},J=e("strong",null,"Tianyi Cloud OOS Official Website",-1),X={href:"https://www.ctyun.cn/document/10026693/10027878",target:"_blank",rel:"noopener noreferrer"},Z=e("strong",null,"Comparison Table of Endpoints of OOS Regions under Public Cloud",-1),$=e("p",null,"Fill in example:",-1),ee=e("p",null,[e("img",{src:p,alt:"s3"})],-1),te=e("p",null,null,-1),oe={href:"https://console.bce.baidu.com/bos",target:"_blank",rel:"noopener noreferrer"},ne=e("strong",null,"Baidu Cloud BOS official website",-1),se={href:"https://cloud.baidu.com/doc/BOS/s/Bk6kqu8eq#Setrefererwhitelist",target:"_blank",rel:"noopener noreferrer"},le=e("strong",null,"Self-configure Bucket’s Referer whitelist permissions",-1),ie={href:"https://intl.cloud.baidu.com/doc/BOS/s/xjwvyq9l4-en",target:"_blank",rel:"noopener noreferrer"},ae=e("strong",null,"comparison table of Region and Endpoint of BOS under public cloud",-1),re=e("strong",null,"Endpoint comparison table compatible with AWS S3",-1),ce={href:"https://cloud.baidu.com/doc/BOS/s/xjwvyq9l4",target:"_blank",rel:"noopener noreferrer"},de=e("strong",null,"Click to view details",-1),ue=e("p",null,"Fill in example:",-1),he=e("p",null,[e("img",{src:_,alt:"s3"})],-1),pe=e("p",null,null,-1),_e={href:"https://portal.qiniu.com/kodo/bucket",target:"_blank",rel:"noopener noreferrer"},ge=e("strong",null,"Qiniu Cloud Kodo official website",-1),fe=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),me={href:"https://developer",target:"_blank",rel:"noopener noreferrer"},be=e("p",null,"Fill in example:",-1),ke=e("p",null,[e("img",{src:g,alt:"s3"})],-1),ve=e("p",null,null,-1),we={href:"https://www.huaweicloud.com/intl/en-us/",target:"_blank",rel:"noopener noreferrer"},ye=e("strong",null,"HUAWEI CLOUD OBS Official Website",-1),Se={href:"https://developer.huaweicloud.com/intl/en-us/endpoint",target:"_blank",rel:"noopener noreferrer"},Ae=e("strong",null,"Check the Region and Endpoint comparison table of OBS under the public cloud",-1),Ce={href:"https://console.huaweicloud.com/iam/?region=cn-north-4#/mine/accessKey",target:"_blank",rel:"noopener noreferrer"},xe=e("p",null,"Fill in example:",-1),Oe=e("p",null,[e("img",{src:f,alt:"s3"})],-1),Ee={href:"https://www.jdcloud.com/cn/products/object-storage-service",target:"_blank",rel:"noopener noreferrer"},Re=e("strong",null,"JD CLOUD OBS Official Website",-1),Be={href:"https://www.jdcloud.com/cn/activity/oss",target:"_blank",rel:"noopener noreferrer"},Ie=e("br",null,null,-1),Te={href:"https://docs.jdcloud.com/cn/object-storage-service/oss-endpont-list",target:"_blank",rel:"noopener noreferrer"},je=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),De=e("p",null,"Fill in example:",-1),Fe=e("p",null,[e("img",{src:m,alt:"s3"})],-1),We={href:"https://www.dogecloud.com/product/oss",target:"_blank",rel:"noopener noreferrer"},Ue=e("strong",null,"Doge Cloud OSS Official Website",-1),Ke=e("code",null,"DogeCloud",-1),ze=e("code",null,"S3",-1),Ge=e("p",null,"Region Code：",-1),Le=e("div",{class:"language-json line-numbers-mode","data-ext":"json"},[e("pre",{class:"language-json"},[e("code",null,[e("span",{class:"token comment"},"// 0: 上海（华东），1: 北京（华北），2: 广州（华南），3: 成都（西南）"),t(`
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),Pe=e("p",null,[e("img",{src:b,alt:"s3"})],-1),qe={href:"https://console.ecloud.10086.cn/api/page/eos-console-web/CIDC-RP-00/eos/bucket?productType=os&v=new",target:"_blank",rel:"noopener noreferrer"},Ne=e("strong",null,"139 CLOUD EOS Official Website",-1),Ye=e("p",null,"need to precharge 100 to open",-1),Qe={href:"https://ecloud.10086.cn/op-help-center/doc/article/48082",target:"_blank",rel:"noopener noreferrer"},He=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Me=e("p",null,"Fill in example:",-1),Ve=e("p",null,[e("img",{src:k,alt:"s3"})],-1),Je={href:"https://console.upyun.com/services/file/",target:"_blank",rel:"noopener noreferrer"},Xe=e("strong",null,"Yupyun USS Official Website",-1),Ze={href:"https://s3.console.aws.amazon.com/s3/",target:"_blank",rel:"noopener noreferrer"},$e=e("strong",null,"Amazon S3 Official Website",-1),et=e("p",null,"The endpoint URL contains the name of the region where the bucket is located",-1),tt=e("p",null,[t("Example "),e("sup",null,"1"),t(", if your bucket is in the US East (Ohio) region")],-1),ot=e("blockquote",null,[e("p",null,[t("Then the format of the Endpoint URL is "),e("strong",null,[e("code",null,"s3.us-east-2.amazonaws.com/your-bucket-name")])]),e("p",null,[t("Region parameter: "),e("strong",null,[e("code",null,"us-east-2")])]),e("p",null,[t("Bucket name: "),e("strong",null,[e("code",null,"your-bucket-name")]),t(" (your own bucket name)")])],-1),nt=e("p",null,[t("Example"),e("sup",null,"2"),t(", my storage bucket is "),e("code",null,"Tokyo"),t(", and the name of the storage bucket is "),e("code",null,"cdn-aw"),t(", then the complete parameter filling is as follows")],-1),st=e("strong",null,"Endpoint",-1),lt={href:"http://s3.ap-northeast-1.amazonaws.com",target:"_blank",rel:"noopener noreferrer"},it=e("li",null,[e("strong",null,"Region"),t(": ap-northeast-1")],-1),at=e("li",null,[e("strong",null,"Bucket Name"),t(": cdn-aw")],-1),rt=e("p",null,"Let's take a look at the complete parameter filling example",-1),ct=e("p",null,"Fill in example:",-1),dt=e("p",null,[e("img",{src:v,alt:"s3"})],-1),ut={href:"https://dash.cloudflare.com/",target:"_blank",rel:"noopener noreferrer"},ht=e("strong",null,"cloudflare R2 Official Website",-1),pt=e("p",null,[e("strong",null,"Endpoint"),t(" ：The S3 endpoint is available via the "),e("strong",null,[e("code",null,"https://<ACCOUNT_ID>.r2.cloudflarestorage.com")]),t(" endpoint.")],-1),_t=e("p",null,[e("strong",null,[e("code",null,"ACCOUNT_ID")]),t(" ：This account ID can be seen everywhere, and the simplest is the position at the top of the browser. The string of IDs behind the website link is your account ID.")],-1),gt=e("p",null,"填写示例：",-1),ft=e("p",null,[e("img",{src:w,alt:"s3"})],-1),mt={href:"https://secure.backblaze.com/b2_buckets.htm",target:"_blank",rel:"noopener noreferrer"},bt=e("strong",null,"B2 Official Website",-1),kt=e("p",null,[t("The full name is "),e("strong",null,[e("code",null,"Backblaze")]),t(", no verification information is required, and it is said that the first 10G is free.")],-1),vt=e("p",null,"Fill in example:",-1),wt=e("p",null,[e("img",{src:y,alt:"s3"})],-1),yt={href:"https://console.scaleway.com/object-storage/buckets",target:"_blank",rel:"noopener noreferrer"},St=e("strong",null,"Scaleway Official Website",-1),At=e("p",null,"Card required, verification information",-1),Ct={href:"https://www.scaleway.com/en/docs/storage/object/concepts/#object-storage",target:"_blank",rel:"noopener noreferrer"},xt=e("strong",null,"Region and Endpoint comparison table of Kodo under the public cloud",-1),Ot=e("p",null,"Fill in example:",-1),Et=e("p",null,[e("img",{src:S,alt:"s3"})],-1),Rt=e("p",null,[t("Those who use "),e("code",null,"Minio"),t(" self-built object storage should know how to obtain the ID and secret key, so I won’t talk about it here")],-1),Bt=e("p",null,"You only need to fill in the four options of bucket name, access key ID, security access key, and Endpoint, and leave the region empty",-1),It=e("p",null,[e("strong",null,"Endpoint：http(s)://《YOUR_IP/URL》:9001/"),t("，You can use IP or domain name")],-1),Tt=e("strong",null,[e("code",null,"Force Path Style")],-1),jt={href:"https://github.com/alist-org/alist/discussions/4920#discussioncomment-6635452",target:"_blank",rel:"noopener noreferrer"},Dt=e("p",null,"填写示例：",-1),Ft=e("p",null,[e("img",{src:A,alt:"s3"})],-1),Wt={href:"https://console.cloud.google.com/storage/settings;tab=interoperability",target:"_blank",rel:"noopener noreferrer"},Ut=e("p",null,"Then you will enter the following page:",-1),Kt=e("p",null,[e("img",{src:C,alt:"Google Cloud"})],-1),zt=e("p",null,"You can see Endpoint and Access Key on this page, you need to select an account and create an Access Key",-1),Gt=e("p",null,[e("img",{src:x,alt:"Google Cloud"})],-1),Lt=e("p",null,"Access Key/Secret will be displayed on the new page, They will only be displayed this time. Please save them properly.",-1),Pt=e("p",null,[e("img",{src:O,alt:"Google Cloud"})],-1),qt=e("p",null,"At this point, the EndPoint, access key Id, and security access key required by Alist have been obtained. Please view the remaining buckets and regions in the corresponding buckets.",-1),Nt=e("p",null,[e("img",{src:E,alt:"Google Cloud"})],-1),Yt=e("h3",{id:"the-default-download-method-used",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#the-default-download-method-used","aria-hidden":"true"},"#"),t(),e("strong",null,"The default download method used")],-1);function Qt(Ht,Mt){const i=a("ExternalLinkIcon"),r=a("RouterLink"),c=a("Tabs"),d=a("Mermaid");return B(),I("div",null,[D,o(c,{id:"84",data:[{id:"Alibaba"},{id:"Tencent"},{id:"Tianyi"},{id:"Baidu"},{id:"Qiniu"},{id:"Huawei"},{id:"JD"},{id:"Doge"},{id:"139"},{id:"upyun"},{id:"Amazon"},{id:"R2"},{id:"B2"},{id:"scaleway"},{id:"Minio"},{id:"Google Cloud"}],"tab-id":"S3"},{title0:n(({value:s,isActive:l})=>[t("Alibaba")]),title1:n(({value:s,isActive:l})=>[t("Tencent")]),title2:n(({value:s,isActive:l})=>[t("Tianyi")]),title3:n(({value:s,isActive:l})=>[t("Baidu")]),title4:n(({value:s,isActive:l})=>[t("Qiniu")]),title5:n(({value:s,isActive:l})=>[t("Huawei")]),title6:n(({value:s,isActive:l})=>[t("JD")]),title7:n(({value:s,isActive:l})=>[t("Doge")]),title8:n(({value:s,isActive:l})=>[t("139")]),title9:n(({value:s,isActive:l})=>[t("upyun")]),title10:n(({value:s,isActive:l})=>[t("Amazon")]),title11:n(({value:s,isActive:l})=>[t("R2")]),title12:n(({value:s,isActive:l})=>[t("B2")]),title13:n(({value:s,isActive:l})=>[t("scaleway")]),title14:n(({value:s,isActive:l})=>[t("Minio")]),title15:n(({value:s,isActive:l})=>[t("Google Cloud")]),tab0:n(({value:s,isActive:l})=>[e("p",null,[e("a",F,[W,o(i)])]),e("p",null,[e("a",U,[K,o(i)])]),z,G,L,P]),tab1:n(({value:s,isActive:l})=>[e("p",null,[e("a",q,[N,o(i)])]),e("p",null,[e("a",Y,[Q,o(i)])]),H,M]),tab2:n(({value:s,isActive:l})=>[e("p",null,[e("a",V,[J,o(i)])]),e("p",null,[e("a",X,[Z,o(i)])]),$,ee,te]),tab3:n(({value:s,isActive:l})=>[e("p",null,[e("a",oe,[ne,o(i)])]),e("p",null,[e("a",se,[le,o(i)])]),e("p",null,[e("a",ie,[ae,o(i)])]),e("p",null,[re,e("a",ce,[de,o(i)])]),ue,he,pe]),tab4:n(({value:s,isActive:l})=>[e("p",null,[e("a",_e,[ge,o(i)])]),e("p",null,[t("["),fe,t("]("),e("a",me,[t("https://developer"),o(i)]),t(" .qiniu.com/kodo/4088/s3-access-domainname)")]),be,ke,ve]),tab5:n(({value:s,isActive:l})=>[e("p",null,[e("a",we,[ye,o(i)])]),e("p",null,[e("a",Se,[Ae,o(i)]),t(", the secret key AK/SK"),e("a",Ce,[t("acquire"),o(i)]),t(" to set by yourself.")]),xe,Oe]),tab6:n(({value:s,isActive:l})=>[e("p",null,[e("a",Ee,[Re,o(i)])]),e("p",null,[t("Advantages: "),e("a",Be,[t("free 10G"),o(i)]),t(", support IPV6"),Ie,t(" Disadvantages: need to precharge 100 to open，However, after the pre-deposit is completed, the object storage is activated, and the pre-deposited amount can still be used after withdrawal.")]),e("p",null,[e("a",Te,[je,o(i)])]),De,Fe]),tab7:n(({value:s,isActive:l})=>[e("p",null,[e("a",We,[Ue,o(i)]),t("，If you want to add Doge, use a separate "),Ke,t(" driver to add, please do not use the "),ze,t(" the driver")]),Ge,Le,Pe]),tab8:n(({value:s,isActive:l})=>[e("p",null,[e("a",qe,[Ne,o(i)])]),Ye,e("p",null,[e("a",Qe,[He,o(i)])]),Me,Ve]),tab9:n(({value:s,isActive:l})=>[e("p",null,[e("a",Je,[Xe,o(i)]),t(":"),o(r,{to:"/guide/drivers/uss.html"},{default:n(()=>[t("Click here to configure USS")]),_:1})])]),tab10:n(({value:s,isActive:l})=>[e("p",null,[e("a",Ze,[$e,o(i)])]),et,tt,ot,nt,e("blockquote",null,[e("ol",null,[e("li",null,[st,t(": "),e("a",lt,[t("s3.ap-northeast-1.amazonaws.com"),o(i)])]),it,at])]),rt,ct,dt]),tab11:n(({value:s,isActive:l})=>[e("p",null,[e("a",ut,[ht,o(i)])]),pt,_t,gt,ft]),tab12:n(({value:s,isActive:l})=>[e("p",null,[e("a",mt,[bt,o(i)])]),kt,vt,wt]),tab13:n(({value:s,isActive:l})=>[e("p",null,[e("a",yt,[St,o(i)])]),At,e("p",null,[e("a",Ct,[xt,o(i)])]),Ot,Et]),tab14:n(({value:s,isActive:l})=>[Rt,Bt,It,e("p",null,[t("Finally, remember to enable "),Tt,t(" to use, otherwise it cannot be used "),e("a",jt,[t("Click to view details"),o(i)])]),Dt,Ft]),tab15:n(({value:s,isActive:l})=>[e("p",null,[t("I assume you already have a Google Cloud account, so let’s go directly to the Google Cloud Storage settings page."),e("a",Wt,[t("Click me"),o(i)])]),Ut,Kt,zt,Gt,Lt,Pt,qt,Nt]),_:1}),Yt,o(d,{id:"mermaid-400",code:"eJydkE1vwjAMhu/8CguutKztAC3SNmniuNO0aYeKQz6cJSJtuiSlVOLHr7QFscMkNF8S2+/zynYURZOgg0ECn0pzBcI2pbFUQIFBWQHaQ+1RAGtBoKS1Cc+TEySNbbiiLsD7ywS68KE1CDQBqY0hM8bk3Adnd0hmcrUa/1GjRVAkrQ5zbo11XU/KazwdcSnXy/Xy4pBl2W+H++owYDX7crRSoAUmkMO2r9Kkf7AUY5pnd+mWEOJtgdxQ7x+7OI4LHWmadzs6wO9aVwWWYXDphRuUcKHOwz2sBkGSG8upgcrZQ7uNYmoCupIGvcc4evrDliX55nzkHoSPt9dbYW40352uPI3jhXCd1vkFt0Vhy1iFwswaZILuo8p2wnZ6xbB/MPxm5gdtZr9x"})])}const Xt=R(j,[["render",Qt],["__file","s3.html.vue"]]);export{Xt as default};
