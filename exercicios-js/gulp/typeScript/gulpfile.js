const { series } = require('gulp')
const gulp = require('gulp')
const ts = require('gulp-typescript')
const tsProject = ts.createProject('tsconfig.json')

function transformacaoTS(){

    return tsProject.src()
        .pipe(tsProject()) // aqui ele irá combinar o ts (gulp-typescript)
        .pipe(gulp.dest('build'))
}

module.exports.default = series(transformacaoTS)