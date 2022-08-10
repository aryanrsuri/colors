import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
import { serveDir } from "https://deno.land/std@0.140.0/http/file_server.ts";

serve((req) => {
  const pathname = new URL(req.url).pathname;
  console.log(pathname);

  if (pathname.startsWith("/")) {
    return serveDir(req, { fsRoot: "./public/" });
  }
  return new Response();
});
