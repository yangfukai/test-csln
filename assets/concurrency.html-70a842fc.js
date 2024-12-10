const e=JSON.parse('{"key":"v-7e175067","path":"/Java/eightpart/concurrency.html","title":"Java并发","lang":"zh-CN","frontmatter":{"order":3,"author":"zhiyu1998","title":"Java并发","category":["并发","八股文"],"description":"🕙 Java并发 请简要描述线程与进程的关系,区别及优缺点？ 图解进程和线程的关系 image-20220607152830775 从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的堆和方法区(JDK1.8之后的元空间)资源，但是每个线程有自己的程序计数器、虚拟机栈和本地方法栈。 总结：线程是进程划分成的更小的运行单位。线程和进程最大的不同...","head":[["meta",{"property":"og:url","content":"https://github.com/yangfukai/test-csln/test-csln/Java/eightpart/concurrency.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"Java并发"}],["meta",{"property":"og:description","content":"🕙 Java并发 请简要描述线程与进程的关系,区别及优缺点？ 图解进程和线程的关系 image-20220607152830775 从上图可以看出：一个进程中可以有多个线程，多个线程共享进程的堆和方法区(JDK1.8之后的元空间)资源，但是每个线程有自己的程序计数器、虚拟机栈和本地方法栈。 总结：线程是进程划分成的更小的运行单位。线程和进程最大的不同..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/yangfukai/test-csln/test-csln/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-09T09:51:09.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"Java并发"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2024-12-09T09:51:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Java并发\\",\\"image\\":[\\"https://github.com/yangfukai/test-csln/test-csln/\\"],\\"dateModified\\":\\"2024-12-09T09:51:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"🕙 Java并发","slug":"🕙-java并发","link":"#🕙-java并发","children":[{"level":3,"title":"请简要描述线程与进程的关系,区别及优缺点？","slug":"请简要描述线程与进程的关系-区别及优缺点","link":"#请简要描述线程与进程的关系-区别及优缺点","children":[]},{"level":3,"title":"Java线程的创建方式","slug":"java线程的创建方式","link":"#java线程的创建方式","children":[]},{"level":3,"title":"JMM 是什么？","slug":"jmm-是什么","link":"#jmm-是什么","children":[]},{"level":3,"title":"聊聊volatile","slug":"聊聊volatile","link":"#聊聊volatile","children":[]},{"level":3,"title":"CAS 是什么？","slug":"cas-是什么","link":"#cas-是什么","children":[]},{"level":3,"title":"说说 sleep() 方法和 wait() 方法区别和共同点?","slug":"说说-sleep-方法和-wait-方法区别和共同点","link":"#说说-sleep-方法和-wait-方法区别和共同点","children":[]},{"level":3,"title":"为什么我们调用 start() 方法时会执行 run() 方法，为什么我们不能直接调用 run() 方法？","slug":"为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法","link":"#为什么我们调用-start-方法时会执行-run-方法-为什么我们不能直接调用-run-方法","children":[]},{"level":3,"title":"synchronized汇总","slug":"synchronized汇总","link":"#synchronized汇总","children":[]},{"level":3,"title":"⭐ThreadLocal 原理","slug":"⭐threadlocal-原理","link":"#⭐threadlocal-原理","children":[]},{"level":3,"title":"实现 Runnable 接口和 Callable 接口的区别","slug":"实现-runnable-接口和-callable-接口的区别","link":"#实现-runnable-接口和-callable-接口的区别","children":[]},{"level":3,"title":"执行 execute()方法和 submit()方法的区别是什么呢？","slug":"执行-execute-方法和-submit-方法的区别是什么呢","link":"#执行-execute-方法和-submit-方法的区别是什么呢","children":[]},{"level":3,"title":"🔥 如何创建线程池","slug":"🔥-如何创建线程池","link":"#🔥-如何创建线程池","children":[]},{"level":3,"title":"JUC 包中的原子类是哪 4 类?","slug":"juc-包中的原子类是哪-4-类","link":"#juc-包中的原子类是哪-4-类","children":[]},{"level":3,"title":"能不能给我简单介绍一下 AtomicInteger 类","slug":"能不能给我简单介绍一下-atomicinteger-类","link":"#能不能给我简单介绍一下-atomicinteger-类","children":[]},{"level":3,"title":"🔥 请你说一下自己对于 AQS 原理的理解","slug":"🔥-请你说一下自己对于-aqs-原理的理解","link":"#🔥-请你说一下自己对于-aqs-原理的理解","children":[]},{"level":3,"title":"聊聊 ReentrantLock","slug":"聊聊-reentrantlock","link":"#聊聊-reentrantlock","children":[]},{"level":3,"title":"CyclicBarrier 和 CountDownLatch 的区别","slug":"cyclicbarrier-和-countdownlatch-的区别","link":"#cyclicbarrier-和-countdownlatch-的区别","children":[]},{"level":3,"title":"乐观锁和悲观锁的区别","slug":"乐观锁和悲观锁的区别","link":"#乐观锁和悲观锁的区别","children":[]}]}],"git":{"createdTime":1733737869000,"updatedTime":1733737869000,"contributors":[{"name":"carer.wang","email":"carer.wang@ott.ca","commits":1}]},"readingTime":{"minutes":93.24,"words":27971},"filePathRelative":"Java/eightpart/concurrency.md","localizedDate":"2024年12月9日","autoDesc":true,"excerpt":""}');export{e as data};
