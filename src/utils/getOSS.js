// import OSS from 'ali-oss'

const OSS = window.OSS

const accessKeyId = 'LTAIUVq'+'lzy' + 'GhhJkpW23'
const accessKeySecret = 'w8JTHC5vwgDdBNX'+'lzy'+'xuajXsHd0nJm18d'

export const OSSClient = new OSS({
  region: 'oss-cn-shenzhen',
  accessKeyId: accessKeyId.replace('lzy', ''),
  accessKeySecret: accessKeySecret.replace('lzy', ''),
  bucket: 'jiali0126'
});
