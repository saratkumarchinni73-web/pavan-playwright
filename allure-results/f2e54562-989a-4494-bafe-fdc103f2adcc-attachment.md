# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: AmazonApp\Dashboard.spec.ts >> verify the amazon dashboard validations
- Location: tests\AmazonApp\Dashboard.spec.ts:5:5

# Error details

```
Error: expect(page).toHaveURL(expected) failed

Expected: "https://www.amazon.in/"
Received: "https://www.amazon.in/ref=nav_logo"
Timeout:  5000ms

Call log:
  - Expect "toHaveURL" with timeout 5000ms
    10 × locator resolved to <html lang="en-in" data-19ax5a9jf="dingo" data-aui-build-date="3.26.8-2026-09-18" class="a-ws a-js a-audio a-video a-canvas a-svg a-drag-drop a-geolocation a-history a-webworker a-autofocus a-input-placeholder a-textarea-placeholder a-local-storage a-gradients a-transform3d a-touch-scrolling a-text-shadow a-text-stroke a-box-shadow a-border-radius a-border-image a-opacity a-transform a-transition a-ember-modern a-ember a-ember-1-0-0 a-ember-modern-display a-ember-modern-display-1-0-1 a-ember-modern-…>…</html>
       - unexpected value "https://www.amazon.in/ref=nav_logo"

```

