module.exports = {
   plugins: [
        require('postcss-import'),
        require('autoprefixer')({browsers:["last 2 versions", "ie 8", "ie 9", "> 1%"]})
    ]
}