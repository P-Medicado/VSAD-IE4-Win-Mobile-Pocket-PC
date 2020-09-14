
    function p_bg(r, g, b) {
        return [
            "<div style='background: rgb(",
            r, ",", g, ",", b, ");'>",
            "<p>",thoughts.value(),"</p>", 
            "</div>"
        ].join("")
    }

    var thoughts = {
        levels: [
            "I am completely distraught.",
            "I'm so sad today!",
            "I don't feel well at all.",
            "Things aren't going great for me.",
            "I'm having a bad day.",
            "I feel okay today, how do you feel?",
            "Today is going good!",
            "Things keep getting better &amp; better.",
            "I'm feeling great recently.",
            "I'm so ecstatic!",
            "Life is absolutely amazing."
        ],
        current: 5,
        value: function() {
            return this.levels[this.current]

            this.current = this.current
        },
        check: function(happiness, saddness) {

            // from 0 (sad) to 200 (happy)
            // select slot of 11 slots
            var sentiment = function(hap, sad) {
                var h = hap / 255
                var s = sad / 255

                var spread = (h - s) * 100 + 100
                var slots = 200 / 11

                return spread / slots >> 0
            }

            this.current = sentiment(happiness, saddness)
        }
    }

    var feels = {
        r: 70,
        g: 100,
        b: 100,
        happy: function() {
            this.g = Math.min(this.g + 10, 255)
            if(this.g > 100) this.b = Math.max(this.b - 10, 0)
        },
        sad: function() {
            this.b = Math.min(this.b + 10, 255)
            if(this.b > 100) this.g = Math.max(this.g - 10, 0)
        }
    }

    function checky(feeling) {
        effect(feeling)
        window["face"].innerHTML = p_bg(feels.r,feels.g,feels.b)
        thoughts.check(feels.g, feels.b)
    }

    function effect(key) {
        switch (key) {
            case "happy": return feels.happy()
            case "sad": return feels.sad()
        }
    }