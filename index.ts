// deno-lint-ignore-file
import { serve } from "https://deno.land/std/http/server.ts";

const HTML = await Deno.readFile("./public/index.html");

serve(async () => {
  return new Response(HTML, {
    headers: new Headers({
      "content-type": "text/html",
    }),
  });
});
