# ⭐赛法利娅的诡计 ฅ՞˶･֊･˶՞ฅ⭐
![微信图片_20250702211317_430x430.jpeg](https://cyrene.156234.xyz/file/1751462182869_微信图片_20250702211317_430x430.jpeg)
在线压缩图片到指定格式

完全使用Gemini Pro生成，部署在Cloudflare上的免费项目。

所有转换过程都在浏览器内部离线转换。

支持批量转换、质量设置和等比缩放，5个以上会自动打包zip，目前支持格式JPG、PNG、WebP、TIFF，支持HEIC导入

## Cloudflare worker部署流程

1.注册一个Cloudflare账号

2.下载并安装wrangler，关联登录Cloudflare

3.在命令行中wrangler init 一个新项目

4.在wrangler中新建worker static site项目

5.删除自动生成的wrangler.jsoc和public

6.复制本项目的src文件夹和wrangler.toml到你的项目文件夹中

7.打开wrangler.toml设置自定义域名（如果你没有域名，删除routes部分，默认分配的worker.dev域名会被众所周知的原因屏蔽）

8.cd到你的项目目录中，wrangler deploy，发布成功后会在命令行中显示访问链接

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=QiuranQAQ/image-converter&type=Date)](https://www.star-history.com/#QiuranQAQ/image-converter&Date)

