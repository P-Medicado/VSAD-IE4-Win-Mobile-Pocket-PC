// this file uses default params, convert to JSDocs
    var xml_text = 
    `<?xml version="1.0" encoding="utf-8"?>
        <ArrayOfFruit>
            <Fruit>
                <Name>Apple</Name>
                <Price>8.40</Price>
                <Count>10</Count>
                <Sweet>false</Sweet>
            </Fruit>
            <Fruit>
                <Name>Orange</Name>
                <Price>13.60</Price>
                <Count>8</Count>
                <Sweet>true</Sweet>
            </Fruit>
            <Fruit>
                <Name>Peach</Name>
                <Price>15.10</Price>
                <Count>12</Count>
                <Sweet>true</Sweet>
            </Fruit>
            <Vegetable>
                <Name>Apple</Name>
                <Price>8.40</Price>
                <Count>10</Count>
                <Sweet>false</Sweet>
            </Vegetable>
            <Vegetable>
                <Name>Orange</Name>
                <Price>13.60</Price>
                <Count>8</Count>
                <Sweet>true</Sweet>
            </Vegetable>
            <Vegetable>
                <Name>Peach</Name>
                <Price>15.10</Price>
                <Count>12</Count>
                <Sweet>true</Sweet>
            </Vegetable>
        </ArrayOfFruit>
    `
    var XML = {
        get(xml = new Document(), tag = "") {
            console.log(tag)
            console.log(xml.getElementsByTagName(tag))
            return xml.getElementsByTagName(tag)[0].firstChild.data
        },
        obj(xml = new Document(), tags = [""], this_arg) {
            var obj = this_arg || {}
            for (var i = 0; i < tags.length; i++) 
                obj[tags[i]] = XML.get(xml, tags[i])
            return obj
        },
        arr(xml = new Document(), name = "", tags = [""]) {
            var xml_objs = xml.getElementsByTagName(name)
            var arr = []
            for (var i = 0; i < xml_objs.length; i++) 
                arr.push(XML.obj(xml_objs[i], tags))
            return arr
        },
        xarr(xml = new Document(), converter) {
            var xml_objs = xml.getElementsByTagName(converter.name)
            var arr = []
            for (var i = 0; i < xml_objs.length; i++) 
                arr.push(new converter(xml_objs[i]))
            return arr
        }
    }
    var xml_doc = new DOMParser().parseFromString(xml_text, "text/xml")

    var Fruit = function(xml) {
        XML.obj(xml, ["Name", "Price", "Count"], this)
    }

    var Vegetable = function(xml) {
        XML.obj(xml, ["Name", "Sweet", "Price"], this)
    }

    function print(obj) {
        document.body.innerText += JSON.stringify(obj)
    }

    var XAPI = {
        url: "",
        then: function(fn, class_type) {
            this.callback = function(xml_text) {
                // loader(xml_text, function(xml_doc) {
                    var arr = XML.xarr(xml_text, class_type)
                    for (var i = 0; i < arr.length; i++)
                        fn(arr[i])
                // })
            }
        },
        callback: function() {}
    }

    XAPI.then(print, Fruit)
    XAPI.callback(xml_doc)

    XAPI.then(print, Vegetable)
    XAPI.callback(xml_doc)