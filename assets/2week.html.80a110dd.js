import{_ as e,r as o,o as c,c as l,a as n,b as a,d as p,e as t}from"./app.ab7b14ba.js";const u={},i={href:"https://www.acmicpc.net/problem/1254",target:"_blank",rel:"noopener noreferrer"},r=p("\uD3A0\uB9B0\uB4DC\uB86C \uB9CC\uB4E4\uAE30"),k=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>x <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">:</span>
    tmp <span class="token operator">=</span> x <span class="token operator">+</span> x<span class="token punctuation">[</span><span class="token punctuation">:</span>i<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">if</span> tmp <span class="token operator">==</span> tmp<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>tmp<span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div>`,1),b={href:"https://www.acmicpc.net/problem/19598",target:"_blank",rel:"noopener noreferrer"},m=p("\uCD5C\uC18C \uD68C\uC758\uC2E4 \uAC1C\uC218"),d=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">import</span> heapq

<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
arr <span class="token operator">=</span> <span class="token builtin">sorted</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">map</span><span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> i<span class="token punctuation">,</span> time <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>arr<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> <span class="token keyword">not</span> result<span class="token punctuation">:</span>
        heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>result<span class="token punctuation">,</span> time<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> result<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">&lt;=</span> time<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
            heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>result<span class="token punctuation">)</span>
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>result<span class="token punctuation">,</span> time<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>result<span class="token punctuation">,</span> time<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1),y={href:"https://www.acmicpc.net/problem/11286",target:"_blank",rel:"noopener noreferrer"},w=p("\uC808\uB313\uAC12 \uD799"),h=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> sys
<span class="token keyword">import</span> heapq

<span class="token keyword">def</span> <span class="token function">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">return</span> sys<span class="token punctuation">.</span>stdin<span class="token punctuation">.</span>readline<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>

n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
hq <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>

<span class="token keyword">for</span> _ <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span><span class="token punctuation">:</span>
    cur <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> cur<span class="token punctuation">:</span>
        heapq<span class="token punctuation">.</span>heappush<span class="token punctuation">(</span>hq<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token builtin">abs</span><span class="token punctuation">(</span>cur<span class="token punctuation">)</span><span class="token punctuation">,</span> cur<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> <span class="token keyword">not</span> hq<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>heapq<span class="token punctuation">.</span>heappop<span class="token punctuation">(</span>hq<span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div>`,1),_={href:"https://leetcode.com/problems/valid-parentheses/",target:"_blank",rel:"noopener noreferrer"},f=p("Valid Parentheses"),g=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">isValid</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> s<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token builtin">bool</span><span class="token punctuation">:</span>
        
        st <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
        m <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;]&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;[&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;}&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;{&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;(&quot;</span><span class="token punctuation">}</span>
        result <span class="token operator">=</span> <span class="token boolean">True</span>
        
        <span class="token keyword">for</span> i <span class="token keyword">in</span> s<span class="token punctuation">:</span>
            <span class="token keyword">if</span> i <span class="token operator">==</span> <span class="token string">&quot;]&quot;</span> <span class="token keyword">or</span> i <span class="token operator">==</span> <span class="token string">&quot;}&quot;</span> <span class="token keyword">or</span> i <span class="token operator">==</span> <span class="token string">&quot;)&quot;</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> <span class="token keyword">not</span> st<span class="token punctuation">:</span>
                    result <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token keyword">break</span>
                
                <span class="token keyword">if</span> st<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> m<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">:</span>
                    result <span class="token operator">=</span> <span class="token boolean">False</span>
                    <span class="token keyword">break</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                st<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        
        <span class="token keyword">if</span> <span class="token builtin">len</span><span class="token punctuation">(</span>st<span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">0</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token boolean">False</span>
        
        <span class="token keyword">return</span> result
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,1),v={href:"https://leetcode.com/problems/two-sum/",target:"_blank",rel:"noopener noreferrer"},q=p("Two Sum"),x=t(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Solution</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">twoSum</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> nums<span class="token punctuation">:</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">,</span> target<span class="token punctuation">:</span> <span class="token builtin">int</span><span class="token punctuation">)</span> <span class="token operator">-</span><span class="token operator">&gt;</span> List<span class="token punctuation">[</span><span class="token builtin">int</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
        
        values <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">for</span> i<span class="token punctuation">,</span> value <span class="token keyword">in</span> <span class="token builtin">enumerate</span><span class="token punctuation">(</span>nums<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> target <span class="token operator">-</span> value <span class="token keyword">in</span> values<span class="token punctuation">:</span>
                <span class="token keyword">return</span> <span class="token punctuation">[</span>values<span class="token punctuation">[</span>target <span class="token operator">-</span> value<span class="token punctuation">]</span><span class="token punctuation">,</span> i<span class="token punctuation">]</span> 
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                values<span class="token punctuation">[</span>value<span class="token punctuation">]</span> <span class="token operator">=</span> i
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,1);function V(S,L){const s=o("ExternalLinkIcon");return c(),l("ul",null,[n("li",null,[n("p",null,[n("a",i,[r,a(s)])]),k]),n("li",null,[n("p",null,[n("a",b,[m,a(s)])]),d]),n("li",null,[n("p",null,[n("a",y,[w,a(s)])]),h]),n("li",null,[n("p",null,[n("a",_,[f,a(s)])]),g]),n("li",null,[n("p",null,[n("a",v,[q,a(s)])]),x])])}var B=e(u,[["render",V],["__file","2week.html.vue"]]);export{B as default};