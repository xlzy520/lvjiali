import React, { useEffect } from 'react';


import Container from '../../components/Container';

const Talk = () => {
  
  useEffect(() => {
    new window.Valine({
      el:'#vcomment',
      appId: 'ALiFTYngIaFGwwEj9VCT4n9l-gzGzoHsz',
      appKey: 'mCYfe3LBckRUxPoGdXKR08mv',
      placeholder: '想对我们的同学们说什么呢',
      avatar: 'robohash',
      pageSize: 30,
      visitor: true,
      recordIP: true,
      enableQQ: true,
      meta: ['nick', 'name']
    })
  }, [])
  
  return (
    <Container className="container">
      <div className="tip custom-block">
        <p>尽情的留言吧！</p>
      </div>
      <div id="vcomment">
    
      </div>
    </Container>
  )
};

export default Talk;
