var posts=["posts/3972.html","posts/10724.html","posts/1473.html","posts/37803.html","posts/31272.html","posts/54821.html","posts/27729.html","posts/63496.html","posts/53153.html","posts/14077.html","posts/7983.html","posts/42615.html","posts/59404.html","posts/13539.html","posts/14626.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };