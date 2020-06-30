<template>
  <div>
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item" :class="{'disabled': !pagerdata.has_pre}">
          <a
            class="page-link"
            href="#"
            aria-label="Previous"
            @click.prevent="pagerFun(pagerdata.current_page - 1)"
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li
          class="page-item"
          v-for="page in pagerdata.total_pages"
          :key="page"
          :class="{'active': pagerdata.current_page === page}"
        >
          <a class="page-link" href="#" @click.prevent="pagerFun(page)">{{ page }}</a>
        </li>
        <li class="page-item" :class="{'disabled': !pagerdata.has_next}">
          <a
            class="page-link"
            href="#"
            aria-label="Next"
            @click.prevent="pagerFun(pagerdata.current_page + 1)"
          >
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'Pagination',
  data () {
    return {}
  },
  props: {
    pagerdata: {
      type: Object,
      default: () => {
        return {}
      }
    }
  },
  methods: {
    pagerFun (page) {
      this.$emit('getpage', page)
    }
  }
}
</script>
