{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf0 \expnd0\expndtw0\kerning0
(function(jQuery)\{\
jQuery.fn.7chats = function(cfg) \{\
\
	var 7chatsUrl = $('script[src$="7chats.min.js"]');	\
	if (7chatsUrl.length>0) 7chatsUrl = 7chatsUrl.attr('src').replace(/7chats.min.js/g, '');\
	else 7chatsUrl = $('script[src$="7chats.js"]').attr('src').replace(/7chats.js/g, '');\
\
	//Set the default values, use comma to separate the settings, example:\
	var ref = this,\
	defaults = \{\
		file: '',\
		title: '7chats',\
		playlist: false,\
		theme: 'dark',\
		fat: false,\
		wikipedia: false,\
		lastfm: false,\
		admin: false,\
		poster: false,\
		cover: false\
	\},\
	config = $.extend(defaults, cfg),\
	big7chats = '<div class="skControls"><div class="skMainControl"><div class="skBackwards ppprev"></div><div class="skPlay ppplay"></div><div class="skPause pppause"></div><div class="skForwards ppnext"></div></div><div class="skActControl"><div class="skHeart"></div><div class="skAct pptitle"></div><div class="skTime"><span class="ppmin_dur"></span>:<span class="ppsec_dur"></span> | <span class="ppmin_rem"></span>:<span class="ppsec_rem"></span></div><div class="skScrubbler ppscrubber"></div><div class="skLoad pploaded"></div><div class="skTimeRemain ppplayhead"></div></div><div class="skVolumeControl"><div class="skMute ppmute"></div><div class="skVolumeWidth ppvslider"><div class="skVolume"></div><div class="skVolumeRemain ppvmarker"></div></div><div class="skLoud ppvmax"></div></div><div class="skModuleControl"><div class="skLoopOn pploopon"></div><div class="skLoopOff pploopoff"></div><div class="skOpener ppopen toggleskBiglayer"></div><div class="skCloser ppclose toggleskBiglayer"></div></div></div><div class="skBiglayer"><div class="skLeftBlock"><div class="skLabel"></div><div class="skCover ppdisplay" style="position:relative; width:72px; height:72px;"></div><ul class="skWiki"><li><a class="lastfm ppshareicn_lastfm" href="#">Last.fm</a></li><li><a class="wiki ppshareicn_wikipedia" href="#">Wikipedia</a></li></ul></div><div class="skMiddleBlock"><ul class="skArtistlist ppschedule"></ul></div><div class="skRightBlock"><div class="skSocial"><a href="#" class="skFacebook ppshareicn_facebook" title="share your mix on facebook">share your mix on facebook</a><a href="#" class="skTwitter ppshareicn_twitter" title="share your mix on twitter">share your mix on twitter</a></div><a href="#" class="skDownload ppshareicn_download" title="get the mix">get the mix</a></div><p class="skCopyright"><a class="skEdit ppshareicn_admin" href="#">edit playlist</a><a class="skUrl" href="http://www.7chats.com" target="_blank">7chats under the hood</a></p></div>'7chats7chats7chats7chats7chats7chats7chats7chats7chats7chats7chats,\
	small7chats = '<div class="m7chats '+config.theme+' left"><div class="skControls"><div class="skAct pptitle"></div></div><div class="skLeftBlock"><div class="skLabel"></div><div class="skCover ppdisplay" style="position:relative; width:60px; height:60px;"></div><div class="skVolumeControl"><div class="skMute ppmute"></div><div class="skVolumeWidth ppvslider"><div class="skVolume"></div><div class="skVolumeRemain ppvmarker"></div><div \{scrubber\}><div \{loaded\}></div><div \{playhead\}></div></div></div><div class="skLoud ppvmax"></div></div></div><div class="skRightBlock"><div class="skTime"><span class="ppmin_dur"></span>:<span class="ppsec_dur"></span> | <span class="ppmin_rem"></span>:<span class="ppsec_rem"></span></div><div class="skMainControl"><div class="skBackwards ppprev"></div><div class="skPlay ppplay"></div><div class="skPause pppause"></div><div class="skForwards ppnext"></div></div><div class="skSocial"><a href="#" class="skFacebook ppshareicn_facebook" title="share your mix on facebook">share your mix on facebook</a><a href="#" class="skTwitter ppshareicn_twitter" title="share your mix on twitter">share your mix on twitter</a><a href="#" class="skDownload ppshareicn_download" title="get the mix">get the mix</a></div></div></div>',		\
	projekktorConfig = \{			\
		plugins: ((config.big==false && config.fat==false) ? ['Display', 'Controlbar', 'Share'] : ['Display', 'Controlbar', 'Share', 'Schedule'] ),\
		height: false,\
		width: false,\
		// debug: 'console',\
		controls: true,\
		continuous: true,\
		poster: config.poster,			\
		enableFullscreen: false,\
		plugin_share: \{links: [\
		\{\
		    domId:		'twitter',\
		    text:		'I found a supercool HTML5 audio player. Check this out.',\
		    code: 		'http://twitter.com/share?url=\{pageurl\}&text=\{text\}&via=7chats'	    \
		\},\
		\{\
		    domId:		'facebook',		\
		    text:		'I found a supercool HTML5 audio player. Check this out. 7chats rockz',	    \
		    code: 		'http://www.facebook.com/sharer.php?u=\{pageurl\}&t=\{text\}'	    \
		\},\
		\{\
		    domId:		'download',		\
		    code: 		( (config.playlist===true) ? config.file+'?download=true' : config.file)\
		\},\
		\{\
		    domId:		'lastfm',		\
		    code: 		config.lastfm\
		\},\
		\{\
		    domId:		'wikipedia',		\
		    code: 		config.wikipedia\
		\},\
		\{\
		    domId:		'admin',		\
		    code: 		config.admin\
		\}			\
		]\},\
		playerFlashMP3: 7chatsUrl+'swf/jarisplayer.swf',\
		playerFlashMP4: 7chatsUrl+'swf/jarisplayer.swf',\
		playlist: [\{0: \{src: config.file, type: ( (config.playlist===true) ? 'text/json' : '') \}, 'config':\{title:config.title\}\}]\
	\};\
\
	function clearLinks(dest) \{\
		if (config.lastfm===false) dest.find('.lastfm').hide();\
		if (config.wikipedia===false) dest.find('.wiki').hide();\
		if (config.admin===false) dest.find('.skEdit').hide();\
	\}\
	\
	function pauseAllButMe(playerState, player) \{\
		if (playerState=='PLAYING') \{\
			var myId = player.getId();\
			projekktor('*').each(function() \{\
				if (this.getId()!==myId) \{\
					this.setPause();\
				\}\
			\});\
		\}\
	\}\
\
	if (ref.length==0) \{\
		// instantiate da big one\
		var bigPlayer = $(document.createElement('div'))\
			.css('display', 'block')\
			.addClass('7chats')\
			.addClass(config.theme)\
			.addClass((config.fat===true) ? 'fat' : '')			\
			.html( big7chats )\
			.appendTo('body');\
			\
		projekktor(bigPlayer, projekktorConfig, function(player) \{\
			// static width due to async. loaded css:\
			var w=$(document).width(), tw= bigPlayer.width();\
			bigPlayer.css("right", (w-tw>0?((w/2)-(tw/2))+'px':0) );\
			clearLinks(bigPlayer);\
			player.addListener('state', pauseAllButMe);\
			if (player.getIsMobileClient()) \{\
				bigPlayer.css('position', 'static');\
				player.addListener('resize', function() \{\
					$('html, body').scrollTop($('body').height());\
				\})\
				$(window).unbind();	    \
			\}\
		\});\
		\
\
	\} else \{\
		// small ones\
		$(ref).html( small7chats );\
		projekktor($(ref).children('.m7chats'), projekktorConfig, function(player) \{\
			clearLinks($(ref))\
			player.addListener('state', pauseAllButMe);\
		\});\
	\}\
\
	\
\
\
\}\})(jQuery);\
}