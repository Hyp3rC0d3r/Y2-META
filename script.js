'use strict';



let previewContainer= document.querySelector('.package-prev');
let previewBox= previewContainer.querySelectorAll('.prev');

document.querySelectorAll('.prevb').forEach(product =>{
  product.onclick =()=>{
    let name= product.getAttribute('data-name');

    previewContainer.style.display='flex'
    previewBox.forEach(preview =>{
      let target = preview.getAttribute('data-target');
      if(name==target){
        preview.classList.add('active');
      }
      else{
        preview.classList.remove('active');
      }
    });
  };
});



document.querySelectorAll('a.cancel').forEach(function(cnlBtn){
  cnlBtn.addEventListener('click',function(){
    document.querySelector('.prev').classList.remove('active');
    document.querySelector('.package-prev').style.display='none';
    
  });
});


const locationDescriptions ={   
  "albay": "Experience the breathtaking beauty of Mayon Volcano, known for its perfectly symmetrical cone shape. This majestic landmark in Albay offers thrilling hikes, stunning views, and a rich cultural heritage.",
  "tagaytay":"Witness the world’s smallest active volcano, Taal, nestled within a lake, creating a mesmerizing landscape. Adventure seekers can trek up to the crater for a closer look at its unique volcanic features.",
  "ilocosSur":"Step back in time as you stroll through the cobblestone streets of Vigan, a UNESCO World Heritage Site. This charming city showcases well-preserved Spanish colonial architecture and rich Ilocano culture.",
  "ifugao":"Marvel at the breathtaking Banaue Rice Terraces, often called the 'Eighth Wonder of the World'. These ancient, hand-carved terraces stand as a testament to the ingenuity and resilience of the Ifugao people.",
  "manila":"Explore the historic walls of Intramuros, the heart of Spanish colonial Manila. Walk through centuries-old churches, forts, and museums that tell the story of the Philippines’ colonial past.",
  "pangasinan":"Embark on an island-hopping adventure in the stunning Hundred Islands National Park. With over 100 scenic islets, visitors can enjoy snorkeling, kayaking, and breathtaking panoramic views.",
  "batanes":"Discover the untouched beauty of Basco, Batanes, where rolling hills meet dramatic cliffs and pristine beaches. Its serene landscapes and warm Ivatan culture make it a perfect escape from city life.",
  "sorsogon":"Swim alongside gentle giant whale sharks in Donsol, known as the 'Whale Shark Capital of the World'. This eco-tourism hotspot also offers firefly river tours and scenic countryside experiences.",
  "nuevaEcija":"Immerse yourself in the natural beauty of Minalungao National Park, featuring emerald-green waters and towering limestone formations. Visitors can enjoy bamboo rafting, cliff diving, and spelunking adventures.",
  "aurora":"Famous for its powerful waves, Baler is a paradise for surfers and beach lovers alike. Beyond the waves, explore historical landmarks, lush waterfalls, and breathtaking coastal cliffs.",
  "palawan":"Visit El Nido, a tropical paradise with stunning beaches, crystal-clear waters, and breathtaking limestone cliffs. Enjoy island hopping, snorkeling, and relaxing on white sand shores for an unforgettable getaway",

  "bohol":"Marvel at the world-famous Chocolate Hills, a unique geological formation in Bohol that turns brown during the dry season. These perfectly shaped hills create a stunning landscape best viewed from the observation deck.",
  "negrosOriental":"Discover the mystical Enchanted River, known for its deep blue waters and hidden underwater caves. This natural wonder is a must-visit for those seeking relaxation and adventure in a serene setting.",
  "dumaguete":"Escape into nature at the Twin Lakes of Balinsasayao and Danao, surrounded by lush forests and rich biodiversity. Visitors can enjoy kayaking, birdwatching, and scenic boat rides in this peaceful retreat.",
  "aklan":"Famous for its powdery white sand and crystal-clear waters, Boracay is the ultimate beach paradise. From thrilling water sports to vibrant nightlife, this island offers an unforgettable tropical escape.",
  "palawan":"Explore the breathtaking beauty of Coron, home to stunning limestone cliffs, pristine lakes, and world-class diving spots. Snorkel or dive in its famous WWII shipwrecks and swim in the enchanting Kayangan Lake.",
  "cebu":"Bantayan Island is a hidden gem with powdery white sand beaches and a laid-back atmosphere. It's the perfect getaway for travelers looking for tranquility and unspoiled natural beauty.",
  "negrosOccidental":"Step into history at The Ruins, a beautifully preserved mansion often called the 'Taj Mahal of Negros.' This iconic landmark offers a romantic backdrop, especially at sunset when it glows with golden lights.",
  "siquijor":"Swim in the refreshing turquoise waters of Cambugahay Falls in Siquijor, known for its multi-tiered cascades. Thrill-seekers can enjoy rope swings and natural rock pools in this enchanting spot.",
  "leyte":"Admire the breathtaking beauty of Kalanggaman Island, known for its long, powdery white sandbar and crystal-clear waters. This unspoiled paradise is perfect for swimming, snorkeling, and beach camping.",

  "iligan":"Witness the raw power of Maria Cristina Falls, one of the tallest and most majestic waterfalls in the Philippines. Located in Iligan City, this twin waterfall is a vital source of hydroelectric power.",
  "davaoDelnorte":"Just a short boat ride from Davao, Samal Island boasts pristine beaches, vibrant marine life, and luxurious resorts. Whether diving, snorkeling, or relaxing by the shore, this island is a tropical haven.",
  "davao":"Get up close to the critically endangered Philippine Eagle at the conservation center in Davao. This sanctuary plays a crucial role in protecting one of the world’s largest and rarest eagles.",
  "davaoOriental":"Marvel at the cascading beauty of Aliwagwag Falls, the highest waterfall in the Philippines. With its multiple tiers and crystal-clear waters, it's a perfect spot for nature lovers and adventure seekers.",
  "maguindanao":"Stand in awe of the vibrant Pink Mosque in Maguindanao, a symbol of peace and unity. Its striking pink façade and intricate Islamic architecture make it a unique cultural landmark.",
  "camiguin":"Relax on the stunning sandbar of White Island, offering panoramic views of the azure sea and Mount Hibok-Hibok. This uninhabited paradise is perfect for sunbathing, swimming, and taking postcard-worthy photos.",
  "davaoDelsur":"Conquer the highest peak in the Philippines, Mount Apo, an adventurer’s dream with breathtaking trails and diverse wildlife. Whether hiking or camping, reaching the summit rewards you with spectacular",
  "siargaoIsland":"Ride the world-famous waves of Cloud 9, Siargao’s top surfing destination. With its powerful barrels and scenic boardwalk, it’s a haven for surfers and beach lovers alike.",
  "cagayanDeoro":"Experience the thrill of white-water rafting in Cagayan de Oro, where wild rapids and scenic river landscapes await. Perfect for adrenaline junkies, this adventure guarantees an unforgettable ride.",
  "southCotabato":"Immerse yourself in the cultural and natural beauty of Lake Sebu, home to the T’boli people and stunning lake views. Take a boat ride, witness traditional weaving, and marvel at the breathtaking Seven Falls."
};

