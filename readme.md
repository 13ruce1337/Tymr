Tymr
-
Standalone and web API timer application for a browser.

Download Link
---------
* to download, you must `right click` the link and click `save link as` *
<a href='http://trevor.epihedron.com/tymr' target='_blank'>Download App Here</a>

API
---------
Global object `Tymr` has a few requirements:

- `<input class='tymr_input tymr_hour' type='number' max='23' min='0' value='0'/>` 
- `<input class='tymr_input tymr_minute' type='number' max='59' min='0' value='0'/>` 
- `<input class='tymr_input tymr_second' type='number' max='59' min='0' value='0'/>` 
- some sort of button that triggers `Tymr.start()`
- some sort of button that triggers `Tymr.stop()`

* tip: if you add a clear for the fields, make sure you trigger `Tymr.stop()` with the clear to stop the timer from ticking at 0, effectively triggering the alarm. *
