use koa2_weibo_db;

-- select * from users;
-- select username, nickname from users where username='zhangsan' and `password`='123';

-- select * from blogs order by id desc;

-- insert into users(username, `password`, nickname) values('lisi', '123', '李四');

-- delete from users where id=3;

-- insert into blogs(title, content,userid) values('yyyy', 'dqwr23', 5);

-- update blogs set content='luluil' where id=2;

-- select count(id) as `count` from blogs;

-- 分页
-- select * from blogs order by id desc limit 2 offset 2;

-- 外键: 创建外键 更新限制 删除级联 连表查询

-- select * from blogs inner join users on users.id = blogs.userid;

-- 连表查询不一定有外键
select blogs.*, users.username, users.nickname from blogs inner join users on users.id = blogs.userid
where users.username = 'lisi';

