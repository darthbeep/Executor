$(function () {

    // Prepare demo data
    var data = [
        {
            "hc-key": "fo",
            "value": 0
        },
        {
            "hc-key": "us",
            "value": 2 //
        },
        {
            "hc-key": "jp",
            "value": 8 //
        },
        {
            "hc-key": "in",
            "value": 26 //
        },
        {
            "hc-key": "kr",
            "value": 27 //
        },
        {
            "hc-key": "fr",
            "value": 9 //
        },
        {
            "hc-key": "cn",
            "value": 223 //
        },
        {
            "hc-key": "sw",
            "value": 0
        },
        {
            "hc-key": "sh",
            "value": 0
        },
        {
            "hc-key": "ec",
            "value": 0
        },
        {
            "hc-key": "au",
            "value": 4 //
        },
        {
            "hc-key": "ph",
            "value": 8 //
        },
        {
            "hc-key": "es",
            "value": 2 //
        },
        {
            "hc-key": "bu",
            "value": 0
        },
        {
            "hc-key": "mv",
            "value": 0
        },
        {
            "hc-key": "sp",
            "value": 0
        },
        {
            "hc-key": "ve",
            "value": 0
        },
        {
            "hc-key": "gb",
            "value": 38 //
        },
        {
            "hc-key": "gr",
            "value": 5 //
        },
        {
            "hc-key": "dk",
            "value": 2 //
        },
        {
            "hc-key": "gl",
            "value": 0
        },
        {
            "hc-key": "pr",
            "value": 1 //
        },
        {
            "hc-key": "um",
            "value": 0
        },
        {
            "hc-key": "vi",
            "value": 0
        },
        {
            "hc-key": "ca",
            "value": 10 //
        },
        {
            "hc-key": "tz",
            "value": 0
        },
        {
            "hc-key": "cl",
            "value": 0
        },
        {
            "hc-key": "cv",
            "value": 0
        },
        {
            "hc-key": "dm",
            "value": 0
        },
        {
            "hc-key": "sc",
            "value": 0
        },
        {
            "hc-key": "nz",
            "value": 1 //
        },
        {
            "hc-key": "ye",
            "value": 2 //
        },
        {
            "hc-key": "jm",
            "value": 4 //
        },
        {
            "hc-key": "om",
            "value": 0
        },
        {
            "hc-key": "vc",
            "value": 0
        },
        {
            "hc-key": "bd",
            "value": 67 //
        },
        {
            "hc-key": "sb",
            "value": 0
        },
        {
            "hc-key": "lc",
            "value": 0
        },
        {
            "hc-key": "no",
            "value": 3 //
        },
        {
            "hc-key": "cu",
            "value": 2 //
        },
        {
            "hc-key": "kn",
            "value": 0
        },
        {
            "hc-key": "bh",
            "value": 0
        },
        {
            "hc-key": "fi",
            "value": 0
        },
        {
            "hc-key": "id",
            "value": 5 //
        },
        {
            "hc-key": "mu",
            "value": 0
        },
        {
            "hc-key": "se",
            "value": 5 //
        },
        {
            "hc-key": "ru",
            "value": 41 //
        },
        {
            "hc-key": "tt",
            "value": 1 //
        },
        {
            "hc-key": "br",
            "value": 1 //
        },
        {
            "hc-key": "bs",
            "value": 0
        },
        {
            "hc-key": "pw",
            "value": 0
        },
        {
            "hc-key": "ir",
            "value": 2 //
        },
        {
            "hc-key": "gw",
            "value": 0
        },
        {
            "hc-key": "gd",
            "value": 0
        },
        {
            "hc-key": "ee",
            "value": 0
        },
        {
            "hc-key": "ag",
            "value": 0
        },
        {
            "hc-key": "fj",
            "value": 0
        },
        {
            "hc-key": "bb",
            "value": 0
        },
        {
            "hc-key": "it",
            "value": 16 //
        },
        {
            "hc-key": "mt",
            "value": 0
        },
        {
            "hc-key": "pg",
            "value": 0
        },
        {
            "hc-key": "de",
            "value": 26 //
        },
        {
            "hc-key": "vu",
            "value": 0
        },
        {
            "hc-key": "gq",
            "value": 0
        },
        {
            "hc-key": "cy",
            "value": 0
        },
        {
            "hc-key": "km",
            "value": 0
        },
        {
            "hc-key": "va",
            "value": 0
        },
        {
            "hc-key": "sm",
            "value": 0
        },
        {
            "hc-key": "am",
            "value": 1 //
        },
        {
            "hc-key": "az",
            "value": 6 //
        },
        {
            "hc-key": "tj",
            "value": 1 //
        },
        {
            "hc-key": "uz",
            "value": 2 //
        },
        {
            "hc-key": "ls",
            "value": 0
        },
        {
            "hc-key": "kg",
            "value": 0
        },
        {
            "hc-key": "kp",
            "value": 0
        },
        {
            "hc-key": "pt",
            "value": 2 //
        },
        {
            "hc-key": "mx",
            "value": 2 //
        },
        {
            "hc-key": "ma",
            "value": 1 //
        },
        {
            "hc-key": "co",
            "value": 0
        },
        {
            "hc-key": "ar",
            "value": 0
        },
        {
            "hc-key": "sa",
            "value": 2 //
        },
        {
            "hc-key": "qa",
            "value": 0
        },
        {
            "hc-key": "nl",
            "value": 3 //
        },
        {
            "hc-key": "ae",
            "value": 0
        },
        {
            "hc-key": "ke",
            "value": 0
        },
        {
            "hc-key": "my",
            "value": 7 //
        },
        {
            "hc-key": "pa",
            "value": 3 //
        },
        {
            "hc-key": "ht",
            "value": 1 //
        },
        {
            "hc-key": "do",
            "value": 0
        },
        {
            "hc-key": "hr",
            "value": 1 //
        },
        {
            "hc-key": "th",
            "value": 1 //
        },
        {
            "hc-key": "cd",
            "value": 0
        },
        {
            "hc-key": "kw",
            "value": 0
        },
        {
            "hc-key": "ie",
            "value": 0
        },
        {
            "hc-key": "mm",
            "value": 0
        },
        {
            "hc-key": "ug",
            "value": 0
        },
        {
            "hc-key": "kz",
            "value": 0
        },
        {
            "hc-key": "tr",
            "value": 1 //
        },
        {
            "hc-key": "ga",
            "value": 0
        },
        {
            "hc-key": "tl",
            "value": 0
        },
        {
            "hc-key": "mr",
            "value": 0
        },
        {
            "hc-key": "dz",
            "value": 0
        },
        {
            "hc-key": "pe",
            "value": 1 //
        },
        {
            "hc-key": "ao",
            "value": 0
        },
        {
            "hc-key": "mz",
            "value": 0
        },
        {
            "hc-key": "cr",
            "value": 0
        },
        {
            "hc-key": "sv",
            "value": 1 //
        },
        {
            "hc-key": "gt",
            "value": 0
        },
        {
            "hc-key": "bz",
            "value": 0
        },
        {
            "hc-key": "gy",
            "value": 5 //
        },
        {
            "hc-key": "hn",
            "value": 0
        },
        {
            "hc-key": "ni",
            "value": 0
        },
        {
            "hc-key": "mw",
            "value": 0
        },
        {
            "hc-key": "tm",
            "value": 0
        },
        {
            "hc-key": "zm",
            "value": 0
        },
        {
            "hc-key": "nc",
            "value": 0
        },
        {
            "hc-key": "za",
            "value": 0
        },
        {
            "hc-key": "lt",
            "value": 4 //
        },
        {
            "hc-key": "et",
            "value": 0
        },
        {
            "hc-key": "so",
            "value": 1 //
        },
        {
            "hc-key": "gh",
            "value": 0
        },
        {
            "hc-key": "si",
            "value": 0
        },
        {
            "hc-key": "ba",
            "value": 0
        },
        {
            "hc-key": "jo",
            "value": 0
        },
        {
            "hc-key": "sy",
            "value": 0
        },
        {
            "hc-key": "mc",
            "value": 0
        },
        {
            "hc-key": "al",
            "value": 3 //
        },
        {
            "hc-key": "uy",
            "value": 0
        },
        {
            "hc-key": "cnm",
            "value": 0
        },
        {
            "hc-key": "mn",
            "value": 7 //
        },
        {
            "hc-key": "rw",
            "value": 0
        },
        {
            "hc-key": "bo",
            "value": 0
        },
        {
            "hc-key": "cm",
            "value": 0
        },
        {
            "hc-key": "cg",
            "value": 0
        },
        {
            "hc-key": "eh",
            "value": 0
        },
        {
            "hc-key": "rs",
            "value": 2 //
        },
        {
            "hc-key": "me",
            "value": 1 //
        },
        {
            "hc-key": "bj",
            "value": 0
        },
        {
            "hc-key": "tg",
            "value": 0
        },
        {
            "hc-key": "la",
            "value": 0
        },
        {
            "hc-key": "af",
            "value": 0
        },
        {
            "hc-key": "ua",
            "value": 18 //
        },
        {
            "hc-key": "sk",
            "value": 0
        },
        {
            "hc-key": "jk",
            "value": 0
        },
        {
            "hc-key": "pk",
            "value": 9 //
        },
        {
            "hc-key": "bg",
            "value": 0
        },
        {
            "hc-key": "li",
            "value": 0
        },
        {
            "hc-key": "at",
            "value": 6 //
        },
        {
            "hc-key": "sz",
            "value": 0
        },
        {
            "hc-key": "hu",
            "value": 12 //
        },
        {
            "hc-key": "ne",
            "value": 0
        },
        {
            "hc-key": "lu",
            "value": 0
        },
        {
            "hc-key": "ad",
            "value": 0
        },
        {
            "hc-key": "ci",
            "value": 0
        },
        {
            "hc-key": "lr",
            "value": 0
        },
        {
            "hc-key": "sl",
            "value": 0
        },
        {
            "hc-key": "bn",
            "value": 0
        },
        {
            "hc-key": "be",
            "value": 2 //
        },
        {
            "hc-key": "iq",
            "value": 0
        },
        {
            "hc-key": "ge",
            "value": 1 //
        },
        {
            "hc-key": "gm",
            "value": 0
        },
        {
            "hc-key": "ch",
            "value": 5 //
        },
        {
            "hc-key": "td",
            "value": 0
        },
        {
            "hc-key": "ng",
            "value": 2 //
        },
        {
            "hc-key": "kv",
            "value": 0
        },
        {
            "hc-key": "lb",
            "value": 2 //
        },
        {
            "hc-key": "sx",
            "value": 0
        },
        {
            "hc-key": "dj",
            "value": 0
        },
        {
            "hc-key": "er",
            "value": 0
        },
        {
            "hc-key": "bi",
            "value": 0
        },
        {
            "hc-key": "sr",
            "value": 0
        },
        {
            "hc-key": "il",
            "value": 8 //
        },
        {
            "hc-key": "sn",
            "value": 0
        },
        {
            "hc-key": "gn",
            "value": 0
        },
        {
            "hc-key": "pl",
            "value": 31 //
        },
        {
            "hc-key": "mk",
            "value": 0
        },
        {
            "hc-key": "py",
            "value": 0
        },
        {
            "hc-key": "by",
            "value": 7 //
        },
        {
            "hc-key": "lv",
            "value": 2 //
        },
        {
            "hc-key": "bf",
            "value": 0
        },
        {
            "hc-key": "ss",
            "value": 0
        },
        {
            "hc-key": "na",
            "value": 0
        },
        {
            "hc-key": "ro",
            "value": 9 //
        },
        {
            "hc-key": "zw",
            "value": 0
        },
        {
            "hc-key": "kh",
            "value": 0
        },
        {
            "hc-key": "sd",
            "value": 0
        },
        {
            "hc-key": "cz",
            "value": 1 //
        },
        {
            "hc-key": "ly",
            "value": 0
        },
        {
            "hc-key": "md",
            "value": 0
        },
        {
            "hc-key": "cf",
            "value": 0
        },
        {
            "hc-key": "sg",
            "value": 1 //
        },
        {
            "hc-key": "vn",
            "value": 7 //
        },
        {
            "hc-key": "tn",
            "value": 0
        },
        {
            "hc-key": "tw",
            "value": 19 //
        },
        {
            "hc-key": "mg",
            "value": 2 //
        },
        {
            "hc-key": "is",
            "value": 0
        },
        {
            "hc-key": "lk",
            "value": 0
        },
        {
            "hc-key": "eg",
            "value": 3 //
        },
        {
            "hc-key": "ml",
            "value": 0
        },
        {
            "hc-key": "bw",
            "value": 0
        },
        {
            "hc-key": "np",
            "value": 3 //
        },
        {
            "hc-key": "bt",
            "value": 0
        }
    ];

    // Initiate the chart
    $('#container').highcharts('Map', {

        title: {
            text: 'The Countries We Represent'
        },

        subtitle: {
          floating: true,
            //text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/world-robinson-highres.js">World, Robinson projection, high resolution</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            min: 0
        },
        colorAxis: {
          //type: "logarithmic"
          max: 10,
          //minColor: #6150e9,
          //maxColor: #000000,
          //enabled: false
          min: 1,
          //minColor: 6150e9
        },
        series: [{
            data: data,
            mapData: Highcharts.maps['custom/world-robinson-highres'],
            joinBy: 'hc-key',
            name: 'Students from',
            states: {
                hover: {
                    color: '#a4edba'
                },
                //color: '#06cbee'
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }]
    });
});
