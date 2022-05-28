import{_ as n,e as s}from"./app.ab7b14ba.js";const a={},e=s(`<h1 id="leetcode-palindrome-problem" tabindex="-1"><a class="header-anchor" href="#leetcode-palindrome-problem" aria-hidden="true">#</a> LeetCode : Palindrome Problem</h1><blockquote><p>Palindrome \uC22B\uC790\uB780, \uB4A4\uC9D1\uC5B4\uB3C4 \uB611\uAC19\uC740 \uC218\uB97C \uB9D0\uD55C\uB2E4</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">:</span>
            <span class="token comment"># negative numbers can&#39;t be a palindrome</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">elif</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
            <span class="token comment"># Numbers that end with 0, but not started with 0</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        <span class="token keyword">else</span> <span class="token punctuation">:</span>
            <span class="token comment"># reversing number</span>
            reversedNum <span class="token operator">=</span> <span class="token number">0</span>
            <span class="token keyword">while</span> x <span class="token operator">&gt;</span> reversedNum <span class="token punctuation">:</span>
                reversedNum <span class="token operator">=</span> reversedNum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x <span class="token operator">%</span> <span class="token number">10</span>
                x <span class="token operator">/=</span> <span class="token number">10</span>
                x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> reversedNum<span class="token punctuation">)</span>
            
            <span class="token keyword">return</span> x <span class="token operator">==</span> reversedNum <span class="token keyword">or</span> x <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">(</span>reversedNum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><h2 id="idea" tabindex="-1"><a class="header-anchor" href="#idea" aria-hidden="true">#</a> Idea</h2><ul><li><p>\uBA3C\uC800 \uB450 \uAC00\uC9C0 \uACBD\uC6B0\uC5D0 \uBB34\uC870\uAC74 False\uB97C \uBC18\uD658\uD560 \uC218 \uC788\uB2E4</p><ol><li><p>input\uC774 0\uBCF4\uB2E4 \uC791\uC740 \uACBD\uC6B0 : \uC74C\uC218\uB294 Palindrome Number\uC77C \uC218 \uC5C6\uB2E4</p><div class="language-python ext-py"><pre class="language-python"><code>    <span class="token keyword">if</span> x <span class="token operator">&lt;</span> <span class="token number">0</span> <span class="token punctuation">:</span>
        <span class="token comment"># negative numbers can&#39;t be a palindrome</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre></div></li><li><p>input\uC774 0\uC73C\uB85C \uB098\uB204\uC5B4 \uB5A8\uC5B4\uC9C0\uB294 \uACBD\uC6B0 : 0\uC73C\uB85C \uB05D\uB098\uC9C0\uB9CC, \uC2DC\uC791\uD558\uC9C0 \uC54A\uC73C\uBBC0\uB85C Palindrome\uC774 \uC544\uB2C8\uB2E4</p><div class="language-python ext-py"><pre class="language-python"><code><span class="token keyword">elif</span> <span class="token punctuation">(</span>x <span class="token operator">%</span> <span class="token number">10</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token keyword">and</span> <span class="token punctuation">(</span>x <span class="token operator">!=</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
    <span class="token comment"># Numbers that end with 0, but not started with 0</span>
    <span class="token keyword">return</span> <span class="token boolean">False</span>
</code></pre></div><ul><li>\uB2E8, \uC785\uB825\uAC12\uC774 0\uC774\uB77C\uBA74 0\uC73C\uB85C \uC2DC\uC791\uD558\uACE0 \uB05D\uB098\uBBC0\uB85C \uC608\uC678\uC774\uB2E4</li></ul></li></ol></li><li><p>\uC0C1\uAE30 \uACBD\uC6B0\uC5D0 \uBAA8\uB450 \uD574\uB2F9\uD558\uC9C0 \uC54A\uB294\uB2E4\uBA74, \uC720\uD6A8\uC131\uC744 \uAC80\uC0AC\uD55C\uB2E4</p><ol><li><p>\uC720\uD6A8\uC131 \uAC80\uC0AC\uB294, \uC785\uB825\uAC12\uC744 \uB458\uB85C \uCABC\uAC1C\uC5B4 \uC11C\uB85C \uBE44\uAD50\uD55C\uB2E4</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>reversedNum <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> x <span class="token operator">&gt;</span> reversedNum <span class="token punctuation">:</span>
        <span class="token comment"># reversedNum\uC5D0 x\uC758 \uB9C8\uC9C0\uB9C9 \uC790\uB9AC\uB97C &#39;\uBC00\uC5B4\uB123\uB294\uB2E4&#39;</span>
        reversedNum <span class="token operator">=</span> reversedNum <span class="token operator">*</span> <span class="token number">10</span> <span class="token operator">+</span> x <span class="token operator">%</span> <span class="token number">10</span>
        <span class="token comment"># x\uC758 \uB9C8\uC9C0\uB9C9 \uC790\uB9AC\uB97C \uC5C6\uC564\uB2E4 : </span>
        x <span class="token operator">/=</span> <span class="token number">10</span>
        x <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><ul><li><p>input\uC774 &quot;3443&quot; \uC774\uB77C\uBA74 (\uC9DD\uC218 \uAC2F\uC218)</p><ul><li><code>x = 34</code>, <code>reversedNum = 34</code> \uB85C \uB098\uB258\uC5B4\uC9C4\uB2E4</li></ul></li><li><p>input\uC774 &quot;34543&quot; \uC774\uB77C\uBA74 (\uD640\uC218 \uAC2F\uC218)</p><ul><li><code>x = 34</code>, <code>reversedNum = 345</code> \uB85C \uB098\uB258\uC5B4\uC9C4\uB2E4</li></ul></li></ul></li><li><p>x\uC640 reversedNum\uB97C \uBE44\uAD50\uD574 palindrome\uC778\uC9C0 \uACB0\uC815\uC9D3\uB294\uB2E4</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">return</span> x <span class="token operator">==</span> reversedNum <span class="token keyword">or</span> x <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">(</span>reversedNum <span class="token operator">/</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p><code>x == reversedNum</code> \uC740 input\uC774 \uC9DD\uC218 \uAC2F\uC218\uC778 Palindrome\uC5D0\uC11C True\uC774\uB2E4</p></li><li><p><code>x == int(reversedNum / 10)</code> \uC740 input\uC774 \uD640\uC218 \uAC2F\uC218\uC778 Palindrome\uC5D0\uC11C True\uC774\uB2E4</p></li></ul></li></ol></li></ul>`,5);function p(o,t){return e}var r=n(a,[["render",p],["__file","isPalindrome.html.vue"]]);export{r as default};