document.getElementById("destination").addEventListener("change", function() {
  let selectedValue = this.value;
  if (selectedValue in locationDescriptions){
      document.getElementById("destination-desc").innerText= locationDescriptions[selectedValue];
  }
});

const overlay = document.querySelector("[data-overlay]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbar = document.querySelector("[data-navbar]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navLinks = document.querySelectorAll("[data-nav-link]");

const navElemArr = [navOpenBtn, navCloseBtn, overlay];

const navToggleEvent = function (elem) {
  for (let i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function () {
      navbar.classList.toggle("active");
      overlay.classList.toggle("active");
    });
  }
}

navToggleEvent(navElemArr);
navToggleEvent(navLinks);


const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {

  if (window.scrollY >= 200) {
    header.classList.add("active");
    goTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    goTopBtn.classList.remove("active");
  }

});

const scrollBtn =document.getElementById('scroll');
const targetSec =document.getElementById('target');




function openModal() {
  document.getElementById("modal").style.display = "block";
  document.getElementById("overlay").style.display = "block";
  document.body.style.overflow = "hidden"; // Freeze background scroll
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
  document.body.style.overflow = ""; // Restore scrolling
}




function goToForm(destination) {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  document.getElementById("destination").value = destination;
  document.getElementById("destination-desc").innerText= "Famous for its powdery white sand and crystal-clear waters, Boracay is the ultimate beach paradise. From thrilling water sports to vibrant nightlife, this island offers an unforgettable tropical escape.";
}

