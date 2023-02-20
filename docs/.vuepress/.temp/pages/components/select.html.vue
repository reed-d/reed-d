<template><div><h1 id="select-下拉选择框" tabindex="-1"><a class="header-anchor" href="#select-下拉选择框" aria-hidden="true">#</a> Select 下拉选择框</h1>
<h2 id="使用方式" tabindex="-1"><a class="header-anchor" href="#使用方式" aria-hidden="true">#</a> 使用方式</h2>
<div class="language-javascript line-numbers-mode" data-ext="js"><pre v-pre class="language-javascript"><code><span class="token keyword">import</span> RdSelect <span class="token keyword">from</span> <span class="token string">'Reed-d'</span><span class="token punctuation">;</span>
Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>RdSelect<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例" aria-hidden="true">#</a> 示例</h2>
<h3 id="常规用法" tabindex="-1"><a class="header-anchor" href="#常规用法" aria-hidden="true">#</a> 常规用法</h3>
<div class="custom-container tip"><p class="custom-container-title">TIP</p>
<div class="language-html line-numbers-mode" data-ext="html"><pre v-pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>box-vue<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Vue {{ message }}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>
  <span class="token function-variable function">data</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">'Hello World'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span><span class="token punctuation">></span></span><span class="token style"><span class="token language-css">
<span class="token selector">.box-vue</span> <span class="token punctuation">{</span> <span class="token property">color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2>
<p>基础的按钮用法。</p>
<h2 id="api" tabindex="-1"><a class="header-anchor" href="#api" aria-hidden="true">#</a> API</h2>
<h3 id="attributes" tabindex="-1"><a class="header-anchor" href="#attributes" aria-hidden="true">#</a> Attributes</h3>
<table>
<thead>
<tr>
<th style="text-align:center">参数</th>
<th>说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center"><code v-pre>render-type</code></td>
<td>数据渲染方式，有两种：<code v-pre>html</code> 、<code v-pre>json</code></td>
<td style="text-align:center"><code v-pre>String</code></td>
<td style="text-align:center"><code v-pre>html</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>data</code></td>
<td>渲染的时间数据</td>
<td style="text-align:center"><code v-pre>Object</code></td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>height</code></td>
<td>滚动条 brush 的高度</td>
<td style="text-align:center"><code v-pre>Number</code></td>
<td style="text-align:center"><code v-pre>14</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>margin</code></td>
<td>文字和时间轴之间的 margin 距离</td>
<td style="text-align:center"><code v-pre>Number</code></td>
<td style="text-align:center"><code v-pre>19</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>orientation</code></td>
<td>文字朝向</td>
<td style="text-align:center"><code v-pre>String</code></td>
<td style="text-align:center"><code v-pre>top</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>tooltip</code></td>
<td>悬浮在节点上的 tooltip 文字展示</td>
<td style="text-align:center"><code v-pre>String</code></td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>nowrap</code></td>
<td>是否换行，本质是限制 brush resize 拉长的限制</td>
<td style="text-align:center"><code v-pre>Boolean</code></td>
<td style="text-align:center"><code v-pre>false</code></td>
</tr>
<tr>
<td style="text-align:center"><code v-pre>brushMaxWidth</code></td>
<td>Brush 最大宽度（对应控制 timeline 缩小)，当 nowrap 为 true 时才生效</td>
<td style="text-align:center"><code v-pre>Number</code></td>
<td style="text-align:center"><code v-pre>500</code></td>
</tr>
</tbody>
</table>
</div></template>


