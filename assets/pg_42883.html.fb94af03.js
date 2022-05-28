import{_ as n,e as s}from"./app.ab7b14ba.js";const a={},t=s(`<h1 id="\u110F\u1173\u11AB-\u1109\u116E-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" tabindex="-1"><a class="header-anchor" href="#\u110F\u1173\u11AB-\u1109\u116E-\u1106\u1161\u11AB\u1103\u1173\u11AF\u1100\u1175" aria-hidden="true">#</a> \uD070 \uC218 \uB9CC\uB4E4\uAE30</h1><blockquote><p>\uADF8\uB9AC\uB514</p></blockquote><h2 id="\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" tabindex="-1"><a class="header-anchor" href="#\u{1F4CB}-\u1106\u116E\u11AB\u110C\u1166" aria-hidden="true">#</a> \u{1F4CB} \uBB38\uC81C</h2><p>\uC5B4\uB5A4 \uC22B\uC790\uC5D0\uC11C k\uAC1C\uC758 \uC218\uB97C \uC81C\uAC70\uD588\uC744 \uB54C \uC5BB\uC744 \uC218 \uC788\uB294 \uAC00\uC7A5 \uD070 \uC22B\uC790\uB97C \uAD6C\uD558\uB824 \uD569\uB2C8\uB2E4.</p><p>\uC608\uB97C \uB4E4\uC5B4, \uC22B\uC790 1924\uC5D0\uC11C \uC218 \uB450 \uAC1C\uB97C \uC81C\uAC70\uD558\uBA74 [19, 12, 14, 92, 94, 24] \uB97C \uB9CC\uB4E4 \uC218 \uC788\uC2B5\uB2C8\uB2E4.<br> \uC774 \uC911 \uAC00\uC7A5 \uD070 \uC22B\uC790\uB294 94 \uC785\uB2C8\uB2E4.</p><p>\uBB38\uC790\uC5F4 \uD615\uC2DD\uC73C\uB85C \uC22B\uC790 number\uC640 \uC81C\uAC70\uD560 \uC218\uC758 \uAC1C\uC218 k\uAC00 solution \uD568\uC218\uC758 \uB9E4\uAC1C\uBCC0\uC218\uB85C \uC8FC\uC5B4\uC9D1\uB2C8\uB2E4.<br> number\uC5D0\uC11C k \uAC1C\uC758 \uC218\uB97C \uC81C\uAC70\uD588\uC744 \uB54C \uB9CC\uB4E4 \uC218 \uC788\uB294 \uC218 \uC911 \uAC00\uC7A5 \uD070 \uC22B\uC790\uB97C \uBB38\uC790\uC5F4 \uD615\uD0DC\uB85C return \uD558\uB3C4\uB85D solution \uD568\uC218\uB97C \uC644\uC131\uD558\uC138\uC694.</p><h2 id="\u{1F449}-\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8" tabindex="-1"><a class="header-anchor" href="#\u{1F449}-\u110B\u1175\u11B8\u110E\u116E\u11AF\u1105\u1167\u11A8" aria-hidden="true">#</a> \u{1F449} \uC785\uCD9C\uB825</h2><table><thead><tr><th style="text-align:center;">number</th><th style="text-align:center;">k</th><th style="text-align:center;">return</th></tr></thead><tbody><tr><td style="text-align:center;">&quot;1924&quot;</td><td style="text-align:center;">2</td><td style="text-align:center;">&quot;94&quot;</td></tr><tr><td style="text-align:center;">&quot;1231234&quot;</td><td style="text-align:center;">3</td><td style="text-align:center;">&quot;3234&quot;</td></tr><tr><td style="text-align:center;">&quot;4177252841&quot;</td><td style="text-align:center;">4</td><td style="text-align:center;">&quot;775841&quot;</td></tr></tbody></table><h2 id="\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u{1F4DD}-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \u{1F4DD} \uD480\uC774</h2><h3 id="\u274C-\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u274C-\u110E\u1165\u11BA-\u1107\u1165\u11AB\u110D\u1162-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \u274C \uCCAB \uBC88\uC9F8 \uD480\uC774</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> itertools <span class="token keyword">import</span> combinations

<span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">:</span>
    answer <span class="token operator">=</span> <span class="token number">0</span>
    arr <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span>combinations<span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token builtin">len</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token operator">-</span>k<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> item <span class="token keyword">in</span> arr<span class="token punctuation">:</span>
      temp <span class="token operator">=</span> <span class="token string">&#39;&#39;</span>
      <span class="token keyword">for</span> i <span class="token keyword">in</span> item<span class="token punctuation">:</span>
        temp <span class="token operator">+=</span> i
        answer <span class="token operator">=</span> <span class="token builtin">max</span><span class="token punctuation">(</span>answer<span class="token punctuation">,</span> <span class="token builtin">int</span><span class="token punctuation">(</span>temp<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">str</span><span class="token punctuation">(</span>answer<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>\uBB38\uC81C\uB97C \uB2E8\uC21C\uD788 \uC0DD\uAC01\uD574 \uC870\uD569\uC744 \uC774\uC6A9\uD574 \uD47C \uC608\uC2DC\uC774\uB2E4.<br> \uB2F9\uC5F0\uD558\uAC8C\uB3C4 \uC2DC\uAC04\uCD08\uACFC\uAC00 \uB09C\uB2E4.</p><h3 id="\u2714\uFE0F-\u1103\u116E-\u1107\u1165\u11AB\u110D\u1162-\u1111\u116E\u11AF\u110B\u1175" tabindex="-1"><a class="header-anchor" href="#\u2714\uFE0F-\u1103\u116E-\u1107\u1165\u11AB\u110D\u1162-\u1111\u116E\u11AF\u110B\u1175" aria-hidden="true">#</a> \u2714\uFE0F \uB450 \uBC88\uC9F8 \uD480\uC774</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">solution</span><span class="token punctuation">(</span>number<span class="token punctuation">,</span> k<span class="token punctuation">)</span><span class="token punctuation">:</span>
    answer <span class="token operator">=</span> <span class="token punctuation">[</span>number<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">]</span>

    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token builtin">len</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
      <span class="token keyword">while</span> answer <span class="token keyword">and</span> k <span class="token operator">&gt;</span> <span class="token number">0</span> <span class="token keyword">and</span> answer<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">&lt;</span> number<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
        answer<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        k <span class="token operator">-=</span> <span class="token number">1</span>
      answer<span class="token punctuation">.</span>append<span class="token punctuation">(</span>number<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>answer<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span><span class="token operator">-</span>k<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div><p>\uBB38\uC81C\uC758 \uBD84\uB958\uC778 \uADF8\uB9AC\uB514\uC5D0 \uCD08\uC810\uC744 \uB454 \uBB38\uC81C \uD480\uC774\uC774\uB2E4.<br> \uADF8\uB9AC\uB514\uB85C \uD480\uAE30 \uC704\uD574 \uC2A4\uD0DD\uC744 \uC774\uC6A9\uD55C\uB2E4.</p><p>\uBA3C\uC800 \uC2A4\uD0DD\uC778 answer\uC5D0 number\uC758 0\uBC88 \uC778\uB371\uC2A4 \uC694\uC18C\uB97C \uB2F4\uC544\uC900\uB2E4.<br> \uADF8\uB9AC\uACE0 answer\uC640 k\uAC00 \uC720\uD6A8\uD560 \uB54C, answer\uC758 top\uC5D0 \uC788\uB294 \uC694\uC18C\uAC00 \uB4E4\uC5B4\uC62C \uC694\uC18C\uBCF4\uB2E4 \uC791\uB2E4\uBA74 number[i]\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uC740 \uAC12\uC774 \uB098\uC62C \uB54C\uAE4C\uC9C0 answer\uC758 \uC694\uC18C\uB4E4\uC744 pop\uD55C\uB2E4.<br> \uB610\uD55C \uC218\uB97C \uC81C\uAC70\uD558\uB294 \uACFC\uC815\uC774\uBBC0\uB85C k\uB3C4 1\uC529 \uAC10\uC18C\uC2DC\uD0A8\uB2E4.<br> \uB354\uC774\uC0C1 \uAC10\uC18C\uD560 \uAC83\uC774 \uC5C6\uB2E4\uBA74 answer\uC5D0 number[i]\uB97C \uB123\uC5B4\uC900\uB2E4.</p><p>for\uBB38\uC758 \uC21C\uD68C\uAC00 \uB05D\uB0AC\uB2E4\uBA74 answer\uC758 \uC694\uC18C\uB4E4\uC744 join\uC73C\uB85C \uD569\uCCD0\uC8FC\uACE0 \uC720\uD6A8\uD55C \uAE38\uC774\uB9CC\uD07C\uB9CC \uCD9C\uB825\uD55C\uB2E4.</p>`,17);function e(p,o){return t}var r=n(a,[["render",e],["__file","pg_42883.html.vue"]]);export{r as default};