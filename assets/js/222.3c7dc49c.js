(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{436:function(r,t,a){"use strict";a.r(t);var e=a(2),v=Object(e.a)({},function(){var r=this,t=r.$createElement,a=r._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":r.$parent.slotKey}},[a("h1",{attrs:{id:"spring-boot-简史"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-简史","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring Boot 简史")]),r._v(" "),a("h2",{attrs:{id:"spring-1-x-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-1-x-时代","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring 1.x 时代")]),r._v(" "),a("p",[r._v("在 Spring1.x 时代，都是通过 xml 文件配置 bean，随着项目的不断扩大，需要将 xml 配置分放到不同的配置文件中，需要频繁的在 java 类和 xml 配置文件中切换。")]),r._v(" "),a("h2",{attrs:{id:"spring-2-x-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-2-x-时代","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring 2.x 时代")]),r._v(" "),a("p",[r._v("随着 JDK 1.5 带来的注解支持，Spring2.x 可以使用注解对 Bean 进行申明和注入，大大的减少了 xml 配置文件，同时也大大简化了项目的开发。")]),r._v(" "),a("p",[r._v("那么，问题来了，究竟是应该使用 xml 还是注解呢？")]),r._v(" "),a("p",[r._v("最佳实践：")]),r._v(" "),a("p",[r._v("应用的基本配置用 xml，比如：数据源、资源文件等\n业务开发用注解，比如：Service 中注入 bean 等")]),r._v(" "),a("h2",{attrs:{id:"spring-3-x-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-3-x-时代","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring 3.x 时代")]),r._v(" "),a("p",[r._v("从 Spring3.x 开始提供了 Java 配置方式，使用 Java 配置方式可以更好的理解你配置的 Bean，现在我们就处于这个时代，并且 Spring4.x 和 Spring boot 都推荐使用 java 配置的方式。")]),r._v(" "),a("h2",{attrs:{id:"spring-5-x-时代"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-5-x-时代","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring 5.x 时代")]),r._v(" "),a("p",[r._v("Spring5.x 是 Java 界首个支持响应式的 Web 框架，是 Spring 的一个重要版本，距离 Spring4.x 差不多四年。在此期间，大多数增强都是在 SpringBoot 项目中完成的，其最大的亮点就是提供了完整的端到端响应式编程的支持（新增 Spring WebFlux 模块）。")]),r._v(" "),a("p",[a("code",[r._v("Spring WebFlux")]),r._v(" 同时支持使用旧的 "),a("code",[r._v("Spring MVC")]),r._v(" 注解声明 "),a("code",[r._v("Reactive Controller")]),r._v("。和传统的 "),a("code",[r._v("MVC Controller")]),r._v(" 不同，"),a("code",[r._v("Reactive Controller")]),r._v(" 操作的是 非阻塞 的 "),a("code",[r._v("ServerHttpRequest")]),r._v(" 和 "),a("code",[r._v("ServerHttpResponse")]),r._v("，而不再是 "),a("code",[r._v("Spring MVC")]),r._v("里的 "),a("code",[r._v("HttpServletRequest")]),r._v(" 和 "),a("code",[r._v("HttpServletResponse")]),r._v("。")]),r._v(" "),a("p",[r._v("至此也代表着 Java 正式迎来了"),a("strong",[r._v("响应式异步编程")]),r._v("的时代。")]),r._v(" "),a("h1",{attrs:{id:"spring-boot-简介"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-简介","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring Boot 简介")]),r._v(" "),a("h2",{attrs:{id:"概述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#概述","aria-hidden":"true"}},[r._v("#")]),r._v(" 概述")]),r._v(" "),a("p",[r._v("随着动态语言的流行 (Ruby、Groovy、Scala、Node.js)，Java 的开发显得格外的笨重：繁多的配置、低下的开发效率、复杂的部署流程以及第三方技术集成难度大。")]),r._v(" "),a("p",[r._v("在上述环境下，Spring Boot 应运而生。它使用“习惯优于配置”（项目中存在大量的配置，此外还内置了一个习惯性的配置，让你无需手动进行配置）的理念让你的项目快速的运行起来。使用 Spring Boot 很容易创建一个独立运行（运行 Jar，内嵌 Servlet 容器）准生产级别的基于 Spring 框架的项目，使用 Spring Boot 你可以不用或者只需很少的 Spring 配置。")]),r._v(" "),a("h1",{attrs:{id:"spring-boot-优缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring-boot-优缺点","aria-hidden":"true"}},[r._v("#")]),r._v(" Spring Boot 优缺点")]),r._v(" "),a("h2",{attrs:{id:"优点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优点","aria-hidden":"true"}},[r._v("#")]),r._v(" 优点")]),r._v(" "),a("ul",[a("li",[r._v("快速构建项目")]),r._v(" "),a("li",[r._v("对主流开发框架的无配置集成")]),r._v(" "),a("li",[r._v("项目可独立运行，无需外部依赖 Servlet 容器")]),r._v(" "),a("li",[r._v("提供运行时的应用监控")]),r._v(" "),a("li",[r._v("极大地提高了开发、部署效率")]),r._v(" "),a("li",[r._v("与云计算的天然集成")])]),r._v(" "),a("h2",{attrs:{id:"缺点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#缺点","aria-hidden":"true"}},[r._v("#")]),r._v(" 缺点")]),r._v(" "),a("ul",[a("li",[r._v("版本迭代速度很快，一些模块改动很大")]),r._v(" "),a("li",[r._v("由于不用自己做配置，报错时很难定位")]),r._v(" "),a("li",[r._v("网上现成的解决方案比较少")])])])},[],!1,null,null,null);t.default=v.exports}}]);