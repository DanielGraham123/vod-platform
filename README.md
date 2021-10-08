# ![logo](./documentation/assets/images/logo.png) [**BBtv**Docs](./documentation/index.html)

This documentation can be accessed locally from the [documentation folder](./documentation/).

# Contents

1.  [Installation](#installation)
    - [Basic Installation](#basic-installation)
    - [Quick Start](#development-to-production)
    - [Folder Structure](#folder-structure)
    - [Component Structure](#BBtv-custom-components-structure)
    - [Favicon Icon](#for-favicon-icon)
    - [Logo](#for-logo)
2.  [Layout Configuration](#layout-configure)
3.  [Sidebar & Header](#sidebar-and-header)
4.  [Custom Components](#custom-components)
    - [Custom card](#custom-card)
    - [Prop](#prop)
    - [Slots](#slots)
    - [Am Chart](#am-chart)
    - [Apex Chart](#apex-chart)
    - [High Chart](#high-chart)
    - [Tab](#tab)
    - [Tab Nav](#tab-nav)
    - [Tab Item](#tab-item)
    - [Tab Content](#tab-content)
    - [Tab Content Item](#tab-content-item)
    - [TimeLine](#timeline)
    - [Slider](#slider)
    - [Lottie](#lottie)
5.  [Bootstrap Components](#bootstrap-components)
6.  [Browser Support](#browser-support)
7.  [Change Log](#change-log)
8.  [Source & Credits](#source-and-credits)

---

## Installation

---

### Basic Installation

Steps to be followed for getting started with the template:

There are followings basics packages you should install before going
further.

1.  Open terminal or CMD and go the root directory of the template
2.  Run in terminal or CMD: npm install
3.  To Run project on Local environment run: npm run dev
4.  Then visit: http://localhost:6400

### Development to production

Here is the **steps of production:**

1.  To Deploy project on server create production build by running: npm
    run build
2.  This will generate /dist folder in project root directory you'll
    have to upload these file using a FTP on your server
3.  Now that you have followed these steps your basic installation is
    complete and ready to flaunt your site to the world.

### Folder Structure

Here is the **general structure of the template:**

    BBtv-vue
    | - public
       | - img
         - favicon.ico
         - index.html

    | - src
      | - assets
        | - css
        | - fonts
        | - images
        | - js
        | - scss

        | - components
            | - BBtv

        | - config
            | - BBtv

        | - StaticData
            | - BBtv

        | - layouts
            | - AuthLayouts
            | - BackendLayouts
            | - BlankLayout.vue
            | - FrontendLayout.vue

        | - plugins
            | - bootstrap-vue.js
        | - router
        | - store
        | - views
          - App.vue
          - main.js
          - registerServiceWorker.js
      - .browserslistrc
      - .editorconfig
      - .eslintrc.js
      - .eslintignore.js
      - .gitignore
      - babel.config.js
      - .env.example
      - package.json
      - README.md
      - vue.config.js

## BBtv custom components structure

Here is the general structure of the BBtv custom components:

    <!-- BBtv components -->

    | - components
        | - core
            | - breadcrumbs
                - BreadCrumbStyle1.vue
            | - cards
                | - iq-card.vue
            | - chart
                | - AmChart.vue
                | - ApexChart.vue
                | - HighChart.vue
                | - MapAmChart.vue
            | - footer
                | - FooterStyle1.vue
            | - lottie
                | - Lottie.vue
            | - menus
                | - ListStyle1.vue
                | - ListStyle1.vue
            | - navbars
                | - DefaultNavBar.vue
                | - MenuNavBar.vue
            | - sidebar
                | - SideBarStyle1.vue
            | - slider
                | - Swiper.vue
                | - SwiperSlide.vue
                | - SwiperNav.vue
            | - tab
                | - tab-nav.vue
                | - tab-nav-item.vue
                | - tab-content.vue
                | - tab-content-item.vue
           | - timeline
                | - TimeLine.vue
            | - loader
                | - Loader.vue

### For Favicon icon

Set favicon for replace favicon.ico and restart server

### For Logo

Use the header style which is in components -\> BBtv -\> Partials
-\> Header. Replace "logo.png" with your own logo image URL.

    | - BBtv-vue
        | - layouts
            | - FrontendLayout.vue

    <NavHeader :items="headerItem" :userprofile="profile" :homeURL="{ name: 'dashboard.home-1' }"  :logo="logo" ></NavHeader>
    <script>
      import logoImg from '../assets/images/logo.png'
        data () {
            return {
                headerItem: [
                { title: 'Home', link: '/' },
                { title: 'Tv Shows', link: '/show-category' },
                { title: 'Movies', link: '/movie-category' }
              ]
            }
          }
    </script>

## Layout Configure

---

Here is the **layout and routing configure**

     | - layouts
        | - AuthLayouts
        | - BackendLayout.vue
        | - BlankLayout.vue
        | - FrontendLayout.vue
    | - router
        | - index.js

Router url configure

    // Set Layout in this route
    - BackendLayout

    ```
    {path: '/admin',name: 'dashboard',component: BackendLayout,meta: { auth: true },children: childRoutes('dashboard')},
    ```

    ```
    - Frontend Layout

    ```
    meta: {  path: '/',name: 'home-page',component: FrontendLayout,meta: { auth: true },children: homePageRoutes('home-page') }
    ```

## Sidebar and Header

---

Here is the **sidebar object example just you can copy and past and
rename then title and icon.**

    [
    {
        "title": "Category",
        "name": "sidebar.category",
        "is_heading": false,
        "is_active": false,
        "class_name": "",
        "link": "",
        "is_icon_class": true,
        "icon": "las la-list-ul",
        "children": [
          {
            "title": "Add Category",
            "name": "sidebar.addCategory",
            "is_active": false,
            "link": {
              "name": "category.add-category"
            },
            "class_name": "",
            "is_icon_class": true,
            "icon": "las la-user-plus"
          },
          {
            "title": "Category List",
            "name": "sidebar.categoryList",
            "is_active": false,
            "link": {
              "name": "category.category-list"
            },
            "class_name": "",
            "is_icon_class": true,
            "icon": "las la-eye"
          }
        ]
      },
    ]

Sidebar based on json and check the file in spacific path
./src/StaticData/json/SideBar.json and import or add your array to
sidebar key.

    // BackendLayout Component
    <SideBarStyle1 :items="sidebar" :logo="logo" />

    <NavBarStyle1 title="Dashboard" :homeURL="{ name: 'dashboard.home-1' }" :logo="logo">
        <template v-slot:right>
            add your items
        </template>
    </NavBarStyle1>

     <FooterStyle1>
      <template v-slot:left>
        <li class="list-inline-item"><a href="#">Privacy Policy</a></li>
        <li class="list-inline-item"><a href="#">Terms of Use</a></li>
      </template>
      <template v-slot:right>
        Copyright 2020 <a href="#">BBtv</a> All Rights Reserved.
      </template>
    </FooterStyle1>




    // FrontendLayout Component

    <NavHeader :items="headerItem" :userprofile="profile" :homeURL="{ name: 'dashboard.home-1' }"  :logo="logo">
        <template v-slot:right>
            add your items
        </template>
    </NavHeader>
        add your component
     <Footer>
      <template v-slot:right>
        Copyright 2020 <a href="#">BBtv</a> All Rights Reserved.
      </template>
    </Footer>

## Custom Components

---

### Custom Card

We have build different types of custom card components. And these are
the some prop and slots

    <iq-card body-class="border text-center" class="bg-primary text-white">
     <template v-slot:headerTitle>
          <h4>Card Title</h4>
      </template>
      <template v-slot:body>
        <p >lorium ipsum</b-button>
      </template>
      <template v-slot:footer>
        <b-button variant="danger">Button</b-button>
      </template>
    </iq-card>

### Prop

Prop is set the attriblute for the component.

Name Detail

---

headerClass Class added in card header div
bodyClass Class added in card body div
footerClass Class added in card footer div

### Slots

Slot is set of the content between opening and closing tag.

Name Detail

---

headerTitle For card top left icon or title
headerAction For card top right icon or title
body For card body to add with padding
default For without padding added content

### Am Chart

        <AmChart :element="item.type" :type="item.type" :option="item.bodyData"/>

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

element String element is identify the unique div element like id
type String Difftrent type of chart set by type
option Object Chart data and setting by option object

###### Types

Types of Am Chart

1.  line
2.  column
3.  mixes-column
4.  stacked
5.  bar-line
6.  data-based
7.  line-zoom-h
8.  line-zoom-v
9.  radar
10. polar-scatter
11. polar
12. pie

### Apex Chart

Slot is set of the content between opening and closing tag.

        <ApexChart element="chart" :chartOption="option"/>

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

element String element is identify the unique div element like id
chartOption Object Set Chart option

### High chart

Slot is set of the content between opening and closing tag.

        <HighChart :ref="item.type" :option="item.bodyData"/>

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

ref String element is identify the unique div element like id
option Object Set Chart option

### Tab

We have build custom tab components. And these are the some prop and
slots

    <tab-nav :tabs="true" id="myTab-1">
      <tab-nav-items :active="true" id="home-tab" ariaControls="home" role="tab" :ariaSelected="true" title="Home" />
      <tab-nav-items :active="false" id="profile-tab" ariaControls="profile" role="tab" :ariaSelected="false" title="Profile" />
      <tab-nav-items :active="false" id="contact-tab" ariaControls="contact" role="tab" :ariaSelected="false" title="Contact" />
    </tab-nav>
    <tab-content id="myTabContent">
      <tab-content-item :active="true" id="home" aria-labelled-by="home-tab">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </tab-content-item>
      <tab-content-item :active="false" id="profile" aria-labelled-by="profile-tab">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </tab-content-item>
      <tab-content-item :active="false" id="contact" aria-labelled-by="contact-tab">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </tab-content-item>
    </tab-content>

### Tab Nav

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

id String -
pills Boolean pills is style of nav tab and pass the boolean value
tabs Boolean tabs is style of nav tab and pass the boolean value
vertical Boolean vertical is list style of nav tab and pass the boolean value
align String align nav tabs right, left and center

###### Events

Events is any functionality want any change of tab

Name Detail

---

change on tab change call this event

### Tab Item

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

id String identify the tab content for navigate
active Boolean CSS class (or classes) to apply to the currently active tab
ariaControls String The aria-controls attribute creates a cause and effect relationship
ariaSelected Boolean This attribute is used with single-selection and multiple-selection widgets
dataToggle String The toggle tells Bootstrap what to do and the target tells
href String Set navigation link
title String Pass Title as a string or set html content via slot
liClass String -

###### Slots

Slot is set of the content between opening and closing tag.

Name Detail

---

title For tab nav item content any html content or image by using slot

### Tab Content

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

id String id for identify the tab content to nav tab

### Tab Content Item

###### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

id String identify the tab content for navigate
active Boolean CSS class (or classes) to apply to the currently active tab
ariaLabelledBy String Identifies the element (or elements) that labels the current element.

### TimeLine

We have build timeline components. And these are the some prop

    timelineItems: [
        {
          color: 'danger',
          title: 'Dev Meetup',
          right: '20 November 2019',
          description: 'Bonbon macaroon jelly <a href="">beans gummi</a> bears jelly lollipop apple',
          child: {
            type: 'img',
            items: [
              require('../../assets/images/user/05.jpg'),
              require('../../assets/images/user/06.jpg'),
              require('../../assets/images/user/07.jpg'),
              require('../../assets/images/user/08.jpg'),
              require('../../assets/images/user/09.jpg'),
              require('../../assets/images/user/10.jpg')
            ]
          }
        }
      ]

    <TimeLine :items="timelineItems" />

#### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

items Array Pass Array of Object to create time line

### Silder

We have build timeline components. And these are the some prop and slots

    <Swipe>
      <SwiperSlide>
        <a href="javascript:void(0)" class="iq-booking-date">
          <div class="iq-booking-dot"></div>
            <h3>Slider Item</h3>
        </a>
      </SwiperSlide>
    </Swipe>

#### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

sliderOption Object this prop has pass the slider setting object

#### Slots

Slot is set of the content between opening and closing tag.

Name Detail

---

default Pass slider item in default slot

### Lottie

We have build lottie components. And these are the some prop

    <lottie :option="require('../../assets/images/small/data')"></lottie>

#### Prop

Prop is set the attriblute for the component.

Name Type Detail

---

option Object Option pass the lottie animation json file to execute the svg image.

## Bootstrap Components

---

Bootstrap has wonderfull documentation on the following components::

- [Row
  Alignments](https://bootstrap-vue.js.org/docs/components/layout/#alignment)
- [Alerts](https://bootstrap-vue.js.org/docs/components/alert)
- [Badges](https://bootstrap-vue.js.org/docs/components/badge)
- [Carousel](https://bootstrap-vue.js.org/docs/components/carousel/#carousel)
- [Columns](https://bootstrap-vue.js.org/docs/components/layout/#columns-b-col)
- [Tables](https://bootstrap-vue.js.org/docs/components/table/#tables)
- [Buttons](https://bootstrap-vue.js.org/docs/components/button)

Vue Bootstrap for extra component
[https://bootstrap-vue.js.org/docs/components](https://bootstrap-vue.js.org/docs/components)

## Browser Support

---

Supports all major Browsers like Google Chrome, Mozilla Firefox, Safari,
Opera, Internet Explorer 9 and above.

## Change Log

---

#### Version 1.0

- Initial Release

## Source and Credits

---

All images and videos are for preview purposes only and are not included
in the download files. Images are of copyrights under Creative Commons
CC0.

#### Images

- bigstockphoto [bigstockphoto](https://www.bigstockphoto.com/)
- Pexels [Pexels](https://www.pexels.com/)
- freepik [freepik](http://www.freepik.com/)
- pixabay [pixabay](https://pixabay.com/)

#### Plugins

- [Vue JS](https://vuejs.org)
- [Vue Bootstrap](https://bootstrap-vue.js.org/)
- [Parallax](https://www.npmjs.com/package/jarallax)
- [Jquery](https://jquery.com/)
- [Jquery appear](https://github.com/bas2k/jquery.appear/)
- [Countdown](https://github.com/glix/jQuery-Plugins/tree/master/Modern-Circular-jQuery-Countdown-Timer-Plugin-Final-Countdown)
- [Full Calendar](https://fullcalendar.io/docs/vue)
- [AmChart](https://www.amcharts.com/docs/v4/getting-started/integrations/using-vue-js/)
- [ApexChart](https://apexcharts.com/docs/vue-charts/)
- [Page Scroll
  Progress](https://github.com/guillaumebriday/vue-scroll-progress-bar)
- [Mapbox Gl vue](https://www.npmjs.com/package/mapbox-gl-vue)
- [Swiper](https://swiperjs.com/)
- [Lottie](https://airbnb.io/lottie/#/)

#### CSS & Fonts

- [Bootstrap Vue](https://bootstrap-vue.js.org/)
- [Font Awesome](http://fortawesome.github.io/Font-Awesome/)
- [ionicons](http://ionicons.com/#cdn)
- [remixicon](https://remixicon.com/)
- [Google Fonts](https://www.google.com/fonts)

[**Quick Start**](#quick-start-section) [Basic
Installation](#installation-section) [Development To
Production](#dev-to-prod-section) [Folder
Structure](#folder-stuc-section) [For Favicon](#for-favicon-section)
[For Logo](#for-logo-section) [Layout Configure](#layout-config-section)
[Sidebar & Header](#sidbar-section) [**Custom
Components**](#custom-components) [Custom Card](#custom-card)
[Chart](#chart-section) [Tab](#tab-section)
[TimeLine](#timeline-section) [Slider](#slider-section)
[Lottie](#lottie-section) [Bootstrap Components](#bootstrap-section)
[Browser Support](#browser-support-section) [Change
Log](#change-log-section) [Source](#source-section)

Designed with \*\* by [Xiaoying Riley](https://themes.3rdwavemedia.com/)
for developers
