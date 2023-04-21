---
permalink: /planet_scope/false_color/
nav_exclude: true
---

# False color infrared product, PlanetScope

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize

As PlanetScope is commercial data, brought into Sentinel Hub as Bring Your Own Data, direct EO Browser and Sentinel Playgorund links are not possible due to the personalized data credentials. 

## General description

The [False color](https://en.wikipedia.org/wiki/False_color) infrared composite maps near-infrared spectral band B4 with red and green bands, B3 and B2, to [sRGB](https://en.wikipedia.org/wiki/SRGB) components directly. It is most commonly used to assess plant density and healht, as plants reflect near infrared and green light, while absorbing red. Since they reflect more near infrared than green, plant-covered land appears deep red. Denser plant growth is darker red. Cities and exposed ground are gray or tan, and water appears blue or black.

## Description of representative images

False color composite of Rome. 

![False color composite of Rome](fig/fig1.jpg)

## References
- [1] Wikipedia, [False color](https://en.wikipedia.org/wiki/False_color). Accessed October 10th 2017.
- [2] Wikipedia, [sRGB](https://en.wikipedia.org/wiki/SRGB). Accessed October 10th 2017.