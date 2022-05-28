import{_ as p,r as e,o as t,c as o,a as n,b as c,F as l,d as s,e as r}from"./app.ab7b14ba.js";const u={},i={id:"\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#\u1111\u1169\u11AF\u1105\u1175\u110B\u1169\u1106\u1175\u1102\u1169","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://www.acmicpc.net/problem/1343",target:"_blank",rel:"noopener noreferrer"},m=s("\uD3F4\uB9AC\uC624\uBBF8\uB178"),h=r(`<h3 id="sol-1" tabindex="-1"><a class="header-anchor" href="#sol-1" aria-hidden="true">#</a> sol 1.</h3><p>\uD3F4\uB9AC\uC624\uBBF8\uB178 2\uAC1C(AAAA, BB)\uB97C \uBB34\uD55C\uAC1C\uB9CC\uD07C \uAC16\uACE0 \uC788\uB294 \uC0C1\uD669<br> \uC785\uB825\uBC1B\uC740 \uBCF4\uB4DC\uD310\uC744 \uC21C\uC11C\uB300\uB85C \uC77D\uB294\uB2E4.<br> &#39;XXXX&#39;\uAC00 \uC788\uC73C\uBA74 \uC6B0\uC120\uC801\uC73C\uB85C AAAA\uB97C \uCD94\uAC00,<br> &#39;XX&#39;\uAC00 \uC788\uB2E4\uBA74 BB\uB85C \uCD94\uAC00\uD55C\uB2E4.<br> &#39;X&#39;\uAC00 \uC788\uB2E4\uBA74 break\uB85C \uBE60\uC838\uB098\uAC04\uB2E4.<br> \uCD5C\uC885\uC801\uC73C\uB85C \uC785\uB825\uBC1B\uC740 board\uC758 len\uACFC result\uC758 len\uC774 \uAC19\uB2E4\uBA74 result\uB97C \uCD9C\uB825\uD558\uACE0, \uAC19\uC9C0 \uC54A\uB2E4\uBA74 -1\uB97C \uCD9C\uB825\uD55C\uB2E4.</p><br><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

board <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
i <span class="token operator">=</span> <span class="token number">0</span>

<span class="token keyword">while</span> i <span class="token operator">&lt;</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">if</span> board<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">4</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&#39;XXXX&#39;</span><span class="token punctuation">:</span>
    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;AAAA&#39;</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">4</span>
  <span class="token keyword">elif</span> board<span class="token punctuation">[</span>i<span class="token punctuation">:</span>i<span class="token operator">+</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;XX&#39;</span><span class="token punctuation">:</span>
    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;BB&#39;</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">2</span>
  <span class="token keyword">elif</span> board<span class="token punctuation">[</span>i<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&#39;.&#39;</span><span class="token punctuation">:</span>
    result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&#39;.&#39;</span><span class="token punctuation">)</span>
    i <span class="token operator">+=</span> <span class="token number">1</span>
  <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">break</span>

result <span class="token operator">=</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">len</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><hr><br><h3 id="sol-2" tabindex="-1"><a class="header-anchor" href="#sol-2" aria-hidden="true">#</a> sol 2.</h3><p>\uD30C\uC774\uC36C\uC758 <code>replace()</code> \uD568\uC218\uB294 \uC67C\uCABD\uBD80\uD130 \uD574\uB2F9\uD558\uB294 \uBB38\uC790\uC5F4\uC744 \uCC3E\uC544\uC11C \uCE58\uD658\uD574\uC8FC\uB294 \uD568\uC218\uC774\uB2E4.<br><code>replace()</code>\uD568\uC218\uB97C \uC774\uC6A9\uD574 \uBAA8\uB4E0 &#39;XXXX&#39;\uB97C &#39;AAAA&#39;\uB85C \uCE58\uD658\uD55C \uD6C4,<br> \uB0A8\uC740 \uBB38\uC790\uC5F4\uC5D0\uC11C \uBAA8\uB4E0 &#39;XX&#39;\uB97C &#39;BB&#39;\uB85C \uCE58\uD658\uD55C\uB2E4.<br> replace\uCC98\uB9AC\uAC00 \uB05D\uB09C \uBB38\uC790\uC5F4\uC5D0 &#39;X&#39;\uAC00 \uB0A8\uC544\uC788\uB294 \uACBD\uC6B0 -1, \uADF8\uB807\uC9C0 \uC54A\uB2E4\uBA74 replace\uB41C board\uB97C \uCD9C\uB825\uD55C\uB2E4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
  <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

board <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

board <span class="token operator">=</span> board<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;XXXX&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;AAAA&#39;</span><span class="token punctuation">)</span>
board <span class="token operator">=</span> board<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;XX&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;BB&#39;</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> <span class="token string">&#39;X&#39;</span> <span class="token keyword">in</span> board<span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span>board<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div>`,9);function y(_,X){const a=e("ExternalLinkIcon");return t(),o(l,null,[n("h1",i,[k,b,n("a",d,[m,c(a)])]),h],64)}var g=p(u,[["render",y],["__file","boj_1343.html.vue"]]);export{g as default};
