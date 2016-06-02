jQuery.noConflict();
(function($) {
    $(function() {
        autoScroll($("#shipDynamic"));
        autoScroll($("#shipCount"));
        $(".portBottom").hide();
        $(".globelBottom").show();
        mapIni();
        portPanelIni();

    });

    const KEY = 'AjDr-JiVSN0Laqaw-j6Jkdml_aaguQNVUKoQfWbFCrdx3_0EmyO-0F5Kd5AvtMlX';
    const LOCATIONS = "../json/locations.json";
    const PORTDETAILS = "../json/port-details.json";
    const PORTIMPORTSEXPORTS = "../json/port-imports-exports.json";
    const PORTTOCONTINENT = "../json/port-to-continent.json";


    const portJson = [
        { id: 1, pid: 0, title: "NAME", subtitle: "港口", content: "", active: true },
        { id: 2, pid: 1, title: "港口信息", subtitle: "", content: "", active: false },
        { id: 3, pid: 1, title: "吞吐量", subtitle: "", content: "", active: false },
        { id: 4, pid: 1, title: "进出口额", subtitle: "", content: "", active: false },
        { id: 5, pid: 4, title: "进出口", subtitle: "总额", content: "", active: false },
        { id: 6, pid: 4, title: "集装箱", subtitle: "进出口额", content: "", active: false },
        { id: 7, pid: 1, title: "TOP5", subtitle: "贸易国", content: "", active: false }
    ];

    function mapIni() {



        var map = new Microsoft.Maps.Map(document.getElementById("myMap"), {
            credentials: KEY,
            center: new Microsoft.Maps.Location(22.497, 113.995),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 3,
            showDashboard: false
        });






        $.getJSON(LOCATIONS, function(data) {
            var locs = data.locations;

            $.getJSON(PORTDETAILS, function(data) {
                var details = data.portdeails;

                for (var i = 0; i < locs.length; i++) {
                    // Define the pushpin location
                    var loc = new Microsoft.Maps.Location(locs[i].x, locs[i].y);

                    var pushpinOptions = { icon: '../images/pin.png', width: 36, height: 36 };
                    // Add a pin to the map
                    var pin = new Microsoft.Maps.Pushpin(loc, pushpinOptions);



                    map.entities.push(pin);

                    var infoboxOptions = { width: 200, height: 100, showCloseButton: true, zIndex: 0, offset: new Microsoft.Maps.Point(20, 5), showPointer: true };
                    var defInfobox = new Microsoft.Maps.Infobox(loc, infoboxOptions);
                    map.entities.push(defInfobox);

                    defInfobox.setHtmlContent('<div class="point-panel">' + locs[i].tip + '</div>');


                    (function() {
                        var code = locs[i].code;

                        // Add handler for the pushpin click event.
                        Microsoft.Maps.Events.addHandler(pin, 'click', pinClickHandler);
                        Microsoft.Maps.Events.addHandler(defInfobox, 'click', pinClickHandler);


                        function pinClickHandler(e) {

                            $(".globelBottom").hide();
                            $(".portBottom").show();

                            var thisport = portJson;
                            from(details).where(function(value) {
                                    return value.code == code;
                                })
                                .each(function(value) {
                                    thisport[0].title = value.cnName;
                                    thisport[0].subtitle = value.enName;

                                    thisport[1].callbackclick = portBoxShow;
                                    thisport[1].callbackclickparam = {};
                                    thisport[1].callbackclickparam.boxid = 'port-info';
                                    thisport[1].callbackclickparam.data = value;

                                    thisport[6].callbackclick = portBoxShow;
                                    thisport[6].callbackclickparam = {};
                                    thisport[6].callbackclickparam.boxid = 'port-top5';

                                    $.getJSON(PORTIMPORTSEXPORTS, function(data) {
                                        var data = data.portImportsExports;
                                        from(data).where(function(subvalue) {
                                            return value.code == code;
                                        }).each(function(subvalue) {
                                            thisport[4].callbackclick = portBoxShow;
                                            thisport[4].callbackclickparam = {};
                                            thisport[4].callbackclickparam.boxid = 'port-import-export';
                                            thisport[4].callbackclickparam.data = subvalue;
                                            thisport[4].callbackclickparam.data.title = value.cnName + " 进出口总额";



                                            thisport[5].callbackclick = portBoxShow;
                                            thisport[5].callbackclickparam = {};
                                            thisport[5].callbackclickparam.boxid = 'port-teu-import-export';
                                            thisport[5].callbackclickparam.data = subvalue;
                                            thisport[5].callbackclickparam.data.title = value.cnName + " 集装箱进出口额";
                                        });

                                    });

                                    $.getJSON(PORTTOCONTINENT, function(data) {
                                        var data = data.portToContinent;
                                        from(data).where(function(subvalue) {
                                            return value.code == code;
                                        }).each(function(subvalue) {
                                            thisport[2].callbackclick = portBoxShow;
                                            thisport[2].callbackclickparam = {};
                                            thisport[2].callbackclickparam.boxid = 'port-to-continent';
                                            thisport[2].callbackclickparam.data = subvalue;
                                            thisport[2].callbackclickparam.data.title = value.cnName + " 吞吐量";
                                        });

                                    });

                                });

                            zoomToLocation(e, code);
                            portPanelShow();

                            //thisport[0].title=
                            $("#bubbles").bubbles({ data: thisport });
                        }
                    })(i);



                }

            });




            function zoomToLocation(e, text) {



                map.setView({ animate: true, zoom: 8, center: e.target._location });
            }
        });







    }

    function portPanelIni() {
        $("#globe-btn").click(function() {
            $("#port-panel").fadeOut(500);
            mapIni();
        });


    }

    function portPanelShow() {
        $('#port-panel').fadeIn(500);
    }


    function portBoxShow(param) {
        if (param.boxid == "port-info") {
            $("[data-field=title]").text(param.data.cnName + "-" + param.data.enName);
            $("[data-field=cnName]").text(param.data.cnName);
            $("[data-field=enName]").text(param.data.enName);
            $("[data-field=code]").text(param.data.code);
            $("[data-field=abbr]").text(param.data.abbr);
            $("[data-field=nation]").text(param.data.nation);
            $("[data-field=position]").text(param.data.position);
            $("[data-field=timeZone]").text(param.data.timeZone);
            $("[data-field=anchorage]").text(param.data.anchorage);
            $("[data-field=draft]").text(param.data.draft);
            $("[data-field=seaChart]").text(param.data.seaChart);
            $("[data-field=type]").text(param.data.type);
            $("[data-field=brief]").text(param.data.brief);
            $("#" + param.boxid).fadeIn(500);
        }

        if (param.boxid == "port-import-export") {
            $("#" + param.boxid).fadeIn(500);
            mapcharts.chart_6(param.data);
        }

        if (param.boxid == "port-teu-import-export") {
            $("#" + param.boxid).fadeIn(500);
            mapcharts.chart_7(param.data);
        }

        if (param.boxid == "port-to-continent") {
            $("#" + param.boxid).fadeIn(500);
            mapcharts.chart_8(param.data);
        }

        if (param.boxid == "port-top5") {
            $("#" + param.boxid).fadeIn(500);
            mapcharts.chart_5();
        }


    }


    function autoScroll(panel) {
        var $this = panel;
        var scrollTimer;
        $this.hover(function() {
            clearInterval(scrollTimer);
        }, function() {
            scrollTimer = setInterval(function() {
                scrollNews($this);
            }, 1000);
        }).trigger("mouseleave");

        function scrollNews(obj) {
            var $self = obj.find(".dynamic-body");
            var lineHeight = $self.find("li:first").height();
            $self.animate({
                "marginTop": -lineHeight + "px"
            }, 600, function() {
                $self.css({
                    marginTop: 0
                }).find("li:first").appendTo($self);
            })
        }
    }

})(jQuery)
