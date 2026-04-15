Create table estore.categories (
    id int not null,
    category varchar(45) default null,
    parent_category_id int default null,
    primary key (id)
);

insert into estore.categories
(id, category, parent_category_id) values
(1, 'Men', null),
(2, 'Woman', null),
(3, 'Kids', null),
(4, 'Casual Wear', 1),
(5, 'Party Wear', 2),
(6, 'Foot Wear', 2),
(7, 'Accessories',3);

Create table estore.products(
   id int not null,
   product_name varchar(45) default null,
   product_description varchar(100) default null,
   price decimal(10,0) default null,
   ratings int default null,
   category_id int default null,
   product_img varchar(45),
   primary key(id),
   Key FK_Products_Categories_id(category_id),
   constraint FK_Products_Categories
   foreign key (category_id) references estore.categories(id)
   on update cascade on delete cascade
);

insert into estore.products(id, product_name, product_description, price, ratings, category_id, product_img )
values 
(1,'Jacket','Jacket is good',100,5,5,'shop-1.jpg'),
(2,'Purse','Very nice purse',25,3,7,'shop-2.jpg'),
(3,'Dress','Nice party dress',45,4,5,'shop-3.jpg'),
(4,'Denim Jeans','Quality Denim Jeans',50,4,4,'shop-4.jpg'),
(5,'Laced Boots','Premium leather boots',65,4,6,'shop-5.jpg'),
(6,'Back pack','Spacious backpack',20,5,7,'shop-6.jpg'),
(7,'Ear rings','Beautiful earrings',10,4,7,'shop-7.jpg'),
(8,'Scarf','Matching scarf',30,4,7,'shop-8.jpg'),
(9,'Boots','Black leather boots',70,4,6,'shop-9.jpg');

alter table estore.products
add column keywords varchar(200) null;

update estore.products set keywords = 'jacket,woolen,black' where id=1;
update estore.products set keywords = 'bag,purse,leather,black' where id=2;
update estore.products set keywords = 'dress,party,frock' where id=3;
update estore.products set keywords = 'denim,jeans,casual,pant' where id=4;
update estore.products set keywords = 'boots,laced,yellow' where id=5;
update estore.products set keywords = 'leather,black,bag' where id=6;
update estore.products set keywords = 'ear,rings,blue,golden' where id=7;
update estore.products set keywords = 'scarf,chocolate,party' where id=8;
update estore.products set keywords = 'leather,black,boots' where id=9;

Create table estore.users (
	id int not null auto_increment,
    email varchar(45) not null,
    firstName varchar(45) default null,
    lastName varchar(45) default null,
    address varchar(45) default null,
    city varchar(45) default null,
    state varchar(45) default null,
    pin varchar(10) default null,
    password varchar(500) default null,
    primary key(id)
    );

create table estore.orders(
	orderId int not null auto_increment,
    orderDate datetime default current_timestamp,
    userName varchar(100) default null,
    address varchar(200) default null,
    city varchar(45) default null,
    state varchar(45) default null,
    pin varchar(10) default null,
    total decimal(10,0) default null,
    userId int default null,
    primary key(orderId),
    key FK_User_id (userId),
    constraint FK_User foreign key (userId) references users (id)
);

create table estore.orderdetails(
	orderId int not null,
    productId int default null,
    qty int default null,
    price decimal(10,0) default null,
    amount decimal(10,0) default null,
    key FK_orderId_id (orderId),
    key FK_productId_id (productId),
    constraint FK_orderId foreign key (orderId) references orders (orderId),
    constraint FK_productId foreign key (productId) references products (id)
);
