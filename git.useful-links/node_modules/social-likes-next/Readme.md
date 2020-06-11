# Social Likes Next

[![Build Status](https://travis-ci.org/sapegin/social-likes-next.svg)](https://travis-ci.org/sapegin/social-likes-next)
[![npm](https://img.shields.io/npm/v/social-likes-next.svg)](https://www.npmjs.com/package/social-likes-next)

Beautiful share buttons for social networks: Facebook, Twitter, Google+, Pinterest, Telegram, LinkedIn, Vkontakte and Odnoklassniki.

[![](http://wow.sapegin.me/3S0e0B1j372d/social-likes-next.png)<br>**See the demo!**](http://social-likes-next.js.org/)

## Features

- Easy to install.
- Beautiful and all in one style (with three different skins).
- Won’t explode your page’s layout.

This is a modern version of the [Social Likes for jQuery](https://github.com/sapegin/social-likes). Main distinctions:

- No jQuery dependency.
- No counters.
- No single button mode.
- SVG icons.
- Supports IE11+.

## Installation and configuration

### Installation from npm

It’s recommended to install the `social-likes-next` from npm:

```bash
npm install --save social-likes-next
```

And use a bundler like Webpack or Browserify:

```javascript
// ES6
import 'social-likes-next';
import 'social-likes-next/lib/social-likes_flat.css';  // Flat skin
// import 'social-likes-next/lib/social-likes_light.css';  // Light skin
// import 'social-likes-next/lib/social-likes_birman.css';  // Birman skin

// ES5
require('social-likes-next');
require('social-likes-next/lib/social-likes_flat.css');  // Flat skin
// require('social-likes-next/lib/social-likes_light.css');  // Light skin
// require('social-likes-next/lib/social-likes_birman.css');  // Birman skin
```

### Installation from CDN

You can also [use npmcdn](https://npmcdn.com/social-likes-next/):

1. Add a script to your the bottom of your HTML’s `<body>`:

```html
<script src="https://npmcdn.com/social-likes-next/dist/social-likes.min.js"></script>
```

2. Add a stylesheet.

Choose one of the CSS files:

* `social-likes_flat.css`: Flat skin;
* `social-likes_light.css`: Light skin;
* `social-likes_birman.css`: Birman skin.

And add it to your HTML’s `<head>`:

```html
<link rel="stylesheet" href="https://npmcdn.com/social-likes-next/dist/social-likes_flat.css">
```

### Adding button to your page

Add this HTML where you want to have share buttons:

```html
<div class="social-likes">
	<div data-service="facebook" title="Share link on Facebook">Facebook</div>
	<div data-service="twitter" title="Share link on Twitter">Twitter</div>
	<div data-service="plusone" title="Share link on Google+">Google+</div>
	<!-- <div data-service="pinterest" title="Share link on Pinterest" data-media="image link, required">Pinterest</div> -->
	<!-- <div data-service="vkontakte" title="Share link on Vkontakte">Vkontakte</div> -->
	<!-- <div data-service="odnoklassniki" title="Share link on Odnoklassniki">Odnoklassniki</div> -->
</div>
```

You can modify the labels or remove them.

## Advanced configuration

### Layout

#### Default

All buttons in a row.

```html
<div class="social-likes">
	<div data-service="facebook" title="Share link on Facebook">Facebook</div>
	...
</div>
```

#### Vertical

All buttons in a column.

```html
<div class="social-likes social-likes_vertical">
	<div data-service="facebook" title="Share link on Facebook">Facebook</div>
	...
</div>
```

### Options

`url`

URL of a shareable page. Current page by default.

`title`

Title for Twitter and Vkontakte. Current page’s title by default.

Examples:

```html
<div class="social-likes" data-url="http://landscapists.info/" data-title="Landscapists of Russia">
	…
</div>
```

or:

```html
<div class="social-likes">
	<div data-service="twitter" title="Share link on Twitter" data-title="Landscapists of Russia">Twitter</div>
	…
</div>
```

### Services specific options

#### Twitter

You can specify `via` (site’s or your own Twitter) and `related` (any other Twitter you want to advertise) on Twitter button:

```html
<div data-service="twitter" data-via="sapegin" data-related="Landscapists">Twitter</div>
```

#### Pinterest

You should specify an image URL via `data-media` attribute on Pinterest button:

```html
<div data-service="pinterest" data-media="http://example.com/image/url.jpg">Pinterest</div>
```

### Manual initialization

Could be useful on dynamic (AJAX) websites.

```html
<div id="share">
	<div data-service="facebook">Facebook</div>
	...
</div>
```

```javascript
import socialLikes from 'social-likes-next';
socialLikes(document.getElementById('share'));
```

You can also specify options:

```javascript
import socialLikes from 'social-likes-next';
socialLikes(document.getElementById('share'), {
	url: 'http://landscapists.info/',
	title: 'Landscapists of Russia',
});
```

### Dynamic URL changing

You can dynamically replace URL, title and Pinterest image without reinitialization.

```html
<div id="share2" class="social-likes" data-url="http://example.com/" data-title="My example">
	<div data-service="facebook">Facebook</div>
	...
</div>
```

```javascript
socialLikes(document.getElementById('share2'), {
	url: 'http://github.com/',
	title: 'GitHub',
	data: {
		media: 'http://birdwatcher.ru/i/userpic.jpg'  // Image for Pinterest button
	}
});
```

### Adding your own button

Define `socialLikesButtons` object:

```javascript
var socialLikesButtons = {
	github: {
		icon: 'M8 .173C3.58.173...',
		clickUrl: 'http://github.com/sapegin'
	}
};
```

Add some CSS:

```css
.social-likes__icon_github {
	color: #333;
}
.social-likes__widget_github:hover,
.social-likes__widget_github:active,
.social-likes__widget_github:focus {
	background: #333;
	border-color: #333;
}
```

And use it like any other button:

```html
<div data-service="github">GitHub</div>
```

See sources (`src` folder) for available options and class names and `contrib` folder for custom buttons examples.


## FAQ

### Likes or shares?

This plugin allows your users to “share” the content of your website. (Un)fortunately¹ real “likes” are possible only when you use original Facebook, Google+, etc. buttons.

¹ I believe that “shares” are much better and valuable than “likes” because they’re more visible in feed and users could add they’re own comments to links they share. “Like” costs nothing.

### Why there’s no counters?

Twitter counter API [was disabled by Twitter](https://blog.twitter.com/2015/hard-decisions-for-a-sustainable-platform) in November 2015, they’ve also removed the counter from their native share button.

I believe that all other major social networks will follow Twitter and remove counters from their share buttons in the future.

Counters (as well as native share buttons) make your site slower because every counter adds an extra HTTP request to a new host. Social Likes Next doesn’t add any additional HTTP requests if you bundle its scripts and styles with your site’s JavaScript and CSS.

### Why only IE11+ is supported?

Microsoft don’t support older versions of Internet Explorer [since January 2016](https://www.microsoft.com/en-us/WindowsForBusiness/End-of-IE-support) so it’s a great opportunity for us, developers, to do the same.

### How to change title, description and image?

You can use [Open Graph](http://ogp.me/). It works for [Facebook](http://davidwalsh.name/facebook-meta-tags), Twitter, [Google+](https://developers.google.com/+/web/snippet/), [Pinterest](http://developers.pinterest.com/rich_pins/) and [Vkontakte](http://vk.com/dev/widget_like)).

You can add additional Twitter data using [Twitter Card](https://dev.twitter.com/docs/cards). You have to [approve](https://dev.twitter.com/docs/cards/validation/validator) every type of Twitter Card.

```html
<meta property="og:type" content="article">
<meta property="og:url" content="{page_url}">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{description}">
<meta property="og:image" content="{image_url}">
<meta name="twitter:card" content="summary">
<meta name="twitter:site" content="@SiteTwitter">
<meta name="twitter:creator" content="@sapegin">
```

See also [Facebook’s sharing tips](https://developers.facebook.com/docs/sharing/best-practices).

If you’re experiencing any problems with meta data try [Open Graph Debugger](https://developers.facebook.com/tools/debug/) and [Twitter Card Validator](https://dev.twitter.com/docs/cards/validation/validator).

## Troubleshooting

### The buttons don’t work, displayed without design or don’t displayed at all

First look at your [browser’s console](http://wickedlysmart.com/hfjsconsole/).

If you don’t see any errors check the following:

1. `social-likes.js` is included and the path is correct.

2. `social-likes_flat.css` or `social-likes_light.css` or `social-likes_birman.css` is included in the <head> of your page and the path is correct.

So you need your page to look like this:

```html
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Welcome to my site!</title>
	<link href="social-likes_birman.css" rel="stylesheet">
	...
	<script src="social-likes.js"></script>
	...
```

## Release History

The changelog can be found on the [Releases page](https://github.com/sapegin/social-likes-next/releases).

## Contributing

Everyone is welcome to contribute. Please take a moment to review the [contributing guidelines](Contributing.md).

## Author

* [Artem Sapegin](http://sapegin.me/)


---

## License

The MIT License, see the included [license.md](license.md) file.
