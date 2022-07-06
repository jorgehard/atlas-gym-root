import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@single-spa/welcome",
  app: () =>
    System.import(
      "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
    ),
  activeWhen: (location) => location.pathname === "/",
});

registerApplication({
  name: "@atlas/mfe-dashboard",
  app: () => System.import("@atlas/mfe-dashboard"),
  activeWhen: ["/dashboard"],
});
start({
  urlRerouteOnly: true,
});
