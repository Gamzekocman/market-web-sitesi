
const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if(i === index) slide.classList.add('active');
  });
}

prev.addEventListener('click', () => {
  current = (current === 0) ? slides.length - 1 : current - 1;
  showSlide(current);
});

next.addEventListener('click', () => {
  current = (current === slides.length - 1) ? 0 : current + 1;
  showSlide(current);
});

// Otomatik geçiş (opsiyonel)
setInterval(() => {
  next.click();
}, 4000);




document.querySelectorAll(".urun-container").forEach(function(container) {

    const slider = container.querySelector(".urunSlider");
    const sol = container.querySelector(".sol");
    const sag = container.querySelector(".sag");

    sag.addEventListener("click", () => {
        slider.scrollLeft += 300;
    });

    sol.addEventListener("click", () => {
        slider.scrollLeft -= 300;
    });

});




 /* Ana görsel değiştirme */
 function changeImage(src) {
     document.getElementById("bigImg").src = src;
 }

 /* Yıldız puanlama */
 function rate(val) {
     let stars = document.querySelectorAll(".rating span");
     stars.forEach((s, i) => {
         s.classList.toggle("active", i < val);
     });
 }

 /* Yorum ekleme */
 function yorumEkle() {
     let text = document.getElementById("yorumText").value;

     if (text.trim() === "") return;

     let div = document.createElement("div");
     div.className = "comment";
     div.textContent = text;

     document.getElementById("yorumList").appendChild(div);
     document.getElementById("yorumText").value = "";
 }
 function changeImage(imgName) {
 document.getElementById("mainImage").src = imgName;}
//zipe özel ürün filtreleme
 function filterLogos(filterValue) {
            // Sayfadaki tüm logo öğelerini seç
            var logos = document.querySelectorAll('.logo-item');

            // Her bir logo öğesi üzerinde döngü yap
            logos.forEach(function(logo) {
                // Eğer filtre değeri "all" ise (Hepsi seçeneği)
                if (filterValue === 'all') {
                    logo.style.display = 'block'; // Hepsini göster
                } 
                // Eğer logo öğesi, seçilen filtre değerine ait sınıfı içeriyorsa
                else if (logo.classList.contains(filterValue)) {
                    logo.style.display = 'block'; // Logoyu göster
                } 
                // Aksi takdirde (diğer logolar)
                else {
                    logo.style.display = 'none'; // Logoyu gizle
                }
            });
        }

        // Sayfa yüklendiğinde varsayılan olarak "Hepsi" seçeneğiyle filtrele
        window.onload = function() {
            filterLogos('all');
        };


//magza
function searchStores() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const stores = document.querySelectorAll(".store-card");

  stores.forEach(store => {
    const text = store.innerText.toLowerCase();
    store.style.display = text.includes(input) ? "block" : "none";
  });
}
//is basvuru formu
const form = document.getElementById("applyForm");
const done = document.querySelector(".done");


form.addEventListener("submit", e => {
e.preventDefault();


form.style.opacity = "0.3";


setTimeout(() => {
form.reset();
form.style.opacity = "1";
done.style.display = "block";


setTimeout(() => done.style.display = "none", 3000);
}, 800);
});
//tedarik sayfası
document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("supplierForm");
    const success = document.querySelector(".success");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        success.style.display = "block";
        form.reset();
    });

});
//kiralık yer web sayfası
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("rentForm");
    const success = document.querySelector(".success");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        success.style.display = "block";
        form.reset();
    });
});
//tarifler sayfası 
const recipes = {
    kebap: {
        title: "Ev Usulü Kebap",
        text: "ZİP dana kıymayı soğan ve baharatlarla yoğurun, fırında ya da tavada pişirin."
    },
    bozbas: {
        title: "Bozbaş",
        text: "ZİP kuşbaşı eti kavurun, nohut ve patates ekleyip kısık ateşte pişirin."
    },
    mercimek: {
        title: "Mercimek Çorbası",
        text: "ZİP mercimeği haşlayın, un ve tereyağıyla çorba kıvamına getirin."
    },
    sarma: {
        title: "Yaprak Sarma",
        text: "ZİP pirinci baharatlarla karıştırın, yapraklara sarıp pişirin."
    },
    dolma: {
        title: "Biber Dolması",
        text: "ZİP pirinç ve kıymayla iç hazırlayıp biberleri doldurun."
    },
    kofte: {
        title: "Izgara Köfte",
        text: "ZİP dana kıymayı galeta unu ve baharatlarla yoğurun, dinlendirip pişirin."
    },
    suthelvasi: { title: "Süt Helvası", text: "Unu kavur, süt ekle, fırınla." },
     makarna: { title: "Salçalı Makarna", text: "Makarnayı haşla, salçayla karıştır." }
};

function openModal(key) {
    recipeModal.style.display = "flex";
    modalTitle.innerText = recipes[key].title;
    modalText.innerText = recipes[key].text;
}

function closeModal() {
    recipeModal.style.display = "none";
}
//aktüel afisler
function openModal(src) {
      event.stopPropagation();
      const modal = document.getElementById('imageModal');
      const modalImg = document.getElementById('modalImg');
      modalImg.src = src;
      modal.style.display = 'flex';
    }

    function closeModal() {
      document.getElementById('imageModal').style.display = 'none';
    }
    //afis ürün katalog
    const afisler = document.querySelectorAll(".afis img");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");

afisler.forEach(img => {
    img.onclick = () => {
        modal.style.display = "flex";
        modalImg.src = img.src;
    }
});

function closeModal(){
    modal.style.display = "none";
}