// import OSS from 'ali-oss'

const OSS = window.OSS

const accessKeyId = 'LTAIUVq' + 'GhhJkpW23'
const accessKeySecret = 'w8JTHC5vwgDdBNX'+'xuajXsHd0nJm18d'

export const OSSClient = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId,
  accessKeySecret,
  bucket: 'jiali0126'
});
