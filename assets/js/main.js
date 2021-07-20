function switch_dark_mode_icon(darkmode, id) {
    darkmode.toggle();
    render_dark_mode_icon(darkmode, id);
}
const options = {
    bottom: '64px', // default: '32px'
    right: 'unset', // default: '32px'
    left: '32px', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: false, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
}

const darkmode = new Darkmode(options);
darkmode.showWidget();

function render_dark_mode_icon(darkmode, id) {
    var x = document.getElementsByTagName("img");
    var i;

    console.log(x)
    if (darkmode.isActivated()) {
        document.getElementById(id).classList.remove('fa-sun');
        document.getElementById(id).classList.add('fa-moon');
        for (i = 0; i < x.length; i++) {
            x[i].style["mix-blend-mode"] = "difference";
        }

    } else {
        document.getElementById(id).classList.remove('fa-moon');
        document.getElementById(id).classList.add('fa-sun');
        for (i = 0; i < x.length; i++) {
            x[i].style["mix-blend-mode"] = "normal";
        }
    }
}

