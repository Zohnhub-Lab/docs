import{_ as t}from"./open-with-uA4UtUJ5.js";import{_ as o,r as i,o as r,c as d,b as e,e as n,a as c,f as a}from"./app--VcHmvhe.js";const p={},l=a(`<h1 id="预览设置" tabindex="-1"><a class="header-anchor" href="#预览设置" aria-hidden="true">#</a> 预览设置</h1><h2 id="文本类型" tabindex="-1"><a class="header-anchor" href="#文本类型" aria-hidden="true">#</a> <strong>文本类型</strong></h2><p>要作为文本预览的文件扩展名，用 <code>,</code> 分隔，例如 <code>txt,md,go,tsx</code>。</p><h2 id="音频类型" tabindex="-1"><a class="header-anchor" href="#音频类型" aria-hidden="true">#</a> <strong>音频类型</strong></h2><p>要作为音频预览的文件扩展名，以 <code>,</code> 分隔，例如 <code>mp3,wav,m4a</code>。</p><h2 id="视频类型" tabindex="-1"><a class="header-anchor" href="#视频类型" aria-hidden="true">#</a> <strong>视频类型</strong></h2><p>要作为视频预览的文件扩展名，以 <code>,</code> 分隔，例如 <code>mp4,webm,ogg</code>。</p><h2 id="图片类型" tabindex="-1"><a class="header-anchor" href="#图片类型" aria-hidden="true">#</a> <strong>图片类型</strong></h2><p>要作为图像预览的文件扩展名，以 <code>,</code> 分隔，例如 <code>jpg,jpeg,png,gif,webp</code>。</p><h2 id="代理类型" tabindex="-1"><a class="header-anchor" href="#代理类型" aria-hidden="true">#</a> <strong>代理类型</strong></h2><p>要通过程序代理下载的文件扩展名</p><h2 id="外部预览" tabindex="-1"><a class="header-anchor" href="#外部预览" aria-hidden="true">#</a> <strong>外部预览</strong></h2><p>一个包含外部预览设置的 json 对象，定义为</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">interface</span> <span class="token punctuation">{</span>
  <span class="token punctuation">[</span>extensions<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token punctuation">[</span>name<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">string</span> <span class="token comment">//(url)</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一个key <code>extensions</code> 是用 <code>,</code> 分割的文件扩展名（如果是 startsWith<code>/</code> 会被认为是正则表达式），value 也是一个 <code>key-value</code> 对象，key 是 预览名称，值为外部网址。</p><p>对于外部 url，我们提供了一些变量供您使用：</p><p>基础变量：</p><ul><li><code>$url</code>: the file url</li><li><code>$durl</code>: the file of alist URL</li><li><code>$name</code>: the file name</li></ul><p>拓展变量：<br> 在基础变量前添加[eb_]，其中e表示<code>encodeURIComponent</code>，b表示<code>base64</code>， 如</p><ul><li><code>$e_url</code>: encodeURIComponent($url)</li><li><code>$b_url</code>: btoa($url)</li><li><code>$eb_url</code>: encodeURIComponent(btoa($url))</li></ul><p>最后，当当前文件与“扩展”匹配时，“外部预览”将显示“打开方式”菜单。</p><p>例如，将“外部预览”设置为</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;txt&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;Notepad&quot;</span><span class="token operator">:</span> <span class="token string">&quot;notepad://$url&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;/.*/&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;VSCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vscode://$url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>当我们输入一个扩展名为 <code>txt</code> 的文件时，它会显示：</p><p><img src="`+t+`" alt="Open-with"></p><h2 id="iframe-预览" tabindex="-1"><a class="header-anchor" href="#iframe-预览" aria-hidden="true">#</a> <strong>iframe 预览</strong></h2><p>类似于 <code>External previews</code>，但它会直接在当前页面中嵌入 iframe。</p><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你想使用自部署的onlyoffice预览office文件，可以在这里添加如下配置：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;doc,docx,xls,xlsx,ppt,pptx&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;OnlyOffice&quot;</span><span class="token operator">:</span> <span class="token string">&quot;you_only_office_url&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h2 id="音频封面" tabindex="-1"><a class="header-anchor" href="#音频封面" aria-hidden="true">#</a> <strong>音频封面</strong></h2><p>歌曲无播放封面时显示的默认封面。</p><h2 id="音频自动播放" tabindex="-1"><a class="header-anchor" href="#音频自动播放" aria-hidden="true">#</a> <strong>音频自动播放</strong></h2><p>是否自动播放音频文件。</p><h2 id="视频自动播放" tabindex="-1"><a class="header-anchor" href="#视频自动播放" aria-hidden="true">#</a> <strong>视频自动播放</strong></h2><p>是否自动播放视频文件。</p><h2 id="代理忽略头部" tabindex="-1"><a class="header-anchor" href="#代理忽略头部" aria-hidden="true">#</a> <strong>代理忽略头部</strong></h2>`,35),u={href:"https://github.com/alist-org/alist/issues/2763",target:"_blank",rel:"noopener noreferrer"},h=a(`<h3 id="强制预览" tabindex="-1"><a class="header-anchor" href="#强制预览" aria-hidden="true">#</a> <strong>强制预览</strong></h3><p>可以通过 <code>type</code> 请求参数来强制设置预览类型。</p><p>可选值:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>UNKNOWN
FOLDER
VIDEO
AUDIO
TEXT
IMAGE
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>示例: <code>http://yourdomain/test-file.ahk?type=text</code></p>`,5);function v(m,b){const s=i("ExternalLinkIcon");return r(),d("div",null,[l,e("p",null,[n("详情查看： "),e("strong",null,[e("a",u,[n("https://github.com/alist-org/alist/issues/2763"),c(s)])])]),h])}const f=o(p,[["render",v],["__file","preview.html.vue"]]);export{f as default};
