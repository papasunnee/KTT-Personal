module.exports = {
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/education.html': { page: '/education' },
      '/politics.html': { page: '/politics' },
      '/profession.html': { page: '/profession' },
      '/honours.html': { page: '/honours' }
    }
  },
  assetPrefix: '.'
}
