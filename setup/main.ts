import { defineAppSetup } from '@slidev/types'

/* plotly */
import { VuePlotly } from 'vue3-plotly'

/* VueTableLite */
import VueTableLite from 'vue3-table-lite/ts'

export default defineAppSetup(({ app, router }) => {
  app.component('v-plotly', VuePlotly  )
  app.component('table-lite', VueTableLite  )
})
