(()=>{"use strict";const e=(e,t)=>{e.appendChild(t)},t=(t,n)=>{const i=document.createElement("li"),a=document.createElement("a");return a.textContent=t,a.id=n,e(i,a),i},n=e=>{const t=document.createElement("img");return t.src=e,t},i=(t,n,i,a,o)=>{const s=document.createElement(t);return""!=n&&s.classList.add(n),""!=i&&(s.id=i),s.textContent=a,""!=o&&e(o,s),s},a=()=>{const t=i("main","","","",""),a=(t,n,a,o)=>{const s=i("div","choice","","",d);e(s,t);const c=i("div","choice-description","","",s);return i("h4","","",n,c),i("hr","","","",c),i("p","","",a,c),i("p","prices","",o,c),s};i("h1","title","","Dar Fadhel",t);const o=i("div","","homepage-main","",t),s=n("images/image-3016877051.jpg");e(o,s),i("h4","description","","A tight-knit, fun-loving, devoted team of local cooks spreading the\n  gospel of good times and good food in Gassrine. We offer limited\n  capacity onsite events in our restaurant kitchen space. And worry not,\n  our krewe will travel to your destination of choice – from hotel\n  ballrooms to private kitchens – to entertain groups of all sizes. We\n  cook, we tell stories, we deliver informative culinary demonstrations\n  and lectures, but most of all … we treat every event like you’re a\n  guest at our dinner table. Join us!",o),i("h1","title","","Explore Our Kitchen",t);const d=i("div","choices","","",t);return a(n("images/32f69957b831df81eab5d34ef6c4e9e4_phpHdt9nr.jpeg"),"DAR FADHEL CLASSIC",'Tasting menu composed of creations that have become "classics" of the house.',"250D"),a(n("images/1399a06919c6e99ba668335b08fa2f68_phpWdMx7t.jpeg"),"DAR FADHEL FESTIVAL","Menu composed mainly of elaborations created during the current season.","180D"),a(n("images/94f6e0e7724fb24f6c38e712446a0e4d_phpTf4fIb.jpg"),"DAR FADHEL WINE PAIRING","Selection of the most suitable wines to accompany the tasting menus, both Classic and Festival.","100D"),a(n("images/0344dd638cb1d3734eed3b58e0e33e39_php7SdCwl.jpg"),"DAR FADHEL ALCOHOL-FREE"," For those customers who want to live an experience with a different wine pairing with a very low percentage of alcohol.","50D"),t};(()=>{const e=document.querySelector(".content");e.appendChild((()=>{const e=i("ul","header","","","");return e.appendChild(t("Home","homebutton")),e.appendChild(t("Menu","menubutton")),e.appendChild(t("Contact","contactbutton")),e})()),e.appendChild(a()),e.appendChild((()=>{const e=i("footer","","","Realised by Mohamedsayhii",""),t=document.createElement("a");t.href="https://github.com/mohamedsayhii";const n=document.createElement("i");return n.classList.add("fab"),n.classList.add("fa-github"),t.appendChild(n),e.appendChild(t),e})()),document.querySelector("#menubutton").addEventListener("click",(()=>{e.replaceChild((()=>{const e=(e,t)=>{const o=i("div","menu-item","","",a);i("h3","item-title","",t,o);const s=n(e);return o.appendChild(s),o},t=i("main","","","","");i("h1","title","","Travel With Us",t);const a=i("div","menu","","",t),o=i("div","menu-category","","",a);o.appendChild(e("images/menu/appetizer1.jpg","Sushi")),o.appendChild(e("images/menu/appetizer2.jpg","Onion-Cheese")),o.appendChild(e("images/menu/appetizer3.jpg","Mini-Sandwich"));const s=i("div","menu-category","","",a);s.appendChild(e("images/menu/maindish1.jpg","Smoked Saumon")),s.appendChild(e("images/menu/maindish2.jpg","White Pasta")),s.appendChild(e("images/menu/maindish3.jpg","Cheesy Lobster"));const d=i("div","menu-category","","",a);return d.appendChild(e("images/menu/dessert1.jpg","Diabetes 1")),d.appendChild(e("images/menu/dessert2.jpg","Diabetes 2")),d.appendChild(e("images/menu/dessert2.jpg","Diabetes 3")),i("h1","title","","And More...",t),t})(),e.childNodes[1])})),document.querySelector("#homebutton").addEventListener("click",(()=>{e.replaceChild(a(),e.childNodes[1])})),document.querySelector("#contactbutton").addEventListener("click",(()=>{e.replaceChild((()=>{const e=i("main","contact-main","","","");return i("h2","title","","Address",e),e.appendChild(n("images/address.png")),i("h2","","","13 rue Frachich Ahom Ahom, Gasserine 1200, Tunisia",e),i("h2","title","","Call us to Reserve!",e),i("h3","","","+21694574123",e),e})(),e.childNodes[1])}))})()})();