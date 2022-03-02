function operator(proxies) {
  proxies.map(res => {
    if (res.type == 'vmess') {
      res.tfo = `${res.tfo||false},vmess-aead=true`;
    }
  })
  return proxies
}
