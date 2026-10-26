DEEMAK PATRIKA / दीमक पत्रिका — WEBSITE FOLDER
==============================================
Open index.html in any browser (double-click). No internet server needed.
IMPORTANT: unzip the folder first and keep ALL folders next to index.html.
If pictures are missing, open image-test.html — it shows which file is not found.

FOLDER MAP
  index.html .................. Home page
  from-us.html ................ हमारी ओर से / From Us (announcements, write-ups, most read)
  about.html .................. दीमक क्यों? / Why Deemak (full essay, Hindi + English)
  story-competition.html ...... दीमक कहानी प्रतियोगिता (list of years)
  competition-2026.html ....... 2026: long list, short list, winner, jury, analysis
  literature.html ............. साहित्य / Literature
  chronicles.html ............. संघर्षों का इतिहास / Chronicles of Past Struggles
  interview.html .............. साक्षात्कार / Interview
  video.html .................. वीडियो / Video
  feedback.html ............... प्रतिक्रिया / Feedback form
  contact.html, legal.html .... Editors & contact; privacy, copyright, disclaimer
  image-test.html ............. Diagnostic page: shows every image

  css/base.css ................ COLOURS (top of file, :root), fonts, header, menu, footer
  css/components.css .......... cards, home blocks, buttons, phone/tablet/desktop rules
  css/pages.css ............... essay text, competition page, forms
  js/main.js .................. language switch (हिंदी/English/दोनों), menu, feedback form

  assets/images/logo.jpg ...... emblem in the header and footer
  assets/images/header.jpg .... wood-carved "दीमक" picture on the home page
  assets/images/favicon.png ... tiny icon in the browser tab
  assets/images/art/*.svg ..... 35 drawn pictures on cards and the picture strip

COMMON EDITS (use any text editor, e.g. Notepad / VS Code)
  Change a colour ........... css/base.css, first lines: --navy (blue), --yel (yellow)
  Change the email .......... search all .html files for editor@deemak.org and replace
  Replace a picture ......... save your photo in assets/images/ and change the
                              <img src="..."> in the page. Keep the file name simple, no spaces.
  Add a story card .......... copy one <a class="card"> ... </a> block and edit the text
  Two languages ............. every text has a Hindi part  (class "l-hi")
                              and an English part (class "l-en"). Edit both.
  Add a new year (2027) ..... copy competition-2026.html to competition-2027.html,
                              then add a link in story-competition.html

NOTES
  * Fonts load from Google Fonts (needs internet). Without it, the browser uses a plain font.
  * The feedback form opens the reader's email program; it does not store messages.
  * editor@deemak.org is a placeholder: replace it with the real address.
