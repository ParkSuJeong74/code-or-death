import{_ as n,e as s}from"./app.ab7b14ba.js";const a={},p=s(`<h1 id="\u1107\u1162\u11A8\u110C\u116E\u11AB-2606\u1107\u1165\u11AB-\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173" tabindex="-1"><a class="header-anchor" href="#\u1107\u1162\u11A8\u110C\u116E\u11AB-2606\u1107\u1165\u11AB-\u1107\u1161\u110B\u1175\u1105\u1165\u1109\u1173" aria-hidden="true">#</a> [\uBC31\uC900 2606\uBC88] \uBC14\uC774\uB7EC\uC2A4</h1><blockquote><p>dfs/bfs</p></blockquote><h2 id="\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" aria-hidden="true">#</a> \u{1F4CB} \uBB38\uC81C</h2><p>\uC2E0\uC885 \uBC14\uC774\uB7EC\uC2A4\uC778 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uB294 \uB124\uD2B8\uC6CC\uD06C\uB97C \uD1B5\uD574 \uC804\uD30C\uB41C\uB2E4.<br> \uD55C \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uBA74 \uADF8 \uCEF4\uD4E8\uD130\uC640 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uBAA8\uB4E0 \uCEF4\uD4E8\uD130\uB294 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB41C\uB2E4.</p><p><img src="https://user-images.githubusercontent.com/28249915/169787497-1d2aa779-8432-4ab2-b88f-0bcd94d07830.png" alt="image"></p><p>\uC608\uB97C \uB4E4\uC5B4 7\uB300\uC758 \uCEF4\uD4E8\uD130\uAC00 &lt;\uADF8\uB9BC 1&gt;\uACFC \uAC19\uC774 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC5F0\uACB0\uB418\uC5B4 \uC788\uB2E4\uACE0 \uD558\uC790.<br> 1\uBC88 \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uBA74 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uB294 2\uBC88\uACFC 5\uBC88 \uCEF4\uD4E8\uD130\uB97C \uAC70\uCCD0 3\uBC88\uACFC 6\uBC88 \uCEF4\uD4E8\uD130\uAE4C\uC9C0 \uC804\uD30C\uB418\uC5B4 2, 3, 5, 6 \uB124 \uB300\uC758 \uCEF4\uD4E8\uD130\uB294 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB41C\uB2E4.<br> \uD558\uC9C0\uB9CC 4\uBC88\uACFC 7\uBC88 \uCEF4\uD4E8\uD130\uB294 1\uBC88 \uCEF4\uD4E8\uD130\uC640 \uB124\uD2B8\uC6CC\uD06C\uC0C1\uC5D0\uC11C \uC5F0\uACB0\uB418\uC5B4 \uC788\uC9C0 \uC54A\uAE30 \uB54C\uBB38\uC5D0 \uC601\uD5A5\uC744 \uBC1B\uC9C0 \uC54A\uB294\uB2E4.</p><p>\uC5B4\uB290 \uB0A0 1\uBC88 \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB838\uB2E4.<br> \uCEF4\uD4E8\uD130\uC758 \uC218\uC640 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC11C\uB85C \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uC815\uBCF4\uAC00 \uC8FC\uC5B4\uC9C8 \uB54C, 1\uBC88 \uCEF4\uD4E8\uD130\uB97C \uD1B5\uD574 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB418\uB294 \uCEF4\uD4E8\uD130\uC758 \uC218\uB97C \uCD9C\uB825\uD558\uB294 \uD504\uB85C\uADF8\uB7A8\uC744 \uC791\uC131\uD558\uC2DC\uC624.</p><h2 id="\u{1F449}-\u110B\u1175\u11B8\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u{1F449}-\u110B\u1175\u11B8\u1105\u1167\u11A8" aria-hidden="true">#</a> \u{1F449} \uC785\uB825</h2><p>\uCCAB\uC9F8 \uC904\uC5D0\uB294 \uCEF4\uD4E8\uD130\uC758 \uC218\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4.<br> \uCEF4\uD4E8\uD130\uC758 \uC218\uB294 100 \uC774\uD558\uC774\uACE0 \uAC01 \uCEF4\uD4E8\uD130\uC5D0\uB294 1\uBC88 \uBD80\uD130 \uCC28\uB840\uB300\uB85C \uBC88\uD638\uAC00 \uB9E4\uACA8\uC9C4\uB2E4.<br> \uB458\uC9F8 \uC904\uC5D0\uB294 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC9C1\uC811 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uCEF4\uD4E8\uD130 \uC30D\uC758 \uC218\uAC00 \uC8FC\uC5B4\uC9C4\uB2E4.<br> \uC774\uC5B4\uC11C \uADF8 \uC218\uB9CC\uD07C \uD55C \uC904\uC5D0 \uD55C \uC30D\uC529 \uB124\uD2B8\uC6CC\uD06C \uC0C1\uC5D0\uC11C \uC9C1\uC811 \uC5F0\uACB0\uB418\uC5B4 \uC788\uB294 \uCEF4\uD4E8\uD130\uC758 \uBC88\uD638 \uC30D\uC774 \uC8FC\uC5B4\uC9C4\uB2E4.</p><h2 id="\u{1F448}-\u110E\u116E\u11AF\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u{1F448}-\u110E\u116E\u11AF\u1105\u1167\u11A8" aria-hidden="true">#</a> \u{1F448} \uCD9C\uB825</h2><p>1\uBC88 \uCEF4\uD4E8\uD130\uAC00 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB838\uC744 \uB54C, 1\uBC88 \uCEF4\uD4E8\uD130\uB97C \uD1B5\uD574 \uC6DC \uBC14\uC774\uB7EC\uC2A4\uC5D0 \uAC78\uB9AC\uAC8C \uB418\uB294 \uCEF4\uD4E8\uD130\uC758 \uC218\uB97C \uCCAB\uC9F8 \uC904\uC5D0 \uCD9C\uB825\uD55C\uB2E4.</p><p><strong>\uC608\uC81C1</strong></p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>Input:
7
6
1 2
2 3
1 5
5 2
5 6
4 7

Output:
4
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h2 id="\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \u{1F4DD} \uD480\uC774</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token builtin">input</span> <span class="token operator">=</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline

<span class="token keyword">def</span> <span class="token function">dfs</span><span class="token punctuation">(</span>arr<span class="token punctuation">,</span> v<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">:</span>
  visited<span class="token punctuation">[</span>v<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
  <span class="token keyword">for</span> i <span class="token keyword">in</span> arr<span class="token punctuation">[</span>v<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> visited<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
      dfs<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> i<span class="token punctuation">,</span> visited<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
  n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  link <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  arr <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">]</span>

  <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>link<span class="token punctuation">)</span><span class="token punctuation">:</span>
    c1<span class="token punctuation">,</span> c2 <span class="token operator">=</span> <span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    arr<span class="token punctuation">[</span>c1<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>c2<span class="token punctuation">)</span>
    arr<span class="token punctuation">[</span>c2<span class="token punctuation">]</span><span class="token punctuation">.</span>append<span class="token punctuation">(</span>c1<span class="token punctuation">)</span>

  visited <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">*</span> <span class="token punctuation">(</span>n<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">)</span>

  dfs<span class="token punctuation">(</span>arr<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> visited<span class="token punctuation">)</span>
  <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">sum</span><span class="token punctuation">(</span>visited<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p>dfs \uBB38\uC81C\uC600\uB2E4.<br> \uC138 \uBC88\uC9F8 \uC904\uBD80\uD130 \uC5F0\uACB0\uB418\uC5B4\uC788\uB294 \uCEF4\uD4E8\uD130 \uC30D\uC774 \uC8FC\uC5B4\uC9C0\uB294\uB370 \uC774\uB97C \uAC01 \uCEF4\uD4E8\uD130\uC640 \uC5F0\uACB0\uB41C \uCEF4\uD4E8\uD130\uC758 \uB9AC\uC2A4\uD2B8\uB97C \uC800\uC7A5\uD558\uB294 \uC2DD\uC73C\uB85C arr\uC5D0 \uC800\uC7A5\uD55C\uB2E4.</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token punctuation">[</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\uADF8\uB9AC\uACE0 \uC774 \uADF8\uB798\uD504\uB97C \uD65C\uC6A9\uD574 \uAC01 \uB178\uB4DC\uB97C \uBC29\uBB38\uD558\uBA74\uC11C \uBC29\uBB38 \uC0C1\uD0DC\uB97C \uC800\uC7A5\uD558\uB294 \uB9AC\uC2A4\uD2B8\uC778 visited\uC758 \uAC12\uC744 \uBCC0\uACBD\uD574\uC900\uB2E4.</p>`,18);function t(e,c){return p}var u=n(a,[["render",t],["__file","bj_2606.html.vue"]]);export{u as default};
