{\rtf1\ansi\ansicpg1252\cocoartf1404\cocoasubrtf470
{\fonttbl\f0\fmodern\fcharset0 Courier;}
{\colortbl;\red255\green255\blue255;\red0\green0\blue0;}
\paperw11900\paperh16840\margl1440\margr1440\vieww10800\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\sl280\partightenfactor0

\f0\fs24 \cf2 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function generateNoise(opacity) \{\
   if ( !!!document.createElement('canvas').getContext ) \{\
      return false;\
   \}\
\
   var canvas = document.createElement("canvas"),\
   ctx = canvas.getContext('2d'),\
   x, y,\
   r, g, b,\
   opacity = opacity || .2;\
\
   canvas.width = 100;\
   canvas.height = 100;\
\
   ctx = canvas.getContext("2d");\
\
   for ( x = 0; x < canvas.width; x++ ) \{\
      for ( y = 0; y < canvas.height; y++ ) \{\
         r = Math.floor( Math.random() * 80 );\
         g = Math.floor( Math.random() * 80 );\
         b = Math.floor( Math.random() * 80 );\
\
         ctx.fillStyle = "rgba(" + r + "," + g + "," + b + "," + opacity + ")";\
         ctx.fillRect(x, y, 1, 1);\
      \}\
   \}\
\
   document.body.style.backgroundImage = "url(" + canvas.toDataURL("image/png") + ")";\
\}\
\
generateNoise(.1);\
}