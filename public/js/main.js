System.register(['@angular/platform-browser-dynamic', 'js/app.component', '@angular/router-deprecated', 'js/service/player.service', 'js/service/match.service'], function(exports_1) {
    var platform_browser_dynamic_1, app_component_1, router_deprecated_1, player_service_1, match_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (router_deprecated_1_1) {
                router_deprecated_1 = router_deprecated_1_1;
            },
            function (player_service_1_1) {
                player_service_1 = player_service_1_1;
            },
            function (match_service_1_1) {
                match_service_1 = match_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [player_service_1.PlayerService, match_service_1.MatchService, router_deprecated_1.ROUTER_PROVIDERS]);
        }
    }
});
//# sourceMappingURL=main.js.map