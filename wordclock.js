$.fn.wordClock = function() {
    this.append('\
        <div class="wc-clock-frame">\
            <div class="wc-clock-panel">\
                <span class="wc-clock-label-active" id="wc-it">it</span>e<span class="wc-clock-label-active" id="wc-is">is</span>ftlvne<br />j<span class="wc-clock-label-active" id="wc-quarter">quarter</span>cko<br /><span class="wc-clock-label-active" id="wc-twenty">twenty</span>x<span class="wc-clock-label-active" id="wc-fivem">five</span><br /><span class="wc-clock-label-active" id="wc-half">half</span>c<span class="wc-clock-label-active" id="wc-tenm">ten</span>e<span class="wc-clock-label-active" id="wc-to">to</span><br /><span class="wc-clock-label-active" id="wc-past">past</span>b<span class="wc-clock-label-active" id="wc-seven">seven</span>l<br /><span class="wc-clock-label-active" id="wc-one">one</span><span class="wc-clock-label-active" id="wc-two">two</span><span class="wc-clock-label-active" id="wc-three">three</span><br /><span class="wc-clock-label-active" id="wc-four">four</span><span class="wc-clock-label-active" id="wc-fiveh">five</span><span class="wc-clock-label-active" id="wc-six">six</span><br /><span class="wc-clock-label-active" id="wc-nine">nine</span>k<span class="wc-clock-label-active" id="wc-twelve">twelve</span><br /><span class="wc-clock-label-active" id="wc-eight">eight</span><span class="wc-clock-label-active" id="wc-eleven">eleven</span><br /><span class="wc-clock-label-active" id="wc-tenh">ten</span>y<span class="wc-clock-label-active" id="wc-oclock">o\'clock</span><br />\
            </div>\
        </div>');

    var h_labels = [$('#wc-one'), $('#wc-two'), $('#wc-three'), $('#wc-four'), $('#wc-fiveh'), $('#wc-six'), $('#wc-seven'), $('#wc-eight'), $('#wc-nine'), $('#wc-tenh'), $('#wc-eleven'), $('#wc-twelve')]

    function update_time() {
        $('.wc-clock-label-active').removeClass('wc-clock-label-active');
        $('#wc-it').addClass('wc-clock-label-active');
        $('#wc-is').addClass('wc-clock-label-active');

        var h = new Date().getHours() % 12;
        var m = new Date().getMinutes();

        if (m <= 57 && m > 3) {
            if (m <= 35) $('#wc-past').addClass('wc-clock-label-active');
            else { $('#wc-to').addClass('wc-clock-label-active'); h++; }
        }

             if (m <= 3)  $('#wc-oclock').addClass('wc-clock-label-active');
        else if (m <= 8)  $('#wc-fivem').addClass('wc-clock-label-active');
        else if (m <= 13) $('#wc-tenm').addClass('wc-clock-label-active');
        else if (m <= 17) $('#wc-quarter').addClass('wc-clock-label-active');
        else if (m <= 23) $('#wc-twenty').addClass('wc-clock-label-active');
        else if (m <= 28) { $('#wc-twenty').addClass('wc-clock-label-active'); $('#wc-fivem').addClass('wc-clock-label-active'); }
        else if (m <= 35) $('#wc-half').addClass('wc-clock-label-active');
        else if (m <= 37) { $('#wc-twenty').addClass('wc-clock-label-active'); $('#wc-fivem').addClass('wc-clock-label-active'); }
        else if (m <= 43) $('#wc-twenty').addClass('wc-clock-label-active');
        else if (m <= 48) $('#wc-quarter').addClass('wc-clock-label-active');
        else if (m <= 52) $('#wc-tenm').addClass('wc-clock-label-active');
        else if (m <= 57) $('#wc-fivem').addClass('wc-clock-label-active');
        else if (m <= 60) { $('#wc-oclock').addClass('wc-clock-label-active'); h++; }

        h_labels[h-1].addClass('wc-clock-label-active');

    }

    update_time();
    setInterval(update_time, 4000);

    return this;
}
