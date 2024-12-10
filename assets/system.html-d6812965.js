const e=JSON.parse('{"key":"v-7aee17ae","path":"/Java/eightpart/system.html","title":"操作系统","lang":"zh-CN","frontmatter":{"order":12,"author":"zhiyu1998","title":"操作系统","category":["计算机基础","八股文"],"description":"💻操作系统 协程 & 虚拟线程 协程是一种用户态的轻量级线程。 协程不是由操作系统内核管理，而是完全由用户程序所控制，这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。 协程可以理解为可以暂停执行的函数。它拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直...","head":[["meta",{"property":"og:url","content":"https://github.com/yangfukai/test-csln/test-csln/Java/eightpart/system.html"}],["meta",{"property":"og:site_name","content":"CSLN"}],["meta",{"property":"og:title","content":"操作系统"}],["meta",{"property":"og:description","content":"💻操作系统 协程 & 虚拟线程 协程是一种用户态的轻量级线程。 协程不是由操作系统内核管理，而是完全由用户程序所控制，这样带来的好处就是性能得到了很大的提升，不会像线程切换那样消耗资源。 协程可以理解为可以暂停执行的函数。它拥有自己的寄存器上下文和栈。协程调度切换时，将寄存器上下文和栈保存到其他地方，在切回来的时候，恢复先前保存的寄存器上下文和栈，直..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://github.com/yangfukai/test-csln/test-csln/"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-12-09T09:51:09.000Z"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"操作系统"}],["meta",{"property":"article:author","content":"zhiyu1998"}],["meta",{"property":"article:modified_time","content":"2024-12-09T09:51:09.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"操作系统\\",\\"image\\":[\\"https://github.com/yangfukai/test-csln/test-csln/\\"],\\"dateModified\\":\\"2024-12-09T09:51:09.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"zhiyu1998\\"}]}"]]},"headers":[{"level":2,"title":"💻操作系统","slug":"💻操作系统","link":"#💻操作系统","children":[{"level":3,"title":"协程 & 虚拟线程","slug":"协程-虚拟线程","link":"#协程-虚拟线程","children":[]},{"level":3,"title":"进程和线程的区别","slug":"进程和线程的区别","link":"#进程和线程的区别","children":[]},{"level":3,"title":"Linux 进程的内存分布长什么样？","slug":"linux-进程的内存分布长什么样","link":"#linux-进程的内存分布长什么样","children":[]},{"level":3,"title":"什么是上下文切换？","slug":"什么是上下文切换","link":"#什么是上下文切换","children":[]},{"level":3,"title":"什么是文件描述符","slug":"什么是文件描述符","link":"#什么是文件描述符","children":[]},{"level":3,"title":"进程有哪几种状态?","slug":"进程有哪几种状态","link":"#进程有哪几种状态","children":[]},{"level":3,"title":"进程间的通信方式","slug":"进程间的通信方式","link":"#进程间的通信方式","children":[]},{"level":3,"title":"线程间的同步的方式","slug":"线程间的同步的方式","link":"#线程间的同步的方式","children":[]},{"level":3,"title":"进程的调度算法","slug":"进程的调度算法","link":"#进程的调度算法","children":[]},{"level":3,"title":"什么是死锁","slug":"什么是死锁","link":"#什么是死锁","children":[]},{"level":3,"title":"🌟 死锁的四个条件","slug":"🌟-死锁的四个条件","link":"#🌟-死锁的四个条件","children":[]},{"level":3,"title":"死锁的解决方式","slug":"死锁的解决方式","link":"#死锁的解决方式","children":[]},{"level":3,"title":"✨Reactor模型深入浅出","slug":"✨reactor模型深入浅出","link":"#✨reactor模型深入浅出","children":[]},{"level":3,"title":"⭐零拷贝深入浅出","slug":"零拷贝深入浅出","link":"#零拷贝深入浅出","children":[]},{"level":3,"title":"守护线程","slug":"守护线程","link":"#守护线程","children":[]},{"level":3,"title":"僵尸进程和孤儿进程","slug":"僵尸进程和孤儿进程","link":"#僵尸进程和孤儿进程","children":[]},{"level":3,"title":"💫I/O 多路复用：select/poll/epoll","slug":"💫i-o-多路复用-select-poll-epoll","link":"#💫i-o-多路复用-select-poll-epoll","children":[]},{"level":3,"title":"Linux内存申请的系统调用是什么？","slug":"linux内存申请的系统调用是什么","link":"#linux内存申请的系统调用是什么","children":[]}]}],"git":{"createdTime":1733737869000,"updatedTime":1733737869000,"contributors":[{"name":"carer.wang","email":"carer.wang@ott.ca","commits":1}]},"readingTime":{"minutes":80.59,"words":24178},"filePathRelative":"Java/eightpart/system.md","localizedDate":"2024年12月9日","autoDesc":true,"excerpt":""}');export{e as data};
