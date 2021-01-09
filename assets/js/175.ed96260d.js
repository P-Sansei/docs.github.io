(window.webpackJsonp=window.webpackJsonp||[]).push([[175],{390:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"配置-kubeadm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-kubeadm","aria-hidden":"true"}},[s._v("#")]),s._v(" 配置 kubeadm")]),s._v(" "),t("h2",{attrs:{id:"初始化-master"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#初始化-master","aria-hidden":"true"}},[s._v("#")]),s._v(" 初始化 Master")]),s._v(" "),t("ul",[t("li",[s._v("创建工作目录并导出配置文件")])]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 创建工作目录")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p /usr/local/kubernetes/cluster\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导出配置文件到工作目录")]),s._v("\nkubeadm config print init-defaults --kubeconfig ClusterConfiguration "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" kubeadm.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("ul",[t("li",[s._v("修改配置文件")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bootstrapTokens")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("groups")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" system"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("bootstrappers"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("kubeadm"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("default"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("token\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("token")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" abcdef.0123456789abcdef\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ttl")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 24h0m0s\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("usages")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" signing\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" authentication\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" InitConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("localAPIEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改为主节点 IP")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("advertiseAddress")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 192.168.141.150\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("bindPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6443")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("nodeRegistration")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("criSocket")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/run/dockershim.sock\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("master"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("01")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("taints")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("effect")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" NoSchedule\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("key")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("role.kubernetes.io/master\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiServer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("timeoutForControlPlane")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 4m0s\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeadm.k8s.io/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("certificatesDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /etc/kubernetes/pki\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("clusterName")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubernetes\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 Keepalived 地址和 HAProxy 端口")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controlPlaneEndpoint")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"192.168.141.200:6444"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("controllerManager")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dns")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" CoreDNS\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("etcd")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("local")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dataDir")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" /var/lib/etcd\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 国内不能访问 Google，修改为阿里云")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imageRepository")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" registry.aliyuncs.com/google_containers\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ClusterConfiguration\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 修改版本号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kubernetesVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1.14.3\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("networking")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("dnsDomain")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" cluster.local\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 主要修改在这里，替换 Calico 网段为我们虚拟机不重叠的网段（这里用的是 Flannel 默认网段）")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("podSubnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10.244.0.0/16"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("serviceSubnet")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" 10.96.0.0/12\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("scheduler")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 开启 IPVS 模式")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kubeproxy.config.k8s.io/v1alpha1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" KubeProxyConfiguration\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("featureGates")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("SupportIPVSProxyMode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token boolean important"}},[s._v("true")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("mode")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" ipvs\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br"),t("span",{staticClass:"line-number"},[s._v("31")]),t("br"),t("span",{staticClass:"line-number"},[s._v("32")]),t("br"),t("span",{staticClass:"line-number"},[s._v("33")]),t("br"),t("span",{staticClass:"line-number"},[s._v("34")]),t("br"),t("span",{staticClass:"line-number"},[s._v("35")]),t("br"),t("span",{staticClass:"line-number"},[s._v("36")]),t("br"),t("span",{staticClass:"line-number"},[s._v("37")]),t("br"),t("span",{staticClass:"line-number"},[s._v("38")]),t("br"),t("span",{staticClass:"line-number"},[s._v("39")]),t("br"),t("span",{staticClass:"line-number"},[s._v("40")]),t("br"),t("span",{staticClass:"line-number"},[s._v("41")]),t("br"),t("span",{staticClass:"line-number"},[s._v("42")]),t("br"),t("span",{staticClass:"line-number"},[s._v("43")]),t("br"),t("span",{staticClass:"line-number"},[s._v("44")]),t("br"),t("span",{staticClass:"line-number"},[s._v("45")]),t("br"),t("span",{staticClass:"line-number"},[s._v("46")]),t("br"),t("span",{staticClass:"line-number"},[s._v("47")]),t("br"),t("span",{staticClass:"line-number"},[s._v("48")]),t("br"),t("span",{staticClass:"line-number"},[s._v("49")]),t("br"),t("span",{staticClass:"line-number"},[s._v("50")]),t("br"),t("span",{staticClass:"line-number"},[s._v("51")]),t("br"),t("span",{staticClass:"line-number"},[s._v("52")]),t("br")])]),t("h2",{attrs:{id:"查看和拉取镜像"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看和拉取镜像","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看和拉取镜像")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 查看所需镜像列表")]),s._v("\nkubeadm config images list --config kubeadm.yml\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 拉取镜像")]),s._v("\nkubeadm config images pull --config kubeadm.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br")])]),t("h2",{attrs:{id:"kubeadm-初始化"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-初始化","aria-hidden":"true"}},[s._v("#")]),s._v(" kubeadm 初始化")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# kubeadm 初始化")]),s._v("\nkubeadm init --config"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("kubeadm.yml --experimental-upload-certs "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tee")]),s._v(" kubeadm-init.log\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置 kubectl")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.kube\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -i /etc/kubernetes/admin.conf "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.kube/config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 非 ROOT 用户执行")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("chown")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -u"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token variable"}},[t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$(")]),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("id")]),s._v(" -g"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v(")")])]),s._v(" "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$HOME")]),s._v("/.kube/config\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 验证是否成功")]),s._v("\nkubectl get node\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 能够打印出节点信息即表示成功")]),s._v("\nNAME                STATUS     ROLES    AGE     VERSION\nkubernetes-master   NotReady   master   8m40s   v1.15.2\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br")])]),t("h2",{attrs:{id:"kubeadm-init-的执行过程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kubeadm-init-的执行过程","aria-hidden":"true"}},[s._v("#")]),s._v(" kubeadm init 的执行过程")]),s._v(" "),t("ul",[t("li",[s._v("init：指定版本进行初始化操作")]),s._v(" "),t("li",[s._v("preflight：初始化前的检查和下载所需要的 Docker 镜像文件")]),s._v(" "),t("li",[s._v("kubelet-start：生成 kubelet 的配置文件 "),t("code",[s._v("var/lib/kubelet/config.yaml")]),s._v("，没有这个文件 kubelet 无法启动，所以初始化之前的 kubelet 实际上启动不会成功")]),s._v(" "),t("li",[s._v("certificates：生成 Kubernetes 使用的证书，存放在 "),t("code",[s._v("/etc/kubernetes/pki")]),s._v(" 目录中")]),s._v(" "),t("li",[s._v("kubeconfig：生成 KubeConfig 文件，存放在 "),t("code",[s._v("/etc/kubernetes")]),s._v(" 目录中，组件之间通信需要使用对应文件")]),s._v(" "),t("li",[s._v("control-plane：使用 "),t("code",[s._v("/etc/kubernetes/manifest")]),s._v(" 目录下的 YAML 文件，安装 Master 组件")]),s._v(" "),t("li",[s._v("etcd：使用 "),t("code",[s._v("/etc/kubernetes/manifest/etcd.yaml")]),s._v(" 安装 Etcd 服务")]),s._v(" "),t("li",[s._v("wait-control-plane：等待 control-plan 部署的 Master 组件启动")]),s._v(" "),t("li",[s._v("apiclient：检查 Master 组件服务状态。")]),s._v(" "),t("li",[s._v("uploadconfig：更新配置")]),s._v(" "),t("li",[s._v("kubelet：使用 configMap 配置 kubelet")]),s._v(" "),t("li",[s._v("patchnode：更新 CNI 信息到 Node 上，通过注释的方式记录")]),s._v(" "),t("li",[s._v("mark-control-plane：为当前节点打标签，打了角色 Master，和不可调度标签，这样默认就不会使用 Master 节点来运行 Pod")]),s._v(" "),t("li",[s._v("bootstrap-token：生成 token 记录下来，后边使用 "),t("code",[s._v("kubeadm join")]),s._v(" 往集群中添加节点时会用到")]),s._v(" "),t("li",[s._v("addons：安装附加组件 CoreDNS 和 kube-proxy")])])])},[],!1,null,null,null);a.default=e.exports}}]);