```yaml
- navigation "Shortcuts menu":
  - heading "Skip to" [level=2]
  - list "Skip to":
    - listitem:
      - link "main content":
        - /url: "#skippedLink"
        - text: Main content
  - heading "Keyboard shortcuts" [level=2]
  - list "Keyboard shortcuts":
    - listitem:
      - link "Search, alt, forward slash":
        - /url: javascript:void(0)
    - listitem:
      - link "Cart, shift, alt, c":
        - /url: javascript:void(0)
    - listitem:
      - link "Home, shift, alt, h":
        - /url: javascript:void(0)
    - listitem:
      - link "Your orders, shift, alt, o":
        - /url: javascript:void(0)
    - listitem:
      - button "Show/hide shortcuts, shift, alt, z"
  - text: To move between items, use your keyboard's up or down arrows.
- banner:
  - navigation "Primary":
    - link "Amazon.in":
      - /url: /ref=nav_logo
      - text: .in
    - button "Delivering to Rajahmundry 533101 Update location"
    - search:
      - text: All
      - combobox "Select the department you want to search in":
        - option "All Categories" [selected]
        - option "Alexa Skills"
        - option "Amazon Devices"
        - option "Amazon Fashion"
        - option "Amazon Fresh"
        - option "Amazon Pharmacy"
        - option "Appliances"
        - option "Apps & Games"
        - option "Audible Audiobooks"
        - option "Baby"
        - option "Beauty"
        - option "Books"
        - option "Car & Motorbike"
        - option "Clothing & Accessories"
        - option "Collectibles"
        - option "Computers & Accessories"
        - option "Deals"
        - option "Electronics"
        - option "Furniture"
        - option "Garden & Outdoors"
        - option "Gift Cards"
        - option "Grocery & Gourmet Foods"
        - option "Health & Personal Care"
        - option "Home & Kitchen"
        - option "Industrial & Scientific"
        - option "Jewellery"
        - option "Kindle Store"
        - option "Luggage & Bags"
        - option "Luxury Beauty"
        - option "Movies & TV Shows"
        - option "MP3 Music"
        - option "Music"
        - option "Musical Instruments"
        - option "Office Products"
        - option "Pet Supplies"
        - option "Prime Video"
        - option "Shoes & Handbags"
        - option "Software"
        - option "Sports, Fitness & Outdoors"
        - option "Subscribe & Save"
        - option "Tools & Home Improvement"
        - option "Toys & Games"
        - option "Under ₹500"
        - option "Video Games"
        - option "Watches"
      - searchbox "Search Amazon.in"
      - button "Go"
    - link "Choose a language for shopping in Amazon India. The current selection is English (EN).":
      - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=topnav_lang
      - img "India"
      - text: EN
    - button "Expand to Change Language or Country"
    - link "Hello, sign in Account & Lists":
      - /url: https://www.amazon.in/ap/signin?openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0
    - button "Expand Account and Lists"
    - link "Returns & Orders":
      - /url: /gp/css/order-history?ref_=nav_orders_first
    - link "0 items in cart":
      - /url: /gp/cart/view.html?ref_=nav_cart
    - button "Open All Categories Menu": All
    - list:
      - listitem:
        - link "Fresh":
          - /url: /fresh?ref_=nav_cs_grocery
        - button "Fresh Details"
      - listitem:
        - link "Amazon Pay":
          - /url: /gp/sva/dashboard?ref_=nav_cs_apay
      - listitem:
        - link "Mobiles":
          - /url: /mobile-phones/b/?ie=UTF8&node=1389401031&ref_=nav_cs_mobiles
      - listitem:
        - link "Today's Deals":
          - /url: /deals?ref_=nav_cs_gb
      - listitem:
        - link "Coupons":
          - /url: /coupons?ref_=nav_cs_coupons
      - listitem:
        - link "Flights":
          - /url: /flights?ref_=nav_cs_apay_desktop_topnav_flights
      - listitem:
        - link "Electronics":
          - /url: /electronics/b/?ie=UTF8&node=976419031&ref_=nav_cs_electronics
      - listitem:
        - link "Computers":
          - /url: /computers-and-accessories/b/?ie=UTF8&node=976392031&ref_=nav_cs_pc
      - listitem:
        - link "New Releases":
          - /url: /gp/new-releases/?ref_=nav_cs_newreleases
      - listitem:
        - link "Bestsellers":
          - /url: /gp/bestsellers/?ref_=nav_cs_bestsellers
      - listitem:
        - link "Video Games":
          - /url: /video-games/b/?ie=UTF8&node=976460031&ref_=nav_cs_video_games
      - listitem:
        - link "Fashion":
          - /url: /gp/browse.html?node=6648217031&ref_=nav_cs_fashion
      - listitem:
        - link "Home & Kitchen":
          - /url: /Home-Kitchen/b/?ie=UTF8&node=976442031&ref_=nav_cs_home
      - listitem:
        - link "Grocery & Gourmet Foods":
          - /url: /Gourmet-Specialty-Foods/b/?ie=UTF8&node=2454178031&ref_=nav_cs_grocery
      - listitem:
        - link "Baby":
          - /url: /Baby/b/?ie=UTF8&node=1571274031&ref_=nav_cs_baby
      - listitem:
        - link "Books":
          - /url: /Books/b/?ie=UTF8&node=976389031&ref_=nav_cs_books
      - listitem:
        - link "Kindle eBooks":
          - /url: /Kindle-eBooks/b/?ie=UTF8&node=1634753031&ref_=nav_cs_kindle_books
      - listitem:
        - link "Sports, Fitness & Outdoors":
          - /url: /Sports/b/?ie=UTF8&node=1984443031&ref_=nav_cs_sports
      - listitem:
        - link "Toys & Games":
          - /url: /Toys-Games/b/?ie=UTF8&node=1350380031&ref_=nav_cs_toys
      - listitem:
        - link "Car & Motorbike":
          - /url: /Car-Motorbike-Store/b/?ie=UTF8&node=4772060031&ref_=nav_cs_automotive
      - listitem:
        - link "Beauty & Personal Care":
          - /url: /beauty/b/?ie=UTF8&node=1355016031&ref_=nav_cs_beauty
      - listitem:
        - link "Pet Supplies":
          - /url: /Pet-Supplies/b/?ie=UTF8&node=2454181031&ref_=nav_cs_pets
      - listitem:
        - link "Custom Products":
          - /url: /Amazon-Custom/b/?ie=UTF8&node=32615889031&ref_=nav_cs_custom
      - listitem:
        - link "Customer Service":
          - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=nav_cs_help
      - listitem:
        - link "Gift Cards":
          - /url: /gift-card-store/b/?ie=UTF8&node=3704982031&ref_=nav_cs_gc
      - listitem:
        - link "Home Improvement":
          - /url: /Home-Improvement/b/?ie=UTF8&node=4286640031&ref_=nav_cs_hi
      - listitem:
        - link "Prime":
          - /url: /prime?ref_=nav_cs_primelink_nonmember
        - button "Prime Details"
      - listitem:
        - link "AmazonBasics":
          - /url: /b/?node=6637738031&ref_=nav_cs_amazonbasics
      - listitem:
        - link "Audible":
          - /url: /Audible-Books-and-Originals/b/?ie=UTF8&node=17941593031&ref_=nav_cs_audible
      - listitem:
        - link "Health, Household & Personal Care":
          - /url: /health-and-personal-care/b/?ie=UTF8&node=1350384031&ref_=nav_cs_hpc
    - link "Jan26_Event":
      - /url: /events/greatindianfestival/3/?_encoding=UTF8&ref_=nav_swm_event&pf_rd_p=8b21f0e2-337a-4998-bced-5d1eab611ba5&pf_rd_s=nav-sitewide-msg&pf_rd_t=4201&pf_rd_i=navbar-4201&pf_rd_m=A21TJRUUN4KGV&pf_rd_r=536HZ2CKRQNCSE3KH4AT
      - img "Jan26_Event"
- main:
  - list:
    - listitem:
      - link "Earn up to ₹150 cashback* Sale starts on 8th Oct Free delivery":
        - /url: /events/greatindianfestival/?_encoding=UTF8&_encoding=UTF8&ref_=jupwdedleo&pd_rd_w=QABFj&content-id=amzn1.sym.69cc13ab-34c6-4a65-a918-303b784fe420&pf_rd_p=69cc13ab-34c6-4a65-a918-303b784fe420&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203
        - heading "Earn up to ₹150 cashback*" [level=3]
        - text: Sale starts on 8th Oct
        - img "Free delivery"
      - region "Video Player":
        - application
        - button "Pause"
    - listitem:
      - link "Shop popular deals":
        - /url: /events/deals/?_encoding=UTF8&_encoding=UTF8&ref_=dealz_wd_pd_see_more&bubble-id=deals-contextual-link&dynamicBubble=%7B%2522collectionId%2522%3A%2522deals-contextual-link%2522%2C%2522departmentsIncluded%2522%3A%5B1389378031%2C1968038031%2C1380257031%2C3404521031%5D%7D&pd_rd_w=SLyyI&content-id=amzn1.sym.30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_p=30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203
        - heading "Shop popular deals" [level=3]
      - list:
        - listitem:
          - link "Portronics Konnect X 60W Type C to Type C Unbreakable Nylon Braided Cable, 1M Fast Charging Cable for iPhone 15 series, iPad, Samsung Galaxy & other Type C Devices(Black) 76% off":
            - /url: /Portronics-Konnect-Unbreakable-Braided-Charging/dp/B0CV42PXQN/?_encoding=UTF8&pd_rd_w=SLyyI&content-id=amzn1.sym.30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_p=30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_dealz_wd_pd
        - listitem:
          - link "U.S. POLO ASSN.. Men's IHAB Pure Cotton Brand Logo Handkerchief - Pack Of 3(IHAB-P3_WHITE_OP) 21% off":
            - /url: /U-S-Assn-Cotton-Handkerchief-IHAB001P3OP_White_OP/dp/B09H313WKC/?_encoding=UTF8&pd_rd_w=SLyyI&content-id=amzn1.sym.30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_p=30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_dealz_wd_pd
        - listitem:
          - link "Kuber Industries Iron Stand | Stainless Steel Trivet |Round Steamer Rack for Kitchen | Heat Resistant Hot Plate Dishes Holder | Cooker Donga Stand | Silver 44% off":
            - /url: /Kuber-Industries-Stainless-Steamer-Resistant/dp/B0C2YLSMF3/?_encoding=UTF8&pd_rd_w=SLyyI&content-id=amzn1.sym.30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_p=30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_dealz_wd_pd
        - listitem:
          - link "Lifelong Multipurpose Cable Bike/Bicycle Helmet Lock|Anti-Theft Protection Number Lock 4 Digit Security Resettable Combination| (1.8 Feet, LLNML01) 21% off":
            - /url: /Lifelong-LLNML01-Multipurpose-Numeric-Bicycle/dp/B09YRQQJ7S/?_encoding=UTF8&pd_rd_w=SLyyI&content-id=amzn1.sym.30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_p=30f99614-79d7-4c06-9657-812ef583ee6e&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_dealz_wd_pd
    - listitem:
      - link "Under ₹499 Bath essentials Get up to ₹150 cashback* Souled store Bewakoof Men *T&C apply":
        - /url: https://www.amazon.in/s/?_encoding=UTF8&i=beauty&rh=n%3A1355016031%2Cn%3A1374276031%2Cp_85%3A10440599031%2Cp_36%3A-49900&s=exact-aware-popularity-rank&dc=&pf_rd_i=1374276031&pf_rd_m=A1VBAL9TL5WCBF&pf_rd_s=merchandised-search-4&qid=1779426935&rnid=1741387031&ref=sr_nr_p_36_0_0&pd_rd_w=SABv4&content-id=amzn1.sym.6ea0224c-d91b-4d7f-a05f-a97ea8ec4604&pf_rd_p=6ea0224c-d91b-4d7f-a05f-a97ea8ec4604&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹499 Bath essentials" [level=3]
        - text: Get up to ₹150 cashback*
        - img "Souled store Bewakoof"
        - img "Men"
        - text: "*T&C apply"
    - listitem:
      - link "Starting ₹299 Boxes & more Get up to ₹150 cashback* Shark Ninja | Agaro ALtext-Test":
        - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=222841528031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%252F1379989031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A60%252C%255C%2522max%255C%2522%253A980%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&ref_=pd_hp_d_r_atf_unk&pd_rd_w=7VysZ&content-id=amzn1.sym.a80f0c90-0d61-43e5-90a2-e6793e3dcd4d&pf_rd_p=a80f0c90-0d61-43e5-90a2-e6793e3dcd4d&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203
        - heading "Starting ₹299 Boxes & more" [level=3]
        - text: Get up to ₹150 cashback*
        - img "Shark Ninja | Agaro"
        - img "ALtext-Test"
      - region "Video Player":
        - application
        - button "Play"
    - listitem:
      - link "Under ₹499 Get up to ₹150 cashback* RTB LowASP":
        - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=222836755031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221571272031%252F1953602031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=96w0q&content-id=amzn1.sym.73fbe086-2201-4670-9f33-5795f7185b00&pf_rd_p=73fbe086-2201-4670-9f33-5795f7185b00&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_unk
        - heading "Under ₹499" [level=3]
        - text: Get up to ₹150 cashback*
        - img "RTB"
        - img "LowASP"
    - listitem:
      - link "Starting ₹1,199 smart wearables Get up to ₹150 cashback* FD|ER Top *T&C apply":
        - /url: /s/?_encoding=UTF8&hidden-keywords=B0FLF35YV4%7CB0DFYL4635%7CB0DFYL5DX5%7CB0DFYLL8B5%7CB0DFYJ77H1%7CB0DFYKMR8T%7CB0DFYMGLYQ%7CB0DZ2PDXLS%7CB0FLK5TZT2%7CB0H2HGLNQP%7CB0H9SCSRBF%7CB0H9SPNM94%7CB0H9SJ4Y7N&pd_rd_w=7Rpx2&content-id=amzn1.sym.45deeef1-91a3-4a7e-a9b0-f44fe2b40bb6&pf_rd_p=45deeef1-91a3-4a7e-a9b0-f44fe2b40bb6&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_unk
        - heading "Starting ₹1,199 smart wearables" [level=3]
        - text: Get up to ₹150 cashback*
        - img "FD|ER"
        - img "Top"
        - text: "*T&C apply"
    - listitem:
      - link "Starting ₹99 Get up to ₹150 cashback* RTB LowASP":
        - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=222836581031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=4Gwjo&content-id=amzn1.sym.d003e8e0-5e48-49bb-9bac-8e3c83381a73&pf_rd_p=d003e8e0-5e48-49bb-9bac-8e3c83381a73&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=YhvN2&pd_rd_r=bdcf8160-e0dc-4e7e-bb95-7e37c9827203&ref_=pd_hp_d_r_atf_unk
        - heading "Starting ₹99" [level=3]
        - text: Get up to ₹150 cashback*
        - img "RTB"
        - img "LowASP"
    - listitem "Loading more"
  - link "Carousel next slide":
    - /url: "#"
  - link "Discover exciting offers - Explore more":
    - /url: /events/greatindianfestival/?_encoding=UTF8&ref_=DRQC&pd_rd_w=8PC9K&content-id=amzn1.sym.d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_p=d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb
    - heading "Discover exciting offers" [level=3]
  - list:
    - listitem:
      - link "Starts 8th Oct":
        - /url: /events/greatindianfestival/?_encoding=UTF8&ref_=QC&pd_rd_w=8PC9K&content-id=amzn1.sym.d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_p=d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb
        - img "Starts"
        - text: Starts 8th Oct
    - listitem:
      - link "Sale price live":
        - /url: /events/greatindianfestival/3/?_encoding=UTF8&ref_=QC&pd_rd_w=8PC9K&content-id=amzn1.sym.d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_p=d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb
        - img "ED"
        - text: Sale price live
    - listitem:
      - link "Answer & win ₹25,000":
        - /url: /game/px/gU0O8BK/?_encoding=UTF8&pd_rd_w=8PC9K&content-id=amzn1.sym.d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_p=d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Answer & win ₹25,000"
        - text: Answer & win ₹25,000
    - listitem:
      - link "Rewards worth ₹10 lakhs":
        - /url: /b/?_encoding=UTF8&node=221531250031&pd_rd_w=8PC9K&content-id=amzn1.sym.d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_p=d269bf35-1802-46b9-a84a-f7a28664ff06&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Coupons"
        - text: Rewards worth ₹10 lakhs
  - link "All under ₹499 | Up to ₹150 cashback* - See all":
    - /url: /events/greatindianfestival/16/?_encoding=UTF8&pd_rd_w=nY4hm&content-id=amzn1.sym.b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_p=b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "All under ₹499 | Up to ₹150 cashback*" [level=3]
  - list:
    - listitem:
      - link "Clearance sale":
        - /url: /s/?_encoding=UTF8&rh=n%3A222836485031%2Cp_36%3A-9900&applicationType=BROWSER&deviceOS=Windows&handlerName=BrowsePage&pageId=222836485031&pageType=Browse&softwareClass=Web%20Browser&ref=LowASP-Jup-26-under99_cta&pd_rd_w=nY4hm&content-id=amzn1.sym.b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_p=b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Clearance sale
    - listitem:
      - link "Unmissable deals":
        - /url: /b/?_encoding=UTF8&node=222836661031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522reviewRating%255C%2522%253A%255B%255C%25224%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A20%252C%255C%2522max%255C%2522%253A200%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&ref_=LowASPAADossier-199_cta&pd_rd_w=nY4hm&content-id=amzn1.sym.b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_p=b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb
        - img "Makeup under ₹299"
        - text: Unmissable deals
    - listitem:
      - link "Everyday favourites":
        - /url: /b/?_encoding=UTF8&node=222836661031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522reviewRating%255C%2522%253A%255B%255C%25224%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&ref_=LowASPAADossier-299_cta&pd_rd_w=nY4hm&content-id=amzn1.sym.b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_p=b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb
        - img "Makeup under ₹299"
        - text: Everyday favourites
    - listitem:
      - link "Explore more":
        - /url: /events/greatindianfestival/16/?_encoding=UTF8&pd_rd_w=nY4hm&content-id=amzn1.sym.b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_p=b9358131-3d5f-4ca1-a5fe-29a7b691baa7&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Explore more
  - link "Customers’ Most-Loved Fashion for you - Explore more":
    - /url: /s/?_encoding=UTF8&node=50916365031&pd_rd_w=5i2Wt&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_a2i_gw_cml
    - heading "Customers’ Most-Loved Fashion for you" [level=3]
  - list:
    - listitem:
      - link "Jockey Cotton Blend Crew Neck T-Shirt For Women AW88_White_XL, Relaxed Fit":
        - /url: /Jockey-Crew-T-Shirt-Women-AW88_White_XL/dp/B09MFMVVK5/?_encoding=UTF8&pd_rd_w=5i2Wt&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_a2i_gw_cml
        - img "Jockey Cotton Blend Crew Neck T-Shirt For Women AW88_White_XL, Relaxed Fit"
    - listitem:
      - link "Skechers Women Summits Sneakers":
        - /url: /Skechers-Womens-Summits-NVHP-Sneaker/dp/B0CBVNK7ZW/?_encoding=UTF8&pd_rd_w=5i2Wt&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_a2i_gw_cml
        - img "Skechers Women Summits Sneakers"
    - listitem:
      - link "Skechers Mens Summits - Brisbane Black Sneaker - 11 UK (12 US) (232057ID-BBK)":
        - /url: /Skechers-Black-Mens-Casual-Shoes-232057ID-BBK-SUMMITS-Brisbane-UK11/dp/B09XXPS6MB/?_encoding=UTF8&pd_rd_w=5i2Wt&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_a2i_gw_cml
        - img "Skechers Mens Summits - Brisbane Black Sneaker - 11 UK (12 US) (232057ID-BBK)"
    - listitem:
      - link "Bewakoof Women's Printed 100% Cotton T-Shirt - Boyfriend Fit, Round Neck, Half Sleeves":
        - /url: /Bewakoof-Whatever-Printed-Sleeve-T-Shirt/dp/B09R4SYH6C/?_encoding=UTF8&pd_rd_w=5i2Wt&content-id=amzn1.sym.b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_p=b919c641-8e33-49fa-a820-0b6961c2556f&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_a2i_gw_cml
        - img "Bewakoof Women's Printed 100% Cotton T-Shirt - Boyfriend Fit, Round Neck, Half Sleeves"
  - link "Fashion & accessories | Up to ₹150 cashback* - See all":
    - /url: /events/greatindianfestival/16/?_encoding=UTF8&pd_rd_w=BmoF9&content-id=amzn1.sym.4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_p=4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "Fashion & accessories | Up to ₹150 cashback*" [level=3]
  - list:
    - listitem:
      - link "Ethnic wear":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221571272031%252F1953602031%252F1968253031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=BmoF9&content-id=amzn1.sym.4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_p=4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Ethnic wear
    - listitem:
      - link "T-shirts & polos":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221571272031%252F1968024031%252F1968120031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=BmoF9&content-id=amzn1.sym.4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_p=4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: T-shirts & polos
    - listitem:
      - link "Beauty & makeup":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221355017031%255C%2522%255D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=BmoF9&content-id=amzn1.sym.4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_p=4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Beauty & makeup
    - listitem:
      - link "Watches":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%25221350388031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A300%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=BmoF9&content-id=amzn1.sym.4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_p=4d06a321-f607-4177-92be-c45cf68cac27&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Watches
  - link "Home & kitchen | Up to ₹150 cashback* - See all":
    - /url: /events/greatindianfestival/16/?_encoding=UTF8&pd_rd_w=PjO6X&content-id=amzn1.sym.c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_p=c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "Home & kitchen | Up to ₹150 cashback*" [level=3]
  - list:
    - listitem:
      - link "Bedsheets & pillows":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F1380442031%252F1380447031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A80%252C%255C%2522max%255C%2522%253A300%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=PjO6X&content-id=amzn1.sym.c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_p=c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Bedsheets & pillows
    - listitem:
      - link "Kitchen storage":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%252F1379989031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A40%252C%255C%2522max%255C%2522%253A400%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=PjO6X&content-id=amzn1.sym.c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_p=c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Kitchen storage
    - listitem:
      - link "Home decor":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F1380374031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A50%252C%255C%2522max%255C%2522%253A400%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=PjO6X&content-id=amzn1.sym.c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_p=c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Home decor
    - listitem:
      - link "Kitchen tools":
        - /url: /b/?_encoding=UTF8&node=222836563031&discounts-widget=%2522%257B%255C%2522state%255C%2522%253A%257B%255C%2522refinementFilters%255C%2522%253A%257B%255C%2522departments%255C%2522%253A%255B%255C%2522976443031%252F5925789031%252F1380181031%255C%2522%255D%257D%252C%255C%2522rangeRefinementFilters%255C%2522%253A%257B%255C%2522price%255C%2522%253A%257B%255C%2522min%255C%2522%253A40%252C%255C%2522max%255C%2522%253A400%257D%257D%257D%252C%255C%2522version%255C%2522%253A1%257D%2522&pd_rd_w=PjO6X&content-id=amzn1.sym.c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_p=c1ee449e-e33a-4696-92f0-e3527b5baeb4&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Makeup under ₹299"
        - text: Kitchen tools
  - link "Daily needs | Starting ₹199 - See all offers":
    - /url: /b/?_encoding=UTF8&_encoding=UTF8&node=6802110031&pd_rd_w=G8eCp&content-id=amzn1.sym.58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_p=58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "Daily needs | Starting ₹199" [level=3]
  - list:
    - listitem:
      - link "Under ₹499 | Cleaning & laundry":
        - /url: /s/?_encoding=UTF8&i=hpc&bbn=20934105031&rh=n%3A20934105031%2Cp_85%3A10440599031%2Cp_36%3A2485524031&dc=&ds=v1%3A8lDLyVOuo%2BxYiokQOSftoW%2F3QhbKr69LAqKS4udgHDk&qid=1710746232&rnid=2485523031&ref=sr_nr_p_36_1&pd_rd_w=G8eCp&content-id=amzn1.sym.58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_p=58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Cleaning & laundry"
        - text: Under ₹499 | Cleaning & laundry
    - listitem:
      - link "Starting ₹199 | Oil & ghee":
        - /url: /s/?_encoding=UTF8&bbn=30059805031&rh=n%3A30059805031%2Cp_85%3A10440599031&pd_rd_w=G8eCp&content-id=amzn1.sym.58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_p=58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Cooking essentials"
        - text: Starting ₹199 | Oil & ghee
    - listitem:
      - link "Under ₹299 | Tea & coffee":
        - /url: /s/?_encoding=UTF8&i=grocery&bbn=21837414031&rh=n%3A21837414031%2Cp_85%3A10440599031%2Cp_36%3A-29900&qid=1712026054&rnid=1741387031&ref=sr_nr_p_36_3&pd_rd_w=G8eCp&content-id=amzn1.sym.58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_p=58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Tea & Coffee"
        - text: Under ₹299 | Tea & coffee
    - listitem:
      - link "Under ₹499 | Baby diapers & wipes":
        - /url: /s/?_encoding=UTF8&i=baby&bbn=14805548031&rh=n%3A14805548031%2Cp_85%3A10440599031%2Cp_36%3A2485524031&dc=&ds=v1%3AAdJGjShrleeJay%2FyO3HFBURAoulMbC18FC9mkw6cS9s&qid=1710746407&rnid=2485523031&ref=sr_nr_p_36_1&pd_rd_w=G8eCp&content-id=amzn1.sym.58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_p=58e6476d-e13e-4f38-9b76-c98a996d84bb&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Cooking essentials"
        - text: Under ₹499 | Baby diapers & wipes
  - link "Up to 60% off | Back to school essentials - Explore more toys":
    - /url: /b/?_encoding=UTF8&node=1350380031&pd_rd_w=bbLhI&content-id=amzn1.sym.e8467315-717c-433d-9287-efd804e840a8&pf_rd_p=e8467315-717c-433d-9287-efd804e840a8&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "Up to 60% off | Back to school essentials" [level=3]
  - list:
    - listitem:
      - link "Drawing & painting supplies":
        - /url: /s/?_encoding=UTF8&rh=n%3A1350380031%2Cn%3A1378490031%2Cn%3A1378154031&dc=&qid=1774433004&rnid=1378490031&ref=sr_nr_n_3&pd_rd_w=bbLhI&content-id=amzn1.sym.e8467315-717c-433d-9287-efd804e840a8&pf_rd_p=e8467315-717c-433d-9287-efd804e840a8&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Drawing & painting supplies"
        - text: Drawing & painting supplies
    - listitem:
      - link "Rulers & set squares":
        - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cn%3A1378490031%2Cn%3A1378505031&s=popularity-rank&dc=&fs=true&ds=v1%3A9gs%2Bv6x5vD1KlavdCTREOx8RLpWg664Txy%2BZChx2Sdo&qid=1774433134&rnid=1378490031&ref=sr_nr_n_12&pd_rd_w=bbLhI&content-id=amzn1.sym.e8467315-717c-433d-9287-efd804e840a8&pf_rd_p=e8467315-717c-433d-9287-efd804e840a8&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Rulers & set squares"
        - text: Rulers & set squares
    - listitem:
      - link "Pencil cases":
        - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A1350380031%2Cn%3A1378490031%2Cn%3A1378502031&s=popularity-rank&dc=&fs=true&ds=v1%3AqsAUzwJqluQpS%2F2GzVU1fgriVQCFP67oqxRitV4C21w&qid=1774433085&rnid=1378490031&ref=sr_nr_n_10&pd_rd_w=bbLhI&content-id=amzn1.sym.e8467315-717c-433d-9287-efd804e840a8&pf_rd_p=e8467315-717c-433d-9287-efd804e840a8&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Pencil cases"
        - text: Pencil cases
    - listitem:
      - link "Lunch boxes":
        - /url: /s/?_encoding=UTF8&i=toys&rh=n%3A51396146031%2Cp_72%3A1318476031&s=popularity-rank&dc=&fs=true&qid=1775106859&rnid=1318475031&ref=sr_nr_p_72_1&ds=v1%3AeyOLyc2oFcAkB3V5LErXzI1gPPt%2B6Ln5kq8yHbHNV20&pd_rd_w=bbLhI&content-id=amzn1.sym.e8467315-717c-433d-9287-efd804e840a8&pf_rd_p=e8467315-717c-433d-9287-efd804e840a8&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Lunch boxes"
        - text: Lunch boxes
  - link "Starting ₹149 | Bestselling headphones, earbuds & more - Explore more":
    - /url: /s/?_encoding=UTF8&hidden-keywords=B071Z8M4KX%20%7C%20B0BKG5PQ6T%20%7C%20B08TV2P1N8%20%7C%20B09N3ZNHTY%20%7C%20B0C7QS9M38%20%7C%20B01DEWVZ2C%20%7C%20B0CJ8Y7GL5%20%7C%20B0BSGQTVP1%20%7C%20B07KY3FNQP%20%7C%20B09N3XMZ5F%20%7C%20B09R24HMNW%20%7C%20B09R24JBYV%20%7C%20B0CC8VF47L%20%7C%20B0CF1M3S6S%20%7C%20B0BW8RVQ3V%20%7C%20B0BSGMX94G%20%7C%20B092X94QNQ%20%7C%20B0BW8TXJJ2%20%7C%20B0CRZ6KTB4%20%7C%20B0BQN2RMJF%20%7C%20B08TTXNZ4Y%20%7C%20B0CP54XBWN%20%7C%20B092HMD4Q7%20%7C%20B08YYQ3WFG%20%7C%20B08TSSCZR8%20%7C%20B0B217Z5VK%20%7C%20B0CKRC958Z%20%7C%20B086WN7BK6%20%7C%20B09N3ZLB3T%20%7C%20B0BSGT7CLR%20%7C%20B07L8KNP5F%20%7C%20B0BBTYDK6Y%20%7C%20B0CM6PSM2B%20%7C%20B07TCN5VR9%20%7C%20B0CC4WHYRQ%20%7C%20B0CC8SBFFR%20%7C%20B0B31CBSXQ%20%7C%20B07T5DKR5D%20%7C%20B08JQN8DGZ%20%7C%20B07QZ3CZ48%20%7C%20B09YRYCWF8%20%7C%20B09Y5MP7C4%20%7C%20B0CC8WQY19%20%7C%20B0BW4B7YZH%20%7C%20B0C9V3437T%20%7C%20B0BTZ5C4T8%20%7C%20B0BSS2J8C3%20%7C%20B07SJ68JL4%20%7C%20B09Y5MK1KB%20%7C%20B0C7QHHT63&pd_rd_w=7ipl5&content-id=amzn1.sym.7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_p=7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
    - heading "Starting ₹149 | Bestselling headphones, earbuds & more" [level=3]
  - list:
    - listitem:
      - link "Truly wireless earbuds":
        - /url: /l/91320591031/?_encoding=UTF8&pd_rd_w=7ipl5&content-id=amzn1.sym.7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_p=7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "TwS"
        - text: Truly wireless earbuds
    - listitem:
      - link "Over ear headphones":
        - /url: /s/?_encoding=UTF8&k=over%20ear%20headphones&rh=n%3A976419031%2Cp_36%3A-300000%2Cp_n_condition-type%3A8609960031&pd_rd_w=7ipl5&content-id=amzn1.sym.7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_p=7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "over ear"
        - text: Over ear headphones
    - listitem:
      - link "Neckbands":
        - /url: /s/?_encoding=UTF8&k=neckbands&rh=n%3A976419031%2Cp_36%3A-200000%2Cp_72%3A1318477031%2Cp_n_condition-type%3A8609960031&pd_rd_w=7ipl5&content-id=amzn1.sym.7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_p=7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "neckbands"
        - text: Neckbands
    - listitem:
      - link "Wired earphones":
        - /url: /l/91320593031/?_encoding=UTF8&pd_rd_w=7ipl5&content-id=amzn1.sym.7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_p=7306e3e1-9493-4e7a-bc82-d40d77200a09&pf_rd_r=536HZ2CKRQNCSE3KH4AT&pd_rd_wg=SacNQ&pd_rd_r=7ee3079d-2957-4aa6-a4f6-896eac8ab9fb&ref_=pd_hp_d_r_btf_unk
        - img "Wired earphones"
        - text: Wired earphones
- complementary "Your recently viewed items and featured recommendations":
  - heading "See personalized recommendations" [level=2]
  - link "Sign in":
    - /url: https://www.amazon.in/ap/signin?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex&openid.pape.max_auth_age=0
  - text: New customer?
  - link "Start here.":
    - /url: https://www.amazon.in/ap/register?openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fref%3Drhf_sign_in&openid.assoc_handle=inflex
- button "Back to top"
- heading "Get to Know Us" [level=6]
- list:
  - listitem:
    - link "About Amazon":
      - /url: https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Careers":
      - /url: https://amazon.jobs
  - listitem:
    - link "Press Releases":
      - /url: https://press.aboutamazon.in/?utm_source=gateway&utm_medium=footer
  - listitem:
    - link "Amazon Science":
      - /url: https://www.amazon.science
- heading "Connect with Us" [level=6]
- list:
  - listitem:
    - link "Facebook":
      - /url: https://www.facebook.com/AmazonIN
  - listitem:
    - link "Twitter":
      - /url: https://x.com/AmazonIN
  - listitem:
    - link "Instagram":
      - /url: https://www.instagram.com/amazondotin
- heading "Make Money with Us" [level=6]
- list:
  - listitem:
    - link "Sell on Amazon":
      - /url: /b/?node=2838698031&ld=AZINSOANavDesktopFooter_C&ref_=nav_footer_sell_C
  - listitem:
    - link "Sell under Amazon Accelerator":
      - /url: https://accelerator.amazon.in/?ref_=map_1_b2b_GW_FT
  - listitem:
    - link "Protect and Build Your Brand":
      - /url: https://brandservices.amazon.in/?ref=AOINABRLGNRFOOT&ld=AOINABRLGNRFOOT
  - listitem:
    - link "Amazon Global Selling":
      - /url: https://sell.amazon.in/grow-your-business/amazon-global-selling.html?ld=AZIN_Footer_V1&ref=AZIN_Footer_V1
  - listitem:
    - link "Supply to Amazon":
      - /url: https://supply.amazon.com/?ref_=footer_sta&lang=en-IN
  - listitem:
    - link "Become an Affiliate":
      - /url: https://affiliate-program.amazon.in/?utm_campaign=assocshowcase&utm_medium=footer&utm_source=GW&ref_=footer_assoc
  - listitem:
    - link "Fulfilment by Amazon":
      - /url: https://services.amazon.in/services/fulfilment-by-amazon/benefits.html/ref=az_footer_fba?ld=AWRGINFBAfooter
  - listitem:
    - link "Advertise Your Products":
      - /url: https://advertising.amazon.in/?ref=Amz.in
  - listitem:
    - link "Amazon Pay on Merchants":
      - /url: https://www.amazonpay.in/merchant
- heading "Let Us Help You" [level=6]
- list:
  - listitem:
    - link "Your Account":
      - /url: /gp/css/homepage.html?ref_=footer_ya
  - listitem:
    - link "Returns Centre":
      - /url: /gp/css/returns/homepage.html?ref_=footer_hy_f_4
  - listitem:
    - link "Recalls and Product Safety Alerts":
      - /url: https://www.amazon.in/your-product-safety-alerts?ref_=footer_bsx_ypsa
  - listitem:
    - link "100% Purchase Protection":
      - /url: /gp/help/customer/display.html?nodeId=201083470&ref_=footer_swc
  - listitem:
    - link "Amazon App Download":
      - /url: /gp/browse.html?node=6967393031&ref_=footer_mobapp
  - listitem:
    - link "Help":
      - /url: /gp/help/customer/display.html?nodeId=200507590&ref_=footer_gw_m_b_he
- link "Amazon India Home":
  - /url: /ref=footer_logo
- link "Choose a language for shopping. Current selection is English.":
  - /url: /customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2F&ref_=footer_lang
  - text: English
- button "Expand to Change Language or Country"
- button "Choose a country/region for shopping. The current selection is India.": India
- list:
  - listitem:
    - link "AbeBooks Books, art & collectibles":
      - /url: https://www.abebooks.com/
      - heading "AbeBooks" [level=5]
      - text: Books, art & collectibles
  - listitem:
    - link "Amazon Web Services Scalable Cloud Computing Services":
      - /url: https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=IN_amazonfooter
      - heading "Amazon Web Services" [level=5]
      - text: Scalable Cloud Computing Services
  - listitem:
    - link "Audible Download Audio Books":
      - /url: https://www.audible.in/
      - heading "Audible" [level=5]
      - text: Download Audio Books
  - listitem:
    - link "IMDb Movies, TV & Celebrities":
      - /url: https://www.imdb.com/
      - heading "IMDb" [level=5]
      - text: Movies, TV & Celebrities
- list:
  - listitem:
    - link "Shopbop Designer Fashion Brands":
      - /url: https://www.shopbop.com/
      - heading "Shopbop" [level=5]
      - text: Designer Fashion Brands
  - listitem:
    - link "Amazon Business Everything For Your Business":
      - /url: /business?ref=footer_aingw
      - heading "Amazon Business" [level=5]
      - text: Everything For Your Business
  - listitem:
    - link "Amazon Music Stream millions of songs":
      - /url: /music/player?ref=footer_apm
      - heading "Amazon Music" [level=5]
      - text: Stream millions of songs
- list:
  - listitem:
    - link "Conditions of Use & Sale":
      - /url: /gp/help/customer/display.html?nodeId=200545940&ref_=footer_cou
  - listitem:
    - link "Privacy Notice":
      - /url: /gp/help/customer/display.html?nodeId=200534380&ref_=footer_privacy
  - listitem:
    - link "Interest-Based Ads":
      - /url: /gp/help/customer/display.html?nodeId=202075050&ref_=footer_iba
- text: © 1996-2026, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import {test,Locator,Page,expect}from "@playwright/test"
  2  | 
  3  | // creating class 
  4  | //creating properties[variables]
  5  | //"readonly "Once we define the below properties 
  6  | 
  7  | export class Dashboard {
  8  | 
  9  |     readonly page:Page;
  10 |     readonly amazonlogo:Locator
  11 |     readonly pageurl:string
  12 |     readonly pagetitle:Locator
  13 | 
  14 |     // defining the "locators" in the constractor
  15 |     constructor(page: Page){
  16 |     this.page=page;
  17 |     this.amazonlogo=page.locator("#nav-logo-sprites")
  18 |     this.pageurl=page.url()
  19 |     this.pagetitle=page.getByTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
  20 |     
  21 | }
  22 | 
  23 |     //defining the all page methods
  24 | 
  25 |     async goto(): Promise<void> {
  26 |         await this.page.goto("https://www.amazon.in/");
  27 |     }
  28 | 
  29 |     async verifylogo(){
  30 |         // to verif the amazon logo we have use method tobevisable
  31 |     await expect(this.amazonlogo).toBeVisible()
  32 |     await this.amazonlogo.click()
  33 |     //await expect(this.amazonlogo).toHaveText("AMAZON.in")
  34 |      }
  35 | 
  36 |      async verifyurl(){
> 37 |         await expect(this.page).toHaveURL("https://www.amazon.in/")
     |                                 ^ Error: expect(page).toHaveURL(expected) failed
  38 |         
  39 |      }
  40 | 
  41 |      async verifytitle(){
  42 |         
  43 |         await expect(this.page).toHaveTitle("Online Shopping site in India: Shop Online for Mobiles, Books, Watches, Shoes and More - Amazon.in")
  44 |      }
  45 | 
  46 | }
```