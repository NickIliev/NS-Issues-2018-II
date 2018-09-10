const observableModule = require('data/observable');

const routes = {
  Home: 'home/home-tab/home-tab-page',
  About: 'home/about-tab/about-tab-page',
  Contact: 'home/contact-tab/contact-tab-page',
  Profile: 'home/profile-tab/profile-tab-page',
  Settings: 'home/settings-tab/settings-tab-page'
}

exports.pageLoaded = function (args) {
  // do something
};

exports.tabTap = function(args) {
  const tab = args.object;
  if (tab.id !== 'selected') {
    const page = tab.page;
    const prevSelected = page.getViewById('selected');
    const selector = page.getViewById('selector');
    const frame = page.getViewById('frame');

    prevSelected.id = '';
    tab.id = 'selected';

    const translateBy = tab.getLocationRelativeTo(selector).x;
    let transition = 'slide';
    if (translateBy < 0) {
      transition = 'slideRight';
    }

    selector.animate({
      translate: {
        x: selector.translateX + translateBy, y: 0
      },
      duration: 380,
      curve: 'easeIn'
    }).then(_ => {
      frame.navigate({
        moduleName: routes[tab.text],
        transition: {
          name: transition,
          clearHistory: true,
          duration: 500,
          curve: 'easeIn'
        }
      });
    }).catch(_ => {});
  }

};
