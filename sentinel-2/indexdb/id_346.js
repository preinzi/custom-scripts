//VERSION=3
// Simple Ratio 801/550 NIR/Green (abbrv. SR801/550)
//
// General formula: 801nm/550nm
// This is an auto-generated script. Double checking with the URL below is recommendated.
// URL https://www.indexdatabase.de/db/si-single.php?sensor_id=96&rsindex_id=346
//

let index = B08 / B03;
let min = 0.057;
let max = 17.048;

// colorBlend will return a color when the index is between min and max and white when it is less than min.
// To see black when it is more than max, uncomment the last line of colorBlend.
// The min/max values were computed automatically and may be poorly specified, feel free to change them to tweak the displayed range.

let underflow_color = [1, 1, 1];
let low_color = [208/255, 88/255, 126/255];
let high_color = [241/255, 234/255, 200/255];
let overflow_color = [0, 0, 0];

return colorBlend(index, [min, min, max],
[
	underflow_color,
	low_color,
	high_color,
	//overflow_color // uncomment to see overflows
]);
