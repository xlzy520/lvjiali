// @ts-nocheck

import React, { useState } from 'react';

// import AV from 'leancloud-storage'
const AV = window.AV


import Container from '../../components/Container/index.tsx';
import Button from '../../components/Button/index.tsx';
// import Heading from '../../components/Heading';
import Text from '../../components/Text';
// import { Upload, } from 'antd';
import { ReactComponent as Plus } from './plus.svg'
// Import React FilePond
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css'

import * as FilePondOrigin from 'filepond';
import zh_CN from 'filepond/locale/zh-cn.js';
FilePondOrigin.setOptions(zh_CN);


import { FilePond, registerPlugin } from 'react-filepond'

// Import FilePond styles
import 'filepond/dist/filepond.min.css'


// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
// `npm i filepond-plugin-image-preview filepond-plugin-image-exif-orientation --save`
import FilePondPluginImageExifOrientation from 'filepond-plugin-image-exif-orientation'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'


// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

import { OSSClient } from '../../utils/getOSS.js'

const UploadPage = () => {
  const [fileList, setFileList] = useState([
    // {
    //   uid: '-1',
    //   name: 'xxx.png',
    //   status: 'done',
    //   url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    //   thumbUrl: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    // },
    // {
    //   uid: '-2',
    //   name: 'yyy.png',
    //   status: 'error',
    // },
  ]);

  const addPhotoRecord = (data) => {
    const { name, width, height, url } = data;
    const query = new AV.Query('Photos')
    const Photos = AV.Object.extend('Photos')
    new Photos({
      name,
      url,
      width,
      height,
      ua: navigator.userAgent,
    }).save()
    .then(() => {

    })
    .catch(console.error)
  }

  const handleChange = ({fileList}) => {
    // console.log(fileList, client);
  }

  const handlePreview = ({file, fileList}) => {
    console.log(file, fileList);
  }

  const upload2OSS = (fileList) => {
    fileList.forEach((item) => {
      OSSClient.put('/' + item.name, item.raw)
      .then((res) => {
        console.log(res);
        if (res.res.status === 200) {
          //上传成功
          // this.fileList.splice(
          //   this.fileList.findIndex((file) => file.name === item.name),
          //   1
          // )
          // this.$message.info('上传成功' + item.name)
        } else {
          // this.$message.error('上传失败')
        }
      })
      .catch((err) => {
        console.log(err)
      })
    })

  }

  const buttonCustomStyle = {
    marginTop: '16px',
    marginBottom: '24px',
  };

  const uploadButton = (
    <Button
      customStyle={buttonCustomStyle}
      primary
      large
    >
      上传
    </Button>
  );

  const host = 'http://jiali0126.oss-cn-shenzhen.aliyuncs.com';

  const myServer = {
    // url: host,
    process: (fieldName, file, metadata, load, error, progress, abort, transfer, options) => {
      console.log(file);
      OSSClient.put('/' + Date.now(), file)
      .then((res) => {
        console.log(res);
        if (res.res.status === 200) {
          load(res)
          const fileUrl = URL.createObjectURL(file)
          const img = new Image()
          img.src = fileUrl
          img.onload = () => {
            addPhotoRecord({
              name: file.name, url: res.url,
              width: img.width,
              height: img.height}
            )
          }
          //上传成功
          // this.fileList.splice(
          //   this.fileList.findIndex((file) => file.name === item.name),
          //   1
          // )
          // this.$message.info('上传成功' + item.name)
        } else {
          error('上传失败')
          // this.$message.error('上传失败')
        }
      })
      .catch((err) => {
        console.log(err)
      })
      // fieldName is the name of the input field
      // file is the actual file object to send

      // const formData = new FormData();
      // formData.append(fieldName, file, file.name);

      // const request = new XMLHttpRequest();
      // request.open('POST', 'url-to-api');
      //
      // // Should call the progress method to update the progress to 100% before calling load
      // // Setting computable to false switches the loading indicator to infinite mode
      // request.upload.onprogress = (e) => {
      //   progress(e.lengthComputable, e.loaded, e.total);
      // };
      //
      // // Should call the load method when done and pass the returned server file id
      // // this server file id is then used later on when reverting or restoring a file
      // // so your server knows which file to return without exposing that info to the client
      // request.onload = function () {
      //   if (request.status >= 200 && request.status < 300) {
      //     // the load method accepts either a string (id) or an object
      //     load(request.responseText);
      //   } else {
      //     // Can call the error method if something is wrong, should exit after
      //     error('oh no');
      //   }
      // };
      //
      // request.send(formData);

      // Should expose an abort method so the request can be cancelled
      return {
        abort: () => {
          // This function is entered if the user has tapped the cancel button
          // request.abort();

          // Let FilePond know the request has been cancelled
          abort();
        },
      };
    },
    // process: {
    //   ondata: (formData) => {
    //     formData.append('Hello', 'World');
    //     return formData;
    //   },
    // },
  }

  return (
    <Container className="container text-left pt-8 pb-12">
      <div className="tip custom-block">
        <p>可以上传我们班同学或老师的照片，可以批量上传哦</p>
      </div>
      {/*<img src="https://jiali0126.oss-cn-shenzhen.aliyuncs.com/1.jpg" alt=""/>*/}
      <FilePond
        className="mt-8"
        files={fileList}
        onupdatefiles={setFileList}
        allowMultiple={true}
        accept="image/png, image/jpeg, image/gif"
        server={myServer}
        name="files"
        allowImageExifOrientation
        labelIdle='拖入你的文件 或者 <span class="filepond--label-action">选择</span>'
      />
     </Container>
  )
};

export default UploadPage;
