export const Chat = {
	__html: `
    var div = document.createElement('div');
    div.className = 'fb-customerchat';
    div.setAttribute('page_id', '124133874280482');
    div.setAttribute('ref', 'b64:d2Vic2l0ZQ==');
    document.body.appendChild(div);
    window.fbMessengerPlugins = window.fbMessengerPlugins || {
        init: function () {
        FB.init({
            appId            : '1678638095724206',
            autoLogAppEvents : true,
            xfbml            : true,
            version          : 'v3.3'
        });
        }, callable: []
    };
    window.fbAsyncInit = window.fbAsyncInit || function () {
        window.fbMessengerPlugins.callable.forEach(function (item) { item(); });
        window.fbMessengerPlugins.init();
    };
    setTimeout(function () {
        (function (d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) { return; }
        js = d.createElement(s);
        js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk/xfbml.customerchat.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
    }, 0); `
};
