const program = require('commander')
const CliService = require('@vue/cli-service/lib/Service')
const Service = new CliService(process.cwd())
Service.init()

// 获取 vue-cli 默认的 webpack 配置
const webpackConfig = Service.resolveWebpackConfig()

program.version('0.1.0')
  .option('-k, --key [type]', 'key to build')

program
  .command('watch')
  .description('run the given remote command')
  .action(function(){
    console.log('watch 命令注册成功')
    // 用户传进来的 key 值
    console.log(program.key)
  })

program.parse(process.argv)