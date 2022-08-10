// deno-lint-ignore-file
import { serve } from "https://deno.land/std/http/server.ts";

const HTML = await Deno.readFile("./public/index.html");
const CSS = await Deno.readFile("./public/styles.css");
const JS = await Deno.readFile("./public/index.js");
serve(async () => {
  return new Response(HTML, {
    headers: new Headers({
      "content-type": "text/html",
    }),
  });
});

serve(async () => {
  return new Response(CSS, {
    headers: new Headers({
      "content-type": "text/css",
    }),
  });
});

serve(async () => {
    return new Response(JS, {
        headers: new Headers({
        "content-type": "text/javascript",
        }),
    });
    }
});