function goToForm1(destination) {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  document.getElementById("destination").value = destination;
  document.getElementById("destination-desc").innerText= "Visit El Nido, a tropical paradise with stunning beaches, crystal-clear waters, and breathtaking limestone cliffs. Enjoy island hopping, snorkeling, and relaxing on white sand shores for an unforgettable getaway";
}

function goToForm2(destination) {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
  document.getElementById("destination").value = destination;
  document.getElementById("destination-desc").innerText= "Ride the world-famous waves of Cloud 9, Siargao’s top surfing destination. With its powerful barrels and scenic boardwalk, it’s a haven for surfers and beach lovers alike.";
}


function goToForm3() {
  document.getElementById("form").scrollIntoView({ behavior: "smooth" });
}

function openPopup() {
  document.getElementById("popup").style.display = "block";
  document.getElementById("overlay2").style.display = "block";
}

function closePopup() {
  document.getElementById("popup").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
}

function openPopup2() {
  document.getElementById("popup2").style.display = "block";
  document.getElementById("overlay2").style.display = "block";
}

function closePopup2() {
  document.getElementById("popup2").style.display = "none";
  document.getElementById("overlay2").style.display = "none";
  document.getElementById("email").value="";
}

function learn() {
  document.getElementById("learn").scrollIntoView({ behavior: "smooth" });
  
}

function subscribe() {
  document.getElementById("subs").scrollIntoView({ behavior: "smooth" });
  
}

document.getElementById("inquire-btn").addEventListener("click", function () {
  let modal2 = document.getElementById("modal2");
  let overlay2 = document.getElementById("overlay2");

  // Ensure modal is reset before opening
  modal2.style.display = "none";
  overlay2.style.display = "none";
  setTimeout(() => {
    openModal2();
  }, 50); // Small delay to ensure proper visibility
});


function openModal2() {
  console.log("openModal2() triggered!"); // Debugging

  let destSelect = document.getElementById("destination");
  let people = document.getElementById("people").value;
  let checkin = document.getElementById("checkin").value;
  let checkout = document.getElementById("checkout").value;

  // ✅ Ensure all required fields are filled BEFORE showing the modal
  if (!destSelect.value || !people || !checkin || !checkout) {
    alert("Please fill in all required fields before submitting.");
    return; // 🚨 Stop execution if validation fails
  }

  let selectedOption = destSelect.options[destSelect.selectedIndex];
  let pricePerDay = parseInt(selectedOption.dataset.price);
  let img = destSelect.value;

  // ✅ Check for valid dates before proceeding
  let isValid = validateDates(checkin, checkout);
  if (!isValid) {
    alert("Invalid date input. Please ensure that the check-out date is after the check-in date.");
    return; // 🚨 Stop execution if the dates are invalid
  }

  // ✅ Show modal only if all fields and dates are valid
  let modal2 = document.getElementById("modal2");
  let overlay3 = document.getElementById("overlay3");

  if (!modal2 || !overlay3) {
    console.error("Modal2 or overlay3 is missing from the DOM!");
    return;
  }

  // ✅ Update modal content
  document.getElementById("destination-title").innerText = selectedOption.text;
  document.getElementById("destination-img").src = `${img}.jpg`;

  document.getElementById("modal-people").value = people;
  document.getElementById("modal-checkin").value = checkin;
  document.getElementById("modal-checkout").value = checkout;
  updateTotalPrice(pricePerDay);

  // ✅ Show modal
  overlay3.style.display = "block";
  modal2.style.display = "block";

  console.log("Modal2 and overlay3 should now be visible.");
}

