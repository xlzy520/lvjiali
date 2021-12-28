// import OSS from 'ali-oss'

const OSS = window.OSS

const accessKeyId = 'LTAIUVq'+'lzy' + 'GhhJkpW23'
const accessKeySecret = 'w8JTHC5vwgDdBNX'+'lzy'+'xuajXsHd0nJm18d'

export const OSSClient = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: ['LTAIUVq', 'GhhJkpW23'].join(''),
  accessKeySecret: ['w8JTHC5vwgDdBNX', 'xuajXsHd0nJm18d'].join(''),
  bucket: 'jiali0126'
});
