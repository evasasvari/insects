const cacheName="cache-insects";

//When the browser reaads this for the first time it caches all the files mentioned in the list

self.addEventListener("install", function(event){
    event.waitUntil(
        caches.open(cacheName).then(function(cache){
            return cache.addAll(["/insects/", "/insects/index.html","/insects/butterflies.jpg", "/insects/butterfly.jpg", "/insects/dragonfly.jpg"]);
        })
    )
});

//if the user requests a resource (file, html, image, js, json ect...) then look for it online, if not available online , get the file from cache

self.addEventListener("fetch", function(event){
    event.repondWith(
        fetch(event.request).catch(() =>

        cache.open(cacheName).then(cache => cache.match(event.request))
        )
    )
});
