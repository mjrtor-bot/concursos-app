import fs from "fs";

async function run() {
  const res = await fetch("https://www.mjrtor.com.br/questoes");
  const html = await res.text();
  const regex = /\/_next\/static\/[a-zA-Z0-9_\-\/]+\.js/g;
  const matches = Array.from(new Set(html.match(regex) || []));

  for (const chunk of matches) {
    const fullUrl = `https://www.mjrtor.com.br${chunk}`;
    const chunkRes = await fetch(fullUrl);
    const text = await chunkRes.text();
    let pos = 0;
    while ((pos = text.indexOf("xvpqcibdarcelvcwnglq", pos)) !== -1) {
      console.log(`Found in ${chunk} at ${pos}:`, text.slice(Math.max(0, pos - 50), pos + 250));
      pos += 20;
    }
  }
}

run();
