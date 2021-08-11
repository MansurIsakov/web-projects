<template>
  <section class="section" id="section--3">
    <div class="section__title section__title--testimonials">
      <h2 class="section__description">Not sure yet?</h2>
      <h3 class="section__header">
        Millions of Bankists are already making their lifes simpler.
      </h3>
    </div>

    <div class="slider">
      <div
        :class="{
          slide: true,
          'slide--1': true,
          hidden: activeFeedback,
        }"
      >
        <div class="testimonial">
          <h5 class="testimonial__header">Best financial decision ever!</h5>
          <blockquote class="testimonial__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium quas quisquam non? Quas voluptate nulla minima deleniti
            optio ullam nesciunt, numquam corporis et asperiores laboriosam
            sunt, praesentium suscipit blanditiis. Necessitatibus id alias
            reiciendis, perferendis facere pariatur dolore veniam autem esse non
            voluptatem saepe provident nihil molestiae.
          </blockquote>
          <address class="testimonial__author">
            <img src="../assets/user-1.jpg" alt="" class="testimonial__photo" />
            <h6 class="testimonial__name">Aarav Lynn</h6>
            <p class="testimonial__location">San Francisco, USA</p>
          </address>
        </div>
      </div>

      <div
        :class="{
          slide: true,
          'slide--2': true,
          hidden: !activeFeedback,
        }"
      >
        <div class="testimonial">
          <h5 class="testimonial__header">
            The last step to becoming a complete minimalist
          </h5>
          <blockquote class="testimonial__text">
            Quisquam itaque deserunt ullam, quia ea repellendus provident,
            ducimus neque ipsam modi voluptatibus doloremque, corrupti laborum.
            Incidunt numquam perferendis veritatis neque repellendus. Lorem,
            ipsum dolor sit amet consectetur adipisicing elit. Illo deserunt
            exercitationem deleniti.
          </blockquote>
          <address class="testimonial__author">
            <img src="../assets/user-2.jpg" alt="" class="testimonial__photo" />
            <h6 class="testimonial__name">Miyah Miles</h6>
            <p class="testimonial__location">London, UK</p>
          </address>
        </div>
      </div>
      <button class="slider__btn slider__btn--left" @click="changeFeedback">
        &larr;
      </button>
      <button class="slider__btn slider__btn--right" @click="changeFeedback">
        &rarr;
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "FeedbackSlider",
  data() {
    return {
      activeFeedback: true,
    };
  },
  methods: {
    changeFeedback() {
      this.activeFeedback = !this.activeFeedback;
    },
  },
};
</script>

<style>
/* SLIDER */
.slider {
  max-width: 100rem;
  height: 50rem;
  margin: 0 auto;
  position: relative;

  /* IN THE END */
  overflow: hidden;
}
.hidden {
  display: none;
  visibility: hidden;
}

.slide {
  position: absolute;
  top: 0;
  width: 100%;
  height: 50rem;

  display: flex;
  align-items: center;
  justify-content: center;

  /* THIS creates the animation! */
  transition: transform 1s;
}

.slide > img {
  /* Only for images that have different size than slide */
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.slider__btn {
  position: absolute;
  top: 50%;
  z-index: 10;

  border: none;
  background: rgba(255, 255, 255, 0.7);
  font-family: inherit;
  color: #333;
  border-radius: 50%;
  height: 5.5rem;
  width: 5.5rem;
  font-size: 3.25rem;
  cursor: pointer;
}

.slider__btn--left {
  left: 6%;
  transform: translate(-50%, -50%);
}

.slider__btn--right {
  right: 6%;
  transform: translate(50%, -50%);
}

.dots {
  position: absolute;
  bottom: 5%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
}

.dots__dot {
  border: none;
  background-color: #b9b9b9;
  opacity: 0.7;
  height: 1rem;
  width: 1rem;
  border-radius: 50%;
  margin-right: 1.75rem;
  cursor: pointer;
  transition: all 0.5s;

  /* Only necessary when overlying images */
  /* box-shadow: 0 0.6rem 1.5rem rgba(0, 0, 0, 0.7); */
}

.dots__dot:last-child {
  margin: 0;
}

.dots__dot--active {
  /* background-color: #fff; */
  background-color: #888;
  opacity: 1;
}

/* TESTIMONIALS */
.testimonial {
  width: 65%;
  position: relative;
}

.testimonial::before {
  content: "\201C";
  position: absolute;
  top: -5.7rem;
  left: -6.8rem;
  line-height: 1;
  font-size: 20rem;
  font-family: inherit;
  color: var(--color-primary);
  z-index: -1;
}

.testimonial__header {
  font-size: 2.25rem;
  font-weight: 500;
  margin-bottom: 1.5rem;
}

.testimonial__text {
  font-size: 1.7rem;
  margin-bottom: 3.5rem;
  color: #666;
}

.testimonial__author {
  margin-left: 3rem;
  font-style: normal;

  display: grid;
  grid-template-columns: 6.5rem 1fr;
  column-gap: 2rem;
}

.testimonial__photo {
  grid-row: 1 / span 2;
  width: 6.5rem;
  border-radius: 50%;
}

.testimonial__name {
  font-size: 1.7rem;
  font-weight: 500;
  align-self: end;
  margin: 0;
}

.testimonial__location {
  font-size: 1.5rem;
}

.section__title--testimonials {
  margin-bottom: 4rem;
}
</style>
