<template>
  <footer class="footer">
    <ul class="footer__nav">
      <li class="footer__item">
        <a class="footer__link" href="#">About</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Pricing</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Terms of Use</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Privacy Policy</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Careers</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Blog</a>
      </li>
      <li class="footer__item">
        <a class="footer__link" href="#">Contact Us</a>
      </li>
    </ul>
    <img src="../assets/icon.png" alt="Logo" class="footer__logo" />
    <p class="footer__copyright">
      Built by Mansur Isakov. &copy; Copyright by Jonas Schmedtmann. <br />
      Made with ❤️ and a ⌨️.
    </p>
  </footer>
</template>

<script>
export default {
  name: "TheFooter",
};
</script>

<style>
/* FOOTER */
.footer {
  padding: 10rem 3rem;
  background-color: #37383d;
}

.footer__nav {
  list-style: none;
  display: flex;
  justify-content: center;
  margin-bottom: 5rem;
}

.footer__item {
  margin-right: 4rem;
}

.footer__link {
  font-size: 1.6rem;
  color: #eee;
  text-decoration: none;
}

.footer__logo {
  height: 5rem;
  display: block;
  margin: 0 auto;
  margin-bottom: 5rem;
}

.footer__copyright {
  font-size: 1.4rem;
  color: #aaa;
  text-align: center;
}

.footer__copyright .footer__link {
  font-size: 1.4rem;
}
</style>
