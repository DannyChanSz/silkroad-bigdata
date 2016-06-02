jQuery.noConflict();
var jqFunction = {};
(function($) {
    $(function() {
        var map = {};
        GetMap(map);
        $("#right-side-bar").hide();
        $("#bottom-right-bar").hide();
        $("#top-menu").hide();

        $("#bar-hidden-btn").click(function() {
            $("#right-side-bar").hide(500);
            $("#bottom-right-bar").hide(500);
            $("#top-menu").hide(500);
        });


        $('#topMenuModal').on('show.bs.modal', function(event) {
            var button = $(event.relatedTarget); // Button that triggered the modal
            var recipient = button.data('whatever'); // Extract info from data-* attributes
            // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
            // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
            var modal = $(this);
            var modalData = [{
                "name": "国家",
                "content": "中华人民共和国是一个有中国特色的社会主义国家.它是一个发展中国家.中国位于亚洲的东部,有许多邻国.北面和东北面有蒙古,俄罗斯和朝鲜；南面有越南、老挝、泰国和菲律宾；西面和西南面有缅甸、印度、尼泊尔、不丹和巴基斯坦；东面有日本,与中国隔海相望.中国幅员辽阔,有九百六十万平方千米.它有34个省、直辖市和自治区.首都是北京,位于华北.中国是世界上最大的国家之一.现在,它有12多亿人口,占世界人口的四分之一 <br/><br/>ChinaThe People＇s Republic of China is a socialism country with its own characteristics.It is one of the developing countries.China lies in the east of Asia.It has a number of neighboring countries.To the north,northeast and northwest are the Mongolia,Russia and Korea.To the south are Vietnam,Laos,Thailand and the Philippine.To the west and southwest are India,Burma,Bhutan,Nepal and Pakistan.To the east is Japan,which faces China across the East China Sea.China is a country with a vast territory.It has an area of over 9,600,000 square kilometers.It consists of 34 provinces,autonomous regions,and municipalities directly under the Central Covernment.Beijing,which is situated in the North China,is its capital.The People＇s Republic of China is one of the largest countries in the world.Now it has a population of more than 1.2 billion,making up a quarter of the world population "
            }, {
                "name": "经济",
                "content": "2014年GDP总计10.38万亿美元，人均GDP7575美元。中国是世界第二大经济体，世界第一贸易大国，世界第一大外汇储备国，世界第一大钢铁生产国和世界第一大农业国，世界第一大粮食总产量国以及世界上经济成长最快的国家之一。中央银行为中国人民银行，官方货币为人民币。"
            }, {
                "name": "政治",
                "content": "政治制度为人民代表大会制度，国家主席是习近平, 与英、法、美、俄并为联合国安理会五大常任理事国。"
            }, {
                "name": "地理",
                "content": "位于亚洲东部，太平洋西岸，陆地面积约960万平方公里，领海约470万平方公里。"
            }, {
                "name": "人口",
                "content": "世界第一大人口国，2014年人口数量13.67亿人，是一个以汉族为主体民族，由56个民族构成的统一多民族国家，汉族占总人口的91.51%。"
            }, {
                "name": "VIP",
                "content": "<button class=btn>请登录查看</button>"
            }];
            modal.find('.modal-title').text(recipient);
            switch (recipient) {
                case "国家":
                    modal.find('.modal-body').html(modalData[0].content);
                    break;
                case "经济":
                    modal.find('.modal-body').html(modalData[1].content);
                    break;
                case "政治":
                    modal.find('.modal-body').html(modalData[2].content);
                    break;
                case "地理":
                    modal.find('.modal-body').html(modalData[3].content);
                    break;
                case "人口":
                    modal.find('.modal-body').html(modalData[4].content);
                    break;
                case "VIP":
                    modal.find('.modal-body').html(modalData[5].content);
                    break;
            }

        })

    });


    jqFunction.barShow = function() {
        $("#bottom-right-bar").show();
        $("#right-side-bar").show();
        $("#top-menu").show(500);

    }


    const NATIONS = "../json/nations.json";
    const VOTS = "../json/nation-vot.json";
    const INFO = "../json/nation-info.json";

    function GetMap(map) {

        const KEY = 'AjDr-JiVSN0Laqaw-j6Jkdml_aaguQNVUKoQfWbFCrdx3_0EmyO-0F5Kd5AvtMlX';
        // Initialize the map
        map = new Microsoft.Maps.Map(document.getElementById("mapDiv"), {
            credentials: KEY,
            center: new Microsoft.Maps.Location(22.497, 113.995),
            mapTypeId: Microsoft.Maps.MapTypeId.road,
            zoom: 3,
            showDashboard: false
        });

        $.getJSON(NATIONS, function(data) {
            var nations = data.nations;

            $.getJSON(VOTS, function(data) {
                var vots = data.vots;

                setLine(map, nations, vots);
            });
        });



    }

})(jQuery);



