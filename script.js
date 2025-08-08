<script>
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      appearOnScroll.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
</script>
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const typing = document.querySelector(".typing");
    typing.textContent = "Front-End Developer ✨";
  });
</script>

const roles = ["Front-End Developer 💅", "Dreamer & Doer ✨", "Camera-Loving Coder 📸"];
let index = 0;
const typing = document.querySelector(".typing");

function typeNext() {
  typing.textContent = roles[index];
  index = (index + 1) % roles.length;
}

setInterval(typeNext, 2000);
typeNext();
<script>
  document.addEventListener("DOMContentLoaded", function () {
    const roles = [
      "Build user-friendly websites 👩‍💻",
      "Design dreamy UIs 🎀",
      "Code with creativity 💡",
      "Manifest beautiful experiences 🌸",
      "Create with confidence 💅"
    ];

    let index = 0;
    const typing = document.querySelector(".typing");

    function typeNext() {
      typing.textContent = roles[index];
      index = (index + 1) % roles.length;
    }

    setInterval(typeNext, 2000);
    typeNext();
  });
</script>


