/*

[rewrite_local]
^https?:\/\/api\.waixiaodian\.com\/zwyd\/common\/config url script-response-body https://github.com/wzhjm/qx_tools/main/去发圈.js

[mitm]
hostname = api.waixiaodian.com

 */

if ($response.body != 'undefined') {
  var body = $response.body;
  var chxm1023 = JSON.parse(body);
  const urla = '/zwyd/common/config';


  if ($request.url.indexOf(urla) != -1) {
    body = body.replace('解封水印，关注趣发圈圈|公众号：qufaquan', '');
  }
  $done({ body });
}
