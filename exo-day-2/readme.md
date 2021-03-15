Clocks are useful element for any UI if used in a proper way. Clocks can be used in sites where time is the main concern like some booking sites or some app showing arriving times of train, buses, flights, etc. Clock is basically of two types, Analog and Digital. We will be looking at making a digital one.

Approach: The approach is to use the date object to get time on every second
and then re-rendering time on the browser using the new time that we got by calling the same function each second.

HTML Code: In this section, we have a dummy time in the format of “HH:MM:SS” wrapped inside a “div” tag.

```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content=
      "width=device-width, initial-scale=1.0">
    <title>Digital Clock</title>
    <link rel="stylesheet" href="clock2.css">
</head>
<body>
    <div id="clock">8:10:45</div>

    <script src="clock2.js"></script>
</body>
</html>

```
