export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/metar") {
      const upstream = "https://aviationweather.gov/api/data/metar?ids=LOWK&format=json";
      try {
        const resp = await fetch(upstream, {
          headers: {
            "User-Agent": "flugplatz-wolfsberg.at/1.0 (office@flugplatz-wolfsberg.at)",
            "Accept": "application/json"
          },
          cf: { cacheTtl: 60, cacheEverything: true }
        });

        if (!resp.ok) {
          return Response.json({ error: "METAR upstream unavailable" }, { status: 502 });
        }

        const data = await resp.json();
        if (!Array.isArray(data) || data.length === 0) {
          return Response.json({ error: "No METAR available" }, { status: 404 });
        }

        return Response.json(data[0], {
          headers: {
            "Cache-Control": "public, max-age=60"
          }
        });
      } catch (error) {
        return Response.json({ error: "METAR fetch failed" }, { status: 502 });
      }
    }

    return env.ASSETS.fetch(request);
  }
};