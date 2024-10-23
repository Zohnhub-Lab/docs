import{_ as r,a as h,b as u}from"./alias-2-kYv_1DME.js";import{_ as p,r as s,o as m,c as f,a as n,w as a,e as l,b as e,f as t}from"./app--VcHmvhe.js";const b={},g=t('<h1 id="alias" tabindex="-1"><a class="header-anchor" href="#alias" aria-hidden="true">#</a> alias</h1><p>Let&#39;s look at a schematic</p><p><img src="'+r+`" alt="alias"></p><p>We see that two different folders are merged into one folder, and the file folders with the same name are also merged together, and the unique ones are displayed separately</p><ul><li><p>Example 1 <code>riluo.jpg</code> is unique to local 1, shown above</p></li><li><p>Example 2 Two folders have a <code>video</code> folder, but the content inside will also be merged, and the subfolders also apply to the display rules of <code>merging with the same name</code></p><ul><li>There are two videos in each of the two folders, but one of them has the same name. Finally, according to the display rules of <code>merging with the same name</code>, it becomes <code>3</code> files for display after merging</li></ul></li></ul><p>What are <code>alias</code>? <code>alias</code> is a function for path merging</p><p>Except <strong><code>download preview (read-only)</code></strong> operations ^(copy, delete, rename, offline download, upload)^ are not allowed</p><p>For example: cloud disk account 1 and cloud disk account 2 both have the folder <code>Movies</code>, but the contents may not (all) overlap</p><p><strong><code>Previously (virtual path)</code></strong>: can only be mounted to two different paths (cloud disk 1/movie, cloud disk 2/movie) or (movie\\cloud disk 1, movie\\cloud disk 2 )<br><strong><code>Now(alias)</code></strong>: Provide an aggregated folder (movie) which can contain the contents of cloud disk 1 and cloud disk 2 at the same time</p><p>The folder content rules when displaying are as follows</p><ol><li>Merge with the same name: the same files (folders) are automatically merged into one</li><li>Priority of the same name: When accessing resources, the path file (folder) at the top (front) when filling in the path for each fixed access <ul><li>If the files with the same name are merged, click <strong><code> to play, and when downloading</code></strong>, it will be called first. When filling in <code>Paths</code>, the file with the 302 mode path will be used first.</li></ul></li></ol><p>Let me explain <strong><code>same name first²</code></strong> access rules</p><h2 id="how-to-fill-in" tabindex="-1"><a class="header-anchor" href="#how-to-fill-in" aria-hidden="true">#</a> <strong>How to fill in</strong></h2><p>There are two ways to fill in</p><ol><li><p>The first one is that you can only fill in the path of the subfolder and the folder with the same name must be used at the end. It is not recommended to use ❌</p><p>-Paths filling example:</p><div class="language-path line-numbers-mode" data-ext="path"><pre class="language-path"><code>/file1/locala
/file2/localb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>The second is to directly mount the root folder path, using the <code>renaming</code> method, it is strongly recommended to use ✔️</p><p>-Paths filling example:</p><div class="language-path line-numbers-mode" data-ext="path"><pre class="language-path"><code>#Example 1 Directly write the root folder
merge: /file1
merge: /file2

#Example 2 Mount different path folders for merging
merge: /file1/localtest233
merge: /file2/videos/TV series
merge: /file3 2/TV/Domestic TV Series/Station XX
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><p>According to the second method, we can <code>merge</code> and display different folders, which is convenient and quick</p>`,16),v=e("p",null,"Example 1. Fill in the access according to the following path(302 mode has priority)",-1),y=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`local: /localtest/local1
local: /localtest/local2
local: /localtest/local3
local: /localtest/local4
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),w=e("ul",null,[e("li",null,[e("p",null,[l("1, if there is a video 1 2 3 4, each visit is "),e("code",null,"1")]),e("ul",null,[e("li",null,[l("If 1 3 4 uses the local proxy and 2 uses "),e("code",null,"302"),l(", call 2 first")])])]),e("li",null,[e("p",null,[l("2, a video 3 4 yes then every visit is "),e("code",null,"3")]),e("ul",null,[e("li",null,[l("If 3 uses a local proxy and 4 uses "),e("code",null,"302"),l(", call 4 first")])])])],-1),x=e("p",null,"Example 2. Fill in the access according to the following path(302 mode has priority)",-1),_=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`local: /localtest/local4
local: /localtest/local3
local: /localtest/local2
local: /localtest/local1
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),k=e("ul",null,[e("li",null,[e("p",null,[l("1, if a video has 1 2 3 4, each visit is "),e("code",null,"4")]),e("ul",null,[e("li",null,[l("If 1 3 4 uses the local proxy and 2 uses "),e("code",null,"302"),l(", call 2 first")])])]),e("li",null,[e("p",null,[l("2, a video 3 4 has then every visit is "),e("code",null,"4")]),e("ul",null,[e("li",null,[l("If 4 uses a local proxy and 2 uses "),e("code",null,"302"),l(", call 2 first")])])])],-1),P=e("p",null,"Example 3、 Fill in the access according to the following path(302 mode has priority)",-1),I=e("p",null,"Of course, it is not limited to only 2 folders, just write according to personal needs",-1),T=e("div",{class:"language-text line-numbers-mode","data-ext":"text"},[e("pre",{class:"language-text"},[e("code",null,`Local test:/local1/video
Local test:/local2/video
Test other:/test3/images
Test other:/test4/video/tv
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),A=e("ul",null,[e("li",null,[l("local1 local2 merged together "),e("ul",null,[e("li",null,[l("If 2 uses a local proxy and 1 uses "),e("code",null,"302"),l(", call 1 first")])])]),e("li",null,[l("Test 3 and Test 4 merged together "),e("ul",null,[e("li",null,[l("If 3 uses a local proxy and 4 uses "),e("code",null,"302"),l(", call 4 first")])])]),e("li",null,"In the above two cases, two different folders will appear for display, which will be displayed as follows without interfering with each other")],-1),W=e("p",null,[e("img",{src:h,alt:"alias"})],-1),L=t('<h3 id="the-download-method-to-use" tabindex="-1"><a class="header-anchor" href="#the-download-method-to-use" aria-hidden="true">#</a> <strong>The download method to use</strong></h3><p>​ When adding <strong><code>alias</code></strong>, <code>Web Proxy</code> and <code>Webdav Policy</code> are not modified by default. The storage path filled in the Paths path can be <code>302</code>, <code>Local Proxy</code>, <code>Download Proxy URL</code>, three modes Mixed Playback Mixed Playback is possible</p><p>​ If you checked <code>Web Proxy</code>, the storage filled in by the Paths path, if there is a 302 mode playback, it will be played in transit (local proxy mode) at that time, and it will become a proxy mode. If the Webdav policy is also changed, it will also change</p><p>​ Of course, it is up to you to choose whether to change the mode</p><h3 id="what-if-you-don-t-know-how-the-cloud-disks-you-added-are-different" tabindex="-1"><a class="header-anchor" href="#what-if-you-don-t-know-how-the-cloud-disks-you-added-are-different" aria-hidden="true">#</a> <strong>What if you don’t know how the cloud disks you added are different?</strong></h3><ol><li><p>You can go to the bottom of the corresponding document to view the document, there is a flow chart description</p><ul><li>If there is a 302, the 302 method is used by default. If there are only local proxy and download proxy URLs, the default is to use the local proxy, provided that you have not manually selected</li></ul></li><li><p>You can check when adding storage, select the corresponding storage to view, for example, let’s check the methods of Alibaba Cloud and 115 respectively</p><ul><li><p>As you can see from the figure below, Alibaba Cloud Disk has the option of <code>web proxy</code>, and <code>webdav policy</code> defaults to 302. It can be judged that Alibaba Cloud Disk uses the 302 method by default</p></li><li><p>As you can see from the figure below, the 115 network disk does not have the option of <code>web proxy</code>, and the <code>webdav strategy</code> defaults to the local proxy. It can be judged that the 115 network disk uses the local proxy mode by default</p></li><li><p><img src="'+u+'" alt="alias"></p></li></ul></li></ol><h3 id="other-instructions" tabindex="-1"><a class="header-anchor" href="#other-instructions" aria-hidden="true">#</a> <strong>other instructions</strong></h3><blockquote><p>If you are using <code>Windows</code>, the following situation will occur, and folders with different capitalization will also be regenerated<br> For example, Local 1 and Local 2 have a lowercase v for <code>video</code> respectively, and the folder OneDrive has an uppercase V <code>Video</code> folder<br> Then a lowercase video folder will be generated, which contains only <code>local 1, local 2</code> files merged by two folders<br> At the same time, the uppercase <code>Video</code> will gather the files of the three folders</p></blockquote><p>This is because Windows is case-insensitive, video and Video will be considered as the same folder, you will not have this problem if you switch to Linux or Mac</p><blockquote><p>Aliases are not supported for load balancing for the time being (if it is supported later, the document will be modified here, if it is not modified, it is not yet supported)</p></blockquote><br><h3 id="proxy-range" tabindex="-1"><a class="header-anchor" href="#proxy-range" aria-hidden="true">#</a> <strong>Proxy Range</strong></h3><p>You need to enable <code>Web Proxy</code> or<code> Webdav Native Proxy</code> to take effect</p>',13),V=e("code",null,"alias",-1),D=e("code",null,"139Yun",-1),E=e("code",null,"AList V3",-1),F={href:"https://github.com/alist-org/alist/pull/6496#issue-2309839607",target:"_blank",rel:"noopener noreferrer"},N=t(`<br><h3 id="protect-same-name" tabindex="-1"><a class="header-anchor" href="#protect-same-name" aria-hidden="true">#</a> <strong>Protect same name</strong></h3><p><sup>&gt;v3.34.0</sup>Now alias supports the two operations of <code>Delete</code> and<code> Rename</code>，<mark>By default, use</mark></p><p>File names like file names may appear in the alias. For folders with the same folder name, you cannot <code>Delete</code> or <code>Rename</code> when the <code>Protect same name</code> is opened.</p><hr><details class="hint-container details"><summary>Protect same name Use for example</summary><p>We fill in the two folders of <code>a</code> and<code> b</code> to the alias options</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a/          b/                  alias
a/1.png     b/1.png             alias/1.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ----&gt;   alias/3.mp4
a/4.mkv     b/4.mkv     ----&gt;   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin ---&gt; According to the rule, aliases in directories listed earlier take precedence, and files with different names in separate folders are given priority.
                                alias/6.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If we attempt to Rename or Delete a file named <code>1.png</code> while the <code>Protect same name</code> feature is enabled, the following message will be displayed in the top right corner:</p><div style="color:red;display:flex;justify-content:center;align-items:center;border:3px solid red;"><ul style="list-style-type:none;"><li><i class="fa-solid fa-circle-exclamation"> </i><b>same-name files cannot be Rename</b></li><br><li><i class="fa-solid fa-circle-exclamation"> </i><b>same-name files cannot be Delete</b></li></ul></div><p>If we turn off the options of <code>Protect Same Name</code>, change to<code> a/1.png</code> to <code>a/11.png</code> will become the following display</p><ul><li>因为a/b两个文件夹都有一样的文件，<code>重命名</code>和<code>下载</code>一样优先下载填写时候靠前的文件夹，同理重名修改也是先修改靠前文件夹中的文件 ( Can&#39;t translate the meaning that can be understood)</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>a/          b/                  alias
a/1.png     b/1.png             alias/11.png
a/2.mp3     b/2.mp3             alias/2.mp3
a/3.mp4     b/3.mp4     ----&gt;   alias/3.mp4
a/4.mkv     b/4.mkv     ----&gt;   alias/4.mkv
a/5.bin     b/6.css             alias/5.bin
                                alias/1.png  ---&gt; Because the b folder is in the rear, the file list display is relatively backward
                                alias/6.css
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>If you really do n’t understand, you can test it yourself and then install the production environment by yourself</p></details>`,6);function q(C,R){const d=s("Tabs"),c=s("ExternalLinkIcon");return m(),f("div",null,[g,n(d,{id:"97",data:[{id:"example 1"},{id:"example 2"},{id:"example 3"}],"tab-id":"alias"},{title0:a(({value:o,isActive:i})=>[l("example 1")]),title1:a(({value:o,isActive:i})=>[l("example 2")]),title2:a(({value:o,isActive:i})=>[l("example 3")]),tab0:a(({value:o,isActive:i})=>[v,y,w]),tab1:a(({value:o,isActive:i})=>[x,_,k]),tab2:a(({value:o,isActive:i})=>[P,I,T,A,W]),_:1}),L,e("ul",null,[e("li",null,[l("Currently only applicable to："),V,l("、"),D,l("、"),E,e("ul",null,[e("li",null,[l("Function Description："),e("strong",null,[e("a",F,[l("https://github.com/alist-org/alist/pull/6496#issue-2309839607"),n(c)])])])])])]),N])}const B=p(b,[["render",q],["__file","alias.html.vue"]]);export{B as default};