<template><div><h1 id="reed-d" tabindex="-1"><a class="header-anchor" href="#reed-d" aria-hidden="true">#</a> Reed-D</h1>
<h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h2>
<h3 id="install-dependencies" tabindex="-1"><a class="header-anchor" href="#install-dependencies" aria-hidden="true">#</a> Install dependencies</h3>
<div class="language-text line-numbers-mode" data-ext="text"><pre v-pre class="language-text"><code>npm install
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="开始使用" tabindex="-1"><a class="header-anchor" href="#开始使用" aria-hidden="true">#</a> 开始使用</h1>
<h2 id="通过-npm-安装" tabindex="-1"><a class="header-anchor" href="#通过-npm-安装" aria-hidden="true">#</a> 通过 npm 安装</h2>
<p>我们提供了 <code v-pre>reed-d/包名</code> npm 包，通过下面命令即可完成安装，<code v-pre>reed-d</code> 依赖于 与 <code v-pre>vue</code>，所以不要忘记安装依赖包。</p>
<div class="language-bash line-numbers-mode" data-ext="sh"><pre v-pre class="language-bash"><code><span class="token function">npm</span> i @reed-d/examples <span class="token parameter variable">-S</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="引入-reed-d-components" tabindex="-1"><a class="header-anchor" href="#引入-reed-d-components" aria-hidden="true">#</a> 引入 reed-d/components</h2>
<p>安装完成后，即可使用 <code v-pre>import</code> 或 <code v-pre>require</code> 使用。</p>
<p>完整引入 <code v-pre>reed-d/components</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> reed <span class="token keyword">from</span> <span class="token string">'reed-d/examples'</span><span class="token punctuation">;</span>

Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>reed<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按需引入 <code v-pre>@reed-d/components</code></p>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@sinokit/examples'</span><span class="token punctuation">;</span> <span class="token comment">// 引入单个组件，如 JsonEditor</span>

Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">'button'</span><span class="token punctuation">,</span> JsonEditor<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>持续迭代更新……</p>
</blockquote>
<h2 id="license" tabindex="-1"><a class="header-anchor" href="#license" aria-hidden="true">#</a> License</h2>
<p>MIT</p>
</div></template>


