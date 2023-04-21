---
permalink: /other_collections/global-human-settlement-layer-ghs-built-s2/
nav_exclude: true
---

# GHS-BUILT-S2

{% assign paths = page.dir | remove_first: "/" | split: "/" | join: "-"%}
<button class="btn btn-primary" id="toggle-script" onclick="toggleScript()">Show Script</button>
[Download Script](script.js){: .btn target="_blank" download="{{paths | append: ".js"}}"}
{: .mt-lg-4 }

<div id="script" style="display:none;"> 
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## General description of the script

The Global Human Settlement Layer *GHS-BUILT-S2* is a global map of built-up areas (expressed as probabilities from 0 to 100 %) at 10 m spatial resolution. It was derived from a Sentinel-2 global image composite for the reference year 2018 using Convolutional Neural Networks.

This script visualises the built-up probabilities stretched to 0-255.

## Description of representative images

*Global Human Settlement Layer built-up probabilities over parts of Germany, Netherlands and Belgium*  

![Global Human Settlement Layer built-up probabilities over Germany, Netherlands and Belgium](fig/ghsl_overview.png)  

## Resources

- [Data source](https://ghsl.jrc.ec.europa.eu/download.php?ds=buS2)

- [Entry in public collections](https://github.com/sentinel-hub/public-collections/tree/main/collections/global-human-settlement-layer-ghs-built-s2)