<template>
  <div>
    <div class="pb-5 border-b border-gray-200">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Nos boissons</h3>
    </div>
    <div class="py-6 px-3 flex gap-3">
      <div v-for="file in files">
        <img :src="file.source" alt="" class="object-cover w-20 h-20 rounded-lg"/>
        <div class="text-gray-500 text-xs text-center">33cl</div>
      </div>
    </div>
  </div>
</template>

<script>
const files = [
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://toppng.com/uploads/preview/red-square-logo-logos-coca-cola-logo-now-11562935240v91zjthk8u.png',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://pizza-lisa.fr/pizzas/145-large_default/ice-tea.jpg',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://ih1.redbubble.net/image.668864898.4849/mo,small,flatlay,product_square,600x600.u2.jpg',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032013/fanta_arden_square_ufrugt_o.png?itok=wjmaYZN_',
  },
  {
    title: 'IMG_4985.HEIC',
    size: '3.9 MB',
    source:
        'https://mir-s3-cdn-cf.behance.net/projects/404/bc294568869467.Y3JvcCw5NjYsNzU2LDIxNyww.png',
  },
  // More files...
]

export default {
  setup() {
    return {
      files,
    }
  },
}
</script>
