# 在 mac 电脑下配置 github 的 ssh

参考链接：https://juejin.cn/post/6993506356279902244，此处只为记录

## 目录

- Step1：验证是否有 ssh keys
- Step2：新建 ssh keys
- Step3：验证 github 是否链接
  打开命令行终端

### Step1：验证是否有 ssh keys

```js
ls -al ~/.ssh
```

看下返回的结果中是否已经存在了.pub 结尾的文件

### Step1.1：如果有.pub 结尾的文件直接打开

```js
cat ~/.ssh/id_rsa.pub
```

复制到 github 上的 SSH keys

### Step1.2：如果没有就跳到 Step2

### Step2：新建 ssh keys

### Step2.1：生成 ssh-keygen

```js
ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
```

其中，"your_email@example.com"是你的 github 关联的邮箱；

### Step2.2：确定 key 保存的目录（直接回车，选择默认）

image.png

### Step2.3：输入密码（可回车不需要密码，写密码要写两遍）

image.png

这个时候在默认路径下就生成了两个文件，公钥和私钥。

image.png

### Step2.4：将 SSH Key 添加到 ssh-agent

eval $(ssh-agent -s)
返回 agent 的 Pid

image.png

```js
ssh-add ~/.ssh/id_rsa
```

然后输入密码，没有密码的直接回车，提示添加成功

### Step2.5：打开 id_rsa.pub 文件，复制文件内容到 github

```js
# 查看目录
ls -al ~/.ssh
# 打开id_rsa.pub文件
cat ~/.ssh/id_rsa.pub
```

### Step3：验证 github 是否链接

```js
ssh -T git@github.com
```

这样 github 的 ssh 就可以链接 mac 了，可以上传和下载代码了~~
