(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{389:function(s,a,t){"use strict";t.r(a);var n=t(2),e=Object(n.a)({},function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"通过资源配置运行容器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过资源配置运行容器","aria-hidden":"true"}},[s._v("#")]),s._v(" 通过资源配置运行容器")]),s._v(" "),t("h2",{attrs:{id:"概述"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[s._v("#")]),s._v(" 概述")]),s._v(" "),t("p",[s._v("我们知道通过 "),t("code",[s._v("run")]),s._v(" 命令启动容器非常麻烦，Docker 提供了 Compose 为我们解决了这个问题。那 Kubernetes 是如何解决这个问题的呢？其实很简单，使用 "),t("code",[s._v("kubectl create")]),s._v(" 命令就可以做到和 Compose 一样的效果了，该命令可以通过配置文件快速创建一个集群资源对象。")]),s._v(" "),t("h2",{attrs:{id:"创建-yaml-配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建-yaml-配置文件","aria-hidden":"true"}},[s._v("#")]),s._v(" 创建 YAML 配置文件")]),s._v(" "),t("h3",{attrs:{id:"部署-deployment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#部署-deployment","aria-hidden":"true"}},[s._v("#")]),s._v(" 部署 Deployment")]),s._v(" "),t("p",[s._v("创建一个名为 "),t("code",[s._v("nginx-deployment.yml")]),s._v(" 的配置文件")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# API 版本号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" extensions/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型，如：Pod/ReplicationController/Deployment/Service/Ingress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 元数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kind 的名称")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署的实例数量")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器标签的名字，发布 Service 时，selector 需要和这里对应")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置容器，数组类型，说明可以配置多个容器")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器名称")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 容器镜像")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.17")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 只有镜像不存在时，才会进行镜像拉取")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("imagePullPolicy")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" IfNotPresent\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露端口")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Pod 端口")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署")]),s._v("\nkubectl create -f nginx-deployment.yml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\nkubectl delete -f nginx-deployment.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"发布-service"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#发布-service","aria-hidden":"true"}},[s._v("#")]),s._v(" 发布 Service")]),s._v(" "),t("p",[s._v("创建一个名为 "),t("code",[s._v("nginx-service.yml")]),s._v(" 的配置文件")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# API 版本号")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型，如：Pod/ReplicationController/Deployment/Service/Ingress")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 元数据")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# Kind 的名称")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("http\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 暴露端口")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Service 暴露的端口")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("## Pod 上的端口，这里是将 Service 暴露的端口转发到 Pod 端口上")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 类型")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" LoadBalancer\n  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 标签选择器")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要和上面部署的 Deployment 标签名对应")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署")]),s._v("\nkubectl create -f nginx-service.yml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\nkubectl delete -f nginx-service.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"镜像拉取策略"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#镜像拉取策略","aria-hidden":"true"}},[s._v("#")]),s._v(" 镜像拉取策略")]),s._v(" "),t("p",[s._v("支持三种 ImagePullPolicy")]),s._v(" "),t("ul",[t("li",[t("strong",[s._v("Always：")]),s._v(" 不管镜像是否存在都会进行一次拉取")]),s._v(" "),t("li",[t("strong",[s._v("Never：")]),s._v(" 不管镜像是否存在都不会进行拉取")]),s._v(" "),t("li",[t("strong",[s._v("IfNotPresent：")]),s._v(" 只有镜像不存在时，才会进行镜像拉取")])]),s._v(" "),t("p",[s._v("注意")]),s._v(" "),t("ul",[t("li",[s._v("默认为 "),t("code",[s._v("IfNotPresent")]),s._v("，但 "),t("code",[s._v(":latest")]),s._v(" 标签的镜像默认为 "),t("code",[s._v("Always")])]),s._v(" "),t("li",[s._v("拉取镜像时 Docker 会进行校验，如果镜像中的 MD5 码没有变，则不会拉取镜像数据")]),s._v(" "),t("li",[s._v("生产环境中应该尽量避免使用 "),t("code",[s._v(":latest")]),s._v(" 标签，而开发环境中可以借助 "),t("code",[s._v(":latest")]),s._v(" 标签自动拉取最新的镜像")])]),s._v(" "),t("h2",{attrs:{id:"验证是否生效"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#验证是否生效","aria-hidden":"true"}},[s._v("#")]),s._v(" 验证是否生效")]),s._v(" "),t("h3",{attrs:{id:"查看-pod-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-pod-列表","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 Pod 列表")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get pods\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\n\nNAME                         READY   STATUS    RESTARTS   AGE\nnginx-app-64bb598779-2pplx   1/1     Running   0          25m\nnginx-app-64bb598779-824lc   1/1     Running   0          25m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"查看-deployment-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-deployment-列表","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 Deployment 列表")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl get deployment\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\nNAME        READY   UP-TO-DATE   AVAILABLE   AGE\nnginx-app   2/2     2            2           25m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h3",{attrs:{id:"查看-service-列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-service-列表","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 Service 列表")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("kubectl get service\n\n# 输出如下\nNAME         TYPE           CLUSTER-IP     EXTERNAL-IP   PORT(S)        AGE\nkubernetes   ClusterIP      10.96.0.1      <none>        443/TCP        20h\nnginx-http    LoadBalancer   10.98.49.142   <pending>     80:31631/TCP   14m\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("h3",{attrs:{id:"查看-service-详情"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#查看-service-详情","aria-hidden":"true"}},[s._v("#")]),s._v(" 查看 Service 详情")]),s._v(" "),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("kubectl describe "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" nginx-app\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 输出如下")]),s._v("\nName:                     nginx-http\nNamespace:                default\nLabels:                   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nAnnotations:              "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\nSelector:                 name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("nginx\nType:                     LoadBalancer\nIP:                       10.98.49.142\nPort:                     "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("unset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  80/TCP\nTargetPort:               80/TCP\nNodePort:                 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("unset"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("  31631/TCP\nEndpoints:                10.244.141.205:80,10.244.2.4:80\nSession Affinity:         None\nExternal Traffic Policy:  Cluster\nEvents:                   "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("none"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br")])]),t("h3",{attrs:{id:"通过浏览器访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#通过浏览器访问","aria-hidden":"true"}},[s._v("#")]),s._v(" 通过浏览器访问")]),s._v(" "),t("p",[s._v("通过浏览器访问 "),t("a",{attrs:{href:"http://www.qfdmy.com/wp-content/themes/quanbaike/go.php?url=aHR0cDovLzE5Mi4xNjguMTQxLjEyMDozMTYzMS8=",target:"_blank",rel:"noopener noreferrer"}},[s._v("http://192.168.141.120:31631/"),t("OutboundLink")],1),s._v(" ，出现 Nginx 欢迎页即表示成功")]),s._v(" "),t("h2",{attrs:{id:"集成环境部署"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#集成环境部署","aria-hidden":"true"}},[s._v("#")]),s._v(" 集成环境部署")]),s._v(" "),t("p",[s._v("也可以不区分配置文件，一次性部署 Deployment 和 Service，创建一个名为 "),t("code",[s._v("nginx.yml")]),s._v(" 的配置文件，配置内容如下：")]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" extensions/v1beta1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Deployment\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("app\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("replicas")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("template")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("image")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n        "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containerPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("---")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Service\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("http\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("ports")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("port")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("targetPort")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("80")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以指定 NodePort 端口，默认范围是：30000-32767")]),s._v("\n      "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# nodePort: 30080")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("type")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" LoadBalancer\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("selector")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" nginx\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br"),t("span",{staticClass:"line-number"},[s._v("26")]),t("br"),t("span",{staticClass:"line-number"},[s._v("27")]),t("br"),t("span",{staticClass:"line-number"},[s._v("28")]),t("br"),t("span",{staticClass:"line-number"},[s._v("29")]),t("br"),t("span",{staticClass:"line-number"},[s._v("30")]),t("br")])]),t("div",{staticClass:"language-bash line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 部署")]),s._v("\nkubectl create -f nginx.yml\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 删除")]),s._v("\nkubectl delete -f nginx.yml\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("h2",{attrs:{id:"附：扩展阅读"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#附：扩展阅读","aria-hidden":"true"}},[s._v("#")]),s._v(" 附：扩展阅读")]),s._v(" "),t("h3",{attrs:{id:"修改默认的端口范围"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#修改默认的端口范围","aria-hidden":"true"}},[s._v("#")]),s._v(" 修改默认的端口范围")]),s._v(" "),t("p",[s._v("Kubernetes 服务的 NodePort 默认端口范围是 30000-32767，在某些场合下，这个限制不太适用，我们可以自定义它的端口范围，操作步骤如下：")]),s._v(" "),t("p",[s._v("编辑 "),t("code",[s._v("vi /etc/kubernetes/manifests/kube-apiserver.yaml")]),s._v("配置文件，增加配置 "),t("code",[s._v("--service-node-port-range=2-65535")])]),s._v(" "),t("div",{staticClass:"language-yaml line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-yaml"}},[t("code",[t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("apiVersion")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" v1\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("kind")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" Pod\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("metadata")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("creationTimestamp")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token null important"}},[s._v("null")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("labels")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("component")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n    "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("tier")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" control"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plane\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("namespace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("system\n"),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("spec")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("containers")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token key atrule"}},[s._v("command")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" kube"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("apiserver\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在这里增加配置即可")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("service"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("port"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("range=2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("65535")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("advertise"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("address=192.168.141.150\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("allow"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("privileged=true\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("authorization"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("mode=Node"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("RBAC\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("ca"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("file=/etc/kubernetes/pki/ca.crt\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("admission"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("plugins=NodeRestriction\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("enable"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("bootstrap"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("token"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("auth=true\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("cafile=/etc/kubernetes/pki/etcd/ca.crt\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("certfile=/etc/kubernetes/pki/apiserver"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("etcd"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("-")]),s._v("client.crt\n// 以下配置省略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("...")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br")])]),t("p",[s._v("使用 "),t("code",[s._v("docker ps")]),s._v(" 命令找到 "),t("code",[s._v("kube-apiserver")]),s._v(" 容器，再使用 "),t("code",[s._v("docker restart <ApiServer 容器 ID>")]),s._v(" 即可生效。")])])},[],!1,null,null,null);a.default=e.exports}}]);