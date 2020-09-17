// Inspector -> Network -> v1?key=AIzaSyDZjRMP59NpGHN1RRP2QoIZjufOrNDSoTY -> Response tab
// Copy code from there - this is really handy for when you're developing because
// you don't want to keep attacking the the api because you run out of your quota
// if we keep doing that while we're developing we're going to easily use up 100 requests

export default {
    kind: 'customsearch#search',
    url: {
        type: 'application/json',
        template:
            'https://www.googleapis.com/customsearch/v1?q={searchTerms}&num={count?}&start={startIndex?}&lr={language?}&safe={safe?}&cx={cx?}&sort={sort?}&filter={filter?}&gl={gl?}&cr={cr?}&googlehost={googleHost?}&c2coff={disableCnTwTranslation?}&hq={hq?}&hl={hl?}&siteSearch={siteSearch?}&siteSearchFilter={siteSearchFilter?}&exactTerms={exactTerms?}&excludeTerms={excludeTerms?}&linkSite={linkSite?}&orTerms={orTerms?}&relatedSite={relatedSite?}&dateRestrict={dateRestrict?}&lowRange={lowRange?}&highRange={highRange?}&searchType={searchType}&fileType={fileType?}&rights={rights?}&imgSize={imgSize?}&imgType={imgType?}&imgColorType={imgColorType?}&imgDominantColor={imgDominantColor?}&alt=json',
    },
    queries: {
        request: [
            {
                title: 'Google Custom Search - undefined',
                totalResults: '2520000000',
                searchTerms: 'undefined',
                count: 10,
                startIndex: 1,
                inputEncoding: 'utf8',
                outputEncoding: 'utf8',
                safe: 'off',
                cx: 'f3b392498b77de851',
            },
        ],
        nextPage: [
            {
                title: 'Google Custom Search - undefined',
                totalResults: '2520000000',
                searchTerms: 'undefined',
                count: 10,
                startIndex: 11,
                inputEncoding: 'utf8',
                outputEncoding: 'utf8',
                safe: 'off',
                cx: 'f3b392498b77de851',
            },
        ],
    },
    context: {
        title: 'Google',
    },
    searchInformation: {
        searchTime: 0.344076,
        formattedSearchTime: '0.34',
        totalResults: '2520000000',
        formattedTotalResults: '2,520,000,000',
    },
    items: [
        {
            kind: 'customsearch#result',
            title: 'undefined - JavaScript | MDN',
            htmlTitle: '\u003cb\u003eundefined\u003c/b\u003e - JavaScript | MDN',
            link:
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
            displayLink: 'developer.mozilla.org',
            snippet:
                "Aug 3, 2020 ... The global undefined property represents the primitive value undefined. It is one \nof JavaScript's primitive types.",
            htmlSnippet:
                'Aug 3, 2020 \u003cb\u003e...\u003c/b\u003e The global \u003cb\u003eundefined\u003c/b\u003e property represents the primitive value \u003cb\u003eundefined\u003c/b\u003e. It is one \u003cbr\u003e\nof JavaScript&#39;s primitive types.',
            cacheId: 'JPOmPse90yAJ',
            formattedUrl: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/.../undefined',
            htmlFormattedUrl:
                'https://developer.mozilla.org/en-US/docs/Web/JavaScript/.../\u003cb\u003eundefined\u003c/b\u003e',
            pagemap: {
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRaNhEAWI_wAUncLAITLC4ep9BUFSfUrodNjY9vdqQ2jAGOYfBwHJQ7zr0Z',
                        width: '225',
                        height: '225',
                    },
                ],
                BreadcrumbList: [{}],
                metatags: [
                    {
                        'og:image':
                            'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png',
                        'og:type': 'website',
                        'twitter:card': 'summary',
                        'twitter:title': 'undefined',
                        'og:site_name': 'MDN Web Docs',
                        'twitter:url':
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
                        'og:title': 'undefined',
                        'twitter:creator': '@MozDevNet',
                        'og:description':
                            "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.",
                        'twitter:image':
                            'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png',
                        'twitter:site': '@MozDevNet',
                        viewport: 'width=device-width, initial-scale=1',
                        'twitter:description':
                            "The global undefined property represents the primitive value undefined. It is one of JavaScript's primitive types.",
                        position: '1',
                        'og:url':
                            'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://developer.mozilla.org/static/img/opengraph-logo.72382e605ce3.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Undefined | Definition of Undefined by Merriam-Webster',
            htmlTitle:
                '\u003cb\u003eUndefined\u003c/b\u003e | Definition of \u003cb\u003eUndefined\u003c/b\u003e by Merriam-Webster',
            link: 'https://www.merriam-webster.com/dictionary/undefined',
            displayLink: 'www.merriam-webster.com',
            snippet:
                'Undefined definition is - not defined: such as. How to use undefined in a \nsentence.',
            htmlSnippet:
                '\u003cb\u003eUndefined\u003c/b\u003e definition is - not defined: such as. How to use \u003cb\u003eundefined\u003c/b\u003e in a \u003cbr\u003e\nsentence.',
            cacheId: 'mhyep_dRe0oJ',
            formattedUrl: 'https://www.merriam-webster.com/dictionary/undefined',
            htmlFormattedUrl:
                'https://www.merriam-webster.com/dictionary/\u003cb\u003eundefined\u003c/b\u003e',
            pagemap: {
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSKksTSKYwpW8It403nrjw5t1_a8pLO2PI6ImEG7uvFrNfacgiziPZgG-_O',
                        width: '225',
                        height: '225',
                    },
                ],
                metatags: [
                    {
                        'msapplication-tilecolor': '#2b5797',
                        'og:image':
                            'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
                        'twitter:title': 'Definition of UNDEFINED',
                        'twitter:card': 'summary',
                        'theme-color': '#ffffff',
                        'twitter:url': 'https://www.merriam-webster.com/dictionary/undefined',
                        'og:title': 'Definition of UNDEFINED',
                        'twitter:aria-text': 'Share the Definition of undefined on Twitter',
                        'og:aria-text': 'Post the Definition of undefined to Facebook',
                        'og:description':
                            'not defined: such as; not clearly or precisely shown, described, or limited; not provided with a definition… See the full definition',
                        'twitter:image':
                            'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
                        referrer: 'unsafe-url',
                        'fb:app_id': '178450008855735',
                        'twitter:site': '@MerriamWebster',
                        viewport: 'width=device-width, initial-scale=1.0',
                        'twitter:description':
                            'not defined: such as; not clearly or precisely shown, described, or limited; not provided with a definition… See the full definition',
                        'og:url': 'https://www.merriam-webster.com/dictionary/undefined',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://merriam-webster.com/assets/mw/static/social-media-share/mw-logo-245x245@1x.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Undefined - Wikipedia',
            htmlTitle: '\u003cb\u003eUndefined\u003c/b\u003e - Wikipedia',
            link: 'https://en.wikipedia.org/wiki/Undefined',
            displayLink: 'en.wikipedia.org',
            snippet:
                'Undefined may refer to: Contents. 1 Mathematics; 2 Computing; 3 Other uses; 4 \nSee also. Mathematics[edit]. Undefined (mathematics), with several related ...',
            htmlSnippet:
                '\u003cb\u003eUndefined\u003c/b\u003e may refer to: Contents. 1 Mathematics; 2 Computing; 3 Other uses; 4 \u003cbr\u003e\nSee also. Mathematics[edit]. \u003cb\u003eUndefined\u003c/b\u003e (mathematics), with several related&nbsp;...',
            cacheId: '4pcUmBADZLUJ',
            formattedUrl: 'https://en.wikipedia.org/wiki/Undefined',
            htmlFormattedUrl: 'https://en.wikipedia.org/wiki/\u003cb\u003eUndefined\u003c/b\u003e',
            pagemap: {
                metatags: [
                    {
                        referrer: 'origin',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Undefined | Definition of Undefined at Dictionary.com',
            htmlTitle:
                '\u003cb\u003eUndefined\u003c/b\u003e | Definition of \u003cb\u003eUndefined\u003c/b\u003e at Dictionary.com',
            link: 'https://www.dictionary.com/browse/undefined',
            displayLink: 'www.dictionary.com',
            snippet:
                'not given meaning or significance, as by a definition; not defined or explained: an \nundefined term. QUIZZES. THIS WORD OF THE DAY QUIZ IS HARDLY A ...',
            htmlSnippet:
                'not given meaning or significance, as by a definition; not defined or explained: an \u003cbr\u003e\n\u003cb\u003eundefined\u003c/b\u003e term. QUIZZES. THIS WORD OF THE DAY QUIZ IS HARDLY A&nbsp;...',
            cacheId: 'UGUU7jl43rcJ',
            formattedUrl: 'https://www.dictionary.com/browse/undefined',
            htmlFormattedUrl:
                'https://www.dictionary.com/browse/\u003cb\u003eundefined\u003c/b\u003e',
            pagemap: {
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRiMKqPWwd85ez6FGYJxcCDkAbb22CoKeLvvvuF0X2lF2v7jYCind0ocSZz',
                        width: '225',
                        height: '225',
                    },
                ],
                metatags: [
                    {
                        'og:image':
                            'https://www.dictionary.com/assets/dictionary-social-logo-a60fa43a7f4c5e78893e1b228bdc74b3.png',
                        'twitter:card': 'summary',
                        'fb:app_id': '127444090629600',
                        'og:site_name': 'www.dictionary.com',
                        'twitter:site': '@Dictionarycom',
                        'msvalidate.01': 'DF5542D7723770377E9ABFF59AC1DC97',
                        viewport: 'width=device-width, initial-scale=1.0',
                        'og:title': 'Definition of undefined | Dictionary.com',
                        'fb:admins': '100000304287730;109125464873',
                        'og:description':
                            'Definition of undefined from Dictionary.com, the world’s leading online source for English definitions, pronunciations, word origins, idioms, Word of the Day, and more.',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://www.dictionary.com/assets/dictionary-social-logo-a60fa43a7f4c5e78893e1b228bdc74b3.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Undefined - Episode 1 - YouTube',
            htmlTitle: '\u003cb\u003eUndefined\u003c/b\u003e - Episode 1 - YouTube',
            link: 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
            displayLink: 'www.youtube.com',
            snippet:
                'Feb 15, 2015 ... 0:00 / 17:39. Live. •. Scroll for details. Undefined - Episode 1. 203,959 views203K \nviews. • Feb 15, 2015. 1.9K 113. Share Save. 1,963 / 113 ...',
            htmlSnippet:
                'Feb 15, 2015 \u003cb\u003e...\u003c/b\u003e 0:00 / 17:39. Live. •. Scroll for details. \u003cb\u003eUndefined\u003c/b\u003e - Episode 1. 203,959 views203K \u003cbr\u003e\nviews. • Feb 15, 2015. 1.9K 113. Share Save. 1,963 / 113&nbsp;...',
            formattedUrl: 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
            htmlFormattedUrl: 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
            pagemap: {
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTBtGU6UiQl7B8jXanNHVphqYp5GKV97JWEAtfpH3xkIKzao94GkxQJwYx_',
                        width: '300',
                        height: '168',
                    },
                ],
                imageobject: [
                    {
                        width: '1280',
                        url: 'https://i.ytimg.com/vi/jbnddQ9l0IA/maxresdefault.jpg',
                        height: '720',
                    },
                ],
                person: [
                    {
                        name: 'WallStreet Entertainment',
                        url: 'http://www.youtube.com/channel/UCEgGmoOG70XNavCGGG6Ti0Q',
                    },
                ],
                metatags: [
                    {
                        'og:image': 'https://i.ytimg.com/vi/jbnddQ9l0IA/maxresdefault.jpg',
                        'twitter:app:url:iphone':
                            'vnd.youtube://www.youtube.com/watch?v=jbnddQ9l0IA&feature=applinks',
                        'twitter:app:id:googleplay': 'com.google.android.youtube',
                        'og:image:width': '1280',
                        'twitter:card': 'player',
                        'theme-color': '#ff0000',
                        'og:site_name': 'YouTube',
                        'twitter:url': 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
                        'twitter:app:url:ipad':
                            'vnd.youtube://www.youtube.com/watch?v=jbnddQ9l0IA&feature=applinks',
                        'al:android:package': 'com.google.android.youtube',
                        'twitter:app:name:googleplay': 'YouTube',
                        title: 'Undefined - Episode 1',
                        'al:ios:url':
                            'vnd.youtube://www.youtube.com/watch?v=jbnddQ9l0IA&feature=applinks',
                        'twitter:app:id:iphone': '544007664',
                        'al:ios:app_store_id': '544007664',
                        'twitter:image': 'https://i.ytimg.com/vi/jbnddQ9l0IA/maxresdefault.jpg',
                        'twitter:player': 'https://www.youtube.com/embed/jbnddQ9l0IA',
                        'twitter:player:height': '720',
                        'twitter:site': '@youtube',
                        'og:video:type': 'text/html',
                        'og:video:height': '720',
                        'og:video:url': 'https://www.youtube.com/embed/jbnddQ9l0IA',
                        'og:type': 'video.other',
                        'twitter:title': 'Undefined - Episode 1',
                        'al:ios:app_name': 'YouTube',
                        'og:title': 'Undefined - Episode 1',
                        'og:image:height': '720',
                        'twitter:app:id:ipad': '544007664',
                        'al:web:url':
                            'https://www.youtube.com/watch?v=jbnddQ9l0IA&feature=applinks',
                        'og:video:secure_url': 'https://www.youtube.com/embed/jbnddQ9l0IA',
                        'og:video:width': '1280',
                        'al:android:url':
                            'vnd.youtube://www.youtube.com/watch?v=jbnddQ9l0IA&feature=applinks',
                        'fb:app_id': '87741124305',
                        'twitter:app:url:googleplay': 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
                        'twitter:app:name:ipad': 'YouTube',
                        'og:url': 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
                        'twitter:player:width': '1280',
                        'al:android:app_name': 'YouTube',
                        'twitter:app:name:iphone': 'YouTube',
                    },
                ],
                videoobject: [
                    {
                        embedurl: 'https://www.youtube.com/embed/jbnddQ9l0IA',
                        playertype: 'HTML5 Flash',
                        isfamilyfriendly: 'True',
                        uploaddate: '2015-02-15',
                        videoid: 'jbnddQ9l0IA',
                        url: 'https://www.youtube.com/watch?v=jbnddQ9l0IA',
                        duration: 'PT17M40S',
                        unlisted: 'False',
                        name: 'Undefined - Episode 1',
                        paid: 'False',
                        width: '1280',
                        regionsallowed:
                            'AD,AE,AF,AG,AI,AL,AM,AO,AQ,AR,AS,AT,AU,AW,AX,AZ,BA,BB,BD,BE,BF,BG,BH,BI,BJ,BL,BM,BN,BO,BQ,BR,BS,BT,BV,BW,BY,BZ,CA,CC,CD,CF,CG,CH,CI,CK,CL,CM,CN,CO,CR,CU,CV,CW,CX,CY,CZ,DE,DJ,DK,DM,DO,DZ,EC,EE,EG,EH...',
                        genre: 'Film & Animation',
                        interactioncount: '203959',
                        channelid: 'UCEgGmoOG70XNavCGGG6Ti0Q',
                        datepublished: '2015-02-15',
                        thumbnailurl: 'https://i.ytimg.com/vi/jbnddQ9l0IA/maxresdefault.jpg',
                        height: '720',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://i.ytimg.com/vi/jbnddQ9l0IA/maxresdefault.jpg',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'JavaScript undefined Property',
            htmlTitle: 'JavaScript \u003cb\u003eundefined\u003c/b\u003e Property',
            link: 'https://www.w3schools.com/jsref/jsref_undefined.asp',
            displayLink: 'www.w3schools.com',
            snippet:
                'Well organized and easy to understand Web building tutorials with lots of \nexamples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, \nJava ...',
            htmlSnippet:
                'Well organized and easy to understand Web building tutorials with lots of \u003cbr\u003e\nexamples of how to use HTML, CSS, JavaScript, SQL, PHP, Python, Bootstrap, \u003cbr\u003e\nJava&nbsp;...',
            cacheId: 'o1x5ITyEj6MJ',
            formattedUrl: 'https://www.w3schools.com/jsref/jsref_undefined.asp',
            htmlFormattedUrl:
                'https://www.w3schools.com/jsref/jsref_\u003cb\u003eundefined\u003c/b\u003e.asp',
            pagemap: {
                metatags: [
                    {
                        viewport: 'width=device-width, initial-scale=1',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'API — Jinja Documentation (2.11.x)',
            htmlTitle: 'API — Jinja Documentation (2.11.x)',
            link: 'https://jinja.palletsprojects.com/en/2.11.x/api/',
            displayLink: 'jinja.palletsprojects.com',
            snippet:
                'Undefined or a subclass of it that is used to represent undefined values in the \ntemplate. finalize. A callable that can be used to process the result of a variable ...',
            htmlSnippet:
                '\u003cb\u003eUndefined\u003c/b\u003e or a subclass of it that is used to represent \u003cb\u003eundefined\u003c/b\u003e values in the \u003cbr\u003e\ntemplate. finalize. A callable that can be used to process the result of a variable&nbsp;...',
            cacheId: '68fy3y3lDt0J',
            formattedUrl: 'https://jinja.palletsprojects.com/en/2.11.x/api/',
            htmlFormattedUrl: 'https://jinja.palletsprojects.com/en/2.11.x/api/',
            pagemap: {
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRQM7GzvHyTNLoGJCqReH4JbCzg-3sCUUOxGSRJGxMroLRCDHT6yH36bjU',
                        width: '180',
                        height: '170',
                    },
                ],
                metatags: [
                    {
                        viewport: 'width=device-width, initial-scale=1',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://jinja.palletsprojects.com/en/2.11.x/_static/jinja-logo-sidebar.png',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Why dividing by zero is undefined (video) | Khan Academy',
            htmlTitle:
                'Why dividing by zero is \u003cb\u003eundefined\u003c/b\u003e (video) | Khan Academy',
            link:
                'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:division-zero/v/why-dividing-by-zero-is-undefined',
            displayLink: 'www.khanacademy.org',
            snippet:
                'There is NO solution, so any non-zero number divided by 0 is undefined. 11 \ncomments.',
            htmlSnippet:
                'There is NO solution, so any non-zero number divided by 0 is \u003cb\u003eundefined\u003c/b\u003e. 11 \u003cbr\u003e\ncomments.',
            cacheId: 'KVixmPpVTL4J',
            formattedUrl: 'https://www.khanacademy.org/.../v/why-dividing-by-zero-is-undefined',
            htmlFormattedUrl:
                'https://www.khanacademy.org/.../v/why-dividing-by-zero-is-\u003cb\u003eundefined\u003c/b\u003e',
            pagemap: {
                thumbnail: [
                    {
                        src: 'https://img.youtube.com/vi/SQzjzStU1RQ/0.jpg',
                    },
                ],
                document: [
                    {
                        author: 'Sal Khan',
                        description:
                            'As much as we would like to have an answer for "what\'s 1 divided by 0?" it\'s sadly impossible to have an answer. The reason, in short, is that whatever we may answer, we will then have to agree that that answer times 0 equals to 1, and that cannot be \u200btrue, because anything times 0 is 0.',
                        tag: 'zero',
                        title: 'Why dividing by zero is undefined',
                        type: 'video',
                    },
                ],
                metatags: [
                    {
                        'og:image': 'https://img.youtube.com/vi/SQzjzStU1RQ/0.jpg',
                        'apple-itunes-app':
                            'app-id=469863705, app-argument=https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:division-zero/v/why-dividing-by-zero-is-undefined',
                        'og:type': 'non_profit',
                        'twitter:card': 'summary_large_image',
                        'twitter:title': 'Why dividing by zero is undefined (video) | Khan Academy',
                        thumbnail: 'https://img.youtube.com/vi/SQzjzStU1RQ/0.jpg',
                        'og:site_name': 'Khan Academy',
                        'og:title': 'Why dividing by zero is undefined (video) | Khan Academy',
                        title: 'Why dividing by zero is undefined (video) | Khan Academy',
                        'og:description':
                            'As much as we would like to have an answer for "what\'s 1 divided by 0?" it\'s sadly impossible to have an answer. The reason, in short, is that whatever we may answer, we will then have to agree that that answer times 0 equals to 1, and that cannot be \u200btrue, because anything times 0 is 0.',
                        'twitter:image': 'https://img.youtube.com/vi/SQzjzStU1RQ/0.jpg',
                        'fb:app_id': '160249463991765',
                        'twitter:site': '@khanacademy',
                        'og:video': 'https://www.youtube.com/v/SQzjzStU1RQ',
                        viewport: 'width=device-width, initial-scale=1.0, maximum-scale=1.0',
                        'twitter:description':
                            'As much as we would like to have an answer for "what\'s 1 divided by 0?" it\'s sadly impossible to have an answer. The reason, in short, is that whatever we may answer, we will then have to agree that that answer times 0 equals to 1, and that cannot be \u200btrue, because anything times 0 is 0.',
                        'fb:admins': '100000121497109,1305017,100001572496923',
                        'fb:page_id': '159403248441',
                        'og:video:type': 'application/x-shockwave-flash',
                        'og:url':
                            'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:foundation-algebra/x2f8bb11595b61c86:division-zero/v/why-dividing-by-zero-is-undefined',
                    },
                ],
                videoobject: [
                    {
                        transcript:
                            'Comedian Steven Wright-- and I guess we can credit him with being a bit of a philosopher-- once commented that "Black holes are where God divided by zero." And I won\'t get in to the physics...',
                        uploaddate: '2012-06-25T15:07:06Z',
                        name: 'Why dividing by zero is undefined',
                        description:
                            'As much as we would like to have an answer for "what\'s 1 divided by 0?" it\'s sadly impossible to have an answer. The reason, in short, is that whatever we may answer, we will then have to agree...',
                        thumbnailurl:
                            'https://cdn.kastatic.org/googleusercontent/2pCDYYQzQOStruWzcfFqboPcnBgEabOH496P6_aLrYvMWXrwsMsOaAvsUcSenrsOmLjioUDlF8o60dWJPk--fMU',
                    },
                ],
                cse_image: [
                    {
                        src: 'https://img.youtube.com/vi/SQzjzStU1RQ/0.jpg',
                        width: '259',
                        type: '1',
                        height: '194',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Save 51% on UNDEFINED on Steam',
            htmlTitle: 'Save 51% on \u003cb\u003eUNDEFINED\u003c/b\u003e on Steam',
            link: 'https://store.steampowered.com/app/661190/UNDEFINED/',
            displayLink: 'store.steampowered.com',
            snippet:
                'Nov 15, 2018 ... UNDEFINED. An exciting first-person game, which takes place in the near future. \nYou wake up in a strange place "Discovery One" you are ...',
            htmlSnippet:
                'Nov 15, 2018 \u003cb\u003e...\u003c/b\u003e \u003cb\u003eUNDEFINED\u003c/b\u003e. An exciting first-person game, which takes place in the near future. \u003cbr\u003e\nYou wake up in a strange place &quot;Discovery One&quot; you are&nbsp;...',
            cacheId: 'k5f22RP-4K0J',
            formattedUrl: 'https://store.steampowered.com/app/661190/UNDEFINED/',
            htmlFormattedUrl:
                'https://store.steampowered.com/app/661190/\u003cb\u003eUNDEFINED\u003c/b\u003e/',
            pagemap: {
                offer: [
                    {
                        pricecurrency: 'USD',
                        price: '0.49',
                    },
                ],
                cse_thumbnail: [
                    {
                        src:
                            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7V0MoONXkUapnU956VVRCikUQA6c4DZADgTf7uE1SmSLgv-1zjVl4lCY7',
                        width: '297',
                        height: '170',
                    },
                ],
                product: [
                    {
                        image:
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/661190/capsule_231x87.jpg?t=1598389616',
                        name: 'UNDEFINED',
                    },
                ],
                aggregaterating: [
                    {
                        reviewcount: '1',
                        ratingvalue: '0',
                        worstrating: '1',
                        description: '1 user reviews',
                        bestrating: '10',
                    },
                ],
                metatags: [
                    {
                        'og:image':
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/661190/capsule_616x353.jpg?t=1598389616',
                        'theme-color': '#171a21',
                        'twitter:card': 'summary_large_image',
                        'twitter:title': 'Save 51% on UNDEFINED on Steam',
                        'og:type': 'website',
                        'og:title': 'Save 51% on UNDEFINED on Steam',
                        'og:description':
                            'An exciting first-person game, which takes place in the near future. You wake up in a strange place &quot;Discovery One&quot; you are hiding from the outside world. You are increasingly starting a casual relationship.',
                        'twitter:image':
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/661190/capsule_616x353.jpg?t=1598389616',
                        'fb:app_id': '105386699540688',
                        'twitter:site': '@steam',
                        viewport: 'width=device-width,initial-scale=1',
                        'twitter:description':
                            'An exciting first-person game, which takes place in the near future. You wake up in a strange place &quot;Discovery One&quot; you are hiding from the outside world. You are increasingly starting a casual relationship.',
                        'og:site': 'Steam',
                        'og:url': 'https://store.steampowered.com/app/661190/UNDEFINED/',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/661190/capsule_616x353.jpg?t=1598389616',
                    },
                ],
                hproduct: [
                    {
                        fn: 'UNDEFINED',
                        photo:
                            'https://cdn.cloudflare.steamstatic.com/steam/apps/661190/capsule_231x87.jpg?t=1598389616',
                        currency: 'USD',
                        currency_iso4217: '840',
                    },
                ],
            },
        },
        {
            kind: 'customsearch#result',
            title: 'Fred Lagast (@undefined) • Instagram photos and videos',
            htmlTitle:
                'Fred Lagast (@\u003cb\u003eundefined\u003c/b\u003e) • Instagram photos and videos',
            link: 'https://www.instagram.com/undefined/?hl=en',
            displayLink: 'www.instagram.com',
            snippet:
                '246.2k Followers, 253 Following, 93 Posts - See Instagram photos and videos \nfrom Fred Lagast (@undefined)',
            htmlSnippet:
                '246.2k Followers, 253 Following, 93 Posts - See Instagram photos and videos \u003cbr\u003e\nfrom Fred Lagast (@\u003cb\u003eundefined\u003c/b\u003e)',
            formattedUrl: 'https://www.instagram.com/undefined/?hl=en',
            htmlFormattedUrl:
                'https://www.instagram.com/\u003cb\u003eundefined\u003c/b\u003e/?hl=en',
            pagemap: {
                xfn: [{}],
                metatags: [
                    {
                        'og:image':
                            'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/10624422_1681113512113145_1928453536_a.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=oY006R7_xPEAX-BieMW&oh=5808b2b69483ff7378ab1d84d68e1be3&oe=5F882DAC',
                        'theme-color': '#ffffff',
                        'og:type': 'profile',
                        'al:ios:app_name': 'Instagram',
                        'og:title': 'Fred Lagast (@undefined) • Instagram photos and videos',
                        'al:android:package': 'com.instagram.android',
                        'al:ios:url': 'instagram://user?username=undefined',
                        'og:description':
                            '246.2k Followers, 253 Following, 93 Posts - See Instagram photos and videos from Fred Lagast (@undefined)',
                        'al:ios:app_store_id': '389801252',
                        'al:android:url': 'https://www.instagram.com/_u/undefined/',
                        'apple-mobile-web-app-status-bar-style': 'default',
                        viewport:
                            'width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, viewport-fit=cover',
                        'mobile-web-app-capable': 'yes',
                        'og:url': 'https://www.instagram.com/undefined/',
                        'al:android:app_name': 'Instagram',
                    },
                ],
                cse_image: [
                    {
                        src:
                            'https://scontent-atl3-1.cdninstagram.com/v/t51.2885-19/10624422_1681113512113145_1928453536_a.jpg?_nc_ht=scontent-atl3-1.cdninstagram.com&_nc_ohc=oY006R7_xPEAX-BieMW&oh=5808b2b69483ff7378ab1d84d68e1be3&oe=5F882DAC',
                    },
                ],
            },
        },
    ],
};
