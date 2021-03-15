Clocks are useful element for any UI if used in a proper way. Clocks can be used in sites where time is the main concern like some booking sites or some app showing arriving times of train, buses, flights, etc. Clock is basically of two types, Analog and Digital. We will be looking at making a digital one.

Approach: The approach is to use the date object to get time on every second
and then re-rendering time on the browser using the new time that we got by calling the same function each second.

HTML Code: In this section, we have a dummy time in the format of “HH:MM:SS” wrapped inside a “div” tag.

- Step 1: Create a function “showTime”.
- Step 2: Create an instance of the Date object.
- Step 3: Using the methods of Date object get “hours”, “minute” and “seconds”.
- Step 4: Set AM/PM depending on the hour value. The Date object works on 24-hour format so we change hour back to 1 when it get’s larger than 12. The AM/PM also changes according to that.
- Step 5: Now make a string using the same HH:MM:SS format changing the hour, minute, and second value with the values, we get from Date object methods.
- Step 6: Now replace the string variable in the “div” using innerHTML property.
- Step 7: To call the function every second use setInterval() method and set time-interval as 1000ms which is equal to 1s.
- Step 8: Now call the function at the end to start function at exact reloading/rendering time as setInterval() will call first after 1s of rendering.

**_Note: You can use digital fonts available online to make the clock look more beautiful. For that, you have to download their file into your project and then use the “font-face” property to use that custom font._**

### les fichiers sont inclus dans cette page

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

### Résultat final

![clock](135.gif)
