document.write(`<div class="container-fluid p-5">
<div class="container">
  <div class="row">
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
    <img src="img/logo.png" alt="" width="40px">
    <p class="fw-bold mt-3 pe-5">Some Paragraph about logo</p>
      <p class="">Want to take it to the next level? Start your About page with a question that pulls on your audience’s emotions. The makers of Magic Spoon pose  childhood, when you didn’t feel guilty about eating mountains of cereal with questionable nutrition?”</p>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
      <h5 class=" mb-4 mt-3 ">Quick Links</h5>
      <a href="index.html" class="  text-decoration-none  text-dark fw-bold  " >HOME</a></p>
      <p><a href="shop.html" class="text-decoration-none text-dark fw-bold  " >SHOP</a></p>
      <p><a href="blog.html" class="text-decoration-none text-dark fw-bold  " >BLOG</a></p>
      <p><a href="about.html" class="text-decoration-none text-dark fw-bold  ">ABOUT</a></p>
      <p><a href="contact.html" class="text-decoration-none text-dark fw-bold  ">CONTACT</a></p>
    </div>
    <div class="col-lg-4 col-md-12 col-sm-12 mt-4">
    <h5 class="fs-4 mb-3 mt-3">Contact Information</h5>
    <p class="fw-bold">Address  :-
       203, Sri Sai Krishna Apartment, Ram Suchit Mishra Path, Sri Krishna Nagar, Kidwaipuri, Patna, Bihar 800001</p>
       <p class="fw-bold">Mobile :- +91-7004525294</p>
       <p class="fw-bold cur" onclick="mail()">Email :- SpecBits@gmail.com</p>
       <div class="mt-5">        <i class="fa-brands fa-facebook me-4 fs-4 mt-3 point" onclick="face()"></i><i class="fa-brands fa-instagram fs-4 me-4 mt-3 point " onclick="face1()"></i><i class="fa-brands fa-twitter me-4 fs-4 mt-3 point" onclick=" face2()"></i><i class="fa-brands fa-youtube me-4 fs-4 mt-3 point " onclick="face3()"></i>
       
      </div>

    </div>
  </div>
</div>
</div>

<div class="container-fluid bg-secondary ">
<p class="p-lg-5 p-md-5 p-4 text-center text-light"> Copyright &copy 2023 <span class="fw-bold">Design by vijay patel </span></p>
</div>


  <script src="bootstrap.bundle.min.js"></script>
  <script>
      function face(){
        window.location="https://www.facebook.com/"
      }
      function face1(){
        window.location="https://www.instagram.com"
      }
      function face2(){
        window.location="https://www.twitter.com"
      }
      function face3(){
        window.location="http://www.youtube.com/"
      }
      function mail(){
        window.location="http://www.gmail.com/"
      }
      function log(){
        window.location = "login.html"
      }
      function log1(){
        window.location = "cart.html"
      }



      
    </script>
</body>
</html>`)