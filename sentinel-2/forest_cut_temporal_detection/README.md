# Forest Cut Temporal Detection Script

<a href="#" id='togglescript'>Show</a> script or [download](script.js){:target="_blank"} it.
<div id='script_view' style="display:none">
{% highlight javascript %}
{% include_relative script.js %}
{% endhighlight %}
</div>

## Evaluate and visualize
 - [Sentinel Playground temporal](https://apps.sentinel-hub.com/sentinel-playground-temporal/?source=S2&lat=-18.702797593630123&lng=48.444085121154785&zoom=14&preset=CUSTOM&layers=B01,B02,B03&maxcc=20&gain=1.0&gamma=1.0&time=2015-01-01%7C2018-10-18&atmFilter=ATMCOR&showDates=false&evalscript=Ly9WRVJTSU9OPTMgKGF1dG8tY29udmVydGVkIGZyb20gMSkKLy8gTWluaW11bSBkaWZmZXJlbmNlIGJldHdlZW4gdGhlIHR3byBtZWFuIE5EVklzCnZhciB0aHJlc29sZCA9IDAuMjU7Ci8vIFRocmVzb2xkIHRvIGRpc21pc3MgY2xvdWRzIHRvIGNhbGN1bGF0ZSB0aGUgbWVhbgp2YXIgYmx1ZVRocmVzb2xkID0gMC4xODsKLy8gTWluaW11bSBtZWFuIE5EVkkgdG8gY29uc2lkZXIgZm9yIG1vbnRoKHMpIG9mIGxhc3QgeWVhcgp2YXIgbWluaW11bk5EVkkgPSAwLjc7Ci8vIHRvIG5vcm1hbGl6ZSBjb2xvcm1hcAp2YXIgc3RyZXRjaE1pbiA9IDA7CnZhciBzdHJldGNoTWF4ID0gMC44OwoKZnVuY3Rpb24gc2V0dXAoKSB7CiAgcmV0dXJuIHsKICAgIGlucHV0OiBbewogICAgICBiYW5kczogWwogICAgICAgICAgIkIwMiIsCiAgICAgICAgICAiQjAzIiwKICAgICAgICAgICJCMDQiLAogICAgICAgICAgIkIwNSIsCiAgICAgICAgICAiQjA4IiwKICAgICAgICAgICJCMTIiCiAgICAgIF0KICAgIH1dLAogICAgb3V0cHV0OiB7IGJhbmRzOiAzIH0sCiAgICBtb3NhaWNraW5nOiAiT1JCSVQiCiAgfQp9CgoKZnVuY3Rpb24gc3RyZXRjaCh2YWwsIG1pbiwgbWF4KSB7CiAgICByZXR1cm4gKHZhbCAtIG1pbikgLyAobWF4IC0gbWluKTsKfQoKCmZ1bmN0aW9uIE5EVkkoc2FtcGxlKSB7CiAgICBsZXQgZGVub20gPSBzYW1wbGUuQjA4ICsgc2FtcGxlLkIwNDsKICAgIHJldHVybiAoKGRlbm9tICE9IDApID8gKHNhbXBsZS5CMDggLSBzYW1wbGUuQjA0KSAvIGRlbm9tIDogMC4wKTsKfQoKZnVuY3Rpb24gTkRXSShzYW1wbGUpIHsKICAgIGxldCBkZW5vbSA9IHNhbXBsZS5CMDMgKyBzYW1wbGUuQjA4OwogICAgcmV0dXJuICgoZGVub20gIT0gMCkgPyAoc2FtcGxlLkIwMyAtIHNhbXBsZS5CMDgpIC8gZGVub20gOiAtMSk7Cn0KCmZ1bmN0aW9uIG1lYW4oYXJyYXkpIHsKICAgIGlmIChhcnJheS5sZW5ndGggPT0gMCkgewogICAgICAgIHJldHVybiAxCiAgICB9IGVsc2UgewogICAgICAgIHZhciBzdW0gPSAwOwogICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyYXkubGVuZ3RoOyBpKyspIHsKICAgICAgICAgICAgc3VtICs9IHBhcnNlRmxvYXQoYXJyYXlbaV0pOyAvL2Rvbid0IGZvcmdldCB0byBhZGQgdGhlIGJhc2UKICAgICAgICB9CgogICAgICAgIHZhciBhdmcgPSBzdW0gLyBhcnJheS5sZW5ndGg7CiAgICAgICAgcmV0dXJuIGF2ZwogICAgfQp9CgovLyBNYW5hZ2Ugb3ZlcmxhcHBpbmcgeWVhcnMuCi8vIElmIGphbnVhcnkgaXMgc2VsZWN0ZWQgYW5kIHVzZXIgbmVlZCAyIG1vbnRocyB0byB0YWtlCi8vIHNjcmlwdCBuZWVkcyB0byB0YWtlIGRlY2VtYmVyIGZyb20gbGFzdCB5ZWFyIGFzIHNlY29uZCBtb250aC4KZnVuY3Rpb24gZ2V0TmVlZGVkRGF0ZXMoc2NlbmVNb250aCwgc2NlbmVZZWFyLCBtb250aHNUb1Rha2UpIHsKICAgIGxldCBtb250aFRvR2V0ID0gW107CiAgICBsZXQgeWVhclRvR2V0ID0gW107CgogICAgZm9yIChpID0gMDsgaSA8IG1vbnRoc1RvVGFrZTsgaSsrKSB7CiAgICAgICAgaWYgKHNjZW5lTW9udGggLSBpIDw9IDApIHsKICAgICAgICAgICAgbW9udGggPSAxMiAtIChzY2VuZU1vbnRoIC0gaSk7CiAgICAgICAgICAgIHllYXIgPSBzY2VuZVllYXIgLSAxOwogICAgICAgIH0gZWxzZSB7CiAgICAgICAgICAgIG1vbnRoID0gc2NlbmVNb250aCAtIGk7CiAgICAgICAgICAgIHllYXIgPSBzY2VuZVllYXI7CiAgICAgICAgfQogICAgICAgIG1vbnRoVG9HZXQucHVzaChtb250aCk7CiAgICAgICAgeWVhclRvR2V0LnB1c2goeWVhcik7CiAgICB9CgogICAgcmV0dXJuIFttb250aFRvR2V0LCB5ZWFyVG9HZXRdOwp9CgpmdW5jdGlvbiBldmFsdWF0ZVBpeGVsKHNhbXBsZXMsIHNjZW5lcykgewogICAgbGV0IGluaXRNb250aCA9IHNjZW5lc1swXS5kYXRlLmdldE1vbnRoKCk7CiAgICBsZXQgaW5pdFllYXIgPSBzY2VuZXNbMF0uZGF0ZS5nZXRGdWxsWWVhcigpOwoKICAgIGxldCBtb250aHNBbmRZZWFycyA9IGdldE5lZWRlZERhdGVzKGluaXRNb250aCwgaW5pdFllYXIsIDMpOwoKICAgIGxldCBjdXJyZW50WWVhck5EVkkgPSAwOwogICAgbGV0IGN1cnJlbnRZZWFyQ291bnQgPSAwOwoKICAgIGxldCBwcmV2aW91c1llYXJORFZJID0gMDsKICAgIGxldCBwcmV2aW91c1llYXJDb3VudCA9IDA7CiAgICBsZXQgbGFzdFllYXJNb250aDAgPSBbXTsKICAgIGxldCBsYXN0WWVhck1vbnRoMSA9IFtdOwogICAgbGV0IGxhc3RZZWFyTW9udGgyID0gW107CgogICAgZm9yIChpID0gMDsgaSA8IHNhbXBsZXMubGVuZ3RoOyBpKyspIHsKICAgICAgICBpZiAoIShzYW1wbGVzW2ldLkIwNCA9PSAwKSAmICEoc2FtcGxlc1tpXS5CMDMgPT0gMCkpIHsKICAgICAgICAgICAgc2NlbmVNb250aCA9IHNjZW5lc1tpXS5kYXRlLmdldE1vbnRoKCk7CiAgICAgICAgICAgIHNjZW5lWWVhciA9IHNjZW5lc1tpXS5kYXRlLmdldEZ1bGxZZWFyKCk7CiAgICAgICAgICAgIGlmIChtb250aHNBbmRZZWFyc1swXS5pbmNsdWRlcyhzY2VuZU1vbnRoKSkgewogICAgICAgICAgICAgICAgaWYgKHNhbXBsZXNbaV0uQjAyIDwgYmx1ZVRocmVzb2xkKSB7CiAgICAgICAgICAgICAgICAgICAgbmR2aSA9IE5EVkkoc2FtcGxlc1tpXSk7CiAgICAgICAgICAgICAgICAgICAgaWYgKG1vbnRoc0FuZFllYXJzWzFdLmluY2x1ZGVzKHNjZW5lWWVhcikpCiAgICAgICAgICAgICAgICAgICAgLy8gaWYgY3VycmVudCB5ZWFyIChsYXN0IDEyIG1vbnRocyBtYXgpCiAgICAgICAgICAgICAgICAgICAgewogICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WWVhck5EVkkgPSBjdXJyZW50WWVhck5EVkkgKyBuZHZpOwogICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50WWVhckNvdW50Kys7CgogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgICAgICAvLyBpZiB5ZWFyIGJlZm9yZQogICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1vbnRoc0FuZFllYXJzWzFdLmluY2x1ZGVzKHNjZW5lWWVhciArIDEpKSB7CiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzWWVhck5EVkkgPSBwcmV2aW91c1llYXJORFZJICsgbmR2aTsKCiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtb250aHNBbmRZZWFyc1swXVswXSA9PSBzY2VuZU1vbnRoKSB7CiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0WWVhck1vbnRoMC5wdXNoKG5kdmkpOwogICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG1vbnRoc0FuZFllYXJzWzBdWzFdID09IHNjZW5lTW9udGgpIHsKICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RZZWFyTW9udGgxLnB1c2gobmR2aSk7CiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobW9udGhzQW5kWWVhcnNbMF1bMl0gPT0gc2NlbmVNb250aCkgewogICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdFllYXJNb250aDIucHVzaChuZHZpKTsKICAgICAgICAgICAgICAgICAgICAgICAgfQogICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91c1llYXJDb3VudCsrOwogICAgICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgICAgIH0KICAgICAgICAgICAgfQogICAgICAgIH0KICAgIH0KCiAgICAvLyBjb21wdXRlIHRoZSBtZWFuCiAgICBsZXQgYXZnQ3VycmVudFllYXJORFZJID0gY3VycmVudFllYXJORFZJIC8gY3VycmVudFllYXJDb3VudDsKICAgIGxldCBhdmdQcmV2aW91c1llYXJORFZJID0gcHJldmlvdXNZZWFyTkRWSSAvIHByZXZpb3VzWWVhckNvdW50OwoKICAgIC8vIGlmIG5kdmkgZGVjcmVhc2VzIGZyb20gZGVmaW5lZCB0aHJlc29sZCBpbiB0aGUgc2FtZSBtb250aHMgZnJvbSBwcmV2aW91cyB5ZWFyCiAgICAvLyBoaWdobGlnaHRzIGluIHJlZCB0aGUgcGl4ZWwKICAgIC8vIGNoZWNrIGFsc28gaWYgaXMgbm90IHdhdGVyCiAgICBsZXQgZGlmZmVyZW5jZSA9IGF2Z1ByZXZpb3VzWWVhck5EVkkgLSBhdmdDdXJyZW50WWVhck5EVkk7CgogICAgaWYgKChORFdJKHNhbXBsZXNbMF0pIDwgMC41KSAmIChkaWZmZXJlbmNlID49IHRocmVzb2xkKSAmIChhdmdQcmV2aW91c1llYXJORFZJID4gbWluaW11bk5EVkkpICYgKG1lYW4obGFzdFllYXJNb250aDApID4gbWluaW11bk5EVkkpICYgKG1lYW4obGFzdFllYXJNb250aDEpID4gbWluaW11bk5EVkkpICYgKG1lYW4obGFzdFllYXJNb250aDIpID4gbWluaW11bk5EVkkpKSB7CiAgICAgICAgLy8gdGhlIG1vcmUgdGhlIGRpZmZlcmVuY2UgaXMgaGlnaCwgdGhlIG1vcmUgaXQgaXMgcmVkCiAgICAgICAgY29sb3JNYXAgPSBbc3RyZXRjaCgoMi44ICogKDIgLyAzKSAqIDEwICogZGlmZmVyZW5jZSAqIHNhbXBsZXNbMF0uQjA0ICsgMC4xICogc2FtcGxlc1swXS5CMDUpLCBzdHJldGNoTWluLCBzdHJldGNoTWF4KSwgc3RyZXRjaCgoMi44ICogc2FtcGxlc1swXS5CMDMgKyAwLjE1ICogc2FtcGxlc1swXS5CMDgpLCBzdHJldGNoTWluLCBzdHJldGNoTWF4KSwgc3RyZXRjaCgoMi44ICogc2FtcGxlc1swXS5CMDIpLCBzdHJldGNoTWluLCBzdHJldGNoTWF4KV07CiAgICB9CiAgICAvLyBlbHNlIHNob3cgY3VycmVudCBpbWFnZQogICAgZWxzZSB7CiAgICAgICAgY29sb3JNYXAgPSBbc3RyZXRjaCgoMi44ICogc2FtcGxlc1swXS5CMDQgKyAwLjEgKiBzYW1wbGVzWzBdLkIwNSksIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpLCBzdHJldGNoKCgyLjggKiBzYW1wbGVzWzBdLkIwMyArIDAuMTUgKiBzYW1wbGVzWzBdLkIwOCksIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpLCBzdHJldGNoKCgyLjggKiBzYW1wbGVzWzBdLkIwMiksIHN0cmV0Y2hNaW4sIHN0cmV0Y2hNYXgpXTsKICAgIH0KICAgIHJldHVybiBjb2xvck1hcDsKfQoKZnVuY3Rpb24gZmlsdGVyU2NlbmVzKHNjZW5lcywgaW5wdXRNZXRhZGF0YSkgewogICAgcmV0dXJuIHNjZW5lcy5maWx0ZXIoZnVuY3Rpb24oc2NlbmUpIHsKICAgICAgICByZXR1cm4gc2NlbmUuZGF0ZS5nZXRUaW1lKCkgPj0gKGlucHV0TWV0YWRhdGEudG8uZ2V0VGltZSgpIC0gKDE0ICogMzEgKiAyNCAqIDM2MDAgKiAxMDAwKSk7IC8vIDE0ID0gMTEgbW9udGhzICsgMyBtb250aHMKICAgIH0pOwp9Cg%3D%3D&temporal=true){:target="_blank"}    
 

## General description of the script

Forests are essential for wildlife, biodiversity and to fight climate change.

In order to map forest cutting from one year to another, this script compares:
* the mean ndvi of the three previous months from the selected image
* to the mean ndvi of the three same months but from the previous year 

If the NDVI decreases above 0.25, it is certainly a clear cut.

As the aim of the script is to represent the forest cutting, it will color in red the pixel where cuts have been detected. 

The limitations are essentially:
* can't work if no unclouded pixel is available in the last three months 
* forest can be confused with crops (it is best to know it was forest previous year)
* cuts can be confused with later phenology (e.g. drought)

## Author of the script

Karasiak Nicolas

## Description of representative images

The two images are from Madagascar forest. The first one represent the forest in 2017 (raw image from S2 L2A). The second is from 2018 and the script highlights in red where forest clear cuttings have been made.

The third and the fourth images are the same things for Bouconne forest in France (near Toulouse).

![Forest Cut Temporal Detection script over Madagascar forest in 2017](fig/01_madagascar_rawS2.jpg)

![Forest Cut Temporal Detection script over Madagascar forest in 2018](fig/02_madagascar_result.jpg)

![Forest Cut Temporal Detection script over Bouconne forest in 2017](fig/03_bouconne_rawS2.jpg)

![Forest Cut Temporal Detection script over Bouconne forest in 2018](fig/04_bouconne_result.jpg)

More information is available in the [supplementary material](supplementary_material.pdf).

## Credits

Inspired by [Harel Dan temporal script](https://github.com/hareldunn/GIS_Repo/blob/master/Multi-Temporal%20NDVI%20for%20Sentinel%20Hub%20Custom%20Scripts){:target="_blank"}  