function validateDates(checkin, checkout) {
  let checkinDate = new Date(checkin);
  let checkoutDate = new Date(checkout);
  let days = (checkoutDate - checkinDate) / (1000 * 60 * 60 * 24);

  // ✅ Ensure check-in is before check-out and both dates are valid
  if (isNaN(days) || days <= 0) {
    return false; // 🚨 Invalid date
  }
  return true; // ✅ Valid date
}




function closeModal2() {
  document.getElementById("modal2").style.display = "none";
  document.getElementById("overlay3").style.display = "none";
  document.body.style.overflow = "";

  document.getElementById("destination").value = "";
  document.getElementById("people").value = "";
  document.getElementById("checkin").value = "";
  document.getElementById("checkout").value = "";
  document.getElementById("total-price").value = "";
  document.getElementById("otp-input").value="";
}

function updateTotalPrice(pricePerDay) {
  let people = parseInt(document.getElementById("modal-people").value);
  let checkin = new Date(document.getElementById("modal-checkin").value);
  let checkout = new Date(document.getElementById("modal-checkout").value);
  let days = (checkout - checkin) / (1000 * 60 * 60 * 24) || 1;
  let totalPrice = pricePerDay * people * days;

  if (isNaN(totalPrice) || totalPrice <= 0 || checkin >= checkout) {
    document.getElementById("total-price").innerText = "Invalid: Please Check the Date";
    return false; // 🚨 Validation failed
  } else {
    document.getElementById("total-price").innerText = "₱" + totalPrice.toFixed(2);
    return true; // ✅ Valid input
  }
}


document.querySelectorAll("#modal-people, #modal-checkin, #modal-checkout").forEach(input => {
  input.addEventListener("input", () => updateTotalPrice(parseInt(document.getElementById("destination").selectedOptions[0].dataset.price)));
});

document.getElementById("people").addEventListener("input", function () {
  if (this.value < 1) {
      this.value = 1;
  }
});


document.querySelectorAll("#modal-people, #modal-checkin, #modal-checkout").forEach(input => {
  input.addEventListener("input", () => updateTotalPrice(parseInt(document.getElementById("destination").selectedOptions[0].dataset.price)));
});

function showReceipt() {
  let referenceNumber = "REF-" + Math.floor(100000 + Math.random() * 900000);
  let otp = document.getElementById("otp-input").value;
  let pricePerDay = parseInt(document.getElementById("destination").options[document.getElementById("destination").selectedIndex].dataset.price);

  let modal2 = document.getElementById("modal2");
  let overlay3 = document.getElementById("overlay3");
  let overlay2 = document.getElementById("overlay2");

  // ✅ Ensure the date is valid before proceeding
  let isValid = updateTotalPrice(pricePerDay);
  console.log("Date validation result:", isValid); // Debugging

  if (!isValid) {
    alert("Invalid date input. Please correct the check-in and check-out dates.");
    return; // 🚨 Stop execution here if validation fails
  }

  // ✅ Ensure OTP is entered before proceeding
  if (otp.length == 6 || isNaN(otp)) {
  }else{
    alert("Please enter a valid 6-digit OTP before proceeding.");
    return; // 🚨 Stop execution if OTP is missing
  }

  // ✅ Populate receipt details
  document.getElementById("ref-number").innerText = referenceNumber;
  document.getElementById("receipt-destination").innerText = document.getElementById("destination-title").innerText;
  document.getElementById("receipt-people").innerText = document.getElementById("modal-people").value;
  document.getElementById("receipt-checkin").innerText = document.getElementById("modal-checkin").value;
  document.getElementById("receipt-checkout").innerText = document.getElementById("modal-checkout").value;
  document.getElementById("receipt-total").innerText = document.getElementById("total-price").innerText;

  // ✅ Show receipt modal only if everything is valid
  document.getElementById("modal4").style.display = "block";
  document.getElementById("receipt-modal").style.display = "block";
  document.getElementById("overlay4").style.display = "block";

  document.getElementById("overlay2").style.display = "none";
  modal2.style.display = "none";

  document.getElementById("modal").style.display = "none";
  document.getElementById("overlay").style.display = "none";
}




