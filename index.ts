// deno-lint-ignore-file
import { serve } from "https://deno.land/std/http/server.ts";

const HTML = await Deno.readFile("./public/index.html");
const CSS = await Deno.readFile("./public/style.css");
serve(async () => {
  return new Response(HTML, {
    headers: new Headers({
      "content-type": "text/html",
    }),
  });
});
