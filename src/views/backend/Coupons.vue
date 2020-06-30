<template>
  <div>
    <div class="text-right mt-4">
      <button type="button" class="btn btn-info btn-sm" @click="openModal(true)">建立新的優惠券</button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th>名稱</th>
          <th width="120">折扣百分比</th>
          <th width="120">到期日</th>
          <th width="100">是否啟用</th>
          <th width="150">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in coupons" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.percent }}</td>
          <td>{{ item.due_date | date }}</td>
          <td>
            <span v-if="item.is_enabled" class="text-success">啟用</span>
            <span v-else>未啟用</span>
          </td>
          <td>
            <div class="btn-group btn-group-toggle">
              <button class="btn btn-outline-info btn-sm" @click="openModal(false,item)">編輯</button>
              <button
                type="button"
                class="btn btn-outline-danger btn-sm"
                @click="openDelModal(item)"
              >刪除</button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <pager :pagerdata="pagination" @getpage="getCoupons" />
    <!-- modal 新增優惠券 -->
    <div
      class="modal fade"
      id="couponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-dark text-white">
            <h5 class="modal-title">
              <span>新增優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="title">標題</label>
              <input
                type="text"
                v-model="tempCoupon.title"
                class="form-control"
                id="title"
                placeholder="請輸入標題"
              />
            </div>
            <div class="form-group">
              <label for="id">優惠碼</label>
              <input
                type="text"
                v-model="tempCoupon.code"
                class="form-control"
                id="id"
                placeholder="請輸入優惠碼"
              />
            </div>
            <div class="form-group">
              <label for="due_date">到期日</label>
              <date-picker v-model="due_date" value-type="format" format="YYYY/MM/DD" :editable="false" id="due_date"></date-picker>
            </div>
            <div class="form-group">
              <label for="percent">折扣百分比</label>
              <input
                type="text"
                v-model="tempCoupon.percent"
                class="form-control"
                id="percent"
                placeholder="請輸入折扣百分比"
              />
            </div>
            <div class="form-group">
              <input type="checkbox" v-model="tempCoupon.is_enabled" id="is_enabled" />
              <label for="is_enabled">是否啟用</label>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary" @click="updateCoupon">確認</button>
          </div>
        </div>
      </div>
    </div>
    <!-- modal 刪除優惠券 -->
    <div
      class="modal fade"
      id="delCouponModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 class="modal-title">
              <span>刪除優惠券</span>
            </h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            是否刪除
            <strong class="text-danger">{{ tempCoupon.title }}</strong> 優惠券(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-dismiss="modal">取消</button>
            <button type="button" class="btn btn-danger" @click="delCoupon">確認刪除</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.mx-datepicker {
  width: 100%;
}
.mx-input {
  height: calc(1.5em + 0.75rem + 2px);
  font-size: 1rem;
  color: #495057;
  background-color: #fff !important;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  box-shadow: none;

  &:hover {
    border-color: #ced4da;
  }

  &:focus {
    border-color: #ffe187;
    outline: 0;
    box-shadow: 0 0 0 0.2rem rgba(255, 193, 7, 0.25);
  }
}
</style>

<script>
import $ from 'jquery'
import DatePicker from 'vue2-datepicker'
import 'vue2-datepicker/index.css'
import 'vue2-datepicker/locale/zh-tw'

export default {
  data () {
    return {
      coupons: [],
      tempCoupon: {},
      due_date: '',
      isNew: false,
      delItem: {},
      pagination: {}
    }
  },
  components: {
    DatePicker
  },
  methods: {
    getCoupons (page = 1) {
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupons?page=${page}`
      const vm = this
      vm.$store.commit('LOADING', true)
      vm.$http.get(url).then(response => {
        vm.coupons = response.data.coupons
        vm.pagination = response.data.pagination
        vm.$store.commit('LOADING', false)
      })
    },
    openModal (isNew, item) {
      if (isNew) {
        this.tempCoupon = {}
        this.due_date = {}
        this.isNew = true
      } else {
        this.tempCoupon = Object.assign({}, item)

        const newDate = new Date(this.tempCoupon.due_date * 1000)
        const yyyy = newDate.toLocaleDateString().slice(0, 4)
        const MM =
          (newDate.getMonth() + 1 < 10 ? '0' : '') + (newDate.getMonth() + 1)
        const dd = (newDate.getDate() < 10 ? '0' : '') + newDate.getDate()
        this.due_date = yyyy + '/' + MM + '/' + dd

        this.isNew = false
      }
      $('#couponModal').modal('show')
    },
    updateCoupon () {
      let api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon`
      let httpMethod = 'post'
      const vm = this
      const timestamp = Math.floor(new Date(vm.due_date) / 1000)
      vm.tempCoupon.due_date = timestamp
      if (!vm.isNew) {
        api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${vm.tempCoupon.id}`
        httpMethod = 'put'
      }
      vm.$http[httpMethod](api, { data: vm.tempCoupon }).then(response => {
        if (response.data.success) {
          $('#couponModal').modal('hide')
          vm.getCoupons()
        } else {
          $('#couponModal').modal('hide')
        }
      })
    },
    openDelModal (item) {
      $('#delCouponModal').modal('show')
      this.delItem = item
    },
    delCoupon () {
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/coupon/${this.delItem.id}`
      const vm = this
      vm.$http.delete(api, vm.delItem).then(response => {
        $('#delCouponModal').modal('hide')
        vm.getCoupons()
        vm.delItem = {}
      })
    }
  },
  created () {
    this.getCoupons()
  },
  mounted () {
    document.querySelector('.mx-input').classList.add('form-control')
  }
}
</script>
