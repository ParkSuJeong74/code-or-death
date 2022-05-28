import{_ as n,e as a}from"./app.ab7b14ba.js";const s={},e=a(`<h1 id="_11508\u1107\u1165\u11AB-\u1112\u116E\u110B\u1171-\u1111\u116D\u1100\u1175\u1109\u1175\u11A82" tabindex="-1"><a class="header-anchor" href="#_11508\u1107\u1165\u11AB-\u1112\u116E\u110B\u1171-\u1111\u116D\u1100\u1175\u1109\u1175\u11A82" aria-hidden="true">#</a> 11508\uBC88 \uD6C4\uC704 \uD45C\uAE30\uC2DD2</h1><h2 id="input" tabindex="-1"><a class="header-anchor" href="#input" aria-hidden="true">#</a> Input</h2><p>\uCCAB\uC9F8 \uC904\uC5D0 \uD53C\uC5F0\uC0B0\uC790\uC758 \uAC1C\uC218(1 \u2264 N \u2264 26) \uAC00 \uC8FC\uC5B4\uC9C4\uB2E4. \uADF8\uB9AC\uACE0 \uB458\uC9F8 \uC904\uC5D0\uB294 \uD6C4\uC704 \uD45C\uAE30\uC2DD\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. (\uC5EC\uAE30\uC11C \uD53C\uC5F0\uC0B0\uC790\uB294 A~Z\uC758 \uC601\uB300\uBB38\uC790\uC774\uBA70, A\uBD80\uD130 \uC21C\uC11C\uB300\uB85C N\uAC1C\uC758 \uC601\uB300\uBB38\uC790\uB9CC\uC774 \uC0AC\uC6A9\uB418\uBA70, \uAE38\uC774\uB294 100\uC744 \uB118\uC9C0 \uC54A\uB294\uB2E4) \uADF8\uB9AC\uACE0 \uC14B\uC9F8 \uC904\uBD80\uD130 N+2\uBC88\uC9F8 \uC904\uAE4C\uC9C0\uB294 \uAC01 \uD53C\uC5F0\uC0B0\uC790\uC5D0 \uB300\uC751\uD558\uB294 \uAC12\uC774 \uC8FC\uC5B4\uC9C4\uB2E4. 3\uBC88\uC9F8 \uC904\uC5D0\uB294 A\uC5D0 \uD574\uB2F9\uD558\uB294 \uAC12, 4\uBC88\uC9F8 \uC904\uC5D0\uB294 B\uC5D0 \uD574\uB2F9\uD558\uB294\uAC12 , 5\uBC88\uC9F8 \uC904\uC5D0\uB294 C ...\uC774 \uC8FC\uC5B4\uC9C4\uB2E4, \uADF8\uB9AC\uACE0 \uD53C\uC5F0\uC0B0\uC790\uC5D0 \uB300\uC751 \uD558\uB294 \uAC12\uC740 100\uBCF4\uB2E4 \uC791\uAC70\uB098 \uAC19\uC740 \uC790\uC5F0\uC218\uC774\uB2E4.</p><p>\uD6C4\uC704 \uD45C\uAE30\uC2DD\uC744 \uC55E\uC5D0\uC11C\uBD80\uD130 \uACC4\uC0B0\uD588\uC744 \uB54C, \uC2DD\uC758 \uACB0\uACFC\uC640 \uC911\uAC04 \uACB0\uACFC\uAC00 -20\uC5B5\uBCF4\uB2E4 \uD06C\uAC70\uB098 \uAC19\uACE0, 20\uC5B5\uBCF4\uB2E4 \uC791\uAC70\uB098 \uAC19\uC740 \uC785\uB825\uB9CC \uC8FC\uC5B4\uC9C4\uB2E4. <br><br></p><h2 id="output" tabindex="-1"><a class="header-anchor" href="#output" aria-hidden="true">#</a> Output</h2><p>\uACC4\uC0B0 \uACB0\uACFC\uB97C \uC18C\uC22B\uC810 \uB458\uC9F8 \uC790\uB9AC\uAE4C\uC9C0 \uCD9C\uB825\uD55C\uB2E4. <br><br></p><h2 id="explanation" tabindex="-1"><a class="header-anchor" href="#explanation" aria-hidden="true">#</a> Explanation</h2><ul><li><p>dictionary\uC5D0 \uB300\uBB38\uC790 \uC54C\uD30C\uBCB3\uC744 key, value\uB97C \uD53C\uC5F0\uC0B0\uC790\uB85C \uC800\uC7A5</p></li><li><p>\uD6C4\uC704\uD45C\uAE30\uC2DD\uC758 \uACC4\uC0B0 \uC21C\uC11C\uB294 \uC5F0\uC0B0\uC790\uC640 \uAC00\uAE4C\uC6B4 \uB450 \uD53C\uC5F0\uC0B0\uC790\uC5D0 \uC5F0\uC0B0\uC744 \uD558\uBBC0\uB85C \uD6C4\uC785\uC120\uCD9C\uC778 stack\uC744 \uD65C\uC6A9</p></li><li><p>\uD6C4\uC704\uD45C\uAE30\uC2DD\uC744 \uBC18\uBCF5\uBB38\uC73C\uB85C \uD558\uB098\uC529 \uAC80\uC0AC\uD558\uBA70 \uD53C\uC5F0\uC0B0\uC790\uC778 \uACBD\uC6B0 stack\uC5D0 \uC800\uC7A5, \uC5F0\uC0B0\uC790\uC778 \uACBD\uC6B0 stack\uC5D0\uC11C \uD53C\uC5F0\uC0B0\uC790\uB97C pop\uD558\uC5EC eval()\uB85C \uC5F0\uC0B0 \uC9C4\uD589 \uD6C4 \uACB0\uACFClist\uC5D0 \uC800\uC7A5</p></li><li><p>\uC5F0\uC0B0 \uBD80\uBD84\uC5D0\uC11C If \uB610\uB294 Switch\uBB38\uC73C\uB85C \uAD6C\uD604\uD560 \uC218 \uC788\uC9C0\uB9CC eval\uD568\uC218 \uC0AC\uC6A9\uC73C\uB85C \uCF54\uB4DC\uAC00 \uAC04\uACB0\uD574\uC84C\uB2E4. <br><br></p></li></ul><h2 id="code" tabindex="-1"><a class="header-anchor" href="#code" aria-hidden="true">#</a> Code</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>import sys
from collections import deque

n = int(sys.stdin.readline())
postfix = sys.stdin.readline().strip()
numDict = dict()
for i in range(n):
    numDict[chr(65 + i)] = sys.stdin.readline().strip()

operator = &#39;+-*/&#39;
numStack = deque(list())

for i in postfix:
    if i in numDict.keys():
        numStack.append(numDict[i])
    elif i in operator:
        if len(numStack) &gt;= 2:
            y = numStack.pop()
            x = numStack.pop()
            numStack.append(str(eval(x + i + y)))

answer = &quot;%0.2f&quot; % float(numStack[0])
print(answer)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div>`,10);function r(i,p){return e}var t=n(s,[["render",r],["__file","boj_1935.html.vue"]]);export{t as default};