function setLine(map, NATION, VOT) {
    console.log(NATION);

    for (var i = 0; i < NATION.length; i++) {
        var pushpinOptions = {
            icon: '/images/spot2.png',
            width: 60,
            height: 60,
            anchor: new Microsoft.Maps.Point(30, 30),
            text: NATION[i].enName,
            textOffset: new Microsoft.Maps.Point(0, 20)
        };
        var pin = new Microsoft.Maps.Pushpin(new Microsoft.Maps.Location(NATION[i].x, NATION[i].y), pushpinOptions);
        map.entities.push(pin);



        (function() {
            Microsoft.Maps.Events.addHandler(pin, 'click', pinClickHandler);
            var code = NATION[i].code;

            function pinClickHandler(e) {



                map.setView({ animate: true, zoom: 3, center: e.target._location });
                deleLine();
                var fromNation = {};

                var chartData = { nation: "", cates: [], exports: [], imports: [] };

                fromNation = from(NATION).where(function(value) {
                    return value.code == code;
                }).first();

                chartData.nation = fromNation.enName;

                var vots = {};
                vots = from(VOT).where(function(value) {
                    return value.code == code;
                }).first().volume;

                for (var j = 0; j < vots.length; j++) {
                    var toNation = {};
                    toNation = from(NATION).where(function(value) {
                        return value.code == vots[j].code;
                    }).first();
                    console.log("from:" + fromNation.cnName + "|" + "to:" + toNation.cnName);
                    drawLine(fromNation, toNation, vots[j].export+vots[j].import);

                    chartData.cates.push(toNation.enName);
                    chartData.exports.push(vots[j].export);
                    chartData.imports.push(vots[j].import);

                }
                jqFunction.barShow();

                mapcharts.nation_1();
                mapcharts.nation_2();
                mapcharts.nation_3();
                mapcharts.nation_4(chartData);



            }
        })(i);






    }

    function deleLine() {
        for (var i = map.entities.getLength() - 1; i >= 0; i--) {
            var polyline = map.entities.get(i);
            if (polyline instanceof Microsoft.Maps.Polyline) {
                map.entities.removeAt(i);
            }
        }
    }


    function drawLine(fromN, toN, vo) {
        // Create the locations
        var point1 = new Microsoft.Maps.Location(fromN.x, fromN.y);
        var point2 = new Microsoft.Maps.Location(toN.x, toN.y);
        var lineWidth = vo / 100;
        if ((vo / 100) < 1) {
            lineWidth = 1;
        }
        if ((vo / 100) > 30) {
            lineWidth = 30;
        }
        var option = { strokeColor: new Microsoft.Maps.Color(200, 0, 160, 233), strokeThickness: lineWidth, strokeDashArray: "5 0" }

        // Create a polyline
        var lineVertices = new Array(point1, point2);
        var line = new Microsoft.Maps.Polyline(lineVertices, option);

        // Add the polyline to the map
        map.entities.push(line);
    }

}
