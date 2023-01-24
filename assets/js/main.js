(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos,
      behavior: 'smooth'
    })
  }

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('body').classList.toggle('mobile-nav-active')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let body = select('body')
      if (body.classList.contains('mobile-nav-active')) {
        body.classList.remove('mobile-nav-active')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */


  /**
   * Preloader
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

 //typed effect using the typed.js 
 
  const typed = select('.typed')
  if (typed) {
    let typed_strings = typed.getAttribute('data-typed-items')
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }




 



  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

  /**
   * Initiate Pure Counter 
   */
  new PureCounter();

})()

//BTC Index

const url = 'https://api.coindesk.com/v1/bpi/currentprice.json';

fetch(url)
  .then(response => response.json())
  .then(data => {
    const usdPrice = data.bpi.USD.rate;
    const gbpPrice = data.bpi.GBP.rate;
    document.getElementById('price').innerHTML = `$${usdPrice} / £${gbpPrice}`;
  })
  .catch(error => console.error(error));

  new TradingView.widget(
    {
    "width": 800,
    "height": 600,
    "symbol": "BITSTAMP:BTCUSD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "btc-index"
  }
    );


//Gold 


/*
  
const url2 = 'https://metals-api.com/api/latest?access_key=29k3dsq21i9v30lqip8zt96jto5k4indeaoma9r7xdxgbopt1gbil4b105es&base=XAU&symbols=USD';

fetch(url2)
  .then(response => response.json())
  .then(data2 => {
    const goldPrice = data2.rates.USD;

    document.getElementById('goldPrice').innerHTML = `Gold price is $${goldPrice}`;
  })
  .catch(error => console.error(error));


  SECOND api WITH SAME BS

    const API_KEY = 'e463dc2569msh567e9638d8cc59cp1182e4jsn607886c5aaad';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'live-metal-prices.p.rapidapi.com'
      }
    };
    
    fetch('https://live-metal-prices.p.rapidapi.com/v1/latest/XAU,XAG,PA,PL,GBP,EUR/USD', options)
      .then(response => response.json())
      .then(response => {
        const goldPriceElement = document.querySelector('#goldPrice');
        goldPriceElement.innerHTML = JSON.stringify(response);
      })
      .catch(err => console.error(err));

  TOO MANY REQUESTS ERROR!
*/


  new TradingView.widget(
    {
      "width": 800,
      "height": 600,
    "symbol": "TVC:GOLD",
    "interval": "D",
    "timezone": "Etc/UTC",
    "theme": "dark",
    "style": "1",
    "locale": "en",
    "toolbar_bg": "#f1f3f6",
    "enable_publishing": false,
    "allow_symbol_change": true,
    "container_id": "goldPriceIndex"
  }
    );



    



// https://rapidapi.com/solutionsbynotnull/api/live-metal-prices/

const url1 = 'https://api.coingecko.com/api/v3/coins/pax-gold';

fetch(url1)
  .then(response => response.json())
  .then(data => {
    const goldPrice = data.market_data.current_price.usd;
    const goldPriceElement = document.querySelector('#goldPrice');
    goldPriceElement.innerHTML = "$"+goldPrice;
  })
  .catch(error => console.error(error));

/*

  const apiKey = "1a08700961f840728f6e2aef24291cdc";
  const container = document.getElementById("fin-newsAPI"); 
  fetch(`https://newsapi.org/v2/top-headlines?q=economy&pageSize=20&apiKey=${apiKey}`)
      .then(response => response.json())
      .then(data => {
          let articles = "";
          data.articles.forEach(article => {
              articles += `<h5>${article.title}</h5>

              <a href="${article.url}" target="_blank">Read More</a>
              <br><br>
              <br><br>`;
              
          });
          container.innerHTML = articles;
      });
  
      */

      let page = 1; // Initialize the page number
      let pageSize = 8; // Number of articles to retrieve per page
      
      const apiKey = "1a08700961f840728f6e2aef24291cdc";
      const container = document.getElementById("fin-newsAPI"); 
      
      const getNews = () => {
        fetch(`https://newsapi.org/v2/top-headlines?q=economy&page=${page}&pageSize=${pageSize}&apiKey=${apiKey}`)
          .then(response => response.json())
          .then(data => {
              let articles = "";
              data.articles.forEach(article => {
                  articles += `<br><br><h5>${article.title}</h5>
                  <a href="${article.url}" target="_blank">Read More</a>
                  <br><br>
                  <br><br>`;
              });
              container.innerHTML = articles;
          });
      }
      
      // Call the function to get the news on page load
      getNews();
      
      // Add event listeners to the next and prev buttons
      document.getElementById("prev").addEventListener("click", () => {
        if(page > 1) {
          page--;
          getNews();
        }
      });
      
      document.getElementById("next").addEventListener("click", () => {
        page++;
        getNews();
      });
      