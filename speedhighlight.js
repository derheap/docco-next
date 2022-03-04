import {
  printHighlight,
  setTheme,
} from "https://deno.land/x/speed_highlight_js@1.1.6/src/term.js";
await setTheme('default');
printHighlight('console.log("hello")', 'js');
