
<p><span style="text-decoration: underline;"><strong>Installation:</strong></span></p>
<p><strong>1.</strong> Put the <em><span style="text-decoration: underline;">loc-themes</span></em>-folder inside the <span style="text-decoration: underline;"><em>root</em></span>-folder of your elFinder-Copy on your server.</p>
<p><strong>2.</strong> Add the following Script-Tag in the Header of your HTML-Page where your elFinder is loaded:</p>
<pre style="color: #000000; background: #ffffff;">&lt;script src=<span style="color: #2a00ff;">"</span><span style="color: #2a00ff;">loc-themes/theme-manager.js</span><span style="color: #2a00ff;">"</span>&gt;&lt;/script&gt;
</pre>
<p><strong>3.</strong> Add a <em>bind</em>-function with an '<em>init</em>'-event inside the <em>boot-up-function</em> of your elFinder-Client-Config with this function:&nbsp;<code>injThemeMngr(fm);</code></p>
<p>It should look like this:&nbsp;</p>
<pre style="color: #000000; background: #ffffff;"><span style="color: #3f7f59;">//before boot up function</span>
<span style="color: #7f0055; font-weight: bold;">function</span>(fm, extraObj) {
    <span style="color: #3f7f59;">// `init` event callback function</span>
    fm.<span style="color: #7f0055; font-weight: bold;">bind</span>(<span style="color: #2a00ff;">'</span><span style="color: #2a00ff;">init</span><span style="color: #2a00ff;">'</span>, <span style="color: #7f0055; font-weight: bold;">function</span>() {
        <span style="color: #3f7f59;">// trigger theme-manager into elFinder</span>
        injThemeMngr(fm);
    });
}</pre>
<p><strong>4.</strong> Thats all! Enjoy! ;)</p>
<p>A complete example of loading elFinder with Theme-Manager can be this:</p>
<pre style="color: #000000; background: #ffffff;">$(document).ready(<span style="color: #7f0055; font-weight: bold;">function</span>() {
    $(<span style="color: #2a00ff;">'</span><span style="color: #2a00ff;">#elfinder</span><span style="color: #2a00ff;">'</span>).elfinder(
        <span style="color: #3f7f59;">// 1st Arg - options</span>
        {
            cssAutoLoad: <span style="color: #7f0055; font-weight: bold;">false</span>, <span style="color: #3f7f59;">// Disable CSS auto loading</span>
            baseUrl: <span style="color: #2a00ff;">'</span><span style="color: #2a00ff;">./</span><span style="color: #2a00ff;">'</span>, <span style="color: #3f7f59;">// Base URL to css/*, js/*</span>
            url: <span style="color: #2a00ff;">'</span><span style="color: #2a00ff;">php/connector.minimal.php</span><span style="color: #2a00ff;">'</span> <span style="color: #3f7f59;">// connector URL (REQUIRED)</span>
            <span style="color: #3f7f59;">// , lang: 'ru'                    // language (OPTIONAL)</span>
        },
        <span style="color: #3f7f59;">// 2nd Arg - before boot up function</span>
        <span style="color: #7f0055; font-weight: bold;">function</span>(fm, extraObj) {
            <span style="color: #3f7f59;">// `init` event callback function</span>
            fm.<span style="color: #7f0055; font-weight: bold;">bind</span>(<span style="color: #2a00ff;">'</span><span style="color: #2a00ff;">init</span><span style="color: #2a00ff;">'</span>, <span style="color: #7f0055; font-weight: bold;">function</span>() {
                <span style="color: #3f7f59;">// trigger theme-manager into elFinder</span>
                injThemeMngr(fm);
            });
        }
    );
});
</pre>
<p>An example-file (named elfinder.legacy.html) which loads elFinder with the theme-manager is included for testing purpose.</p>
<p>&nbsp;</p>
<p>THIS SCRIPT WAS WRITTEN BY <a href="http://john-felber.net" target="_blank" rel="noopener">JOHN FELBER</a></p>
