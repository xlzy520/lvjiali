import React, { useState } from 'react';

import Container from '../../components/Container/index.tsx';
import Button from '../../components/Button/index.tsx';
// import Heading from '../../components/Heading';
import Text from '../../components/Text';
import { Upload, } from 'antd';
import { ReactComponent as Plus } from './plus.svg'

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

  const handleChange = () => {

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

  return (
    <Container className="container text-left py-12">
      <Text>可以上传我们班的同学的照片，可以多选上传哦</Text>
      <Upload
        action="https://www.fastmock.site/mock/9a27de0517dbcf277125fd3966b8703e/xlzy/upload"
        listType="picture"
        multiple
        defaultFileList={[...fileList]}
        // onPreview={this.handlePreview}
        onChange={handleChange}
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      {/*<Heading>License</Heading>*/}
      {/*<Text><strong>react-bnb-gallery</strong> is free to use for personal and commercial projects under <a href="https://github.com/peterpalau/react-bnb-gallery/blob/master/LICENSE" target="_blank" rel="noopener noreferrer">the MIT license</a>.</Text>*/}
    </Container>
  )
};

export default UploadPage;
