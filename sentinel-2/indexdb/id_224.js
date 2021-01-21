//VERSION=3
// Canopy Chlorophyll Content Index  (abbrv. CCCI)
//
// General formula: ((NIR - rededge)/( NIR + rededge))/((NIR - Red)/( NIR + Red))
// This is an auto-generated script. Double checking with the URL below is recommendated.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=224
//

let index = ((B08 - B05) / (B08 + B05)) / ((B08 - B04) / (B08 + B04));
let min = -32.988;
let max = 32.84;
let zero = 0.0;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.
// This index crosses zero, so a diverging color map is used. To tweak the value of the break in the color map, change the variable 'zero'.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let zero_color = [0, 147/255, 146/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, zero, max],
[
	underflow_color,
	low_color,
	zero_color, // divergent step at zero
	high_color,
	//overflow_color // uncomment to see overflows
]);
