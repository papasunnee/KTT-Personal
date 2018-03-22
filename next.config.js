module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/education': { page: '/education' },
      '/politics': { page: '/politics' },
      '/profession': { page: '/profession' },
      '/honours': { page: '/honours' }
    }
  },
  assetPrefix: '.'
}
