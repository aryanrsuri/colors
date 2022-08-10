import { Application } from "https://deno.land/x/abc@v1.3.3/mod.ts";

const app = new Application();

app.static("/", "./public").start({ port: 8000 });
