import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  {
  "version": 4,
  "pages404": false,
  "basePath": "",
  "redirects": [],
  "rewrites": { "beforeFiles": [], "afterFiles": [], "fallback": [] },
  "headers": [],
  "dynamicRoutes": [],
  "staticRoutes": [
    {
      "page": "/",
      "regex": "^/$",
      "routeKeys": {}
    }
  ],
  "dataRoutes": []
}
};

export default nextConfig;
