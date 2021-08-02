<template>
  <div class="home">
    <filter-nav
      @filterChange="current = $event"
      :current="current"
    ></filter-nav>
    <div v-if="projects.length">
      <div v-for="project in filteredProjects" :key="project.id">
        <single-project
          :project="project"
          @delete="handleDelete"
          @complete="handleComplete"
        ></single-project>
      </div>
    </div>
  </div>
</template>

<script>
import SingleProject from "../components/SingleProject.vue";
import FilterNav from "../components/FilterNav.vue";

export default {
  components: {
    SingleProject,
    FilterNav,
  },
  name: "Home",
  data() {
    return {
      projects: [],
      current: "all",
    };
  },
  mounted() {
    fetch("http://localhost:3000/projects")
      .then((res) => res.json())
      .then((data) => (this.projects = data))
      .catch((err) => console.log(err.message));
  },
  methods: {
    handleDelete(id) {
      this.projects = this.projects.filter((project) => {
        return project.id !== id;
      });
    },
    handleComplete(id) {
      let p = this.projects.find((project) => {
        return project.id === id;
      });
      p.complete = !p.complete;
    },
  },
  computed: {
    filteredProjects() {
      if (this.current === "completed") {
        return this.projects.filter((project) => project.complete);
      }
      if (this.current === "ongoing") {
        return this.projects.filter((project) => !project.complete);
      }
      if (this.current === "all") {
        return this.projects.filter((project) => project);
      }
    },
  },
};
</script>
