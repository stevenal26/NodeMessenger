import { mapGetters } from 'vuex'
import { PURCHASE_ORDER } from '~/constants/purchaseOrder'
export const purchaseOrderMixin = {
  computed: {
    ...mapGetters({
      getIsEdit: 'purchaseOrders/getIsEdit',
      getId: 'purchaseOrders/getId',
      getInvoiceNumber: 'purchaseOrders/getInvoiceNumber',
      getPurchaseDate: 'purchaseOrders/getPurchaseDate',
      getVendor: 'purchaseOrders/getVendor',
      getPoNumber: 'purchaseOrders/getPoNumber',
      getPurchaseTotal: 'purchaseOrders/getPurchaseTotal',
      getItems: 'purchaseOrders/getItems',
      getDeleteItemIDs: 'purchaseOrders/getDeleteItemIDs',
      getItemsWithoutId: 'purchaseOrders/getItemsWithoutId',
    }),
  },
  methods: {
    cancelEdit() {
      this.$router.push('/review/weekly-purchases')
    },
    cancelCreate() {
      this.$store.commit('purchaseOrders/SET_PURCHASE_ORDER', PURCHASE_ORDER)
    },
  },
}
