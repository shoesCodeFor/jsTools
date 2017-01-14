###What is buttonBuilder??
##This is an excercise in making quick buttons for Bootstrap 3 
<p>In practical use it would be better to use jQuery or another library to do this.  The main concept is this.
</p>
<p>buttonBuilder JS can be included in a web document and called to create Bootstrap 3 buttons anywhere in your page complete with glyphicons.</p>

<h3>Example:</h3>
```javascript
<script src="/your/path/buttonBuilder.js">buildButton('body', 'btn btn-primary test', 'ok', 'It worked!!');</script>
```



<p>Will produce
<br>
<img src="https://dabuttonfactory.com/button.png?t=It+worked!!&f=Calibri-Bold&ts=24&tc=fff&tshs=1&tshc=000&hp=20&vp=8&c=5&bgt=gradient&bgc=3d85c6&ebgc=073763"/>
With the code
code
<button class="test">It worked<span class="glyphicon glyphicon-ok"></span></button>
code
<br>
Hit F12 to inspect the button element.  Glyphicons will not appear unless the Bootstrap css is not include in your document.
<p>
<h4>Future Improvments:</h4>
<ul>
<li>Ability to pass thru onclick function.</li>
<li>Selector to add ID and class elements</li>
</ul>
