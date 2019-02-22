const program = require('commander')

program.version('0.1.0')
  .option('-k, --key [type]', 'key to build')

program
  .command('watch')
  .description('run the given remote command')
  .action(function(){
    console.log('watch 命令注册成功')

    /**
     * 用户传进来的 key 值
     * yarn 运行命令时，可通过 program.key 获取到用户传进来的 key 值
     * npm 运行命令时，需通过 process.env.npm_config_key 获取到用户传进来的 key 值
     */
    const key = program.key ? program.key : process.env.npm_config_key
    console.log(key)
})

program.parse(process.argv)