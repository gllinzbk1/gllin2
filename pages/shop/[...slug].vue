<script setup>
//--------------此页作路由分发，获取当前路由---------
const route = useRoute();
console.log("slug.route.params", route.params)

//--------------获取页面类型，列表/内容--------------  //1,列表，2 内容页
const pageStyle = useAnalyzeRouteIsListOrContent(route)
console.log('pageStyle', pageStyle)
//--------------获取路由分析结果--------------------
const routeResult = useAnalyzeRoute(route);

const productStore = getStoreById(routeResult[0])
console.log('productStore.products', routeResult,productStore?.products, productStore?.hasOwnProperty('products'))
if (productStore?.hasOwnProperty('products') == undefined || productStore?.products == undefined) {
  
  const cglist = ['carbon-mountain-bike', 'carbon-road-bike', 'carbon-fat-bike', 'carbon-BMX-bike', 'carbon-accessories', 'carbon-road-gravel-cx-disc-bike', 'carbon-tri-time-trial-track-bike', 'carbon-electric-bike']
  console.log('productdd',cglist.includes(routeResult[0]))
  if (cglist.includes(routeResult[0])) {

    const { data:data } = await useFetch('/api/readjson',{      
      method: 'POST', // Post method works
      body: {
        category: routeResult[0]
      },
      responseType:'json'
      //server:true
    })  
   // const pdata = JSON.parse(data.value)
    console.log('productdd is true', data.value)
    await useProductListInfo(routeResult[0], routeResult[0], data.value);
  }
  console.log('xxxxxxxxxx',pageStyle)
}
</script>


<template>
  <shopList v-if="pageStyle == 1"></shopList>
  <shopPage v-else-if="pageStyle == 2"></shopPage>
</template>