function closeReceipt() {
  console.log("Closing receipt...");

  // ✅ Save the current scroll position
  let scrollPosition = window.scrollY;
  localStorage.setItem("scrollPosition", scrollPosition);

  document.getElementById("modal-people").value = "";
  document.getElementById("modal-checkin").value = "";
  document.getElementById("modal-checkout").value = "";
  document.getElementById("total-price").innerText = "";
  document.getElementById("otp-input").value = "";

  document.getElementById("receipt-modal").style.display = "none";
  document.getElementById("overlay4").style.display = "none";
  document.getElementById("modal4").style.display = "none";

  let modal = document.querySelector(".modal3");
  let overlay = document.querySelector(".overlay3");

  if (modal && overlay) {
    modal.style.display = "none";
    overlay.style.display = "none";
  }

  console.log("Receipt closed. Refreshing while keeping scroll position.");

  // ✅ Refresh the page
  location.reload();
}







function confirm(){
  document.getElementById('package-prev').style.display ="none";
  alert("Your Luzon Adventure Package is now successfully Booked!");
  
}
function confirm1(){
  document.getElementById('package-prev').style.display ="none";
  alert("Your Visayas Island Adventure Package is now successfully Booked!");
}
function confirm2(){
  document.getElementById('package-prev').style.display ="none";
  alert("Your Mindanao Adventure Package is now successfully Booked!");
}

function validateOTP(input) {
  input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters

  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6); // Ensure max length is 6
  }
}

// Function to open the confirmation modal and display package details
function openConfirmation(target) {
  let selectedPackage = document.querySelector(`.prev[data-target="${target}"]`);
  let modal = document.querySelector(".confirmation");

  if (!selectedPackage) {
    console.error("Package not found!");
    return;
  }

  let packageImage = selectedPackage.querySelector("img").src;
  let packageTitle = selectedPackage.querySelector("h3").innerText;
  let packageDescription = selectedPackage.querySelector("p").innerText;
  let packagePrice = selectedPackage.querySelector(".price").innerText;

  // Set confirmation modal content
  document.querySelector(".confirmation-image").src = packageImage;
  document.querySelector(".confirmation-title").innerText = packageTitle;
  document.querySelector(".confirmation-description").innerText = packageDescription;
  document.querySelector(".confirmation-price").innerText = packagePrice;

  // Show modal
  modal.style.display = "flex";
}

// Function to close the confirmation modal
// Function to close the confirmation modal and reset OTP input
function closeConfirmation() {
  let modal = document.querySelector(".confirmation");
  let otpInput = document.querySelector(".otp-input");
  let packagePrev = document.getElementById("package-prev");

  // Reset OTP input
  otpInput.value = "";

  // Hide the confirmation modal
  modal.style.display = "none";

  // Hide the package-prev section
  if (packagePrev) {
    packagePrev.style.display = "none";
  }
}


// Function to validate 6-digit OTP
function validateOTP(input) {
  input.value = input.value.replace(/\D/g, ""); // Remove non-numeric characters

  if (input.value.length > 6) {
    input.value = input.value.slice(0, 6); // Ensure max length is 6
  }
}

// Function to show the receipt modal if OTP is valid
function showReceipt2() {
  let otp = document.querySelector(".otp-input").value;

  if (otp.length !== 6 || isNaN(otp)) {
    alert("Please enter a valid 6-digit OTP before proceeding.");
    return;
  }

  alert("Booking confirmed!"); // Replace with actual receipt modal
  closeConfirmation();
}







