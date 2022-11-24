"use strict";

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("/prettier/service-worker.js", {
    scope: "/prettier/",
  });
}
