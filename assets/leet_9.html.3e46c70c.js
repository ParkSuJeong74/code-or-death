import{_ as p,r as t,o as e,c as o,a as n,b as c,F as l,d as s,e as r}from"./app.ab7b14ba.js";const u={},i={id:"palindrome-number",tabindex:"-1"},k=n("a",{class:"header-anchor",href:"#palindrome-number","aria-hidden":"true"},"#",-1),b=s(),d={href:"https://leetcode.com/problems/palindrome-number/",target:"_blank",rel:"noopener noreferrer"},m=s("Palindrome Number"),_=r(`<p>deque\uB97C \uC774\uC6A9\uD558\uC5EC \uC55E \uB4A4 \uC6D0\uC18C\uB97C \uCD9C\uB825\uD574 \uBE44\uAD50\uD558\uB294 \uBC29\uBC95</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> collections <span class="token keyword">import</span> deque

<span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type x: int
        :rtype: bool
        &quot;&quot;&quot;</span>
        strs <span class="token operator">=</span> deque<span class="token punctuation">(</span><span class="token punctuation">[</span>i <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

        <span class="token keyword">while</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">1</span><span class="token punctuation">:</span>
          <span class="token keyword">if</span> strs<span class="token punctuation">.</span>popleft<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> strs<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>

        <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><p>\uB9AC\uC2A4\uD2B8\uC758 \uC2AC\uB77C\uC774\uC2F1\uC744 \uC774\uC6A9\uD574 \uB9AC\uC2A4\uD2B8\uB97C \uBC18\uC73C\uB85C \uC798\uB77C\uC11C \uC55E \uB4A4\uB97C \uBE44\uAD50\uD558\uB294 \uBC29\uBC95</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isPalindrome</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        :type x: int
        :rtype: bool
        &quot;&quot;&quot;</span>
        strs <span class="token operator">=</span> <span class="token builtin">str</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span>
        strs_head <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">]</span>
        <span class="token comment"># \uBB38\uC790\uC5F4 \uAE38\uC774\uAC00 \uC9DD\uC218\uC778\uC9C0 \uD640\uC218\uC778\uC9C0\uC5D0 \uB530\uB77C \uB2EC\uB77C\uC9D0</span>
        strs_tail <span class="token operator">=</span> strs<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token operator">%</span><span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span> <span class="token keyword">else</span> strs<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>strs<span class="token punctuation">)</span><span class="token operator">//</span><span class="token number">2</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

        <span class="token keyword">return</span> strs_head <span class="token operator">==</span> strs_tail<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,4);function h(y,f){const a=t("ExternalLinkIcon");return e(),o(l,null,[n("h1",i,[k,b,n("a",d,[m,c(a)])]),_],64)}var w=p(u,[["render",h],["__file","leet_9.html.vue"]]);export{w as default};
