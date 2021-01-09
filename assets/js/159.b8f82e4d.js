(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{373:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"kubernetes-安装前准备"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#kubernetes-安装前准备","aria-hidden":"true"}},[s._v("#")]),s._v(" Kubernetes 安装前准备")]),s._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),a("p",[s._v("本次安装采用 Ubuntu Server X64 18.04 LTS 版本安装 kubernetes 集群环境，此次对虚拟机会有些基本要求，如下：")]),s._v(" "),a("ul",[a("li",[s._v("OS：Ubuntu Server X64 18.04 LTS（16.04 版本步骤相同，再之前则不同）")]),s._v(" "),a("li",[s._v("CPU：最低要求，1 CPU 2 核")]),s._v(" "),a("li",[s._v("内存：最低要求，2GB")]),s._v(" "),a("li",[s._v("磁盘：最低要求，20GB")])]),s._v(" "),a("p",[s._v("生产中我们需要部署 "),a("strong",[s._v("高可用集群")]),s._v(" ，接下来如何部署 "),a("strong",[s._v("Kubernetes")]),s._v(" 高可用集群")]),s._v(" "),a("h2",{attrs:{id:"节点配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#节点配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 节点配置")]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[s._v("主机名")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("IP")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("角色")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("系统")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("CPU/内存")]),s._v(" "),a("th",{staticStyle:{"text-align":"left"}},[s._v("磁盘")])])]),s._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("kubernetes-master")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.141.110")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Master")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Ubuntu Server 18.04")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("2 核 2G")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("20G")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("kubernetes-node-01")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.141.120")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Node")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Ubuntu Server 18.04")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("2 核 4G")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("20G")])]),s._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"left"}},[s._v("kubernetes-node-02")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("192.168.141.121")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Node")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("Ubuntu Server 18.04")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("2 核 4G")]),s._v(" "),a("td",{staticStyle:{"text-align":"left"}},[s._v("20G")])])])]),s._v(" "),a("h2",{attrs:{id:"统一环境配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#统一环境配置","aria-hidden":"true"}},[s._v("#")]),s._v(" 统一环境配置")]),s._v(" "),a("blockquote",[a("p",[s._v("特别注意：以下步骤请在制作 VMware 镜像时一并完成，避免逐台安装的痛苦")])]),s._v(" "),a("h3",{attrs:{id:"关闭交换空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭交换空间","aria-hidden":"true"}},[s._v("#")]),s._v(" 关闭交换空间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("swapoff -a\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"避免开机启动交换空间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#避免开机启动交换空间","aria-hidden":"true"}},[s._v("#")]),s._v(" 避免开机启动交换空间")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 注释 swap 开头的行")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/fstab\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"关闭防火墙"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#关闭防火墙","aria-hidden":"true"}},[s._v("#")]),s._v(" 关闭防火墙")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ufw disable\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"配置-dns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-dns","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 DNS")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 取消 DNS 行注释，并增加 DNS 配置如：114.114.114.114，修改后重启下计算机")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/systemd/resolved.conf\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("h3",{attrs:{id:"安装-docker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-docker","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Docker")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新软件源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装所需依赖")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" apt-transport-https ca-certificates "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" software-properties-common\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 GPG 证书")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" -fsSL http://mirrors.aliyun.com/docker-ce/linux/ubuntu/gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 新增软件源信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" add-apt-repository "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"deb [arch=amd64] http://mirrors.aliyun.com/docker-ce/linux/ubuntu '),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),s._v("lsb_release -cs"),a("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(' stable"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 再次更新软件源")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y update\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 Docker CE 版")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" -y "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" docker-ce\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br")])]),a("h3",{attrs:{id:"配置-docker-加速器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-docker-加速器","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 Docker 加速器")]),s._v(" "),a("blockquote",[a("p",[s._v("特别注意：这里使用你自己阿里云镜像加速器，地址如："),a("code",[s._v("https://yourself.mirror.aliyuncs.com")]),s._v("，在阿里云控制台的 "),a("strong",[s._v("容器镜像服务 -> 镜像加速器")]),s._v(" 菜单中可以找到")])]),s._v(" "),a("p",[s._v("在 "),a("code",[s._v("/etc/docker/daemon.json")]),s._v(" 中写入如下内容（以下配置修改 "),a("code",[s._v("cgroup")]),s._v(" 驱动为 "),a("code",[s._v("systemd")]),s._v("，满足 "),a("code",[s._v("K8S")]),s._v(" 建议）")]),s._v(" "),a("blockquote",[a("p",[s._v("注意，一定要保证该文件符合 JSON 规范，否则 Docker 将不能启动。")])]),s._v(" "),a("div",{staticClass:"language-json line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"exec-opts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"native.cgroupdriver=systemd"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log-driver"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"json-file"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"log-opts"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"max-size"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"100m"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"registry-mirrors"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://oxf7fdmw.mirror.aliyuncs.com"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://dockerhub.azk8s.cn"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"https://registry.docker-cn.com"')]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[s._v('"storage-driver"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"overlay2"')]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("p",[s._v("验证加速器是否配置成功：")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" systemctl restart docker\ndocker info\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 出现如下语句即表示配置成功")]),s._v("\nRegistry Mirrors:\n https://oxf7fdmw.mirror.aliyuncs.com/\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br")])]),a("h2",{attrs:{id:"安装-kubernetes-必备工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-kubernetes-必备工具","aria-hidden":"true"}},[s._v("#")]),s._v(" 安装 Kubernetes 必备工具")]),s._v(" "),a("p",[s._v("安装三个 Kubernetes 必备工具，分别为 kubeadm，kubelet，kubectl")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装系统工具")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y apt-transport-https\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 GPG 证书")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" https://mirrors.aliyun.com/kubernetes/apt/doc/apt-key.gpg "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" apt-key "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("add")]),s._v(" -\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 写入软件源；注意：我们用系统代号为 bionic，但目前阿里云不支持，所以沿用 16.04 的 xenial")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<<")]),s._v(" EOF "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("/etc/apt/sources.list.d/kubernetes.list\ndeb https://mirrors.aliyun.com/kubernetes/apt/ kubernetes-xenial main\nEOF\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y kubelet kubeadm kubectl\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br")])]),a("h2",{attrs:{id:"同步时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#同步时间","aria-hidden":"true"}},[s._v("#")]),s._v(" 同步时间")]),s._v(" "),a("p",[a("strong",[s._v("设置时区")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("dpkg-reconfigure tzdata\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("ul",[a("li",[a("p",[s._v("选择 "),a("strong",[s._v("Asia（亚洲）")])])]),s._v(" "),a("li",[a("p",[s._v("选择 "),a("strong",[s._v("Shanghai（上海）")])])])]),s._v(" "),a("p",[a("strong",[s._v("时间同步")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装 ntpdate")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" ntpdate\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 设置系统时间与网络时间同步（cn.pool.ntp.org 位于中国的公共 NTP 服务器）")]),s._v("\nntpdate cn.pool.ntp.org\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 将系统时间写入硬件时间")]),s._v("\nhwclock --systohc\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br")])]),a("p",[a("strong",[s._v("确认时间")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("date")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下（自行对照与系统时间是否一致）")]),s._v("\nSun Jun  2 22:02:35 CST 2019\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h2",{attrs:{id:"配置-ipvs（重启后失效，每次安装kubernetes前先执行下-bin-bash）"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置-ipvs（重启后失效，每次安装kubernetes前先执行下-bin-bash）","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 IPVS（重启后失效，每次安装Kubernetes前先执行下 #!/bin/bash）")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装系统工具")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y ipset ipvsadm\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置并加载 IPVS 模块")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /etc/sysconfig/modules/\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysconfig/modules/ipvs.modules\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入如下内容")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#!/bin/bash")]),s._v("\nmodprobe -- ip_vs\nmodprobe -- ip_vs_rr\nmodprobe -- ip_vs_wrr\nmodprobe -- ip_vs_sh\nmodprobe -- nf_conntrack_ipv4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本，注意：如果重启则需要重新运行该脚本")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("chmod")]),s._v(" 755 /etc/sysconfig/modules/ipvs.modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("bash")]),s._v(" /etc/sysconfig/modules/ipvs.modules "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" lsmod "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" -e ip_vs -e nf_conntrack_ipv4\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 执行脚本输出如下")]),s._v("\nip_vs_sh               16384  0\nip_vs_wrr              16384  0\nip_vs_rr               16384  0\nip_vs                 147456  6 ip_vs_rr,ip_vs_sh,ip_vs_wrr\nnf_conntrack_ipv4      16384  3\nnf_defrag_ipv4         16384  1 nf_conntrack_ipv4\nnf_conntrack          131072  8 xt_conntrack,nf_nat_masquerade_ipv4,nf_conntrack_ipv4,nf_nat,ipt_MASQUERADE,nf_nat_ipv4,nf_conntrack_netlink,ip_vs\nlibcrc32c              16384  4 nf_conntrack,nf_nat,raid456,ip_vs\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br")])]),a("h2",{attrs:{id:"配置内核参数"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置内核参数","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置内核参数")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置参数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/sysctl.d/k8s.conf\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输入如下内容")]),s._v("\nnet.bridge.bridge-nf-call-ip6tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.bridge.bridge-nf-call-iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.ip_nonlocal_bind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.ip_forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nvm.swappiness"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("0\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用参数")]),s._v("\nsysctl --system\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 应用参数输出如下（找到 Applying /etc/sysctl.d/k8s.conf 开头的日志）")]),s._v("\n* Applying /etc/sysctl.d/10-console-messages.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nkernel.printk "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 4 4 1 7\n* Applying /etc/sysctl.d/10-ipv6-privacy.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n* Applying /etc/sysctl.d/10-kernel-hardening.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nkernel.kptr_restrict "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\n* Applying /etc/sysctl.d/10-link-restrictions.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nfs.protected_hardlinks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nfs.protected_symlinks "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\n* Applying /etc/sysctl.d/10-lxd-inotify.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nfs.inotify.max_user_instances "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1024\n* Applying /etc/sysctl.d/10-magic-sysrq.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nkernel.sysrq "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 176\n* Applying /etc/sysctl.d/10-network-security.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnet.ipv4.conf.default.rp_filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.conf.all.rp_filter "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.tcp_syncookies "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\n* Applying /etc/sysctl.d/10-ptrace.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nkernel.yama.ptrace_scope "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\n* Applying /etc/sysctl.d/10-zeropage.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nvm.mmap_min_addr "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 65536\n* Applying /usr/lib/sysctl.d/50-default.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnet.ipv4.conf.all.promote_secondaries "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.core.default_qdisc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fq_codel\n* Applying /etc/sysctl.d/99-sysctl.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n* Applying /etc/sysctl.d/k8s.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\nnet.bridge.bridge-nf-call-ip6tables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.bridge.bridge-nf-call-iptables "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.ip_nonlocal_bind "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nnet.ipv4.ip_forward "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 1\nvm.swappiness "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" 0\n* Applying /etc/sysctl.conf "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br")])]),a("h2",{attrs:{id:"修改-cloud-cfg"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改-cloud-cfg","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改 cloud.cfg")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/cloud/cloud.cfg\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 该配置默认为 false，修改为 true 即可")]),s._v("\npreserve_hostname: "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("true")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("p",[a("strong",[s._v("接下来在此基础上克隆虚拟机 继续接下来的安装")])])])},[],!1,null,null,null);t.default=e.exports}}]);